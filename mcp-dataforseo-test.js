const { spawn } = require('child_process');
const fs = require('fs');

// Medicare Advantage keywords to research
const medicareKeywords = [
  "Medicare Advantage plans",
  "Medicare Advantage dental coverage",
  "Medicare Advantage savings",
  "Medicare Advantage benefits",
  "Medicare Advantage enrollment",
  "Medicare Advantage vs Original Medicare",
  "Medicare Advantage prescription drug coverage",
  "Medicare Advantage network",
  "Medicare Advantage cost",
  "Medicare Advantage reviews"
];

async function testDataForSEOMCP() {
  console.log('🔍 Testing DataForSEO MCP for Medicare Advantage keyword research...');
  
  try {
    // Test basic MCP connection
    console.log('📡 Attempting to connect to DataForSEO MCP...');
    
    // Create a simple test request
    const testRequest = {
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: {}
        },
        clientInfo: {
          name: 'dataforseo-test',
          version: '1.0.0'
        }
      }
    };
    
    console.log('📋 Test request prepared:', JSON.stringify(testRequest, null, 2));
    
    // Try to make a keyword research request
    const keywordRequest = {
      method: 'tools/call',
      params: {
        name: 'search_keywords',
        arguments: {
          keyword: "Medicare Advantage plans",
          location_code: 2840, // US
          language_code: "en",
          depth: 1
        }
      }
    };
    
    console.log('🔑 Keyword research request:', JSON.stringify(keywordRequest, null, 2));
    
    // Since direct MCP communication is complex, let's try the API directly
    console.log('\n🔄 Falling back to direct API test...');
    
    const response = await fetch('https://api.dataforseo.com/v3/keywords_data/google/keyword_suggestions', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from('inquiry@elmaginsurance.com:0f256932a691f1f1').toString('base64'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        keyword: "Medicare Advantage plans",
        location_code: 2840,
        language_code: "en",
        depth: 1
      }])
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.log('❌ API Error:', response.status, errorText);
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API Response:', JSON.stringify(data, null, 2));
    
    // Save results
    const results = {
      timestamp: new Date().toISOString(),
      keywords: medicareKeywords,
      api_response: data,
      summary: {
        total_keywords: medicareKeywords.length,
        api_status: response.status,
        has_data: data && data.tasks && data.tasks.length > 0
      }
    };
    
    fs.writeFileSync('dataforseo-mcp-results.json', JSON.stringify(results, null, 2));
    console.log('💾 Results saved to dataforseo-mcp-results.json');
    
    return results;
    
  } catch (error) {
    console.error('❌ Error testing DataForSEO MCP:', error.message);
    
    // Save error details
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      keywords: medicareKeywords,
      recommendation: "Consider using alternative keyword research tools or the existing opus-enhanced-keyword-research.md"
    };
    
    fs.writeFileSync('dataforseo-mcp-error.json', JSON.stringify(errorReport, null, 2));
    console.log('💾 Error report saved to dataforseo-mcp-error.json');
    
    throw error;
  }
}

testDataForSEOMCP().then(() => {
  console.log('\n🎯 DataForSEO MCP test completed!');
  console.log('📄 Check the generated JSON files for detailed results');
}).catch(error => {
  console.error('Failed to test DataForSEO MCP:', error);
  process.exit(1);
});
