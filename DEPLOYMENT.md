# El-Mag Insurance Medicare Advantage Website - Deployment Guide

## Overview

This is a production-ready Next.js application for El-Mag Insurance's Medicare Advantage programmatic content website. It features dynamic content generation, plan comparison tools, SEO optimization, and comprehensive Medicare plan data management.

## Architecture

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes with PostgreSQL database
- **Caching**: Redis for performance optimization
- **Deployment**: Vercel (recommended) or Docker containers
- **Database**: PostgreSQL with comprehensive Medicare plan schema

## Features

- ✅ Programmatic page generation for multiple locations and keywords
- ✅ Interactive Medicare plan comparison tool
- ✅ Dynamic content generation system
- ✅ Comprehensive SEO optimization and structured data
- ✅ Database schema for Medicare plan data
- ✅ API routes for plan data management
- ✅ Responsive design with Tailwind CSS
- ✅ Performance optimized with caching
- ✅ Lead generation and contact forms

## Quick Start

### 1. Prerequisites

- Node.js 18+ 
- PostgreSQL 15+
- Redis (optional for caching)
- npm or yarn package manager

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/elmag-insurance/medicare-advantage-website.git
cd medicare-advantage-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration
```

### 3. Database Setup

```bash
# Create PostgreSQL database
createdb elmag_insurance_dev

# Run database schema
psql -d elmag_insurance_dev -f src/lib/database/schema.sql
```

### 4. Development Server

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Environment Configuration

### Required Environment Variables

See `.env.example` for the complete template. Copy it to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

#### Critical Production Variables

```bash
# Application Environment
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Database (Required)
DATABASE_URL="postgresql://user:password@host:port/elmag_insurance"

# Authentication (Required) 
NEXTAUTH_SECRET="your-secure-32-char-secret"
NEXTAUTH_URL="https://your-domain.com"

# Security (Required)
ALLOWED_ORIGINS="https://your-domain.com,https://www.your-domain.com"

# Email Service (Required for forms)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@yourdomain.com"  
SMTP_PASS="your-app-specific-password"

# Analytics (Required)
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"

# Performance (Recommended)
REDIS_URL="redis://user:password@host:port"

# Monitoring (Recommended)
SENTRY_DSN="https://your-sentry-dsn@sentry.io/project-id"

# External APIs (Optional)
MEDICARE_API_KEY="your-medicare-api-key"
PERPLEXITY_API_KEY="your-perplexity-api-key"
```

### Security Notes
- Generate NEXTAUTH_SECRET with: `openssl rand -base64 32`
- Use environment-specific API keys
- Enable SSL/TLS for all database connections
- Restrict CORS origins to your domains only

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**
```bash
npm install -g vercel
vercel login
vercel --prod
```

2. **Configure Environment Variables**
- Add all required environment variables in Vercel dashboard
- Set up PostgreSQL database (Vercel Postgres or external)
- Configure Redis (Vercel KV or external)

3. **Domain Configuration**
- Configure custom domain in Vercel dashboard
- Set up SSL certificates (automatic with Vercel)

### Option 2: Docker Deployment

1. **Build and Run with Docker Compose**
```bash
# Production deployment
docker-compose up -d

# Development with hot reload
docker-compose -f docker-compose.dev.yml up
```

2. **Environment Setup**
- Ensure all environment variables are set in docker-compose.yml
- Database migrations will run automatically on first startup

### Option 3: Manual Server Deployment

1. **Build Application**
```bash
npm run build
npm start
```

2. **Set up Reverse Proxy (Nginx)**
```nginx
server {
    listen 80;
    server_name elmag-insurance.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Database Management

### Schema Updates

```bash
# Apply schema changes
psql -d $DATABASE_URL -f src/lib/database/migrations/001_update.sql
```

### Data Population

```bash
# Import Medicare plan data
npm run import:medicare-plans -- --file data/medicare-plans-2025.csv

# Generate sample data for development
npm run seed:development
```

## Content Management

### Programmatic Pages

The system automatically generates pages for:

- **Locations**: `/medicare-advantage/new-york-ny`
- **Keywords**: `/medicare-advantage/new-york-ny?keyword=medicare%20advantage%20dental`
- **Plan Comparisons**: `/medicare-advantage/compare?plans=1,2,3`

### Adding New Locations

1. Add location data to `src/app/medicare-advantage/[location]/page.tsx`
2. Update sitemap generation in `src/app/sitemap.ts`
3. Add location-specific plan data to database

### SEO Optimization

- **Structured Data**: Automatically generated for all pages
- **Sitemaps**: Dynamic generation for all programmatic pages
- **Meta Tags**: Dynamic generation based on location and content
- **Performance**: Optimized Core Web Vitals

## API Endpoints

### Medicare Plans API

- `GET /api/plans` - Search plans with filters
- `GET /api/plans/{id}` - Get specific plan details  
- `GET /api/plans/zip/{zipCode}` - Plans by ZIP code

### Example API Usage

```javascript
// Search plans
const response = await fetch('/api/plans?zipCode=10001&planType=HMO&needsDental=true');
const { data: plans } = await response.json();

// Get plan by ID
const plan = await fetch('/api/plans/plan-id-123');
```

## Performance Optimization

### Caching Strategy

- **Redis**: API response caching (1 hour)
- **Next.js**: Static page generation and ISR
- **CDN**: Vercel Edge Network or CloudFlare

### Monitoring

```bash
# Set up monitoring (optional)
npm install @sentry/nextjs
# Configure Sentry in next.config.js
```

## Security

### Security Headers

All pages include security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Data Protection

- No sensitive data in client-side code
- API endpoints with proper validation
- SQL injection protection with parameterized queries

## Testing

```bash
# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Performance testing
npm run lighthouse
```

## Maintenance

### Regular Tasks

1. **Update Medicare Plan Data** (Monthly)
   - Import latest CMS data
   - Update plan premiums and benefits
   - Refresh plan availability by ZIP code

2. **Content Updates** (Quarterly)
   - Review and update programmatic content templates
   - Add new location pages for expansion
   - Update FAQ content and benefits information

3. **Performance Monitoring** (Weekly)
   - Check Core Web Vitals
   - Monitor API response times
   - Review error logs and user feedback

### Backup Strategy

```bash
# Database backup
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Automated backups (set up cron job)
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/db-$(date +%Y%m%d).sql.gz
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Verify DATABASE_URL is correct
   - Check database server is running
   - Verify network connectivity

2. **Build Failures**
   - Clear `.next` folder and rebuild
   - Check TypeScript errors
   - Verify all dependencies are installed

3. **Performance Issues**
   - Enable Redis caching
   - Check database query performance
   - Optimize image loading

### Support

- **Documentation**: Check this file and inline code comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **Development**: Contact the development team for technical support

## Scaling Considerations

### Traffic Growth

- **Database**: Consider read replicas for high traffic
- **Caching**: Implement Redis Cluster for distributed caching
- **CDN**: Use CloudFlare or AWS CloudFront for global distribution

### Content Expansion

- **Multi-state**: Add location data for all 50 states
- **Multiple Products**: Extend to Medicare Supplement and Part D plans
- **Languages**: Add Spanish language support for Hispanic markets

---

This deployment guide covers the complete setup and maintenance of the El-Mag Insurance Medicare Advantage website. For specific technical questions, refer to the code documentation or contact the development team.