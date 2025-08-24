#!/usr/bin/env node
/**
 * Post-Deployment Testing Script
 * Comprehensive testing suite for production deployment verification
 */

const https = require('https');
const http = require('http');
const { performance } = require('perf_hooks');

// Configuration
const CONFIG = {
  domain: process.env.PRODUCTION_DOMAIN || 'elmag-insurance.com',
  timeout: 10000, // 10 seconds
  retries: 3,
  expectedStatusCodes: {
    homepage: [200],
    api: [200, 405], // Some API endpoints might return 405 for GET
    redirects: [301, 302, 200]
  }
};

// Test results collector
const testResults = {
  passed: 0,
  failed: 0,
  warnings: 0,
  tests: []
};

// Utility functions
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

function logSuccess(message) {
  log(`✅ ${message}`, colors.green);
}

function logError(message) {
  log(`❌ ${message}`, colors.red);
}

function logWarning(message) {
  log(`⚠️  ${message}`, colors.yellow);
}

function logInfo(message) {
  log(`ℹ️  ${message}`, colors.blue);
}

// HTTP request function with timeout and retries
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const protocol = url.startsWith('https:') ? https : http;
    
    const requestOptions = {
      timeout: CONFIG.timeout,
      headers: {
        'User-Agent': 'ElMag-Insurance-Deployment-Test/1.0',
        ...options.headers
      },
      ...options
    };

    const req = protocol.request(url, requestOptions, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = performance.now();
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data,
          responseTime: endTime - startTime,
          url: url
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Request timeout after ${CONFIG.timeout}ms`));
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

// Retry wrapper
async function makeRequestWithRetry(url, options = {}, retries = CONFIG.retries) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await makeRequest(url, options);
    } catch (error) {
      if (i === retries) {
        throw error;
      }
      logWarning(`Attempt ${i + 1} failed for ${url}, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
    }
  }
}

// Test functions
async function testHomepage() {
  logInfo('Testing homepage...');
  
  try {
    const response = await makeRequestWithRetry(`https://${CONFIG.domain}`);
    
    const test = {
      name: 'Homepage Accessibility',
      url: `https://${CONFIG.domain}`,
      passed: CONFIG.expectedStatusCodes.homepage.includes(response.statusCode),
      statusCode: response.statusCode,
      responseTime: Math.round(response.responseTime),
      details: []
    };

    if (test.passed) {
      logSuccess(`Homepage loaded successfully (${response.statusCode})`);
      test.details.push(`Response time: ${test.responseTime}ms`);
      
      // Check for expected content
      if (response.data.includes('El-Mag Insurance')) {
        test.details.push('✓ Company name found in content');
      } else {
        test.details.push('⚠ Company name not found in content');
      }
      
      if (response.data.includes('Medicare Advantage')) {
        test.details.push('✓ Medicare Advantage content found');
      } else {
        test.details.push('⚠ Medicare Advantage content not found');
      }

      testResults.passed++;
    } else {
      logError(`Homepage failed with status: ${response.statusCode}`);
      testResults.failed++;
    }

    testResults.tests.push(test);
  } catch (error) {
    logError(`Homepage test failed: ${error.message}`);
    testResults.tests.push({
      name: 'Homepage Accessibility',
      url: `https://${CONFIG.domain}`,
      passed: false,
      error: error.message
    });
    testResults.failed++;
  }
}

async function testSSLCertificate() {
  logInfo('Testing SSL certificate...');
  
  try {
    const response = await makeRequestWithRetry(`https://${CONFIG.domain}`);
    
    const test = {
      name: 'SSL Certificate',
      url: `https://${CONFIG.domain}`,
      passed: true,
      details: []
    };

    // Check for HTTPS
    if (response.url && response.url.startsWith('https://')) {
      test.details.push('✓ HTTPS connection established');
    }

    // Check for security headers
    if (response.headers['strict-transport-security']) {
      test.details.push('✓ HSTS header present');
    } else {
      test.details.push('⚠ HSTS header missing');
    }

    if (response.headers['x-content-type-options']) {
      test.details.push('✓ X-Content-Type-Options header present');
    } else {
      test.details.push('⚠ X-Content-Type-Options header missing');
    }

    logSuccess('SSL certificate is working');
    testResults.tests.push(test);
    testResults.passed++;
  } catch (error) {
    logError(`SSL test failed: ${error.message}`);
    testResults.tests.push({
      name: 'SSL Certificate',
      url: `https://${CONFIG.domain}`,
      passed: false,
      error: error.message
    });
    testResults.failed++;
  }
}

