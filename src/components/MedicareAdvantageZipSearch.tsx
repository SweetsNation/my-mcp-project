'use client';

import { useState } from 'react';

export function MedicareAdvantageZipSearch() {
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      window.location.href = `/medicare-advantage/plans?zip=${zipCode}`;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Search by ZIP Code</h3>
      <p className="text-gray-600 mb-6">
        Enter your ZIP code to see all available Medicare Advantage plans in your area
      </p>
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleZipCodeSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
            className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
            maxLength={5}
            pattern="[0-9]{5}"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            disabled={zipCode.length !== 5}
          >
            Find Plans
          </button>
        </form>
      </div>
    </div>
  );
}
