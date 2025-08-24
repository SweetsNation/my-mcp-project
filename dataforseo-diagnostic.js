const axios = require('axios');
const fs = require('fs');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

async function diagnoseDataForSEO() {
  try {
    console.log('🔍 Diagnosing DataForSEO API response...');
    console.log('📊 Testing with: "Medicare Advantage plans"\n');
    
    const response = await axios.post('https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions', {
      keyword: "Medicare Advantage plans",
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

    console.log('✅ API Response Received!');
    console.log('📋 Full Response Structure:');
    console.log(JSON.stringify(response.data, null, 2));
    
    // Save full response to file for analysis
    fs.writeFileSync('dataforseo-response.json', JSON.stringify(response.data, null, 2));
    console.log('\n💾 Full response saved to: dataforseo-response.json');
    
    // Try different data extraction methods
    console.log('\n🔍 Attempting to extract data...');
    
    if (response.data && response.data.tasks) {
      console.log('✅ Found tasks array');
      
      if (response.data.tasks[0]) {
        console.log('✅ Found first task');
        
        if (response.data.tasks[0].result) {
          console.log('✅ Found result array');
          console.log('📊 Number of results:', response.data.tasks[0].result.length);
          
          if (response.data.tasks[0].result[0]) {
            const keywordData = response.data.tasks[0].result[0];
            console.log('\n📈 Extracted Keyword Data:');
            console.log('Keyword:', keywordData.keyword);
            console.log('Search Volume:', keywordData.search_volume);
            console.log('CPC:', keywordData.cpc);
            console.log('Competition:', keywordData.competition);
            console.log('All available fields:', Object.keys(keywordData));
          } else {
            console.log('❌ No keyword data in first result');
          }
        } else {
          console.log('❌ No result array found');
        }
      } else {
        console.log('❌ No tasks found');
      }
    } else {
      console.log('❌ Unexpected response structure');
    }
    
    // Check for errors
    if (response.data && response.data.tasks && response.data.tasks[0] && response.data.tasks[0].status_message) {
      console.log('\n⚠️ Status Message:', response.data.tasks[0].status_message);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

// Run the diagnostic
diagnoseDataForSEO();
