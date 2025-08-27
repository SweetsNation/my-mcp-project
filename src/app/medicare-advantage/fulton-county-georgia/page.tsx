import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Fulton County Georgia 2025 | Atlanta Medicare Plans',
  description: 'Compare Medicare Advantage plans in Fulton County & Atlanta, Georgia. 60% penetration rate with $0 premium options. Dual-eligible specialized benefits available.',
  keywords: 'Medicare Advantage Fulton County Georgia, Medicare plans Atlanta GA, Fulton County Medicare, Atlanta Medicare Advantage, Georgia Medicare plans',
  openGraph: {
    title: 'Medicare Advantage Plans Fulton County Georgia 2025',
    description: 'Find the best Medicare Advantage plans in Fulton County & Atlanta, GA with dual-eligible benefits and local provider networks.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans Fulton County Georgia 2025',
    description: 'Compare Medicare Advantage plans in Atlanta & Fulton County, Georgia with expert guidance.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/fulton-county-georgia',
  },
};

const fultonCountyData = {
  county: 'Fulton County',
  state: 'Georgia',
  stateAbbrev: 'GA',
  slug: 'fulton-county-georgia',
  totalEnrollment: 156700,
  maPenetrationRate: 60,
  opportunityScore: 51,
  dualEligibleRate: 19.8,
  competitionLevel: 'High' as const,
  addressableMarket: 62680,
  potentialRevenue: 90259200,
  demographics: {
    avgAge: 74,
    malePercentage: 46,
    disabledPercentage: 5.2,
    raceDistribution: {
      white: 43.3,
      black: 50.4,
      hispanic: 2,
      asian: 3.6,
      other: 0.8,
    },
  },
  nearbyCounties: [
    { name: 'Jefferson County, Alabama', slug: 'jefferson-county-alabama' },
    { name: 'Davidson County, Tennessee', slug: 'davidson-county-tennessee' },
    { name: 'Wake County, North Carolina', slug: 'wake-county-north-carolina' },
    { name: 'Fairfax County, Virginia', slug: 'fairfax-county-virginia' },
  ],
  localProviders: [
    'Emory Healthcare',
    'Piedmont Healthcare',
    'WellStar Health System',
    'Children\'s Healthcare of Atlanta',
    'Grady Health System',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Atlanta metro',
    'Walgreens with Medicare-preferred networks',
    'Kroger Pharmacy',
    'Publix Pharmacy',
    'Walmart Pharmacy',
  ],
  keyBenefits: [
    '$0 premium plans available for dual-eligible beneficiaries',
    'Extra benefits at no additional cost including transportation',
    'Access to top-rated Emory and Piedmont healthcare systems',
    'Specialized care coordination for diverse communities',
    'Bilingual support and culturally competent care',
    'Community health center partnerships for underserved populations',
  ],
  localResources: [
    {
      name: 'Fulton County Health Services',
      description: 'Medicaid enrollment assistance and health services',
      phone: '404-613-1450',
    },
    {
      name: 'Georgia SHIP Program',
      description: 'Free Medicare counseling and insurance assistance',
      phone: '1-866-552-4464',
    },
    {
      name: 'Atlanta Area Agency on Aging',
      description: 'Senior services and Medicare support programs',
      phone: '404-463-3100',
    },
    {
      name: 'Grady Community Health Centers',
      description: 'FQHC serving dual-eligible and underserved populations',
      phone: '404-616-1000',
    },
  ],
};

