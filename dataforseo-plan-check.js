const axios = require('axios');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

async function checkDataForSEOPlan() {
  console.log('🔍 Checking DataForSEO plan features...\n');
  
  // Test basic API connectivity first
  try {
    console.log('1️⃣ Testing basic API connectivity...');
    
    // Try a simple endpoint that should work with any plan
    const response = await axios.get('https://api.dataforseo.com/v3/tools/google/competitors_domain', {
      auth: {
        username: DATAFORSEO_LOGIN,
        password: DATAFORSEO_PASSWORD
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ Basic API connectivity: SUCCESS');
    console.log('   Status Code:', response.data.status_code);
    console.log('   Status Message:', response.data.status_message);
    
  } catch (error) {
    console.log('❌ Basic API connectivity: FAILED');
    console.log('   Error:', error.response?.data?.status_message || error.message);
  }
  
  console.log('\n2️⃣ Testing keyword-related endpoints...');
  
  const keywordEndpoints = [
    {
      name: "Google Keyword Suggestions",
      path: "/v3/keywords_data/google/keyword_suggestions",
      data: [{
        keyword: "test",
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Keyword Data",
      path: "/v3/keywords_data/google/keyword_data",
      data: [{
        keyword: "test",
        location_code: 2840,
        language_code: "en"
      }]
    },
    {
      name: "Google Trends",
      path: "/v3/keywords_data/google/keyword_suggestions",
      data: [{
        keyword: "test",
        location_code: 2840,
        language_code: "en",
        depth: 0
      }]
    }
  ];
  
  for (const endpoint of keywordEndpoints) {
    try {
      const response = await axios.post(`https://api.dataforseo.com${endpoint.path}`, endpoint.data, {
        auth: {
          username: DATAFORSEO_LOGIN,
          password: DATAFORSEO_PASSWORD
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`✅ ${endpoint.name}: ${response.data.status_code} - ${response.data.status_message}`);
      
    } catch (error) {
      console.log(`❌ ${endpoint.name}: ${error.response?.status || 'Error'} - ${error.response?.data?.status_message || error.message}`);
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n3️⃣ Recommendations:');
  console.log('📋 Based on the results above:');
  console.log('   - If you get 20000 status codes: Your plan supports keyword data');
  console.log('   - If you get 40000+ status codes: Plan limitations or incorrect endpoints');
  console.log('   - If you get 404 errors: Endpoint not available with your plan');
  console.log('   - If you get 401 errors: Authentication issues');
  
  console.log('\n💡 Next Steps:');
  console.log('   1. Check your DataForSEO dashboard for plan features');
  console.log('   2. Verify your API credits and usage limits');
  console.log('   3. Contact DataForSEO support if needed');
  console.log('   4. Consider alternative keyword research tools');
}

// Run the plan check
checkDataForSEOPlan();
