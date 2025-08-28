import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Jefferson County Alabama 2025 | $0 Premium Options',
  description: 'Find Medicare Advantage plans in Jefferson County, Alabama with $0 premiums. 42% penetration rate offers better plan choices. Birmingham area Medicare specialists.',
  keywords: 'Medicare Advantage Jefferson County Alabama, Medicare plans Birmingham AL, Jefferson County Medicare, Alabama Medicare Advantage, Birmingham Medicare plans',
  openGraph: {
    title: 'Medicare Advantage Plans Jefferson County Alabama 2025',
    description: 'Compare Medicare Advantage plans in Jefferson County, AL with $0 premium options and extra benefits.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans Jefferson County Alabama 2025',
    description: 'Find the best Medicare Advantage plans in Jefferson County, Alabama with local Birmingham providers.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/jefferson-county-alabama',
  },
};

const jeffersonCountyData = {
  county: 'Jefferson County',
  state: 'Alabama',
  stateAbbrev: 'AL',
  slug: 'jefferson-county-alabama',
  totalEnrollment: 134000,
  maPenetrationRate: 42,
  opportunityScore: 56,
  dualEligibleRate: 20,
  competitionLevel: 'Medium' as const,
  addressableMarket: 77720,
  potentialRevenue: 111916800,
  demographics: {
    avgAge: 73,
    malePercentage: 45.2,
    disabledPercentage: 10,
    raceDistribution: {
      white: 60,
      black: 35,
      hispanic: 2,
      asian: 2,
      other: 1,
    },
  },
  nearbyCounties: [
    { name: 'Fairfax County, Virginia', slug: 'fairfax-county-virginia' },
    { name: 'Wake County, North Carolina', slug: 'wake-county-north-carolina' },
    { name: 'Davidson County, Tennessee', slug: 'davidson-county-tennessee' },
    { name: 'Fulton County, Georgia', slug: 'fulton-county-georgia' },
  ],
  localProviders: [
    'UAB Medicine (University of Alabama at Birmingham)',
    'St. Vincent\'s Health System',
    'Trinity Medical Center',
    'Brookwood Baptist Health',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Birmingham metro',
    'Walgreens with Medicare-preferred networks',
    'Publix Pharmacy',
    'Walmart Pharmacy',
  ],
  keyBenefits: [
    '$0 premium plans available for qualifying beneficiaries',
    'Extra benefits at no additional cost',
    'Access to UAB Medicine - ranked #1 hospital in Alabama',
    'Specialized care for dual-eligible Medicare beneficiaries',
    'Transportation benefits for medical appointments in Birmingham',
    'Prescription drug coverage with local pharmacy networks',
  ],
  localResources: [
    {
      name: 'Jefferson County Health Department',
      description: 'Medicaid enrollment assistance and health services',
      phone: '205-930-1200',
    },
    {
      name: 'Alabama SHIP Program',
      description: 'Free Medicare counseling and insurance assistance',
      phone: '1-800-243-5463',
    },
    {
      name: 'Birmingham Area Agency on Aging',
      description: 'Senior services and Medicare support programs',
      phone: '205-324-6400',
    },
    {
      name: 'Community Health Centers',
      description: 'Federally Qualified Health Centers serving dual-eligible beneficiaries',
      phone: '205-592-8200',
    },
  ],
};

export default function JeffersonCountyAlabamaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Jefferson County, Alabama 2025
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Find $0 premium Medicare Advantage plans in Birmingham and Jefferson County. 
                20% dual-eligible rate means specialized benefits available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                  View $0 Premium Plans
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center">
                  331-E-HEALTH
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Jefferson County Medicare Advantage Market Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">134,000</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">14</div>
                <div className="text-gray-600">4+ Star Rated Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">11</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">$7,400</div>
                <div className="text-gray-600">Avg Out-of-Pocket Max</div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Focus on Dual Eligible Benefits */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Special Benefits for Dual-Eligible Beneficiaries in Jefferson County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">D-SNP Plans Available</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">$0 monthly premium for qualifying beneficiaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Extra benefits beyond Original Medicare</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Simplified enrollment process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Care coordination with community health centers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Community Partnership Support</h3>
                <p className="text-gray-700 mb-6">
                  Jefferson County has strong partnerships with Federally Qualified Health Centers (FQHCs) 
                  that specialize in serving dual-eligible Medicare beneficiaries.
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold text-gray-900">Birmingham Health Care</p>
                    <p className="text-gray-600">Specialized Medicare enrollment assistance</p>
                  </div>
                  <div className="border-l-4 border-secondary-600 pl-4">
                    <p className="font-semibold text-gray-900">Community Care Plan</p>
                    <p className="text-gray-600">Bilingual support and enrollment help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Jefferson County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Medicare Advantage in Jefferson County, AL?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jeffersonCountyData.keyBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary-600 font-bold text-xl">✓</span>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Healthcare Networks */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Top Healthcare Providers in Jefferson County & Birmingham
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hospital Systems</h3>
                <ul className="space-y-4">
                  {jeffersonCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold">{provider.split('(')[0]}</span>
                        {provider.includes('(') && (
                          <span className="text-gray-600"> {provider.match(/\(([^)]+)\)/)?.[1]}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                <ul className="space-y-4">
                  {jeffersonCountyData.localPharmacies.map((pharmacy, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-secondary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {pharmacy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Demographics and Market Insights */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Jefferson County Medicare Demographics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Age</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">73</div>
                <p className="text-gray-600">Years old</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-2">20%</div>
                <p className="text-gray-600">Medicare & Medicaid</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">MA Enrollment Rate</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">63%</div>
                <p className="text-gray-600">Enrolled in Medicare Advantage</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Total MA Enrollment</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">90,450</div>
                <p className="text-gray-600">Residents Enrolled in 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Resources in Jefferson County & Birmingham
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jeffersonCountyData.localResources.map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{resource.description}</p>
                  <p className="text-primary-600 font-semibold">{resource.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Latest Blog Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏭</div>
                    <div className="text-lg font-semibold">Birmingham Healthcare</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    UAB Medicine vs. St. Vincent's: Birmingham Medicare Advantage Provider Networks
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Compare Jefferson County's leading Medicare Advantage options, including access to UAB Medicine's world-class facilities and St. Vincent's comprehensive healthcare network across Alabama.
                  </p>
                  <Link href="/blog/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💰</div>
                    <div className="text-lg font-semibold">$0 Premium Plans</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Complete Guide to $0 Premium Medicare Advantage Plans in Jefferson County
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover how to qualify for $0 premium Medicare Advantage plans in Birmingham, including dual-eligible benefits, income requirements, and available extra benefits.
                  </p>
                  <Link href="/blog/zero-premium-medicare-advantage-plans-jefferson-county" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏥</div>
                    <div className="text-lg font-semibold">Community Health</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Community Health Centers and Medicare Advantage: Birmingham's Safety Net Integration
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn how Medicare Advantage plans in Jefferson County partner with FQHCs and community health centers to provide comprehensive care for underserved populations.
                  </p>
                  <Link href="/blog/community-health-centers-medicare-advantage-birmingham" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your $0 Premium Medicare Advantage Plan in Jefferson County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Birmingham Medicare specialists understand dual-eligible benefits and can help you 
              navigate $0 premium options with UAB Medicine and other top providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                Check $0 Premium Eligibility
              </Link>
              <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center">
                331-E-HEALTH
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}