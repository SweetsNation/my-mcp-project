#!/usr/bin/env node
/**
 * Script to add Open Graph images to all metadata objects
 * This ensures proper social media sharing for all pages
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files
const files = glob.sync('src/app/**/page.tsx', {
  cwd: process.cwd(),
  absolute: true,
});

let updatedCount = 0;
let errorCount = 0;

console.log(`Found ${files.length} page files to process...\n`);

files.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let modified = false;

    // Check if file has metadata with openGraph
    if (content.includes('openGraph:') && !content.includes('openGraph: {')) {
      console.log(`Skipping ${path.relative(process.cwd(), filePath)} - openGraph not in object format`);
      return;
    }

    // Pattern 1: Add images array to openGraph if it doesn't exist
    if (content.includes('openGraph: {') && !content.includes('images:')) {
      const openGraphRegex = /(openGraph:\s*{[^}]*)(}\s*,)/s;
      const match = content.match(openGraphRegex);
      
      if (match) {
        // Determine the appropriate OG image based on the file path
        let imagePath = '/images/og-default.jpg';
        let imageAlt = 'El-Mag Insurance - Medicare and Health Insurance Solutions';
        
        if (filePath.includes('/medicare-advantage/')) {
          imagePath = '/images/og-medicare-advantage.jpg';
          imageAlt = 'Medicare Advantage Plans - El-Mag Insurance';
        } else if (filePath.includes('/blog')) {
          imagePath = '/images/og-blog.jpg';
          imageAlt = 'El-Mag Insurance Blog - Medicare Education';
        } else if (filePath.includes('/contact')) {
          imagePath = '/images/og-contact.jpg';
          imageAlt = 'Contact El-Mag Insurance';
        } else if (filePath.includes('/medicare-supplement')) {
          imagePath = '/images/og-medicare-supplement.jpg';
          imageAlt = 'Medicare Supplement Plans - El-Mag Insurance';
        } else if (filePath.includes('/medicare-part-d')) {
          imagePath = '/images/og-medicare-part-d.jpg';
          imageAlt = 'Medicare Part D Plans - El-Mag Insurance';
        } else if (filePath.includes('/health-insurance-marketplace')) {
          imagePath = '/images/og-marketplace.jpg';
          imageAlt = 'Health Insurance Marketplace - El-Mag Insurance';
        } else if (filePath.includes('app/page.tsx')) {
          imagePath = '/images/og-home.jpg';
          imageAlt = 'El-Mag Insurance - Medicare Plans 2025';
        }

        const replacement = `${match[1]},
      images: [
        {
          url: 'https://www.elmaginsurance.com${imagePath}',
          width: 1200,
          height: 630,
          alt: '${imageAlt}',
        },
      ],
    ${match[2]}`;
        
        content = content.replace(openGraphRegex, replacement);
        modified = true;
      }
    }

    // Pattern 2: Add URL to openGraph if missing
    if (content.includes('openGraph: {') && !content.includes('url:') && !content.includes('openGraph: {\n')) {
      // Extract the canonical URL from alternates if it exists
      const canonicalRegex = /canonical:\s*['"]([^'"]+)['"]/;
      const canonicalMatch = content.match(canonicalRegex);
      
      if (canonicalMatch) {
        const url = canonicalMatch[1];
        const openGraphRegex = /(openGraph:\s*{)/;
        const replacement = `$1\n    url: '${url}',`;
        content = content.replace(openGraphRegex, replacement);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
      console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
    }

  } catch (error) {
    errorCount++;
    console.error(`❌ Error processing ${path.relative(process.cwd(), filePath)}:`, error.message);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`Summary:`);
console.log(`  Total files processed: ${files.length}`);
console.log(`  Files updated: ${updatedCount}`);
console.log(`  Errors: ${errorCount}`);
console.log(`${'='.repeat(60)}\n`);

if (updatedCount > 0) {
  console.log('✅ Open Graph images have been added to metadata!');
  console.log('\n⚠️  IMPORTANT: You need to create the actual OG image files:');
  console.log('  - /public/images/og-home.jpg (1200x630px)');
  console.log('  - /public/images/og-default.jpg (1200x630px)');
  console.log('  - /public/images/og-medicare-advantage.jpg (1200x630px)');
  console.log('  - /public/images/og-medicare-supplement.jpg (1200x630px)');
  console.log('  - /public/images/og-medicare-part-d.jpg (1200x630px)');
  console.log('  - /public/images/og-marketplace.jpg (1200x630px)');
  console.log('  - /public/images/og-blog.jpg (1200x630px)');
  console.log('  - /public/images/og-contact.jpg (1200x630px)');
  console.log('  - /public/images/og-plan-finder.jpg (1200x630px)');
  console.log('\nRecommended tool for creating OG images: Canva or Figma');
  console.log('Optimal size: 1200x630 pixels (1.91:1 ratio)');
}

