# Quick Deploy Guide
## Deploy to Production in 5 Minutes

### 🚀 Option 1: Automated Deployment Script

```bash
# One-command deployment
npm run deploy:vercel
```

This script will:
- ✅ Run pre-flight checks
- ✅ Test production build
- ✅ Deploy to Vercel
- ✅ Configure domain
- ✅ Verify deployment
- ✅ Generate report

---

### ⚡ Option 2: Manual Vercel CLI

```bash
# 1. Install Vercel CLI (if not installed)
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod

# 4. Test deployment
npm run verify:deployment
```

---

### 🔑 Required Environment Variables

Add these to Vercel before deploying:

```bash
# Database
DATABASE_URL="postgresql://user:pass@host:port/dbname?sslmode=require"

# Authentication
NEXTAUTH_SECRET="your-32-char-secret"
NEXTAUTH_URL="https://elmag-insurance.com"

# Email Service
SMTP_HOST="smtp.gmail.com"
SMTP_USER="leads@elmaginsurance.com"
SMTP_PASS="your-app-password"
CONTACT_EMAIL="submissions@elmaginsurance.com"
QUOTE_EMAIL="quotes@elmaginsurance.com"

# Analytics & Chat
NEXT_PUBLIC_GA_ID="G-J8Z6P06XGS"
NEXT_PUBLIC_TAWK_PROPERTY_ID="67b7aa2d62649a190ef8700e"
NEXT_PUBLIC_TAWK_WIDGET_ID="1ikin1g4v"

# API Keys
PERPLEXITY_API_KEY="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"
DATAFORSEO_LOGIN="inquiry@elmaginsurance.com"
DATAFORSEO_PASSWORD="0f256932a691f1f1"
```

**Add via Vercel CLI:**
```bash
vercel env add DATABASE_URL production
# Enter the value when prompted
# Repeat for all variables
```

**Or via Vercel Dashboard:**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add each variable

---

### 🌍 Domain Configuration

```bash
# Add custom domain
vercel domains add elmag-insurance.com
vercel domains add www.elmag-insurance.com

# Set up aliases (after deployment)
vercel alias set your-deployment-url.vercel.app elmag-insurance.com
```

**DNS Settings (at your domain provider):**
```
A     elmag-insurance.com       76.76.19.19
CNAME www.elmag-insurance.com   cname.vercel-dns.com
```

---

### ✅ Post-Deployment Checklist

Run automated tests:
```bash
npm run verify:deployment
```

Manual checks:
- [ ] https://elmag-insurance.com loads
- [ ] Contact forms work
- [ ] Live chat appears
- [ ] Google Analytics tracking
- [ ] SSL certificate valid
- [ ] Mobile responsive

---

### 🆘 Troubleshooting

**Build fails?**
```bash
npm run build  # Test locally first
```

**Environment variables missing?**
```bash
vercel env ls  # Check what's configured
```

**Domain not working?**
```bash
dig elmag-insurance.com  # Check DNS
```

**Need help?**
- Vercel Dashboard: https://vercel.com/dashboard
- Documentation: See DEPLOYMENT_GUIDE.md

---

### 🎉 Success!

Once deployed:
1. Website live at: https://elmag-insurance.com
2. Monitor at: https://vercel.com/dashboard
3. Analytics at: https://analytics.google.com
4. Test everything works properly

**Estimated deployment time: 3-5 minutes**