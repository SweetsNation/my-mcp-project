#!/usr/bin/env node

/**
 * Vercel Credentials Verification Script
 * This script verifies that your Vercel token, project ID, and organization ID are valid
 */

require('dotenv').config();
const https = require('https');

// Configuration - Replace these with your actual values
const VERCEL_TOKEN = process.env.VERCEL_TOKEN || 'your-vercel-token-here';
const VERCEL_ORG_ID = process.env.VERCEL_ORG_ID || 'your-vercel-org-id-here';
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'your-vercel-project-id-here';

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Vercel-Credentials-Verifier/1.0'
      },
      ...options
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ status: res.statusCode, data: jsonData });
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.end();
  });
}

async function verifyToken() {
  log('\n🔑 Verifying Vercel Token...', colors.blue);
  
  try {
    const response = await makeRequest('https://api.vercel.com/v2/user');
    
    if (response.status === 200) {
      log('✅ Vercel Token is valid!', colors.green);
      log(`   User: ${response.data.user?.name || 'Unknown'}`, colors.green);
      log(`   Email: ${response.data.user?.email || 'Unknown'}`, colors.green);
      return true;
    } else {
      log(`❌ Vercel Token verification failed (Status: ${response.status})`, colors.red);
      if (response.data?.error) {
        log(`   Error: ${response.data.error.message || response.data.error}`, colors.red);
      }
      return false;
    }
  } catch (error) {
    log(`❌ Error verifying Vercel Token: ${error.message}`, colors.red);
    return false;
  }
}

async function verifyOrganization() {
  log('\n🏢 Verifying Vercel Organization...', colors.blue);
  
  try {
    const response = await makeRequest(`https://api.vercel.com/v1/organizations/${VERCEL_ORG_ID}`);
    
    if (response.status === 200) {
      log('✅ Vercel Organization ID is valid!', colors.green);
      log(`   Organization: ${response.data.name || 'Unknown'}`, colors.green);
      log(`   Type: ${response.data.type || 'Unknown'}`, colors.green);
      return true;
    } else {
      log(`❌ Vercel Organization ID verification failed (Status: ${response.status})`, colors.red);
      if (response.data?.error) {
        log(`   Error: ${response.data.error.message || response.data.error}`, colors.red);
      }
      return false;
    }
  } catch (error) {
    log(`❌ Error verifying Vercel Organization: ${error.message}`, colors.red);
    return false;
  }
}

async function verifyProject() {
  log('\n🚀 Verifying Vercel Project...', colors.blue);
  
  try {
    const response = await makeRequest(`https://api.vercel.com/v1/projects/${VERCEL_PROJECT_ID}`);
    
    if (response.status === 200) {
      log('✅ Vercel Project ID is valid!', colors.green);
      log(`   Project: ${response.data.name || 'Unknown'}`, colors.green);
      log(`   Framework: ${response.data.framework || 'Unknown'}`, colors.green);
      log(`   Git Repository: ${response.data.gitRepository?.url || 'Not connected'}`, colors.green);
      return true;
    } else {
      log(`❌ Vercel Project ID verification failed (Status: ${response.status})`, colors.red);
      if (response.data?.error) {
        log(`   Error: ${response.data.error.message || response.data.error}`, colors.red);
      }
      return false;
    }
  } catch (error) {
    log(`❌ Error verifying Vercel Project: ${error.message}`, colors.red);
    return false;
  }
}

async function verifyProjectAccess() {
  log('\n🔐 Verifying Project Access...', colors.blue);
  
  try {
    const response = await makeRequest(`https://api.vercel.com/v1/projects/${VERCEL_PROJECT_ID}/domains`);
    
    if (response.status === 200) {
      log('✅ You have access to the project!', colors.green);
      if (response.data.domains && response.data.domains.length > 0) {
        log('   Connected domains:', colors.green);
        response.data.domains.forEach(domain => {
          log(`     - ${domain.name}`, colors.green);
        });
      } else {
        log('   No domains configured yet', colors.yellow);
      }
      return true;
    } else {
      log(`❌ Project access verification failed (Status: ${response.status})`, colors.red);
      if (response.data?.error) {
        log(`   Error: ${response.data.error.message || response.data.error}`, colors.red);
      }
      return false;
    }
  } catch (error) {
    log(`❌ Error verifying project access: ${error.message}`, colors.red);
    return false;
  }
}

async function main() {
  log('🚀 Vercel Credentials Verification Tool', colors.bold + colors.blue);
  log('=====================================', colors.blue);
  
  // Check if credentials are provided
  if (VERCEL_TOKEN === 'your-vercel-token-here' || 
      VERCEL_ORG_ID === 'your-vercel-org-id-here' || 
      VERCEL_PROJECT_ID === 'your-vercel-project-id-here') {
    log('\n⚠️  Please set your Vercel credentials first:', colors.yellow);
    log('   Option 1: Set environment variables:', colors.yellow);
    log('     export VERCEL_TOKEN="your-token"', colors.yellow);
    log('     export VERCEL_ORG_ID="your-org-id"', colors.yellow);
    log('     export VERCEL_PROJECT_ID="your-project-id"', colors.yellow);
    log('   Option 2: Edit this script and replace the placeholder values', colors.yellow);
    log('   Option 3: Run with: VERCEL_TOKEN=xxx VERCEL_ORG_ID=xxx VERCEL_PROJECT_ID=xxx node verify-vercel-credentials.js', colors.yellow);
    process.exit(1);
  }
  
  log('\n📋 Credentials to verify:', colors.blue);
  log(`   Token: ${VERCEL_TOKEN.substring(0, 8)}...${VERCEL_TOKEN.substring(VERCEL_TOKEN.length - 4)}`, colors.blue);
  log(`   Organization ID: ${VERCEL_ORG_ID}`, colors.blue);
  log(`   Project ID: ${VERCEL_PROJECT_ID}`, colors.blue);
  
  const results = {
    token: await verifyToken(),
    organization: await verifyOrganization(),
    project: await verifyProject(),
    access: false
  };
  
  // Only check project access if project verification passed
  if (results.project) {
    results.access = await verifyProjectAccess();
  }
  
  // Summary
  log('\n📊 Verification Summary:', colors.bold + colors.blue);
  log('======================', colors.blue);
  
  if (results.token) log('✅ Vercel Token: Valid', colors.green);
  else log('❌ Vercel Token: Invalid', colors.red);
  
  if (results.organization) log('✅ Organization ID: Valid', colors.green);
  else log('❌ Organization ID: Invalid', colors.red);
  
  if (results.project) log('✅ Project ID: Valid', colors.green);
  else log('❌ Project ID: Invalid', colors.red);
  
  if (results.access) log('✅ Project Access: Confirmed', colors.green);
  else log('❌ Project Access: Failed', colors.red);
  
  const allValid = results.token && results.organization && results.project && results.access;
  
  if (allValid) {
    log('\n🎉 All credentials are valid! Your GitHub Actions deployment should work correctly.', colors.bold + colors.green);
  } else {
    log('\n⚠️  Some credentials are invalid. Please fix the issues above before deploying.', colors.bold + colors.yellow);
    process.exit(1);
  }
}

// Handle errors gracefully
process.on('unhandledRejection', (reason, promise) => {
  log(`\n❌ Unhandled Rejection at: ${promise}, reason: ${reason}`, colors.red);
  process.exit(1);
});

// Run the verification
main().catch(error => {
  log(`\n❌ Fatal error: ${error.message}`, colors.red);
  process.exit(1);
});
