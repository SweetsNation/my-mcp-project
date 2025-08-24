#!/bin/bash

# =============================================================================
# SSL Certificate and Domain Verification Script
# El-Mag Insurance Medicare Advantage Website
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Domain to test
DOMAIN="${1:-elmag-insurance.com}"

echo -e "${BLUE}🔒 SSL Certificate and Domain Verification for: $DOMAIN${NC}"
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

# Check if domain resolves
echo ""
echo "🌐 DNS Resolution Check"
echo "------------------------"

if dig +short $DOMAIN > /dev/null 2>&1; then
    IP=$(dig +short $DOMAIN | head -n 1)
    if [[ -n "$IP" ]]; then
        print_success "DNS resolution successful: $DOMAIN → $IP"
    else
        print_warning "DNS resolution returned empty result"
    fi
else
    print_error "DNS resolution failed for $DOMAIN"
fi

# Check WWW subdomain
if dig +short www.$DOMAIN > /dev/null 2>&1; then
    WWW_IP=$(dig +short www.$DOMAIN | head -n 1)
    if [[ -n "$WWW_IP" ]]; then
        print_success "WWW subdomain resolves: www.$DOMAIN → $WWW_IP"
    else
        print_warning "WWW subdomain DNS resolution returned empty result"
    fi
else
    print_warning "WWW subdomain DNS resolution failed"
fi

# Check if HTTPS is accessible
echo ""
echo "🔒 HTTPS Accessibility Check"
echo "-----------------------------"

if curl -s --max-time 10 https://$DOMAIN > /dev/null 2>&1; then
    print_success "HTTPS site is accessible"
else
    print_error "HTTPS site is not accessible or timed out"
fi

# Check SSL certificate
echo ""
echo "📜 SSL Certificate Check"
echo "-------------------------"

