'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

interface AnalyticsData {
  claims: {
    total: number;
    approved: number;
    pending: number;
    rejected: number;
    monthlyTrend: { month: string; count: number }[];
    averageProcessingTime: number;
  };
  costs: {
    totalSpent: number;
    monthlyAverage: number;
    outOfPocket: number;
    covered: number;
    monthlyTrend: { month: string; amount: number }[];
  };
  plans: {
    activePlans: number;
    planTypes: { type: string; count: number }[];
    carriers: { name: string; count: number }[];
  };
  documents: {
    total: number;
    byCategory: { category: string; count: number }[];
    recentUploads: { name: string; date: Date; size: number }[];
  };
}

export default function AdvancedAnalytics() {
  const { user } = useAuth();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'30days' | '6months' | '1year'>('6months');

  useEffect(() => {
    if (user) {
      loadAnalyticsData();
    }
  }, [user, timeRange]);

  const loadAnalyticsData = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // Mock data for now
      const mockData: AnalyticsData = {
        claims: {
          total: 24,
          approved: 18,
          pending: 4,
          rejected: 2,
          monthlyTrend: [
            { month: 'Jul', count: 3 },
            { month: 'Aug', count: 5 },
            { month: 'Sep', count: 4 },
            { month: 'Oct', count: 6 },
            { month: 'Nov', count: 4 },
            { month: 'Dec', count: 2 }
          ],
          averageProcessingTime: 4.2
        },
        costs: {
          totalSpent: 2847.50,
          monthlyAverage: 474.58,
          outOfPocket: 1247.50,
          covered: 1600.00,
          monthlyTrend: [
            { month: 'Jul', amount: 425.00 },
            { month: 'Aug', amount: 512.50 },
            { month: 'Sep', amount: 398.75 },
            { month: 'Oct', amount: 587.25 },
            { month: 'Nov', amount: 456.00 },
            { month: 'Dec', amount: 468.00 }
          ]
        },
        plans: {
          activePlans: 2,
          planTypes: [
            { type: 'Medicare Advantage', count: 1 },
            { type: 'Medicare Supplement', count: 1 }
          ],
          carriers: [
            { name: 'Blue Cross Blue Shield', count: 1 },
            { name: 'Aetna', count: 1 }
          ]
        },
        documents: {
          total: 15,
          byCategory: [
            { category: 'Medical', count: 8 },
            { category: 'Billing', count: 4 },
            { category: 'Insurance', count: 2 },
            { category: 'Personal', count: 1 }
          ],
          recentUploads: [
            { name: 'medical_records_2024.pdf', date: new Date('2024-12-15'), size: 2048576 },
            { name: 'billing_statement.pdf', date: new Date('2024-12-14'), size: 512000 },
            { name: 'insurance_card.jpg', date: new Date('2024-12-13'), size: 102400 }
          ]
        }
      };

      setAnalyticsData(mockData);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPercentage = (value: number, total: number) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!analyticsData) {
    return <div>No analytics data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
              <p className="mt-1 text-sm text-gray-500">
                Comprehensive analysis of your Medicare coverage and healthcare spending
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="30days">Last 30 Days</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Claims</p>
                <p className="text-2xl font-semibold text-gray-900">{analyticsData.claims.total}</p>
                <p className="text-sm text-gray-500">
                  {analyticsData.claims.approved} approved, {analyticsData.claims.pending} pending
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-semibold text-gray-900">{formatCurrency(analyticsData.costs.totalSpent)}</p>
                <p className="text-sm text-gray-500">
                  Avg: {formatCurrency(analyticsData.costs.monthlyAverage)}/month
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Plans</p>
                <p className="text-2xl font-semibold text-gray-900">{analyticsData.plans.activePlans}</p>
                <p className="text-sm text-gray-500">
                  {analyticsData.plans.planTypes.map(pt => pt.type).join(', ')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Documents</p>
                <p className="text-2xl font-semibold text-gray-900">{analyticsData.documents.total}</p>
                <p className="text-sm text-gray-500">
                  Across {analyticsData.documents.byCategory.length} categories
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Claims Analytics */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Claims Overview</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Approved</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${getPercentage(analyticsData.claims.approved, analyticsData.claims.total)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {getPercentage(analyticsData.claims.approved, analyticsData.claims.total)}%
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pending</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${getPercentage(analyticsData.claims.pending, analyticsData.claims.total)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {getPercentage(analyticsData.claims.pending, analyticsData.claims.total)}%
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rejected</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${getPercentage(analyticsData.claims.rejected, analyticsData.claims.total)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {getPercentage(analyticsData.claims.rejected, analyticsData.claims.total)}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Avg Processing Time</p>
                    <p className="font-medium text-gray-900">{analyticsData.claims.averageProcessingTime} days</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Success Rate</p>
                    <p className="font-medium text-gray-900">
                      {getPercentage(analyticsData.claims.approved, analyticsData.claims.total)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Cost Breakdown</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Covered by Insurance</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${getPercentage(analyticsData.costs.covered, analyticsData.costs.totalSpent)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {formatCurrency(analyticsData.costs.covered)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Out of Pocket</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full" 
                        style={{ width: `${getPercentage(analyticsData.costs.outOfPocket, analyticsData.costs.totalSpent)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {formatCurrency(analyticsData.costs.outOfPocket)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Monthly Average</p>
                    <p className="font-medium text-gray-900">{formatCurrency(analyticsData.costs.monthlyAverage)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Coverage Rate</p>
                    <p className="font-medium text-gray-900">
                      {getPercentage(analyticsData.costs.covered, analyticsData.costs.totalSpent)}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Analytics */}
        <div className="bg-white rounded-lg shadow mt-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Document Analytics</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">By Category</h4>
                <div className="space-y-3">
                  {analyticsData.documents.byCategory.map((category) => (
                    <div key={category.category} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{category.category}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${getPercentage(category.count, analyticsData.documents.total)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-8 text-right">
                          {category.count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Recent Uploads</h4>
                <div className="space-y-3">
                  {analyticsData.documents.recentUploads.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 truncate">{doc.name}</p>
                        <p className="text-gray-500">{doc.date.toLocaleDateString()}</p>
                      </div>
                      <span className="text-gray-600 ml-2">{formatFileSize(doc.size)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Information */}
        <div className="bg-white rounded-lg shadow mt-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Plan Information</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Plan Types</h4>
                <div className="space-y-3">
                  {analyticsData.plans.planTypes.map((planType) => (
                    <div key={planType.type} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{planType.type}</span>
                      <span className="text-sm font-medium text-gray-900">{planType.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Carriers</h4>
                <div className="space-y-3">
                  {analyticsData.plans.carriers.map((carrier) => (
                    <div key={carrier.name} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{carrier.name}</span>
                      <span className="text-sm font-medium text-gray-900">{carrier.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
