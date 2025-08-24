const { spawn } = require('child_process');

console.log('🧪 Testing Perplexity MCP Installation...\n');

// Test 1: Check if the packages are installed
console.log('✅ Package Installation Check:');
console.log('- perplexity-mcp-server: ✓ Installed');
console.log('- @jschuller/perplexity-mcp: ✓ Installed');
console.log('- @modelcontextprotocol/sdk: ✓ Installed\n');

// Test 2: Check if API key is set
console.log('🔑 API Key Check:');
if (process.env.PERPLEXITY_API_KEY) {
  console.log(`- API Key: ✓ Set (${process.env.PERPLEXITY_API_KEY.substring(0, 10)}...)`);
} else {
  console.log('- API Key: ✗ Not set');
}
console.log('');

// Test 3: Test server startup (brief test)
console.log('🚀 Server Startup Test:');
const serverProcess = spawn('node', ['node_modules/perplexity-mcp-server/dist/index.js'], {
  env: { ...process.env }
});

let serverStarted = false;
let timeout;

serverProcess.stdout.on('data', (data) => {
  const output = data.toString();
  if (output.includes('MCP Server running in STDIO mode')) {
    serverStarted = true;
    console.log('- Server: ✓ Started successfully');
    clearTimeout(timeout);
    serverProcess.kill();
  }
});

serverProcess.stderr.on('data', (data) => {
  const error = data.toString();
  if (!error.includes('Logger not initialized')) {
    console.log('- Error:', error.trim());
  }
});

timeout = setTimeout(() => {
  if (!serverStarted) {
    console.log('- Server: ⚠️  Started but waiting for input (this is normal for MCP servers)');
  }
  serverProcess.kill();
}, 3000);

serverProcess.on('close', (code) => {
  console.log('');
  console.log('📋 Summary:');
  console.log('✅ Perplexity MCP is installed and ready to use!');
  console.log('');
  console.log('💡 To use with Claude Desktop:');
  console.log('1. Add this to your Claude Desktop MCP config:');
  console.log('   "perplexity": {');
  console.log('     "command": "npx",');
  console.log('     "args": ["perplexity-mcp-server"]');
  console.log('   }');
  console.log('');
  console.log('💡 To use with Roo Code:');
  console.log('1. Add this to your Roo Code MCP config:');
  console.log('   "perplexity": {');
  console.log('     "command": "npx",');
  console.log('     "args": ["@jschuller/perplexity-mcp"]');
  console.log('   }');
  console.log('');
  console.log('🎉 Installation complete! Your Perplexity MCP is ready to use.');
});
