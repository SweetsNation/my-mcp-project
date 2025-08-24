#!/usr/bin/env node
/**
 * Comprehensive Production Testing Suite
 * Tests all functionality in production environment
 */

const fs = require('fs');
const https = require('https');
const http = require('http');
const { performance } = require('perf_hooks');
const { spawn } = require('child_process');

// Configuration
const CONFIG = {
  domain: process.env.PRODUCTION_DOMAIN || 'elmag-insurance.com',
  timeout: 15000,
  retries: 2,
  parallel: true,
  generateReport: true,
  testCategories: {
    functionality: true,
    performance: true,
    security: true,
    seo: true,
    integration: true,
    mobile: true,
    accessibility: false // Requires additional tools
  }
};

// Test results collector
const testSuite = {
  startTime: Date.now(),
  results: {
    functionality: { passed: 0, failed: 0, warnings: 0, tests: [] },
    performance: { passed: 0, failed: 0, warnings: 0, tests: [] },
    security: { passed: 0, failed: 0, warnings: 0, tests: [] },
    seo: { passed: 0, failed: 0, warnings: 0, tests: [] },
    integration: { passed: 0, failed: 0, warnings: 0, tests: [] },
    mobile: { passed: 0, failed: 0, warnings: 0, tests: [] }
  },
  summary: { total: 0, passed: 0, failed: 0, warnings: 0 }
};

// Utility functions
const colors = {
  green: '\x1b[32m', red: '\x1b[31m', yellow: '\x1b[33m',
  blue: '\x1b[34m', magenta: '\x1b[35m', cyan: '\x1b[36m',
  reset: '\x1b[0m', bold: '\x1b[1m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logTest(category, message, status = 'info') {
  const icons = { pass: '✅', fail: '❌', warn: '⚠️', info: 'ℹ️' };
  const colorMap = { pass: colors.green, fail: colors.red, warn: colors.yellow, info: colors.blue };
  log(`${icons[status]} [${category.toUpperCase()}] ${message}`, colorMap[status]);
}

// HTTP request utility with comprehensive options
async function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const protocol = url.startsWith('https:') ? https : http;
    
    const requestOptions = {
      timeout: CONFIG.timeout,
      headers: {
        'User-Agent': 'ElMag-Production-Test-Suite/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'DNT': '1',
        'Connection': 'keep-alive',
        ...options.headers
      },
      method: options.method || 'GET',
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
          url: url,
          redirected: res.url !== url
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout after ${CONFIG.timeout}ms`));
    });

    req.on('error', reject);

    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

// Record test result
function recordTest(category, test) {
  testSuite.results[category].tests.push(test);
  
  if (test.passed) {
    testSuite.results[category].passed++;
    testSuite.summary.passed++;
  } else if (test.warning) {
    testSuite.results[category].warnings++;
    testSuite.summary.warnings++;
  } else {
    testSuite.results[category].failed++;
    testSuite.summary.failed++;
  }
  
  testSuite.summary.total++;
}

// ==================== FUNCTIONALITY TESTS ====================

async function testCoreFunctionality() {
  logTest('functionality', 'Testing core website functionality...', 'info');
  
  // Test homepage
  try {
    const response = await makeRequest(`https://${CONFIG.domain}`);
    const homepageTest = {
      name: 'Homepage Loading',
      url: `https://${CONFIG.domain}`,
      passed: response.statusCode === 200,
      statusCode: response.statusCode,
      responseTime: Math.round(response.responseTime),
      details: []
    };

    if (homepageTest.passed) {
      logTest('functionality', `Homepage loaded (${response.statusCode}, ${homepageTest.responseTime}ms)`, 'pass');
      
      // Check for key content
      const content = response.data.toLowerCase();
      const contentChecks = [
        { key: 'el-mag insurance', name: 'Company name' },
        { key: 'medicare advantage', name: 'Medicare Advantage content' },
        { key: 'contact', name: 'Contact information' },
        { key: 'quote', name: 'Quote functionality' }
      ];

      contentChecks.forEach(check => {
        if (content.includes(check.key)) {
          homepageTest.details.push(`✓ ${check.name} found`);
        } else {
          homepageTest.details.push(`⚠ ${check.name} not found`);
        }
      });
    } else {
      logTest('functionality', `Homepage failed (${response.statusCode})`, 'fail');
    }

    recordTest('functionality', homepageTest);
  } catch (error) {
    logTest('functionality', `Homepage test failed: ${error.message}`, 'fail');
    recordTest('functionality', {
      name: 'Homepage Loading',
      url: `https://${CONFIG.domain}`,
      passed: false,
      error: error.message
    });
  }

  // Test Medicare Advantage pages
  const medicarePages = [
    '/medicare-advantage',
    '/medicare-advantage/davidson-county-tennessee',
    '/medicare-advantage/fulton-county-georgia',
    '/medicare-advantage/jefferson-county-alabama',
    '/medicare-advantage/wake-county-north-carolina'
  ];

  for (const page of medicarePages) {
    try {
      const response = await makeRequest(`https://${CONFIG.domain}${page}`);
      const pageTest = {
        name: `Medicare Page: ${page}`,
        url: `https://${CONFIG.domain}${page}`,
        passed: response.statusCode === 200,
        statusCode: response.statusCode,
        responseTime: Math.round(response.responseTime)
      };

      if (pageTest.passed) {
        logTest('functionality', `${page} loaded successfully`, 'pass');
      } else {
        logTest('functionality', `${page} failed (${response.statusCode})`, 'fail');
      }

      recordTest('functionality', pageTest);
    } catch (error) {
      logTest('functionality', `${page} test failed: ${error.message}`, 'fail');
      recordTest('functionality', {
        name: `Medicare Page: ${page}`,
        url: `https://${CONFIG.domain}${page}`,
        passed: false,
        error: error.message
      });
    }
  }
}

