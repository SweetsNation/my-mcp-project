'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import PortalLayout from '@/components/portal/PortalLayout';
import { Notification } from '@/components/portal/NotificationSystem';
import {
  BellIcon,
  CheckIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

export default function NotificationsPage() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadNotifications();
    }
  }, [user]);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // Mock data for now
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'success',
          title: 'Claim Approved',
          message: 'Your claim for Dr. Smith visit has been approved and processed.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          read: false,
          actionUrl: '/portal/claims',
          actionText: 'View Claim'
        },
        {
          id: '2',
          type: 'warning',
          title: 'Document Required',
          message: 'Additional documentation is needed for claim #CLM-2024-002.',
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
          read: false,
          actionUrl: '/portal/documents',
          actionText: 'Upload Document'
        },
        {
          id: '3',
          type: 'info',
          title: 'Plan Renewal Reminder',
          message: 'Your Medicare Advantage plan is up for renewal in 30 days.',
          timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          read: true
        },
        {
          id: '4',
          type: 'error',
          title: 'Payment Failed',
          message: 'Your monthly premium payment could not be processed.',
          timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
          read: false,
          actionUrl: '/portal/profile',
          actionText: 'Update Payment'
        },
        {
          id: '5',
          type: 'success',
          title: 'Appointment Confirmed',
          message: 'Your appointment with Dr. Johnson has been confirmed for December 20th at 2:00 PM.',
          timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
          read: true
        },
        {
          id: '6',
          type: 'info',
          title: 'New Message',
          message: 'You have a new message from your care coordinator regarding your recent claim.',
          timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
          read: false,
          actionUrl: '/portal/messages',
          actionText: 'Read Message'
        }
      ];

      setNotifications(mockNotifications);
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      // TODO: Replace with actual API call
      setNotifications(prev => 
        prev.map(n => 
          n.id === notificationId ? { ...n, read: true } : n
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      // TODO: Replace with actual API call
      setNotifications(prev => 
        prev.map(n => ({ ...n, read: true }))
      );
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const deleteNotification = async (notificationId: string) => {
    try {
      // TODO: Replace with actual API call
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'info':
      default:
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'border-l-green-500 bg-green-50';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'error':
        return 'border-l-red-500 bg-red-50';
      case 'info':
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return timestamp.toLocaleDateString();
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  if (loading) {
    return (
      <PortalLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Stay updated with your Medicare coverage and healthcare activities
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={markAllAsRead}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Mark All as Read
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Filter:</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Notifications ({notifications.length})</option>
                <option value="unread">Unread ({notifications.filter(n => !n.read).length})</option>
                <option value="read">Read ({notifications.filter(n => n.read).length})</option>
              </select>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-12">
                <BellIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No notifications found</p>
                <p className="text-sm text-gray-400 mt-1">
                  {filter === 'all' ? 'You\'re all caught up!' : `No ${filter} notifications`}
                </p>
              </div>
            ) : (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-lg shadow p-6 border-l-4 ${getNotificationColor(notification.type)} ${
                    !notification.read ? 'ring-2 ring-blue-200' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-medium ${
                          !notification.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                              Mark read
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-sm text-gray-400 hover:text-red-600"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <p className={`text-base ${
                        !notification.read ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        {notification.message}
                      </p>
                      
                      {notification.actionUrl && notification.actionText && (
                        <a
                          href={notification.actionUrl}
                          className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {notification.actionText} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
