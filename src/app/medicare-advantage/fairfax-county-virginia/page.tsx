import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Fairfax County Virginia 2025 | El-Mag Insurance',
  description: 'Compare Medicare Advantage plans in Fairfax County, Virginia. $0 premium options available. 45% penetration rate means better choices. Licensed agents ready to help.',
  keywords: 'Medicare Advantage Fairfax County Virginia, Medicare plans Fairfax VA, Medicare Advantage Virginia, Fairfax County Medicare, Medicare enrollment Virginia',
  openGraph: {
    title: 'Medicare Advantage Plans Fairfax County Virginia 2025',
    description: 'Find the best Medicare Advantage plans in Fairfax County, VA. Better benefits than Original Medicare with local provider networks.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans Fairfax County Virginia 2025',
    description: 'Compare Medicare Advantage plans in Fairfax County, VA with expert guidance.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-advantage/fairfax-county-virginia',
  },
};

const fairfaxCountyData = {
  county: 'Fairfax County',
  state: 'Virginia',
  stateAbbrev: 'VA',
  slug: 'fairfax-county-virginia',
  totalEnrollment: 112000,
  maPenetrationRate: 45,
  opportunityScore: 60,
  dualEligibleRate: 10,
  competitionLevel: 'Medium' as const,
  addressableMarket: 61600,
  potentialRevenue: 88704000,
  demographics: {
    avgAge: 74,
    malePercentage: 47,
    disabledPercentage: 7,
    raceDistribution: {
      white: 55,
      black: 10,
      hispanic: 13,
      asian: 20,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Direct Mail', 'Local Radio', 'Local TV', 'Community Events'],
    targetDemographics: ['Newly Medicare Eligible (65-74)', 'Original Medicare Beneficiaries'],
    keyMessages: [
      'Better Benefits Than Original Medicare',
      'Local Provider Networks',
      'Personalized Care Coordination',
    ],
  },
  nearbyCounties: [
    { name: 'Wake County, North Carolina', slug: 'wake-county-north-carolina' },
    { name: 'Davidson County, Tennessee', slug: 'davidson-county-tennessee' },
    { name: 'Fulton County, Georgia', slug: 'fulton-county-georgia' },
    { name: 'Jefferson County, Alabama', slug: 'jefferson-county-alabama' },
  ],
  localProviders: [
    'Inova Health System',
    'Kaiser Permanente Mid-Atlantic',
    'Virginia Hospital Center',
    'Reston Hospital Center',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Fairfax County',
    'Walgreens with Medicare-preferred networks',
    'Giant Food Pharmacy',
    'Harris Teeter Pharmacy',
  ],
  keyBenefits: [
    'Access to top-rated healthcare systems in Northern Virginia',
    'Comprehensive transportation benefits for medical appointments',
    'Specialized care coordination for chronic conditions',
    'Prescription drug coverage with local pharmacy networks',
  ],
  localResources: [
    {
      name: 'Fairfax County Health Department',
      description: 'Medicaid education and enrollment assistance',
      phone: '703-246-2411',
    },
    {
      name: 'Northern Virginia SHIP Program',
      description: 'Free Medicare counseling and assistance',
      phone: '703-324-7948',
    },
    {
      name: 'Fairfax Area Agency on Aging',
      description: 'Senior services and Medicare support',
      phone: '703-324-7948',
    },
  ],
};

export default function FairfaxCountyVirginiaPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('county', 'Fairfax County, Virginia');
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

      {/* Main Content */}
      <main>
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Fairfax County, Virginia 2025
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare top Medicare Advantage plans with better benefits than Original Medicare. 
                45% penetration rate means more choices for Fairfax County residents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                  Compare Plans Now
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
              Fairfax County Medicare Advantage Market Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">112,000</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">16</div>
                <div className="text-gray-600">4+ Star Rated Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">15</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">$7,086</div>
                <div className="text-gray-600">Avg Out-of-Pocket Max</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Fairfax County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Medicare Advantage in Fairfax County, VA?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fairfaxCountyData.keyBenefits.map((benefit, index) => (
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
              Top Healthcare Providers in Fairfax County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hospital Systems</h3>
                <ul className="space-y-3">
                  {fairfaxCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {provider}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                <ul className="space-y-3">
                  {fairfaxCountyData.localPharmacies.map((pharmacy, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
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
              Fairfax County Medicare Demographics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">74</div>
                <p className="text-gray-600">Years old</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-2">10%</div>
                <p className="text-gray-600">Medicare & Medicaid</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MA Enrollment Rate</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">31.73%</div>
                <p className="text-gray-600">Enrolled in Medicare Advantage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Resources in Fairfax County
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {fairfaxCountyData.localResources.map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.name}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
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
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-lg font-semibold">Medicare Planning</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2025 Medicare Advantage Plan Changes: What Fairfax County Residents Need to Know
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover the latest updates to Medicare Advantage plans for 2025, including new benefits, provider network changes, and enrollment deadlines specific to Northern Virginia.
                  </p>
                  <Link href="/blog/2025-medicare-advantage-changes-fairfax" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏥</div>
                    <div className="text-lg font-semibold">Provider Networks</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Inova vs. Kaiser Permanente: Comparing Top Medicare Advantage Options in Fairfax
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    A comprehensive comparison of the two largest Medicare Advantage providers in Fairfax County, including network coverage, specialist access, and member satisfaction ratings.
                  </p>
                  <Link href="/blog/inova-vs-kaiser-medicare-advantage-fairfax" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💡</div>
                    <div className="text-lg font-semibold">Medicare Tips</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    5 Medicare Advantage Benefits You Didn't Know Were Available in Northern Virginia
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Explore hidden benefits like transportation services, home-delivered meals, and wellness programs that many Fairfax County Medicare beneficiaries overlook.
                  </p>
                  <Link href="/blog/hidden-medicare-advantage-benefits-northern-virginia" className="text-primary-600 font-medium hover:text-primary-700">
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
              Ready to Find Your Perfect Insurance Plan in Fairfax County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our licensed Insurance specialists understand the Fairfax County market and can help you 
              compare plans from top providers like Inova and Kaiser Permanente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                Get Free Plan Comparison
              </Link>
              <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center">
                331-E-HEALTH
              </a>
            </div>
          </div>
        </section>
      </main>

      </div>
    </>
  );
}