// ==================== PERFORMANCE TESTS ====================

async function testPerformance() {
  logTest('performance', 'Testing performance metrics...', 'info');
  
  const performanceTargets = {
    homepage: 3000, // 3 seconds
    api: 1000,      // 1 second
    images: 2000    // 2 seconds
  };

  // Homepage performance
  try {
    const startTime = performance.now();
    const response = await makeRequest(`https://${CONFIG.domain}`);
    const loadTime = performance.now() - startTime;

    const perfTest = {
      name: 'Homepage Performance',
      url: `https://${CONFIG.domain}`,
      passed: loadTime < performanceTargets.homepage,
      responseTime: Math.round(loadTime),
      target: performanceTargets.homepage,
      details: []
    };

    if (perfTest.passed) {
      logTest('performance', `Homepage loads in ${perfTest.responseTime}ms (target: ${performanceTargets.homepage}ms)`, 'pass');
      perfTest.details.push('✓ Meets performance target');
    } else {
      logTest('performance', `Homepage slow: ${perfTest.responseTime}ms (target: ${performanceTargets.homepage}ms)`, 'warn');
      perfTest.details.push('⚠ Exceeds performance target');
    }

    // Check response size
    const contentLength = response.headers['content-length'];
    if (contentLength) {
      const sizeKB = Math.round(parseInt(contentLength) / 1024);
      perfTest.details.push(`Page size: ${sizeKB}KB`);
      
      if (sizeKB > 500) {
        perfTest.details.push('⚠ Page size is large, consider optimization');
      } else {
        perfTest.details.push('✓ Page size is reasonable');
      }
    }

    recordTest('performance', perfTest);
  } catch (error) {
    logTest('performance', `Performance test failed: ${error.message}`, 'fail');
    recordTest('performance', {
      name: 'Homepage Performance',
      passed: false,
      error: error.message
    });
  }

  // API performance
  try {
    const apiStart = performance.now();
    const response = await makeRequest(`https://${CONFIG.domain}/api/health`);
    const apiTime = performance.now() - apiStart;

    const apiTest = {
      name: 'API Performance',
      url: `https://${CONFIG.domain}/api/health`,
      passed: apiTime < performanceTargets.api,
      responseTime: Math.round(apiTime),
      target: performanceTargets.api
    };

    if (apiTest.passed) {
      logTest('performance', `API responds in ${apiTest.responseTime}ms`, 'pass');
    } else {
      logTest('performance', `API slow: ${apiTest.responseTime}ms`, 'warn');
    }

    recordTest('performance', apiTest);
  } catch (error) {
    logTest('performance', `API performance test failed: ${error.message}`, 'warn');
    recordTest('performance', {
      name: 'API Performance',
      passed: false,
      warning: true,
      error: error.message
    });
  }
}

// ==================== SECURITY TESTS ====================

