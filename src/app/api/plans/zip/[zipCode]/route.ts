import { NextRequest, NextResponse } from 'next/server';
import { getMedicareplansByZipCode } from '@/lib/database/medicare-plans';

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: {
    zipCode: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year') ? Number(searchParams.get('year')) : new Date().getFullYear();

    // Validate ZIP code format
    const zipCodeRegex = /^\d{5}$/;
    if (!zipCodeRegex.test(params.zipCode)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid ZIP code',
          message: 'ZIP code must be exactly 5 digits',
        },
        { status: 400 }
      );
    }

    const plans = await getMedicareplansByZipCode(params.zipCode, year);

    return NextResponse.json({
      success: true,
      data: plans,
      count: plans.length,
      zipCode: params.zipCode,
      year: year,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch Medicare plans for ZIP code',
        message: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}