require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

async function scrapeElmagInsurance() {
  try {
    console.log('🔍 Scraping elmaginsurance.com...');
    
    const prompt = `Please provide a comprehensive analysis of elmaginsurance.com including:
    1. Company overview and background
    2. Services offered
    3. Target market/customers
    4. Key features and benefits
    5. Contact information and locations
    6. Website structure and navigation
    7. Any unique selling points or specialties
    8. Professional reputation and reviews if available
    
    Please format this as a detailed markdown summary with proper headings and structure.`;

    const response = await axios.post('https://api.perplexity.ai/chat/completions', {
      model: 'llama-3.1-8b-online',
      messages: [
        {
          role: 'system',
          content: 'You are a professional web analyst. Provide detailed, accurate information about websites with proper markdown formatting.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 4000,
      temperature: 0.1
    }, {
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const summary = response.data.choices[0].message.content;
    
    // Create the markdown file
    const markdownContent = `# Elmag Insurance - Website Summary

${summary}

---
*Generated on ${new Date().toLocaleDateString()} using Perplexity AI*
`;

    fs.writeFileSync('elmaginsurance-summary.md', markdownContent);
    console.log('✅ Summary saved to elmaginsurance-summary.md');
    
    return summary;
    
  } catch (error) {
    console.error('❌ Error scraping website:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
    throw error;
  }
}

// Run the scraper
scrapeElmagInsurance()
  .then(summary => {
    console.log('\n📋 Summary generated successfully!');
    console.log('📄 Check elmaginsurance-summary.md for the complete report');
  })
  .catch(error => {
    console.error('Failed to generate summary:', error);
    process.exit(1);
  });
