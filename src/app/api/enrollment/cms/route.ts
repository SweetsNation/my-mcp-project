import { NextRequest, NextResponse } from 'next/server';
import { 
  getEnrollmentByState,
  getEnrollmentByFips,
  getTopStatesByEnrollment,
  getTopCountiesByEnrollment,
  getHighPenetrationMarkets,
  getLowPenetrationMarkets,
  getMarketOpportunityScore 
} from '@/lib/medicare-enrollment';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const state = searchParams.get('state');
    const fips = searchParams.get('fips');
    const type = searchParams.get('type') || 'all';
    const limit = parseInt(searchParams.get('limit') || '10');
    const includeScore = searchParams.get('includeScore') === 'true';

    let enrollmentData;

    if (fips) {
      enrollmentData = await getEnrollmentByFips(fips);
    } else if (state) {
      enrollmentData = await getEnrollmentByState(state);
    } else {
      switch (type) {
        case 'top-states':
          enrollmentData = await getTopStatesByEnrollment(limit);
          break;
        case 'top-counties':
          enrollmentData = await getTopCountiesByEnrollment(undefined, limit);
          break;
        case 'high-penetration':
          const minPenetration = parseInt(searchParams.get('minPenetration') || '70');
          enrollmentData = await getHighPenetrationMarkets(minPenetration, limit);
          break;
        case 'low-penetration':
          const maxPenetration = parseInt(searchParams.get('maxPenetration') || '50');
          enrollmentData = await getLowPenetrationMarkets(maxPenetration, limit);
          break;
        default:
          enrollmentData = await getTopStatesByEnrollment(50); // Default to all states
      }
    }

    if (!enrollmentData || (Array.isArray(enrollmentData) && enrollmentData.length === 0)) {
      return NextResponse.json(
        {
          success: false,
          error: 'No enrollment data found for the specified parameters',
        },
        { status: 404 }
      );
    }

    // Add market opportunity scores if requested
    if (includeScore && enrollmentData) {
      if (Array.isArray(enrollmentData)) {
        enrollmentData = enrollmentData.map(data => ({
          ...data,
          marketOpportunityScore: getMarketOpportunityScore(data),
        }));
      } else {
        // For single enrollment data object
        const singleData = enrollmentData as any;
        enrollmentData = {
          ...singleData,
          marketOpportunityScore: getMarketOpportunityScore(singleData),
        };
      }
    }

    return NextResponse.json({
      success: true,
      data: enrollmentData,
      count: Array.isArray(enrollmentData) ? enrollmentData.length : 1,
      source: 'CMS.gov',
      filters: {
        state,
        fips,
        type,
        limit,
        includeScore,
      },
    });

  } catch (error) {
    console.error('CMS API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch CMS enrollment data',
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