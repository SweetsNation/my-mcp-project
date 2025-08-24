'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MedicarePlan {
  id: string;
  name: string;
  carrier: string;
  type: 'HMO' | 'PPO' | 'HMO-POS' | 'PFFS';
  premium: number;
  deductible: number;
  maxOutOfPocket: number;
  dental: boolean;
  dentalLimit: number;
  vision: boolean;
  visionLimit: number;
  hearing: boolean;
  hearingLimit: number;
  fitness: boolean;
  transportation: boolean;
  overTheCounter: boolean;
  otcLimit: number;
  rating: number;
  doctorCopay: number;
  specialistCopay: number;
  hospitalCopay: number;
  urgentCareCopay: number;
  emergencyRoomCopay: number;
}

const samplePlans: MedicarePlan[] = [
  {
    id: '1',
    name: 'UnitedHealthcare AARP MedicareComplete Plan 1 (HMO)',
    carrier: 'UnitedHealthcare',
    type: 'HMO',
    premium: 0,
    deductible: 0,
    maxOutOfPocket: 6700,
    dental: true,
    dentalLimit: 3000,
    vision: true,
    visionLimit: 200,
    hearing: true,
    hearingLimit: 2500,
    fitness: true,
    transportation: true,
    overTheCounter: true,
    otcLimit: 120,
    rating: 4.5,
    doctorCopay: 0,
    specialistCopay: 35,
    hospitalCopay: 300,
    urgentCareCopay: 50,
    emergencyRoomCopay: 120,
  },
  {
    id: '2',
    name: 'Humana HMO Value Plus',
    carrier: 'Humana',
    type: 'HMO',
    premium: 29,
    deductible: 395,
    maxOutOfPocket: 4900,
    dental: true,
    dentalLimit: 1000,
    vision: true,
    visionLimit: 150,
    hearing: false,
    hearingLimit: 0,
    fitness: true,
    transportation: false,
    overTheCounter: true,
    otcLimit: 75,
    rating: 4.2,
    doctorCopay: 10,
    specialistCopay: 50,
    hospitalCopay: 395,
    urgentCareCopay: 35,
    emergencyRoomCopay: 150,
  },
  {
    id: '3',
    name: 'Kaiser Permanente Senior Advantage (HMO)',
    carrier: 'Kaiser Permanente',
    type: 'HMO',
    premium: 0,
    deductible: 0,
    maxOutOfPocket: 5900,
    dental: true,
    dentalLimit: 2000,
    vision: true,
    visionLimit: 250,
    hearing: true,
    hearingLimit: 3000,
    fitness: false,
    transportation: true,
    overTheCounter: false,
    otcLimit: 0,
    rating: 4.8,
    doctorCopay: 20,
    specialistCopay: 40,
    hospitalCopay: 0,
    urgentCareCopay: 40,
    emergencyRoomCopay: 100,
  },
  {
    id: '4',
    name: 'Anthem MediBlue Plus (PPO)',
    carrier: 'Anthem',
    type: 'PPO',
    premium: 58,
    deductible: 0,
    maxOutOfPocket: 7550,
    dental: true,
    dentalLimit: 1500,
    vision: true,
    visionLimit: 200,
    hearing: true,
    hearingLimit: 1500,
    fitness: true,
    transportation: true,
    overTheCounter: true,
    otcLimit: 100,
    rating: 4.1,
    doctorCopay: 5,
    specialistCopay: 45,
    hospitalCopay: 0,
    urgentCareCopay: 55,
    emergencyRoomCopay: 130,
  },
];

