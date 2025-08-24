import { NextRequest, NextResponse } from 'next/server';
import { 
  getAllEnrollmentData, 
  getEnrollmentByState, 
  getEnrollmentByZipCode,
  getMarketOpportunityScore 
} from '@/lib/medicare-enrollment';

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const zipCode = searchParams.get('zipCode');
    const state = searchParams.get('state');
    const includeScore = searchParams.get('includeScore') === 'true';

    let enrollmentData;

    if (zipCode) {
      enrollmentData = getEnrollmentByZipCode(zipCode);
      if (!enrollmentData) {
        return NextResponse.json(
          {
            success: false,
            error: 'No enrollment data found for the specified zip code',
          },
          { status: 404 }
        );
      }
    } else if (state) {
      enrollmentData = await getEnrollmentByState(state);
      if (enrollmentData.length === 0) {
        return NextResponse.json(
          {
            success: false,
            error: 'No enrollment data found for the specified state',
          },
          { status: 404 }
        );
      }
    } else {
      enrollmentData = getAllEnrollmentData();
    }

    // Add market opportunity scores if requested
    if (includeScore) {
      if (Array.isArray(enrollmentData)) {
        enrollmentData = enrollmentData.map(data => ({
          ...data,
          marketOpportunityScore: getMarketOpportunityScore(data),
        }));
      } else {
        enrollmentData = {
          ...enrollmentData,
          marketOpportunityScore: getMarketOpportunityScore(enrollmentData),
        };
      }
    }

    return NextResponse.json({
      success: true,
      data: enrollmentData,
      count: Array.isArray(enrollmentData) ? enrollmentData.length : 1,
      filters: {
        zipCode,
        state,
        includeScore,
      },
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch enrollment data',
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