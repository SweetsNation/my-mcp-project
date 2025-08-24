# Production Database Setup Guide
## El-Mag Insurance Medicare Advantage Website

### Overview
This guide covers setting up a production PostgreSQL database for the Medicare Advantage website, including security, performance optimization, and monitoring.

---

## Database Provider Options

### Option 1: Vercel Postgres (Recommended)
**Best for**: Simple deployment, automatic scaling, integrated with Vercel hosting

```bash
# Install Vercel CLI
npm i -g vercel

# Login and setup
vercel login
vercel link

# Create Postgres database
vercel postgres create elmag-insurance-db
```

**Pricing**: 
- Free tier: 256MB storage, 1GB transfer
- Pro: $20/month for 10GB storage, 100GB transfer

### Option 2: Supabase
**Best for**: Full-featured backend with real-time capabilities

```bash
# Create project at https://supabase.com
# Connection string format:
postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres?sslmode=require
```

**Pricing**: 
- Free tier: 500MB database, 2GB transfer
- Pro: $25/month for 8GB database, 100GB transfer

### Option 3: Railway
**Best for**: Developer-friendly with Git integration

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and setup
railway login
railway init
railway add postgresql
```

**Pricing**: 
- Free tier: $5 credit/month
- Pro: Usage-based pricing

### Option 4: PlanetScale
**Best for**: Serverless MySQL (requires schema conversion)

```bash
# Install PlanetScale CLI
curl -L https://github.com/planetscale/cli/releases/latest/download/pscale_linux_amd64.tar.gz | tar -xz

# Create database
pscale database create elmag-insurance
```

**Note**: Requires converting PostgreSQL schema to MySQL

### Option 5: AWS RDS PostgreSQL
**Best for**: Enterprise-level features and control

- Instance class: db.t3.micro (free tier) or db.t3.small
- Storage: 20GB minimum, enable auto-scaling
- Multi-AZ: Enable for high availability
- Backup retention: 7-30 days

**Estimated cost**: $15-50/month depending on configuration

---

## Production Database Configuration

### Step 1: Create Production Database

Choose one of the providers above and create your database instance.

### Step 2: Update Environment Variables

Update `.env.production` with your actual database connection string:

```env
# Replace with your actual production database URL
DATABASE_URL=postgresql://username:password@host:port/elmag_insurance?sslmode=require

# Connection pool settings
DB_POOL_MIN=2
DB_POOL_MAX=30
DB_POOL_IDLE_TIMEOUT=30000
DB_CONNECTION_TIMEOUT=5000
```

### Step 3: Run Database Schema Setup

```bash
# Install database dependencies
npm install pg @types/pg

# Run schema setup (choose one method)

# Method 1: Using psql directly
psql $DATABASE_URL -f src/lib/database/schema.sql

# Method 2: Using our setup script
node scripts/setup-database.js

# Method 3: Manual setup via database provider UI
# Copy and paste schema.sql content into SQL editor
```

### Step 4: Verify Database Connection

```bash
# Test database connection
node scripts/test-database-connection.js
```

---

## Performance Optimization

### Connection Pooling
The application uses connection pooling with these production settings:

```typescript
// Configured in src/lib/database/connection.ts
{
  max: 30,              // Maximum connections in pool
  min: 2,               // Minimum connections maintained
  idleTimeoutMillis: 30000,     // Close idle connections after 30s
  connectionTimeoutMillis: 5000, // Connection timeout
  statement_timeout: 30000,      // Query timeout
  application_name: 'elmag-insurance-website'
}
```

### Database Indexes
The schema includes optimized indexes for common queries:

- Plan searches by location, carrier, premium range
- Lead management and tracking
- Provider network lookups
- Star rating and benefits filtering

### Query Optimization Tips

1. **Use prepared statements** for repeated queries
2. **Limit result sets** with proper pagination
3. **Use EXPLAIN ANALYZE** to identify slow queries
4. **Cache frequently accessed data** (Redis recommended)

---

## Security Configuration

### SSL/TLS Settings
- Always use `sslmode=require` in production
- Certificate verification enabled by default
- Encrypted connections only

### Database User Permissions
Create a dedicated application user with minimal required permissions:

```sql
-- Create application user
CREATE USER elmag_app WITH PASSWORD 'secure_random_password';

-- Grant necessary permissions
GRANT CONNECT ON DATABASE elmag_insurance TO elmag_app;
GRANT USAGE ON SCHEMA public TO elmag_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO elmag_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO elmag_app;

-- Grant permissions for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO elmag_app;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT ON SEQUENCES TO elmag_app;
```

### Environment Security
- Never commit database passwords to version control
- Use environment variables for all database credentials
- Rotate database passwords regularly (quarterly)
- Enable database audit logging if available

---

## Backup and Recovery

### Automated Backups
Most managed database providers offer automated backups:

- **Frequency**: Daily backups minimum
- **Retention**: 30 days minimum
- **Point-in-time recovery**: Enable if available
- **Cross-region replication**: For critical applications

### Manual Backup Commands

```bash
# Create full database backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql

