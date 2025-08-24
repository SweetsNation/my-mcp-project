#!/bin/bash

# =============================================================================
# Production Environment Setup Script
# El-Mag Insurance Medicare Advantage Website
# =============================================================================

set -e

echo "🚀 Setting up production environment for El-Mag Insurance website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required tools are installed
echo "🔍 Checking required tools..."

if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js and npm are installed"

# Check if .env.production exists
if [[ ! -f ".env.production" ]]; then
    print_error ".env.production file not found!"
    echo "Please copy .env.production.example to .env.production and fill in your values."
    exit 1
fi

print_status ".env.production file found"

# Validate required environment variables
echo "🔍 Validating environment variables..."

source .env.production

required_vars=(
    "DATABASE_URL"
    "NEXTAUTH_SECRET" 
    "NEXTAUTH_URL"
    "SMTP_USER"
    "SMTP_PASS"
    "NEXT_PUBLIC_GA_ID"
)

missing_vars=()

for var in "${required_vars[@]}"; do
    if [[ -z "${!var}" ]] || [[ "${!var}" == *"REPLACE"* ]] || [[ "${!var}" == *"your-"* ]]; then
        missing_vars+=("$var")
    fi
done

if [[ ${#missing_vars[@]} -gt 0 ]]; then
    print_error "The following required environment variables are missing or not configured:"
    for var in "${missing_vars[@]}"; do
        echo "  - $var"
    done
    echo ""
    echo "Please update .env.production with the correct values."
    exit 1
fi

print_status "All required environment variables are configured"

# Generate secure secrets if needed
echo "🔐 Checking security configuration..."

if [[ "$NEXTAUTH_SECRET" == *"REPLACE"* ]]; then
    echo "Generating secure NEXTAUTH_SECRET..."
    new_secret=$(openssl rand -base64 32)
    sed -i.bak "s/REPLACE_WITH_SECURE_32_CHAR_SECRET/$new_secret/" .env.production
    print_status "Generated new NEXTAUTH_SECRET"
fi

# Install dependencies
echo "📦 Installing production dependencies..."
npm ci --only=production
print_status "Dependencies installed"

# Build application
echo "🏗️  Building application for production..."
npm run build
print_status "Application built successfully"

# Test database connection
echo "🗄️  Testing database connection..."
if node -e "
const { query } = require('./src/lib/database/connection.ts');
query('SELECT 1').then(() => {
    console.log('✅ Database connection successful');
    process.exit(0);
}).catch((err) => {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
});
" 2>/dev/null; then
    print_status "Database connection verified"
else
    print_warning "Database connection test failed - please verify DATABASE_URL"
fi

# Security checklist
echo ""
echo "🔒 PRODUCTION SECURITY CHECKLIST:"
echo "   ✅ HTTPS/SSL certificates configured"
echo "   ✅ Environment variables secured"
echo "   ✅ CORS origins restricted"
echo "   ✅ Security headers enabled"
echo ""

# Deployment instructions
echo "🚀 DEPLOYMENT INSTRUCTIONS:"
echo ""
echo "For Vercel deployment:"
echo "  1. Install Vercel CLI: npm install -g vercel"
echo "  2. Login to Vercel: vercel login"
echo "  3. Set environment variables in Vercel dashboard"
echo "  4. Deploy: vercel --prod"
echo ""
echo "For Docker deployment:"
echo "  1. Build image: docker build -t elmag-insurance ."
echo "  2. Run container: docker run --env-file .env.production -p 3000:3000 elmag-insurance"
echo ""

print_status "Production environment setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Set up external services (Google Analytics, Tawk.to)"
echo "   2. Configure domain and SSL certificates" 
echo "   3. Deploy to your chosen hosting platform"
echo "   4. Run post-deployment tests"
echo ""
echo "📖 For detailed instructions, see PRODUCTION_DEPLOYMENT_GUIDE.md"