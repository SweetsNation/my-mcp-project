const { spawn } = require('child_process');

console.log('🚀 Starting Claude Code with Perplexity MCP...\n');
console.log('📋 Instructions:');
console.log('1. When Claude starts, you may need to grant permissions for MCP tools');
console.log('2. Type "y" or "yes" when prompted to allow tool usage');
console.log('3. You can then ask Claude to search using Perplexity');
console.log('4. Type "exit" or press Ctrl+C to quit\n');

// Start Claude Code in interactive mode
const claudeProcess = spawn('npx', [
  '@anthropic-ai/claude-code',
  '--mcp-config', 'claude-desktop-config.json',
  '--model', 'claude-3-5-sonnet-20241022',
  '--permission-mode', 'acceptEdits'
], {
  stdio: 'inherit',
  env: { ...process.env }
});

claudeProcess.on('close', (code) => {
  console.log(`\n🎉 Claude Code session ended with code ${code}`);
  console.log('✅ Your Perplexity MCP + Claude Code setup is working!');
});
