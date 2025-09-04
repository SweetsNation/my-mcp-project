import { PrismaClient } from '@prisma/client';

declare global {
  var __prisma: PrismaClient | undefined;
}

// Validate DATABASE_URL before creating Prisma client
function validateDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  
  // Check for common URL format issues
  if (databaseUrl.includes('\n') || databaseUrl.includes('\r')) {
    throw new Error('DATABASE_URL contains line breaks. Please ensure it is on a single line.');
  }
  
  // Basic URL format validation
  try {
    const url = new URL(databaseUrl);
    if (url.protocol !== 'postgresql:') {
      throw new Error('DATABASE_URL must use postgresql:// protocol');
    }
    if (!url.port || isNaN(parseInt(url.port))) {
      throw new Error('DATABASE_URL must include a valid port number');
    }
  } catch (error) {
    throw new Error(`Invalid DATABASE_URL format: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Validate database URL before creating client
validateDatabaseUrl();

export const prisma = globalThis.__prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

export default prisma;
