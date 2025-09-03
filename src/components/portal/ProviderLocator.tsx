'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import IntegrationService, { 
  ProviderNetworkData, 
  PharmacyData, 
  LabData, 
  ImagingData 
} from '@/lib/services/integrationService';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  CheckIcon,
  XMarkIcon,
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

interface ProviderLocatorProps {
  className?: string;
}

export default function ProviderLocator({ className = '' }: ProviderLocatorProps) {
  const { user } = useAuth();
  const [zipCode, setZipCode] = useState('');
  const [searchType, setSearchType] = useState<'providers' | 'pharmacies' | 'labs' | 'imaging'>('providers');
  const [specialty, setSpecialty] = useState('');
  const [radius, setRadius] = useState(25);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const integrationService = new IntegrationService();

  const handleSearch = async () => {
    if (!zipCode.trim()) return;

    try {
      setLoading(true);
      let searchResults: any[] = [];

      switch (searchType) {
        case 'providers':
          searchResults = await integrationService.getProviderNetwork(zipCode, specialty, radius);
          break;
        case 'pharmacies':
          searchResults = await integrationService.getPharmacyLocations(zipCode, radius);
          break;
        case 'labs':
          searchResults = await integrationService.getLabLocations(zipCode, radius);
          break;
        case 'imaging':
          searchResults = await integrationService.getImagingLocations(zipCode, undefined, radius);
          break;
      }

      setResults(searchResults);
    } catch (error) {
      console.error('Error searching providers:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const getSearchTypeIcon = (type: string) => {
    switch (type) {
      case 'providers':
        return <UserIcon className="h-5 w-5" />;
      case 'pharmacies':
        return <BuildingOfficeIcon className="h-5 w-5" />;
      case 'labs':
        return <BeakerIcon className="h-5 w-5" />;
      case 'imaging':
        return <CameraIcon className="h-5 w-5" />;
      default:
        return <MagnifyingGlassIcon className="h-5 w-5" />;
    }
  };

  const getSearchTypeLabel = (type: string) => {
    switch (type) {
      case 'providers':
        return 'Healthcare Providers';
      case 'pharmacies':
        return 'Pharmacies';
      case 'labs':
        return 'Laboratories';
      case 'imaging':
        return 'Imaging Centers';
      default:
        return 'Search';
    }
  };

  const renderProviderCard = (provider: ProviderNetworkData) => (
    <div key={provider.providerId} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-medium text-gray-900">{provider.name}</h3>
            {provider.rating && (
              <div className="flex items-center space-x-1">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-600">{provider.rating}</span>
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-2">{provider.specialty}</p>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4 text-gray-400" />
              <span>{provider.address}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4 text-gray-400" />
              <span>{provider.phone}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <UserIcon className="h-4 w-4 text-gray-400" />
              <span>
                {provider.acceptingNewPatients ? 'Accepting new patients' : 'Not accepting new patients'}
              </span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              provider.networkStatus === 'in_network' 
                ? 'bg-green-100 text-green-800' 
                : provider.networkStatus === 'pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {provider.networkStatus === 'in_network' ? 'In Network' : 
               provider.networkStatus === 'pending' ? 'Pending' : 'Out of Network'}
            </span>
            
            {provider.languages.map((language, index) => (
              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPharmacyCard = (pharmacy: PharmacyData) => (
    <div key={pharmacy.pharmacyId} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-medium text-gray-900">{pharmacy.name}</h3>
            {pharmacy.preferredStatus && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Preferred
              </span>
            )}
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4 text-gray-400" />
              <span>{pharmacy.address}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4 text-gray-400" />
              <span>{pharmacy.phone}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4 text-gray-400" />
              <span>{pharmacy.hours}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4 text-gray-400" />
              <span>{pharmacy.distance} miles away</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {pharmacy.acceptsMedicare && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Accepts Medicare
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLabCard = (lab: LabData) => (
    <div key={lab.labId} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{lab.name}</h3>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4 text-gray-400" />
              <span>{lab.address}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4 text-gray-400" />
              <span>{lab.phone}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <BeakerIcon className="h-4 w-4 text-gray-400" />
              <span>Services: {lab.services.join(', ')}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4 text-gray-400" />
              <span>Turnaround: {lab.turnaroundTime}</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {lab.acceptsMedicare && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Accepts Medicare
              </span>
            )}
            
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              lab.appointmentRequired ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }`}>
              {lab.appointmentRequired ? 'Appointment Required' : 'Walk-ins Welcome'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImagingCard = (imaging: ImagingData) => (
    <div key={imaging.imagingId} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{imaging.name}</h3>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4 text-gray-400" />
              <span>{imaging.address}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4 text-gray-400" />
              <span>{imaging.phone}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <CameraIcon className="h-4 w-4 text-gray-400" />
              <span>Modalities: {imaging.modalities.join(', ')}</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {imaging.acceptsMedicare && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Accepts Medicare
              </span>
            )}
            
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              imaging.appointmentRequired ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
            }`}>
              {imaging.appointmentRequired ? 'Appointment Required' : 'Walk-ins Welcome'}
            </span>
            
            {imaging.preparationRequired && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Preparation Required
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderResults = () => {
    if (results.length === 0) {
      return (
        <div className="text-center py-12">
          <MagnifyingGlassIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No results found</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your search criteria</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {results.map((result) => {
          switch (searchType) {
            case 'providers':
              return renderProviderCard(result as ProviderNetworkData);
            case 'pharmacies':
              return renderPharmacyCard(result as PharmacyData);
            case 'labs':
              return renderLabCard(result as LabData);
            case 'imaging':
              return renderImagingCard(result as ImagingData);
            default:
              return null;
          }
        })}
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Provider Locator</h1>
              <p className="mt-1 text-sm text-gray-500">
                Find healthcare providers, pharmacies, labs, and imaging centers in your area
              </p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Controls */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Type</label>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="providers">Healthcare Providers</option>
                <option value="pharmacies">Pharmacies</option>
                <option value="labs">Laboratories</option>
                <option value="imaging">Imaging Centers</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {searchType === 'providers' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialty (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., Cardiology, Primary Care"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Radius</label>
              <select
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={5}>5 miles</option>
                <option value={10}>10 miles</option>
                <option value={25}>25 miles</option>
                <option value={50}>50 miles</option>
                <option value={100}>100 miles</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              onClick={handleSearch}
              disabled={!zipCode.trim() || loading}
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {getSearchTypeIcon(searchType)}
              <span>
                {loading ? 'Searching...' : `Search ${getSearchTypeLabel(searchType)}`}
              </span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {results.length > 0 ? `${results.length} ${getSearchTypeLabel(searchType)} Found` : 'Search Results'}
            </h2>
            
            {results.length > 0 && (
              <div className="text-sm text-gray-500">
                Showing results within {radius} miles of {zipCode}
              </div>
            )}
          </div>
          
          {renderResults()}
        </div>
      </div>
    </div>
  );
}
