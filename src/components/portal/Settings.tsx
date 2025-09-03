'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Settings() {
  const { user } = useAuth();


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Account and notification preferences</p>
      </div>
    </div>
  );
}
