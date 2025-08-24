const { spawn } = require('child_process');

console.log('🚀 Starting Claude Code (Basic Mode)...\n');
console.log('📋 Instructions:');
console.log('1. Claude Code is starting in basic mode (without MCP)');
console.log('2. This will help us verify the connection is stable');
console.log('3. Type your questions and press Enter');
console.log('4. Type "exit" or press Ctrl+C to quit');
console.log('5. Once this works, we can add Perplexity MCP\n');

// Start Claude Code in basic mode first
const claudeProcess = spawn('npx', [
  '@anthropic-ai/claude-code',
  '--model', 'claude-3-5-sonnet-20241022'
], {
  stdio: 'inherit',
  env: { ...process.env }
});

claudeProcess.on('close', (code) => {
  console.log(`\n🎉 Claude Code session ended with code ${code}`);
  console.log('✅ Basic Claude Code is working!');
  console.log('\n💡 Next Steps:');
  console.log('1. Once you confirm basic mode works, we can add Perplexity MCP');
  console.log('2. Run: node start-claude.js (for MCP version)');
});
