'use client';

import { useEffect, useState } from 'react';
import { landingPageAnalyticsConfig, LandingPageConfig } from '@/lib/landing-page-analytics-config';

interface PagePerformanceData {
  pageKey: string;
  config: LandingPageConfig;
  metrics: {
    pageViews: number;
    uniqueVisitors: number;
    phoneCalls: number;
    ctaClicks: number;
    conversionRate: number;
    avgTimeOnPage: number;
    bounceRate: number;
    engagementScore: number;
  };
  trends: {
    pageViewsTrend: number; // percentage change
    conversionTrend: number;
    engagementTrend: number;
  };
}

interface LandingPageDashboardProps {
  dateRange?: string;
  refreshInterval?: number;
}

export default function LandingPageDashboard({
  dateRange = 'last_7_days',
  refreshInterval = 300000 // 5 minutes
}: LandingPageDashboardProps) {
  const [performanceData, setPerformanceData] = useState<PagePerformanceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPageType, setSelectedPageType] = useState<string>('all');

  // Mock data for demonstration - in production, this would fetch from analytics API
  const generateMockData = (): PagePerformanceData[] => {
    return Object.entries(landingPageAnalyticsConfig).map(([pageKey, config]) => ({
      pageKey,
      config,
      metrics: {
        pageViews: Math.floor(Math.random() * 5000) + 500,
        uniqueVisitors: Math.floor(Math.random() * 3000) + 300,
        phoneCalls: Math.floor(Math.random() * 100) + 10,
        ctaClicks: Math.floor(Math.random() * 200) + 50,
        conversionRate: Math.random() * 15 + 2, // 2-17%
        avgTimeOnPage: Math.random() * 180 + 60, // 1-4 minutes
        bounceRate: Math.random() * 40 + 30, // 30-70%
        engagementScore: Math.floor(Math.random() * 40) + 60, // 60-100
      },
      trends: {
        pageViewsTrend: (Math.random() - 0.5) * 50, // -25% to +25%
        conversionTrend: (Math.random() - 0.5) * 30, // -15% to +15%
        engagementTrend: (Math.random() - 0.5) * 20, // -10% to +10%
      }
    }));
  };

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setPerformanceData(generateMockData());
        setLoading(false);
      }, 1000);
    };

    fetchData();
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [dateRange, refreshInterval]);

  const filteredData = performanceData.filter(data =>
    selectedPageType === 'all' || data.config.pageType === selectedPageType
  );

  const totalMetrics = filteredData.reduce((acc, data) => ({
    pageViews: acc.pageViews + data.metrics.pageViews,
    phoneCalls: acc.phoneCalls + data.metrics.phoneCalls,
    ctaClicks: acc.ctaClicks + data.metrics.ctaClicks,
    avgConversionRate: acc.avgConversionRate + data.metrics.conversionRate,
  }), { pageViews: 0, phoneCalls: 0, ctaClicks: 0, avgConversionRate: 0 });

  const avgConversionRate = filteredData.length > 0
    ? totalMetrics.avgConversionRate / filteredData.length
    : 0;

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Landing Page Performance Dashboard</h2>
          <div className="flex gap-4">
            <select
              value={selectedPageType}
              onChange={(e) => setSelectedPageType(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="all">All Page Types</option>
              <option value="county">County Pages</option>
              <option value="product">Product Pages</option>
              <option value="guide">Guide Pages</option>
              <option value="comparison">Comparison Pages</option>
            </select>
            <select
              value={dateRange}
              onChange={(e) => window.location.href = `?dateRange=${e.target.value}`}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="last_7_days">Last 7 Days</option>
              <option value="last_30_days">Last 30 Days</option>
              <option value="last_90_days">Last 90 Days</option>
            </select>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{totalMetrics.pageViews.toLocaleString()}</div>
            <div className="text-blue-800 text-sm">Total Page Views</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{totalMetrics.phoneCalls}</div>
            <div className="text-green-800 text-sm">Phone Call Conversions</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{totalMetrics.ctaClicks}</div>
            <div className="text-purple-800 text-sm">CTA Clicks</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{avgConversionRate.toFixed(1)}%</div>
            <div className="text-orange-800 text-sm">Avg Conversion Rate</div>
          </div>
        </div>
      </div>

      {/* Individual Page Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredData.map((data) => (
          <div key={data.pageKey} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{data.config.pageName}</h3>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                  data.config.pageType === 'county' ? 'bg-blue-100 text-blue-800' :
                  data.config.pageType === 'product' ? 'bg-green-100 text-green-800' :
                  data.config.pageType === 'guide' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {data.config.pageType.toUpperCase()}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{data.metrics.conversionRate.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
                <div className={`text-xs ${data.trends.conversionTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {data.trends.conversionTrend >= 0 ? '↑' : '↓'} {Math.abs(data.trends.conversionTrend).toFixed(1)}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-lg font-semibold text-gray-900">{data.metrics.pageViews.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Page Views</div>
                <div className={`text-xs ${data.trends.pageViewsTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {data.trends.pageViewsTrend >= 0 ? '↑' : '↓'} {Math.abs(data.trends.pageViewsTrend).toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">{data.metrics.phoneCalls}</div>
                <div className="text-sm text-gray-600">Phone Calls</div>
                <div className="text-xs text-green-600">
                  ${(data.metrics.phoneCalls * data.config.trackingGoals.phoneCallValue).toLocaleString()} value
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">{Math.floor(data.metrics.avgTimeOnPage)}s</div>
                <div className="text-sm text-gray-600">Avg Time on Page</div>
                <div className={`text-xs ${
                  data.metrics.avgTimeOnPage >= data.config.trackingGoals.contentEngagementThreshold
                    ? 'text-green-600' : 'text-orange-600'
                }`}>
                  Goal: {data.config.trackingGoals.contentEngagementThreshold}s
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">{data.metrics.engagementScore}</div>
                <div className="text-sm text-gray-600">Engagement Score</div>
                <div className={`text-xs ${data.trends.engagementTrend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {data.trends.engagementTrend >= 0 ? '↑' : '↓'} {Math.abs(data.trends.engagementTrend).toFixed(1)}%
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm text-gray-600 mb-2">Primary Conversions:</div>
              <div className="flex flex-wrap gap-2">
                {data.config.primaryConversions.map((conversion) => (
                  <span
                    key={conversion}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {conversion.replace('_', ' ')}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-2">Target Audience:</div>
              <div className="flex flex-wrap gap-2">
                {data.config.audienceSegments.slice(0, 3).map((segment) => (
                  <span
                    key={segment}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                  >
                    {segment.replace('_', ' ')}
                  </span>
                ))}
                {data.config.audienceSegments.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{data.config.audienceSegments.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Alerts */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Alerts</h3>
        <div className="space-y-3">
          {filteredData
            .filter(data =>
              data.metrics.conversionRate < 3 ||
              data.metrics.bounceRate > 60 ||
              data.metrics.avgTimeOnPage < data.config.trackingGoals.contentEngagementThreshold
            )
            .map((data) => (
              <div key={`alert-${data.pageKey}`} className="flex items-start p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="text-yellow-600 mr-3">⚠️</div>
                <div>
                  <div className="font-medium text-yellow-800">{data.config.pageName}</div>
                  <div className="text-sm text-yellow-700">
                    {data.metrics.conversionRate < 3 && "Low conversion rate (< 3%) - "}
                    {data.metrics.bounceRate > 60 && "High bounce rate (> 60%) - "}
                    {data.metrics.avgTimeOnPage < data.config.trackingGoals.contentEngagementThreshold &&
                      `Low engagement time (< ${data.config.trackingGoals.contentEngagementThreshold}s)`}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}