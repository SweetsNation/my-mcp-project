# 📧 SMTP Email Service Configuration Guide
## El-Mag Insurance Medicare Advantage Website

This guide covers complete SMTP email service setup for lead notifications, contact forms, and quote requests.

## 📋 Overview

The email service handles:
- **Contact Form Submissions**: Customer inquiries and support requests
- **Quote Requests**: Medicare Advantage quote requests with detailed customer information  
- **Confirmation Emails**: Automated confirmations sent to customers
- **Lead Notifications**: Immediate alerts to sales team for new leads

## ⚙️ Email Service Providers

### Option 1: Gmail (Recommended for Small Scale)

#### Benefits:
- ✅ Free for low volume (< 500 emails/day)
- ✅ Reliable delivery rates
- ✅ Easy setup
- ✅ Familiar interface

#### Setup Steps:

1. **Enable 2-Factor Authentication**
   ```
   1. Go to Google Account settings
   2. Security → 2-Step Verification
   3. Enable 2FA with your phone
   ```

2. **Generate App Password**
   ```
   1. Go to Google Account → Security
   2. App passwords (under 2-Step Verification)
   3. Select "Mail" and "Other (custom name)"
   4. Name it "El-Mag Insurance Website"
   5. Use the generated 16-character password
   ```

3. **Environment Variables**
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```

### Option 2: Microsoft 365 (Recommended for Business)

#### Benefits:
- ✅ Professional email addresses (@yourdomain.com)
- ✅ Higher sending limits
- ✅ Better deliverability
- ✅ Advanced security features

#### Setup Steps:

1. **Enable SMTP AUTH**
   ```
   1. Sign in to Microsoft 365 admin center
   2. Go to Settings → Mail → SMTP AUTH
   3. Enable SMTP AUTH for the user
   ```

2. **Environment Variables**
   ```bash
   SMTP_HOST=smtp.office365.com
   SMTP_PORT=587
   SMTP_USER=your-email@yourdomain.com
   SMTP_PASS=your-password-or-app-password
   ```

### Option 3: SendGrid (Recommended for High Volume)

#### Benefits:
- ✅ High delivery rates (99%+)
- ✅ 100 emails/day free tier
- ✅ Advanced analytics
- ✅ No daily limits on paid plans

#### Setup Steps:

1. **Create SendGrid Account**
   ```
   1. Sign up at sendgrid.com
   2. Verify your email and phone
   3. Complete sender authentication
   ```

2. **Create API Key**
   ```
   1. Go to Settings → API Keys
   2. Create API Key with "Full Access"
   3. Copy the generated API key
   ```

3. **Environment Variables**
   ```bash
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   ```

### Option 4: Amazon SES (Recommended for AWS Users)

#### Benefits:
- ✅ Very low cost ($0.10/1000 emails)
- ✅ High reliability
- ✅ Scales automatically
- ✅ Integrates with AWS services

#### Setup Steps:

1. **Set up SES**
   ```
   1. Sign in to AWS Console
   2. Go to Simple Email Service (SES)
   3. Verify your domain or email
   4. Request production access (if needed)
   ```

2. **Create SMTP Credentials**
   ```
   1. Go to SES → SMTP Settings
   2. Create SMTP Credentials
   3. Download credentials CSV file
   ```

3. **Environment Variables**
   ```bash
   SMTP_HOST=email-smtp.us-east-1.amazonaws.com
   SMTP_PORT=587
   SMTP_USER=your-ses-smtp-username
   SMTP_PASS=your-ses-smtp-password
   ```

## 🔧 Environment Configuration

### Development Environment (`.env.local`)

```bash
# Email Configuration (Development)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-dev-email@gmail.com
SMTP_PASS=your-app-password

# Email Recipients (Development)
CONTACT_EMAIL=your-dev-email@gmail.com
QUOTE_EMAIL=your-dev-email@gmail.com

# Email Settings
EMAIL_FROM_NAME=El-Mag Insurance (Dev)
EMAIL_REPLY_TO=your-dev-email@gmail.com
```

### Production Environment (`.env.production`)

```bash
# Email Configuration (Production)
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=submissions@elmaginsurance.com
SMTP_PASS=your-production-password

# Email Recipients (Production)
CONTACT_EMAIL=submissions@elmaginsurance.com
QUOTE_EMAIL=quotes@elmaginsurance.com

# Email Settings
EMAIL_FROM_NAME=El-Mag Insurance
EMAIL_REPLY_TO=submissions@elmaginsurance.com
```

## 🧪 Testing Email Configuration

### Automated Testing Script

Run the email test script to verify your configuration:

```bash
# Test email configuration
node scripts/test-email-service.js
```

### Manual Testing Steps

1. **Test Contact Form**
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "subject": "Test Contact",
       "message": "Testing email service",
       "phone": "555-123-4567",
       "zipCode": "12345"
     }'
   ```

