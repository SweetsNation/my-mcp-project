#!/usr/bin/env node

/**
 * Database Test Script for El-Mag Insurance Medicare Advantage Platform
 * This script tests the PostgreSQL connection and verifies the schema
 */

const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

// Database connection configuration
const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

async function testDatabase() {
  const pool = new Pool(dbConfig);
  
  try {
    console.log('🔍 Testing PostgreSQL database connection...\n');
    
    // Test basic connection
    console.log('1️⃣ Testing basic connection...');
    const client = await pool.connect();
    const result = await client.query('SELECT version()');
    console.log('✅ Database connected successfully!');
    console.log(`   PostgreSQL Version: ${result.rows[0].version.split(',')[0]}\n`);
    
    // Test schema tables
    console.log('2️⃣ Testing schema tables...');
    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `);
    
    console.log('✅ Found tables:');
    tables.rows.forEach(row => {
      console.log(`   - ${row.table_name}`);
    });
    console.log('');
    
    // Test sample data
    console.log('3️⃣ Testing sample data...');
    
    // Test carriers
    const carriers = await client.query('SELECT COUNT(*) as count FROM carriers');
    console.log(`   Carriers: ${carriers.rows[0].count} records`);
    
    // Test medicare plans
    const plans = await client.query('SELECT COUNT(*) as count FROM medicare_plans');
    console.log(`   Medicare Plans: ${plans.rows[0].count} records`);
    
    // Test locations
    const locations = await client.query('SELECT COUNT(*) as count FROM locations');
    console.log(`   Locations: ${locations.rows[0].count} records`);
    
    // Test providers
    const providers = await client.query('SELECT COUNT(*) as count FROM providers');
    console.log(`   Providers: ${providers.rows[0].count} records`);
    
    // Test leads
    const leads = await client.query('SELECT COUNT(*) as count FROM leads');
    console.log(`   Leads: ${leads.rows[0].count} records`);
    console.log('');
    
    // Test plan summaries view
    console.log('4️⃣ Testing plan summaries view...');
    const summaries = await client.query('SELECT * FROM plan_summaries LIMIT 3');
    console.log('✅ Plan summaries view working:');
    summaries.rows.forEach((plan, index) => {
      console.log(`   ${index + 1}. ${plan.plan_name} (${plan.carrier_name}) - $${plan.premium}/month`);
    });
    console.log('');
    
    // Test location function
    console.log('5️⃣ Testing location-based plan lookup...');
    const nyPlans = await client.query("SELECT * FROM get_plans_by_location('10001') LIMIT 2");
    console.log('✅ Location function working:');
    nyPlans.rows.forEach((plan, index) => {
      console.log(`   ${index + 1}. ${plan.plan_name} - $${plan.premium}/month (${plan.star_rating} stars)`);
    });
    console.log('');
    
    // Test benefits query
    console.log('6️⃣ Testing benefits queries...');
    const dentalPlans = await client.query("SELECT COUNT(*) as count FROM medicare_plans WHERE dental_coverage = true");
    const visionPlans = await client.query("SELECT COUNT(*) as count FROM medicare_plans WHERE vision_coverage = true");
    const fitnessPlans = await client.query("SELECT COUNT(*) as count FROM medicare_plans WHERE fitness_benefits = true");
    
    console.log('✅ Benefits coverage:');
    console.log(`   Dental coverage: ${dentalPlans.rows[0].count} plans`);
    console.log(`   Vision coverage: ${visionPlans.rows[0].count} plans`);
    console.log(`   Fitness benefits: ${fitnessPlans.rows[0].count} plans`);
    console.log('');
    
    // Test performance
    console.log('7️⃣ Testing query performance...');
    const startTime = Date.now();
    await client.query('SELECT * FROM plan_summaries');
    const endTime = Date.now();
    console.log(`✅ Plan summaries query: ${endTime - startTime}ms`);
    console.log('');
    
    console.log('🎉 All database tests passed successfully!');
    console.log('');
    console.log('📊 Database Summary:');
    console.log(`   Total Tables: ${tables.rows.length}`);
    console.log(`   Total Plans: ${plans.rows[0].count}`);
    console.log(`   Total Carriers: ${carriers.rows[0].count}`);
    console.log(`   Total Locations: ${locations.rows[0].count}`);
    console.log(`   Total Providers: ${providers.rows[0].count}`);
    console.log(`   Total Leads: ${leads.rows[0].count}`);
    console.log('');
    console.log('🚀 Your database is ready for the Medicare Advantage programmatic page template!');
    
    client.release();
    
  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    console.log('');
    console.log('🔧 Troubleshooting:');
    console.log('   1. Make sure PostgreSQL is running');
    console.log('   2. Check your DATABASE_URL in .env.local');
    console.log('   3. Verify the database schema has been applied');
    console.log('   4. Run the setup script: ./scripts/setup-database.sh');
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run the test
testDatabase().catch(console.error);
