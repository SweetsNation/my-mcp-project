#!/usr/bin/env node
/**
 * Production Database Setup Script
 * Sets up the PostgreSQL database schema for the Medicare Advantage website
 */

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

const SCHEMA_FILE = path.join(__dirname, '../src/lib/database/schema.sql');

async function setupDatabase() {
  console.log('🗄️  Setting up production database...');
  
  // Validate environment
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is required');
    process.exit(1);
  }

  if (!fs.existsSync(SCHEMA_FILE)) {
    console.error(`❌ Schema file not found: ${SCHEMA_FILE}`);
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('localhost') ? false : {
      rejectUnauthorized: false
    }
  });

  try {
    // Connect to database
    console.log('📡 Connecting to database...');
    await client.connect();
    console.log('✅ Database connection established');

    // Check if database is empty or if we should proceed
    const tableCheck = await client.query(`
      SELECT COUNT(*) as table_count 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('medicare_plans', 'carriers', 'plan_types')
    `);

    const tableCount = parseInt(tableCheck.rows[0].table_count);
    
    if (tableCount > 0) {
      console.log('⚠️  Database already contains tables. Checking if update is needed...');
      
      // Check if all expected tables exist
      const expectedTables = [
        'carriers', 'plan_types', 'locations', 'medicare_plans', 
        'plan_locations', 'formularies', 'providers', 'plan_providers',
        'user_sessions', 'plan_comparisons', 'leads'
      ];
      
      const existingTables = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
      `);
      
      const existingTableNames = existingTables.rows.map(row => row.table_name);
      const missingTables = expectedTables.filter(table => 
        !existingTableNames.includes(table)
      );
      
      if (missingTables.length === 0) {
        console.log('✅ All required tables exist. Database setup is complete.');
        return;
      } else {
        console.log(`📝 Missing tables: ${missingTables.join(', ')}`);
        console.log('🔄 Proceeding with schema update...');
      }
    }

    // Read and execute schema
    console.log('📖 Reading schema file...');
    const schema = fs.readFileSync(SCHEMA_FILE, 'utf8');
    
    console.log('🏗️  Executing database schema...');
    await client.query(schema);
    
    console.log('✅ Database schema created successfully');

    // Verify installation
    console.log('🔍 Verifying database setup...');
    const verification = await client.query(`
      SELECT 
        t.table_name,
        COALESCE(c.column_count, 0) as column_count,
        COALESCE(r.row_count, 0) as row_count
      FROM information_schema.tables t
      LEFT JOIN (
        SELECT table_name, COUNT(*) as column_count
        FROM information_schema.columns 
        WHERE table_schema = 'public'
        GROUP BY table_name
      ) c ON t.table_name = c.table_name
      LEFT JOIN (
        SELECT 
          schemaname,
          tablename as table_name,
          n_tup_ins as row_count
        FROM pg_stat_user_tables
      ) r ON t.table_name = r.table_name
      WHERE t.table_schema = 'public'
      ORDER BY t.table_name
    `);

    console.log('\n📊 Database Tables Summary:');
    console.log('┌─────────────────────────┬─────────┬──────────┐');
    console.log('│ Table Name              │ Columns │ Rows     │');
    console.log('├─────────────────────────┼─────────┼──────────┤');
    
    verification.rows.forEach(row => {
      const tableName = row.table_name.padEnd(23);
      const columnCount = row.column_count.toString().padStart(7);
      const rowCount = row.row_count.toString().padStart(8);
      console.log(`│ ${tableName} │ ${columnCount} │ ${rowCount} │`);
    });
    
    console.log('└─────────────────────────┴─────────┴──────────┘');

    // Test basic functionality
    console.log('\n🧪 Testing database functionality...');
    
    // Test inserting and querying data
    const testQuery = await client.query('SELECT COUNT(*) FROM plan_types');
    const planTypeCount = parseInt(testQuery.rows[0].count);
    
    if (planTypeCount >= 4) {
      console.log(`✅ Plan types initialized (${planTypeCount} types)`);
    } else {
      console.log('⚠️  Plan types may not be properly initialized');
    }

    const carrierQuery = await client.query('SELECT COUNT(*) FROM carriers');
    const carrierCount = parseInt(carrierQuery.rows[0].count);
    
    if (carrierCount >= 5) {
      console.log(`✅ Carriers initialized (${carrierCount} carriers)`);
    } else {
      console.log('⚠️  Carriers may not be properly initialized');
    }

    console.log('\n🎉 Database setup completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Update your .env.production with the correct DATABASE_URL');
    console.log('2. Test the connection with: npm run test:db');
    console.log('3. Deploy your application to production');

  } catch (error) {
    console.error('\n❌ Database setup failed:', error.message);
    console.error('\nTroubleshooting tips:');
    console.error('1. Verify DATABASE_URL is correct and accessible');
    console.error('2. Check database server is running and accepting connections');
    console.error('3. Ensure database user has CREATE permissions');
    console.error('4. Check network connectivity and firewall settings');
    console.error('\nFull error details:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

// Handle command line execution
if (require.main === module) {
  setupDatabase().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { setupDatabase };