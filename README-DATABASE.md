# 🗄️ Database Setup - Quick Start Guide

## Current Status
✅ **Database Schema**: Created and ready  
✅ **Sample Data**: Prepared with Medicare Advantage plans  
✅ **Connection Code**: Configured  
✅ **Test Scripts**: Ready to run  
❌ **PostgreSQL**: Needs to be installed/running  

## Next Steps (Choose One)

### Option 1: Install Docker (Recommended)
```bash
# 1. Download and install Docker Desktop for Mac
# https://www.docker.com/products/docker-desktop

# 2. Start Docker Desktop

# 3. Run the setup script
./scripts/setup-database.sh
```

### Option 2: Install Local PostgreSQL
```bash
# 1. Install PostgreSQL
brew install postgresql@15
brew services start postgresql@15

# 2. Create database
createdb elmag_insurance

# 3. Apply schema
psql -d elmag_insurance -f src/lib/database/schema.sql

# 4. Seed with sample data
psql -d elmag_insurance -f scripts/seed-database.sql
```

## Test Your Database
```bash
# Once PostgreSQL is running, test the connection
node scripts/test-database.js
```

## What You'll Get

### Database Schema
- **10 tables** for Medicare Advantage data
- **8 sample plans** from major carriers
- **10 locations** across major cities
- **10 providers** with various specialties
- **Built-in functions** for plan lookups

### Sample Data Includes
- UnitedHealthcare, Humana, Kaiser Permanente plans
- $0-$45/month premium options
- Dental, vision, hearing, fitness benefits
- Star ratings (3.7-4.8)
- Provider networks and formularies

### Ready for Your PRD
This database supports all requirements from your Medicare Advantage PRD:
- ✅ Plan comparison tool data
- ✅ Location-based plan lookup
- ✅ Benefits calculator data
- ✅ Provider network information
- ✅ Lead generation tracking

## Connection Details
- **Host**: localhost
- **Port**: 5432
- **Database**: elmag_insurance
- **Username**: postgres
- **Password**: elmag123 (Docker) or your local password

## Environment Variable
Your `.env.local` already has:
```bash
DATABASE_URL="postgresql://postgres:elmag123@localhost:5432/elmag_insurance"
```

---

**Ready to proceed?** Choose your PostgreSQL installation method above and run the setup script! 🚀
