import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Davidson County Tennessee 2025 | Nashville Medicare',
  description: 'Find Medicare Advantage plans in Davidson County & Nashville, TN. 45% penetration rate with $0 premium options. Dual-eligible specialized benefits available.',
  keywords: 'Medicare Advantage Davidson County Tennessee, Medicare plans Nashville TN, Davidson County Medicare, Tennessee Medicare Advantage, Nashville Medicare plans',
  openGraph: {
    title: 'Medicare Advantage Plans Davidson County Tennessee 2025',
    description: 'Compare Medicare Advantage plans in Davidson County & Nashville, TN with dual-eligible benefits and local provider networks.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans Davidson County Tennessee 2025',
    description: 'Find the best Medicare Advantage plans in Davidson County & Nashville, Tennessee with expert guidance.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-advantage/davidson-county-tennessee',
  },
};

const davidsonCountyData = {
  county: 'Davidson County',
  state: 'Tennessee',
  stateAbbrev: 'TN',
  slug: 'davidson-county-tennessee',
  totalEnrollment: 94500,
  maPenetrationRate: 45,
  opportunityScore: 47,
  dualEligibleRate: 20,
  competitionLevel: 'Medium' as const,
  addressableMarket: 51975,
  potentialRevenue: 74841600,
  demographics: {
    avgAge: 74,
    malePercentage: 46.7,
    disabledPercentage: 6.7,
    raceDistribution: {
      white: 63.3,
      black: 30,
      hispanic: 2,
      asian: 4,
      other: 0.7,
    },
  },
  nearbyCounties: [
    { name: 'Jefferson County, Alabama', slug: 'jefferson-county-alabama' },
    { name: 'Fulton County, Georgia', slug: 'fulton-county-georgia' },
    { name: 'Wake County, North Carolina', slug: 'wake-county-north-carolina' },
    { name: 'Fairfax County, Virginia', slug: 'fairfax-county-virginia' },
  ],
  localProviders: [
    'Vanderbilt University Medical Center',
    'HCA Healthcare (Saint Thomas Health)',
    'TriStar Health',
    'Nashville General Hospital',
    'The Bone & Joint Clinic',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Nashville metro',
    'Walgreens with Medicare-preferred networks',
    'Kroger Pharmacy',
    'Walmart Pharmacy',
    'Rite Aid Pharmacy',
  ],
  keyBenefits: [
    '$0 premium plans available for dual-eligible beneficiaries',
    'Extra benefits at no additional cost',
    'Access to world-renowned Vanderbilt University Medical Center',
    'Specialized care coordination for dual-eligible beneficiaries',
    'Community health center partnerships in Nashville',
    'Transportation benefits for medical appointments',
  ],
  localResources: [
    {
      name: 'Davidson County Health Department',
      description: 'Medicaid enrollment assistance and public health services',
      phone: '615-340-5616',
    },
    {
      name: 'Tennessee SHIP Program',
      description: 'Free Medicare counseling and insurance assistance',
      phone: '1-877-801-0044',
    },
    {
      name: 'Nashville Area Agency on Aging',
      description: 'Senior services and Medicare support programs',
      phone: '615-880-1266',
    },
    {
      name: 'Matthew Walker Comprehensive Health Center',
      description: 'FQHC serving underserved populations in Nashville',
      phone: '615-327-9400',
    },
  ],
};

export default function DavidsonCountyTennesseePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Davidson County, Tennessee 2025
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare Medicare Advantage plans in Nashville and Davidson County. 45% penetration rate 
                with $0 premium options and specialized benefits for dual-eligible beneficiaries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                  View Nashville Plans
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
              Davidson County & Nashville Medicare Advantage Market Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">94,500</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">19</div>
                <div className="text-gray-600">4+ Star Rated Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">12</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">$7,250</div>
                <div className="text-gray-600">Avg Out-of-Pocket Max</div>
              </div>
            </div>
          </div>
        </section>

        {/* Music City Healthcare Focus */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              World-Class Healthcare in Music City
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vanderbilt Medical Excellence</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Vanderbilt University Medical Center</p>
                    <p className="text-gray-600 text-sm">Top-ranked academic medical center with national recognition</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold text-gray-900">HCA Healthcare Network</p>
                    <p className="text-gray-600 text-sm">Comprehensive healthcare system with multiple locations</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold text-gray-900">TriStar Health System</p>
                    <p className="text-gray-600 text-sm">Regional healthcare leader serving Middle Tennessee</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Davidson County Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Medium competition level offers better plan selection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">20% dual-eligible rate with specialized D-SNP options</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Growing metro area with healthcare infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Community health center partnerships for underserved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Eligible Benefits Focus */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Special Benefits for Dual-Eligible Beneficiaries in Davidson County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">D-SNP Plans in Nashville</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">$0 monthly premium for qualifying dual-eligible beneficiaries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Extra benefits beyond Original Medicare including transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Simplified enrollment and streamlined benefits coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">Care management programs tailored for complex needs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Community Health Support</h3>
                <p className="text-gray-700 mb-6">
                  Davidson County has strong partnerships with community health centers and social services 
                  organizations to support dual-eligible Medicare beneficiaries.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <p className="font-semibold text-gray-900">Matthew Walker Comprehensive Health Center</p>
                    <p className="text-gray-600 text-sm">FQHC with specialized Medicare enrollment assistance</p>
                  </div>
                  <div className="border-l-4 border-secondary-600 pl-4">
                    <p className="font-semibold text-gray-900">Nashville General Hospital</p>
                    <p className="text-gray-600 text-sm">Safety net hospital serving uninsured and underinsured</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold text-gray-900">Community Care Partners</p>
                    <p className="text-gray-600 text-sm">Care coordination for dual-eligible populations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Davidson County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Medicare Advantage in Davidson County & Nashville?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {davidsonCountyData.keyBenefits.map((benefit, index) => (
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
              Top Healthcare Providers in Davidson County & Nashville
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Healthcare Systems</h3>
                <ul className="space-y-4">
                  {davidsonCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold">{provider}</span>
                        {provider === 'Vanderbilt University Medical Center' && (
                          <span className="text-gray-600 block text-sm">Nationally ranked academic medical center</span>
                        )}
                        {provider === 'Nashville General Hospital' && (
                          <span className="text-gray-600 block text-sm">Safety net hospital serving underserved populations</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                <ul className="space-y-4">
                  {davidsonCountyData.localPharmacies.map((pharmacy, index) => (
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

        {/* Market Analysis and Demographics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Davidson County Medicare Demographics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Size</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">51,975</div>
                <p className="text-gray-600">Available Market</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Dual Eligible</h3>
                <div className="text-3xl font-bold text-secondary-600 mb-2">20%</div>
                <p className="text-gray-600">Medicare & Medicaid</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Senior Population</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">13.3%</div>
                <p className="text-gray-600">65 Years and Older</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">MA Enrollment Rate</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">61.7%</div>
                <p className="text-gray-600">Enrolled in MA Plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Resources in Davidson County & Nashville
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {davidsonCountyData.localResources.map((resource, index) => (
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
                    <div className="text-4xl mb-2">🎵</div>
                    <div className="text-lg font-semibold">Music City Healthcare</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Vanderbilt vs. HCA Healthcare: Nashville Medicare Advantage Options Compared
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    A detailed comparison of Nashville's top Medicare Advantage providers, including access to Vanderbilt University Medical Center and HCA Healthcare's network across Middle Tennessee.
                  </p>
                  <Link href="/blog/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💰</div>
                    <div className="text-lg font-semibold">Dual Eligible Benefits</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    D-SNP Plans in Davidson County: How to Maximize Your Dual-Eligible Benefits
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn about Special Needs Plans (D-SNPs) available in Nashville, including $0 premium options, extra benefits, and how to qualify for these specialized Medicare Advantage plans.
                  </p>
                  <Link href="/blog/d-snp-plans-davidson-county-dual-eligible-benefits" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🚗</div>
                    <div className="text-lg font-semibold">Transportation Benefits</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Getting Around Nashville: Medicare Advantage Transportation Benefits You Need to Know
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover transportation benefits available through Medicare Advantage plans in Davidson County, including rides to medical appointments, pharmacy trips, and community resources.
                  </p>
                  <Link href="/blog/medicare-advantage-transportation-benefits-nashville" className="text-primary-600 font-medium hover:text-primary-700">
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
              Ready to Find Your $0 Premium Medicare Advantage Plan in Davidson County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Nashville Medicare specialists understand dual-eligible benefits and can help you 
              navigate $0 premium options with Vanderbilt, HCA, and other top Music City providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                Check Nashville Plan Options
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