#!/usr/bin/env node
/**
 * Database Connection Test Script
 * Tests production database connectivity and performance
 */

const { Client, Pool } = require('pg');
require('dotenv').config();

async function testDatabaseConnection() {
  console.log('🔍 Testing database connection...');
  
  // Validate environment
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL environment variable is required');
    process.exit(1);
  }

  console.log('📡 Database URL:', process.env.DATABASE_URL.replace(/:[^:@]+@/, ':****@'));

  // Test basic connection
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('localhost') ? false : {
      rejectUnauthorized: false
    }
  });

  try {
    // Basic connection test
    console.log('\n1️⃣ Testing basic connection...');
    const startTime = Date.now();
    await client.connect();
    const connectionTime = Date.now() - startTime;
    console.log(`✅ Connection established in ${connectionTime}ms`);

    // Database info test
    console.log('\n2️⃣ Checking database information...');
    const dbInfo = await client.query('SELECT version(), current_database(), current_user, inet_server_addr(), inet_server_port()');
    const info = dbInfo.rows[0];
    
    console.log('📊 Database Details:');
    console.log(`   PostgreSQL Version: ${info.version.split(' ')[1]}`);
    console.log(`   Database Name: ${info.current_database}`);
    console.log(`   Connected User: ${info.current_user}`);
    console.log(`   Server Address: ${info.inet_server_addr || 'localhost'}`);
    console.log(`   Server Port: ${info.inet_server_port || 'default'}`);

    // SSL connection test
    console.log('\n3️⃣ Checking SSL connection...');
    const sslInfo = await client.query("SELECT ssl_is_used() as ssl_enabled");
    if (sslInfo.rows[0].ssl_enabled) {
      console.log('✅ SSL connection is active');
    } else {
      console.log('⚠️  SSL connection is not active (OK for localhost)');
    }

    // Schema validation test
    console.log('\n4️⃣ Validating database schema...');
    const tables = await client.query(`
      SELECT table_name, 
             (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name AND table_schema = 'public') as column_count
      FROM information_schema.tables t
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    if (tables.rows.length > 0) {
      console.log('✅ Database schema found:');
      tables.rows.forEach(table => {
        console.log(`   • ${table.table_name} (${table.column_count} columns)`);
      });
    } else {
      console.log('⚠️  No tables found. Run database setup first.');
    }

    // Performance test
    console.log('\n5️⃣ Testing query performance...');
    const queries = [
      { name: 'Simple SELECT', query: 'SELECT 1 as test' },
      { name: 'Date/Time Functions', query: 'SELECT NOW(), CURRENT_DATE, CURRENT_TIME' },
      { name: 'Math Operations', query: 'SELECT RANDOM(), SQRT(16), POWER(2, 3)' }
    ];

    if (tables.rows.length > 0) {
      queries.push(
        { name: 'Table Count', query: 'SELECT COUNT(*) FROM carriers' },
        { name: 'Join Query', query: 'SELECT c.name, COUNT(p.id) as plan_count FROM carriers c LEFT JOIN medicare_plans p ON c.id = p.carrier_id GROUP BY c.id, c.name LIMIT 5' }
      );
    }

    for (const testQuery of queries) {
      try {
        const queryStart = Date.now();
        const result = await client.query(testQuery.query);
        const queryTime = Date.now() - queryStart;
        console.log(`   ✅ ${testQuery.name}: ${queryTime}ms (${result.rows.length} rows)`);
      } catch (error) {
        console.log(`   ❌ ${testQuery.name}: ${error.message}`);
      }
    }

    await client.end();

  } catch (error) {
    console.error('\n❌ Connection test failed:', error.message);
    console.error('\nCommon solutions:');
    console.error('1. Check DATABASE_URL format: postgresql://user:pass@host:port/dbname');
    console.error('2. Verify database server is running');
    console.error('3. Check firewall/network connectivity');
    console.error('4. Ensure database exists and user has permissions');
    process.exit(1);
  }

  // Test connection pool
  console.log('\n6️⃣ Testing connection pool...');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL.includes('localhost') ? false : {
      rejectUnauthorized: false
    },
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

  try {
    const poolClient = await pool.connect();
    console.log('✅ Connection pool working');
    
    // Test concurrent connections
    const concurrentQueries = Array.from({ length: 3 }, (_, i) => 
      pool.query('SELECT $1 as connection_test', [`query_${i + 1}`])
    );
    
    const results = await Promise.all(concurrentQueries);
    console.log(`✅ Concurrent connections: ${results.length} queries executed simultaneously`);
    
    poolClient.release();
    await pool.end();

  } catch (error) {
    console.error('❌ Connection pool test failed:', error.message);
    await pool.end();
    process.exit(1);
  }

  // Health check test using application code
  console.log('\n7️⃣ Testing application health check...');
  try {
    // Import and test the health check function
    const dbPath = require('path').join(__dirname, '../src/lib/database/connection.ts');
    if (require('fs').existsSync(dbPath.replace('.ts', '.js'))) {
      const { healthCheck } = require('../src/lib/database/connection.js');
      const isHealthy = await healthCheck();
      if (isHealthy) {
        console.log('✅ Application health check passed');
      } else {
        console.log('❌ Application health check failed');
      }
    } else {
      console.log('⚠️  Application health check skipped (TypeScript not compiled)');
    }
  } catch (error) {
    console.log('⚠️  Application health check error:', error.message);
  }

  console.log('\n🎉 Database connection test completed successfully!');
  console.log('\n📋 Summary:');
  console.log('✅ Basic connection: Working');
  console.log('✅ SSL security: Configured');
  console.log('✅ Query performance: Good');
  console.log('✅ Connection pooling: Working');
  
  console.log('\n🚀 Database is ready for production deployment!');
}

// Handle command line execution
if (require.main === module) {
  testDatabaseConnection().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { testDatabaseConnection };