async function testSecurity() {
  logTest('security', 'Testing security configuration...', 'info');
  
  try {
    const response = await makeRequest(`https://${CONFIG.domain}`);
    
    const securityTest = {
      name: 'Security Headers',
      url: `https://${CONFIG.domain}`,
      passed: true,
      details: []
    };

    const securityHeaders = [
      { header: 'strict-transport-security', name: 'HSTS', required: true },
      { header: 'x-content-type-options', name: 'Content-Type Options', required: true },
      { header: 'x-frame-options', name: 'Frame Options', required: true },
      { header: 'x-xss-protection', name: 'XSS Protection', required: false },
      { header: 'referrer-policy', name: 'Referrer Policy', required: false },
      { header: 'content-security-policy', name: 'CSP', required: false }
    ];

    securityHeaders.forEach(({ header, name, required }) => {
      if (response.headers[header]) {
        securityTest.details.push(`✓ ${name} header present`);
      } else {
        const message = `${required ? '❌' : '⚠'} ${name} header missing`;
        securityTest.details.push(message);
        if (required) securityTest.passed = false;
      }
    });

    if (securityTest.passed) {
      logTest('security', 'Security headers properly configured', 'pass');
    } else {
      logTest('security', 'Some required security headers missing', 'fail');
    }

    recordTest('security', securityTest);
  } catch (error) {
    logTest('security', `Security test failed: ${error.message}`, 'fail');
    recordTest('security', {
      name: 'Security Headers',
      passed: false,
      error: error.message
    });
  }

  // Test HTTPS redirect
  try {
    const httpResponse = await makeRequest(`http://${CONFIG.domain}`, { followRedirect: false });
    
    const httpsTest = {
      name: 'HTTPS Redirect',
      url: `http://${CONFIG.domain}`,
      passed: [301, 302, 308].includes(httpResponse.statusCode),
      statusCode: httpResponse.statusCode,
      details: []
    };

    if (httpsTest.passed && httpResponse.headers.location) {
      httpsTest.details.push(`✓ Redirects to: ${httpResponse.headers.location}`);
      logTest('security', 'HTTP to HTTPS redirect working', 'pass');
    } else {
      httpsTest.details.push('⚠ HTTPS redirect not detected');
      logTest('security', 'HTTPS redirect may not be configured', 'warn');
    }

    recordTest('security', httpsTest);
  } catch (error) {
    logTest('security', `HTTPS redirect test failed: ${error.message}`, 'warn');
    recordTest('security', {
      name: 'HTTPS Redirect',
      passed: false,
      warning: true,
      error: error.message
    });
  }
}

// ==================== SEO TESTS ====================

async function testSEO() {
  logTest('seo', 'Testing SEO optimization...', 'info');
  
  try {
    const response = await makeRequest(`https://${CONFIG.domain}`);
    
    const seoTest = {
      name: 'SEO Basics',
      url: `https://${CONFIG.domain}`,
      passed: true,
      details: []
    };

    const content = response.data;

    // Title tag
    const titleMatch = content.match(/<title[^>]*>([^<]+)</i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      seoTest.details.push(`✓ Title: "${title}"`);
      
      if (title.length < 30 || title.length > 60) {
        seoTest.details.push(`⚠ Title length (${title.length}) should be 30-60 characters`);
      } else {
        seoTest.details.push('✓ Title length optimal');
      }
    } else {
      seoTest.details.push('❌ Title tag missing');
      seoTest.passed = false;
    }

    // Meta description
    const descMatch = content.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)/i);
    if (descMatch) {
      const desc = descMatch[1].trim();
      seoTest.details.push('✓ Meta description found');
      
      if (desc.length < 120 || desc.length > 160) {
        seoTest.details.push(`⚠ Description length (${desc.length}) should be 120-160 characters`);
      } else {
        seoTest.details.push('✓ Description length optimal');
      }
    } else {
      seoTest.details.push('❌ Meta description missing');
      seoTest.passed = false;
    }

    // Viewport meta tag
    if (content.includes('name="viewport"')) {
      seoTest.details.push('✓ Viewport meta tag present');
    } else {
      seoTest.details.push('⚠ Viewport meta tag missing');
    }

    // Structured data
    if (content.includes('application/ld+json')) {
      seoTest.details.push('✓ Structured data detected');
    } else {
      seoTest.details.push('⚠ Structured data not found');
    }

    // Open Graph tags
    const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
    let ogCount = 0;
    ogTags.forEach(tag => {
      if (content.includes(`property="${tag}"`)) {
        ogCount++;
      }
    });
    
    if (ogCount >= 3) {
      seoTest.details.push(`✓ Open Graph tags present (${ogCount}/4)`);
    } else {
      seoTest.details.push(`⚠ Open Graph tags incomplete (${ogCount}/4)`);
    }

    if (seoTest.passed) {
      logTest('seo', 'Basic SEO elements configured', 'pass');
    } else {
      logTest('seo', 'SEO optimization needs attention', 'warn');
    }

    recordTest('seo', seoTest);
  } catch (error) {
    logTest('seo', `SEO test failed: ${error.message}`, 'fail');
    recordTest('seo', {
      name: 'SEO Basics',
      passed: false,
      error: error.message
    });
  }

  // Test sitemap and robots.txt
  const seoFiles = [
    { path: '/sitemap.xml', name: 'XML Sitemap' },
    { path: '/robots.txt', name: 'Robots.txt' }
  ];

  for (const file of seoFiles) {
    try {
      const response = await makeRequest(`https://${CONFIG.domain}${file.path}`);
      
      const fileTest = {
        name: file.name,
        url: `https://${CONFIG.domain}${file.path}`,
        passed: response.statusCode === 200,
        statusCode: response.statusCode
      };

      if (fileTest.passed) {
        logTest('seo', `${file.name} accessible`, 'pass');
      } else {
        logTest('seo', `${file.name} not found (${response.statusCode})`, 'warn');
        fileTest.warning = true;
      }

      recordTest('seo', fileTest);
    } catch (error) {
      logTest('seo', `${file.name} test failed: ${error.message}`, 'warn');
      recordTest('seo', {
        name: file.name,
        passed: false,
        warning: true,
        error: error.message
      });
    }
  }
}

