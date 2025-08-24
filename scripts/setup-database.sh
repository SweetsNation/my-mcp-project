#!/bin/bash

# Database Setup Script for El-Mag Insurance Medicare Advantage Platform
# This script sets up the PostgreSQL database with the required schema

set -e

echo "🚀 Setting up PostgreSQL database for El-Mag Insurance..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if PostgreSQL container is already running
if docker ps | grep -q "postgres"; then
    echo "⚠️  PostgreSQL container is already running. Stopping it..."
    docker-compose down db
fi

# Start the database service
echo "📦 Starting PostgreSQL database..."
docker-compose up -d db

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
until docker-compose exec -T db pg_isready -U postgres; do
    echo "Database is not ready yet. Waiting..."
    sleep 2
done

echo "✅ Database is ready!"

# Check if database exists
echo "🔍 Checking database status..."
docker-compose exec -T db psql -U postgres -d elmag_insurance -c "SELECT version();" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Database 'elmag_insurance' already exists"
else
    echo "📝 Creating database 'elmag_insurance'..."
    docker-compose exec -T db createdb -U postgres elmag_insurance
fi

# Apply schema
echo "📋 Applying database schema..."
docker-compose exec -T db psql -U postgres -d elmag_insurance -f /docker-entrypoint-initdb.d/01-schema.sql

# Verify schema
echo "🔍 Verifying schema..."
docker-compose exec -T db psql -U postgres -d elmag_insurance -c "
SELECT 
    table_name,
    COUNT(*) as column_count
FROM information_schema.columns 
WHERE table_schema = 'public' 
GROUP BY table_name 
ORDER BY table_name;
"

echo "🎉 Database setup complete!"
echo ""
echo "📊 Database Information:"
echo "   Host: localhost"
echo "   Port: 5432"
echo "   Database: elmag_insurance"
echo "   Username: postgres"
echo "   Password: elmag123"
echo ""
echo "🔗 Connection URL: postgresql://postgres:elmag123@localhost:5432/elmag_insurance"
echo ""
echo "📝 To connect to the database:"
echo "   docker-compose exec db psql -U postgres -d elmag_insurance"
echo ""
echo "🛑 To stop the database:"
echo "   docker-compose down"
