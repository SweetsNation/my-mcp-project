import { NextRequest, NextResponse } from 'next/server';
import { 
  generateMarketAnalysis, 
  calculateStateEnrollmentSummary 
} from '@/lib/medicare-enrollment';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const state = searchParams.get('state');
    const analysisType = searchParams.get('type') || 'full';

    if (state) {
      // Return state-specific analysis
      const stateAnalysis = await calculateStateEnrollmentSummary(state);
      
      if (!stateAnalysis) {
        return NextResponse.json(
          {
            success: false,
            error: 'No enrollment data found for the specified state',
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: stateAnalysis,
        type: 'state_analysis',
        state,
      });
    }

    // Return full market analysis
    const marketAnalysis = await generateMarketAnalysis();

    // Filter based on analysis type
    let responseData = marketAnalysis;
    
    if (analysisType === 'opportunities') {
      responseData = {
        targetRecommendations: {
          underservedMarkets: marketAnalysis.targetRecommendations.underservedMarkets,
          highGrowthMarkets: marketAnalysis.targetRecommendations.highGrowthMarkets,
        },
        insights: marketAnalysis.insights,
      } as any;
    } else if (analysisType === 'top-markets') {
      responseData = {
        targetRecommendations: {
          topStates: marketAnalysis.targetRecommendations.topStates,
          topCounties: marketAnalysis.targetRecommendations.topCounties,
        },
        insights: {
          totalAddressableMarket: marketAnalysis.insights.totalAddressableMarket,
        },
      } as any;
    }

    return NextResponse.json({
      success: true,
      data: responseData,
      type: analysisType,
      generatedAt: new Date().toISOString(),
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate market analysis',
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