export function PlanComparisonTool() {
  const [selectedPlans, setSelectedPlans] = useState<MedicarePlan[]>([]);
  const [allPlans] = useState<MedicarePlan[]>(samplePlans);
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('premium');
  const [zipCode, setZipCode] = useState<string>('');

  const handlePlanSelect = (plan: MedicarePlan) => {
    if (selectedPlans.find(p => p.id === plan.id)) {
      setSelectedPlans(selectedPlans.filter(p => p.id !== plan.id));
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  const filteredPlans = allPlans.filter(plan => 
    filterType === 'all' || plan.type === filterType
  );

  const sortedPlans = [...filteredPlans].sort((a, b) => {
    switch (sortBy) {
      case 'premium':
        return a.premium - b.premium;
      case 'rating':
        return b.rating - a.rating;
      case 'maxOutOfPocket':
        return a.maxOutOfPocket - b.maxOutOfPocket;
      default:
        return 0;
    }
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="Enter ZIP code"
              className="form-input"
              maxLength={5}
            />
          </div>
          <div>
            <label htmlFor="planType" className="block text-sm font-medium text-gray-700 mb-2">
              Plan Type
            </label>
            <select
              id="planType"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="form-input"
            >
              <option value="all">All Types</option>
              <option value="HMO">HMO</option>
              <option value="PPO">PPO</option>
              <option value="HMO-POS">HMO-POS</option>
              <option value="PFFS">PFFS</option>
            </select>
          </div>
          <div>
            <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-input"
            >
              <option value="premium">Monthly Premium</option>
              <option value="rating">Star Rating</option>
              <option value="maxOutOfPocket">Max Out-of-Pocket</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              className="btn-primary w-full"
              onClick={() => {/* Implement search functionality */}}
            >
              Update Results
            </button>
          </div>
        </div>
      </div>

      {/* Selected Plans Comparison */}
      <AnimatePresence>
        {selectedPlans.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-primary-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                Comparing {selectedPlans.length} Plan{selectedPlans.length !== 1 ? 's' : ''}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan Details
                    </th>
                    {selectedPlans.map((plan) => (
                      <th key={plan.id} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Monthly Premium</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        <span className="text-2xl font-bold text-primary-600">
                          ${plan.premium}
                        </span>
                        {plan.premium === 0 && (
                          <span className="block text-xs text-green-600 font-medium">$0 Premium</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Star Rating</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        <div className="flex items-center">
                          {renderStars(plan.rating)}
                          <span className="ml-2 text-sm text-gray-600">{plan.rating}/5</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Medical Deductible</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        ${plan.deductible.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Max Out-of-Pocket</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        ${plan.maxOutOfPocket.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Doctor Visit Copay</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        ${plan.doctorCopay}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Specialist Copay</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        ${plan.specialistCopay}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Dental Coverage</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        {plan.dental ? (
                          <div>
                            <span className="text-green-600 font-medium">✓ Included</span>
                            <div className="text-xs text-gray-600">Up to ${plan.dentalLimit}/year</div>
                          </div>
                        ) : (
                          <span className="text-red-600">✗ Not included</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Vision Coverage</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        {plan.vision ? (
                          <div>
                            <span className="text-green-600 font-medium">✓ Included</span>
                            <div className="text-xs text-gray-600">Up to ${plan.visionLimit}/year</div>
                          </div>
                        ) : (
                          <span className="text-red-600">✗ Not included</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Hearing Aids</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        {plan.hearing ? (
                          <div>
                            <span className="text-green-600 font-medium">✓ Included</span>
                            <div className="text-xs text-gray-600">Up to ${plan.hearingLimit}/year</div>
                          </div>
                        ) : (
                          <span className="text-red-600">✗ Not included</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Fitness Benefits</td>
                    {selectedPlans.map((plan) => (
                      <td key={plan.id} className="px-4 py-3 text-sm">
                        {plan.fitness ? (
                          <span className="text-green-600 font-medium">✓ Included</span>
                        ) : (
                          <span className="text-red-600">✗ Not included</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <button
                onClick={() => setSelectedPlans([])}
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                Clear Comparison
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Plan Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedPlans.map((plan) => (
          <motion.div
            key={plan.id}
            className={`card cursor-pointer transition-all duration-200 hover:shadow-xl ${
              selectedPlans.find(p => p.id === plan.id) ? 'ring-2 ring-primary-500 bg-primary-50' : ''
            }`}
            onClick={() => handlePlanSelect(plan)}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Plan Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.carrier}</p>
                <div className="flex items-center mt-1">
                  {renderStars(plan.rating)}
                  <span className="text-sm text-gray-600 ml-2">{plan.rating}/5</span>
                  <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {plan.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">
                  ${plan.premium}<span className="text-sm font-normal text-gray-600">/mo</span>
                </div>
                {plan.premium === 0 && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    $0 Premium
                  </span>
                )}
              </div>
            </div>

            {/* Plan Details */}
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Medical Deductible:</span>
                <span className="font-medium">${plan.deductible.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Out-of-Pocket:</span>
                <span className="font-medium">${plan.maxOutOfPocket.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Doctor Visit:</span>
                <span className="font-medium">${plan.doctorCopay} copay</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Specialist:</span>
                <span className="font-medium">${plan.specialistCopay} copay</span>
              </div>
            </div>

            {/* Extra Benefits */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-2">Extra Benefits:</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className={`flex items-center ${plan.dental ? 'text-green-600' : 'text-gray-400'}`}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dental
                </div>
                <div className={`flex items-center ${plan.vision ? 'text-green-600' : 'text-gray-400'}`}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Vision
                </div>
                <div className={`flex items-center ${plan.hearing ? 'text-green-600' : 'text-gray-400'}`}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Hearing Aids
                </div>
                <div className={`flex items-center ${plan.fitness ? 'text-green-600' : 'text-gray-400'}`}>
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fitness
                </div>
              </div>
            </div>

            {/* Selection Checkbox */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`plan-${plan.id}`}
                    checked={selectedPlans.find(p => p.id === plan.id) !== undefined}
                    onChange={() => handlePlanSelect(plan)}
                    className="mr-2"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label htmlFor={`plan-${plan.id}`} className="text-sm font-medium text-gray-700">
                    Select to compare
                  </label>
                </div>
                <button 
                  onClick={() => {
                    // TODO: Implement plan details modal
                    alert('Plan details modal coming soon! Call 331-343-2584 for immediate assistance.');
                  }}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Help Section */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Need Help Choosing the Right Plan?
        </h3>
        <p className="text-gray-600 mb-4">
          Our licensed Medicare specialists are here to help you find the perfect plan for your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:331-343-2584"
            className="btn-primary inline-block text-center"
          >
            Call 331-343-2584
          </a>
          <a 
            href="/contact"
            className="btn-secondary inline-block text-center"
          >
            Schedule Free Consultation
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Free service • No obligation • Licensed agents available 7 days a week
        </p>
      </div>
    </div>
  );
}