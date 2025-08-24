import { Pool, PoolClient } from 'pg';

// Database connection configuration
const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('localhost') ? false : (process.env.NODE_ENV === 'production' ? { 
    rejectUnauthorized: false,
    sslmode: 'require'
  } : false),
  max: process.env.NODE_ENV === 'production' ? 30 : 20, // More connections in production
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: process.env.NODE_ENV === 'production' ? 5000 : 2000, // Longer timeout in production
  statement_timeout: 30000, // 30 second query timeout
  query_timeout: 30000,
  application_name: 'elmag-insurance-website',
};

// Global pool instance
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool(dbConfig);
    
    // Handle pool errors
    pool.on('error', (err) => {
      console.error('Unexpected error on idle database client:', err);
    });
    
    // Handle pool connection
    pool.on('connect', () => {
      console.log('Database connected successfully');
    });
  }
  
  return pool;
}

export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  // Graceful fallback if no database URL is configured
  if (!process.env.DATABASE_URL) {
    console.info('Database not configured, using mock data');
    return [];
  }

  const pool = getPool();
  let client;
  
  try {
    client = await pool.connect();
    const result = await client.query(text, params);
    return result.rows;
  } catch (error) {
    console.error('Database query error:', error);
    // In production, we might want to return empty results instead of throwing
    if (process.env.NODE_ENV === 'production') {
      console.error('Database query failed, returning empty results');
      return [];
    }
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function getClient(): Promise<PoolClient | null> {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  const pool = getPool();
  return await pool.connect();
}

export async function transaction<T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T | null> {
  if (!process.env.DATABASE_URL) {
    console.info('Database not configured, skipping transaction');
    return null;
  }

  const client = await getClient();
  if (!client) return null;
  
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Transaction failed:', error);
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    throw error;
  } finally {
    client.release();
  }
}

// Close all connections (useful for testing or graceful shutdown)
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

// Database health check
export async function healthCheck(): Promise<boolean> {
  try {
    await query('SELECT 1');
    return true;
  } catch {
    return false;
  }
}