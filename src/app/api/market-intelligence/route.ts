import { NextRequest, NextResponse } from 'next/server';
import { marketIntelligenceService } from '@/lib/market-intelligence';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json';
    const section = searchParams.get('section') || 'full';

    console.log('Generating Opus Enhanced Market Intelligence Report...');
    
    const report = await marketIntelligenceService.generateOpusEnhancedReport();

    // Filter report sections if requested
    let responseData = report;
    if (section !== 'full') {
      const sections = section.split(',');
      responseData = {} as any;
      
      sections.forEach(sectionName => {
        if (sectionName in report) {
          (responseData as any)[sectionName] = (report as any)[sectionName];
        }
      });
    }

    if (format === 'summary') {
      // Return executive summary only
      return NextResponse.json({
        success: true,
        reportType: 'Opus Enhanced Market Intelligence Report',
        generatedAt: new Date().toISOString(),
        dataSource: 'CMS.gov Real-Time Medicare Enrollment Data',
        executiveSummary: report.executiveSummary,
        keyOpportunities: report.marketAnalysis.lowPenetrationMarkets.slice(0, 5),
        topRecommendations: report.actionableRecommendations.immediateActions,
      });
    }

    return NextResponse.json({
      success: true,
      reportType: 'Opus Enhanced Market Intelligence Report - El-Mag Insurance',
      generatedAt: new Date().toISOString(),
      dataSource: 'CMS.gov Real-Time Medicare Enrollment Data',
      methodology: 'Advanced analytics on Medicare Advantage penetration rates, demographic analysis, and competitive gap identification',
      data: responseData,
      disclaimer: 'This report is based on publicly available CMS data and market analysis. Market conditions may change. Consult with compliance team before implementing marketing strategies.',
    });

  } catch (error) {
    console.error('Market Intelligence API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate market intelligence report',
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