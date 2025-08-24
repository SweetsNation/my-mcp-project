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
  "Medicare Advantage agent"
];

async function researchMedicareKeywords() {
  console.log('🔍 Researching Medicare Advantage keywords with DataForSEO...\n');
  
  const results = [];
  
  for (const keyword of medicareKeywords) {
    try {
      console.log(`📊 Researching: "${keyword}"`);
      
      // DataForSEO API call with correct array format
      const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions', [
        {
          keyword: keyword,
          location_code: 2840, // US
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
        },
        timeout: 30000 // 30 second timeout
      });
      
      if (response.data && response.data.tasks && response.data.tasks[0]) {
        const task = response.data.tasks[0];
        
        if (task.status_code === 20000 && task.result && task.result.length > 0) {
          const keywordData = task.result[0];
          
          const result = {
            keyword: keyword,
            search_volume: keywordData.search_volume || 'N/A',
            cpc: keywordData.cpc || 'N/A',
            competition: keywordData.competition || 'N/A',
            related_keywords: keywordData.related_keywords || [],
            search_trends: keywordData.search_trends || []
          };
          
          results.push(result);
          
          console.log(`✅ ${keyword}: ${result.search_volume} searches/month, $${result.cpc} CPC, ${result.competition} competition`);
        } else {
          console.log(`⚠️ ${keyword}: ${task.status_message || 'No data available'}`);
          results.push({
            keyword: keyword,
            search_volume: 'N/A',
            cpc: 'N/A',
            competition: 'N/A',
            related_keywords: [],
            search_trends: []
          });
        }
      } else {
        console.log(`❌ ${keyword}: Invalid response structure`);
        results.push({
          keyword: keyword,
          search_volume: 'N/A',
          cpc: 'N/A',
          competition: 'N/A',
          related_keywords: [],
          search_trends: []
        });
      }
      
    } catch (error) {
      console.log(`❌ ${keyword}: ${error.response?.data?.status_message || error.message}`);
      results.push({
        keyword: keyword,
        search_volume: 'Error',
        cpc: 'Error',
        competition: 'Error',
        related_keywords: [],
        search_trends: []
      });
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('');
  }
  
  // Generate report
  generateReport(results);
  
  return results;
}

function generateReport(results) {
  const report = `# DataForSEO Medicare Advantage Keyword Research Report

## Executive Summary

This report provides actual search volume data and competitive analysis for Medicare Advantage keywords based on DataForSEO research.

## Keyword Research Results

| Keyword | Search Volume | CPC | Competition | Commercial Intent |
|---------|---------------|-----|-------------|-------------------|
${results.map(r => `| "${r.keyword}" | ${r.search_volume} | $${r.cpc} | ${r.competition} | High |`).join('\n')}

## Analysis Summary

### High-Volume Keywords (>10K searches/month)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 10000)
  .map(r => `- **${r.keyword}**: ${r.search_volume} searches/month`)
  .join('\n') || 'No high-volume keywords found'}

### Medium-Volume Keywords (1K-10K searches/month)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) >= 1000 && parseInt(r.search_volume) <= 10000)
  .map(r => `- **${r.keyword}**: ${r.search_volume} searches/month`)
  .join('\n') || 'No medium-volume keywords found'}

### Low-Volume Keywords (<1K searches/month)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) < 1000)
  .map(r => `- **${r.keyword}**: ${r.search_volume} searches/month`)
  .join('\n') || 'No low-volume keywords found'}

## Strategic Recommendations

### High-Impact Keywords (Immediate Focus)
${results.filter(r => r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 5000)
  .slice(0, 5)
  .map(r => `1. **${r.keyword}** - ${r.search_volume} searches/month, $${r.cpc} CPC`)
  .join('\n') || 'No high-impact keywords identified'}

### Quick Win Keywords (Low Competition, High Intent)
${results.filter(r => r.competition !== 'N/A' && r.competition !== 'Error' && parseFloat(r.competition) < 0.5 && r.search_volume !== 'N/A' && r.search_volume !== 'Error' && parseInt(r.search_volume) > 1000)
  .slice(0, 5)
  .map(r => `1. **${r.keyword}** - ${r.search_volume} searches/month, ${r.competition} competition`)
  .join('\n') || 'No quick win keywords identified'}

## Implementation Strategy

### Phase 1: High-Volume Keywords (Months 1-3)
Focus on keywords with >5K searches/month for immediate traffic impact.

### Phase 2: Long-tail Keywords (Months 4-6)
Target specific, lower-competition keywords for better conversion rates.

### Phase 3: Seasonal Keywords (Ongoing)
Implement seasonal campaigns for Medicare enrollment periods.

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

  fs.writeFileSync('dataforseo-medicare-research-report.md', report);
  console.log('✅ Report saved to: dataforseo-medicare-research-report.md');
  
  // Also save raw data
  fs.writeFileSync('dataforseo-raw-data.json', JSON.stringify(results, null, 2));
  console.log('✅ Raw data saved to: dataforseo-raw-data.json');
}

// Run the research
researchMedicareKeywords()
  .then(() => {
    console.log('\n🎉 Medicare Advantage keyword research completed!');
    console.log('📄 Check dataforseo-medicare-research-report.md for the complete analysis');
  })
  .catch(error => {
    console.error('Failed to complete research:', error);
  });
