const axios = require('axios');
const fs = require('fs');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

async function testAlternativeEndpoints() {
  const testKeyword = "Medicare Advantage plans";
  
  console.log('🔍 Testing different DataForSEO API endpoints...');
  console.log(`📊 Keyword: "${testKeyword}"\n`);
  
  const endpoints = [
    {
      name: "Google Keyword Suggestions",
      path: "/v3/keywords_data/google/keyword_suggestions",
      data: {
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en",
        depth: 1
      }
    },
    {
      name: "Google Keyword Data",
      path: "/v3/keywords_data/google/keyword_data",
      data: {
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }
    },
    {
      name: "Google Keyword Suggestions (Alternative)",
      path: "/v3/keywords_data/google/keyword_suggestions",
      data: {
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en",
        depth: 0
      }
    },
    {
      name: "Google Keyword Suggestions (No Location)",
      path: "/v3/keywords_data/google/keyword_suggestions",
      data: {
        keyword: testKeyword,
        language_code: "en",
        depth: 1
      }
    }
  ];
  
  for (const endpoint of endpoints) {
    try {
      console.log(`🔍 Testing: ${endpoint.name}`);
      
      const response = await axios.post(`https://api.dataforseo.com${endpoint.path}`, endpoint.data, {
        auth: {
          username: DATAFORSEO_LOGIN,
          password: DATAFORSEO_PASSWORD
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`✅ ${endpoint.name}: Success`);
      
      if (response.data && response.data.tasks && response.data.tasks[0]) {
        const task = response.data.tasks[0];
        
        if (task.status_message) {
          console.log(`   Status: ${task.status_message}`);
        }
        
        if (task.result && task.result.length > 0) {
          const result = task.result[0];
          console.log(`   Results: ${task.result.length}`);
          console.log(`   Search Volume: ${result.search_volume || 'N/A'}`);
          console.log(`   CPC: ${result.cpc || 'N/A'}`);
          console.log(`   Competition: ${result.competition || 'N/A'}`);
        } else {
          console.log(`   No results found`);
        }
      }
      
      console.log('');
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.log(`❌ ${endpoint.name}: ${error.message}`);
      if (error.response && error.response.status) {
        console.log(`   Status: ${error.response.status}`);
      }
      console.log('');
    }
  }
  
  console.log('🎉 Endpoint testing completed!');
}

// Run the test
testAlternativeEndpoints();
