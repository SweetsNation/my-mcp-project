# 🚀 Production Deployment Guide
## El-Mag Insurance Medicare Advantage Website

This guide provides step-by-step instructions for deploying your Medicare Advantage website to production.

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Configuration

#### Required Environment Variables (Must Configure Before Deployment)

```bash
# Generate secure secret (32+ characters)
NEXTAUTH_SECRET=your-secure-32-char-secret

# Production database with SSL
DATABASE_URL=postgresql://username:password@host:port/elmag_insurance?sslmode=require

# Production domain
NEXTAUTH_URL=https://elmag-insurance.com
NEXT_PUBLIC_APP_URL=https://elmag-insurance.com

# Email service for lead notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=leads@elmaginsurance.com
SMTP_PASS=your-app-specific-password

# Google Analytics (replace with your actual GA4 ID)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Live Chat (replace with your Tawk.to IDs)
NEXT_PUBLIC_TAWK_PROPERTY_ID=your-tawk-property-id
NEXT_PUBLIC_TAWK_WIDGET_ID=your-tawk-widget-id
```

#### How to Generate Secure Secrets

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate WEBHOOK_SECRET
openssl rand -hex 32
```

### 2. External Service Setup

#### Google Analytics Setup
1. Create a GA4 property at https://analytics.google.com
2. Get your measurement ID (format: G-XXXXXXXXXX)
3. Update `NEXT_PUBLIC_GA_ID` in your environment variables

#### Tawk.to Live Chat Setup
1. Sign up at https://www.tawk.to/
2. Create a new property
3. Get Property ID and Widget ID from the admin panel
4. Update environment variables accordingly

#### Email Service Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Use the app password in `SMTP_PASS`

### 3. Database Setup

#### Production PostgreSQL Requirements
- PostgreSQL 15+
- SSL enabled
- Connection pooling configured
- Proper backup strategy

#### Database Migration Commands
```bash
# Apply schema to production database
psql $DATABASE_URL -f src/lib/database/schema.sql

# Seed with initial data (optional)
npm run seed:production
```

## 🔧 Deployment Options

### Option 1: Vercel Deployment (Recommended)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
vercel login
```

#### 2. Configure Environment Variables in Vercel
```bash
# Set all required environment variables
vercel env add NEXTAUTH_SECRET
vercel env add DATABASE_URL
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_TAWK_PROPERTY_ID
vercel env add NEXT_PUBLIC_TAWK_WIDGET_ID
```

#### 3. Deploy
```bash
# Deploy to production
vercel --prod
```

#### 4. Domain Configuration
1. Add your custom domain in Vercel dashboard
2. Configure DNS records as instructed
3. SSL certificates are automatic with Vercel

### Option 2: Docker Deployment

#### 1. Build Production Image
```bash
docker build -t elmag-insurance-website .
```

#### 2. Run with Environment Variables
```bash
docker run -d \
  --name elmag-insurance \
  --env-file .env.production \
  -p 3000:3000 \
  elmag-insurance-website
```

#### 3. Set up Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name elmag-insurance.com www.elmag-insurance.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Option 3: Manual Server Deployment

#### 1. Build Application
```bash
npm run build
npm start
```

#### 2. Process Manager (PM2)
```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🔒 Security Configuration

### SSL/TLS Setup
- Enable HTTPS for all connections
- Use SSL for database connections
- Configure security headers in Next.js config

### Environment Security
- Never commit secrets to version control
- Use different secrets for each environment
- Rotate API keys and passwords regularly
- Restrict CORS origins to production domains only

### Database Security
- Enable SSL connections
- Use connection pooling
- Implement proper backup strategy
- Set up monitoring and alerts

## 📊 Performance Optimization

### Caching Strategy
- Set up Redis for session storage
- Configure CDN for static assets
- Enable image optimization
- Use Next.js built-in caching

### Database Optimization
```bash
# PostgreSQL performance tuning
shared_preload_libraries = 'pg_stat_statements'
max_connections = 100
shared_buffers = 256MB
effective_cache_size = 1GB
```

### CDN Configuration (Optional)
1. Set up CloudFlare or AWS CloudFront
2. Configure image optimization
3. Set appropriate cache headers
4. Update CDN_URL environment variables

## 🔍 Monitoring & Maintenance

### Error Tracking with Sentry
1. Sign up at https://sentry.io
2. Create a new project
3. Get your DSN
4. Update `SENTRY_DSN` environment variable

### Health Checks
- Database connectivity: `/api/health`
- Application status monitoring
- Performance metrics tracking
- Error rate monitoring

### Backup Strategy
```bash
# Automated database backups
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Set up cron job for daily backups
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/db-$(date +%Y%m%d).sql.gz
```

## 🚀 Go-Live Steps

### Final Checklist Before Launch

1. **Environment Variables** ✅
   - [ ] All required variables configured
   - [ ] Secure secrets generated and set
   - [ ] Production domains updated

2. **External Services** ✅
   - [ ] Google Analytics property created and configured
   - [ ] Tawk.to live chat widget set up
   - [ ] Email service configured and tested

3. **Database** ✅
   - [ ] Production database created and migrated
   - [ ] SSL connections enabled
   - [ ] Backup strategy implemented

4. **Security** ✅
   - [ ] HTTPS/SSL certificates configured
   - [ ] CORS origins restricted to production domains
   - [ ] Security headers enabled

5. **Performance** ✅
   - [ ] CDN configured (optional)
   - [ ] Image optimization enabled
   - [ ] Redis caching set up (optional)

6. **Monitoring** ✅
   - [ ] Error tracking configured (Sentry)
   - [ ] Health checks implemented
   - [ ] Performance monitoring set up

### Launch Commands

```bash
# Final build test
npm run build

# Deploy to production
vercel --prod

# Verify deployment
curl -I https://elmag-insurance.com/api/health
```

### Post-Launch Tasks

1. **DNS Configuration**
   - Update DNS records to point to production
   - Verify SSL certificates are working
   - Test all domain variations (www, non-www)

2. **Testing**
   - Test all major user flows
   - Verify form submissions and email notifications
   - Check analytics and live chat functionality
   - Test performance on mobile and desktop

3. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Verify Google Analytics tracking
   - Check structured data implementation

## 📱 Contact & Support

For technical support during deployment:
- **Development Team**: Available for deployment assistance
- **Emergency Contact**: Keep technical contacts readily available
- **Documentation**: Refer to this guide and inline code comments

---

**🎉 Congratulations!** Your El-Mag Insurance Medicare Advantage website is now ready for production deployment!