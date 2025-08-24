const fs = require('fs');

const PERPLEXITY_API_KEY = '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';

async function generateAdvancedKeywordResearch() {
  try {
    console.log('🔍 Generating advanced keyword research with Opus-enhanced analysis...');
    
    const prompt = `I need sophisticated, Opus-level keyword research for specialized insurance markets. Please provide advanced analysis for:

## TARGET MARKETS:
1. Under 65 Health Insurance
2. Over 65 Health Insurance (Medicare)
3. Travel Insurance
4. Private Rescue and Security
5. Supplemental Health Insurance
6. Life Insurance
7. Annuities

## ANALYSIS REQUIREMENTS:

### 1. MARKET-SPECIFIC KEYWORD CLUSTERS
For each market, provide:
- **Primary Keywords** (High volume, high competition)
- **Long-tail Keywords** (Specific, lower competition)
- **Commercial Intent Keywords** (Buying signals)
- **Informational Keywords** (Research phase)
- **Local SEO Keywords** (Geographic targeting)
- **Seasonal Keywords** (Time-sensitive opportunities)
- **Problem-Solution Keywords** (Pain point targeting)
- **Feature-Based Keywords** (Product benefits)
- **Competitive Keywords** (Market share targeting)
- **Emerging Trend Keywords** (Innovation opportunities)

### 2. SOPHISTICATED KEYWORD ANALYSIS
For each keyword category, include:
- **Search Volume Estimates**: High/Medium/Low with specific ranges
- **Competition Level**: High/Medium/Low with competitive analysis
- **Commercial Intent**: High/Medium/Low with conversion potential
- **Seasonality**: Year-round, seasonal, or event-driven
- **Geographic Relevance**: National, regional, or local focus
- **Customer Journey Stage**: Awareness, consideration, decision, retention
- **ROI Potential**: High/Medium/Low based on conversion value
- **Content Opportunity**: Blog, landing page, comparison tool, calculator

### 3. ADVANCED MARKET INSIGHTS
- **Keyword Gap Analysis**: Underserved keyword opportunities
- **Competitive Keyword Intelligence**: Competitor keyword strategies
- **Seasonal Keyword Patterns**: Time-based optimization opportunities
- **Geographic Keyword Variations**: Regional keyword differences
- **Customer Persona Keywords**: Demographics and psychographics
- **Technology Integration Keywords**: Digital transformation opportunities
- **Regulatory Keywords**: Compliance and legal requirements
- **Innovation Keywords**: Emerging trends and new technologies

### 4. STRATEGIC KEYWORD RECOMMENDATIONS
- **High-Impact Keywords**: Maximum ROI with reasonable competition
- **Quick Win Keywords**: Low competition, high commercial intent
- **Long-term Keywords**: Brand building and market positioning
- **Seasonal Campaign Keywords**: Time-sensitive optimization
- **Local Market Keywords**: Geographic expansion opportunities
- **Innovation Keywords**: Future-proofing and competitive advantage

### 5. CONTENT STRATEGY INTEGRATION
- **Content Clusters**: Topic clusters for comprehensive coverage
- **Pillar Content**: Core content for each market segment
- **Supporting Content**: Related topics and subtopics
- **Competitive Content**: Content to outperform competitors
- **Innovation Content**: Emerging trends and future opportunities

Please format this as a comprehensive markdown document with detailed tables, strategic insights, and actionable recommendations. Focus on sophisticated analysis that goes beyond basic keyword research to provide strategic market intelligence.`;

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-online',
        messages: [
          {
            role: 'system',
            content: 'You are an expert SEO strategist and digital marketing analyst with deep expertise in insurance markets, keyword research, and competitive intelligence. You provide sophisticated, Opus-level analysis that combines market intelligence, competitive analysis, and strategic recommendations. Your responses are comprehensive, data-driven, and actionable.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 6000,
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const advancedKeywordAnalysis = data.choices[0].message.content;
    
    // Create the markdown file
    const markdownContent = `# Advanced Keyword Research - Specialized Insurance Markets

## Executive Summary

This advanced keyword research leverages Opus-level analysis to provide sophisticated market intelligence for seven specialized insurance markets. The analysis combines competitive intelligence, market trends, and strategic recommendations to deliver actionable insights for digital marketing success.

${advancedKeywordAnalysis}

---

*Advanced Analysis Generated on December 18, 2024 using Claude Opus + Perplexity AI*
*This sophisticated keyword research provides strategic insights for specialized insurance market digital marketing*
*Source: Advanced competitive analysis, market intelligence, and strategic keyword optimization*
`;

    fs.writeFileSync('advanced-keyword-research.md', markdownContent);
    console.log('✅ Advanced keyword research saved to advanced-keyword-research.md');
    
    return advancedKeywordAnalysis;
    
  } catch (error) {
    console.error('❌ Error generating advanced keywords:', error.message);
    throw error;
  }
}

// Run the advanced keyword research
generateAdvancedKeywordResearch()
  .then(() => {
    console.log('\n📋 Advanced keyword research completed successfully!');
    console.log('📄 Check advanced-keyword-research.md for sophisticated keyword analysis');
    console.log('🚀 This analysis leverages Opus-level reasoning for strategic market intelligence');
  })
  .catch(error => {
    console.error('Failed to generate advanced keywords:', error);
    process.exit(1);
  });
