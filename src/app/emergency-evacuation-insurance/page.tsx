import { Metadata } from 'next';
import EmergencyEvacuationAnalytics from '@/components/EmergencyEvacuationAnalytics';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import InternalLinking from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Emergency Evacuation Insurance | Medical Evacuation Coverage & Travel Protection',
  description: 'Comprehensive emergency evacuation insurance for medical emergencies, natural disasters, and political unrest. Get coverage for air ambulance, ground transport, and repatriation services worldwide.',
  keywords: 'emergency evacuation insurance, medical evacuation coverage, travel evacuation protection, air ambulance insurance, emergency medical transport, evacuation insurance cost, international evacuation coverage',
  openGraph: {
    title: 'Emergency Evacuation Insurance | Medical Evacuation Coverage',
    description: 'Protect yourself with comprehensive emergency evacuation insurance. Coverage for medical emergencies, natural disasters, and emergency transport worldwide.',
    type: 'website',
    url: '/emergency-evacuation-insurance',
  },
  alternates: {
    canonical: '/emergency-evacuation-insurance',
  },
};

const emergencyEvacuationBreadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Travel Insurance', href: '/travel-insurance' },
  { label: 'Emergency Evacuation Insurance', href: '/emergency-evacuation-insurance' },
];

const emergencyEvacuationLinks = {
  relatedProducts: [
    {
      title: 'Trip Cancellation Insurance',
      href: '/trip-cancellation-insurance',
      description: 'Protect your travel investment from unexpected cancellations'
    },
    {
      title: 'Travel Health Insurance',
      href: '/travel-health-insurance',
      description: 'Comprehensive medical coverage for international travel'
    },
    {
      title: 'Travel Insurance',
      href: '/travel-insurance',
      description: 'Complete travel protection for all your adventures'
    }
  ],
  crossReferences: [
    { text: 'Compare with travel health insurance', href: '/travel-health-insurance' },
    { text: 'Learn about trip interruption coverage', href: '/trip-interruption-insurance' },
    { text: 'Explore comprehensive travel protection', href: '/travel-insurance' }
  ]
};

export default function EmergencyEvacuationInsurancePage() {
  return (
    <>
      <EmergencyEvacuationAnalytics />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation customBreadcrumbs={emergencyEvacuationBreadcrumbs.map(bc => ({
          name: bc.label,
          href: bc.href,
          current: bc.href === '/emergency-evacuation-insurance'
        }))} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Emergency Evacuation Insurance | Medical Evacuation Coverage
                <span className="block text-3xl md:text-4xl text-red-600 mt-2">
                  Travel Protection Worldwide
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                Comprehensive emergency evacuation insurance provides critical protection when medical emergencies, 
                natural disasters, or political unrest require immediate evacuation from your travel destination.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md" data-evacuation-coverage="emergency_medical">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Medical Evacuation</h3>
                  <p className="text-gray-600">Air ambulance and medical transport to nearest adequate facility</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md" data-evacuation-coverage="political_evacuation">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Political Evacuation Coverage</h3>
                  <p className="text-gray-600">Safe transport during political unrest or security threats</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md" data-evacuation-coverage="natural_disaster">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Disaster Protection</h3>
                  <p className="text-gray-600">Evacuation services during earthquakes, hurricanes, and emergencies</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200" data-evacuation-cta="hero_quote">
                  Get Free Evacuation Quote
                </button>
                <button className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200" data-evacuation-cta="hero_call">
                  Call (800) 555-0123
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Emergency Evacuation Insurance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What is Emergency Evacuation Insurance? Medical Transport Explained
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Emergency evacuation insurance provides coverage for emergency medical transport when you're 
                  traveling and need immediate evacuation to receive adequate medical care or escape dangerous situations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Average Emergency Evacuation Costs</h3>
                      <p className="text-gray-600">Medical evacuations can cost $50,000-$300,000+ depending on location and transport method</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Critical Response Time</h3>
                      <p className="text-gray-600">Emergency evacuations typically occur within 24-48 hours of activation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Coverage Network</h3>
                      <p className="text-gray-600">Access to worldwide network of medical facilities and transport providers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Evacuation Cost Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Destination</label>
                    <select className="w-full border-gray-300 rounded-md" data-evacuation-destination="international">
                      <option>International Destination</option>
                      <option>Domestic Travel</option>
                      <option>Remote/High-Risk Area</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Amount</label>
                    <select className="w-full border-gray-300 rounded-md">
                      <option>$100,000</option>
                      <option>$250,000</option>
                      <option>$500,000</option>
                      <option>$1,000,000+</option>
                    </select>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition-colors duration-200" data-evacuation-cta="calculator">
                    Calculate Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Evacuation Coverage Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Emergency Evacuation Insurance Coverage Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md" data-evacuation-coverage="basic_evacuation">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Emergency Evacuation</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">$100K Coverage</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Emergency medical evacuation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ground ambulance transport
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 emergency assistance
                  </li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition-colors duration-200" data-evacuation-cta="basic_quote">
                  Get Basic Quote
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-red-500 relative" data-evacuation-coverage="comprehensive_evacuation">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Travel Evacuation</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">$250K Coverage</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Air ambulance evacuation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Political evacuation coverage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Natural disaster evacuation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Repatriation services
                  </li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition-colors duration-200" data-evacuation-cta="comprehensive_quote">
                  Get Comprehensive Quote
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md" data-evacuation-coverage="premium_evacuation">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Global Protection</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">$500K+ Coverage</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited evacuation coverage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Private jet evacuation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Family evacuation coverage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Concierge medical services
                  </li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition-colors duration-200" data-evacuation-cta="premium_quote">
                  Get Premium Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Travel Protection */}
        <InternalLinking {...emergencyEvacuationLinks} />

        {/* Final CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get Your Emergency Evacuation Insurance Quote - Free & Fast
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't risk devastating evacuation costs. Get comprehensive emergency evacuation coverage 
              and travel with confidence knowing you're protected worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200" data-evacuation-cta="final_quote">
                Get Free Quote Now
              </button>
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200" data-evacuation-cta="final_call">
                Call (800) 555-0123
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}