#!/bin/bash

# Production Smoke Test
# Quick verification that essential functionality is working

DOMAIN="elmag-insurance.com"
TIMEOUT=10
FAIL_COUNT=0

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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
    ((FAIL_COUNT++))
}

# Test function
test_url() {
    local url=$1
    local expected_code=${2:-200}
    local description=$3
    
    log_info "Testing: $description"
    
    response=$(curl -s -o /dev/null -w "%{http_code}" --max-time $TIMEOUT "$url")
    
    if [ "$response" = "$expected_code" ]; then
        log_success "$description - Status: $response"
        return 0
    else
        log_error "$description - Expected: $expected_code, Got: $response"
        return 1
    fi
}

# Run smoke tests
echo "🔥 Production Smoke Test"
echo "========================="
echo "Domain: $DOMAIN"
echo "Started: $(date)"
echo ""

# Core pages
test_url "https://$DOMAIN" 200 "Homepage"
test_url "https://$DOMAIN/medicare-advantage" 200 "Medicare Advantage Main Page"
test_url "https://$DOMAIN/medicare-advantage/davidson-county-tennessee" 200 "Nashville Location Page"
test_url "https://$DOMAIN/contact" 200 "Contact Page"

# API endpoints
test_url "https://$DOMAIN/api/health" 200 "Health Check API"
test_url "https://$DOMAIN/sitemap.xml" 200 "XML Sitemap"
test_url "https://$DOMAIN/robots.txt" 200 "Robots.txt"

# SSL/HTTPS
log_info "Testing SSL certificate"
if curl -s -I "https://$DOMAIN" | grep -q "HTTP/[12].[01] 200"; then
    log_success "SSL Certificate - Valid"
else
    log_error "SSL Certificate - Issues detected"
fi

# Security headers
log_info "Testing security headers"
headers=$(curl -s -I "https://$DOMAIN")
if echo "$headers" | grep -qi "strict-transport-security"; then
    log_success "HSTS Header - Present"
else
    log_error "HSTS Header - Missing"
fi

# Redirects
test_url "https://www.$DOMAIN" 301 "WWW Redirect" || test_url "https://www.$DOMAIN" 200 "WWW Redirect (Alternative)"

# Performance check
log_info "Testing response time"
start_time=$(date +%s%3N)
curl -s -o /dev/null "https://$DOMAIN"
end_time=$(date +%s%3N)
response_time=$((end_time - start_time))

if [ $response_time -lt 3000 ]; then
    log_success "Response Time - ${response_time}ms (Good)"
elif [ $response_time -lt 5000 ]; then
    log_warning "Response Time - ${response_time}ms (Acceptable)"
else
    log_error "Response Time - ${response_time}ms (Too Slow)"
fi

# Final results
echo ""
echo "📊 Smoke Test Results"
echo "====================="
echo "Completed: $(date)"

if [ $FAIL_COUNT -eq 0 ]; then
    log_success "ALL TESTS PASSED! Website is operational."
    exit 0
elif [ $FAIL_COUNT -le 2 ]; then
    log_warning "$FAIL_COUNT minor issues detected. Website is mostly operational."
    exit 0
else
    log_error "$FAIL_COUNT issues detected. Website may have problems!"
    exit 1
fi