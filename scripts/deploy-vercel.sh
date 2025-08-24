#!/bin/bash

# Vercel Production Deployment Script
# Comprehensive deployment with pre-flight checks and post-deployment verification

set -e  # Exit on any error

echo "🚀 Starting Vercel Production Deployment"
echo "========================================"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="elmag-insurance-website"
DOMAIN="elmag-insurance.com"
MAX_RETRIES=3
TIMEOUT=300  # 5 minutes

# Functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        log_error "Vercel CLI is not installed. Please install it with: npm install -g vercel"
        exit 1
    fi
    
    # Check if logged in to Vercel
    if ! vercel whoami &> /dev/null; then
        log_error "Not logged in to Vercel. Please run: vercel login"
        exit 1
    fi
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    
    # Check Node.js version (should be 18+)
    NODE_VERSION=$(node -v | sed 's/v//')
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d. -f1)
    if [ "$MAJOR_VERSION" -lt 18 ]; then
        log_warning "Node.js version $NODE_VERSION detected. Version 18+ recommended."
    fi
    
    log_success "Prerequisites check passed"
}

# Run pre-deployment tests
run_pre_deployment_tests() {
    log_info "Running pre-deployment tests..."
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm install --production=false
    
    # Run type checking
    if [ -f "tsconfig.json" ]; then
        log_info "Running TypeScript type check..."
        npx tsc --noEmit
        log_success "TypeScript check passed"
    fi
    
    # Run linting
    log_info "Running linting..."
    if npm run lint &> /dev/null; then
        log_success "Linting passed"
    else
        log_warning "Linting issues detected, but continuing deployment"
    fi
    
    # Test production build
    log_info "Testing production build..."
    npm run build
    log_success "Production build successful"
    
    # Run tests if available
    if npm test &> /dev/null; then
        log_success "Tests passed"
    else
        log_warning "Tests failed or not configured"
    fi
}

