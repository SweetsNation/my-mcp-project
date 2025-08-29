'use client';

import Link from 'next/link';
import { useState } from 'react';

interface GeographicLocation {
  id: string;
  name: string;
  type: 'region' | 'state' | 'county';
  href: string;
  description: string;
  population?: string;
  enrollmentRate?: string;
  icon: string;
  color: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  parentId?: string;
  children?: GeographicLocation[];
  features?: string[];
  marketData?: {
    totalEnrollment?: number;
    medicareAdvantageEnrollment?: number;
    penetrationRate?: number;
    competitorCount?: number;
    averageRating?: number;
  };
}

interface GeographicGroupingProps {
  serviceType: 'medicare-supplement' | 'medicare-advantage' | 'health-marketplace' | 'all';
  currentLocation?: string;
  currentRegion?: string;
  currentState?: string;
  currentCounty?: string;
  showMap?: boolean;
  showMarketData?: boolean;
  layout?: 'grid' | 'list' | 'hierarchical' | 'map';
  maxItems?: number;
  groupBy?: 'region' | 'state' | 'county';
}

// Geographic data organized by regions
const GEOGRAPHIC_DATA: Record<string, GeographicLocation[]> = {
  'southeast': [
    {
      id: 'southeast',
      name: 'Southeast Region',
      type: 'region',
      href: '/regions/southeast',
      description: 'Southeastern United States including Florida, Georgia, Alabama, and South Carolina',
      population: '45.2M',
      icon: '🌴',
      color: 'green',
      children: [
        {
          id: 'florida',
          name: 'Florida',
          type: 'state',
          href: '/states/florida',
          description: 'Sunshine State with high Medicare enrollment and diverse healthcare options',
          population: '21.5M',
          enrollmentRate: '58.2%',
          icon: '🌞',
          color: 'orange',
          parentId: 'southeast',
          marketData: {
            totalEnrollment: 4200000,
            medicareAdvantageEnrollment: 2444400,
            penetrationRate: 58.2,
            competitorCount: 45,
            averageRating: 4.1
          },
          children: [
            {
              id: 'miami-dade-fl',
              name: 'Miami-Dade County',
              type: 'county',
              href: '/medicare-advantage/miami-dade-florida',
              description: 'Miami area with diverse population and comprehensive healthcare networks',
              population: '2.7M',
              enrollmentRate: '62.1%',
              icon: '🏖️',
              color: 'blue',
              parentId: 'florida',
              coordinates: { lat: 25.7617, lng: -80.1918 },
              features: ['Bilingual support', 'Diverse provider networks', 'Beach access'],
              marketData: {
                totalEnrollment: 450000,
                medicareAdvantageEnrollment: 279450,
                penetrationRate: 62.1,
                competitorCount: 28,
                averageRating: 4.2
              }
            },
            {
              id: 'orange-county-fl',
              name: 'Orange County',
              type: 'county',
              href: '/medicare-advantage/orange-county-florida',
              description: 'Orlando area with theme parks and growing retiree population',
              population: '1.4M',
              enrollmentRate: '55.8%',
              icon: '🎢',
              color: 'purple',
              parentId: 'florida',
              coordinates: { lat: 28.5383, lng: -81.3792 },
              features: ['Theme park benefits', 'Tourist-friendly', 'Growing population'],
              marketData: {
                totalEnrollment: 280000,
                medicareAdvantageEnrollment: 156240,
                penetrationRate: 55.8,
                competitorCount: 22,
                averageRating: 4.0
              }
            }
          ]
        },
        {
          id: 'georgia',
          name: 'Georgia',
          type: 'state',
          href: '/states/georgia',
          description: 'Peach State with Atlanta metro and diverse healthcare options',
          population: '10.7M',
          enrollmentRate: '52.4%',
          icon: '🍑',
          color: 'red',
          parentId: 'southeast',
          marketData: {
            totalEnrollment: 1800000,
            medicareAdvantageEnrollment: 943200,
            penetrationRate: 52.4,
            competitorCount: 38,
            averageRating: 4.0
          },
          children: [
            {
              id: 'fulton-county-ga',
              name: 'Fulton County',
              type: 'county',
              href: '/medicare-advantage/fulton-county-georgia',
              description: 'Atlanta metro with major healthcare systems and diverse population',
              population: '1.1M',
              enrollmentRate: '60.0%',
              icon: '🏙️',
              color: 'blue',
              parentId: 'georgia',
              coordinates: { lat: 33.7490, lng: -84.3880 },
              features: ['Emory Healthcare', 'Piedmont Healthcare', 'Diverse population'],
              marketData: {
                totalEnrollment: 156700,
                medicareAdvantageEnrollment: 94020,
                penetrationRate: 60.0,
                competitorCount: 25,
                averageRating: 4.1
              }
            },
            {
              id: 'dekalb-county-ga',
              name: 'DeKalb County',
              type: 'county',
              href: '/medicare-advantage/dekalb-county-georgia',
              description: 'Atlanta suburb with growing Medicare population',
              population: '760K',
              enrollmentRate: '48.5%',
              icon: '🌳',
              color: 'green',
              parentId: 'georgia',
              coordinates: { lat: 33.7712, lng: -84.2950 },
              features: ['Suburban setting', 'Growing population', 'Healthcare access'],
              marketData: {
                totalEnrollment: 120000,
                medicareAdvantageEnrollment: 58200,
                penetrationRate: 48.5,
                competitorCount: 18,
                averageRating: 3.9
              }
            }
          ]
        }
      ]
    }
  ],
  'mid-atlantic': [
    {
      id: 'mid-atlantic',
      name: 'Mid-Atlantic Region',
      type: 'region',
      href: '/regions/mid-atlantic',
      description: 'Mid-Atlantic states including Virginia, North Carolina, and Maryland',
      population: '32.1M',
      icon: '🏛️',
      color: 'blue',
      children: [
        {
          id: 'virginia',
          name: 'Virginia',
          type: 'state',
          href: '/states/virginia',
          description: 'Old Dominion with Northern Virginia tech corridor and healthcare innovation',
          population: '8.6M',
          enrollmentRate: '45.3%',
          icon: '🏛️',
          color: 'blue',
          parentId: 'mid-atlantic',
          marketData: {
            totalEnrollment: 1200000,
            medicareAdvantageEnrollment: 543600,
            penetrationRate: 45.3,
            competitorCount: 42,
            averageRating: 4.2
          },
          children: [
            {
              id: 'fairfax-county-va',
              name: 'Fairfax County',
              type: 'county',
              href: '/medicare-advantage/fairfax-county-virginia',
              description: 'Northern Virginia with high income and excellent healthcare',
              population: '1.1M',
              enrollmentRate: '31.73%',
              icon: '💼',
              color: 'blue',
              parentId: 'virginia',
              coordinates: { lat: 38.8462, lng: -77.3064 },
              features: ['High income', 'Tech corridor', 'Inova Health System'],
              marketData: {
                totalEnrollment: 112000,
                medicareAdvantageEnrollment: 35538,
                penetrationRate: 31.73,
                competitorCount: 16,
                averageRating: 4.3
              }
            },
            {
              id: 'prince-william-county-va',
              name: 'Prince William County',
              type: 'county',
              href: '/medicare-advantage/prince-william-county-virginia',
              description: 'Growing Northern Virginia county with diverse population',
              population: '470K',
              enrollmentRate: '42.1%',
              icon: '🏘️',
              color: 'green',
              parentId: 'virginia',
              coordinates: { lat: 38.8318, lng: -77.2881 },
              features: ['Growing population', 'Mixed demographics', 'Suburban area'],
              marketData: {
                totalEnrollment: 65400,
                medicareAdvantageEnrollment: 27533,
                penetrationRate: 42.1,
                competitorCount: 18,
                averageRating: 4.0
              }
            }
          ]
        },
        {
          id: 'north-carolina',
          name: 'North Carolina',
          type: 'state',
          href: '/states/north-carolina',
          description: 'Tar Heel State with Research Triangle and healthcare innovation',
          population: '10.4M',
          enrollmentRate: '58.3%',
          icon: '🌲',
          color: 'green',
          parentId: 'mid-atlantic',
          marketData: {
            totalEnrollment: 1800000,
            medicareAdvantageEnrollment: 1049400,
            penetrationRate: 58.3,
            competitorCount: 45,
            averageRating: 4.1
          },
          children: [
            {
              id: 'wake-county-nc',
              name: 'Wake County',
              type: 'county',
              href: '/medicare-advantage/wake-county-north-carolina',
              description: 'Raleigh and Research Triangle with Duke and UNC healthcare',
              population: '1.1M',
              enrollmentRate: '55.1%',
              icon: '🎓',
              color: 'blue',
              parentId: 'north-carolina',
              coordinates: { lat: 35.7796, lng: -78.6382 },
              features: ['Duke Health', 'UNC REX Healthcare', 'Tech innovation'],
              marketData: {
                totalEnrollment: 78900,
                medicareAdvantageEnrollment: 43474,
                penetrationRate: 55.1,
                competitorCount: 22,
                averageRating: 4.2
              }
            },
            {
              id: 'mecklenburg-county-nc',
              name: 'Mecklenburg County',
              type: 'county',
              href: '/medicare-advantage/mecklenburg-county-north-carolina',
              description: 'Charlotte metro with banking center and healthcare systems',
              population: '1.1M',
              enrollmentRate: '58.3%',
              icon: '🏦',
              color: 'purple',
              parentId: 'north-carolina',
              coordinates: { lat: 35.2271, lng: -80.8431 },
              features: ['Banking center', 'Atrium Health', 'Urban diversity'],
              marketData: {
                totalEnrollment: 145600,
                medicareAdvantageEnrollment: 84885,
                penetrationRate: 58.3,
                competitorCount: 24,
                averageRating: 4.1
              }
            }
          ]
        }
      ]
    }
  ],
  'southwest': [
    {
      id: 'southwest',
      name: 'Southwest Region',
      type: 'region',
      href: '/regions/southwest',
      description: 'Southwestern states including Texas, Arizona, and New Mexico',
      population: '38.9M',
      icon: '🌵',
      color: 'orange',
      children: [
        {
          id: 'texas',
          name: 'Texas',
          type: 'state',
          href: '/states/texas',
          description: 'Lone Star State with major metro areas and diverse healthcare options',
          population: '29.1M',
          enrollmentRate: '54.7%',
          icon: '🤠',
          color: 'red',
          parentId: 'southwest',
          marketData: {
            totalEnrollment: 4200000,
            medicareAdvantageEnrollment: 2297400,
            penetrationRate: 54.7,
            competitorCount: 52,
            averageRating: 4.0
          },
          children: [
            {
              id: 'harris-county-tx',
              name: 'Harris County',
              type: 'county',
              href: '/medicare-supplement-harris-county-texas',
              description: 'Houston area with Texas Medical Center and diverse population',
              population: '4.7M',
              enrollmentRate: '56.2%',
              icon: '🏥',
              color: 'blue',
              parentId: 'texas',
              coordinates: { lat: 29.7604, lng: -95.3698 },
              features: ['Texas Medical Center', 'Diverse population', 'Major healthcare'],
              marketData: {
                totalEnrollment: 650000,
                medicareAdvantageEnrollment: 365300,
                penetrationRate: 56.2,
                competitorCount: 35,
                averageRating: 4.1
              }
            },
            {
              id: 'dallas-county-tx',
              name: 'Dallas County',
              type: 'county',
              href: '/medicare-supplement-dallas-county-texas',
              description: 'Dallas-Fort Worth metro with major healthcare systems',
              population: '2.6M',
              enrollmentRate: '52.8%',
              icon: '🤠',
              color: 'green',
              parentId: 'texas',
              coordinates: { lat: 32.7767, lng: -96.7970 },
              features: ['DFW metro', 'Major healthcare', 'Business center'],
              marketData: {
                totalEnrollment: 380000,
                medicareAdvantageEnrollment: 200640,
                penetrationRate: 52.8,
                competitorCount: 28,
                averageRating: 4.0
              }
            }
          ]
        }
      ]
    }
  ],
  'west-coast': [
    {
      id: 'west-coast',
      name: 'West Coast Region',
      type: 'region',
      href: '/regions/west-coast',
      description: 'West Coast states including California, Oregon, and Washington',
      population: '52.3M',
      icon: '🌊',
      color: 'blue',
      children: [
        {
          id: 'california',
          name: 'California',
          type: 'state',
          href: '/states/california',
          description: 'Golden State with diverse population and healthcare innovation',
          population: '39.5M',
          enrollmentRate: '61.2%',
          icon: '🌴',
          color: 'gold',
          parentId: 'west-coast',
          marketData: {
            totalEnrollment: 6500000,
            medicareAdvantageEnrollment: 3978000,
            penetrationRate: 61.2,
            competitorCount: 65,
            averageRating: 4.2
          },
          children: [
            {
              id: 'orange-county-ca',
              name: 'Orange County',
              type: 'county',
              href: '/medicare-supplement-orange-county-california',
              description: 'Orange County with community rating and beach access',
              population: '3.2M',
              enrollmentRate: '58.9%',
              icon: '🏖️',
              color: 'orange',
              parentId: 'california',
              coordinates: { lat: 33.7175, lng: -117.8311 },
              features: ['Beach access', 'Community rating', 'Diverse population'],
              marketData: {
                totalEnrollment: 420000,
                medicareAdvantageEnrollment: 247380,
                penetrationRate: 58.9,
                competitorCount: 32,
                averageRating: 4.1
              }
            },
            {
              id: 'los-angeles-county-ca',
              name: 'Los Angeles County',
              type: 'county',
              href: '/medicare-supplement-los-angeles-county',
              description: 'LA area with diverse population and major healthcare systems',
              population: '10.0M',
              enrollmentRate: '62.4%',
              icon: '🌴',
              color: 'blue',
              parentId: 'california',
              coordinates: { lat: 34.0522, lng: -118.2437 },
              features: ['Diverse population', 'Major healthcare', 'Entertainment'],
              marketData: {
                totalEnrollment: 1200000,
                medicareAdvantageEnrollment: 748800,
                penetrationRate: 62.4,
                competitorCount: 45,
                averageRating: 4.2
              }
            }
          ]
        }
      ]
    }
  ]
};

