'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  UserIcon, 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalPlans: number;
  activeClaims: number;
  pendingDocuments: number;
  upcomingAppointments: number;
}

interface RecentActivity {
  id: string;
  type: 'claim' | 'document' | 'plan' | 'appointment';
  title: string;
  description: string;
  date: Date;
  status: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalPlans: 0,
    activeClaims: 0,
    pendingDocuments: 0,
    upcomingAppointments: 0
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API calls
      // For now, using mock data
      setStats({
        totalPlans: 2,
        activeClaims: 1,
        pendingDocuments: 3,
        upcomingAppointments: 1
      });

      setRecentActivity([
        {
          id: '1',
          type: 'claim',
          title: 'Claim Submitted',
          description: 'Your claim for Dr. Smith visit has been submitted',
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          status: 'pending'
        },
        {
          id: '2',
          type: 'document',
          title: 'Document Uploaded',
          description: 'Medical records for claim #12345 uploaded',
          date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
          status: 'completed'
        },
        {
          id: '3',
          type: 'plan',
          title: 'Plan Renewal',
          description: 'Your Medicare Advantage plan is up for renewal',
          date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          status: 'pending'
        }
      ]);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'claim':
        return <DocumentTextIcon className="h-6 w-6 text-blue-500" />;
      case 'document':
        return <DocumentTextIcon className="h-6 w-6 text-green-500" />;
      case 'plan':
        return <ShieldCheckIcon className="h-6 w-6 text-purple-500" />;
      case 'appointment':
        return <CalendarIcon className="h-6 w-6 text-orange-500" />;
      default:
        return <DocumentTextIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.firstName || 'User'}!
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Here's what's happening with your Medicare coverage today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Help
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Plans</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalPlans}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Claims</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeClaims}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Documents</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingDocuments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming Appointments</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.upcomingAppointments}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                {recentActivity.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No recent activity</p>
                ) : (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        {getActivityIcon(activity.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-sm text-gray-500">{activity.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-400">
                              {activity.date.toLocaleDateString()}
                            </span>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                              {activity.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Actions & Profile */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <DocumentTextIcon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">Submit a Claim</span>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <DocumentTextIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Upload Documents</span>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <ShieldCheckIcon className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium">View Plan Details</span>
                  </div>
                </button>
                
                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <CalendarIcon className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">Schedule Appointment</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Profile Summary</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-500">Member since {user?.createdAt ? new Date(user.createdAt).getFullYear() : 'N/A'}</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{user?.email}</span>
                  </div>
                  
                  {user?.phone && (
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{user.phone}</span>
                    </div>
                  )}
                  
                  {user?.medicareNumber && (
                    <div className="flex items-center space-x-3">
                      <ShieldCheckIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Medicare: {user.medicareNumber}</span>
                    </div>
                  )}
                  
                  {user?.planType && (
                    <div className="flex items-center space-x-3">
                      <ShieldCheckIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Plan: {user.planType}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