async function testAPIEndpoints() {
  logInfo('Testing API endpoints...');
  
  const endpoints = [
    { path: '/api/health', name: 'Health Check' },
    { path: '/api/contact', name: 'Contact API' },
    { path: '/api/quote', name: 'Quote API' },
    { path: '/api/sitemap', name: 'Sitemap' },
    { path: '/api/robots', name: 'Robots.txt' }
  ];

  for (const endpoint of endpoints) {
    try {
      logInfo(`Testing ${endpoint.name}...`);
      const response = await makeRequestWithRetry(`https://${CONFIG.domain}${endpoint.path}`);
      
      const test = {
        name: `API - ${endpoint.name}`,
        url: `https://${CONFIG.domain}${endpoint.path}`,
        passed: CONFIG.expectedStatusCodes.api.includes(response.statusCode),
        statusCode: response.statusCode,
        responseTime: Math.round(response.responseTime),
        details: []
      };

      if (test.passed) {
        logSuccess(`${endpoint.name} API accessible (${response.statusCode})`);
        test.details.push(`Response time: ${test.responseTime}ms`);
        
        // Check content type for specific endpoints
        if (endpoint.path === '/api/sitemap' && response.headers['content-type']) {
          if (response.headers['content-type'].includes('xml')) {
            test.details.push('✓ Correct XML content type');
          }
        }

        testResults.passed++;
      } else {
        logWarning(`${endpoint.name} returned status: ${response.statusCode}`);
        testResults.warnings++;
      }

      testResults.tests.push(test);
    } catch (error) {
      logWarning(`${endpoint.name} test failed: ${error.message}`);
      testResults.tests.push({
        name: `API - ${endpoint.name}`,
        url: `https://${CONFIG.domain}${endpoint.path}`,
        passed: false,
        error: error.message
      });
      testResults.warnings++;
    }
  }
}

async function testRedirects() {
  logInfo('Testing redirects...');
  
  const redirectTests = [
    {
      from: `https://www.${CONFIG.domain}`,
      to: `https://${CONFIG.domain}`,
      name: 'WWW to non-WWW redirect'
    },
    {
      from: `http://${CONFIG.domain}`,
      to: `https://${CONFIG.domain}`,
      name: 'HTTP to HTTPS redirect'
    }
  ];

  for (const redirectTest of redirectTests) {
    try {
      logInfo(`Testing ${redirectTest.name}...`);
      const response = await makeRequestWithRetry(redirectTest.from, { followRedirect: false });
      
      const test = {
        name: redirectTest.name,
        url: redirectTest.from,
        passed: CONFIG.expectedStatusCodes.redirects.includes(response.statusCode),
        statusCode: response.statusCode,
        details: []
      };

      if (test.passed && response.headers.location) {
        const redirectsToExpected = response.headers.location.includes(redirectTest.to.replace('https://', ''));
        test.details.push(`Redirects to: ${response.headers.location}`);
        
        if (redirectsToExpected) {
          test.details.push('✓ Redirects to expected URL');
          logSuccess(`${redirectTest.name} working correctly`);
        } else {
          test.details.push('⚠ Redirects to unexpected URL');
          logWarning(`${redirectTest.name} redirects to unexpected URL`);
        }
      } else if (response.statusCode === 200) {
        // Might be handled at DNS level
        test.details.push('Direct access (possible DNS-level redirect)');
        logSuccess(`${redirectTest.name} handled (200 response)`);
      } else {
        logWarning(`${redirectTest.name} failed with status: ${response.statusCode}`);
      }

      testResults.tests.push(test);
      if (test.passed) {
        testResults.passed++;
      } else {
        testResults.warnings++;
      }
    } catch (error) {
      logWarning(`${redirectTest.name} test failed: ${error.message}`);
      testResults.tests.push({
        name: redirectTest.name,
        url: redirectTest.from,
        passed: false,
        error: error.message
      });
      testResults.warnings++;
    }
  }
}

async function testPerformance() {
  logInfo('Testing performance...');
  
  const performanceTargets = {
    homepage: 2000, // 2 seconds
    api: 1000 // 1 second
  };

  try {
    // Test homepage performance
    const homepageStart = performance.now();
    const homepageResponse = await makeRequestWithRetry(`https://${CONFIG.domain}`);
    const homepageTime = performance.now() - homepageStart;

    const homepageTest = {
      name: 'Homepage Performance',
      url: `https://${CONFIG.domain}`,
      passed: homepageTime < performanceTargets.homepage,
      responseTime: Math.round(homepageTime),
      target: performanceTargets.homepage,
      details: []
    };

    if (homepageTest.passed) {
      logSuccess(`Homepage loads in ${homepageTest.responseTime}ms (target: ${performanceTargets.homepage}ms)`);
      homepageTest.details.push('✓ Meets performance target');
      testResults.passed++;
    } else {
      logWarning(`Homepage loads in ${homepageTest.responseTime}ms (exceeds target: ${performanceTargets.homepage}ms)`);
      homepageTest.details.push('⚠ Exceeds performance target');
      testResults.warnings++;
    }

    testResults.tests.push(homepageTest);

    // Test API performance
    try {
      const apiStart = performance.now();
      await makeRequestWithRetry(`https://${CONFIG.domain}/api/health`);
      const apiTime = performance.now() - apiStart;

      const apiTest = {
        name: 'API Performance',
        url: `https://${CONFIG.domain}/api/health`,
        passed: apiTime < performanceTargets.api,
        responseTime: Math.round(apiTime),
        target: performanceTargets.api,
        details: []
      };

      if (apiTest.passed) {
        logSuccess(`API responds in ${apiTest.responseTime}ms (target: ${performanceTargets.api}ms)`);
        apiTest.details.push('✓ Meets performance target');
        testResults.passed++;
      } else {
        logWarning(`API responds in ${apiTest.responseTime}ms (exceeds target: ${performanceTargets.api}ms)`);
        apiTest.details.push('⚠ Exceeds performance target');
        testResults.warnings++;
      }

      testResults.tests.push(apiTest);
    } catch (error) {
      logWarning(`API performance test failed: ${error.message}`);
    }

  } catch (error) {
    logError(`Performance test failed: ${error.message}`);
    testResults.failed++;
  }
}

