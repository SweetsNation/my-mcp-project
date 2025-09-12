import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Rochester NY 2025 | 24 Plans Available | Monroe County',
  description: 'Compare 24 Medicare Advantage plans in Rochester NY & Monroe County. 8 plans with $0 premiums available. 73.8% enrollment rate. Licensed Rochester Medicare specialists.',
  keywords: 'Medicare Advantage Rochester NY, Medicare plans Rochester, Medicare Advantage Monroe County, $0 premium Medicare Advantage Rochester, best Medicare Advantage Rochester NY 2025, Rochester Medicare plans, Monroe County Medicare Advantage, Medicare Rochester New York, URMC Medicare plans, Rochester Regional Health Medicare',
  openGraph: {
    title: 'Medicare Advantage Rochester NY 2025 | 24 Plans Available',
    description: 'Find the best Medicare Advantage plans in Rochester NY & Monroe County. Access to Rochester Regional Health & URMC networks. $0 premium options available.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Rochester NY 2025 | 24 Plans Available',
    description: 'Compare Medicare Advantage plans in Rochester NY with expert guidance. $0 premium options available.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/monroe-county',
  },
};

const monroeCountyData = {
  county: 'Monroe County',
  state: 'New York',
  stateAbbrev: 'NY',
  slug: 'monroe-county',
  totalEnrollment: 171841,
  maPenetrationRate: 73.8,
  opportunityScore: 65,
  dualEligibleRate: 12,
  competitionLevel: 'High' as const,
  addressableMarket: 85840,
  potentialRevenue: 123408000,
  demographics: {
    avgAge: 73,
    malePercentage: 46,
    disabledPercentage: 9,
    raceDistribution: {
      white: 68,
      black: 18,
      hispanic: 8,
      asian: 4,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Direct Mail', 'Local Radio', 'Community Events', 'Digital Marketing'],
    targetDemographics: ['Newly Medicare Eligible (65-74)', 'Original Medicare Beneficiaries'],
    keyMessages: [
      'Better Benefits Than Original Medicare',
      'Local Provider Networks',
      'Prescription Drug Coverage Included',
    ],
  },
  nearbyCounties: [
    { name: 'Erie County, New York', slug: 'erie-county-new-york' },
    { name: 'Onondaga County, New York', slug: 'onondaga-county-new-york' },
    { name: 'Westchester County, New York', slug: 'westchester-county-new-york' },
    { name: 'Nassau County, New York', slug: 'nassau-county-new-york' },
  ],
  localProviders: [
    'Rochester Regional Health',
    'University of Rochester Medical Center',
    'Highland Hospital',
    'Rochester General Hospital',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Monroe County',
    'Walgreens with Medicare-preferred networks',
    'Wegmans Pharmacy',
    'Rite Aid Pharmacy',
  ],
  keyBenefits: [
    'Access to Rochester\'s premier healthcare systems',
    'Comprehensive prescription drug coverage',
    'Transportation benefits for medical appointments',
    'Wellness programs and preventive care benefits',
  ],
  localResources: [
    {
      name: 'Monroe County Office for the Aging',
      description: 'Medicare counseling and assistance programs',
      phone: '585-753-6280',
    },
    {
      name: 'New York SHIP Program',
      description: 'Free Medicare counseling and support',
      phone: '1-800-701-0501',
    },
    {
      name: 'Lifespan of Greater Rochester',
      description: 'Senior services and Medicare guidance',
      phone: '585-244-8400',
    },
  ],
};

export default function MonroeCountyPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('county', 'Monroe County, New York');
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage in Monroe County, New York"
        county="Monroe County"
        state="New York"
        demographics={{
          avgAge: monroeCountyData.demographics.avgAge,
          maPenetrationRate: monroeCountyData.maPenetrationRate,
          dualEligibleRate: monroeCountyData.dualEligibleRate,
        }}
        keyMetrics={{
          totalEnrollment: monroeCountyData.totalEnrollment,
          opportunityScore: monroeCountyData.opportunityScore,
          addressableMarket: monroeCountyData.addressableMarket,
          competitionLevel: monroeCountyData.competitionLevel
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "El-Mag Insurance - Rochester NY Medicare Specialists",
            "description": "Medicare Advantage specialists serving Rochester NY and Monroe County. Compare 24 Medicare Advantage plans with 8 $0 premium options.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rochester",
              "addressRegion": "NY",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://elmag-insurance.com/medicare-advantage/monroe-county",
            "sameAs": [
              "https://elmag-insurance.com"
            ],
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Monroe County, New York"
            },
            "serviceType": "Medicare Advantage Plans",
            "priceRange": "$0-$54.69"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medicare Advantage Rochester NY 2025 | 24 Plans Available",
            "description": "Compare 24 Medicare Advantage plans in Rochester NY & Monroe County. 8 plans with $0 premiums available. 73.8% enrollment rate.",
            "url": "https://elmag-insurance.com/medicare-advantage/monroe-county",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many Medicare Advantage plans are available in Rochester NY?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are 24 Medicare Advantage plans available in Rochester NY and Monroe County for 2025, including 8 plans with $0 monthly premiums."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What is the average Medicare Advantage premium in Rochester NY?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The average Medicare Advantage premium in Rochester NY is $23.90 per month, with paid plans averaging $54.69 monthly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What healthcare providers accept Medicare Advantage in Rochester?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Major Rochester healthcare providers accepting Medicare Advantage include Rochester Regional Health, University of Rochester Medical Center (URMC), Highland Hospital, and Rochester General Hospital."
                  }
                }
              ]
            }
          }),
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
                Medicare Advantage Rochester NY 2025: 24 Plans Available
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare 24 Medicare Advantage plans in Rochester NY & Monroe County. 8 plans with $0 premiums available. 
                73.8% enrollment rate - Rochester leads NY in <Link href="/medicare-advantage" className="text-white underline hover:text-primary-100">Medicare Advantage</Link> adoption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/medicare-advantage" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}
                >
                  Compare 24 Rochester Plans
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}
                >
                  Call 331-E-HEALTH
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Rochester NY Medicare Advantage Market Overview 2025
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">171,841</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">24</div>
                <div className="text-gray-600">Available MA Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">8</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">$23.90</div>
                <div className="text-gray-600">Avg Monthly Premium</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Monroe County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-800">Medicare Advantage</Link> in Rochester NY & Monroe County?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {monroeCountyData.keyBenefits.map((benefit, index) => (
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
              Top Rochester NY Healthcare Providers in Medicare Advantage Networks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hospital Systems</h3>
                <ul className="space-y-3">
                  {monroeCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {provider}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Looking for alternatives? Compare with <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-800">Vanderbilt vs HCA networks in Nashville</Link> or explore <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-800">UAB vs St. Vincent's in Birmingham</Link>.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                <ul className="space-y-3">
                  {monroeCountyData.localPharmacies.map((pharmacy, index) => (
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

        {/* Rochester MA Market Leadership */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Rochester NY Leads New York State in Medicare Advantage Enrollment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With 73.8% enrollment rate, Rochester NY has one of the highest Medicare Advantage adoption rates in the state. 
                This means better plan options, competitive pricing, and superior provider networks. Compare with other New York markets like <Link href="/medicare-advantage/westchester-county-new-york" className="text-primary-600 hover:text-primary-800">Westchester County</Link> or <Link href="/medicare-advantage/nassau-county-new-york" className="text-primary-600 hover:text-primary-800">Nassau County</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">126,811</div>
                <p className="text-gray-600 font-medium">Rochester MA Members</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">#1</div>
                <p className="text-gray-600 font-medium">NY Enrollment Rate</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <p className="text-gray-600 font-medium">$0 Premium Options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$54.69</div>
                <p className="text-gray-600 font-medium">Avg Paid Plan Premium</p>
              </div>
            </div>
          </div>
        </section>

        {/* Demographics and Market Insights */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Monroe County Medicare Demographics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">73</div>
                <p className="text-gray-600">Years old</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-2">12%</div>
                <p className="text-gray-600">Medicare & Medicaid</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MA Enrollment Rate</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">73.8%</div>
                <p className="text-gray-600">Enrolled in Medicare Advantage</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                New to Medicare or considering switching from Original Medicare? Learn about <Link href="/2025-medicare-advantage-changes-fairfax" className="text-primary-600 hover:text-primary-800">2025 Medicare Advantage changes</Link> that may affect your coverage decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Resources in Monroe County
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {monroeCountyData.localResources.map((resource, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.name}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <p className="text-primary-600 font-semibold">{resource.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Counties */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Advantage Plans in Nearby New York Counties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {monroeCountyData.nearbyCounties.map((county, index) => (
                <div key={index} className="bg-primary-50 p-6 rounded-lg text-center hover:bg-primary-100 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{county.name}</h3>
                  <Link 
                    href={`/medicare-advantage/${county.slug}`}
                    className="text-primary-600 hover:text-primary-800 font-medium"
                  >
                    View Plans →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Exploring options outside New York? Compare Medicare Advantage plans in other competitive markets:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-800 font-medium">
                  Fort Worth, TX (55 plans)
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/medicare-advantage/fairfax-county-virginia" className="text-primary-600 hover:text-primary-800 font-medium">
                  Fairfax, VA (36 plans)
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/medicare-advantage/davidson-county-tennessee" className="text-primary-600 hover:text-primary-800 font-medium">
                  Nashville, TN (46 plans)
                </Link>
              </div>
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
                    2025 Medicare Advantage Plan Changes: What Monroe County Residents Need to Know
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover the latest updates to Medicare Advantage plans for 2025, including new benefits, provider network changes, and enrollment deadlines specific to Rochester area.
                  </p>
                  <Link href="/blog/2025-medicare-advantage-changes-monroe-county" className="text-primary-600 font-medium hover:text-primary-700">
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
                    Rochester Regional Health vs. URMC: Comparing Medicare Advantage Networks
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    A comprehensive comparison of the two largest healthcare systems in Monroe County, including network coverage, specialist access, and member satisfaction ratings.
                  </p>
                  <Link href="/blog/rochester-regional-vs-urmc-medicare-advantage" className="text-primary-600 font-medium hover:text-primary-700">
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
                    5 Medicare Advantage Benefits You Didn't Know Were Available in Rochester
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Explore hidden benefits like transportation services, home-delivered meals, and wellness programs that many Monroe County Medicare beneficiaries overlook.
                  </p>
                  <Link href="/blog/hidden-medicare-advantage-benefits-rochester" className="text-primary-600 font-medium hover:text-primary-700">
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
              Ready to Find Your Perfect Medicare Plan in Monroe County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our licensed Medicare specialists understand the Rochester area market and can help you 
              compare plans from top providers like Rochester Regional Health and URMC. Not sure if Medicare Advantage is right for you? 
              Explore <Link href="/medicare-supplement-plan-f" className="text-white underline hover:text-primary-100">Medicare Supplement Plan F</Link> or consider 
              <Link href="/annuities" className="text-white underline hover:text-primary-100">retirement annuities</Link> to secure your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                onClick={() => (window as any).trackLandingPageCTA?.('contact_form', 'footer', '/contact')}
              >
                Get Free Plan Comparison
              </Link>
              <a 
                href="tel:331-343-2584" 
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                onClick={() => (window as any).trackLandingPagePhoneCall?.('footer')}
              >
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