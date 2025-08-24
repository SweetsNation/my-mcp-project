# Perplexity MCP Project

This project demonstrates how to use Perplexity AI's search capabilities through the Model Context Protocol (MCP).

## Installation

The project is already set up with the necessary dependencies:

- `@modelcontextprotocol/sdk` - MCP SDK
- `perplexity-mcp-server` - Basic Perplexity MCP server with robust error handling and validation
- `@jschuller/perplexity-mcp` - Enhanced Perplexity MCP server with advanced Deep Research parameters
- `@anthropic-ai/claude-code` - Claude Code for interactive development with MCP support

### Server Differences

- **perplexity-mcp-server**: Production-ready server with comprehensive error handling, input validation, and structured logging
- **@jschuller/perplexity-mcp**: Enhanced version with additional Deep Research parameters and optimizations for Claude Desktop and Roo Code

## Setup

1. **Get a Perplexity API Key**
   - Visit [Perplexity AI Settings](https://www.perplexity.ai/settings/api)
   - Generate an API key

2. **Set Environment Variable**
   ```bash
   export PERPLEXITY_API_KEY="your-api-key-here"
   ```

## Usage

### Testing the Installation

```bash
node simple-test.js
```

This will verify that:
- All packages are installed correctly
- Your API key is set
- The MCP server can start successfully

### Available Models

The Perplexity MCP servers support several models:

- `sonar-pro` - General purpose search and reasoning
- `sonar-reasoning-pro` - Enhanced reasoning capabilities
- `sonar-deep-research` - Deep research with comprehensive analysis

### Configuration Files

- `claude-desktop-config.json` - Ready-to-use configuration for Claude Desktop
- `mcp-config.json` - General MCP configuration template

### Using with Claude Code

You can now use Claude Code with Perplexity MCP integration:

```bash
# Start Claude Code with Perplexity MCP (interactive mode)
npm run claude-mcp

# Start Claude Code with Perplexity MCP (using helper script)
node start-claude.js

# Or start Claude Code without MCP
npm run claude
```

**Note**: 
- On first run, Claude Code will prompt you to authenticate
- You may need to grant permissions for MCP tools when prompted
- The setup uses Claude 3.5 Sonnet model for compatibility

### Using with Other MCP Clients

The Perplexity MCP servers are designed to work with MCP-compatible clients like Claude Desktop, Roo Code, and others. They communicate via JSON-RPC over stdin/stdout, which is why they appear to "hang" when run directly - they're waiting for client messages.

### Configuration

The `mcp-config.json` file shows how to configure the MCP servers for use with Claude Desktop or other MCP clients.

## Features

- **Web Search**: Real-time web search capabilities
- **Multiple Models**: Support for different Perplexity AI models
- **Structured Responses**: Get structured data from searches
- **Error Handling**: Robust error handling and validation
- **Rate Limiting**: Built-in rate limiting support

## Troubleshooting

1. **API Key Issues**: Make sure your Perplexity API key is valid and has sufficient credits
2. **Network Issues**: Ensure you have internet connectivity for web searches
3. **Rate Limits**: Perplexity has rate limits; the MCP servers handle this automatically

## Additional Resources

- [Perplexity AI API Documentation](https://docs.perplexity.ai/)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/sdk)
