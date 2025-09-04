'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChartBarIcon,
  BellIcon
} from '@heroicons/react/24/outline';

interface SecurityEvent {
  id: string;
  eventType: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  description: string;
  ipAddress: string;
  timestamp: Date;
  resolved: boolean;
}

interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'active' | 'investigating' | 'resolved' | 'false_positive';
  eventCount: number;
  lastOccurrence: Date;
}

interface SecurityMetrics {
  totalEvents: number;
  eventsByType: Record<string, number>;
  eventsBySeverity: Record<string, number>;
  topIPAddresses: Array<{ ip: string; count: number }>;
}

export default function SecurityDashboard() {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<SecurityMetrics | null>(null);
  const [recentEvents, setRecentEvents] = useState<SecurityEvent[]>([]);
  const [activeAlerts, setActiveAlerts] = useState<SecurityAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('24h');

  useEffect(() => {
    if (user) {
      loadSecurityData();
    }
  }, [user, timeRange]);

  const loadSecurityData = async () => {
    try {
      setLoading(true);
      
      // In a real implementation, this would call your API
      // For now, we'll use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockMetrics: SecurityMetrics = {
        totalEvents: 156,
        eventsByType: {
          'LOGIN_FAILURE': 45,
          'SUSPICIOUS_ACTIVITY': 23,
          'ACCESS_DENIED': 18,
          'BRUTE_FORCE_ATTEMPT': 12,
          'UNUSUAL_TRAFFIC': 8
        },
        eventsBySeverity: {
          'LOW': 89,
          'MEDIUM': 45,
          'HIGH': 18,
          'CRITICAL': 4
        },
        topIPAddresses: [
          { ip: '192.168.1.100', count: 23 },
          { ip: '10.0.0.50', count: 18 },
          { ip: '172.16.0.25', count: 15 },
          { ip: '203.0.113.0', count: 12 }
        ]
      };

      const mockEvents: SecurityEvent[] = [
        {
          id: '1',
          eventType: 'LOGIN_FAILURE',
          severity: 'HIGH',
          description: 'Multiple failed login attempts from IP 192.168.1.100',
          ipAddress: '192.168.1.100',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          resolved: false
        },
        {
          id: '2',
          eventType: 'SUSPICIOUS_ACTIVITY',
          severity: 'MEDIUM',
          description: 'Unusual data access pattern detected',
          ipAddress: '10.0.0.50',
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          resolved: true
        },
        {
          id: '3',
          eventType: 'ACCESS_DENIED',
          severity: 'LOW',
          description: 'Unauthorized access attempt to admin panel',
          ipAddress: '172.16.0.25',
          timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
          resolved: false
        }
      ];

      const mockAlerts: SecurityAlert[] = [
        {
          id: '1',
          title: 'Brute Force Attack Detected',
          description: 'Multiple login failures from IP 192.168.1.100',
          severity: 'HIGH',
          status: 'active',
          eventCount: 23,
          lastOccurrence: new Date(Date.now() - 30 * 60 * 1000)
        },
        {
          id: '2',
          title: 'Suspicious Activity Pattern',
          description: 'Unusual data access behavior detected',
          severity: 'MEDIUM',
          status: 'investigating',
          eventCount: 8,
          lastOccurrence: new Date(Date.now() - 2 * 60 * 60 * 1000)
        }
      ];

      setMetrics(mockMetrics);
      setRecentEvents(mockEvents);
      setActiveAlerts(mockAlerts);
    } catch (error) {
      console.error('Error loading security data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'LOW':
        return 'bg-green-100 text-green-800';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800';
      case 'HIGH':
        return 'bg-orange-100 text-orange-800';
      case 'CRITICAL':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-red-100 text-red-800';
      case 'investigating':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'false_positive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'investigating':
        return <ClockIcon className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircleIcon className="h-4 w-4" />;
      case 'false_positive':
        return <XCircleIcon className="h-4 w-4" />;
      default:
        return <ClockIcon className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Unable to load security data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Security Dashboard</h1>
          <p className="text-gray-600">Monitor security events and threats in real-time</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as '24h' | '7d' | '30d')}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Events</p>
              <p className="text-2xl font-semibold text-gray-900">{metrics.totalEvents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-2xl font-semibold text-gray-900">{activeAlerts.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Severity</p>
              <p className="text-2xl font-semibold text-gray-900">
                {metrics.eventsBySeverity.HIGH + metrics.eventsBySeverity.CRITICAL}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-semibold text-gray-900">
                {recentEvents.filter(e => e.resolved).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Events by Type */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Events by Type</h3>
          <div className="space-y-3">
            {Object.entries(metrics.eventsByType).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{type.replace(/_/g, ' ')}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(count / metrics.totalEvents) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Events by Severity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Events by Severity</h3>
          <div className="space-y-3">
            {Object.entries(metrics.eventsBySeverity).map(([severity, count]) => (
              <div key={severity} className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(severity)}`}>
                  {severity}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(count / metrics.totalEvents) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top IP Addresses */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Top IP Addresses</h3>
        <div className="space-y-3">
          {metrics.topIPAddresses.map((ipData, index) => (
            <div key={ipData.ip} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-900">#{index + 1}</span>
                <span className="font-mono text-sm text-gray-700">{ipData.ip}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{ipData.count} events</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  <EyeIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Security Alerts */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Active Security Alerts</h3>
          <BellIcon className="h-5 w-5 text-red-500" />
        </div>
        {activeAlerts.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No active security alerts</p>
        ) : (
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(alert.status)}
                          <span>{alert.status}</span>
                        </div>
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{alert.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{alert.eventCount} occurrences</span>
                      <span>Last: {alert.lastOccurrence.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200">
                      Investigate
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Security Events */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Security Events</h3>
        <div className="space-y-3">
          {recentEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(event.severity)}`}>
                  {event.severity}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{event.description}</p>
                  <p className="text-xs text-gray-500">
                    {event.eventType.replace(/_/g, ' ')} • {event.ipAddress} • {event.timestamp.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {event.resolved ? (
                  <span className="text-green-600 text-sm">Resolved</span>
                ) : (
                  <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200">
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
