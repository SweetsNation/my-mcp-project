'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PlanPreview {
  id: string;
  name: string;
  carrier: string;
  premium: number;
  deductible: number;
  maxOutOfPocket: number;
  dental: boolean;
  vision: boolean;
  hearing: boolean;
  fitness: boolean;
  rating: number;
}

const samplePlans: PlanPreview[] = [
  {
    id: '1',
    name: 'UnitedHealthcare AARP MedicareComplete',
    carrier: 'UnitedHealthcare',
    premium: 0,
    deductible: 0,
    maxOutOfPocket: 6700,
    dental: true,
    vision: true,
    hearing: true,
    fitness: true,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Humana HMO Value Plus',
    carrier: 'Humana',
    premium: 29,
    deductible: 395,
    maxOutOfPocket: 4900,
    dental: true,
    vision: true,
    hearing: false,
    fitness: true,
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Kaiser Permanente Senior Advantage',
    carrier: 'Kaiser Permanente',
    premium: 0,
    deductible: 0,
    maxOutOfPocket: 5900,
    dental: true,
    vision: true,
    hearing: true,
    fitness: false,
    rating: 4.8,
  },
];

export function PlanComparisonPreview() {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);

  const handlePlanSelect = (planId: string) => {
    if (selectedPlans.includes(planId)) {
      setSelectedPlans(selectedPlans.filter(id => id !== planId));
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, planId]);
    }
  };

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
    <div className="space-y-6">
      {/* Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {samplePlans.map((plan) => (
          <div
            key={plan.id}
            className={`card cursor-pointer transition-all duration-200 hover:shadow-xl ${
              selectedPlans.includes(plan.id) ? 'ring-2 ring-primary-500 bg-primary-50' : ''
            }`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.carrier}</p>
                <div className="flex items-center mt-1">
                  {renderStars(plan.rating)}
                  <span className="text-sm text-gray-600 ml-2">{plan.rating}/5</span>
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

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Medical Deductible:</span>
                <span className="font-medium">${plan.deductible.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Out-of-Pocket:</span>
                <span className="font-medium">${plan.maxOutOfPocket.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-2">Extra Benefits:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
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

            <div className="mt-4">
              <input
                type="checkbox"
                id={`plan-${plan.id}`}
                checked={selectedPlans.includes(plan.id)}
                onChange={() => handlePlanSelect(plan.id)}
                className="mr-2"
              />
              <label htmlFor={`plan-${plan.id}`} className="text-sm font-medium text-gray-700">
                Select to compare
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Compare Button */}
      {selectedPlans.length > 0 && (
        <div className="text-center">
          <Link href={`/medicare-advantage/compare?plans=${selectedPlans.join(',')}`}>
            <button className="btn-primary text-lg px-8 py-3">
              Compare Selected Plans ({selectedPlans.length})
            </button>
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            Select up to 3 plans to compare side by side
          </p>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Need Help Choosing?
        </h3>
        <p className="text-gray-600 mb-4">
          Our licensed agents are here to help you find the perfect Medicare Advantage plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:331-343-2584"
            className="btn-primary inline-block text-center"
          >
            Call 331-343-2584
          </a>
          <Link 
            href="/contact"
            className="btn-secondary inline-block text-center"
          >
            Request Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}