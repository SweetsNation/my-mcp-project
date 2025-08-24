'use client';

import React, { useState, useEffect } from 'react';
import { MarketIntelligenceReport, MarketOpportunity, MarketingStrategy } from '@/lib/market-intelligence';

interface ReportDisplayProps {
  reportData?: MarketIntelligenceReport;
  isLoading?: boolean;
}

export function MarketIntelligenceReportDisplay({ reportData, isLoading }: ReportDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Generating Opus Enhanced Market Intelligence Report...</p>
          <p className="text-sm text-gray-500 mt-2">Analyzing CMS data for underserved markets</p>
        </div>
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No report data available</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Opus Enhanced Market Intelligence Report</h1>
        <p className="text-primary-100 mb-4">Medicare Advantage Underserved Markets Analysis</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{reportData.executiveSummary.underservedMarkets}</div>
            <div className="text-sm text-primary-100">Underserved Markets</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{reportData.executiveSummary.averagePenetrationRate}%</div>
            <div className="text-sm text-primary-100">Avg Penetration Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{Math.round(reportData.executiveSummary.totalAddressableMarket / 1000000 * 10) / 10}M</div>
            <div className="text-sm text-primary-100">Addressable Market</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{reportData.executiveSummary.topOpportunityStates.length}</div>
            <div className="text-sm text-primary-100">Opportunity States</div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Findings</h3>
            <ul className="space-y-2">
              {reportData.executiveSummary.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">{finding}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Top Opportunity States</h3>
            <div className="grid grid-cols-2 gap-2">
              {reportData.executiveSummary.topOpportunityStates.map((state, index) => (
                <div key={index} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-md text-center font-medium">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Low Penetration Markets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Market Opportunities</h2>
          <div className="space-y-4">
            {reportData.marketAnalysis.lowPenetrationMarkets.slice(0, 8).map((market, index) => (
              <MarketOpportunityCard key={index} market={market} rank={index + 1} />
            ))}
          </div>
        </div>

        {/* High Value Targets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">High-Value Target Markets</h2>
          <div className="space-y-4">
            {reportData.marketAnalysis.highValueTargets.slice(0, 6).map((market, index) => (
              <HighValueTargetCard key={index} market={market} />
            ))}
          </div>
        </div>
      </div>

      {/* Demographic Insights */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Demographic Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reportData.marketAnalysis.demographicInsights.map((insight, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{insight.category}</h3>
              <div className="text-2xl font-bold text-primary-600 mb-2">{insight.percentage}%</div>
              <p className="text-gray-600 text-sm mb-3">{insight.insight}</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                <p className="text-yellow-800 text-xs font-medium">Marketing Implication:</p>
                <p className="text-yellow-700 text-sm mt-1">{insight.marketingImplication}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Strategies */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Marketing Strategies for Underserved Markets</h2>
        
        {/* Organic Strategies */}
        <MarketingStrategySection 
          title="Organic Marketing Strategies"
          strategies={reportData.marketingStrategies.organic}
          bgColor="bg-green-50"
          borderColor="border-green-200"
          textColor="text-green-800"
        />

        {/* Paid Advertising */}
        <MarketingStrategySection 
          title="Paid Advertising Strategies"
          strategies={reportData.marketingStrategies.paidAdvertising}
          bgColor="bg-blue-50"
          borderColor="border-blue-200"
          textColor="text-blue-800"
        />

        {/* Social Media */}
        <MarketingStrategySection 
          title="Social Media Marketing Strategies"
          strategies={reportData.marketingStrategies.socialMedia}
          bgColor="bg-purple-50"
          borderColor="border-purple-200"
          textColor="text-purple-800"
        />

        {/* Partnerships */}
        <MarketingStrategySection 
          title="Partnership Strategies"
          strategies={reportData.marketingStrategies.partnerships}
          bgColor="bg-orange-50"
          borderColor="border-orange-200"
          textColor="text-orange-800"
        />
      </div>

      {/* Actionable Recommendations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Actionable Recommendations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RecommendationSection 
            title="Immediate Actions"
            recommendations={reportData.actionableRecommendations.immediateActions}
            bgColor="bg-red-50"
            borderColor="border-red-200"
            iconColor="text-red-600"
          />
          <RecommendationSection 
            title="Short Term (3-6 months)"
            recommendations={reportData.actionableRecommendations.shortTerm}
            bgColor="bg-yellow-50"
            borderColor="border-yellow-200"
            iconColor="text-yellow-600"
          />
          <RecommendationSection 
            title="Long Term (6-12 months)"
            recommendations={reportData.actionableRecommendations.longTerm}
            bgColor="bg-blue-50"
            borderColor="border-blue-200"
            iconColor="text-blue-600"
          />
          <RecommendationSection 
            title="Budget Considerations"
            recommendations={reportData.actionableRecommendations.budgetConsiderations}
            bgColor="bg-green-50"
            borderColor="border-green-200"
            iconColor="text-green-600"
          />
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment & Mitigation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Market Risks & Threats</h3>
            <div className="space-y-4">
              <RiskSection 
                title="Market Risks"
                risks={reportData.riskAssessment.marketRisks}
                color="text-red-600"
              />
              <RiskSection 
                title="Competitive Threats"
                risks={reportData.riskAssessment.competitiveThreats}
                color="text-orange-600"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Compliance & Mitigation</h3>
            <div className="space-y-4">
              <RiskSection 
                title="Regulatory Considerations"
                risks={reportData.riskAssessment.regulatoryConsiderations}
                color="text-blue-600"
              />
              <RiskSection 
                title="Mitigation Strategies"
                risks={reportData.riskAssessment.mitigationStrategies}
                color="text-green-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketOpportunityCard({ market, rank }: { market: MarketOpportunity; rank: number }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full font-medium">
            #{rank}
          </span>
          <h3 className="font-semibold text-gray-900 mt-1">{market.location}, {market.state}</h3>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-600">{market.opportunityScore}</div>
          <div className="text-xs text-gray-500">Opportunity Score</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-600">MA Penetration:</span>
          <span className="font-medium ml-1">{market.maPenetrationRate}%</span>
        </div>
        <div>
          <span className="text-gray-600">Enrollment:</span>
          <span className="font-medium ml-1">{market.totalEnrollment.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-gray-600">Dual Eligible:</span>
          <span className="font-medium ml-1">{market.dualEligibleRate}%</span>
        </div>
        <div>
          <span className="text-gray-600">Competition:</span>
          <span className={`font-medium ml-1 ${
            market.marketMetrics.competitionLevel === 'Low' ? 'text-green-600' :
            market.marketMetrics.competitionLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {market.marketMetrics.competitionLevel}
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="text-xs text-gray-600 mb-1">Potential Revenue:</div>
        <div className="text-lg font-bold text-green-600">
          ${(market.marketMetrics.estimatedRevenue / 1000000).toFixed(1)}M annually
        </div>
      </div>
    </div>
  );
}

function HighValueTargetCard({ market }: { market: MarketOpportunity }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <h3 className="font-semibold text-gray-900 mb-2">{market.location}, {market.state}</h3>
      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span className="text-gray-600">Addressable Market:</span>
          <span className="font-medium">{market.marketMetrics.addressableMarket.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Potential New Members:</span>
          <span className="font-medium text-green-600">{market.marketMetrics.potentialNewEnrollees.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Est. Annual Revenue:</span>
          <span className="font-bold text-green-600">${(market.marketMetrics.estimatedRevenue / 1000000).toFixed(1)}M</span>
        </div>
      </div>
    </div>
  );
}

function MarketingStrategySection({ 
  title, 
  strategies, 
  bgColor, 
  borderColor, 
  textColor 
}: {
  title: string;
  strategies: MarketingStrategy[];
  bgColor: string;
  borderColor: string;
  textColor: string;
}) {
  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-6`}>
      <h3 className={`text-xl font-bold ${textColor} mb-4`}>{title}</h3>
      <div className="space-y-4">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">{strategy.strategy}</h4>
            <p className="text-gray-700 text-sm mb-3">{strategy.description}</p>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-800">Target Markets:</span>
                <ul className="mt-1 text-gray-600">
                  {strategy.targetMarkets.map((market, idx) => (
                    <li key={idx} className="ml-2">• {market}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-medium text-gray-800">Key Implementation:</span>
                <ul className="mt-1 text-gray-600">
                  {strategy.implementation.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="ml-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Expected ROI:</span>
                <div className="font-medium text-green-600">{strategy.expectedROI}</div>
              </div>
              <div>
                <span className="text-gray-600">Timeline:</span>
                <div className="font-medium">{strategy.timeline}</div>
              </div>
              <div>
                <span className="text-gray-600">Budget:</span>
                <div className="font-medium">{strategy.budget}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecommendationSection({ 
  title, 
  recommendations, 
  bgColor, 
  borderColor, 
  iconColor 
}: {
  title: string;
  recommendations: string[];
  bgColor: string;
  borderColor: string;
  iconColor: string;
}) {
  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-4`}>
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {recommendations.map((rec, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className={`${iconColor} mr-2 mt-0.5`}>▸</span>
            <span className="text-gray-700">{rec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RiskSection({ title, risks, color }: { title: string; risks: string[]; color: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className={`font-medium ${color} mb-2`}>{title}</h4>
      <ul className="space-y-1">
        {risks.map((risk, index) => (
          <li key={index} className="flex items-start text-sm">
            <span className="text-gray-400 mr-2 mt-0.5">•</span>
            <span className="text-gray-600">{risk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarketIntelligenceReportPage() {
  const [reportData, setReportData] = useState<MarketIntelligenceReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReport() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/market-intelligence');
        const result = await response.json();
        
        if (result.success) {
          setReportData(result.data);
        } else {
          setError(result.error || 'Failed to load report');
        }
      } catch (err) {
        setError('Network error loading report');
        console.error('Error fetching report:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReport();
  }, []);

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Report</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <MarketIntelligenceReportDisplay reportData={reportData || undefined} isLoading={isLoading} />;
}