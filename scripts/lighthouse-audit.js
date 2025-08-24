#!/usr/bin/env node
/**
 * Lighthouse Performance Audit Script
 * Comprehensive performance, accessibility, SEO, and best practices testing
 */

const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

// Configuration
const CONFIG = {
  domain: process.env.PRODUCTION_DOMAIN || 'elmag-insurance.com',
  outputDir: './lighthouse-reports',
  categories: ['performance', 'accessibility', 'best-practices', 'seo'],
  device: 'both', // desktop, mobile, or both
  generateReport: true
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Utility functions
const colors = {
  green: '\x1b[32m', red: '\x1b[31m', yellow: '\x1b[33m',
  blue: '\x1b[34m', reset: '\x1b[0m', bold: '\x1b[1m'
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

// Run Lighthouse audit
async function runLighthouseAudit(url, device = 'desktop') {
  return new Promise((resolve, reject) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(CONFIG.outputDir, `lighthouse-${device}-${timestamp}.json`);
    const htmlFile = path.join(CONFIG.outputDir, `lighthouse-${device}-${timestamp}.html`);
    
    const lighthouseArgs = [
      url,
      '--output=json,html',
      `--output-path=${reportFile.replace('.json', '')}`,
      '--chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"',
      '--quiet'
    ];

    // Device-specific settings
    if (device === 'mobile') {
      lighthouseArgs.push('--preset=perf');
      lighthouseArgs.push('--emulated-form-factor=mobile');
    } else {
      lighthouseArgs.push('--emulated-form-factor=desktop');
      lighthouseArgs.push('--throttling.rttMs=40');
      lighthouseArgs.push('--throttling.throughputKbps=10240');
    }

    // Add category flags
    if (CONFIG.categories.length > 0) {
      lighthouseArgs.push(`--only-categories=${CONFIG.categories.join(',')}`);
    }

    logInfo(`Running Lighthouse audit for ${device}...`);
    logInfo(`URL: ${url}`);
    
    const lighthouse = spawn('lighthouse', lighthouseArgs, { 
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true 
    });
    
    let stdout = '';
    let stderr = '';
    
    lighthouse.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    lighthouse.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    lighthouse.on('close', (code) => {
      if (code === 0) {
        try {
          // Read the generated JSON report
          const reportData = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
          resolve({
            success: true,
            device,
            reportFile,
            htmlFile,
            data: reportData,
            stdout,
            stderr
          });
        } catch (error) {
          reject(new Error(`Failed to parse report: ${error.message}`));
        }
      } else {
        reject(new Error(`Lighthouse failed with code ${code}: ${stderr}`));
      }
    });
    
    lighthouse.on('error', (error) => {
      reject(new Error(`Lighthouse spawn error: ${error.message}`));
    });
  });
}

// Analyze Lighthouse results
function analyzeResults(results) {
  const analysis = {
    device: results.device,
    url: results.data.finalUrl,
    timestamp: results.data.fetchTime,
    scores: {},
    metrics: {},
    opportunities: [],
    diagnostics: [],
    recommendations: []
  };

  // Extract scores
  if (results.data.categories) {
    Object.entries(results.data.categories).forEach(([key, category]) => {
      analysis.scores[key] = {
        score: Math.round(category.score * 100),
        title: category.title,
        description: category.description
      };
    });
  }

  // Extract performance metrics
  if (results.data.audits) {
    const metricAudits = [
      'first-contentful-paint',
      'largest-contentful-paint',
      'first-meaningful-paint',
      'speed-index',
      'cumulative-layout-shift',
      'total-blocking-time',
      'interactive'
    ];

    metricAudits.forEach(auditId => {
      const audit = results.data.audits[auditId];
      if (audit && audit.displayValue) {
        analysis.metrics[auditId] = {
          value: audit.displayValue,
          score: audit.score ? Math.round(audit.score * 100) : null,
          title: audit.title,
          description: audit.description
        };
      }
    });

    // Extract opportunities (performance improvements)
    Object.entries(results.data.audits).forEach(([auditId, audit]) => {
      if (audit.details && audit.details.type === 'opportunity' && audit.score !== null && audit.score < 1) {
        analysis.opportunities.push({
          id: auditId,
          title: audit.title,
          description: audit.description,
          score: Math.round(audit.score * 100),
          savings: audit.displayValue || 'Unknown savings'
        });
      }
    });

    // Extract diagnostics (issues that don't directly impact performance score)
    const diagnosticAudits = [
      'uses-text-compression',
      'uses-responsive-images',
      'efficient-animated-content',
      'unused-css-rules',
      'unused-javascript',
      'modern-image-formats',
      'uses-optimized-images'
    ];

    diagnosticAudits.forEach(auditId => {
      const audit = results.data.audits[auditId];
      if (audit && audit.score !== null && audit.score < 1) {
        analysis.diagnostics.push({
          id: auditId,
          title: audit.title,
          description: audit.description,
          score: Math.round(audit.score * 100)
        });
      }
    });
  }

  return analysis;
}

// Generate recommendations based on scores
function generateRecommendations(analysis) {
  const recommendations = [];

  // Performance recommendations
  if (analysis.scores.performance && analysis.scores.performance.score < 90) {
    recommendations.push({
      category: 'Performance',
      priority: 'High',
      issue: `Performance score is ${analysis.scores.performance.score}/100`,
      solution: 'Optimize images, reduce JavaScript bundle size, enable compression'
    });
  }

  // Accessibility recommendations
  if (analysis.scores.accessibility && analysis.scores.accessibility.score < 95) {
    recommendations.push({
      category: 'Accessibility',
      priority: 'High',
      issue: `Accessibility score is ${analysis.scores.accessibility.score}/100`,
      solution: 'Add alt text to images, improve color contrast, ensure keyboard navigation'
    });
  }

  // SEO recommendations
  if (analysis.scores.seo && analysis.scores.seo.score < 95) {
    recommendations.push({
      category: 'SEO',
      priority: 'Medium',
      issue: `SEO score is ${analysis.scores.seo.score}/100`,
      solution: 'Add meta descriptions, improve page titles, implement structured data'
    });
  }

  // Best practices recommendations
  if (analysis.scores['best-practices'] && analysis.scores['best-practices'].score < 90) {
    recommendations.push({
      category: 'Best Practices',
      priority: 'Medium',
      issue: `Best practices score is ${analysis.scores['best-practices'].score}/100`,
      solution: 'Fix security issues, use HTTPS, update libraries to latest versions'
    });
  }

  // Performance metric recommendations
  if (analysis.metrics['largest-contentful-paint']) {
    const lcp = parseFloat(analysis.metrics['largest-contentful-paint'].value);
    if (lcp > 2.5) {
      recommendations.push({
        category: 'Core Web Vitals',
        priority: 'High',
        issue: `Largest Contentful Paint is ${analysis.metrics['largest-contentful-paint'].value}`,
        solution: 'Optimize images, preload critical resources, improve server response times'
      });
    }
  }

  if (analysis.metrics['cumulative-layout-shift']) {
    const cls = parseFloat(analysis.metrics['cumulative-layout-shift'].value);
    if (cls > 0.1) {
      recommendations.push({
        category: 'Core Web Vitals',
        priority: 'High',
        issue: `Cumulative Layout Shift is ${analysis.metrics['cumulative-layout-shift'].value}`,
        solution: 'Set image dimensions, avoid inserting content above existing content'
      });
    }
  }

  // Add opportunity-based recommendations
  analysis.opportunities.forEach(opportunity => {
    if (opportunity.score < 80) {
      recommendations.push({
        category: 'Performance Opportunity',
        priority: opportunity.score < 50 ? 'High' : 'Medium',
        issue: opportunity.title,
        solution: opportunity.description,
        savings: opportunity.savings
      });
    }
  });

  analysis.recommendations = recommendations;
  return recommendations;
}

// Display results
function displayResults(analyses) {
  console.log('\n' + '='.repeat(80));
  log(`${colors.bold}🚀 LIGHTHOUSE AUDIT RESULTS${colors.reset}`);
  console.log('='.repeat(80));

  analyses.forEach(analysis => {
    console.log(`\n📱 ${analysis.device.toUpperCase()} RESULTS:`);
    console.log('-'.repeat(40));

    // Display scores
    Object.entries(analysis.scores).forEach(([category, score]) => {
      const icon = score.score >= 90 ? '✅' : score.score >= 75 ? '⚠️' : '❌';
      const color = score.score >= 90 ? colors.green : score.score >= 75 ? colors.yellow : colors.red;
      log(`${icon} ${score.title}: ${score.score}/100`, color);
    });

    // Display key metrics
    console.log('\n📊 Core Web Vitals:');
    const coreVitals = ['first-contentful-paint', 'largest-contentful-paint', 'cumulative-layout-shift'];
    coreVitals.forEach(vital => {
      if (analysis.metrics[vital]) {
        const metric = analysis.metrics[vital];
        const icon = metric.score >= 90 ? '✅' : metric.score >= 75 ? '⚠️' : '❌';
        log(`${icon} ${metric.title}: ${metric.value}`);
      }
    });

    // Display top opportunities
    if (analysis.opportunities.length > 0) {
      console.log('\n💡 Top Performance Opportunities:');
      analysis.opportunities
        .sort((a, b) => a.score - b.score)
        .slice(0, 3)
        .forEach((opp, index) => {
          log(`${index + 1}. ${opp.title} (Score: ${opp.score}/100)`);
          if (opp.savings) log(`   Potential savings: ${opp.savings}`, colors.cyan);
        });
    }
  });

  // Overall summary
  console.log('\n🎯 OVERALL ASSESSMENT:');
  const avgScores = {};
  
  // Calculate average scores across devices
  Object.keys(analyses[0].scores).forEach(category => {
    const scores = analyses.map(a => a.scores[category].score);
    avgScores[category] = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  });

  Object.entries(avgScores).forEach(([category, avgScore]) => {
    const icon = avgScore >= 90 ? '✅' : avgScore >= 75 ? '⚠️' : '❌';
    const color = avgScore >= 90 ? colors.green : avgScore >= 75 ? colors.yellow : colors.red;
    log(`${icon} Average ${category.replace('-', ' ')}: ${avgScore}/100`, color);
  });

  // Display recommendations
  const allRecommendations = analyses.flatMap(a => a.recommendations);
  if (allRecommendations.length > 0) {
    console.log('\n📋 RECOMMENDATIONS:');
    
    const highPriority = allRecommendations.filter(r => r.priority === 'High');
    const mediumPriority = allRecommendations.filter(r => r.priority === 'Medium');

    if (highPriority.length > 0) {
      console.log('\n🔴 High Priority:');
      highPriority.forEach((rec, index) => {
        log(`${index + 1}. [${rec.category}] ${rec.issue}`, colors.red);
        log(`   Solution: ${rec.solution}`, colors.reset);
      });
    }

    if (mediumPriority.length > 0) {
      console.log('\n🟡 Medium Priority:');
      mediumPriority.slice(0, 5).forEach((rec, index) => {
        log(`${index + 1}. [${rec.category}] ${rec.issue}`, colors.yellow);
        log(`   Solution: ${rec.solution}`, colors.reset);
      });
    }
  }

  // Final verdict
  const overallScore = Math.round(Object.values(avgScores).reduce((sum, score) => sum + score, 0) / Object.keys(avgScores).length);
  
  console.log('\n🏆 FINAL VERDICT:');
  if (overallScore >= 90) {
    logSuccess(`EXCELLENT! Overall score: ${overallScore}/100 - Your website is optimized!`);
    return 0;
  } else if (overallScore >= 75) {
    logWarning(`GOOD! Overall score: ${overallScore}/100 - Minor optimizations recommended.`);
    return 0;
  } else {
    logError(`NEEDS IMPROVEMENT! Overall score: ${overallScore}/100 - Significant optimizations needed.`);
    return 1;
  }
}

// Save comprehensive report
function saveReport(analyses, overallResults) {
  const timestamp = new Date().toISOString();
  const reportFile = path.join(CONFIG.outputDir, `comprehensive-audit-${timestamp.split('T')[0]}.json`);
  
  const report = {
    metadata: {
      domain: CONFIG.domain,
      timestamp,
      devices_tested: analyses.map(a => a.device),
      categories: CONFIG.categories
    },
    summary: {
      overall_score: overallResults.overallScore,
      verdict: overallResults.verdict
    },
    results: analyses,
    recommendations: analyses.flatMap(a => a.recommendations)
  };

  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  logInfo(`Comprehensive report saved: ${reportFile}`);
  
  return reportFile;
}

// Main execution
async function main() {
  log(`${colors.bold}🔍 Lighthouse Performance Audit${colors.reset}`);
  log(`Domain: ${CONFIG.domain}`);
  log(`Output Directory: ${CONFIG.outputDir}`);
  console.log('='.repeat(60));

  try {
    // Check if Lighthouse is installed
    try {
      await new Promise((resolve, reject) => {
        const check = spawn('lighthouse', ['--version'], { stdio: 'pipe' });
        check.on('close', (code) => {
          if (code === 0) resolve();
          else reject(new Error('Lighthouse not found'));
        });
      });
      logSuccess('Lighthouse CLI found');
    } catch (error) {
      logError('Lighthouse CLI not installed. Install with: npm install -g lighthouse');
      process.exit(1);
    }

    const analyses = [];
    const devices = CONFIG.device === 'both' ? ['desktop', 'mobile'] : [CONFIG.device];
    
    // Run audits for each device
    for (const device of devices) {
      try {
        logInfo(`Starting ${device} audit...`);
        const result = await runLighthouseAudit(`https://${CONFIG.domain}`, device);
        const analysis = analyzeResults(result);
        generateRecommendations(analysis);
        analyses.push(analysis);
        
        logSuccess(`${device} audit completed`);
        logInfo(`Report saved: ${result.reportFile}`);
        logInfo(`HTML report: ${result.htmlFile}`);
      } catch (error) {
        logError(`${device} audit failed: ${error.message}`);
        process.exit(1);
      }
    }

    // Display and save results
    const exitCode = displayResults(analyses);
    
    if (CONFIG.generateReport) {
      saveReport(analyses, { overallScore: 0, verdict: 'Completed' });
    }

    logSuccess(`\nAudit completed! Check ${CONFIG.outputDir} for detailed reports.`);
    return exitCode;

  } catch (error) {
    logError(`Audit failed: ${error.message}`);
    return 1;
  }
}

// Handle command line execution
if (require.main === module) {
  // Parse command line arguments
  const args = process.argv.slice(2);
  
  if (args.length > 0) {
    CONFIG.domain = args[0];
  }
  
  // Parse additional options
  args.forEach((arg, index) => {
    if (arg === '--device' && args[index + 1]) {
      CONFIG.device = args[index + 1];
    }
    if (arg === '--mobile') {
      CONFIG.device = 'mobile';
    }
    if (arg === '--desktop') {
      CONFIG.device = 'desktop';
    }
    if (arg === '--output' && args[index + 1]) {
      CONFIG.outputDir = args[index + 1];
    }
  });

  main().then(exitCode => {
    process.exit(exitCode);
  }).catch(error => {
    logError(`Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { main, runLighthouseAudit, analyzeResults };