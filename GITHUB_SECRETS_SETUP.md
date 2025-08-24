# GitHub Secrets Setup Guide
## Secure Configuration for Vercel Deployment

### 🔒 Important Security Note
**NEVER** add authentication tokens directly to your code or workflow files. Always use GitHub Secrets for sensitive information.

---

## 📝 Required Secrets for Vercel Deployment

Your GitHub Actions workflow requires these secrets to be configured:

### 1. VERCEL_TOKEN
- **Value**: `WIdm1LR5KoYZc9GdpeXmXRTP`
- **Description**: Vercel authentication token for API access
- **Required**: Yes

### 2. VERCEL_ORG_ID (Optional)
- **Value**: Your Vercel organization ID
- **Description**: Used if deploying to a team/organization
- **How to get**: Run `vercel --help` or check Vercel dashboard

### 3. VERCEL_PROJECT_ID (Optional)
- **Value**: Your Vercel project ID  
- **Description**: Specific project identifier
- **How to get**: Check your Vercel project settings

---

## 🔧 How to Add Secrets to GitHub

### Method 1: GitHub Web Interface

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

2. **Access Settings**
   - Click on the "Settings" tab (top navigation)

3. **Go to Secrets and Variables**
   - In the left sidebar, click "Secrets and variables"
   - Select "Actions"

4. **Add New Secret**
   - Click "New repository secret"
   - Name: `VERCEL_TOKEN`
   - Value: `WIdm1LR5KoYZc9GdpeXmXRTP`
   - Click "Add secret"

5. **Repeat for other secrets** (if needed)
   - Add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` if you have them

### Method 2: GitHub CLI

```bash
# Install GitHub CLI if not already installed
# macOS: brew install gh
# Windows: winget install GitHub.cli

# Login to GitHub
gh auth login

# Add the Vercel token secret
gh secret set VERCEL_TOKEN --body "WIdm1LR5KoYZc9GdpeXmXRTP"

# Add other secrets if you have them
gh secret set VERCEL_ORG_ID --body "your-org-id"
gh secret set VERCEL_PROJECT_ID --body "your-project-id"
```

---

## 🚀 Getting Vercel IDs (Optional but Recommended)

### Get Vercel Organization ID
```bash
# Install Vercel CLI if not installed
npm install -g vercel

# Login to Vercel
vercel login

# Get your team/org information
vercel teams list
```

### Get Vercel Project ID
```bash
# Navigate to your project directory
cd /path/to/your/project

# Link to Vercel project
vercel link

# This will create .vercel/project.json with your project ID
cat .vercel/project.json
```

---

## ✅ Verify Secrets Configuration

After adding secrets, verify they're configured correctly:

1. **Check in GitHub**
   - Go to Settings → Secrets and variables → Actions
   - You should see your secrets listed (values are hidden)

2. **Test the Workflow**
   - Push a commit to the `main` branch
   - Check the Actions tab to see if deployment works

3. **Manual Trigger**
   - Go to Actions tab
   - Select "Deploy to Production" workflow
   - Click "Run workflow" button

---

## 🔍 Troubleshooting

### Common Issues

**"Invalid token" error**
- Double-check the token value
- Make sure there are no extra spaces
- Verify the token hasn't expired

**"Project not found" error**
- Add `VERCEL_PROJECT_ID` secret
- Or remove the project ID from workflow commands

**"Permission denied" error**
- Verify the token has proper permissions
- Check if you're part of the Vercel team/organization

### Debug Commands

```bash
# Test Vercel CLI locally with your token
export VERCEL_TOKEN="WIdm1LR5KoYZc9GdpeXmXRTP"
vercel whoami

# Test project access
vercel projects list
```

---

## 🛡️ Security Best Practices

1. **Never commit tokens to code**
   - Always use environment variables or secrets
   - Add `.env` files to `.gitignore`

2. **Rotate tokens regularly**
   - Generate new tokens periodically
   - Update secrets when tokens change

3. **Use minimal permissions**
   - Give tokens only the permissions they need
   - Use project-specific tokens when possible

4. **Monitor token usage**
   - Check Vercel logs for unusual activity
   - Revoke tokens if compromised

---

## 📋 Quick Setup Checklist

- [ ] Add `VERCEL_TOKEN` secret to GitHub repository
- [ ] Test workflow by pushing to main branch
- [ ] Verify deployment succeeds in GitHub Actions
- [ ] Check that website is live at your domain
- [ ] Optional: Add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` for better control

---

## 🎯 Next Steps

Once secrets are configured:

1. **Test Deployment**
   ```bash
   git add .
   git commit -m "Configure GitHub Actions deployment"
   git push origin main
   ```

2. **Monitor Deployment**
   - Check GitHub Actions tab for workflow progress
   - Verify website updates at https://elmag-insurance.com

3. **Set Up Monitoring**
   - Configure uptime monitoring
   - Set up error tracking
   - Monitor performance metrics

**🎉 Your automated deployment pipeline is ready!**