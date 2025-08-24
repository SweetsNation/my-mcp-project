# 🔒 SSL Certificates & Domain Configuration Guide
## El-Mag Insurance Medicare Advantage Website

This guide covers SSL certificate setup and domain configuration for your production deployment.

## 🌐 Domain Configuration Overview

### Primary Domain Structure
- **Primary**: `elmag-insurance.com`
- **WWW Redirect**: `www.elmag-insurance.com` → `elmag-insurance.com`
- **API Subdomain**: `api.elmag-insurance.com` (optional)
- **CDN Subdomain**: `cdn.elmag-insurance.com` (optional)

## 📋 SSL Setup Options

### Option 1: Vercel (Automatic SSL - Recommended)

Vercel provides automatic SSL certificates via Let's Encrypt with zero configuration.

#### Benefits:
- ✅ Automatic SSL certificate provisioning
- ✅ Automatic renewal (no manual intervention)
- ✅ Edge network optimization
- ✅ Built-in HTTPS redirects
- ✅ Perfect SSL score (A+)

#### Setup Steps:

1. **Deploy to Vercel**
   ```bash
   vercel login
   vercel --prod
   ```

2. **Add Custom Domain in Vercel Dashboard**
   - Go to Project Settings → Domains
   - Add `elmag-insurance.com`
   - Add `www.elmag-insurance.com` (will auto-redirect to primary)

3. **Configure DNS Records**
   ```dns
   # A Record (Primary domain)
   Type: A
   Name: @
   Value: 76.76.19.61

   # CNAME Record (WWW redirect)
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   # Optional: API subdomain
   Type: CNAME
   Name: api
   Value: cname.vercel-dns.com
   ```

4. **Verify SSL Status**
   - SSL certificates are provisioned automatically
   - Check at: https://www.ssllabs.com/ssltest/

### Option 2: Cloudflare (Free SSL + CDN)

Cloudflare provides free SSL certificates and global CDN.

#### Benefits:
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ DDoS protection
- ✅ Performance optimization
- ✅ Advanced security features

#### Setup Steps:

1. **Add Domain to Cloudflare**
   - Sign up at cloudflare.com
   - Add your domain `elmag-insurance.com`
   - Update nameservers as instructed

2. **Configure DNS Records**
   ```dns
   # A Record (Primary domain)
   Type: A
   Name: @
   Value: [Your server IP]
   Proxy: ON (orange cloud)

   # CNAME Record (WWW)
   Type: CNAME
   Name: www
   Value: elmag-insurance.com
   Proxy: ON (orange cloud)
   ```

3. **SSL Configuration**
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"
   - Enable "HTTP Strict Transport Security (HSTS)"

4. **Page Rules for Redirects**
   ```
   URL: www.elmag-insurance.com/*
   Setting: Forwarding URL (301 redirect)
   Destination: https://elmag-insurance.com/$1
   ```

### Option 3: Manual SSL Setup (Traditional)

For custom server deployments with manual SSL certificate management.

#### Prerequisites:
- Domain ownership verification
- Server with public IP address
- Root/sudo access to server

#### 1. Obtain SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d elmag-insurance.com -d www.elmag-insurance.com

# Set up auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

#### 2. Nginx Configuration

Create `/etc/nginx/sites-available/elmag-insurance.com`:

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name elmag-insurance.com www.elmag-insurance.com;
    return 301 https://elmag-insurance.com$request_uri;
}

# Redirect WWW to non-WWW HTTPS
server {
    listen 443 ssl http2;
    server_name www.elmag-insurance.com;
    
    ssl_certificate /etc/letsencrypt/live/elmag-insurance.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/elmag-insurance.com/privkey.pem;
    
    return 301 https://elmag-insurance.com$request_uri;
}

# Main HTTPS server
server {
    listen 443 ssl http2;
    server_name elmag-insurance.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/elmag-insurance.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/elmag-insurance.com/privkey.pem;
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_ecdh_curve secp384r1;
    ssl_session_timeout 10m;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Proxy to Next.js application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static assets with long cache
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Images with cache
    location /images/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
}
```

#### 3. Enable Configuration

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/elmag-insurance.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## 🔧 Domain DNS Configuration

### Required DNS Records

```dns
# A Records (IPv4)
Type: A
Name: @
Value: [Server IP Address]
TTL: 300