// ==================== INTEGRATION TESTS ====================

async function testIntegrations() {
  logTest('integration', 'Testing third-party integrations...', 'info');
  
  // Test form submission API
  try {
    const formData = JSON.stringify({
      name: 'Production Test',
      email: 'test@example.com',
      phone: '555-0123',
      zipCode: '12345',
      message: 'Automated production test - please ignore',
      source: 'production-test'
    });

    const response = await makeRequest(`https://${CONFIG.domain}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(formData)
      },
      body: formData
    });

    const formTest = {
      name: 'Contact Form API',
      url: `https://${CONFIG.domain}/api/contact`,
      passed: response.statusCode === 200,
      statusCode: response.statusCode,
      details: []
    };

    if (formTest.passed) {
      logTest('integration', 'Contact form API working', 'pass');
      formTest.details.push('✓ Form submission processed');
    } else {
      logTest('integration', `Contact form API failed (${response.statusCode})`, 'fail');
      formTest.details.push('❌ Form submission failed');
    }

    recordTest('integration', formTest);
  } catch (error) {
    logTest('integration', `Contact form test failed: ${error.message}`, 'fail');
    recordTest('integration', {
      name: 'Contact Form API',
      passed: false,
      error: error.message
    });
  }

  // Test analytics integration (check for GA script)
  try {
    const response = await makeRequest(`https://${CONFIG.domain}`);
    
    const analyticsTest = {
      name: 'Google Analytics Integration',
      url: `https://${CONFIG.domain}`,
      passed: false,
      details: []
    };

    if (response.data.includes('gtag') || response.data.includes('google-analytics')) {
      analyticsTest.passed = true;
      analyticsTest.details.push('✓ Google Analytics script found');
      logTest('integration', 'Google Analytics integration detected', 'pass');
    } else {
      analyticsTest.details.push('⚠ Google Analytics script not detected');
      logTest('integration', 'Google Analytics integration not found', 'warn');
      analyticsTest.warning = true;
    }

    recordTest('integration', analyticsTest);
  } catch (error) {
    logTest('integration', `Analytics test failed: ${error.message}`, 'warn');
    recordTest('integration', {
      name: 'Google Analytics Integration',
      passed: false,
      warning: true,
      error: error.message
    });
  }

  // Test chat widget integration
  try {
    const response = await makeRequest(`https://${CONFIG.domain}`);
    
    const chatTest = {
      name: 'Live Chat Integration',
      url: `https://${CONFIG.domain}`,
      passed: false,
      details: []
    };

    if (response.data.includes('tawk') || response.data.includes('embed.tawk.to')) {
      chatTest.passed = true;
      chatTest.details.push('✓ Tawk.to chat widget found');
      logTest('integration', 'Live chat integration detected', 'pass');
    } else {
      chatTest.details.push('⚠ Live chat widget not detected');
      logTest('integration', 'Live chat integration not found', 'warn');
      chatTest.warning = true;
    }

    recordTest('integration', chatTest);
  } catch (error) {
    logTest('integration', `Chat widget test failed: ${error.message}`, 'warn');
    recordTest('integration', {
      name: 'Live Chat Integration',
      passed: false,
      warning: true,
      error: error.message
    });
  }
}

