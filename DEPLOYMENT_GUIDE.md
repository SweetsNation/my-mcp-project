# Production Deployment Guide
## El-Mag Insurance Medicare Advantage Website

### Overview
This guide covers deploying your Medicare Advantage website to production using Vercel (recommended) and alternative hosting providers.

---

## 🚀 Option 1: Vercel Deployment (Recommended)

**Why Vercel?**
- Zero-config Next.js deployments
- Built-in SSL/HTTPS
- Global CDN and edge functions
- Automatic preview deployments
- Built-in analytics and monitoring
- Free SSL certificates
- Custom domain support

### Step 1: Install Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login
```

### Step 2: Initialize Vercel Project

```bash
# Run from your project root
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (choose your account/team)
# - Link to existing project? N (first time)
# - Project name: elmag-insurance-website
# - Directory: ./
# - Override settings? N
```

### Step 3: Configure Environment Variables

```bash
# Add production environment variables to Vercel
vercel env add DATABASE_URL production
vercel env add NEXTAUTH_SECRET production
vercel env add SMTP_HOST production
vercel env add SMTP_USER production
vercel env add SMTP_PASS production
vercel env add CONTACT_EMAIL production
vercel env add QUOTE_EMAIL production
vercel env add NEXT_PUBLIC_GA_ID production
vercel env add NEXT_PUBLIC_TAWK_PROPERTY_ID production
vercel env add NEXT_PUBLIC_TAWK_WIDGET_ID production
vercel env add PERPLEXITY_API_KEY production
vercel env add DATAFORSEO_LOGIN production
vercel env add DATAFORSEO_PASSWORD production

# Add all other variables from .env.production
```

**Alternative: Use Vercel Dashboard**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all variables from `.env.production`

### Step 4: Configure Custom Domain

```bash
# Add your custom domain
vercel domains add elmag-insurance.com
vercel domains add www.elmag-insurance.com

# Set up domain aliases in your project
vercel alias set your-project-url.vercel.app elmag-insurance.com
vercel alias set your-project-url.vercel.app www.elmag-insurance.com
```

**DNS Configuration:**
```
# Add these DNS records at your domain provider:
A     elmag-insurance.com       76.76.19.19
CNAME www.elmag-insurance.com   cname.vercel-dns.com
```

### Step 5: Configure Vercel Project Settings

Create `vercel.json` in your project root:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1", "sfo1"],
  "functions": {
    "src/pages/api/**/*.js": {
      "maxDuration": 30
    },
    "src/app/api/**/*.js": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "https://elmag-insurance.com"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type, Authorization"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/www.elmag-insurance.com/(.*)",
      "destination": "https://elmag-insurance.com/$1",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    },
    {
      "source": "/robots.txt",
      "destination": "/api/robots"
    }
  ]
}
```

### Step 6: Deploy to Production

```bash
# Deploy to production
vercel --prod

# Or use the deploy script
npm run deploy:vercel
```

---

## 🗄️ Database Setup on Vercel

### Option A: Vercel Postgres (Recommended)

```bash
# Create Vercel Postgres database
vercel storage create database --name elmag-insurance-db

# Get connection string
vercel env ls

# The DATABASE_URL will be automatically added to your environment
```

### Option B: External Database

If using external database (Supabase, Railway, etc.):

```bash
# Add your external database URL
vercel env add DATABASE_URL production
# Enter your full PostgreSQL connection string
```

---

## 🔧 Alternative Hosting Options

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