if command -v openssl &> /dev/null; then
    SSL_INFO=$(echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -dates 2>/dev/null)
    
    if [[ $? -eq 0 ]]; then
        print_success "SSL certificate is valid"
        echo "$SSL_INFO"
        
        # Check certificate expiration
        EXPIRY_DATE=$(echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
        if [[ -n "$EXPIRY_DATE" ]]; then
            print_info "Certificate expires: $EXPIRY_DATE"
            
            # Check if certificate expires within 30 days
            EXPIRY_EPOCH=$(date -d "$EXPIRY_DATE" +%s 2>/dev/null || date -j -f "%b %d %H:%M:%S %Y %Z" "$EXPIRY_DATE" +%s 2>/dev/null)
            CURRENT_EPOCH=$(date +%s)
            DAYS_TO_EXPIRY=$(( ($EXPIRY_EPOCH - $CURRENT_EPOCH) / 86400 ))
            
            if [[ $DAYS_TO_EXPIRY -lt 30 ]]; then
                print_warning "Certificate expires in $DAYS_TO_EXPIRY days - renewal needed soon"
            elif [[ $DAYS_TO_EXPIRY -lt 7 ]]; then
                print_error "Certificate expires in $DAYS_TO_EXPIRY days - urgent renewal required"
            else
                print_success "Certificate is valid for $DAYS_TO_EXPIRY more days"
            fi
        fi
    else
        print_error "SSL certificate check failed"
    fi
else
    print_warning "OpenSSL not available - skipping certificate details"
fi

# Check HTTP to HTTPS redirect
echo ""
echo "🔄 HTTP to HTTPS Redirect Check"
echo "--------------------------------"

HTTP_RESPONSE=$(curl -s -I --max-time 10 http://$DOMAIN 2>/dev/null | head -n 1)
if echo "$HTTP_RESPONSE" | grep -q "301\|302"; then
    print_success "HTTP to HTTPS redirect is working"
else
    print_warning "HTTP to HTTPS redirect not detected"
fi

# Check WWW to non-WWW redirect
echo ""
echo "🔄 WWW to non-WWW Redirect Check"
echo "---------------------------------"

WWW_RESPONSE=$(curl -s -I --max-time 10 https://www.$DOMAIN 2>/dev/null | head -n 1)
if echo "$WWW_RESPONSE" | grep -q "301\|302"; then
    print_success "WWW to non-WWW redirect is working"
else
    print_warning "WWW to non-WWW redirect not detected"
fi

# Check security headers
echo ""
echo "🛡️  Security Headers Check"
echo "---------------------------"

HEADERS=$(curl -s -I --max-time 10 https://$DOMAIN 2>/dev/null)

# Check for HSTS
if echo "$HEADERS" | grep -i "strict-transport-security" > /dev/null; then
    print_success "HSTS (Strict-Transport-Security) header present"
else
    print_warning "HSTS header missing"
fi

# Check for X-Frame-Options
if echo "$HEADERS" | grep -i "x-frame-options" > /dev/null; then
    print_success "X-Frame-Options header present"
else
    print_warning "X-Frame-Options header missing"
fi

# Check for X-Content-Type-Options
if echo "$HEADERS" | grep -i "x-content-type-options" > /dev/null; then
    print_success "X-Content-Type-Options header present"
else
    print_warning "X-Content-Type-Options header missing"
fi

# Check for X-XSS-Protection
if echo "$HEADERS" | grep -i "x-xss-protection" > /dev/null; then
    print_success "X-XSS-Protection header present"
else
    print_warning "X-XSS-Protection header missing"
fi

# Performance check
echo ""
echo "⚡ Performance Check"
echo "--------------------"

if command -v curl &> /dev/null; then
    RESPONSE_TIME=$(curl -w "%{time_total}" -o /dev/null -s --max-time 10 https://$DOMAIN 2>/dev/null)
    if [[ $? -eq 0 ]]; then
        print_info "Response time: ${RESPONSE_TIME}s"
        
        # Evaluate performance
        RESPONSE_MS=$(echo "$RESPONSE_TIME * 1000" | bc 2>/dev/null || echo "0")
        if (( $(echo "$RESPONSE_TIME < 1.0" | bc -l 2>/dev/null || echo "0") )); then
            print_success "Excellent response time (< 1s)"
        elif (( $(echo "$RESPONSE_TIME < 2.0" | bc -l 2>/dev/null || echo "0") )); then
            print_success "Good response time (< 2s)"
        elif (( $(echo "$RESPONSE_TIME < 3.0" | bc -l 2>/dev/null || echo "0") )); then
            print_warning "Acceptable response time (< 3s)"
        else
            print_warning "Slow response time (> 3s) - optimization needed"
        fi
    else
        print_error "Performance check failed"
    fi
fi

# External SSL test recommendations
echo ""
echo "🔍 Recommended External Tests"
echo "------------------------------"
print_info "Run these external tests for comprehensive validation:"
echo ""
echo "1. SSL Labs Test (A+ rating target):"
echo "   https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
echo ""
echo "2. Security Headers Test:"
echo "   https://securityheaders.com/?q=$DOMAIN"
echo ""
echo "3. Mozilla Observatory:"
echo "   https://observatory.mozilla.org/analyze/$DOMAIN"
echo ""
echo "4. Certificate Transparency Check:"
echo "   https://crt.sh/?q=$DOMAIN"
echo ""

# Final summary
echo ""
echo "📋 Summary"
echo "----------"

# Count successful checks (this is a simplified version)
if [[ -n "$IP" ]] && curl -s --max-time 10 https://$DOMAIN > /dev/null 2>&1; then
    print_success "Domain and SSL setup appears to be working correctly"
    print_info "Run the recommended external tests for comprehensive validation"
else
    print_error "Some issues detected - please review the checks above"
fi

echo ""
echo "🎉 SSL and domain verification completed!"
echo ""
echo "💡 Tips:"
echo "   - Monitor certificate expiration and set up auto-renewal"
echo "   - Regularly test with external tools"
echo "   - Keep security headers updated"
echo "   - Monitor performance regularly"