2. **Test Quote Request**
   ```bash
   curl -X POST http://localhost:3000/api/quote \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "phone": "555-123-4567",
       "zipCode": "12345",
       "dateOfBirth": "1960-01-01",
       "interests": ["Medicare Advantage", "Dental Coverage"],
       "preferredContactMethod": "email"
     }'
   ```

## 📧 Email Templates

### Contact Form Email Template
- **Recipient**: Sales team
- **Subject**: "Contact Form: [Subject]"
- **Content**: Customer information, message, source tracking
- **Actions**: Reply-to set to customer email

### Quote Request Email Template
- **Recipient**: Licensed agents
- **Subject**: "Medicare Quote Request - [Customer Name]"
- **Content**: Detailed customer information, coverage interests, preferences
- **Priority**: High (24-hour follow-up required)

### Customer Confirmation Email Template
- **Recipient**: Customer
- **Subject**: "Thank you for contacting El-Mag Insurance"
- **Content**: Confirmation, next steps, contact information
- **Branding**: Company logo and professional styling

## 🔒 Security Best Practices

### Authentication Security
```bash
# Use app-specific passwords (Gmail)
# Enable 2-factor authentication
# Rotate passwords regularly
# Use different credentials for dev/prod
```

### Email Content Security
```bash
# Validate all input data
# Sanitize email content
# Use parameterized email templates
# Implement rate limiting
```

### Privacy Compliance
```bash
# Include unsubscribe options
# Add privacy policy links
# Comply with CAN-SPAM Act
# Implement data retention policies
```

## 🚨 Troubleshooting Common Issues

### Issue 1: Authentication Failed
```
Error: Invalid login: 534-5.7.9 Application-specific password required
```
**Solution**: Use app-specific password instead of regular password

### Issue 2: Connection Timeout
```
Error: connect ETIMEDOUT
```
**Solution**: Check firewall settings, try different ports (587, 465, 25)

### Issue 3: Emails Going to Spam
```
Emails delivered but in spam folder
```
**Solution**: 
- Set up SPF/DKIM records
- Use professional "From" addresses
- Avoid spam trigger words
- Maintain good sender reputation

### Issue 4: Rate Limiting
```
Error: 550 Daily sending quota exceeded
```
**Solution**: 
- Upgrade to paid plan
- Implement email queuing
- Use dedicated email service (SendGrid, SES)

## 📊 Monitoring and Analytics

### Email Delivery Tracking
```javascript
// Log email status for monitoring
console.log('Email sent:', {
  to: recipient,
  subject: subject,
  status: 'success',
  timestamp: new Date().toISOString()
});
```

### Error Tracking
```javascript
// Track email failures
if (!emailSent) {
  console.error('Email failed:', {
    to: recipient,
    error: error.message,
    timestamp: new Date().toISOString()
  });
}
```

### Performance Monitoring
- Track email delivery times
- Monitor bounce rates
- Measure conversion rates from email leads
- Set up alerts for email service failures

## 🔄 Email Queue Implementation (Optional)

For high-volume applications, implement email queuing:

```javascript
// Using Redis for email queue
import Queue from 'bull';
const emailQueue = new Queue('email processing', process.env.REDIS_URL);

emailQueue.process(async (job) => {
  const { type, data } = job.data;
  
  switch (type) {
    case 'contact':
      return await emailService.sendContactForm(data);
    case 'quote':
      return await emailService.sendQuoteRequest(data);
  }
});
```

## ✅ Production Deployment Checklist

### Pre-Deployment
- [ ] Test email service with production SMTP settings
- [ ] Verify all email templates render correctly
- [ ] Test contact form and quote request flows
- [ ] Set up email monitoring and alerting
- [ ] Configure email recipients for different form types

### Post-Deployment
- [ ] Send test emails from production
- [ ] Verify emails are delivered to correct inboxes
- [ ] Check spam folder placement
- [ ] Monitor email service logs
- [ ] Test auto-responder functionality

### Monitoring Setup
- [ ] Set up email delivery monitoring
- [ ] Configure failure alerts
- [ ] Track email open/click rates (if applicable)
- [ ] Monitor email service uptime
- [ ] Set up backup email service (failover)

## 📞 Support and Troubleshooting

### Email Service Status Pages
- Gmail: https://www.google.com/appsstatus
- Microsoft 365: https://status.office365.com/
- SendGrid: https://status.sendgrid.com/
- Amazon SES: https://status.aws.amazon.com/

### Emergency Contacts
- Keep backup email service credentials ready
- Document escalation procedures for email failures
- Have direct phone contact information as fallback

---

**📧 Your email service is now configured and ready to handle lead notifications professionally!**