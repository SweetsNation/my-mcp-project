#!/usr/bin/env node

/**
 * Test script for the authentication system
 * Run this after setting up your database and environment variables
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

async function testAuthSystem() {
  console.log('🧪 Testing Authentication System...\n');

  try {
    // Test 1: Database Connection
    console.log('1️⃣ Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful\n');

    // Test 2: Password Hashing
    console.log('2️⃣ Testing password hashing...');
    const testPassword = 'SecurePass123!';
    const hashedPassword = await bcrypt.hash(testPassword, 12);
    const isPasswordValid = await bcrypt.compare(testPassword, hashedPassword);
    
    if (isPasswordValid) {
      console.log('✅ Password hashing and verification successful\n');
    } else {
      throw new Error('Password verification failed');
    }

    // Test 3: JWT Token Generation
    console.log('3️⃣ Testing JWT token generation...');
    const testUser = {
      id: 'test-user-id',
      email: 'test@example.com'
    };
    
    const token = jwt.sign(
      { userId: testUser.id, email: testUser.email },
      process.env.JWT_SECRET || 'fallback-secret-key',
      { expiresIn: '1h' }
    );
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-key');
    
    if (decoded.userId === testUser.id && decoded.email === testUser.email) {
      console.log('✅ JWT token generation and verification successful\n');
    } else {
      throw new Error('JWT verification failed');
    }

    // Test 4: Database Schema
    console.log('4️⃣ Testing database schema...');
    const userCount = await prisma.user.count();
    console.log(`✅ Database schema working - Found ${userCount} users\n`);

    console.log('🎉 All authentication tests passed!');
    console.log('\n📋 Next steps:');
    console.log('1. Set up your .env.local file with real values');
    console.log('2. Run database migrations: npx prisma migrate dev --name init');
    console.log('3. Start your development server: npm run dev');
    console.log('4. Test the portal at http://localhost:3000/portal');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your .env.local file exists and has correct values');
    console.log('2. Ensure your database is running and accessible');
    console.log('3. Verify all dependencies are installed');
  } finally {
    await prisma.$disconnect();
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testAuthSystem();
}

module.exports = { testAuthSystem };
