const axios = require('axios');
const fs = require('fs');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

// Medicare Advantage keywords to research
const medicareKeywords = [
  "Medicare Advantage plans",
  "Medicare Advantage enrollment",
  "Medicare Advantage benefits",
  "Medicare Advantage vs Supplement", 
  "Medicare Advantage dental coverage",
  "Medicare Advantage prescription drug coverage",
  "Medicare Advantage fitness benefits",
  "Medicare Advantage telehealth services",
  "Medicare Advantage savings",
  "Medicare Advantage agent",
  "Medicare Advantage near me",
  "Medicare Advantage 2025",
  "Medicare Advantage open enrollment",
  "best Medicare Advantage plans",
  "Medicare Advantage cost"
];

async function getSearchVolumeData(keywords) {
  console.log('📊 Getting search volume data...');
  
  try {
    const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live', [
      {
        keywords: keywords,
        location_code: 2840, // US
        language_code: "en"
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
    
    if (response.data && response.data.tasks && response.data.tasks[0] && response.data.tasks[0].result) {
      return response.data.tasks[0].result;
    }
    
    return [];
  } catch (error) {
    console.log('❌ Search volume API error:', error.response?.data || error.message);
    return [];
  }
}

async function getKeywordSuggestions(keyword) {
  console.log(`🔍 Getting keyword suggestions for: ${keyword}`);
  
  try {
    const response = await axios.post('https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live', [
      {
        keyword: keyword,
        location_code: 2840, // US
        language_code: "en",
        limit: 20
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
    
    if (response.data && response.data.tasks && response.data.tasks[0] && response.data.tasks[0].result && response.data.tasks[0].result[0]) {
      return response.data.tasks[0].result[0].items || [];
    }
    
    return [];
  } catch (error) {
    console.log('❌ Keyword suggestions API error:', error.response?.data || error.message);
    return [];
  }
}

async function researchMedicareKeywords() {
  console.log('🔍 Comprehensive Medicare Advantage keyword research with DataForSEO...\n');
  
  // Step 1: Get search volume data for all keywords
  console.log('1️⃣ Getting search volume data for primary keywords...');
  const searchVolumeData = await getSearchVolumeData(medicareKeywords);
  
  // Step 2: Get keyword suggestions for the main keyword
  console.log('\n2️⃣ Getting keyword suggestions and related keywords...');
  const suggestions = await getKeywordSuggestions("Medicare Advantage plans");
  
  // Rate limiting between requests
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Step 3: Combine and process data
  console.log('\n3️⃣ Processing and combining data...');
  
  const results = [];
  
  // Process primary keywords with search volume data
  searchVolumeData.forEach(item => {
    results.push({
      keyword: item.keyword,
      search_volume: item.search_volume || 'N/A',
      cpc: item.cpc || 'N/A',
      competition: item.competition || 'N/A',
      competition_index: item.competition_index || 'N/A',
      low_bid: item.low_top_of_page_bid || 'N/A',
      high_bid: item.high_top_of_page_bid || 'N/A',
      monthly_searches: item.monthly_searches || [],
      keyword_type: 'Primary'
    });
  });
  
  // Process keyword suggestions
  suggestions.slice(0, 15).forEach(item => {
    if (item.keyword_info) {
      results.push({
        keyword: item.keyword,
        search_volume: item.keyword_info.search_volume || 'N/A',
        cpc: item.keyword_info.cpc || 'N/A',
        competition: item.keyword_info.competition || 'N/A',
        competition_level: item.keyword_info.competition_level || 'N/A',
        low_bid: item.keyword_info.low_top_of_page_bid || 'N/A',
        high_bid: item.keyword_info.high_top_of_page_bid || 'N/A',
        keyword_difficulty: item.keyword_properties?.keyword_difficulty || 'N/A',
        search_intent: item.search_intent_info?.main_intent || 'N/A',
        monthly_searches: item.keyword_info.monthly_searches || [],
        keyword_type: 'Related'
      });
    }
  });
  
  // Generate comprehensive report
  generateComprehensiveReport(results);
  
  console.log('✅ Research completed successfully!');
  return results;
}

function generateComprehensiveReport(results) {
  // Sort by search volume
  const sortedResults = results.sort((a, b) => {
    const aVol = typeof a.search_volume === 'number' ? a.search_volume : 0;
    const bVol = typeof b.search_volume === 'number' ? b.search_volume : 0;
    return bVol - aVol;
  });
  
  // Categorize keywords
  const highVolumeKeywords = sortedResults.filter(r => 
    typeof r.search_volume === 'number' && r.search_volume >= 10000
  );
  
  const mediumVolumeKeywords = sortedResults.filter(r => 
    typeof r.search_volume === 'number' && r.search_volume >= 1000 && r.search_volume < 10000
  );
  
  const lowVolumeKeywords = sortedResults.filter(r => 
    typeof r.search_volume === 'number' && r.search_volume < 1000
  );
  
  const highCpcKeywords = sortedResults.filter(r => 
    typeof r.cpc === 'number' && r.cpc >= 10
  );
  
  const lowCompetitionKeywords = sortedResults.filter(r => 
    typeof r.competition === 'number' && r.competition <= 0.3
  );

  const report = `# DataForSEO Medicare Advantage Keyword Research Report

## Executive Summary

This comprehensive report provides real search volume data and competitive analysis for Medicare Advantage keywords using DataForSEO API. The analysis includes ${results.length} keywords with actual search volumes, CPC data, and competition metrics.

## Primary Keyword Analysis

### All Keywords Overview

| Keyword | Search Volume | CPC | Competition | Competition Level | Keyword Difficulty | Type |
|---------|---------------|-----|-------------|-------------------|-------------------|------|
${sortedResults.map(r => 
  `| "${r.keyword}" | ${typeof r.search_volume === 'number' ? r.search_volume.toLocaleString() : r.search_volume} | $${typeof r.cpc === 'number' ? r.cpc.toFixed(2) : r.cpc} | ${typeof r.competition === 'number' ? (r.competition * 100).toFixed(1) + '%' : r.competition} | ${r.competition_level || 'N/A'} | ${r.keyword_difficulty || 'N/A'} | ${r.keyword_type} |`
).join('\n')}

## Search Volume Analysis

### High-Volume Keywords (≥10K searches/month)

${highVolumeKeywords.length > 0 ? highVolumeKeywords.map((r, i) => 
  `${i + 1}. **"${r.keyword}"** - ${r.search_volume.toLocaleString()} searches/month, $${typeof r.cpc === 'number' ? r.cpc.toFixed(2) : r.cpc} CPC`
).join('\n') : 'No high-volume keywords found in current dataset'}

### Medium-Volume Keywords (1K-10K searches/month)

${mediumVolumeKeywords.length > 0 ? mediumVolumeKeywords.map((r, i) => 
  `${i + 1}. **"${r.keyword}"** - ${r.search_volume.toLocaleString()} searches/month, $${typeof r.cpc === 'number' ? r.cpc.toFixed(2) : r.cpc} CPC`
).join('\n') : 'No medium-volume keywords found in current dataset'}

### Low-Volume Keywords (<1K searches/month)

${lowVolumeKeywords.length > 0 ? lowVolumeKeywords.slice(0, 10).map((r, i) => 
  `${i + 1}. **"${r.keyword}"** - ${r.search_volume.toLocaleString()} searches/month, $${typeof r.cpc === 'number' ? r.cpc.toFixed(2) : r.cpc} CPC`
).join('\n') : 'No low-volume keywords found in current dataset'}

## Cost-Per-Click (CPC) Analysis

### High-CPC Keywords (≥$10)

${highCpcKeywords.length > 0 ? highCpcKeywords.slice(0, 10).map((r, i) => 
  `${i + 1}. **"${r.keyword}"** - $${r.cpc.toFixed(2)} CPC, ${typeof r.search_volume === 'number' ? r.search_volume.toLocaleString() : r.search_volume} searches/month`
).join('\n') : 'No high-CPC keywords found'}

### Cost-Effective Opportunities

${sortedResults.filter(r => 
  typeof r.cpc === 'number' && r.cpc < 10 && 
  typeof r.search_volume === 'number' && r.search_volume >= 1000
).slice(0, 5).map((r, i) => 
  `${i + 1}. **"${r.keyword}"** - $${r.cpc.toFixed(2)} CPC, ${r.search_volume.toLocaleString()} searches/month`
).join('\n') || 'No cost-effective opportunities identified'}

## Competition Analysis

### Low Competition Keywords (≤30% competition)

${lowCompetitionKeywords.length > 0 ? lowCompetitionKeywords.slice(0, 10).map((r, i) => 
  `${i + 1}. **"${r.keyword}"** - ${(r.competition * 100).toFixed(1)}% competition, ${typeof r.search_volume === 'number' ? r.search_volume.toLocaleString() : r.search_volume} searches/month`
).join('\n') : 'No low-competition keywords found'}

## Strategic Recommendations

### High-Impact Keywords (Immediate Focus)
Target these high-volume, high-commercial-intent keywords:

${highVolumeKeywords.slice(0, 5).map((r, i) => 
  `${i + 1}. **"${r.keyword}"**
   - Search Volume: ${r.search_volume.toLocaleString()}/month
   - CPC: $${typeof r.cpc === 'number' ? r.cpc.toFixed(2) : r.cpc}
   - Competition: ${typeof r.competition === 'number' ? (r.competition * 100).toFixed(1) + '%' : r.competition}
   - Potential ROI: High`
).join('\n\n')}

### Quick Win Keywords (Low Competition, Good Volume)
Focus on these lower-competition opportunities:

${lowCompetitionKeywords.filter(r => 
  typeof r.search_volume === 'number' && r.search_volume >= 1000
).slice(0, 5).map((r, i) => 
  `${i + 1}. **"${r.keyword}"**
   - Search Volume: ${r.search_volume.toLocaleString()}/month
   - Competition: ${(r.competition * 100).toFixed(1)}%
   - CPC: $${typeof r.cpc === 'number' ? r.cpc.toFixed(2) : r.cpc}
   - Difficulty: ${r.keyword_difficulty || 'N/A'}`
).join('\n\n')}

## Seasonal Trends Analysis

${results.filter(r => r.monthly_searches && r.monthly_searches.length > 0).slice(0, 3).map(r => 
  `### "${r.keyword}" Monthly Trends
${r.monthly_searches.slice(0, 12).map(m => 
  `- ${m.year}-${String(m.month).padStart(2, '0')}: ${m.search_volume.toLocaleString()} searches`
).join('\n')}`
).join('\n\n')}

## Implementation Strategy

### Phase 1: High-Volume Keywords (Months 1-3)
Focus on keywords with >10K searches/month for immediate traffic impact:
- Create dedicated landing pages for top 5 high-volume keywords
- Develop comprehensive content addressing each keyword's search intent
- Implement proper technical SEO optimization

### Phase 2: Long-tail Keywords (Months 4-6)
Target specific, lower-competition keywords for better conversion rates:
- Focus on low-competition keywords with >1K searches/month
- Create detailed comparison and educational content
- Build topical authority around Medicare Advantage themes

### Phase 3: Seasonal Optimization (Ongoing)
Implement seasonal campaigns for Medicare enrollment periods:
- October-December: Focus on enrollment and comparison keywords
- January-March: Target Medicare Advantage Open Enrollment Period
- Year-round: Maintain educational content for research queries

## ROI Projections

### Traffic Potential
- **High-volume keywords**: ${highVolumeKeywords.reduce((sum, k) => sum + (typeof k.search_volume === 'number' ? k.search_volume : 0), 0).toLocaleString()} total monthly searches
- **Medium-volume keywords**: ${mediumVolumeKeywords.reduce((sum, k) => sum + (typeof k.search_volume === 'number' ? k.search_volume : 0), 0).toLocaleString()} total monthly searches
- **Estimated organic traffic potential**: 20-30% of total search volume with proper optimization

### Investment Analysis
- **Average CPC**: $${(results.filter(r => typeof r.cpc === 'number').reduce((sum, r) => sum + r.cpc, 0) / results.filter(r => typeof r.cpc === 'number').length).toFixed(2)}
- **High-value keywords**: Premium CPC indicates high commercial value
- **SEO vs PPC**: Organic optimization recommended for high-CPC keywords

---

*DataForSEO Research Generated on ${new Date().toLocaleDateString()}*
*This report provides actual search volume data and competitive analysis using DataForSEO API*
*Total Keywords Analyzed: ${results.length} | API Calls: 2 | Research Scope: US Market*
`;

  fs.writeFileSync('dataforseo-comprehensive-medicare-research.md', report);
  console.log('✅ Comprehensive report saved to: dataforseo-comprehensive-medicare-research.md');
  
  // Also save raw data
  fs.writeFileSync('dataforseo-complete-raw-data.json', JSON.stringify(results, null, 2));
  console.log('✅ Complete raw data saved to: dataforseo-complete-raw-data.json');
}

// Run the research
researchMedicareKeywords()
  .then(() => {
    console.log('\n🎉 Medicare Advantage keyword research completed successfully!');
    console.log('📄 Check dataforseo-comprehensive-medicare-research.md for the complete analysis');
  })
  .catch(error => {
    console.error('❌ Failed to complete research:', error);
  });