'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  PlusIcon, 
  DocumentTextIcon, 
  DocumentArrowUpIcon,
  EyeIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CalendarIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';

interface Document {
  id: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  category: 'medical' | 'billing' | 'insurance' | 'personal' | 'other';
  uploadedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

interface DocumentFormData {
  category: string;
  notes: string;
}

export default function DocumentManagement() {
  const { user } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<DocumentFormData>({
    category: 'medical',
    notes: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      loadDocuments();
    }
  }, [user]);

  const loadDocuments = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call
      // Mock data for now
      setDocuments([
        {
          id: '1',
          fileName: 'medical_records_2024.pdf',
          fileType: 'pdf',
          fileSize: 2048576, // 2MB
          category: 'medical',
          uploadedAt: new Date('2024-01-15'),
          status: 'approved',
          notes: 'Annual medical records from Dr. Johnson'
        },
        {
          id: '2',
          fileName: 'billing_statement.pdf',
          fileType: 'pdf',
          fileSize: 512000, // 512KB
          category: 'billing',
          uploadedAt: new Date('2024-01-20'),
          status: 'pending',
          notes: 'January billing statement from City Medical'
        },
        {
          id: '3',
          fileName: 'insurance_card.jpg',
          fileType: 'jpg',
          fileSize: 102400, // 100KB
          category: 'insurance',
          uploadedAt: new Date('2024-01-10'),
          status: 'approved',
          notes: 'Front and back of insurance card'
        },
        {
          id: '4',
          fileName: 'prescription_list.pdf',
          fileType: 'pdf',
          fileSize: 153600, // 150KB
          category: 'medical',
          uploadedAt: new Date('2024-01-25'),
          status: 'pending',
          notes: 'Current prescription medications list'
        }
      ]);
    } catch (error) {
      console.error('Error loading documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    try {
      // TODO: Replace with actual API call for file upload
      const newDocument: Document = {
        id: Date.now().toString(),
        fileName: selectedFile.name,
        fileType: selectedFile.name.split('.').pop() || 'unknown',
        fileSize: selectedFile.size,
        category: formData.category as Document['category'],
        uploadedAt: new Date(),
        status: 'pending',
        notes: formData.notes
      };

      setDocuments([newDocument, ...documents]);
      setShowUploadModal(false);
      setSelectedFile(null);
      setFormData({ category: 'medical', notes: '' });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  const handleDeleteDocument = async (documentId: string) => {
    try {
      // TODO: Replace with actual API call
      setDocuments(documents.filter(doc => doc.id !== documentId));
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'medical':
        return <DocumentTextIcon className="h-5 w-5 text-blue-500" />;
      case 'billing':
        return <DocumentTextIcon className="h-5 w-5 text-green-500" />;
      case 'insurance':
        return <DocumentTextIcon className="h-5 w-5 text-purple-500" />;
      case 'personal':
        return <DocumentTextIcon className="h-5 w-5 text-orange-500" />;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.notes?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || doc.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
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
              <h1 className="text-3xl font-bold text-gray-900">Document Management</h1>
              <p className="mt-1 text-sm text-gray-500">
                Upload, organize, and manage your important documents
              </p>
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Upload Document</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <FunnelIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Categories</option>
                <option value="medical">Medical</option>
                <option value="billing">Billing</option>
                <option value="insurance">Insurance</option>
                <option value="personal">Personal</option>
                <option value="other">Other</option>
              </select>
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
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Total Documents: <span className="font-semibold">{filteredDocuments.length}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Your Documents</h3>
          </div>
          
          {filteredDocuments.length === 0 ? (
            <div className="p-8 text-center">
              <DocumentIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No documents found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {filteredDocuments.map((document) => (
                <div key={document.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    {getCategoryIcon(document.category)}
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteDocument(document.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                      {document.fileName}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {document.fileType.toUpperCase()} • {formatFileSize(document.fileSize)}
                    </p>
                  </div>
                  
                  {document.notes && (
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {document.notes}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
                      {document.status}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {document.uploadedAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Document</h3>
            
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select File
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileSelect}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="hidden"
                  />
                  <DocumentArrowUpIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {selectedFile ? selectedFile.name : 'Click to select a file'}
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Choose File
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    PDF, JPG, PNG, DOC up to 10MB
                  </p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="medical">Medical</option>
                  <option value="billing">Billing</option>
                  <option value="insurance">Insurance</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Add notes about this document..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!selectedFile}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
