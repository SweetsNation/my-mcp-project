const axios = require('axios');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

// Test keywords for Medicare Advantage
const testKeywords = [
  "Medicare Advantage plans",
  "Medicare Advantage enrollment",
  "Medicare Advantage benefits"
];

async function testDataForSEO() {
  try {
    console.log('🧪 Testing DataForSEO API connection...');
    console.log('📊 Researching Medicare Advantage keywords...\n');
    
    for (const keyword of testKeywords) {
      console.log(`🔍 Researching: ${keyword}`);
      
      try {
        // DataForSEO Google Keyword Suggestions API
        const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions', {
          keyword: keyword,
          location_code: 2840, // US location code
          language_code: "en",
          depth: 1
        }, {
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
          
          console.log(`✅ ${keyword}:`);
          console.log(`   📈 Search Volume: ${keywordData.search_volume || 'N/A'} searches/month`);
          console.log(`   💰 CPC: $${keywordData.cpc || 'N/A'}`);
          console.log(`   🏆 Competition: ${keywordData.competition || 'N/A'}`);
          console.log(`   📍 Location: ${keywordData.location_code || 'N/A'}`);
          console.log('');
          
        } else {
          console.log(`⚠️ ${keyword}: No data available\n`);
        }
        
        // Rate limiting - wait 2 seconds between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        console.error(`❌ Error researching ${keyword}:`, error.message);
        if (error.response) {
          console.error(`   Status: ${error.response.status}`);
          console.error(`   Data:`, error.response.data);
        }
        console.log('');
      }
    }
    
    console.log('🎉 DataForSEO test completed!');
    console.log('\n💡 Next Steps:');
    console.log('1. Update your DataForSEO credentials in the script');
    console.log('2. Run the full keyword research script');
    console.log('3. Use the data to optimize your Medicare Advantage strategy');
    
  } catch (error) {
    console.error('❌ Error in DataForSEO test:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your DataForSEO login and password');
    console.log('2. Verify your DataForSEO account has API access');
    console.log('3. Ensure you have sufficient API credits');
  }
}

// Run the test
testDataForSEO();
