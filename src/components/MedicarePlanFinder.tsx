'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Plan {
  id: string;
  name: string;
  type: 'Medicare Advantage' | 'Part D' | 'Medigap';
  premium: number;
  deductible: number;
  drugCoverage: boolean;
  dentalCoverage: boolean;
  visionCoverage: boolean;
  fitnessCoverage: boolean;
  starRating: number;
  networkType: 'HMO' | 'PPO' | 'PFFS' | 'SNP';
  monthlyPremium: number;
  annualDeductible: number;
  copays: {
    primaryCare: number;
    specialist: number;
    urgentCare: number;
    emergency: number;
  };
}

export function MedicarePlanFinder() {
  const [zipCode, setZipCode] = useState('');
  const [planType, setPlanType] = useState<'all' | 'Medicare Advantage' | 'Part D' | 'Medigap'>('all');
  const [showResults, setShowResults] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    maxPremium: 100,
    hasDrugCoverage: false,
    hasDentalCoverage: false,
    hasVisionCoverage: false,
    hasFitnessCoverage: false,
    minStarRating: 3,
  });

  // Mock data - in production this would come from an API
  const mockPlans: Plan[] = [
    {
      id: '1',
      name: 'Aetna Medicare Advantage Choice',
      type: 'Medicare Advantage',
      premium: 0,
      deductible: 0,
      drugCoverage: true,
      dentalCoverage: true,
      visionCoverage: true,
      fitnessCoverage: true,
      starRating: 4.5,
      networkType: 'PPO',
      monthlyPremium: 0,
      annualDeductible: 0,
      copays: { primaryCare: 0, specialist: 25, urgentCare: 25, emergency: 0 }
    },
    {
      id: '2',
      name: 'Humana Gold Plus HMO',
      type: 'Medicare Advantage',
      premium: 15,
      deductible: 0,
      drugCoverage: true,
      dentalCoverage: true,
      visionCoverage: true,
      fitnessCoverage: true,
      starRating: 4.2,
      networkType: 'HMO',
      monthlyPremium: 15,
      annualDeductible: 0,
      copays: { primaryCare: 0, specialist: 20, urgentCare: 20, emergency: 0 }
    },
    {
      id: '3',
      name: 'UnitedHealthcare Medicare Advantage',
      type: 'Medicare Advantage',
      premium: 0,
      deductible: 0,
      drugCoverage: true,
      dentalCoverage: false,
      visionCoverage: true,
      fitnessCoverage: true,
      starRating: 4.0,
      networkType: 'HMO',
      monthlyPremium: 0,
      annualDeductible: 0,
      copays: { primaryCare: 0, specialist: 30, urgentCare: 30, emergency: 0 }
    }
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPlans(mockPlans);
      setShowResults(true);
      setLoading(false);
    }
  };

  const filteredPlans = plans.filter(plan => {
    if (planType !== 'all' && plan.type !== planType) return false;
    if (plan.monthlyPremium > filters.maxPremium) return false;
    if (filters.hasDrugCoverage && !plan.drugCoverage) return false;
    if (filters.hasDentalCoverage && !plan.dentalCoverage) return false;
    if (filters.hasVisionCoverage && !plan.visionCoverage) return false;
    if (filters.hasFitnessCoverage && !plan.fitnessCoverage) return false;
    if (plan.starRating < filters.minStarRating) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Medicare Plans in Your Area
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare Medicare Advantage, Part D, and Medigap plans side by side. 
          Find the perfect plan for your healthcare needs and budget.
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ZIP Code Input */}
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                placeholder="Enter 5-digit ZIP code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                maxLength={5}
                required
              />
            </div>

            {/* Plan Type Selection */}
            <div>
              <label htmlFor="planType" className="block text-sm font-medium text-gray-700 mb-2">
                Plan Type
              </label>
              <select
                id="planType"
                value={planType}
                onChange={(e) => setPlanType(e.target.value as any)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              >
                <option value="all">All Plan Types</option>
                <option value="Medicare Advantage">Medicare Advantage</option>
                <option value="Part D">Part D (Prescription Drug)</option>
                <option value="Medigap">Medigap (Supplemental)</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading || zipCode.length !== 5}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  Finding Plans...
                </div>
              ) : (
                'Find Plans'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Filters */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Plans</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Monthly Premium: ${filters.maxPremium}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={filters.maxPremium}
                  onChange={(e) => setFilters({...filters, maxPremium: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="drugCoverage"
                  checked={filters.hasDrugCoverage}
                  onChange={(e) => setFilters({...filters, hasDrugCoverage: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="drugCoverage" className="ml-2 text-sm text-gray-700">
                  Drug Coverage
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="dentalCoverage"
                  checked={filters.hasDentalCoverage}
                  onChange={(e) => setFilters({...filters, hasDentalCoverage: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="dentalCoverage" className="ml-2 text-sm text-gray-700">
                  Dental Coverage
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="visionCoverage"
                  checked={filters.hasVisionCoverage}
                  onChange={(e) => setFilters({...filters, hasVisionCoverage: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="visionCoverage" className="ml-2 text-sm text-gray-700">
                  Vision Coverage
                </label>
              </div>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid gap-6">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Plan Info */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-2">{plan.type}</p>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500 mr-2">★</span>
                        <span className="text-gray-700">{plan.starRating} Star Rating</span>
                      </div>
                      <p className="text-gray-600">{plan.networkType} Network</p>
                    </div>

                    {/* Costs */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Monthly Costs</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monthly Premium:</span>
                          <span className="font-semibold text-green-600">
                            ${plan.monthlyPremium === 0 ? '0' : plan.monthlyPremium}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Annual Deductible:</span>
                          <span className="font-semibold">
                            ${plan.annualDeductible === 0 ? '0' : plan.annualDeductible}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Coverage & Actions */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Coverage</h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center">
                          <span className={`w-3 h-3 rounded-full mr-2 ${plan.drugCoverage ? 'bg-green-500' : 'bg-red-500'}`}></span>
                          <span className="text-sm">Drug Coverage</span>
                        </div>
                        <div className="flex items-center">
                          <span className={`w-3 h-3 rounded-full mr-2 ${plan.dentalCoverage ? 'bg-green-500' : 'bg-red-500'}`}></span>
                          <span className="text-sm">Dental Coverage</span>
                        </div>
                        <div className="flex items-center">
                          <span className={`w-3 h-3 rounded-full mr-2 ${plan.visionCoverage ? 'bg-green-500' : 'bg-red-500'}`}></span>
                          <span className="text-sm">Vision Coverage</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          View Details
                        </button>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No plans found matching your criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> This tool provides plan information for comparison purposes only. 
              For official plan details, visit <a href="https://www.medicare.gov/plan-compare/" target="_blank" rel="noopener noreferrer" className="underline">Medicare.gov</a>. 
              Contact a licensed insurance agent for personalized assistance.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
