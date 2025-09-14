import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Fort Worth TX 2025 | 55 Plans Available | Tarrant County',
  description: 'Compare 55 Medicare Advantage plans in Fort Worth TX & Tarrant County. 29 plans with $0 premiums available. 55.83% enrollment rate. Licensed Texas Medicare specialists.',
  keywords: 'Medicare Advantage Fort Worth TX, Medicare plans Fort Worth Texas, Medicare Advantage Tarrant County, $0 premium Medicare Advantage Fort Worth, best Medicare Advantage Texas 2025, Fort Worth Medicare plans, Texas Health Medicare, JPS Health Medicare, Medicare Fort Worth Texas',
  openGraph: {
    title: 'Medicare Advantage Fort Worth TX 2025 | 55 Plans Available',
    description: 'Find the best Medicare Advantage plans in Fort Worth TX & Tarrant County. Access to Texas Health Resources & JPS Health networks. 29 $0 premium options available.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Fort Worth TX 2025 | 55 Plans Available',
    description: 'Compare Medicare Advantage plans in Fort Worth TX with expert guidance. 29 $0 premium options available.',
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/tarrant-county-texas',
  },
};

const tarrantCountyData = {
  county: 'Tarrant County',
  state: 'Texas',
  stateAbbrev: 'TX',
  slug: 'tarrant-county-texas',
  totalEnrollment: 339374,
  maPenetrationRate: 55.83,
  opportunityScore: 72,
  dualEligibleRate: 14,
  competitionLevel: 'High' as const,
  addressableMarket: 120900,
  potentialRevenue: 173896000,
  demographics: {
    avgAge: 72,
    malePercentage: 45,
    disabledPercentage: 11,
    raceDistribution: {
      white: 52,
      black: 15,
      hispanic: 28,
      asian: 3,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Direct Mail', 'Local TV', 'Community Events', 'Radio'],
    targetDemographics: ['Newly Medicare Eligible (65-74)', 'Original Medicare Beneficiaries'],
    keyMessages: [
      'Better Benefits Than Original Medicare',
      'Local Provider Networks',
      'Comprehensive Prescription Drug Coverage',
    ],
  },
  nearbyCounties: [
    { name: 'Dallas County, Texas', slug: 'dallas-county-texas' },
    { name: 'Collin County, Texas', slug: 'collin-county-texas' },
    { name: 'Denton County, Texas', slug: 'denton-county-texas' },
    { name: 'Harris County, Texas', slug: 'harris-county-texas' },
  ],
  localProviders: [
    'Texas Health Resources',
    'JPS Health Network',
    'Baylor Scott & White Health',
    'Medical City Healthcare',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Tarrant County',
    'Walgreens with Medicare-preferred networks',
    'H-E-B Pharmacy',
    'Kroger Pharmacy',
  ],
  keyBenefits: [
    'Access to Fort Worth\'s leading healthcare systems',
    'Comprehensive prescription drug coverage with local pharmacies',
    'Transportation benefits for medical appointments',
    'Wellness programs and chronic care management',
  ],
  localResources: [
    {
      name: 'Tarrant County Area Agency on Aging',
      description: 'Medicare counseling and enrollment assistance',
      phone: '817-258-8026',
    },
    {
      name: 'Texas SHIP Program',
      description: 'Free Medicare counseling and support',
      phone: '1-800-252-9240',
    },
    {
      name: 'Senior Source',
      description: 'Aging services and Medicare guidance',
      phone: '214-823-5700',
    },
  ],
};

export default function TarrantCountyTexasPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('county', 'Tarrant County, Texas');
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage in Tarrant County, Texas"
        county="Tarrant County"
        state="Texas"
        demographics={{
          avgAge: tarrantCountyData.demographics.avgAge,
          maPenetrationRate: tarrantCountyData.maPenetrationRate,
          dualEligibleRate: tarrantCountyData.dualEligibleRate,
        }}
        keyMetrics={{
          totalEnrollment: tarrantCountyData.totalEnrollment,
          opportunityScore: tarrantCountyData.opportunityScore,
          addressableMarket: tarrantCountyData.addressableMarket,
          competitionLevel: tarrantCountyData.competitionLevel
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
            "name": "El-Mag Insurance - Fort Worth TX Medicare Specialists",
            "description": "Medicare Advantage specialists serving Fort Worth TX and Tarrant County. Compare 55 Medicare Advantage plans with 29 $0 premium options.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fort Worth",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/tarrant-county-texas",
            "sameAs": [
              "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app"
            ],
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Tarrant County, Texas"
            },
            "serviceType": "Medicare Advantage Plans",
            "priceRange": "$0-$17.90"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medicare Advantage Fort Worth TX 2025 | 55 Plans Available",
            "description": "Compare 55 Medicare Advantage plans in Fort Worth TX & Tarrant County. 29 plans with $0 premiums available. 55.83% enrollment rate.",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/tarrant-county-texas",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many Medicare Advantage plans are available in Fort Worth TX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are 55 Medicare Advantage plans available in Fort Worth TX and Tarrant County for 2025, including 29 plans with $0 monthly premiums."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What is the average Medicare Advantage premium in Fort Worth TX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The average Medicare Advantage premium in Fort Worth TX is $17.90 per month for all plans, with 29 $0 premium options available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What healthcare providers accept Medicare Advantage in Fort Worth?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Major Fort Worth healthcare providers accepting Medicare Advantage include Texas Health Resources, JPS Health Network, Baylor Scott & White Health, and Medical City Healthcare."
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
                Medicare Advantage Fort Worth TX 2025: 55 Plans Available
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare 55 Medicare Advantage plans in Fort Worth TX & Tarrant County. 29 plans with $0 premiums available. 
                55.83% enrollment rate - Fort Worth leads Texas in <Link href="/medicare-advantage" className="text-white underline hover:text-primary-100">Medicare Advantage</Link> adoption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/medicare-advantage" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}
                >
                  Compare 55 Fort Worth Plans
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
              Fort Worth TX Medicare Advantage Market Overview 2025
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">339,374</div>
                <div className="text-gray-600">Total Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">55</div>
                <div className="text-gray-600">Available MA Plans</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">29</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">$17.90</div>
                <div className="text-gray-600">Avg Monthly Premium</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Medicare Advantage in Tarrant County */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-800">Medicare Advantage</Link> in Fort Worth TX & Tarrant County?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tarrantCountyData.keyBenefits.map((benefit, index) => (
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
              Top Fort Worth TX Healthcare Providers in Medicare Advantage Networks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hospital Systems</h3>
                <ul className="space-y-3">
                  {tarrantCountyData.localProviders.map((provider, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {provider}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Looking for healthcare network comparisons in other markets? Explore <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-800">Vanderbilt vs HCA networks in Nashville</Link> or <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-800">UAB vs St. Vincent's in Birmingham</Link>.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                <ul className="space-y-3">
                  {tarrantCountyData.localPharmacies.map((pharmacy, index) => (
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

        {/* Fort Worth MA Market Leadership */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fort Worth TX Leads Texas in Medicare Advantage Innovation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With 55.83% enrollment rate and 55 plans available, Fort Worth TX has one of the most competitive Medicare Advantage markets in Texas. 
                This means better plan options, competitive pricing, and superior healthcare networks. Compare with other leading markets like <Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-800">Rochester NY (73.8% enrollment)</Link> or <Link href="/medicare-advantage/davidson-county-tennessee" className="text-primary-600 hover:text-primary-800">Nashville TN (46 plans)</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">189,274</div>
                <p className="text-gray-600 font-medium">Fort Worth MA Members</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">20</div>
                <p className="text-gray-600 font-medium">4+ Star Rated Plans</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">29</div>
                <p className="text-gray-600 font-medium">$0 Premium Options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$5,553</div>
                <p className="text-gray-600 font-medium">Avg Out-of-Pocket Max</p>
              </div>
            </div>
          </div>
        </section>

        {/* Demographics and Market Insights */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tarrant County Medicare Demographics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">72</div>
                <p className="text-gray-600">Years old</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                <div className="text-4xl font-bold text-secondary-600 mb-2">14%</div>
                <p className="text-gray-600">Medicare & Medicaid</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">MA Enrollment Rate</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">55.83%</div>
                <p className="text-gray-600">Enrolled in Medicare Advantage</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Considering all Medicare options? Learn about <Link href="/2025-medicare-advantage-changes-fairfax" className="text-primary-600 hover:text-primary-800">2025 Medicare Advantage changes</Link> or explore traditional <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-800">Medicare Supplement coverage</Link> for comprehensive benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Medicare Resources in Tarrant County
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tarrantCountyData.localResources.map((resource, index) => (
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
              Medicare Advantage Plans in Nearby Texas Counties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tarrantCountyData.nearbyCounties.map((county, index) => (
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
                Comparing options beyond Texas? Explore Medicare Advantage plans in other competitive markets nationwide:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-800 font-medium">
                  Rochester, NY (24 plans)
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
                    2025 Medicare Advantage Plan Changes: What Tarrant County Residents Need to Know
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Discover the latest updates to Medicare Advantage plans for 2025, including new benefits, provider network changes, and enrollment deadlines specific to Fort Worth area.
                  </p>
                  <Link href="/blog/2025-medicare-advantage-changes-tarrant-county" className="text-primary-600 font-medium hover:text-primary-700">
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
                    Texas Health vs. JPS Health: Comparing Medicare Advantage Networks in Fort Worth
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    A comprehensive comparison of the two largest healthcare systems in Tarrant County, including network coverage, specialist access, and member satisfaction ratings.
                  </p>
                  <Link href="/blog/texas-health-vs-jps-medicare-advantage-fort-worth" className="text-primary-600 font-medium hover:text-primary-700">
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
                    5 Medicare Advantage Benefits You Didn't Know Were Available in Fort Worth
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Explore hidden benefits like transportation services, home-delivered meals, and wellness programs that many Tarrant County Medicare beneficiaries overlook.
                  </p>
                  <Link href="/blog/hidden-medicare-advantage-benefits-fort-worth" className="text-primary-600 font-medium hover:text-primary-700">
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
              Ready to Find Your Perfect Medicare Plan in Tarrant County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our licensed Medicare specialists understand the Fort Worth area market and can help you 
              compare plans from top providers like Texas Health Resources and JPS Health Network. Not ready for Medicare Advantage? 
              Consider <Link href="/medicare-supplement-plan-f" className="text-white underline hover:text-primary-100">Medicare Supplement Plan F</Link> or 
              <Link href="/annuities" className="text-white underline hover:text-primary-100">retirement annuities</Link> for long-term financial planning.
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