export default function FultonCountyGeorgiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage Plans in Fulton County, Georgia
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare Medicare Advantage plans in Atlanta and Fulton County. 60% penetration rate 
                with specialized benefits for diverse communities and dual-eligible beneficiaries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                  Compare Atlanta Plans
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
              Fulton County & Atlanta Medicare Advantage Market Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">156,700</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">25</div>
                <div className="text-gray-600">4+ Star Rated Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">20</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">$6,750</div>
                <div className="text-gray-600">Avg Out-of-Pocket Max</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Diversity Focus */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Advantage Plans for Atlanta's Diverse Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Culturally Competent Care</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Bilingual customer service and provider networks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Community health worker programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Transportation assistance to medical appointments</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Integration with Grady Health System for safety net care</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Diversity & Cultural Care</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Languages Supported</span>
                    <span className="font-semibold text-gray-900">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cultural Health Programs</span>
                    <span className="font-semibold text-gray-900">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Community Health Centers</span>
                    <span className="font-semibold text-gray-900">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Bilingual Agents Available</span>
                    <span className="font-semibold text-gray-900">Yes</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Cultural Care Focus:</strong> Specialized support for Atlanta's diverse communities 
                      with multilingual resources and culturally competent care coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Fulton County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Medicare Advantage in Fulton County & Atlanta?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fultonCountyData.keyBenefits.map((benefit, index) => (
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
              Top Healthcare Providers in Atlanta & Fulton County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Major Hospital Systems</h3>
                <ul className="space-y-4">
                  {fultonCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold">{provider}</span>
                        {provider === 'Emory Healthcare' && (
                          <span className="text-gray-600 block text-sm">Top-ranked academic medical center</span>
                        )}
                        {provider === 'Grady Health System' && (
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
                  {fultonCountyData.localPharmacies.map((pharmacy, index) => (
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

        {/* Market Opportunity and Competition */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Fulton County Medicare Market Analysis
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Atlanta Demographics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Population 65+ Years</span>
                      <span className="font-bold text-green-600">14.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '14.8%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Dual Eligible Rate</span>
                      <span className="font-bold text-orange-600">19.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '19.8%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Median Household Income</span>
                      <span className="font-bold text-blue-600">$68K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Competition Level: High</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="font-semibold text-gray-900">High Competition Benefits</p>
                    <p className="text-gray-600 text-sm">More plan choices and competitive benefits for consumers</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold text-gray-900">Consumer Advantages</p>
                    <p className="text-gray-600 text-sm">High competition drives lower costs and enhanced benefits for Medicare beneficiaries</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-semibold text-gray-900">Market Stability</p>
                    <p className="text-gray-600 text-sm">Established market with consistent growth patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Resources in Fulton County & Atlanta
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fultonCountyData.localResources.map((resource, index) => (
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
                    <div className="text-4xl mb-2">🏙️</div>
                    <div className="text-lg font-semibold">Atlanta Healthcare</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Emory vs. Piedmont Healthcare: Atlanta Medicare Advantage Provider Comparison
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Compare Atlanta's premier Medicare Advantage networks, including access to Emory Healthcare's academic medical centers and Piedmont Healthcare's comprehensive system across Georgia.
                  </p>
                  <Link href="/blog/emory-vs-piedmont-medicare-advantage-atlanta" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🌍</div>
                    <div className="text-lg font-semibold">Diverse Communities</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Medicare Advantage for Atlanta's Diverse Communities: Culturally Competent Care Options
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Explore Medicare Advantage plans in Fulton County that offer bilingual support, culturally competent care, and partnerships with community health centers serving diverse populations.
                  </p>
                  <Link href="/blog/medicare-advantage-diverse-communities-atlanta" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏥</div>
                    <div className="text-lg font-semibold">Safety Net Care</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Grady Health System and Medicare Advantage: Understanding Safety Net Hospital Integration
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn how Medicare Advantage plans in Atlanta integrate with Grady Health System to provide comprehensive care for underserved populations and dual-eligible beneficiaries.
                  </p>
                  <Link href="/blog/grady-health-system-medicare-advantage-atlanta" className="text-primary-600 font-medium hover:text-primary-700">
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
              Ready to Find Your Perfect Insurance Plan in Atlanta & Fulton County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Atlanta Insurance specialists understand the diverse community needs and can help you 
              navigate plans from Emory, Piedmont, and other top providers with culturally competent care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                Compare Atlanta Plans Now
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