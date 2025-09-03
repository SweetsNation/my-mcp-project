'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  BellIcon,
  XMarkIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
}

interface NotificationSystemProps {
  className?: string;
}

export default function NotificationSystem({ className = '' }: NotificationSystemProps) {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      loadNotifications();
      // Set up real-time updates (WebSocket or polling)
      const interval = setInterval(pollNotifications, 30000); // Poll every 30 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const loadNotifications = async () => {
    try {
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
        }
      ];

      setNotifications(mockNotifications);
      updateUnreadCount(mockNotifications);
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  };

  const pollNotifications = async () => {
    try {
      // TODO: Implement real-time notification polling
      // This would check for new notifications from the server
      console.log('Polling for new notifications...');
    } catch (error) {
      console.error('Error polling notifications:', error);
    }
  };

  const updateUnreadCount = (notifs: Notification[]) => {
    const count = notifs.filter(n => !n.read).length;
    setUnreadCount(count);
  };

  const markAsRead = async (notificationId: string) => {
    try {
      // TODO: Replace with actual API call
      setNotifications(prev => 
        prev.map(n => 
          n.id === notificationId ? { ...n, read: true } : n
        )
      );
      updateUnreadCount(notifications);
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
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const deleteNotification = async (notificationId: string) => {
    try {
      // TODO: Replace with actual API call
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
      updateUnreadCount(notifications.filter(n => n.id !== notificationId));
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

  if (!user) return null;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Notification Bell */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <BellIcon className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Mark all as read
                </button>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-l-4 ${getNotificationColor(notification.type)} ${
                      !notification.read ? 'bg-white' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {formatTimestamp(notification.timestamp)}
                            </span>
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs text-blue-600 hover:text-blue-800"
                              >
                                Mark read
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="text-xs text-gray-400 hover:text-red-600"
                            >
                              <XMarkIcon className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        <p className={`text-sm mt-1 ${
                          !notification.read ? 'text-gray-800' : 'text-gray-600'
                        }`}>
                          {notification.message}
                        </p>
                        {notification.actionUrl && notification.actionText && (
                          <a
                            href={notification.actionUrl}
                            className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {notification.actionText} →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <a
                href="/portal/notifications"
                className="block text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View all notifications
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
