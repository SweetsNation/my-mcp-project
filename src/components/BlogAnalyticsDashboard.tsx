'use client';
import { useState, useEffect } from 'react';

interface BlogAnalyticsData {
  totalArticleViews: number;
  totalClicks: number;
  topArticles: Array<{
    id: string;
    title: string;
    views: number;
    clicks: number;
    conversionRate: number;
    category: string;
  }>;
  categoryPerformance: Array<{
    category: string;
    views: number;
    clicks: number;
    conversionRate: number;
  }>;
  userContextBreakdown: Array<{
    context: string;
    percentage: number;
    engagementRate: number;
  }>;
  timeSeriesData: Array<{
    date: string;
    views: number;
    clicks: number;
    engagements: number;
  }>;
}

interface BlogAnalyticsDashboardProps {
  dateRange?: '7d' | '30d' | '90d';
  showDetails?: boolean;
}

export default function BlogAnalyticsDashboard({
  dateRange = '30d',
  showDetails = true
}: BlogAnalyticsDashboardProps) {
  const [analyticsData, setAnalyticsData] = useState<BlogAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState(dateRange);

  // Mock data - in production, this would fetch from analytics API
  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockData: BlogAnalyticsData = {
        totalArticleViews: 45280,
        totalClicks: 8956,
        topArticles: [
          {
            id: 'medicare-advantage-vs-original',
            title: 'Medicare Advantage vs Original Medicare: Which is Right for You?',
            views: 8450,
            clicks: 1689,
            conversionRate: 19.98,
            category: 'Medicare'
          },
          {
            id: 'health-insurance-marketplace-2025-guide',
            title: 'Health Insurance Marketplace 2025: Complete Enrollment Guide',
            views: 7820,
            clicks: 1564,
            conversionRate: 20.00,
            category: 'Health Insurance'
          },
          {
            id: 'medicare-supplement-plan-f-vs-plan-g',
            title: 'Medicare Supplement Plan F vs Plan G: Complete Comparison Guide 2025',
            views: 6890,
            clicks: 1378,
            conversionRate: 19.99,
            category: 'Medicare Supplement'
          },
          {
            id: 'aca-subsidies-guide',
            title: 'ACA Subsidies Guide: How to Save Money on Health Insurance',
            views: 5940,
            clicks: 1188,
            conversionRate: 20.00,
            category: 'Health Insurance'
          },
          {
            id: 'health-savings-account-hsa-guide',
            title: 'Health Savings Account (HSA) Guide: Triple Tax Advantage for Healthcare',
            views: 4650,
            clicks: 930,
            conversionRate: 20.00,
            category: 'Health Insurance'
          }
        ],
        categoryPerformance: [
          {
            category: 'Medicare',
            views: 18450,
            clicks: 3690,
            conversionRate: 20.00
          },
          {
            category: 'Health Insurance',
            views: 15680,
            clicks: 3136,
            conversionRate: 19.98
          },
          {
            category: 'Medicare Supplement',
            views: 8920,
            clicks: 1784,
            conversionRate: 20.00
          },
          {
            category: 'County Guides',
            views: 2230,
            clicks: 346,
            conversionRate: 15.52
          }
        ],
        userContextBreakdown: [
          {
            context: 'medicare-advantage',
            percentage: 35.2,
            engagementRate: 24.5
          },
          {
            context: 'health-marketplace',
            percentage: 28.8,
            engagementRate: 22.1
          },
          {
            context: 'medicare-supplement',
            percentage: 21.4,
            engagementRate: 26.3
          },
          {
            context: 'general',
            percentage: 14.6,
            engagementRate: 18.7
          }
        ],
        timeSeriesData: Array.from({ length: 30 }, (_, i) => ({
          date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          views: Math.floor(Math.random() * 2000) + 1000,
          clicks: Math.floor(Math.random() * 400) + 200,
          engagements: Math.floor(Math.random() * 100) + 50
        }))
      };
      
      setAnalyticsData(mockData);
      setLoading(false);
    };

    fetchAnalytics();
  }, [selectedTimeRange]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <p className="text-gray-600">Unable to load analytics data</p>
      </div>
    );
  }

  const overallConversionRate = (analyticsData.totalClicks / analyticsData.totalArticleViews * 100).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Blog Performance Analytics</h2>
          <div className="flex items-center gap-2">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value as '7d' | '30d' | '90d')}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-600">Total Article Views</h3>
            <p className="text-2xl font-bold text-blue-900">{analyticsData.totalArticleViews.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-green-600">Total Clicks</h3>
            <p className="text-2xl font-bold text-green-900">{analyticsData.totalClicks.toLocaleString()}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-purple-600">Conversion Rate</h3>
            <p className="text-2xl font-bold text-purple-900">{overallConversionRate}%</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-orange-600">Avg. Daily Views</h3>
            <p className="text-2xl font-bold text-orange-900">
              {Math.round(analyticsData.totalArticleViews / (selectedTimeRange === '7d' ? 7 : selectedTimeRange === '30d' ? 30 : 90)).toLocaleString()}
            </p>
          </div>
        </div>

        {showDetails && (
          <>
            {/* Top Performing Articles */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Articles</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Article</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Category</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Views</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Clicks</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Conversion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {analyticsData.topArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                            {article.title}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {article.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {article.views.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {article.clicks.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className="font-medium text-green-600">
                            {article.conversionRate.toFixed(1)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category Performance */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {analyticsData.categoryPerformance.map((category) => (
                  <div key={category.category} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">{category.category}</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Views:</span>
                        <span className="font-medium">{category.views.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Clicks:</span>
                        <span className="font-medium">{category.clicks.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Rate:</span>
                        <span className="font-medium text-green-600">
                          {category.conversionRate.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Context Breakdown */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Breakdown by Context</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Traffic Distribution</h4>
                  <div className="space-y-3">
                    {analyticsData.userContextBreakdown.map((context) => (
                      <div key={context.context} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <span className="text-sm capitalize text-gray-700">
                            {context.context.replace('-', ' ')}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {context.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Engagement Rates</h4>
                  <div className="space-y-3">
                    {analyticsData.userContextBreakdown.map((context) => (
                      <div key={context.context} className="flex items-center justify-between">
                        <span className="text-sm capitalize text-gray-700">
                          {context.context.replace('-', ' ')}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: `${Math.min(context.engagementRate / 30 * 100, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-12 text-right">
                            {context.engagementRate}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Insights and Recommendations */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">📊 Key Insights & Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">🎯 Top Performers</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Medicare comparison articles show highest engagement</li>
                    <li>• Healthcare Marketplace guides drive strong conversions</li>
                    <li>• Medicare Supplement content performs consistently well</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">🚀 Growth Opportunities</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Create more Medicare Advantage comparison content</li>
                    <li>• Expand HSA and tax advantage articles</li>
                    <li>• Develop county-specific content for high-traffic areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}