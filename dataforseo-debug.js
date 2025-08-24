const axios = require('axios');

// DataForSEO API credentials
const DATAFORSEO_LOGIN = 'inquiry@elmaginsurance.com';
const DATAFORSEO_PASSWORD = '0f256932a691f1f1';

async function debugDataForSEO() {
    console.log('🔧 Debugging DataForSEO API Integration...\n');
    
    try {
        // Step 1: Check account info and credits
        console.log('1️⃣ Checking account status...');
        const accountResponse = await axios.get('https://api.dataforseo.com/v3/user', {
            auth: {
                username: DATAFORSEO_LOGIN,
                password: DATAFORSEO_PASSWORD
            }
        });
        
        if (accountResponse.data && accountResponse.data.tasks && accountResponse.data.tasks[0]) {
            const accountInfo = accountResponse.data.tasks[0].result;
            console.log('✅ Account Status:', {
                login: accountInfo.login,
                credits: accountInfo.money.balance,
                limits: accountInfo.limits,
                subscriptions: accountInfo.subscriptions
            });
        }
        
    } catch (error) {
        console.log('❌ Account check failed:', error.response?.data || error.message);
    }
    
    try {
        // Step 2: Check available endpoints
        console.log('\n2️⃣ Checking available endpoints...');
        const endpointsResponse = await axios.get('https://api.dataforseo.com/v3/endpoints', {
            auth: {
                username: DATAFORSEO_LOGIN,
                password: DATAFORSEO_PASSWORD
            }
        });
        
        if (endpointsResponse.data && endpointsResponse.data.tasks) {
            const endpoints = endpointsResponse.data.tasks[0].result;
            console.log('✅ Available endpoints found:', Object.keys(endpoints).length);
            
            // Show keyword-related endpoints
            const keywordEndpoints = Object.keys(endpoints).filter(ep => 
                ep.includes('keyword') || ep.includes('suggestions')
            );
            console.log('🔍 Keyword-related endpoints:', keywordEndpoints.slice(0, 10));
        }
        
    } catch (error) {
        console.log('❌ Endpoints check failed:', error.response?.data || error.message);
    }
    
    try {
        // Step 3: Test simple keyword suggestions endpoint
        console.log('\n3️⃣ Testing keyword suggestions endpoint...');
        const testResponse = await axios.post('https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live', [
            {
                keywords: ["Medicare Advantage plans"],
                location_code: 2840, // US
                language_code: "en"
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
        
        console.log('✅ API Response Status:', testResponse.status);
        console.log('📊 Response data:', JSON.stringify(testResponse.data, null, 2));
        
    } catch (error) {
        console.log('❌ Keyword test failed:', error.response?.data || error.message);
        console.log('🔍 Full error:', error.response?.status, error.response?.statusText);
    }
    
    try {
        // Step 4: Test alternative keyword endpoint
        console.log('\n4️⃣ Testing alternative keyword research endpoint...');
        const altResponse = await axios.post('https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live', [
            {
                keyword: "Medicare Advantage plans",
                location_code: 2840, // US
                language_code: "en",
                limit: 10
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
        
        console.log('✅ Alternative endpoint response:', JSON.stringify(altResponse.data, null, 2));
        
    } catch (error) {
        console.log('❌ Alternative endpoint failed:', error.response?.data || error.message);
    }
    
    try {
        // Step 5: Test Google Keyword Planner endpoint
        console.log('\n5️⃣ Testing Google Keyword Planner endpoint...');
        const gkpResponse = await axios.post('https://api.dataforseo.com/v3/keywords_data/google/keyword_ideas/live', [
            {
                keywords: ["Medicare Advantage"],
                location_code: 2840, // US
                language_code: "en",
                search_partners: false,
                date_from: "2024-01-01",
                date_to: "2024-12-31"
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
        
        console.log('✅ Google Keyword Planner response:', JSON.stringify(gkpResponse.data, null, 2));
        
    } catch (error) {
        console.log('❌ Google Keyword Planner failed:', error.response?.data || error.message);
    }
    
    console.log('\n🎯 Debug Summary:');
    console.log('- Check account credits and subscription status');
    console.log('- Try different keyword research endpoints');
    console.log('- Verify API parameter formats');
    console.log('- Consider using DataForSEO Labs endpoints for keyword data');
}

// Run debug
debugDataForSEO()
    .then(() => console.log('\n✅ Debug completed!'))
    .catch(error => console.error('\n❌ Debug failed:', error.message));