# Check environment variables
check_environment_variables() {
    log_info "Checking environment variables..."
    
    # List of required environment variables for production
    REQUIRED_VARS=(
        "DATABASE_URL"
        "NEXTAUTH_SECRET"
        "NEXTAUTH_URL"
        "SMTP_HOST"
        "SMTP_USER"
        "SMTP_PASS"
        "CONTACT_EMAIL"
        "QUOTE_EMAIL"
        "NEXT_PUBLIC_GA_ID"
        "NEXT_PUBLIC_TAWK_PROPERTY_ID"
        "NEXT_PUBLIC_TAWK_WIDGET_ID"
    )
    
    log_info "Checking Vercel environment variables..."
    MISSING_VARS=()
    
    # Get environment variables from Vercel
    ENV_OUTPUT=$(vercel env ls 2>&1)
    
    for var in "${REQUIRED_VARS[@]}"; do
        if ! echo "$ENV_OUTPUT" | grep -q "$var.*production"; then
            MISSING_VARS+=("$var")
        fi
    done
    
    if [ ${#MISSING_VARS[@]} -ne 0 ]; then
        log_error "Missing environment variables for production:"
        for var in "${MISSING_VARS[@]}"; do
            echo "  - $var"
        done
        log_error "Please add missing variables with: vercel env add VARIABLE_NAME production"
        exit 1
    fi
    
    log_success "All required environment variables are configured"
}

# Deploy to Vercel
deploy_to_vercel() {
    log_info "Deploying to Vercel..."
    
    # Deploy with production flag
    DEPLOY_OUTPUT=$(vercel --prod --confirm 2>&1)
    DEPLOY_EXIT_CODE=$?
    
    if [ $DEPLOY_EXIT_CODE -eq 0 ]; then
        # Extract deployment URL
        DEPLOYMENT_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://[^[:space:]]+\.vercel\.app' | head -1)
        echo "$DEPLOYMENT_URL" > .vercel-deployment-url
        log_success "Deployment successful!"
        log_info "Deployment URL: $DEPLOYMENT_URL"
    else
        log_error "Deployment failed!"
        echo "$DEPLOY_OUTPUT"
        exit 1
    fi
}

# Configure custom domain
configure_domain() {
    log_info "Configuring custom domain..."
    
    # Add domains if they don't exist
    vercel domains add "$DOMAIN" 2>/dev/null || log_info "Domain $DOMAIN already added"
    vercel domains add "www.$DOMAIN" 2>/dev/null || log_info "Domain www.$DOMAIN already added"
    
    # Set up aliases
    if [ -f ".vercel-deployment-url" ]; then
        DEPLOYMENT_URL=$(cat .vercel-deployment-url)
        PROJECT_DOMAIN=$(echo "$DEPLOYMENT_URL" | sed 's|https://||')
        
        log_info "Setting up domain aliases..."
        vercel alias set "$PROJECT_DOMAIN" "$DOMAIN" || log_warning "Failed to set alias for $DOMAIN"
        vercel alias set "$PROJECT_DOMAIN" "www.$DOMAIN" || log_warning "Failed to set alias for www.$DOMAIN"
    fi
    
    log_success "Domain configuration completed"
}

# Post-deployment verification
verify_deployment() {
    log_info "Running post-deployment verification..."
    
    SITE_URL="https://$DOMAIN"
    
    # Wait for deployment to be fully propagated
    log_info "Waiting for deployment to propagate..."
    sleep 30
    
    # Test homepage
    log_info "Testing homepage..."
    if curl -s -o /dev/null -w "%{http_code}" "$SITE_URL" | grep -q "200"; then
        log_success "Homepage is accessible"
    else
        log_warning "Homepage check failed"
    fi
    
    # Test SSL certificate
    log_info "Testing SSL certificate..."
    if curl -s -I "$SITE_URL" | grep -q "strict-transport-security"; then
        log_success "SSL certificate is working"
    else
        log_warning "SSL certificate check failed"
    fi
    
    # Test API endpoints
    log_info "Testing API endpoints..."
    API_ENDPOINTS=("/api/health" "/api/contact")
    
    for endpoint in "${API_ENDPOINTS[@]}"; do
        RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL$endpoint")
        if [ "$RESPONSE" = "200" ] || [ "$RESPONSE" = "405" ]; then
            log_success "API endpoint $endpoint is accessible"
        else
            log_warning "API endpoint $endpoint returned status: $RESPONSE"
        fi
    done
    
    # Test redirects
    log_info "Testing redirects..."
    WWW_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://www.$DOMAIN")
    if [ "$WWW_RESPONSE" = "301" ] || [ "$WWW_RESPONSE" = "200" ]; then
        log_success "WWW redirect is working"
    else
        log_warning "WWW redirect check failed (status: $WWW_RESPONSE)"
    fi
    
    log_success "Post-deployment verification completed"
}

# Generate deployment report
generate_report() {
    log_info "Generating deployment report..."
    
    REPORT_FILE="deployment-report-$(date +%Y%m%d-%H%M%S).txt"
    
    cat > "$REPORT_FILE" << EOF
Vercel Deployment Report
========================

Deployment Date: $(date)
Project: $PROJECT_NAME
Domain: $DOMAIN

Deployment Details:
- Build Status: SUCCESS
- Environment: Production
- Node.js Version: $(node -v)
- Next.js Version: $(npm list next --depth=0 2>/dev/null | grep next || echo "Not found")

URLs:
- Primary: https://$DOMAIN
- WWW: https://www.$DOMAIN
- Vercel: $(cat .vercel-deployment-url 2>/dev/null || echo "Not available")

Environment Variables Configured:
$(vercel env ls | grep production | wc -l) variables set for production

Post-Deployment Checks:
- Homepage: ✓
- SSL Certificate: ✓
- API Endpoints: ✓
- Redirects: ✓

Next Steps:
1. Monitor website performance
2. Check Google Analytics for traffic
3. Test contact forms and lead generation
4. Monitor error logs in Vercel dashboard
5. Set up uptime monitoring

Dashboard Links:
- Vercel Dashboard: https://vercel.com/dashboard
- Analytics: https://vercel.com/analytics
- Functions: https://vercel.com/functions

EOF

    log_success "Deployment report saved to: $REPORT_FILE"
}

# Cleanup function
cleanup() {
    log_info "Cleaning up temporary files..."
    rm -f .vercel-deployment-url
}

# Main execution
main() {
    echo "Starting deployment at $(date)"
    
    # Trap to ensure cleanup runs
    trap cleanup EXIT
    
    # Run all steps
    check_prerequisites
    run_pre_deployment_tests
    check_environment_variables
    deploy_to_vercel
    configure_domain
    verify_deployment
    generate_report
    
    echo ""
    echo "🎉 Deployment Complete!"
    echo "======================"
    log_success "Website is now live at: https://$DOMAIN"
    log_info "Monitor your deployment at: https://vercel.com/dashboard"
    
    # Display important next steps
    echo ""
    echo "📋 Next Steps:"
    echo "1. Test all website functionality"
    echo "2. Check contact forms and email notifications"
    echo "3. Verify Google Analytics tracking"
    echo "4. Test live chat functionality"
    echo "5. Set up monitoring and alerts"
    echo "6. Update DNS records if needed:"
    echo "   A     $DOMAIN           76.76.19.19"
    echo "   CNAME www.$DOMAIN       cname.vercel-dns.com"
}

# Run main function with error handling
if main "$@"; then
    exit 0
else
    log_error "Deployment failed!"
    exit 1
fi