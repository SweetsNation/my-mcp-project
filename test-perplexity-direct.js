const fs = require('fs');

const PERPLEXITY_API_KEY = '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';

async function testPerplexityAPI() {
  try {
    console.log('🧪 Testing Perplexity API connection...');
    
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
            role: 'user',
            content: 'What is elmaginsurance.com? Provide a brief overview in 2-3 sentences.'
          }
        ],
        max_tokens: 200,
        temperature: 0.1
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ API connection successful!');
    console.log('📝 Response:', data.choices[0].message.content);
    
    return data.choices[0].message.content;
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    throw error;
  }
}

testPerplexityAPI()
  .then(() => {
    console.log('\n🎉 API test completed successfully!');
  })
  .catch(error => {
    console.error('Failed to test API:', error);
    process.exit(1);
  });