// ==================== MOBILE TESTS ====================

async function testMobile() {
  logTest('mobile', 'Testing mobile compatibility...', 'info');
  
  // Test with mobile user agent
  const mobileUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';
  
  try {
    const response = await makeRequest(`https://${CONFIG.domain}`, {
      headers: {
        'User-Agent': mobileUA
      }
    });

    const mobileTest = {
      name: 'Mobile Compatibility',
      url: `https://${CONFIG.domain}`,
      passed: response.statusCode === 200,
      statusCode: response.statusCode,
      responseTime: Math.round(response.responseTime),
      details: []
    };

    if (mobileTest.passed) {
      logTest('mobile', `Mobile version loads (${mobileTest.responseTime}ms)`, 'pass');
      
      // Check for viewport meta tag
      if (response.data.includes('viewport')) {
        mobileTest.details.push('✓ Viewport meta tag present');
      } else {
        mobileTest.details.push('⚠ Viewport meta tag missing');
      }

      // Check for responsive CSS
      if (response.data.includes('@media') || response.data.includes('responsive')) {
        mobileTest.details.push('✓ Responsive CSS detected');
      } else {
        mobileTest.details.push('⚠ Responsive CSS not detected');
      }

      // Performance check for mobile
      if (mobileTest.responseTime < 4000) {
        mobileTest.details.push('✓ Good mobile performance');
      } else {
        mobileTest.details.push('⚠ Slow mobile performance');
      }
    } else {
      logTest('mobile', `Mobile version failed (${response.statusCode})`, 'fail');
    }

    recordTest('mobile', mobileTest);
  } catch (error) {
    logTest('mobile', `Mobile test failed: ${error.message}`, 'fail');
    recordTest('mobile', {
      name: 'Mobile Compatibility',
      passed: false,
      error: error.message
    });
  }
}

// ==================== REPORT GENERATION ====================

function generateComprehensiveReport() {
  const endTime = Date.now();
  const duration = Math.round((endTime - testSuite.startTime) / 1000);
  
  const report = {
    metadata: {
      domain: CONFIG.domain,
      timestamp: new Date().toISOString(),
      duration_seconds: duration,
      test_suite_version: '1.0.0'
    },
    summary: {
      ...testSuite.summary,
      success_rate: Math.round((testSuite.summary.passed / testSuite.summary.total) * 100),
      categories_tested: Object.keys(testSuite.results).length
    },
    categories: {},
    recommendations: [],
    critical_issues: []
  };

  // Process categories
  Object.entries(testSuite.results).forEach(([category, results]) => {
    const totalTests = results.tests.length;
    const successRate = totalTests > 0 ? Math.round((results.passed / totalTests) * 100) : 0;
    
    report.categories[category] = {
      total_tests: totalTests,
      passed: results.passed,
      failed: results.failed,
      warnings: results.warnings,
      success_rate: successRate,
      tests: results.tests
    };

    // Generate recommendations
    if (successRate < 80) {
      report.recommendations.push(`Improve ${category} - success rate is only ${successRate}%`);
    }

    // Identify critical issues
    results.tests.forEach(test => {
      if (!test.passed && !test.warning) {
        report.critical_issues.push({
          category,
          test: test.name,
          issue: test.error || `Failed with status ${test.statusCode}`,
          url: test.url
        });
      }
    });
  });

  // Additional recommendations based on results
  if (report.summary.success_rate < 90) {
    report.recommendations.push('Overall success rate below 90% - review failed tests');
  }

  if (report.categories.performance && report.categories.performance.warnings > 0) {
    report.recommendations.push('Performance optimization needed - check slow loading resources');
  }

  if (report.categories.seo && report.categories.seo.failed > 0) {
    report.recommendations.push('SEO improvements needed - ensure meta tags and structured data');
  }

  return report;
}

