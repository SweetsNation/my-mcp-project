'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BenefitsAnalysis() {
  const searchParams = useSearchParams();
  const [location, setLocation] = useState('');

  useEffect(() => {
    const locationParam = searchParams.get('location');
    if (locationParam) {
      setLocation(locationParam);
    }
  }, [searchParams]);

  const getLocationSpecificContent = () => {
    switch (location?.toLowerCase()) {
      case 'northern-virginia':
        return {
          title: 'Medicare Benefits Analysis - Northern Virginia',
          description: 'Comprehensive Medicare benefits analysis for Northern Virginia residents including Fairfax, Arlington, and Loudoun counties.',
          networks: ['Inova Health System', 'Kaiser Permanente Mid-Atlantic', 'Virginia Hospital Center'],
          counties: ['Fairfax County', 'Arlington County', 'Loudoun County', 'Prince William County']
        };
      default:
        return {
          title: 'Medicare Benefits Analysis 2025',
          description: 'Comprehensive Medicare Advantage and supplement benefits analysis to help you choose the right plan.',
          networks: ['Major healthcare networks nationwide'],
          counties: ['All counties and regions']
        };
    }
  };

  const content = getLocationSpecificContent();

  return (
    <div className="min-h-screen bg-gradient-to-b from-analysis-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-analysis-900 mb-8 text-center">
          {content.title}
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            {content.description}
            {location && ` Compare Medicare plans, understand benefit structures, and analyze costs for ${location.replace('-', ' ')} area residents.`}
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-analysis-800 mb-8 text-center">
            Medicare Benefits Comparison Framework
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-analysis-500">
              <h3 className="text-2xl font-medium text-analysis-700 mb-4">Plan Premiums</h3>
              <p className="text-gray-700 mb-4">
                Analyze monthly premium costs across Medicare Advantage and supplement plans.
                Compare $0 premium options with enhanced benefit plans.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Monthly premium analysis</li>
                <li>• $0 premium plan options</li>
                <li>• Premium vs. benefit trade-offs</li>
                <li>• Annual cost projections</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Coverage Benefits</h3>
              <p className="text-gray-700 mb-4">
                Detailed analysis of medical, prescription drug, dental, vision, and supplemental benefits
                across different Medicare plan types.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Medical coverage comparison</li>
                <li>• Prescription drug formularies</li>
                <li>• Dental and vision benefits</li>
                <li>• Supplemental benefit analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Network Analysis</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive evaluation of provider networks, hospital access, and geographic coverage
                {location ? ` in the ${location.replace('-', ' ')} area` : ' nationwide'}.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Provider network size</li>
                <li>• Hospital affiliations</li>
                <li>• Specialist access</li>
                <li>• Geographic coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {location === 'northern-virginia' && (
          <section className="mb-16 bg-analysis-50 p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-analysis-800 mb-6">
              Northern Virginia Specific Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-analysis-700 mb-4">Major Healthcare Networks</h3>
                <ul className="space-y-3 text-gray-700">
                  {content.networks.map((network, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-analysis-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {network}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-analysis-700 mb-4">Coverage Areas</h3>
                <ul className="space-y-3 text-gray-700">
                  {content.counties.map((county, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {county}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/2025-medicare-advantage-changes-fairfax"
                className="text-analysis-600 hover:text-analysis-800 underline"
              >
                View 2025 Medicare Advantage Changes in Fairfax County →
              </Link>
            </div>
          </section>
        )}

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-analysis-800 mb-8 text-center">
            Cost Analysis Framework
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-analysis-700 mb-4">Annual Cost Components</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-analysis-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Monthly premiums (Part B, Part D, Supplement)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-analysis-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deductibles and coinsurance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-analysis-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-analysis-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug costs
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-analysis-700 mb-4">Value Analysis Factors</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Total cost of ownership
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Benefit utilization patterns
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Network access quality
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Supplemental benefit value
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-analysis-800 mb-8 text-center">
            Benefits Analysis Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-analysis-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-analysis-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-analysis-700 mb-2">Cost Calculator</h3>
              <p className="text-gray-600">Calculate total annual Medicare costs based on your health needs and plan selection</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-blue-700 mb-2">Plan Comparison</h3>
              <p className="text-gray-600">Side-by-side comparison of Medicare plan benefits, costs, and network coverage</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-green-700 mb-2">Decision Support</h3>
              <p className="text-gray-600">Personalized recommendations based on your healthcare needs and preferences</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-analysis-800 mb-6 text-center">
            Regional Medicare Markets
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">East Coast Markets</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <Link href="/medicare-advantage/monroe-county" className="text-analysis-600 hover:text-analysis-800 underline">Monroe County (Rochester NY)</Link></li>
                <li>• <Link href="/2025-medicare-advantage-changes-fairfax" className="text-analysis-600 hover:text-analysis-800 underline">Northern Virginia (Fairfax)</Link></li>
                <li>• <Link href="/medicare-advantage/mid-atlantic" className="text-analysis-600 hover:text-analysis-800 underline">Mid-Atlantic Region</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Southern Markets</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="text-analysis-600 hover:text-analysis-800 underline">Atlanta (Emory vs Piedmont)</Link></li>
                <li>• <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-analysis-600 hover:text-analysis-800 underline">Nashville (Vanderbilt vs HCA)</Link></li>
                <li>• <Link href="/orange-county-florida" className="text-analysis-600 hover:text-analysis-800 underline">Orange County Florida</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Western Markets</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <Link href="/san-diego-county" className="text-analysis-600 hover:text-analysis-800 underline">San Diego County</Link></li>
                <li>• <Link href="/medicare-advantage/los-angeles-county" className="text-analysis-600 hover:text-analysis-800 underline">Los Angeles County</Link></li>
                <li>• <Link href="/medicare-advantage/west-coast" className="text-analysis-600 hover:text-analysis-800 underline">West Coast Region</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-analysis-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Get Your Personalized Medicare Benefits Analysis
          </h2>
          <p className="text-xl mb-8 text-analysis-100 max-w-3xl mx-auto">
            Our Medicare specialists provide comprehensive benefits analysis tailored to your specific healthcare needs
            {location ? ` in ${location.replace('-', ' ')}` : ' and location'}. Make informed decisions with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-analysis-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Request Benefits Analysis
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-analysis-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}