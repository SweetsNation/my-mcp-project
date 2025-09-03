'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  PlusIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

interface Claim {
  id: string;
  claimNumber: string;
  dateOfService: Date;
  provider: string;
  service: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected' | 'processing';
  processedDate?: Date;
  notes?: string;
}

interface ClaimFormData {
  dateOfService: string;
  provider: string;
  service: string;
  amount: string;
  notes: string;
}

export default function ClaimsManagement() {
  const { user } = useAuth();
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewClaimForm, setShowNewClaimForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [formData, setFormData] = useState<ClaimFormData>({
    dateOfService: '',
    provider: '',
    service: '',
    amount: '',
    notes: ''
  });

  useEffect(() => {
    if (user) {
      loadClaims();
    }
  }, [user]);

  const loadClaims = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // Mock data for now
      setClaims([
        {
          id: '1',
          claimNumber: 'CLM-2024-001',
          dateOfService: new Date('2024-01-15'),
          provider: 'Dr. Sarah Johnson',
          service: 'Annual Physical Exam',
          amount: 150.00,
          status: 'approved',
          processedDate: new Date('2024-01-20'),
          notes: 'Routine annual checkup'
        },
        {
          id: '2',
          claimNumber: 'CLM-2024-002',
          dateOfService: new Date('2024-01-20'),
          provider: 'City Medical Center',
          service: 'Blood Work',
          amount: 85.50,
          status: 'pending',
          notes: 'Comprehensive blood panel'
        },
        {
          id: '3',
          claimNumber: 'CLM-2024-003',
          dateOfService: new Date('2024-01-25'),
          provider: 'Dr. Michael Chen',
          service: 'Dental Cleaning',
          amount: 120.00,
          status: 'rejected',
          processedDate: new Date('2024-01-28'),
          notes: 'Not covered under current plan'
        }
      ]);
    } catch (error) {
      console.error('Error loading claims:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Replace with actual API call
      const newClaim: Claim = {
        id: Date.now().toString(),
        claimNumber: `CLM-${new Date().getFullYear()}-${String(claims.length + 1).padStart(3, '0')}`,
        dateOfService: new Date(formData.dateOfService),
        provider: formData.provider,
        service: formData.service,
        amount: parseFloat(formData.amount),
        status: 'pending',
        notes: formData.notes
      };

      setClaims([newClaim, ...claims]);
      setShowNewClaimForm(false);
      setFormData({
        dateOfService: '',
        provider: '',
        service: '',
        amount: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error submitting claim:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'processing':
        return <ExclamationTriangleIcon className="h-5 w-5 text-blue-500" />;
      default:
        return <DocumentTextIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.claimNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || claim.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
              <h1 className="text-3xl font-bold text-gray-900">Claims Management</h1>
              <p className="mt-1 text-sm text-gray-500">
                Track and manage your medical claims
              </p>
            </div>
            <button
              onClick={() => setShowNewClaimForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Submit New Claim</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search claims..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <FunnelIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Total Claims: <span className="font-semibold">{filteredClaims.length}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Claims List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Your Claims</h3>
          </div>
          
          {filteredClaims.length === 0 ? (
            <div className="p-8 text-center">
              <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No claims found</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredClaims.map((claim) => (
                <div key={claim.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(claim.status)}
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">
                          {claim.claimNumber}
                        </h4>
                        <p className="text-sm text-gray-600">{claim.service}</p>
                        <p className="text-sm text-gray-500">
                          Provider: {claim.provider} • Date: {claim.dateOfService.toLocaleDateString()}
                        </p>
                        {claim.notes && (
                          <p className="text-sm text-gray-500 mt-1">Notes: {claim.notes}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        ${claim.amount.toFixed(2)}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(claim.status)}`}>
                        {claim.status}
                      </span>
                      {claim.processedDate && (
                        <p className="text-xs text-gray-500 mt-1">
                          Processed: {claim.processedDate.toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Claim Modal */}
      {showNewClaimForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Submit New Claim</h3>
            
            <form onSubmit={handleSubmitClaim} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Service
                </label>
                <input
                  type="date"
                  required
                  value={formData.dateOfService}
                  onChange={(e) => setFormData({...formData, dateOfService: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Provider Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.provider}
                  onChange={(e) => setFormData({...formData, provider: e.target.value})}
                  placeholder="Dr. John Smith"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Description
                </label>
                <input
                  type="text"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  placeholder="Annual physical exam"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="150.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional information about the service..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewClaimForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Claim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
