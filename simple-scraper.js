const fs = require('fs');

const PERPLEXITY_API_KEY = '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';

async function scrapeElmagInsurance() {
  try {
    console.log('🔍 Analyzing elmaginsurance.com...');
    
    const prompt = `Analyze elmaginsurance.com and provide a comprehensive summary including:
    1. Company overview and background
    2. Insurance services and products offered
    3. Target market and customer base
    4. Key features and benefits
    5. Contact information and office locations
    6. Website structure and user experience
    7. Unique selling points and specialties
    8. Professional reputation and any available reviews
    
    Format as a detailed markdown document with proper headings.`;

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
            content: 'You are a professional web analyst. Provide detailed, accurate information about websites with proper markdown formatting.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 4000,
        temperature: 0.1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const summary = data.choices[0].message.content;
    
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
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// Run the scraper
scrapeElmagInsurance()
  .then(() => {
    console.log('\n📋 Summary generated successfully!');
    console.log('📄 Check elmaginsurance-summary.md for the complete report');
  })
  .catch(error => {
    console.error('Failed to generate summary:', error);
    process.exit(1);
  });
