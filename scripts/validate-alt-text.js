#!/usr/bin/env node
/**
 * Script to validate alt text on all images
 * Ensures accessibility and SEO best practices
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔍 Validating alt text on all images...\n');

// Find all TSX and JSX files
const files = glob.sync('src/**/*.{tsx,jsx}', {
  cwd: process.cwd(),
  absolute: true,
});

let totalImages = 0;
let imagesWithAlt = 0;
let imagesWithEmptyAlt = 0;
let imagesWithoutAlt = 0;
let trackingPixels = 0;

const issues = [];

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(process.cwd(), filePath);

  // Check for <img tags
  const imgRegex = /<img\s+([^>]*)>/gi;
  let match;

  while ((match = imgRegex.exec(content)) !== null) {
    totalImages++;
    const imgTag = match[0];
    const attributes = match[1];

    // Check if it's a tracking pixel (hidden/invisible)
    const isTrackingPixel = 
      /tracking|pixel|analytics|conversion/i.test(imgTag) || 
      /display:\s*none|visibility:\s*hidden/.test(content.slice(Math.max(0, match.index - 100), match.index));

    if (isTrackingPixel) {
      trackingPixels++;
      if (/alt=""/.test(attributes)) {
        imagesWithEmptyAlt++;
      }
    } else {
      // Check for alt attribute
      if (/alt=/.test(attributes)) {
        if (/alt=""/.test(attributes)) {
          imagesWithEmptyAlt++;
          issues.push({
            file: relativePath,
            line: getLineNumber(content, match.index),
            issue: 'Image has empty alt text (should be descriptive)',
            tag: imgTag.substring(0, 100) + '...',
          });
        } else {
          imagesWithAlt++;
        }
      } else {
        imagesWithoutAlt++;
        issues.push({
          file: relativePath,
          line: getLineNumber(content, match.index),
          issue: 'Image missing alt attribute',
          tag: imgTag.substring(0, 100) + '...',
        });
      }
    }
  }

  // Check for Next.js Image components
  const imageComponentRegex = /<Image\s+([^>]*)\/?>|<Image\s+([^>]*)\s*>/gi;
  
  while ((match = imageComponentRegex.exec(content)) !== null) {
    totalImages++;
    const imageTag = match[0];
    const attributes = match[1] || match[2];

    if (/alt=/.test(attributes)) {
      if (/alt=""/.test(attributes)) {
        imagesWithEmptyAlt++;
        issues.push({
          file: relativePath,
          line: getLineNumber(content, match.index),
          issue: 'Next.js Image has empty alt text (should be descriptive)',
          tag: imageTag.substring(0, 100) + '...',
        });
      } else {
        imagesWithAlt++;
      }
    } else {
      imagesWithoutAlt++;
      issues.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        issue: 'Next.js Image missing alt attribute',
        tag: imageTag.substring(0, 100) + '...',
      });
    }
  }
});

// Helper function to get line number
function getLineNumber(content, index) {
  return content.substring(0, index).split('\n').length;
}

// Print results
console.log('═'.repeat(70));
console.log('                    ALT TEXT VALIDATION RESULTS');
console.log('═'.repeat(70));
console.log(`\n📊 Summary:\n`);
console.log(`  Total images found:              ${totalImages}`);
console.log(`  ✅ Images with descriptive alt:   ${imagesWithAlt}`);
console.log(`  📌 Tracking pixels (alt=""):     ${trackingPixels}`);
console.log(`  ⚠️  Images with empty alt:        ${imagesWithEmptyAlt - trackingPixels}`);
console.log(`  ❌ Images without alt:            ${imagesWithoutAlt}`);
console.log('');

if (issues.length > 0) {
  console.log(`⚠️  Found ${issues.length} issue(s):\n`);
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.file}:${issue.line}`);
    console.log(`   Issue: ${issue.issue}`);
    console.log(`   Tag: ${issue.tag}\n`);
  });
} else {
  console.log('✅ All images have proper alt text!\n');
}

console.log('═'.repeat(70));

// Best practices reminder
console.log('\n📚 Alt Text Best Practices:\n');
console.log('  1. Describe the image content and context');
console.log('  2. Keep it concise (< 125 characters)');
console.log('  3. Don\'t start with "Image of" or "Picture of"');
console.log('  4. Use alt="" only for decorative/tracking images');
console.log('  5. Include relevant keywords naturally');
console.log('  6. Match the image\'s purpose in the page context');
console.log('');
console.log('Examples:');
console.log('  ✅ Good: "Senior couple reviewing Medicare plan options with agent"');
console.log('  ❌ Bad:  "Image of people" or "" (empty for visible images)');
console.log('');
console.log('═'.repeat(70));

// Exit with error code if issues found
if (imagesWithoutAlt > 0 || (imagesWithEmptyAlt - trackingPixels) > 0) {
  console.log('\n❌ Validation failed. Please fix the issues above.\n');
  process.exit(1);
} else {
  console.log('\n✅ Alt text validation passed!\n');
  process.exit(0);
}

