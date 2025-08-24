# Database Setup Guide for El-Mag Insurance Medicare Advantage Platform

## Overview
This guide will help you set up the PostgreSQL database for your Medicare Advantage programmatic page template. You have multiple options for running PostgreSQL.

## Option 1: Docker (Recommended)

### Prerequisites
1. Install Docker Desktop for Mac:
   - Download from: https://www.docker.com/products/docker-desktop
   - Install and start Docker Desktop
   - Verify installation: `docker --version`

### Setup Steps
1. **Start Docker Desktop**
2. **Run the setup script:**
   ```bash
   ./scripts/setup-database.sh
   ```

## Option 2: Local PostgreSQL Installation

### Prerequisites
1. Install PostgreSQL using Homebrew:
   ```bash
   brew install postgresql@15
   brew services start postgresql@15
   ```

2. Create the database:
   ```bash
   createdb elmag_insurance
   ```

3. Apply the schema:
   ```bash
   psql -d elmag_insurance -f src/lib/database/schema.sql
   ```

4. Seed the database:
   ```bash
   psql -d elmag_insurance -f scripts/seed-database.sql
   ```

## Option 3: Cloud Database (Production)

### Prerequisites
- PostgreSQL cloud service (AWS RDS, Google Cloud SQL, etc.)
- Database connection credentials

### Setup Steps
1. **Create database instance**
2. **Update environment variables:**
   ```bash
   # Update .env.local with your cloud database URL
   DATABASE_URL="postgresql://username:password@host:port/elmag_insurance"
   ```
3. **Apply schema and seed data**

## Database Schema Overview

### Core Tables
- **carriers**: Insurance companies (UnitedHealthcare, Humana, etc.)
- **medicare_plans**: Medicare Advantage plan details
- **locations**: Geographic locations (ZIP codes, cities, states)
- **plan_locations**: Junction table linking plans to locations
- **providers**: Healthcare providers and doctors
- **formularies**: Prescription drug coverage
- **leads**: Lead generation and contact information

### Key Features
- **Plan Comparison**: Side-by-side plan comparison data
- **Location-based**: Plans available by ZIP code
- **Provider Networks**: Doctor and hospital networks
- **Benefits Tracking**: Dental, vision, hearing, fitness benefits
- **Lead Management**: Contact and conversion tracking

## Database Connection

### Environment Variables
```bash
# Local Development
DATABASE_URL="postgresql://postgres:elmag123@localhost:5432/elmag_insurance"

# Production
DATABASE_URL="postgresql://username:password@host:port/database"
```

### Connection Details
- **Host**: localhost (Docker) or your database host
- **Port**: 5432
- **Database**: elmag_insurance
- **Username**: postgres (Docker) or your username
- **Password**: elmag123 (Docker) or your password

## Sample Data

The database comes pre-populated with:

### Carriers (10 major insurance companies)
- UnitedHealthcare
- Humana
- Kaiser Permanente
- Blue Cross Blue Shield
- Cigna
- WellCare
- Molina Healthcare
- Centene Corporation

### Medicare Advantage Plans (8 sample plans)
- Various plan types (HMO, PPO, HMO-POS, PFFS)
- Different premium levels ($0 - $45/month)
- Comprehensive benefits (dental, vision, hearing, fitness)
- Star ratings (3.7 - 4.8)

### Locations (10 major cities)
- New York, NY
- Los Angeles, CA
- Miami, FL
- Chicago, IL
- Houston, TX
- Phoenix, AZ
- Philadelphia, PA
- San Diego, CA
- Atlanta, GA
- San Francisco, CA

### Providers (10 sample doctors)
- Various specialties (Primary Care, Cardiology, Dermatology, etc.)
- Geographic distribution across major cities

## Database Functions and Views

### Built-in Functions
- `get_plans_by_location(zip_code)`: Get available plans for a ZIP code
- `update_updated_at_column()`: Automatic timestamp updates

### Views
- `plan_summaries`: Comprehensive plan information with carrier and location data

## Testing the Database

### Connect to Database
```bash
# Docker
docker-compose exec db psql -U postgres -d elmag_insurance

# Local PostgreSQL
psql -d elmag_insurance
```

### Sample Queries
```sql
-- Get all plans in New York
SELECT * FROM get_plans_by_location('10001');

-- View plan summaries
SELECT * FROM plan_summaries LIMIT 5;

-- Get plans with dental coverage
SELECT * FROM medicare_plans WHERE dental_coverage = true;

-- Get $0 premium plans
SELECT * FROM medicare_plans WHERE premium = 0.00;
```

## Troubleshooting

### Common Issues

1. **Docker not running**
   - Start Docker Desktop
   - Verify with `docker info`

2. **Port 5432 already in use**
   - Check if PostgreSQL is already running: `lsof -i :5432`
   - Stop existing service: `brew services stop postgresql`

3. **Permission denied**
   - Fix npm cache permissions: `sudo chown -R 501:20 "/Users/castlegreyskull/.npm"`

4. **Database connection failed**
   - Verify DATABASE_URL in .env.local
   - Check if database service is running
   - Test connection: `psql $DATABASE_URL`

### Reset Database
```bash
# Docker
docker-compose down
docker volume rm my-mcp-project_postgres_data
./scripts/setup-database.sh

# Local PostgreSQL
dropdb elmag_insurance
createdb elmag_insurance
psql -d elmag_insurance -f src/lib/database/schema.sql
psql -d elmag_insurance -f scripts/seed-database.sql
```

## Next Steps

After database setup:

1. **Test the connection** using the sample queries above
2. **Verify the schema** by checking table structures
3. **Start your application** and test database integration
4. **Begin development** of your Medicare Advantage programmatic pages

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Check Docker/PostgreSQL logs for error messages
4. Ensure environment variables are correctly set

---

**Database Setup Complete!** 🎉

Your PostgreSQL database is now ready to power your Medicare Advantage programmatic page template with comprehensive plan data, provider networks, and lead management capabilities.
