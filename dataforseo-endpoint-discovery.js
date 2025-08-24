const axios = require('axios');
const fs = require('fs');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

async function discoverAvailableEndpoints() {
  const testKeyword = "Medicare Advantage plans";
  
  console.log('🔍 Discovering available DataForSEO endpoints...');
  console.log(`📊 Testing with: "${testKeyword}"\n`);
  
  const endpoints = [
    {
      name: "Google Keyword Suggestions (v3)",
      path: "/v3/keywords_data/google/keyword_suggestions",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en",
        depth: 1
      }]
    },
    {
      name: "Google Keyword Data (v3)",
      path: "/v3/keywords_data/google/keyword_data",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Suggestions (v2)",
      path: "/v2/keywords_data/google/keyword_suggestions",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Data (v2)",
      path: "/v2/keywords_data/google/keyword_data",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Suggestions (v1)",
      path: "/v1/keywords_data/google/keyword_suggestions",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Data (v1)",
      path: "/v1/keywords_data/google/keyword_data",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Suggestions (No Version)",
      path: "/keywords_data/google/keyword_suggestions",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Data (No Version)",
      path: "/keywords_data/google/keyword_data",
      data: [{
        keyword: testKeyword,
        location_code: 2840,
        language_code: "en"
      }]
    }
  ];
  
  const results = [];
  
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
      
      console.log(`✅ ${endpoint.name}: Success (${response.data.status_code})`);
      
      if (response.data.status_code === 20000) {
        console.log(`   🎉 This endpoint works!`);
        results.push({
          endpoint: endpoint.name,
          path: endpoint.path,
          status: 'SUCCESS',
          status_code: response.data.status_code
        });
      } else {
        console.log(`   Status: ${response.data.status_message}`);
        results.push({
          endpoint: endpoint.name,
          path: endpoint.path,
          status: 'ERROR',
          status_code: response.data.status_code,
          message: response.data.status_message
        });
      }
      
    } catch (error) {
      console.log(`❌ ${endpoint.name}: ${error.response?.status || 'Network Error'}`);
      if (error.response?.data?.status_message) {
        console.log(`   Message: ${error.response.data.status_message}`);
      }
      results.push({
        endpoint: endpoint.name,
        path: endpoint.path,
        status: 'ERROR',
        status_code: error.response?.status || 'NETWORK_ERROR',
        message: error.response?.data?.status_message || error.message
      });
    }
    
    console.log('');
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Summary
  console.log('📋 Endpoint Discovery Summary:');
  console.log('==============================');
  
  const workingEndpoints = results.filter(r => r.status === 'SUCCESS');
  const errorEndpoints = results.filter(r => r.status === 'ERROR');
  
  if (workingEndpoints.length > 0) {
    console.log(`✅ Working Endpoints (${workingEndpoints.length}):`);
    workingEndpoints.forEach(ep => {
      console.log(`   - ${ep.endpoint} (${ep.path})`);
    });
  } else {
    console.log('❌ No working endpoints found');
  }
  
  console.log(`\n❌ Error Endpoints (${errorEndpoints.length}):`);
  errorEndpoints.forEach(ep => {
    console.log(`   - ${ep.endpoint}: ${ep.status_code} - ${ep.message}`);
  });
  
  // Save results
  fs.writeFileSync('dataforseo-endpoint-results.json', JSON.stringify(results, null, 2));
  console.log('\n💾 Results saved to: dataforseo-endpoint-results.json');
  
  return results;
}

// Run the discovery
discoverAvailableEndpoints();