function displayResults() {
  const report = generateComprehensiveReport();
  
  console.log('\n' + '='.repeat(80));
  log(`${colors.bold}🏁 COMPREHENSIVE PRODUCTION TEST RESULTS${colors.reset}`);
  console.log('='.repeat(80));
  
  log(`Domain: ${CONFIG.domain}`, colors.cyan);
  log(`Duration: ${report.metadata.duration_seconds}s`, colors.cyan);
  log(`Timestamp: ${report.metadata.timestamp}`, colors.cyan);
  
  console.log('\n📊 SUMMARY:');
  log(`Total Tests: ${report.summary.total}`, colors.blue);
  log(`✅ Passed: ${report.summary.passed}`, colors.green);
  log(`❌ Failed: ${report.summary.failed}`, colors.red);
  log(`⚠️  Warnings: ${report.summary.warnings}`, colors.yellow);
  log(`Success Rate: ${report.summary.success_rate}%`, 
      report.summary.success_rate >= 90 ? colors.green : 
      report.summary.success_rate >= 80 ? colors.yellow : colors.red);
  
  console.log('\n📋 CATEGORY BREAKDOWN:');
  Object.entries(report.categories).forEach(([category, results]) => {
    const status = results.success_rate >= 90 ? '✅' : results.success_rate >= 70 ? '⚠️' : '❌';
    log(`${status} ${category.toUpperCase()}: ${results.success_rate}% (${results.passed}/${results.total_tests})`, 
        results.success_rate >= 90 ? colors.green : 
        results.success_rate >= 70 ? colors.yellow : colors.red);
  });

  if (report.critical_issues.length > 0) {
    console.log('\n🚨 CRITICAL ISSUES:');
    report.critical_issues.forEach((issue, index) => {
      log(`${index + 1}. [${issue.category.toUpperCase()}] ${issue.test}`, colors.red);
      log(`   ${issue.issue}`, colors.red);
      log(`   URL: ${issue.url}`, colors.red);
    });
  }

  if (report.recommendations.length > 0) {
    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach((rec, index) => {
      log(`${index + 1}. ${rec}`, colors.yellow);
    });
  }

  // Save detailed report
  const reportFile = `production-test-report-${new Date().toISOString().split('T')[0]}.json`;
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  
  console.log('\n📄 DETAILED REPORT:');
  log(`Saved to: ${reportFile}`, colors.cyan);

  // Final verdict
  console.log('\n🎯 FINAL VERDICT:');
  if (report.summary.success_rate >= 95 && report.critical_issues.length === 0) {
    log('🎉 EXCELLENT! Your website is production-ready!', colors.green);
    return 0;
  } else if (report.summary.success_rate >= 85 && report.critical_issues.length <= 2) {
    log('✅ GOOD! Minor issues detected but website is functional.', colors.yellow);
    return 0;
  } else if (report.critical_issues.length > 0) {
    log('❌ CRITICAL ISSUES DETECTED! Address these before going live.', colors.red);
    return 1;
  } else {
    log('⚠️  NEEDS IMPROVEMENT! Consider fixing warnings before launch.', colors.yellow);
    return 0;
  }
}

// ==================== MAIN EXECUTION ====================

async function main() {
  log(`${colors.bold}🔬 Comprehensive Production Test Suite${colors.reset}`);
  log(`Testing: ${CONFIG.domain}`);
  log(`Started: ${new Date().toISOString()}`);
  console.log('='.repeat(80));

  try {
    if (CONFIG.testCategories.functionality) await testCoreFunctionality();
    if (CONFIG.testCategories.performance) await testPerformance();
    if (CONFIG.testCategories.security) await testSecurity();
    if (CONFIG.testCategories.seo) await testSEO();
    if (CONFIG.testCategories.integration) await testIntegrations();
    if (CONFIG.testCategories.mobile) await testMobile();

    return displayResults();
  } catch (error) {
    log(`Fatal error: ${error.message}`, colors.red);
    return 1;
  }
}

// Handle command line execution
if (require.main === module) {
  // Parse command line arguments
  if (process.argv.length > 2) {
    CONFIG.domain = process.argv[2];
  }

  main().then(exitCode => {
    process.exit(exitCode);
  }).catch(error => {
    log(`Fatal error: ${error.message}`, colors.red);
    process.exit(1);
  });
}

module.exports = { main, testSuite, CONFIG };