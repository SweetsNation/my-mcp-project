'use client';

import Link from 'next/link';

interface ServiceComparisonProps {
  primaryService: 'medicare-supplement' | 'health-marketplace';
  userAge?: number;
  showCTA?: boolean;
}

export default function ServiceComparison({ 
  primaryService, 
  userAge, 
  showCTA = true 
}: ServiceComparisonProps) {
  const isMedicareEligible = userAge && userAge >= 65;
  
  return (
    <section className="bg-gray-50 border border-gray-200 p-8 rounded-xl mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        🤔 Which Insurance Option Is Right for You?
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className={`p-6 rounded-lg transition-all duration-300 ${
          primaryService === 'medicare-supplement' 
            ? 'bg-blue-100 border-2 border-blue-300 shadow-lg' 
            : 'bg-white border border-gray-200 hover:shadow-md'
        }`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">🏥</span>
            Medicare Supplement (65+)
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>No network restrictions - see any doctor who accepts Medicare</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>Predictable costs with $240 deductible</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>No referrals needed for specialists</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>Comprehensive coverage for Medicare gaps</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">❌</span>
              <span>Higher monthly premiums</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">❌</span>
              <span>Must be 65+ and enrolled in Medicare</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link 
              href="/medicare-supplement-plan-g" 
              className="text-blue-600 font-medium hover:text-blue-800 text-sm"
            >
              Learn More About Medicare Supplement →
            </Link>
          </div>
        </div>
        
        <div className={`p-6 rounded-lg transition-all duration-300 ${
          primaryService === 'health-marketplace' 
            ? 'bg-green-100 border-2 border-green-300 shadow-lg' 
            : 'bg-white border border-gray-200 hover:shadow-md'
        }`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">🏛️</span>
            Health Insurance Marketplace (Under 65)
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>Subsidies available (up to $2,400/year)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>Lower premiums with network-based plans</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>Essential health benefits included</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✅</span>
              <span>Preventive care covered 100%</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">❌</span>
              <span>Network restrictions apply</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 mt-1">❌</span>
              <span>May require referrals for specialists</span>
            </li>
          </ul>
          <div className="mt-4">
            <Link 
              href="/health-insurance-marketplace" 
              className="text-green-600 font-medium hover:text-green-800 text-sm"
            >
              Learn More About Marketplace Plans →
            </Link>
          </div>
        </div>
      </div>
      
      {showCTA && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Not sure which option is best for your situation? Our licensed agents can help you compare all options 
            and find the perfect coverage for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Personalized Guidance
            </Link>
            <Link 
              href="/team" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Meet Our Experts
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
