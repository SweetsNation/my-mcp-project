import { NextRequest, NextResponse } from 'next/server';
import { searchMedicarePlans } from '@/lib/database/medicare-plans';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters = {
      zipCode: searchParams.get('zipCode') || undefined,
      planType: searchParams.get('planType') || undefined,
      maxPremium: searchParams.get('maxPremium') ? Number(searchParams.get('maxPremium')) : undefined,
      needsDental: searchParams.get('needsDental') === 'true',
      needsVision: searchParams.get('needsVision') === 'true',
      minRating: searchParams.get('minRating') ? Number(searchParams.get('minRating')) : undefined,
      year: searchParams.get('year') ? Number(searchParams.get('year')) : undefined,
    };

    const plans = await searchMedicarePlans(filters);

    return NextResponse.json({
      success: true,
      data: plans,
      count: plans.length,
      filters: filters,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch Medicare plans',
        message: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}