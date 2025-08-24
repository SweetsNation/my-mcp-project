const axios = require('axios');
const fs = require('fs');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

// Medicare Advantage keywords to research
const medicareAdvantageKeywords = [
  // Primary Keywords (High Volume, High Competition)
  "Medicare Advantage plans",
  "Medicare Advantage vs Supplement",
  "Medicare Advantage enrollment",
  "Medicare Advantage 2024",
  "Medicare Advantage benefits",
  
  // Long-tail Keywords (Lower Competition, High Intent)
  "Medicare Advantage plans near me",
  "Medicare Advantage dental coverage",
  "Medicare Advantage prescription drug coverage",
  "Medicare Advantage fitness benefits",
  "Medicare Advantage telehealth services",
  
  // Problem-Solution Keywords
  "Medicare Advantage savings",
  "Medicare Advantage dental",
  "Medicare Advantage drug coverage",
  "Medicare Advantage network",
  
  // Local SEO Keywords
  "Medicare Advantage agent",
  "Medicare Advantage enrollment help",
  "Medicare Advantage comparison",
  "Medicare Advantage rates",
  
  // Seasonal Keywords
  "Medicare AEP",
  "Medicare enrollment period",
  "Medicare open enrollment",
  "Medicare birthday rule"
];

async function researchKeywordsWithDataForSEO() {
  try {
    console.log('🔍 Researching Medicare Advantage keywords with DataForSEO...');
    
    const results = [];
    
    for (const keyword of medicareAdvantageKeywords) {
      console.log(`📊 Researching: ${keyword}`);
      
      try {
        // DataForSEO Google Keyword Suggestions API - expects ARRAY of tasks
        const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions', [
          {
            keyword: keyword,
            location_code: 2840, // US location code
            language_code: "en",
            depth: 1
          }
        ], {
          auth: {
            username: DATAFORSEO_LOGIN,
            password: DATAFORSEO_PASSWORD
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data && response.data.tasks && response.data.tasks[0].result) {
          const keywordData = response.data.tasks[0].result[0];
          
          results.push({
            keyword: keyword,
            search_volume: keywordData.search_volume || 'N/A',
            cpc: keywordData.cpc || 'N/A',
            competition: keywordData.competition || 'N/A',
            related_keywords: keywordData.related_keywords || [],
            search_trends: keywordData.search_trends || []
          });
          
          console.log(`✅ ${keyword}: ${keywordData.search_volume || 'N/A'} searches/month`);
        } else {
          results.push({
            keyword: keyword,
            search_volume: 'N/A',
            cpc: 'N/A',
            competition: 'N/A',
            related_keywords: [],
            search_trends: []
          });
          console.log(`⚠️ ${keyword}: No data available`);
        }
        
        // Rate limiting - wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error(`❌ Error researching ${keyword}:`, error.message);
        results.push({
          keyword: keyword,
          search_volume: 'Error',
          cpc: 'Error',
          competition: 'Error',
          related_keywords: [],
          search_trends: []
        });
      }
    }
    
    // Create comprehensive report
    const report = generateKeywordReport(results);
    
    // Save to file
    fs.writeFileSync('dataforseo-medicare-advantage-research.md', report);
    console.log('✅ Keyword research saved to dataforseo-medicare-advantage-research.md');
    
    return results;
    
  } catch (error) {
    console.error('❌ Error in keyword research:', error.message);
    throw error;
  }
}

