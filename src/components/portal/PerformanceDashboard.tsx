'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ServerIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';

interface PerformanceMetric {
  id: string;
  endpoint: string;
  method: string;
  responseTime: number;
  statusCode: number;
  timestamp: Date;
  memoryUsage?: number;
  cpuUsage?: number;
}

interface PerformanceStats {
  averageResponseTime: number;
  totalRequests: number;
  successRate: number;
  errorRate: number;
  slowestEndpoint: string;
  fastestEndpoint: string;
  peakResponseTime: number;
  lowResponseTime: number;
}

interface EndpointPerformance {
  endpoint: string;
  method: string;
  averageResponseTime: number;
  totalRequests: number;
  successCount: number;
  errorCount: number;
  performanceScore: number;
}

export default function PerformanceDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<PerformanceStats | null>(null);
  const [endpointPerformance, setEndpointPerformance] = useState<EndpointPerformance[]>([]);
  const [slowQueries, setSlowQueries] = useState<PerformanceMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      loadPerformanceData();
    }
  }, [user, timeRange]);

  const loadPerformanceData = async () => {
    try {
      setLoading(true);
      
      // In a real implementation, this would call your API
      // For now, we'll use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockStats: PerformanceStats = {
        averageResponseTime: 245.6,
        totalRequests: 1247,
        successRate: 98.7,
        errorRate: 1.3,
        slowestEndpoint: '/api/medicare-plans/search',
        fastestEndpoint: '/api/health',
        peakResponseTime: 1250,
        lowResponseTime: 45
      };

      const mockEndpointPerformance: EndpointPerformance[] = [
        {
          endpoint: '/api/medicare-plans/search',
          method: 'POST',
          averageResponseTime: 450.2,
          totalRequests: 156,
          successCount: 152,
          errorCount: 4,
          performanceScore: 72
        },
        {
          endpoint: '/api/claims',
          method: 'GET',
          averageResponseTime: 320.8,
          totalRequests: 89,
          successCount: 87,
          errorCount: 2,
          performanceScore: 85
        },
        {
          endpoint: '/api/documents',
          method: 'GET',
          averageResponseTime: 280.5,
          totalRequests: 234,
          successCount: 232,
          errorCount: 2,
          performanceScore: 88
        },
        {
          endpoint: '/api/health',
          method: 'GET',
          averageResponseTime: 45.2,
          totalRequests: 567,
          successCount: 567,
          errorCount: 0,
          performanceScore: 100
        }
      ];

      const mockSlowQueries: PerformanceMetric[] = [
        {
          id: '1',
          endpoint: '/api/medicare-plans/search',
          method: 'POST',
          responseTime: 1250,
          statusCode: 200,
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          memoryUsage: 128.5,
          cpuUsage: 45.2
        },
        {
          id: '2',
          endpoint: '/api/claims',
          method: 'GET',
          responseTime: 890,
          statusCode: 200,
          timestamp: new Date(Date.now() - 45 * 60 * 1000),
          memoryUsage: 95.3,
          cpuUsage: 32.1
        },
        {
          id: '3',
          endpoint: '/api/documents',
          method: 'POST',
          responseTime: 756,
          statusCode: 201,
          timestamp: new Date(Date.now() - 60 * 60 * 1000),
          memoryUsage: 156.7,
          cpuUsage: 28.9
        }
      ];

      setStats(mockStats);
      setEndpointPerformance(mockEndpointPerformance);
      setSlowQueries(mockSlowQueries);
    } catch (error) {
      console.error('Error loading performance data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPerformanceScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getResponseTimeColor = (time: number) => {
    if (time < 200) return 'text-green-600';
    if (time < 500) return 'text-yellow-600';
    if (time < 1000) return 'text-orange-600';
    return 'text-red-600';
  };

  const getResponseTimeBg = (time: number) => {
    if (time < 200) return 'bg-green-100';
    if (time < 500) return 'bg-yellow-100';
    if (time < 1000) return 'bg-orange-100';
    return 'bg-red-100';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Unable to load performance data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Dashboard</h1>
          <p className="text-gray-600">Monitor application performance and identify bottlenecks</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as '1h' | '24h' | '7d' | '30d')}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Performance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ClockIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.averageResponseTime}ms</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.successRate}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ExclamationTriangleIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Peak Response Time</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.peakResponseTime}ms</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ServerIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalRequests.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Endpoint Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Endpoint Performance</h3>
          <div className="space-y-3">
            {endpointPerformance.map((endpoint) => (
              <div
                key={`${endpoint.method}:${endpoint.endpoint}`}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedEndpoint === `${endpoint.method}:${endpoint.endpoint}`
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedEndpoint(
                  selectedEndpoint === `${endpoint.method}:${endpoint.endpoint}` 
                    ? null 
                    : `${endpoint.method}:${endpoint.endpoint}`
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {endpoint.endpoint}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getPerformanceScoreBg(endpoint.performanceScore)} ${getPerformanceScoreColor(endpoint.performanceScore)}`}>
                    {endpoint.performanceScore}/100
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Avg: {endpoint.averageResponseTime}ms</span>
                  <span>{endpoint.totalRequests} requests</span>
                  <span>{endpoint.successCount}/{endpoint.totalRequests} success</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">Response Time</span>
              </div>
              <span className="text-sm font-medium text-gray-900">-12% vs last period</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">Success Rate</span>
              </div>
              <span className="text-sm font-medium text-gray-900">+2.1% vs last period</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <ArrowTrendingDownIcon className="h-5 w-5 text-red-600" />
                <span className="text-sm text-gray-700">Error Rate</span>
              </div>
              <span className="text-sm font-medium text-gray-900">-15% vs last period</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-700">Throughput</span>
              </div>
              <span className="text-sm font-medium text-gray-900">+8.3% vs last period</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slow Queries */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Slow Queries (&gt;500ms)</h3>
        {slowQueries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No slow queries detected</p>
        ) : (
          <div className="space-y-3">
            {slowQueries.map((query) => (
              <div key={query.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      query.method === 'GET' ? 'bg-green-100 text-green-800' :
                      query.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      query.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {query.method}
                    </span>
                    <span className="font-medium text-gray-900">{query.endpoint}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getResponseTimeBg(query.responseTime)} ${getResponseTimeColor(query.responseTime)}`}>
                    {query.responseTime}ms
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Status: {query.statusCode}</span>
                  <span>Time: {query.timestamp.toLocaleString()}</span>
                  {query.memoryUsage && (
                    <span>Memory: {query.memoryUsage}MB</span>
                  )}
                  {query.cpuUsage && (
                    <span>CPU: {query.cpuUsage}%</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* System Resources */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">System Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="226.2"
                  strokeDashoffset="45.24"
                  className="text-blue-600"
                  style={{
                    strokeDashoffset: 226.2 - (226.2 * 80) / 100
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">80%</span>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">CPU Usage</p>
          </div>

          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="226.2"
                  strokeDashoffset="67.86"
                  className="text-green-600"
                  style={{
                    strokeDashoffset: 226.2 - (226.2 * 70) / 100
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">70%</span>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Memory Usage</p>
          </div>

          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="226.2"
                  strokeDashoffset="113.1"
                  className="text-yellow-600"
                  style={{
                    strokeDashoffset: 226.2 - (226.2 * 50) / 100
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">50%</span>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700">Disk Usage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
