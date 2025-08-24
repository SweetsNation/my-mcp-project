const https = require('https');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

// Test keyword
const testKeyword = "Medicare Advantage plans";

function makeDataForSEORequest(keyword) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      keyword: keyword,
      location_code: 2840,
      language_code: "en",
      depth: 1
    });

    const options = {
      hostname: 'api.dataforseo.com',
      port: 443,
      path: '/v3/keywords_data/google/keyword_suggestions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(DATAFORSEO_LOGIN + ':' + DATAFORSEO_PASSWORD).toString('base64')
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response);
        } catch (error) {
          reject(new Error('Failed to parse response: ' + error.message));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.write(postData);
    req.end();
  });
}

async function testDataForSEO() {
  try {
    console.log('🧪 Testing DataForSEO API connection...');
    console.log(`🔍 Researching: ${testKeyword}`);
    console.log('⏳ Please wait...\n');
    
    const response = await makeDataForSEORequest(testKeyword);
    
    if (response && response.tasks && response.tasks[0] && response.tasks[0].result) {
      const keywordData = response.tasks[0].result[0];
      
      console.log(`✅ SUCCESS! DataForSEO API is working!`);
      console.log(`📊 Results for "${testKeyword}":`);
      console.log(`   📈 Search Volume: ${keywordData.search_volume || 'N/A'} searches/month`);
      console.log(`   💰 CPC: $${keywordData.cpc || 'N/A'}`);
      console.log(`   🏆 Competition: ${keywordData.competition || 'N/A'}`);
      console.log(`   📍 Location: ${keywordData.location_code || 'N/A'}`);
      
      console.log('\n🎉 API connection successful!');
      console.log('💡 You can now run the full keyword research script.');
      
    } else {
      console.log('⚠️ Response received but no keyword data found.');
      console.log('Response:', JSON.stringify(response, null, 2));
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.message.includes('401')) {
      console.log('\n🔧 Troubleshooting:');
      console.log('1. Check your DataForSEO API credentials');
      console.log('2. Verify your account has API access');
      console.log('3. Ensure you have sufficient API credits');
    } else if (error.message.includes('timeout')) {
      console.log('\n🔧 Network timeout - try again or check your internet connection');
    } else {
      console.log('\n🔧 General error - check the error message above');
    }
  }
}

// Run the test
console.log('🚀 Starting DataForSEO API test...\n');
testDataForSEO();
