import { NextResponse } from 'next/server';
import { healthCheck } from '@/lib/database/connection';

export async function GET() {
  try {
    const dbHealthy = await healthCheck();
    
    const health = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      services: {
        database: dbHealthy ? 'healthy' : 'unhealthy',
        api: 'healthy'
      },
      environment: process.env.NODE_ENV,
      uptime: process.uptime(),
      version: '1.0.0'
    };

    const status = dbHealthy ? 200 : 503;
    
    return NextResponse.json(health, { status });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      timestamp: new Date().toISOString(),
      services: {
        database: 'error',
        api: 'healthy'
      },
      environment: process.env.NODE_ENV,
      error: 'Health check failed'
    }, { status: 503 });
  }
}