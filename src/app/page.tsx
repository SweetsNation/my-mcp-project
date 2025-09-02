import { MedicareAdvantageHero } from '@/components/MedicareAdvantageHero';
import { MedicareAdvantageZipSearch } from '@/components/MedicareAdvantageZipSearch';
import Link from 'next/link';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HomePage() {

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <MedicareAdvantageHero headline="Find Your Perfect Medicare Plan" />

      {/* Enhanced Medicare Advantage Find Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find Your Perfect Medicare Advantage Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Medicare Advantage plans with $0 premiums, dental, vision, and fitness benefits. 
              Our expert agents help you compare plans and find the best coverage for your needs.
            </p>
          </div>

          {/* Find Plans Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* ZIP Code Search */}
            <MedicareAdvantageZipSearch />

            {/* Popular Locations */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Locations</h3>
              <p className="text-gray-600 mb-6">
                Browse Medicare Advantage plans in popular cities and counties
              </p>
              <div className="space-y-3">
                <a href="/medicare-advantage/spring-tx" className="block text-green-700 hover:text-green-800 font-medium">
                  Spring, Texas →
                </a>
                <a href="/medicare-advantage/miami-fl" className="block text-green-700 hover:text-green-800 font-medium">
                  Miami, Florida →
                </a>
                <a href="/medicare-advantage/atlanta-ga" className="block text-green-700 hover:text-green-800 font-medium">
                  Atlanta, Georgia →
                </a>
                <a href="/medicare-advantage/wake-forest-nc" className="block text-green-700 hover:text-green-800 font-medium">
                  Wake Forest, NC →
                </a>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 mb-6">
                Get personalized help from licensed Medicare specialists
              </p>
              <div className="space-y-3">
                <a href="/contact" className="block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Get Free Consultation
                </a>
                <a href="/team" className="block text-purple-700 hover:text-purple-800 font-medium">
                  Meet Our Specialists →
                </a>
              </div>
            </div>
          </div>

          {/* Plan Comparison Tool Preview */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compare Plans Side by Side
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Use our interactive comparison tool to see Medicare Advantage plans, benefits, and costs 
              all in one place. Find the perfect plan for your budget and healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/medicare-advantage" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Compare Plans
              </a>
              <a 
                href="/medicare-plan-comparison-tool" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Advanced Comparison Tool
              </a>
            </div>
          </div>

          {/* Medicare Advantage Benefits Overview */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Why Choose Medicare Advantage?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">$0 Premium Plans</h4>
                <p className="text-sm text-gray-600">Many plans available with no monthly premium</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Extra Benefits</h4>
                <p className="text-sm text-gray-600">Dental, vision, hearing, and fitness programs</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost Protection</h4>
                <p className="text-sm text-gray-600">Maximum out-of-pocket limits for financial security</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Guidance</h4>
                <p className="text-sm text-gray-600">Free help from licensed Medicare specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Insurance Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Medicare to Health Insurance Marketplace, our expert agents provide personalized guidance across all insurance needs
            </p>
          </div>
          
          {/* Medicare Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Medicare Insurance Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/medicare-advantage" className="group bg-blue-50 hover:bg-blue-100 rounded-lg p-6 text-center transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">MA</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Medicare Advantage</h4>
                <p className="text-gray-600 text-sm">HMO & PPO Plans with Extra Benefits</p>
              </Link>
              
              <Link href="/medicare-supplement-plan-g" className="group bg-green-50 hover:bg-green-100 rounded-lg p-6 text-center transition-colors">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Medicare Supplement</h4>
                <p className="text-gray-600 text-sm">Medigap Plans G, N & More</p>
              </Link>
              
              <Link href="/medicare-part-d" className="group bg-purple-50 hover:bg-purple-100 rounded-lg p-6 text-center transition-colors">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Medicare Part D</h4>
                <p className="text-gray-600 text-sm">Prescription Drug Coverage</p>
              </Link>
              
              <Link href="/medicare-extra-help" className="group bg-orange-50 hover:bg-orange-100 rounded-lg p-6 text-center transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">$</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Medicare Extra Help</h4>
                <p className="text-gray-600 text-sm">Low-Income Subsidy Programs</p>
              </Link>
            </div>
          </div>

          {/* Health Insurance & Life Insurance Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Health & Life Insurance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/health-insurance-marketplace" className="group bg-gradient-to-br from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-xl p-6 transition-colors">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Health Insurance Marketplace</h4>
                <p className="text-gray-700 mb-4">
                  ACA plans with premium tax credits and cost-sharing reductions. Find affordable coverage for individuals and families.
                </p>
                <div className="text-teal-600 font-medium">
                  Explore ACA Plans →
                </div>
              </Link>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Life Insurance</h4>
                <p className="text-gray-700 mb-4">
                  Term life, whole life, and final expense insurance to protect your family's financial future.
                </p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-purple-600 hover:text-purple-800 font-medium">
                    Term Life Insurance →
                  </Link>
                  <Link href="/contact" className="block text-purple-600 hover:text-purple-800 font-medium">
                    Final Expense Plans →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Meet Our Team</h4>
                <p className="text-gray-700 mb-4">
                  Expert agents specializing in Medicare, Social Security, and Health Insurance across multiple states.
                </p>
                <Link href="/team" className="text-green-600 hover:text-green-800 font-medium">
                  View Our Specialists →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Tools & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our interactive tools and comprehensive guides to make informed insurance decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Calculators */}
            <Link href="/medicare-cost-calculator" className="group bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300 border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Medicare Cost Calculator</h4>
              <p className="text-gray-600 mb-4">Calculate your Medicare costs and compare plan options</p>
              <span className="text-blue-600 font-medium group-hover:text-blue-800">Calculate Costs →</span>
            </Link>
            
            <Link href="/health-insurance-cost-calculator" className="group bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300 border border-gray-200">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">ACA Subsidy Calculator</h4>
              <p className="text-gray-600 mb-4">Estimate premium tax credits and cost-sharing reductions</p>
              <span className="text-teal-600 font-medium group-hover:text-teal-800">Check Subsidies →</span>
            </Link>
            
            <Link href="/medicare-plan-comparison-tool" className="group bg-white hover:shadow-lg rounded-xl p-6 transition-all duration-300 border border-gray-200">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Plan Comparison Tool</h4>
              <p className="text-gray-600 mb-4">Compare Medicare plans side-by-side</p>
              <span className="text-purple-600 font-medium group-hover:text-purple-800">Compare Plans →</span>
            </Link>
          </div>
          
          {/* Resource Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Link href="/resources" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">All Resources</span>
            </Link>
            
            <Link href="/medicare-open-enrollment-2025" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">2025 Enrollment</span>
            </Link>
            
            <Link href="/enrollment-timeline" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Timeline Guide</span>
            </Link>
            
            <Link href="/about" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">About Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Local Insurance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized insurance services for major metropolitan areas and counties across multiple states
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Florida Coverage */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">FL</span>
                Florida Coverage
              </h4>
              <div className="space-y-3">
                <Link href="/health-insurance-miami-dade-florida" className="block text-blue-700 hover:text-blue-900 font-medium">
                  • Miami-Dade County Health Insurance
                </Link>
                <Link href="/medicare-supplement-florida" className="block text-blue-700 hover:text-blue-900 font-medium">
                  • Florida Medicare Supplement Plans
                </Link>
                <div className="pt-2 border-t border-blue-200">
                  <p className="text-blue-600 text-sm">Serving all 67 Florida counties</p>
                </div>
              </div>
            </div>
            
            {/* Texas Coverage */}
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-100">
              <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">TX</span>
                Texas Coverage
              </h4>
              <div className="space-y-3">
                <Link href="/health-insurance-harris-county-texas" className="block text-red-700 hover:text-red-900 font-medium">
                  • Harris County Health Insurance
                </Link>
                <Link href="/medicare-supplement-harris-county-texas" className="block text-red-700 hover:text-red-900 font-medium">
                  • Harris County Medicare Supplement
                </Link>
                <Link href="/medicare-supplement-texas" className="block text-red-700 hover:text-red-900 font-medium">
                  • Texas Medicare Supplement Plans
                </Link>
              </div>
            </div>
            
            {/* California Coverage */}
            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-100">
              <h4 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">CA</span>
                California Coverage
              </h4>
              <div className="space-y-3">
                <Link href="/medicare-supplement-orange-county-california" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  • Orange County Medicare Supplement
                </Link>
                <Link href="/medicare-supplement-california" className="block text-yellow-700 hover:text-yellow-900 font-medium">
                  • California Medicare Supplement Plans
                </Link>
              </div>
            </div>
            
            {/* Multi-State Coverage */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">+</span>
                Additional States
              </h4>
              <div className="space-y-3">
                <Link href="/health-insurance-fulton-county-georgia" className="block text-green-700 hover:text-green-900 font-medium">
                  • Georgia - Fulton County
                </Link>
                <Link href="/medicare-supplement-new-york" className="block text-green-700 hover:text-green-900 font-medium">
                  • New York Medicare Supplement
                </Link>
                <Link href="/medicare-supplement-nassau-county" className="block text-green-700 hover:text-green-900 font-medium">
                  • Nassau County, NY
                </Link>
              </div>
            </div>
            
            {/* Hawaiian Coverage */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-100">
              <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">HI</span>
                Hawaii Coverage
              </h4>
              <div className="space-y-3">
                <Link href="/medicare-supplement-hawaii" className="block text-purple-700 hover:text-purple-900 font-medium">
                  • Hawaii Medicare Supplement Plans
                </Link>
                <Link href="/medicare-supplement-maui-county-hawaii" className="block text-purple-700 hover:text-purple-900 font-medium">
                  • Maui County Medicare Supplement
                </Link>
              </div>
            </div>
            
            {/* Nevada & Oklahoma */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">+</span>
                More States
              </h4>
              <div className="space-y-3">
                <Link href="/health-insurance-clark-county-nevada" className="block text-gray-700 hover:text-gray-900 font-medium">
                  • Nevada - Clark County
                </Link>
                <Link href="/health-insurance-oklahoma-county-oklahoma" className="block text-gray-700 hover:text-gray-900 font-medium">
                  • Oklahoma County, OK
                </Link>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">Licensed in 15+ states</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Plan Is Right for You?</h3>
              <p className="text-xl text-blue-100 mb-6">
                Our licensed agents serve multiple states and can help you find the perfect coverage in your area
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </Link>
                <Link href="/team" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                  Meet Our Agents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose El-Mag Insurance?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed Agents</h3>
              <p className="text-gray-600">Work with experienced, licensed insurance agents who understand Medicare inside and out.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Costs</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees. We help you find the most cost-effective plan for your needs.</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Easy</h3>
              <p className="text-gray-600">Compare plans in minutes and enroll quickly with our streamlined process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to find the perfect Medicare Advantage plan for your needs.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}