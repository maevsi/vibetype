#!/bin/bash
set -e

# Database test setup for CI
# Adapted from sqitch/test/test.sh

POSTGRES_DB=${POSTGRES_DB:-"vibetype"}
POSTGRES_USER=${POSTGRES_USER:-"postgres"}
POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-"postgres"}
POSTGRES_HOST=${POSTGRES_HOST:-"localhost"}
POSTGRES_PORT=${POSTGRES_PORT:-"5432"}

THIS_DIR="$(dirname "$(readlink -f "$0")")"

echo "🚀 Setting up test database..."

# Wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL..."
for i in {1..30}; do
  if pg_isready -h "$POSTGRES_HOST" -p "$POSTGRES_PORT" -U "$POSTGRES_USER" >/dev/null 2>&1; then
    echo "✅ PostgreSQL is ready"
    break
  fi
  echo "   Waiting for PostgreSQL... ($i/30)"
  sleep 2
done

# Create database if it doesn't exist
echo "📊 Setting up database..."
PGPASSWORD="$POSTGRES_PASSWORD" createdb -h "$POSTGRES_HOST" -p "$POSTGRES_PORT" -U "$POSTGRES_USER" "$POSTGRES_DB" 2>/dev/null || echo "Database already exists"

# Note: In a real setup, we'd need to run the full schema migrations first
# For now, we assume the schema exists or we'd need to copy essential schema files

# Deploy test data
echo "🗃️  Deploying test data..."
PGPASSWORD="$POSTGRES_PASSWORD" psql -h "$POSTGRES_HOST" -p "$POSTGRES_PORT" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f "$THIS_DIR/deploy.sql"

echo "✅ Test database setup complete!"
echo "📝 Test accounts created:"
echo "   - jonas: mail+sqitch-1@maev.si / password"
echo "   - peter: mail+sqitch-2@maev.si / password"