# AAAA Records (IPv6) - Optional
Type: AAAA
Name: @
Value: [IPv6 Address]
TTL: 300

# CNAME Records
Type: CNAME
Name: www
Value: elmag-insurance.com
TTL: 300

# MX Records (Email) - Optional
Type: MX
Name: @
Value: mail.elmag-insurance.com
Priority: 10
TTL: 300

# TXT Records (Verification)
Type: TXT
Name: @
Value: "v=spf1 include:_spf.google.com ~all"
TTL: 300

# CAA Records (Certificate Authority Authorization)
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
TTL: 300
```

### DNS Propagation Check

```bash
# Check DNS propagation
dig elmag-insurance.com
dig www.elmag-insurance.com

# Check from different locations
nslookup elmag-insurance.com 8.8.8.8
nslookup elmag-insurance.com 1.1.1.1
```

## 🛡️ Security Configuration

### HTTPS Enforcement

Update your Next.js configuration to enforce HTTPS:

```javascript
// next.config.js
const nextConfig = {
  async redirects() {
    return [
      // Redirect HTTP to HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://elmag-insurance.com/:path*',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.elmag-insurance.com',
          },
        ],
        destination: 'https://elmag-insurance.com/:path*',
        permanent: true,
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### Environment Variables Update

Update production environment variables:

```bash
# Production URLs
NEXT_PUBLIC_APP_URL=https://elmag-insurance.com
NEXTAUTH_URL=https://elmag-insurance.com

# CORS Origins (HTTPS only)
ALLOWED_ORIGINS=https://elmag-insurance.com

# CDN URL (if using)
CDN_URL=https://cdn.elmag-insurance.com
NEXT_PUBLIC_CDN_URL=https://cdn.elmag-insurance.com
```

## ✅ SSL Verification Checklist

### Pre-Deployment Testing

```bash
# Test SSL certificate
openssl s_client -connect elmag-insurance.com:443 -servername elmag-insurance.com

# Check certificate details
curl -I https://elmag-insurance.com

# Verify HTTPS redirects
curl -I http://elmag-insurance.com
curl -I https://www.elmag-insurance.com
```

### Online SSL Testing Tools

1. **SSL Labs Test**
   - URL: https://www.ssllabs.com/ssltest/
   - Target Grade: A or A+

2. **Security Headers Check**
   - URL: https://securityheaders.com/
   - Target Grade: A or A+

3. **Certificate Transparency**
   - URL: https://crt.sh/
   - Verify certificate is logged

### Performance Testing

```bash
# Test HTTPS performance
curl -w "@curl-format.txt" -o /dev/null -s https://elmag-insurance.com

# Where curl-format.txt contains:
#      time_namelookup:  %{time_namelookup}\n
#         time_connect:  %{time_connect}\n
#      time_appconnect:  %{time_appconnect}\n
#     time_pretransfer:  %{time_pretransfer}\n
#        time_redirect:  %{time_redirect}\n
#   time_starttransfer:  %{time_starttransfer}\n
#                      ----------\n
#           time_total:  %{time_total}\n
```

## 🚀 Post-SSL Deployment Steps

1. **Update Environment Variables**
   - Set all URLs to HTTPS
   - Update CORS origins
   - Configure security headers

2. **Test All Functionality**
   - Lead forms submission
   - Analytics tracking
   - Live chat integration
   - API endpoints

3. **SEO Updates**
   - Submit HTTPS sitemap to Google Search Console
   - Update any external links to HTTPS
   - Check internal links are relative or HTTPS

4. **Monitor Certificate Expiration**
   - Set up monitoring alerts
   - Test auto-renewal process
   - Document renewal procedures

## 📞 Support & Troubleshooting

### Common Issues

1. **Mixed Content Errors**
   - Ensure all resources load via HTTPS
   - Update any HTTP URLs in code

2. **Certificate Chain Issues**
   - Verify intermediate certificates are included
   - Check certificate authority

3. **HSTS Issues**
   - Clear browser HSTS cache if needed
   - Verify HSTS header configuration

### Emergency Contacts
- DNS Provider support
- SSL Certificate provider support
- Hosting provider support (if not using Vercel)

---

**🔒 Your SSL and domain configuration is now ready for production deployment!**