import { NextRequest, NextResponse } from 'next/server';
import { getEnrollmentByZipCode, getMarketOpportunityScore } from '@/lib/medicare-enrollment';

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface RouteParams {
  params: {
    zipCode: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { zipCode } = params;
    const { searchParams } = new URL(request.url);
    
    const includeScore = searchParams.get('includeScore') === 'true';
    
    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid zip code format. Must be 5 digits.',
        },
        { status: 400 }
      );
    }

    const enrollmentData = getEnrollmentByZipCode(zipCode);
    
    if (!enrollmentData) {
      return NextResponse.json(
        {
          success: false,
          error: 'No enrollment data found for the specified zip code',
          zipCode,
        },
        { status: 404 }
      );
    }

    let responseData = enrollmentData;

    if (includeScore) {
      responseData = {
        ...enrollmentData,
        marketOpportunityScore: getMarketOpportunityScore(enrollmentData),
      };
    }

    return NextResponse.json({
      success: true,
      data: responseData,
      zipCode,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch enrollment data for zip code',
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