export default function GeographicGrouping({
  serviceType = 'all',
  currentLocation,
  currentRegion,
  currentState,
  currentCounty,
  showMap = false,
  showMarketData = false,
  layout = 'grid',
  maxItems = 12,
  groupBy = 'region'
}: GeographicGroupingProps) {
  const [selectedRegion, setSelectedRegion] = useState(currentRegion || '');
  const [selectedState, setSelectedState] = useState(currentState || '');
  const [viewMode, setViewMode] = useState<'regions' | 'states' | 'counties'>('regions');

  // Get all regions
  const allRegions = Object.keys(GEOGRAPHIC_DATA).map(regionKey => {
    const regionData = GEOGRAPHIC_DATA[regionKey];
    return regionData.find(item => item.type === 'region')!;
  });

  // Get states for selected region
  const getStatesForRegion = (regionId: string) => {
    const regionData = GEOGRAPHIC_DATA[regionId];
    if (!regionData) return [];
    return regionData.filter(item => item.type === 'state');
  };

  // Get counties for selected state
  const getCountiesForState = (stateId: string) => {
    const allStates = Object.values(GEOGRAPHIC_DATA).flat().filter(item => item.type === 'state');
    const state = allStates.find(s => s.id === stateId);
    return state?.children || [];
  };

  // Filter by service type
  const filterByServiceType = (locations: GeographicLocation[]) => {
    if (serviceType === 'all') return locations;
    
    return locations.filter(location => {
      // This would be enhanced with actual service availability data
      return true; // For now, show all locations
    });
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
      'green': 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
      'orange': 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200',
      'red': 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
      'purple': 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200',
      'gold': 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200';
  };

  const renderLocationCard = (location: GeographicLocation) => (
    <Link
      key={location.id}
      href={location.href}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 p-6"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 ${getColorClasses(location.color)} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
            {location.icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClasses(location.color)}`}>
              {location.type.charAt(0).toUpperCase() + location.type.slice(1)}
            </span>
            {location.population && (
              <span className="text-sm text-gray-500">{location.population}</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {location.name}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            {location.description}
          </p>
          
          {showMarketData && location.marketData && (
            <div className="mb-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Enrollment:</span>
                  <span className="font-medium ml-1">
                    {location.marketData.totalEnrollment?.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Penetration:</span>
                  <span className="font-medium ml-1">
                    {location.marketData.penetrationRate}%
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Competitors:</span>
                  <span className="font-medium ml-1">
                    {location.marketData.competitorCount}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Rating:</span>
                  <span className="font-medium ml-1">
                    ⭐ {location.marketData.averageRating}
                  </span>
                </div>
              </div>
            </div>
          )}

          {location.features && location.features.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {location.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
                {location.features.length > 3 && (
                  <span className="text-xs text-gray-500">+{location.features.length - 3} more</span>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-800">
            Explore {location.type}
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );

  const renderHierarchicalView = () => (
    <div className="space-y-8">
      {allRegions.map(region => (
        <div key={region.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${getColorClasses(region.color)} rounded-lg flex items-center justify-center text-3xl`}>
                {region.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{region.name}</h3>
                <p className="text-gray-600">{region.description}</p>
              </div>
            </div>
            <Link
              href={region.href}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Region
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.children?.map(state => (
              <div key={state.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 ${getColorClasses(state.color)} rounded-lg flex items-center justify-center text-xl`}>
                    {state.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{state.name}</h4>
                    <p className="text-sm text-gray-500">{state.population}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{state.description}</p>
                
                {state.children && state.children.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500">Top Counties:</p>
                    {state.children.slice(0, 3).map(county => (
                      <Link
                        key={county.id}
                        href={county.href}
                        className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {county.name} ({county.population})
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🌍 Geographic Coverage & Market Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive coverage across regions, states, and counties with detailed market insights and enrollment data.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setViewMode('regions')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'regions' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Regions
            </button>
            <button
              onClick={() => setViewMode('states')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'states' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              States
            </button>
            <button
              onClick={() => setViewMode('counties')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'counties' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Counties
            </button>
          </div>
        </div>

        {/* Content */}
        {layout === 'hierarchical' ? (
          renderHierarchicalView()
        ) : (
          <div>
            {viewMode === 'regions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterByServiceType(allRegions).slice(0, maxItems).map(renderLocationCard)}
              </div>
            )}

            {viewMode === 'states' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterByServiceType(
                  Object.values(GEOGRAPHIC_DATA)
                    .flat()
                    .filter(item => item.type === 'state')
                ).slice(0, maxItems).map(renderLocationCard)}
              </div>
            )}

            {viewMode === 'counties' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterByServiceType(
                  Object.values(GEOGRAPHIC_DATA)
                    .flat()
                    .filter(item => item.type === 'state')
                    .flatMap(state => state.children || [])
                ).slice(0, maxItems).map(renderLocationCard)}
              </div>
            )}
          </div>
        )}

        {/* Market Summary */}
        {showMarketData && (
          <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📊 Market Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
                <div className="text-sm text-gray-600">Counties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15.2M</div>
                <div className="text-sm text-gray-600">Total Enrollment</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