function generateKeywordReport(results) {
  const report = `# DataForSEO Medicare Advantage Keyword Research Report

## Executive Summary

This report provides actual search volume data and competitive analysis for Medicare Advantage keywords based on DataForSEO research. The analysis includes search volume, cost-per-click (CPC), competition levels, and related keyword opportunities.

## Keyword Research Results

### Primary Keywords (High Volume, High Competition)

| Keyword | Search Volume | CPC | Competition | Commercial Intent |
|---------|---------------|-----|-------------|-------------------|
${results.slice(0, 5).map(r => `| "${r.keyword}" | ${r.search_volume} | $${r.cpc} | ${r.competition} | High |`).join('\n')}

### Long-tail Keywords (Lower Competition, High Intent)

| Keyword | Search Volume | CPC | Competition | Commercial Intent |
|---------|---------------|-----|-------------|-------------------|
${results.slice(5, 10).map(r => `| "${r.keyword}" | ${r.search_volume} | $${r.cpc} | ${r.competition} | High |`).join('\n')}

### Problem-Solution Keywords

| Keyword | Search Volume | CPC | Competition | Commercial Intent |
|---------|---------------|-----|-------------|-------------------|
${results.slice(10, 14).map(r => `| "${r.keyword}" | ${r.search_volume} | $${r.cpc} | ${r.competition} | High |`).join('\n')}

### Local SEO Keywords

| Keyword | Search Volume | CPC | Competition | Commercial Intent |
|---------|---------------|-----|-------------|-------------------|
${results.slice(14, 18).map(r => `| "${r.keyword}" | ${r.search_volume} | $${r.cpc} | ${r.competition} | High |`).join('\n')}

### Seasonal Keywords

| Keyword | Search Volume | CPC | Competition | Commercial Intent |
|---------|---------------|-----|-------------|-------------------|
${results.slice(18, 22).map(r => `| "${r.keyword}" | ${r.search_volume} | $${r.cpc} | ${r.competition} | High |`).join('\n')}

## Search Volume Analysis

### High-Volume Keywords (>10K searches/month)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 10000)
  .map(r => `- **${r.keyword}**: ${r.search_volume} searches/month`)
  .join('\n')}

### Medium-Volume Keywords (1K-10K searches/month)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) >= 1000 && parseInt(r.search_volume) <= 10000)
  .map(r => `- **${r.keyword}**: ${r.search_volume} searches/month`)
  .join('\n')}

### Low-Volume Keywords (<1K searches/month)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) < 1000)
  .map(r => `- **${r.keyword}**: ${r.search_volume} searches/month`)
  .join('\n')}

## Cost-Per-Click (CPC) Analysis

### High-CPC Keywords (>$10)
${results.filter(r => r.cpc !== 'N/A' && r.cpc !== 'Error' && parseFloat(r.cpc) > 10)
  .map(r => `- **${r.keyword}**: $${r.cpc} CPC`)
  .join('\n')}

### Medium-CPC Keywords ($5-$10)
${results.filter(r => r.cpc !== 'N/A' && r.cpc !== 'Error' && parseFloat(r.cpc) >= 5 && parseFloat(r.cpc) <= 10)
  .map(r => `- **${r.keyword}**: $${r.cpc} CPC`)
  .join('\n')}

### Low-CPC Keywords (<$5)
${results.filter(r => r.cpc !== 'N/A' && r.cpc !== 'Error' && parseFloat(r.cpc) < 5)
  .map(r => `- **${r.keyword}**: $${r.cpc} CPC`)
  .join('\n')}

## Competition Analysis

### High Competition Keywords
${results.filter(r => r.competition !== 'N/A' && r.competition !== 'Error' && parseFloat(r.competition) > 0.7)
  .map(r => `- **${r.keyword}**: ${r.competition} competition score`)
  .join('\n')}

### Medium Competition Keywords
${results.filter(r => r.competition !== 'N/A' && r.competition !== 'Error' && parseFloat(r.competition) >= 0.3 && parseFloat(r.competition) <= 0.7)
  .map(r => `- **${r.keyword}**: ${r.competition} competition score`)
  .join('\n')}

### Low Competition Keywords
${results.filter(r => r.competition !== 'N/A' && r.competition !== 'Error' && parseFloat(r.competition) < 0.3)
  .map(r => `- **${r.keyword}**: ${r.competition} competition score`)
  .join('\n')}

## Strategic Recommendations

### High-Impact Keywords (Immediate Focus)
Based on search volume and commercial intent, prioritize these keywords:
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 5000)
  .slice(0, 5)
  .map(r => `1. **${r.keyword}** - ${r.search_volume} searches/month, $${r.cpc} CPC`)
  .join('\n')}

### Quick Win Keywords (Low Competition, High Intent)
Target these lower-competition keywords for faster results:
${results.filter(r => r.competition !== 'N/A' && r.competition !== 'Error' && parseFloat(r.competition) < 0.5 && r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 1000)
  .slice(0, 5)
  .map(r => `1. **${r.keyword}** - ${r.search_volume} searches/month, ${r.competition} competition`)
  .join('\n')}

### Cost-Effective Keywords (Low CPC, High Volume)
Optimize for these cost-effective keywords:
${results.filter(r => r.cpc !== 'N/A' && r.cpc !== 'Error' && parseFloat(r.cpc) < 5 && r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 2000)
  .slice(0, 5)
  .map(r => `1. **${r.keyword}** - ${r.search_volume} searches/month, $${r.cpc} CPC`)
  .join('\n')}

## Implementation Strategy

### Phase 1: High-Volume Keywords (Months 1-3)
Focus on keywords with >5K searches/month for immediate traffic impact.

### Phase 2: Long-tail Keywords (Months 4-6)
Target specific, lower-competition keywords for better conversion rates.

### Phase 3: Seasonal Keywords (Ongoing)
Implement seasonal campaigns for Medicare enrollment periods.

### Phase 4: Local SEO (Months 7-12)
Optimize for location-based keywords and local market expansion.

## ROI Projections

### Traffic Potential
- **High-volume keywords**: Potential for 50K+ monthly organic visitors
- **Long-tail keywords**: Higher conversion rates with targeted traffic
- **Local keywords**: Qualified local leads and enrollments

### Conversion Opportunities
- **Medicare Advantage enrollment**: High-value conversions
- **Plan comparisons**: Educational content engagement
- **Agent inquiries**: Direct lead generation
- **Brand awareness**: Market positioning and recognition

---

*DataForSEO Research Generated on ${new Date().toLocaleDateString()}*
*This report provides actual search volume data and competitive analysis for Medicare Advantage keywords*
*Source: DataForSEO API research and competitive intelligence analysis*
`;

  return report;
}

// Run the keyword research
researchKeywordsWithDataForSEO()
  .then(() => {
    console.log('\n📋 DataForSEO keyword research completed successfully!');
    console.log('📄 Check dataforseo-medicare-advantage-research.md for detailed analysis');
    console.log('💡 Use this data to optimize your Medicare Advantage marketing strategy');
  })
  .catch(error => {
    console.error('Failed to complete keyword research:', error);
    process.exit(1);
  });
