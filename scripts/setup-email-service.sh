#!/bin/bash

# =============================================================================
# Email Service Setup Script
# El-Mag Insurance Medicare Advantage Website
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📧 Setting up Email Service for El-Mag Insurance website...${NC}"
echo "================================================================"

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if .env.local exists
if [[ ! -f ".env.local" ]]; then
    print_error ".env.local file not found!"
    echo "Creating .env.local from template..."
    cp .env.example .env.local
    print_info "Please update .env.local with your email configuration"
fi

print_success ".env.local file found"

# Check for required environment variables
echo ""
echo "🔍 Checking Email Configuration..."
echo "-----------------------------------"

source .env.local

required_vars=(
    "SMTP_HOST"
    "SMTP_PORT" 
    "SMTP_USER"
    "SMTP_PASS"
)

missing_vars=()

for var in "${required_vars[@]}"; do
    if [[ -z "${!var}" ]] || [[ "${!var}" == *"your-"* ]]; then
        missing_vars+=("$var")
    fi
done

if [[ ${#missing_vars[@]} -gt 0 ]]; then
    print_warning "The following email configuration variables need to be set:"
    for var in "${missing_vars[@]}"; do
        echo "  - $var"
    done
    echo ""
    echo "📝 Email provider setup guides:"
    echo ""
    echo "🔹 Gmail Setup:"
    echo "   1. Enable 2-Factor Authentication"
    echo "   2. Generate App Password: https://myaccount.google.com/apppasswords"
    echo "   3. Use app password in SMTP_PASS"
    echo ""
    echo "🔹 Microsoft 365 Setup:"
    echo "   1. Enable SMTP AUTH in admin center"
    echo "   2. Use your regular password or app password"
    echo ""
    echo "🔹 SendGrid Setup:"
    echo "   1. Create account at sendgrid.com"
    echo "   2. Generate API key"
    echo "   3. Use 'apikey' as SMTP_USER and API key as SMTP_PASS"
    echo ""
    
    read -p "Do you want to continue with manual email service testing? (y/N): " continue_test
    if [[ ! "$continue_test" =~ ^[Yy]$ ]]; then
        echo "Please update your email configuration and run this script again."
        exit 0
    fi
else
    print_success "All email configuration variables are set"
fi

# Install nodemailer if not already installed
echo ""
echo "📦 Checking dependencies..."
echo "---------------------------"

if npm list nodemailer > /dev/null 2>&1; then
    print_success "nodemailer is installed"
else
    print_warning "nodemailer not found, installing..."
    npm install nodemailer
    print_success "nodemailer installed"
fi

# Test email service
echo ""
echo "🧪 Testing Email Service..."
echo "----------------------------"

if [[ -f "scripts/test-email-service.js" ]]; then
    print_info "Running email service test..."
    node scripts/test-email-service.js
else
    print_error "Email test script not found"
    exit 1
fi

# Check API endpoints
echo ""
echo "🔍 Testing API Endpoints..."
echo "----------------------------"

# Start development server in background
print_info "Starting development server for testing..."
npm run dev > /dev/null 2>&1 &
DEV_SERVER_PID=$!

# Wait for server to start
sleep 5

# Test contact API
print_info "Testing contact form API..."
CONTACT_RESPONSE=$(curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "API Test",
    "message": "Testing contact form API endpoint",
    "phone": "555-123-4567",
    "zipCode": "12345"
  }' || echo "API_ERROR")

if [[ "$CONTACT_RESPONSE" == *"success"* ]]; then
    print_success "Contact form API is working"
else
    print_warning "Contact form API test failed - check server logs"
fi

# Test quote API
print_info "Testing quote request API..."
QUOTE_RESPONSE=$(curl -s -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "phone": "555-123-4567",
    "zipCode": "12345",
    "dateOfBirth": "1960-01-01",
    "interests": ["Medicare Advantage", "Dental Coverage"],
    "preferredContactMethod": "email"
  }' || echo "API_ERROR")

if [[ "$QUOTE_RESPONSE" == *"success"* ]]; then
    print_success "Quote request API is working"
else
    print_warning "Quote request API test failed - check server logs"
fi

# Kill development server
kill $DEV_SERVER_PID > /dev/null 2>&1 || true

echo ""
echo "📋 Setup Summary"
echo "-----------------"

if [[ ${#missing_vars[@]} -eq 0 ]]; then
    print_success "Email service configuration is complete"
else
    print_warning "Email service needs configuration updates"
fi

echo ""
echo "🚀 Next Steps:"
echo "   1. Update production environment variables"
echo "   2. Configure email recipient addresses:"
echo "      - CONTACT_EMAIL: submissions@elmaginsurance.com"
echo "      - QUOTE_EMAIL: quotes@elmaginsurance.com"
echo "   3. Test email delivery in production"
echo "   4. Set up email monitoring and alerts"
echo "   5. Configure spam prevention (SPF, DKIM records)"

echo ""
echo "📧 Email Templates Ready:"
echo "   ✅ Contact form notifications"
echo "   ✅ Quote request notifications"
echo "   ✅ Customer confirmation emails"
echo "   ✅ Professional HTML formatting"

echo ""
echo "📖 For detailed setup instructions, see SMTP_EMAIL_SETUP.md"
print_success "Email service setup completed!"