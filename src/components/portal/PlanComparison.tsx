'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  TrashIcon,
  StarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface Plan {
  id: string;
  name: string;
  carrier: string;
  planType: string;
  premium: number;
  deductible: number;
  maxOutOfPocket: number;
  starRating?: number;
  includesPartD: boolean;
  dentalCoverage: boolean;
  visionCoverage: boolean;
  hearingCoverage: boolean;
  networkSize: string;
  requiresReferrals: boolean;
}

interface ComparisonPlan extends Plan {
  isSelected: boolean;
}

export default function PlanComparison() {
  const { user } = useAuth();
  const [availablePlans, setAvailablePlans] = useState<Plan[]>([]);
  const [selectedPlans, setSelectedPlans] = useState<ComparisonPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [planTypeFilter, setPlanTypeFilter] = useState<string>('all');
  const [carrierFilter, setCarrierFilter] = useState<string>('all');
  const [maxPremiumFilter, setMaxPremiumFilter] = useState<string>('');

  useEffect(() => {
    if (user) {
      loadAvailablePlans();
    }
  }, [user]);

  const loadAvailablePlans = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API call using MedicarePlanService
      // Mock data for now
      setAvailablePlans([
        {
          id: '1',
          name: 'Medicare Advantage Plus',
          carrier: 'Blue Cross Blue Shield',
          planType: 'HMO',
          premium: 0,
          deductible: 0,
          maxOutOfPocket: 6700,
          starRating: 4.5,
          includesPartD: true,
          dentalCoverage: true,
          visionCoverage: true,
          hearingCoverage: true,
          networkSize: 'Large',
          requiresReferrals: true
        },
        {
          id: '2',
          name: 'Medicare Choice',
          carrier: 'Aetna',
          planType: 'PPO',
          premium: 25,
          deductible: 100,
          maxOutOfPocket: 7500,
          starRating: 4.2,
          includesPartD: true,
          dentalCoverage: true,
          visionCoverage: true,
          hearingCoverage: false,
          networkSize: 'Large',
          requiresReferrals: false
        },
        {
          id: '3',
          name: 'Medicare Complete',
          carrier: 'Humana',
          planType: 'HMO',
          premium: 0,
          deductible: 0,
          maxOutOfPocket: 6000,
          starRating: 4.8,
          includesPartD: true,
          dentalCoverage: true,
          visionCoverage: true,
          hearingCoverage: true,
          networkSize: 'Medium',
          requiresReferrals: true
        },
        {
          id: '4',
          name: 'Medicare Flex',
          carrier: 'UnitedHealthcare',
          planType: 'PPO',
          premium: 45,
          deductible: 200,
          maxOutOfPocket: 8000,
          starRating: 4.0,
          includesPartD: true,
          dentalCoverage: false,
          visionCoverage: true,
          hearingCoverage: false,
          networkSize: 'Large',
          requiresReferrals: false
        }
      ]);
    } catch (error) {
      console.error('Error loading plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const togglePlanSelection = (planId: string) => {
    const plan = availablePlans.find(p => p.id === planId);
    if (!plan) return;

    const isAlreadySelected = selectedPlans.some(p => p.id === planId);
    
    if (isAlreadySelected) {
      setSelectedPlans(selectedPlans.filter(p => p.id !== planId));
    } else {
      if (selectedPlans.length < 4) { // Limit to 4 plans for comparison
        const comparisonPlan: ComparisonPlan = { ...plan, isSelected: true };
        setSelectedPlans([...selectedPlans, comparisonPlan]);
      }
    }
  };

  const removePlanFromComparison = (planId: string) => {
    setSelectedPlans(selectedPlans.filter(p => p.id !== planId));
  };

  const clearComparison = () => {
    setSelectedPlans([]);
  };

  const filteredPlans = availablePlans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.carrier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlanType = planTypeFilter === 'all' || plan.planType === planTypeFilter;
    const matchesCarrier = carrierFilter === 'all' || plan.carrier === carrierFilter;
    const matchesPremium = !maxPremiumFilter || plan.premium <= parseFloat(maxPremiumFilter);
    
    return matchesSearch && matchesPlanType && matchesCarrier && matchesPremium;
  });

  const getCoverageIcon = (hasCoverage: boolean) => {
    return hasCoverage ? 
      <CheckIcon className="h-4 w-4 text-green-500" /> : 
      <XMarkIcon className="h-4 w-4 text-red-500" />;
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
              <h1 className="text-3xl font-bold text-gray-900">Plan Comparison</h1>
              <p className="mt-1 text-sm text-gray-500">
                Compare Medicare plans to find the best fit for your needs
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {selectedPlans.length > 0 && (
                <button
                  onClick={clearComparison}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Clear All
                </button>
              )}
              <span className="text-sm text-gray-500">
                {selectedPlans.length}/4 plans selected
              </span>
            </div>
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
                placeholder="Search plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <FunnelIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={planTypeFilter}
                onChange={(e) => setPlanTypeFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Plan Types</option>
                <option value="HMO">HMO</option>
                <option value="PPO">PPO</option>
                <option value="PFFS">PFFS</option>
                <option value="SNP">SNP</option>
              </select>
            </div>
            
            <div className="relative">
              <FunnelIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={carrierFilter}
                onChange={(e) => setCarrierFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Carriers</option>
                <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                <option value="Aetna">Aetna</option>
                <option value="Humana">Humana</option>
                <option value="UnitedHealthcare">UnitedHealthcare</option>
              </select>
            </div>
            
            <div>
              <input
                type="number"
                placeholder="Max Premium"
                value={maxPremiumFilter}
                onChange={(e) => setMaxPremiumFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Selected Plans Comparison */}
        {selectedPlans.length > 0 && (
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Plan Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan Details
                    </th>
                    {selectedPlans.map((plan) => (
                      <th key={plan.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center justify-between">
                          <span>{plan.name}</span>
                          <button
                            onClick={() => removePlanFromComparison(plan.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Carrier</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">{plan.carrier}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Plan Type</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">{plan.planType}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Premium</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        ${plan.premium.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual Deductible</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        ${plan.deductible.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Max Out-of-Pocket</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        ${plan.maxOutOfPocket.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Star Rating</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        {plan.starRating ? (
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                            {plan.starRating}
                          </div>
                        ) : (
                          'N/A'
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Part D Coverage</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        {getCoverageIcon(plan.includesPartD)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Dental Coverage</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        {getCoverageIcon(plan.dentalCoverage)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Vision Coverage</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        {getCoverageIcon(plan.visionCoverage)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hearing Coverage</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        {getCoverageIcon(plan.hearingCoverage)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Network Size</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">{plan.networkSize}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Requires Referrals</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-sm text-gray-900">
                        {getCoverageIcon(!plan.requiresReferrals)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Available Plans */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Available Plans</h3>
            <p className="text-sm text-gray-500 mt-1">
              Select up to 4 plans to compare
            </p>
          </div>
          
          {filteredPlans.length === 0 ? (
            <div className="p-8 text-center">
              <ShieldCheckIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No plans found matching your criteria</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredPlans.map((plan) => {
                const isSelected = selectedPlans.some(p => p.id === plan.id);
                const isDisabled = !isSelected && selectedPlans.length >= 4;
                
                return (
                  <div key={plan.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => togglePlanSelection(plan.id)}
                          disabled={isDisabled}
                          className={`p-2 rounded-lg border-2 transition-colors ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50 text-blue-600'
                              : isDisabled
                              ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                              : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                          }`}
                        >
                          {isSelected ? (
                            <CheckIcon className="h-5 w-5" />
                          ) : (
                            <PlusIcon className="h-5 w-5" />
                          )}
                        </button>
                        
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{plan.name}</h4>
                          <p className="text-sm text-gray-600">{plan.carrier} • {plan.planType}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center">
                              <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                              ${plan.premium.toFixed(2)}/month
                            </span>
                            <span className="flex items-center">
                              <ShieldCheckIcon className="h-4 w-4 mr-1" />
                              ${plan.deductible.toFixed(2)} deductible
                            </span>
                            {plan.starRating && (
                              <span className="flex items-center">
                                <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                                {plan.starRating} stars
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          {plan.includesPartD && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Part D
                            </span>
                          )}
                          {plan.dentalCoverage && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Dental
                            </span>
                          )}
                          {plan.visionCoverage && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              Vision
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          Max OOP: ${plan.maxOutOfPocket.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