async function testSEOBasics() {
  logInfo('Testing SEO basics...');
  
  try {
    const response = await makeRequestWithRetry(`https://${CONFIG.domain}`);
    
    const test = {
      name: 'SEO Basics',
      url: `https://${CONFIG.domain}`,
      passed: true,
      details: []
    };

    // Check for title tag
    const titleMatch = response.data.match(/<title[^>]*>([^<]+)</i);
    if (titleMatch) {
      test.details.push(`✓ Title tag found: "${titleMatch[1]}"`);
    } else {
      test.details.push('⚠ Title tag missing');
      test.passed = false;
    }

    // Check for meta description
    const descriptionMatch = response.data.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)/i);
    if (descriptionMatch) {
      test.details.push('✓ Meta description found');
    } else {
      test.details.push('⚠ Meta description missing');
      test.passed = false;
    }

    // Check for viewport meta tag
    if (response.data.includes('viewport')) {
      test.details.push('✓ Viewport meta tag found');
    } else {
      test.details.push('⚠ Viewport meta tag missing');
    }

    // Check for structured data
    if (response.data.includes('application/ld+json')) {
      test.details.push('✓ Structured data found');
    } else {
      test.details.push('⚠ Structured data not detected');
    }

    if (test.passed) {
      logSuccess('Basic SEO elements are present');
      testResults.passed++;
    } else {
      logWarning('Some SEO elements are missing');
      testResults.warnings++;
    }

    testResults.tests.push(test);
  } catch (error) {
    logError(`SEO test failed: ${error.message}`);
    testResults.tests.push({
      name: 'SEO Basics',
      url: `https://${CONFIG.domain}`,
      passed: false,
      error: error.message
    });
    testResults.failed++;
  }
}

function generateReport() {
  const timestamp = new Date().toISOString();
  const reportFile = `post-deployment-report-${timestamp.split('T')[0]}.json`;
  
  const report = {
    timestamp,
    domain: CONFIG.domain,
    summary: {
      total: testResults.tests.length,
      passed: testResults.passed,
      failed: testResults.failed,
      warnings: testResults.warnings,
      success_rate: Math.round((testResults.passed / testResults.tests.length) * 100)
    },
    tests: testResults.tests
  };

  require('fs').writeFileSync(reportFile, JSON.stringify(report, null, 2));
  
  logInfo(`Detailed report saved to: ${reportFile}`);
  return report;
}

async function main() {
  console.log(`${colors.bold}🔍 Post-Deployment Testing Suite${colors.reset}`);
  console.log(`Domain: ${CONFIG.domain}`);
  console.log(`Started at: ${new Date().toISOString()}`);
  console.log('='.repeat(50));

  try {
    await testHomepage();
    await testSSLCertificate();
    await testAPIEndpoints();
    await testRedirects();
    await testPerformance();
    await testSEOBasics();
    
    console.log('\n' + '='.repeat(50));
    console.log(`${colors.bold}📊 Test Results Summary${colors.reset}`);
    console.log(`Total Tests: ${testResults.tests.length}`);
    logSuccess(`Passed: ${testResults.passed}`);
    logError(`Failed: ${testResults.failed}`);
    logWarning(`Warnings: ${testResults.warnings}`);
    
    const successRate = Math.round((testResults.passed / testResults.tests.length) * 100);
    console.log(`Success Rate: ${successRate}%`);

    const report = generateReport();
    
    if (testResults.failed === 0 && testResults.warnings <= 2) {
      logSuccess('🎉 Deployment verification passed! Your website is ready for production.');
      process.exit(0);
    } else if (testResults.failed === 0) {
      logWarning('⚠️ Deployment verification completed with warnings. Review the issues above.');
      process.exit(1);
    } else {
      logError('❌ Deployment verification failed. Critical issues need to be resolved.');
      process.exit(2);
    }

  } catch (error) {
    logError(`Test suite failed: ${error.message}`);
    process.exit(3);
  }
}

// Handle command line arguments
if (process.argv.length > 2) {
  CONFIG.domain = process.argv[2];
}

// Run main function
if (require.main === module) {
  main().catch(error => {
    logError(`Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { main, testResults };