**Netlify Configuration (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Option 3: Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init
railway up
```

### Option 4: Digital Ocean App Platform

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set run command: `npm start`
4. Add environment variables
5. Configure custom domain

### Option 5: AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

---

## 📋 Pre-Deployment Checklist

### ✅ Code Preparation
- [ ] All syntax errors fixed
- [ ] Production build successful (`npm run build`)
- [ ] Environment variables configured
- [ ] Database schema deployed
- [ ] SSL certificates configured

### ✅ Performance Optimization
- [ ] Images optimized
- [ ] Bundle size analyzed
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals optimized
- [ ] CDN configured

### ✅ Security Configuration  
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] API rate limiting enabled
- [ ] Secrets not in version control

### ✅ Monitoring & Analytics
- [ ] Google Analytics configured
- [ ] Error tracking (Sentry) set up
- [ ] Uptime monitoring configured
- [ ] Performance monitoring enabled

---

## 🛠️ Deployment Scripts

I'll create automation scripts for easy deployment:

### Vercel Deployment Script
```bash
#!/bin/bash
echo "🚀 Deploying to Vercel..."

# Verify build works
echo "📦 Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Aborting deployment."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Aborting deployment."
    exit 1
fi

# Deploy to Vercel
echo "🌐 Deploying to production..."
vercel --prod

echo "✅ Deployment complete!"
echo "🔗 Visit: https://elmag-insurance.com"
```

---

## 📊 Post-Deployment Verification

### Automated Testing Script

```bash
#!/bin/bash
echo "🔍 Running post-deployment tests..."

DOMAIN="https://elmag-insurance.com"

# Test homepage
echo "Testing homepage..."
curl -I $DOMAIN | grep "200 OK"

# Test API endpoints
echo "Testing API endpoints..."
curl -I $DOMAIN/api/health | grep "200 OK"

# Test SSL certificate
echo "Testing SSL certificate..."
curl -I $DOMAIN | grep "strict-transport-security"

# Test performance
echo "Testing performance with Lighthouse..."
npx lighthouse $DOMAIN --output=json --quiet > lighthouse-report.json

echo "✅ Post-deployment tests complete!"
```

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Forms submit successfully  
- [ ] Email notifications working
- [ ] Live chat functional
- [ ] Google Analytics tracking
- [ ] SSL certificate valid
- [ ] Performance acceptable
- [ ] Mobile responsiveness
- [ ] SEO meta tags present

---

## 🔧 Troubleshooting Common Issues

### Build Failures

**Issue**: "Module not found"
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue**: "Environment variable not found"
```bash
# Solution: Check environment variables
vercel env ls
# Add missing variables
vercel env add VARIABLE_NAME production
```

### Runtime Errors

**Issue**: Database connection failed
- Verify DATABASE_URL is correct
- Check database server status
- Confirm SSL settings match

**Issue**: API endpoints not working
- Check API routes configuration
- Verify CORS settings
- Test API endpoints directly

### Performance Issues

**Issue**: Slow page loads
- Enable image optimization
- Configure CDN
- Analyze bundle size with `npm run analyze`

**Issue**: High memory usage
- Optimize database queries
- Implement caching
- Use connection pooling

---

## 📈 Monitoring & Maintenance

### Uptime Monitoring
- **UptimeRobot**: Free tier monitors every 5 minutes
- **Pingdom**: Comprehensive monitoring with alerts
- **StatusCake**: Multiple location monitoring

### Performance Monitoring
- **Vercel Analytics**: Built-in performance metrics
- **Google PageSpeed Insights**: Core Web Vitals
- **GTmetrix**: Detailed performance analysis

### Error Tracking
- **Sentry**: Real-time error tracking
- **LogRocket**: Session replay and debugging
- **Bugsnag**: Error monitoring and alerting

### Backup Strategy
- **Database**: Daily automated backups
- **Code**: Git repository on GitHub
- **Assets**: CDN with versioning
- **Environment**: Document all configurations

---

## 💰 Cost Estimation

### Vercel Pricing (Monthly)

**Hobby Plan (Free)**
- 100GB bandwidth
- 1000 serverless function invocations
- Custom domains included
- **Cost: $0**

**Pro Plan**
- 1TB bandwidth  
- 1M serverless function invocations
- Team collaboration
- **Cost: $20/month**

### Additional Services

**Database (Vercel Postgres)**
- Free: 256MB storage, 1GB transfer
- Pro: $20/month (10GB storage, 100GB transfer)

**Monitoring & Analytics**
- Sentry: Free tier (5K errors/month)
- Google Analytics: Free
- Uptime monitoring: Free tier available

**Estimated Total: $0-40/month** depending on traffic and requirements

---

## 🎯 Go-Live Timeline

### Phase 1: Pre-Launch (1-2 days)
- [ ] Complete all pre-deployment checklist items
- [ ] Set up monitoring and analytics
- [ ] Configure domain and SSL
- [ ] Deploy to staging for final testing

### Phase 2: Launch Day
- [ ] Deploy to production
- [ ] Verify all functionality
- [ ] Monitor for errors
- [ ] Update DNS records if needed

### Phase 3: Post-Launch (1 week)
- [ ] Monitor performance and errors
- [ ] Gather user feedback
- [ ] Optimize based on real usage data
- [ ] Plan future improvements

**🚀 Ready to deploy to production!**