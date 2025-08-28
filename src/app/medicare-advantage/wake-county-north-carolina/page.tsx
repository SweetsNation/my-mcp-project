import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Wake County North Carolina 2025 | Raleigh Medicare',
  description: 'Compare Medicare Advantage plans in Wake County & Raleigh, NC. 55% penetration rate offers growth opportunity. Top healthcare systems and local provider networks.',
  keywords: 'Medicare Advantage Wake County North Carolina, Medicare plans Raleigh NC, Wake County Medicare, North Carolina Medicare Advantage, Raleigh Medicare plans',
  openGraph: {
    title: 'Medicare Advantage Plans Wake County North Carolina 2025',
    description: 'Find the best Medicare Advantage plans in Wake County & Raleigh, NC with local provider networks and competitive benefits.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans Wake County North Carolina 2025',
    description: 'Compare Medicare Advantage plans in Wake County & Raleigh, North Carolina with expert guidance.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/wake-county-north-carolina',
  },
};

const wakeCountyData = {
  county: 'Wake County',
  state: 'North Carolina',
  stateAbbrev: 'NC',
  slug: 'wake-county-north-carolina',
  totalEnrollment: 78900,
  maPenetrationRate: 55.1,
  opportunityScore: 50,
  dualEligibleRate: 9.2,
  competitionLevel: 'High' as const,
  addressableMarket: 35439,
  potentialRevenue: 51024000,
  demographics: {
    avgAge: 74,
    malePercentage: 47.7,
    disabledPercentage: 3.9,
    raceDistribution: {
      white: 74.7,
      black: 19.8,
      hispanic: 2.3,
      asian: 2.7,
      other: 0.6,
    },
  },
  nearbyCounties: [
    { name: 'Fairfax County, Virginia', slug: 'fairfax-county-virginia' },
    { name: 'Davidson County, Tennessee', slug: 'davidson-county-tennessee' },
    { name: 'Fulton County, Georgia', slug: 'fulton-county-georgia' },
    { name: 'Jefferson County, Alabama', slug: 'jefferson-county-alabama' },
  ],
  localProviders: [
    'WakeMed Health & Hospitals',
    'Duke University Health System',
    'UNC REX Healthcare',
    'North Carolina Specialty Hospital',
    'Raleigh Orthopaedic Clinic',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Wake County',
    'Walgreens with Medicare-preferred networks',
    'Harris Teeter Pharmacy',
    'Food Lion Pharmacy',
    'Walmart Pharmacy',
  ],
  keyBenefits: [
    'Access to top-rated Duke and UNC healthcare systems',
    'Better benefits than Original Medicare with local provider networks',
    'Personalized care coordination for chronic conditions',
    'Transportation benefits for medical appointments in Raleigh',
    'Prescription drug coverage with extensive pharmacy networks',
    'Wellness programs and preventive care benefits',
  ],
  localResources: [
    {
      name: 'Wake County Human Services',
      description: 'Medicaid enrollment assistance and social services',
      phone: '919-856-6100',
    },
    {
      name: 'North Carolina SHIP Program',
      description: 'Free Medicare counseling and insurance assistance',
      phone: '1-855-408-1212',
    },
    {
      name: 'Triangle Area Agency on Aging',
      description: 'Senior services and Medicare support for Triangle area',
      phone: '919-558-6644',
    },
    {
      name: 'Capital Area Health Network',
      description: 'Community health resources and Medicare guidance',
      phone: '919-250-3113',
    },
  ],
};

export default function WakeCountyNorthCarolinaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Advantage in Wake County, North Carolina 2025
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare Medicare Advantage plans in Raleigh and Wake County. 55% penetration rate 
                with access to Duke and UNC healthcare systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                  Compare Raleigh Plans
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
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
              Wake County & Raleigh Medicare Advantage Market Overview
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">78,900</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">22</div>
                <div className="text-gray-600">4+ Star Rated Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">18</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">$6,900</div>
                <div className="text-gray-600">Avg Out-of-Pocket Max</div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Triangle Healthcare Focus */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Access to Research Triangle Healthcare Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">World-Class Healthcare Systems</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Duke University Health System</p>
                    <p className="text-gray-600 text-sm">Nationally ranked academic medical center</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <p className="font-semibold text-gray-900">UNC REX Healthcare</p>
                    <p className="text-gray-600 text-sm">Comprehensive care with UNC Chapel Hill affiliation</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <p className="font-semibold text-gray-900">WakeMed Health & Hospitals</p>
                    <p className="text-gray-600 text-sm">Regional healthcare leader serving Wake County</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Wake County Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">High median income area with quality healthcare access</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Lower dual-eligible rate (9.2%) indicates stable market</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Growing retiree population in Research Triangle</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">✓</div>
                    <span className="text-gray-700">Strong technology infrastructure and digital adoption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Wake County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Medicare Advantage in Wake County & Raleigh?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wakeCountyData.keyBenefits.map((benefit, index) => (
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
              Top Healthcare Providers in Wake County & Raleigh
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Healthcare Systems</h3>
                <ul className="space-y-4">
                  {wakeCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold">{provider}</span>
                        {provider === 'Duke University Health System' && (
                          <span className="text-gray-600 block text-sm">Nationally ranked in multiple specialties</span>
                        )}
                        {provider === 'UNC REX Healthcare' && (
                          <span className="text-gray-600 block text-sm">Part of UNC Health system</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                <ul className="space-y-4">
                  {wakeCountyData.localPharmacies.map((pharmacy, index) => (
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

        {/* Market Opportunity Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Wake County Medicare Market Analysis & Opportunity
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Demographics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">74</div>
                    <div className="text-sm text-gray-600">Average Age</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-600">9.2%</div>
                    <div className="text-sm text-gray-600">Dual Eligible Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">3.9%</div>
                    <div className="text-sm text-gray-600">Disabled Rate</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Triangle Demographics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-green-600">15.2%</div>
                    <div className="text-sm text-gray-600">Population 65+ Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">42.8%</div>
                    <div className="text-sm text-gray-600">College Educated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">$75K</div>
                    <div className="text-sm text-gray-600">Median Household Income</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Competition Level</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-red-600">High</div>
                    <div className="text-sm text-gray-600">Competition Level</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">55.1%</div>
                    <div className="text-sm text-gray-600">Penetration Rate</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700 mt-4">
                      High competition means more plan choices and competitive benefits for consumers
                    </div>
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
              Medicare Resources in Wake County & Raleigh
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wakeCountyData.localResources.map((resource, index) => (
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
                    <div className="text-4xl mb-2">🏥</div>
                    <div className="text-lg font-semibold">Research Triangle</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Duke vs. UNC REX: Comparing Medicare Advantage Networks in Wake County
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    An in-depth analysis of the top Medicare Advantage options in Raleigh and Wake County, including access to Duke University Health System and UNC REX Healthcare networks.
                  </p>
                  <Link href="/blog/duke-vs-unc-rex-medicare-advantage-wake-county" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🎓</div>
                    <div className="text-lg font-semibold">Tech-Forward Care</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How Raleigh's Tech Innovation is Transforming Medicare Advantage Benefits
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover how Wake County's technology sector is driving innovative Medicare Advantage features like telehealth, digital health apps, and virtual care coordination.
                  </p>
                  <Link href="/blog/raleigh-tech-innovation-medicare-advantage" className="text-primary-600 font-medium hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💡</div>
                    <div className="text-lg font-semibold">Medicare Planning</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Medicare Advantage Enrollment Guide for Research Triangle Retirees
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    A comprehensive guide for new retirees in Wake County, including timing, eligibility requirements, and tips for choosing the best plan for your Research Triangle lifestyle.
                  </p>
                  <Link href="/blog/medicare-advantage-enrollment-guide-research-triangle" className="text-primary-600 font-medium hover:text-primary-700">
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
              Ready to Find Your Perfect Insurance Plan in Wake County & Raleigh?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Raleigh Insurance specialists understand the Research Triangle healthcare landscape 
              and can help you navigate plans from Duke, UNC REX, and WakeMed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/medicare-advantage" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                Compare Raleigh Plans Now
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