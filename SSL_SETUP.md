# SSL Certificate Setup Guide

## Overview
This guide covers SSL certificate setup for El-Mag Insurance website to ensure secure HTTPS connections.

## Production SSL Setup

### 1. Certificate Authorities (Recommended)
- **Let's Encrypt** (Free, auto-renewal)
- **DigiCert** (Premium, extended validation)
- **Cloudflare SSL** (Free with Cloudflare CDN)

### 2. Vercel Deployment (Automatic SSL)
If deploying to Vercel:
- SSL is automatically provided
- Custom domains get SSL certificates automatically
- No manual configuration required

### 3. Manual SSL Configuration

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name elmag-insurance.com www.elmag-insurance.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name elmag-insurance.com www.elmag-insurance.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Security Headers
Add these to your server configuration:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### 5. Next.js Configuration
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
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

module.exports = nextConfig;
```

## Certificate Installation Steps

1. **Purchase/Generate Certificate**
   - For Let's Encrypt: Use certbot
   - For paid certificates: Follow CA instructions

2. **Install Certificate**
   ```bash
   # For Let's Encrypt
   sudo certbot --nginx -d elmag-insurance.com -d www.elmag-insurance.com
   
   # Manual installation
   sudo cp certificate.crt /etc/ssl/certs/
   sudo cp private.key /etc/ssl/private/
   sudo chmod 644 /etc/ssl/certs/certificate.crt
   sudo chmod 600 /etc/ssl/private/private.key
   ```

3. **Test SSL Configuration**
   - Use SSL Labs test: https://www.ssllabs.com/ssltest/
   - Verify certificate chain and expiration dates

4. **Set up Auto-Renewal**
   ```bash
   # For Let's Encrypt
   sudo crontab -e
   # Add: 0 12 * * * /usr/bin/certbot renew --quiet
   ```

## Security Checklist
- [ ] SSL certificate installed and valid
- [ ] HTTP to HTTPS redirect configured
- [ ] Security headers implemented
- [ ] Mixed content issues resolved
- [ ] Certificate auto-renewal configured
- [ ] SSL Labs grade A+ achieved

## Monitoring
- Monitor certificate expiration dates
- Set up alerts for certificate issues
- Regular security scans

## Support
For assistance with SSL setup, contact your hosting provider or system administrator.