require('dotenv').config();
const fs = require('fs');

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

async function generateKeywordIdeas() {
  try {
    console.log('🔍 Generating programmatic keyword ideas for your business...');
    
    const prompt = `I need comprehensive programmatic keyword ideas for a business. Please provide:

1. **Primary Keywords** (high-volume, competitive)
2. **Long-tail Keywords** (specific, lower competition)
3. **Local SEO Keywords** (location-based)
4. **Commercial Intent Keywords** (buying signals)
5. **Informational Keywords** (research phase)
6. **Brand Keywords** (company-specific)
7. **Seasonal Keywords** (time-sensitive)
8. **Industry-Specific Keywords** (niche terms)
9. **Problem-Solution Keywords** (pain points)
10. **Feature-Based Keywords** (product/service benefits)

For each category, provide:
- 10-15 relevant keywords
- Search volume estimates (High/Medium/Low)
- Competition level (High/Medium/Low)
- Commercial intent (High/Medium/Low)

Format as a detailed markdown document with proper headings and tables. Focus on keywords that would be valuable for programmatic advertising, SEO, and content marketing.`;

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
            content: 'You are a professional SEO and digital marketing expert specializing in keyword research and programmatic advertising. Provide detailed, actionable keyword recommendations with proper markdown formatting.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const keywordAnalysis = data.choices[0].message.content;
    
    // Create the markdown file
    const markdownContent = `# Programmatic Keyword Research - Business Marketing

${keywordAnalysis}

---
*Generated on ${new Date().toLocaleDateString()} using Perplexity AI*
*Use these keywords for: PPC campaigns, SEO optimization, content marketing, and programmatic advertising*
`;

    fs.writeFileSync('keyword-research.md', markdownContent);
    console.log('✅ Keyword research saved to keyword-research.md');
    
    return keywordAnalysis;
    
  } catch (error) {
    console.error('❌ Error generating keywords:', error.message);
    throw error;
  }
}

// Run the keyword research
generateKeywordIdeas()
  .then(() => {
    console.log('\n📋 Keyword research completed successfully!');
    console.log('📄 Check keyword-research.md for comprehensive keyword ideas');
  })
  .catch(error => {
    console.error('Failed to generate keywords:', error);
    process.exit(1);
  });
