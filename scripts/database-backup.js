#!/usr/bin/env node
/**
 * Database Backup Script
 * Creates backups of the production database with compression and metadata
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { Client } = require('pg');
require('dotenv').config();

const BACKUP_DIR = path.join(__dirname, '../backups');
const MAX_BACKUPS = 30; // Keep last 30 backups

async function createBackup(options = {}) {
  console.log('💾 Creating database backup...');
  
  // Validate environment
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is required');
    process.exit(1);
  }

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`📁 Created backup directory: ${BACKUP_DIR}`);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T');
  const date = timestamp[0];
  const time = timestamp[1].split('.')[0];
  const backupName = `elmag-insurance-db-${date}_${time}`;
  
  const backupFile = path.join(BACKUP_DIR, `${backupName}.sql`);
  const compressedFile = path.join(BACKUP_DIR, `${backupName}.sql.gz`);
  const metadataFile = path.join(BACKUP_DIR, `${backupName}.json`);

  try {
    // Get database information
    console.log('📊 Collecting database metadata...');
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL.includes('localhost') ? false : {
        rejectUnauthorized: false
      }
    });

    await client.connect();

    // Collect database statistics
    const dbInfo = await client.query('SELECT version(), current_database(), current_user');
    const tableStats = await client.query(`
      SELECT 
        t.table_name,
        COALESCE(s.n_tup_ins, 0) as row_count,
        pg_size_pretty(pg_total_relation_size(c.oid)) as table_size
      FROM information_schema.tables t
      LEFT JOIN pg_stat_user_tables s ON t.table_name = s.relname
      LEFT JOIN pg_class c ON t.table_name = c.relname
      WHERE t.table_schema = 'public'
      ORDER BY pg_total_relation_size(c.oid) DESC NULLS LAST
    `);

    const totalSize = await client.query("SELECT pg_size_pretty(pg_database_size(current_database())) as database_size");

    await client.end();

    // Create metadata
    const metadata = {
      backup_name: backupName,
      created_at: new Date().toISOString(),
      database_info: {
        version: dbInfo.rows[0].version,
        name: dbInfo.rows[0].current_database,
        user: dbInfo.rows[0].current_user,
        size: totalSize.rows[0].database_size
      },
      table_statistics: tableStats.rows,
      backup_options: {
        compressed: !options.noCompress,
        schema_only: options.schemaOnly || false,
        data_only: options.dataOnly || false
      }
    };

    console.log(`📋 Database: ${metadata.database_info.name} (${metadata.database_info.size})`);
    console.log(`📊 Tables: ${tableStats.rows.length}`);
    console.log(`📦 Total rows: ${tableStats.rows.reduce((sum, table) => sum + parseInt(table.row_count || 0), 0)}`);

    // Create backup using pg_dump
    console.log('🔄 Creating database dump...');
    
    const dumpArgs = [
      process.env.DATABASE_URL,
      '--verbose',
      '--no-owner',
      '--no-privileges'
    ];

    if (options.schemaOnly) {
      dumpArgs.push('--schema-only');
    } else if (options.dataOnly) {
      dumpArgs.push('--data-only');
    }

    // Add specific table filters if provided
    if (options.tables && options.tables.length > 0) {
      options.tables.forEach(table => {
        dumpArgs.push('--table', table);
      });
    }

    // Exclude specific tables if provided
    if (options.excludeTables && options.excludeTables.length > 0) {
      options.excludeTables.forEach(table => {
        dumpArgs.push('--exclude-table', table);
      });
    }

    const dumpProcess = spawn('pg_dump', dumpArgs);
    const writeStream = fs.createWriteStream(backupFile);

    dumpProcess.stdout.pipe(writeStream);

    let stderrOutput = '';
    dumpProcess.stderr.on('data', (data) => {
      stderrOutput += data.toString();
    });

    await new Promise((resolve, reject) => {
      dumpProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`pg_dump failed with code ${code}: ${stderrOutput}`));
        }
      });

      dumpProcess.on('error', (error) => {
        reject(new Error(`pg_dump spawn error: ${error.message}`));
      });
    });

    // Get backup file size
    const stats = fs.statSync(backupFile);
    metadata.backup_file = {
      name: `${backupName}.sql`,
      size_bytes: stats.size,
      size_human: `${(stats.size / 1024 / 1024).toFixed(2)} MB`
    };

    console.log(`✅ Backup created: ${metadata.backup_file.size_human}`);

    // Compress backup if requested (default)
    if (!options.noCompress) {
      console.log('🗜️  Compressing backup...');
      
      const gzipProcess = spawn('gzip', ['-9', backupFile]);
      
      await new Promise((resolve, reject) => {
        gzipProcess.on('close', (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`gzip failed with code ${code}`));
          }
        });

        gzipProcess.on('error', (error) => {
          reject(new Error(`gzip spawn error: ${error.message}`));
        });
      });

      // Update metadata with compressed file info
      const compressedStats = fs.statSync(compressedFile);
      metadata.backup_file.compressed = {
        name: `${backupName}.sql.gz`,
        size_bytes: compressedStats.size,
        size_human: `${(compressedStats.size / 1024 / 1024).toFixed(2)} MB`,
        compression_ratio: `${((1 - compressedStats.size / stats.size) * 100).toFixed(1)}%`
      };

      console.log(`✅ Compressed: ${metadata.backup_file.compressed.size_human} (${metadata.backup_file.compressed.compression_ratio} smaller)`);
    }

    // Save metadata
    fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

    // Clean up old backups
    console.log('🧹 Cleaning up old backups...');
    const backupFiles = fs.readdirSync(BACKUP_DIR)
      .filter(file => file.startsWith('elmag-insurance-db-') && (file.endsWith('.sql.gz') || file.endsWith('.sql')))
      .map(file => ({
        name: file,
        path: path.join(BACKUP_DIR, file),
        created: fs.statSync(path.join(BACKUP_DIR, file)).mtime
      }))
      .sort((a, b) => b.created - a.created);

    if (backupFiles.length > MAX_BACKUPS) {
      const filesToDelete = backupFiles.slice(MAX_BACKUPS);
      console.log(`🗑️  Removing ${filesToDelete.length} old backup(s)...`);
      
      for (const file of filesToDelete) {
        try {
          fs.unlinkSync(file.path);
          // Also remove corresponding metadata file
          const metadataPath = file.path.replace(/\.(sql|sql\.gz)$/, '.json');
          if (fs.existsSync(metadataPath)) {
            fs.unlinkSync(metadataPath);
          }
        } catch (error) {
          console.warn(`⚠️  Failed to delete ${file.name}: ${error.message}`);
        }
      }
    }

    console.log('\n🎉 Backup completed successfully!');
    console.log('📋 Backup Summary:');
    console.log(`   📁 Location: ${BACKUP_DIR}`);
    console.log(`   📄 File: ${metadata.backup_file.compressed?.name || metadata.backup_file.name}`);
    console.log(`   📊 Size: ${metadata.backup_file.compressed?.size_human || metadata.backup_file.size_human}`);
    console.log(`   🏷️  Metadata: ${backupName}.json`);
    console.log(`   📅 Created: ${new Date().toLocaleString()}`);

    return {
      success: true,
      backup_name: backupName,
      file_path: metadata.backup_file.compressed ? compressedFile : backupFile,
      metadata_path: metadataFile,
      metadata: metadata
    };

  } catch (error) {
    console.error('\n❌ Backup failed:', error.message);
    
    // Clean up partial files
    [backupFile, compressedFile, metadataFile].forEach(file => {
      if (fs.existsSync(file)) {
        try {
          fs.unlinkSync(file);
        } catch (cleanupError) {
          console.warn(`⚠️  Failed to clean up ${file}: ${cleanupError.message}`);
        }
      }
    });

    console.error('\nTroubleshooting tips:');
    console.error('1. Ensure pg_dump is installed and in PATH');
    console.error('2. Verify DATABASE_URL is correct and accessible');
    console.error('3. Check disk space in backup directory');
    console.error('4. Ensure database user has necessary permissions');
    
    process.exit(1);
  }
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {};

  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--schema-only':
        options.schemaOnly = true;
        break;
      case '--data-only':
        options.dataOnly = true;
        break;
      case '--no-compress':
        options.noCompress = true;
        break;
      case '--table':
        options.tables = options.tables || [];
        options.tables.push(args[++i]);
        break;
      case '--exclude-table':
        options.excludeTables = options.excludeTables || [];
        options.excludeTables.push(args[++i]);
        break;
      case '--help':
        console.log(`
Database Backup Script

Usage: node database-backup.js [options]

Options:
  --schema-only     Backup schema only (no data)
  --data-only       Backup data only (no schema)
  --no-compress     Skip compression of backup file
  --table TABLE     Include specific table (can be used multiple times)
  --exclude-table TABLE  Exclude specific table (can be used multiple times)
  --help           Show this help message

Examples:
  node database-backup.js                    # Full backup (default)
  node database-backup.js --schema-only      # Schema only
  node database-backup.js --no-compress      # Uncompressed backup
  node database-backup.js --table carriers   # Backup only carriers table
        `);
        process.exit(0);
        break;
    }
  }

  createBackup(options).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { createBackup };