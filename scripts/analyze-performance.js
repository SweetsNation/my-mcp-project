#!/usr/bin/env node
/**
 * Performance Analysis Script
 * Analyzes bundle size, render-blocking resources, and potential optimizations
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔍 Analyzing performance...\n');

// Analyze component sizes
function analyzeComponentSizes() {
  const components = glob.sync('src/components/**/*.tsx', {
    cwd: process.cwd(),
    absolute: true,
  });

  const sizes = components.map((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n').length;
    const bytes = Buffer.byteLength(content, 'utf8');
    
    return {
      file: path.relative(process.cwd(), file),
      lines,
      bytes,
      kb: (bytes / 1024).toFixed(2),
    };
  }).sort((a, b) => b.bytes - a.bytes);

  return sizes;
}

// Check for dynamic imports
function checkDynamicImports() {
  const files = glob.sync('src/**/*.{tsx,jsx,ts,js}', {
    cwd: process.cwd(),
    absolute: true,
  });

  const withDynamic = [];
  const withoutDynamic = [];

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('dynamic(') || content.includes('lazy(')) {
      withDynamic.push(path.relative(process.cwd(), file));
    } else if (file.includes('components/') && content.length > 5000) {
      withoutDynamic.push({
        file: path.relative(process.cwd(), file),
        size: (content.length / 1024).toFixed(2) + ' KB',
      });
    }
  });

  return { withDynamic, withoutDynamic };
}

// Check for force-dynamic pages
function checkDynamicPages() {
  const pages = glob.sync('src/app/**/page.tsx', {
    cwd: process.cwd(),
    absolute: true,
  });

  const dynamicPages = [];
  const staticPages = [];

  pages.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes("dynamic = 'force-dynamic'")) {
      dynamicPages.push(path.relative(process.cwd(), file));
    } else {
      staticPages.push(path.relative(process.cwd(), file));
    }
  });

  return { dynamicPages, staticPages };
}

// Check for potential render-blocking issues
function checkRenderBlocking() {
  const layoutFiles = glob.sync('src/app/**/layout.tsx', {
    cwd: process.cwd(),
    absolute: true,
  });

  const issues = [];

  layoutFiles.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    // Check for synchronous scripts
    if (content.includes('<script>') && !content.includes('async') && !content.includes('defer')) {
      issues.push({
        file: relativePath,
        issue: 'Synchronous script without async/defer',
      });
    }

    // Check for heavy imports in layouts
    if (content.includes('import') && content.includes('Framer') || content.includes('motion')) {
      issues.push({
        file: relativePath,
        issue: 'Heavy animation library in layout (consider dynamic import)',
      });
    }
  });

  return issues;
}

// Run analysis
console.log('═'.repeat(70));
console.log('                    PERFORMANCE ANALYSIS');
console.log('═'.repeat(70));
console.log('');

// Component sizes
console.log('📦 Largest Components:\n');
const sizes = analyzeComponentSizes();
sizes.slice(0, 10).forEach((comp, i) => {
  console.log(`  ${i + 1}. ${comp.file}`);
  console.log(`     Size: ${comp.kb} KB (${comp.lines} lines)\n`);
});

// Dynamic imports
console.log('═'.repeat(70));
console.log('\n🔄 Code Splitting Analysis:\n');
const { withDynamic, withoutDynamic } = checkDynamicImports();
console.log(`  ✅ Files using dynamic imports: ${withDynamic.length}`);
if (withDynamic.length > 0) {
  withDynamic.slice(0, 5).forEach(file => console.log(`     - ${file}`));
}
console.log(`\n  ⚠️  Large files without dynamic imports: ${withoutDynamic.length}`);
if (withoutDynamic.length > 0) {
  console.log('     Consider lazy loading these:');
  withoutDynamic.slice(0, 5).forEach(({ file, size }) => {
    console.log(`     - ${file} (${size})`);
  });
}

// Static vs Dynamic pages
console.log('\n═'.repeat(70));
console.log('\n📄 Page Rendering Strategy:\n');
const { dynamicPages, staticPages } = checkDynamicPages();
console.log(`  🔄 Dynamic pages (force-dynamic): ${dynamicPages.length}`);
console.log(`  ⚡ Static-eligible pages: ${staticPages.length}`);

if (dynamicPages.length > 0) {
  console.log('\n  ⚠️  Pages forcing dynamic rendering:');
  dynamicPages.slice(0, 10).forEach(page => console.log(`     - ${page}`));
  console.log('\n  💡 Tip: Review if these pages really need force-dynamic');
}

// Render-blocking issues
console.log('\n═'.repeat(70));
console.log('\n⚠️  Potential Render-Blocking Issues:\n');
const renderBlockingIssues = checkRenderBlocking();
if (renderBlockingIssues.length > 0) {
  renderBlockingIssues.forEach(issue => {
    console.log(`  ${issue.file}`);
    console.log(`  Issue: ${issue.issue}\n`);
  });
} else {
  console.log('  ✅ No obvious render-blocking issues found!\n');
}

// Recommendations
console.log('═'.repeat(70));
console.log('\n🎯 Performance Optimization Recommendations:\n');

const recommendations = [];

if (withoutDynamic.length > 3) {
  recommendations.push({
    priority: 'HIGH',
    item: `Code splitting: ${withoutDynamic.length} large components could benefit from dynamic imports`,
    action: 'Use next/dynamic to lazy load heavy components',
  });
}

if (dynamicPages.length > staticPages.length * 0.5) {
  recommendations.push({
    priority: 'MEDIUM',
    item: `Too many dynamic pages: ${dynamicPages.length}/${dynamicPages.length + staticPages.length}`,
    action: 'Review if all pages need force-dynamic, enable static generation where possible',
  });
}

if (sizes[0].bytes > 50000) {
  recommendations.push({
    priority: 'MEDIUM',
    item: `Large component detected: ${sizes[0].file} (${sizes[0].kb} KB)`,
    action: 'Consider splitting into smaller components or lazy loading',
  });
}

recommendations.push({
  priority: 'LOW',
  item: 'Image optimization',
  action: 'Ensure all images use Next.js Image component with proper sizing',
});

recommendations.push({
  priority: 'LOW',
  item: 'Font loading',
  action: 'Use next/font for optimal font loading with font-display: swap',
});

if (recommendations.length > 0) {
  recommendations.forEach((rec, i) => {
    console.log(`  ${i + 1}. [${rec.priority}] ${rec.item}`);
    console.log(`     Action: ${rec.action}\n`);
  });
}

console.log('═'.repeat(70));
console.log('\n✅ Analysis complete!\n');
console.log('Run these commands for more details:');
console.log('  - npm run build (check bundle sizes)');
console.log('  - npm run analyze (if webpack-bundle-analyzer is installed)');
console.log('  - npx lighthouse https://your-site.com --view');
console.log('');

