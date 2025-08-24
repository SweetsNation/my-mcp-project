const axios = require('axios');
const fs = require('fs');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

async function testFixedDataForSEO() {
  try {
    console.log('🔍 Testing DataForSEO API with correct format...');
    console.log('📊 Testing with: "Medicare Advantage plans"\n');
    
    // DataForSEO expects an ARRAY of tasks
    const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions', [
      {
        keyword: "Medicare Advantage plans",
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

    console.log('✅ API Response Received!');
    console.log('📋 Response Status:', response.data.status_code);
    console.log('📋 Status Message:', response.data.status_message);
    
    // Save full response to file for analysis
    fs.writeFileSync('dataforseo-fixed-response.json', JSON.stringify(response.data, null, 2));
    console.log('\n💾 Full response saved to: dataforseo-fixed-response.json');
    
    // Extract data if available
    if (response.data && response.data.tasks && response.data.tasks.length > 0) {
      const task = response.data.tasks[0];
      console.log('\n📊 Task Status:', task.status_code);
      console.log('📊 Task Message:', task.status_message);
      
      if (task.result && task.result.length > 0) {
        const keywordData = task.result[0];
        console.log('\n📈 Keyword Data Found:');
        console.log('Keyword:', keywordData.keyword);
        console.log('Search Volume:', keywordData.search_volume);
        console.log('CPC:', keywordData.cpc);
        console.log('Competition:', keywordData.competition);
        console.log('All available fields:', Object.keys(keywordData));
      } else {
        console.log('\n❌ No keyword data in results');
        if (task.result) {
          console.log('Result structure:', JSON.stringify(task.result, null, 2));
        }
      }
    } else {
      console.log('\n❌ No tasks found in response');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

// Run the test
testFixedDataForSEO();