# Create compressed backup
pg_dump $DATABASE_URL | gzip > backup_$(date +%Y%m%d_%H%M%S).sql.gz

# Restore from backup
psql $DATABASE_URL < backup_20240101_120000.sql
```

### Backup Strategy
1. **Daily automated backups** by provider
2. **Weekly manual backups** stored securely
3. **Pre-deployment backups** before major updates
4. **Test restore procedures** monthly

---

## Monitoring and Maintenance

### Health Checks
The application includes a health check endpoint:

```typescript
// Built-in health check function
export async function healthCheck(): Promise<boolean> {
  try {
    await query('SELECT 1');
    return true;
  } catch {
    return false;
  }
}
```

### Performance Monitoring
Monitor these key metrics:

- **Connection pool usage**: Should stay below 80%
- **Query performance**: Average response time < 100ms
- **Database CPU/Memory**: Keep below 80% usage
- **Storage growth**: Monitor and plan for capacity

### Regular Maintenance Tasks

1. **Update table statistics** (weekly)
   ```sql
   ANALYZE;
   ```

2. **Vacuum tables** (as needed)
   ```sql
   VACUUM ANALYZE medicare_plans;
   ```

3. **Monitor slow queries**
   ```sql
   SELECT query, mean_time, calls 
   FROM pg_stat_statements 
   ORDER BY mean_time DESC 
   LIMIT 10;
   ```

4. **Check index usage**
   ```sql
   SELECT schemaname, tablename, attname, n_distinct, correlation 
   FROM pg_stats 
   WHERE tablename = 'medicare_plans';
   ```

---

## Migration Strategy

### From Development to Production

1. **Schema Deployment**
   ```bash
   # Export development schema
   pg_dump --schema-only $DEV_DATABASE_URL > schema.sql
   
   # Apply to production
   psql $PRODUCTION_DATABASE_URL -f schema.sql
   ```

2. **Data Migration** (if needed)
   ```bash
   # Export specific tables
   pg_dump --data-only --table=carriers $DEV_DATABASE_URL > carriers_data.sql
   pg_dump --data-only --table=plan_types $DEV_DATABASE_URL > plan_types_data.sql
   
   # Import to production
   psql $PRODUCTION_DATABASE_URL -f carriers_data.sql
   psql $PRODUCTION_DATABASE_URL -f plan_types_data.sql
   ```

### Zero-Downtime Migrations

For schema changes after production launch:

1. Create migration scripts in `migrations/` folder
2. Test migrations on staging database first
3. Use transactions for rollback capability
4. Apply during low-traffic periods
5. Monitor application health post-migration

---

## Troubleshooting

### Common Issues

**Connection Refused**
- Check database server status
- Verify connection string format
- Confirm network connectivity/firewall settings

**SSL Connection Errors**
- Ensure `sslmode=require` is set
- Check SSL certificate validity
- Verify provider SSL configuration

**Performance Issues**
- Check connection pool settings
- Analyze slow query log
- Monitor database resource usage
- Consider adding indexes

**Connection Pool Exhausted**
- Increase max pool size
- Check for connection leaks in application code
- Monitor connection usage patterns

### Debug Commands

```bash
# Test database connection
psql $DATABASE_URL -c "SELECT version();"

# Check connection pool status
psql $DATABASE_URL -c "SELECT * FROM pg_stat_activity WHERE application_name = 'elmag-insurance-website';"

# Monitor active queries
psql $DATABASE_URL -c "SELECT pid, now() - pg_stat_activity.query_start AS duration, query FROM pg_stat_activity WHERE (now() - pg_stat_activity.query_start) > interval '5 minutes';"
```

---

## Cost Optimization

### Database Sizing Guidelines

**Small deployment** (< 1,000 plans, < 100 leads/month):
- 1-2 GB storage
- 1-2 CPU cores
- 2-4 GB RAM
- Estimated cost: $15-25/month

**Medium deployment** (< 10,000 plans, < 1,000 leads/month):
- 10-20 GB storage
- 2-4 CPU cores
- 4-8 GB RAM
- Estimated cost: $50-100/month

**Large deployment** (> 10,000 plans, > 1,000 leads/month):
- 50+ GB storage
- 4+ CPU cores
- 8+ GB RAM
- Estimated cost: $150-300/month

### Cost Reduction Tips

1. **Use read replicas** for reporting queries
2. **Implement caching** to reduce database load
3. **Compress backups** to reduce storage costs
4. **Monitor and optimize** query performance
5. **Use database provider free tiers** for development

---

## Next Steps

After completing database setup:

1. ✅ Update `.env.production` with actual database URL
2. ✅ Run database schema setup
3. ✅ Test database connection
4. ✅ Configure backup strategy
5. ✅ Set up monitoring
6. ⏳ Deploy application to production
7. ⏳ Run integration tests
8. ⏳ Monitor performance metrics

**Ready for production deployment!**