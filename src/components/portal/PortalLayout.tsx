'use client';

import React from 'react';
import PortalNavigation from './PortalNavigation';
import NotificationSystem from './NotificationSystem';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNavigation />
      <div className="lg:pl-64">
        <main className="py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
