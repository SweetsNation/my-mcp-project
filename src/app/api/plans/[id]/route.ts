import { NextRequest, NextResponse } from 'next/server';
import { getMedicarePlanById } from '@/lib/database/medicare-plans';

// Force dynamic rendering to prevent build-time issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const plan = await getMedicarePlanById(params.id);

    if (!plan) {
      return NextResponse.json(
        {
          success: false,
          error: 'Plan not found',
          message: `No Medicare plan found with ID: ${params.id}`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: plan,
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch Medicare plan',
        message: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}