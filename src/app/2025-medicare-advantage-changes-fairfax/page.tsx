import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: '2025 Medicare Advantage Changes Fairfax VA | 36 Plans Available | Northern Virginia',
  description: 'Discover the latest 2025 Medicare Advantage changes in Fairfax VA. 36 plans available, 15 with $0 premiums. New benefits, network updates for Northern Virginia residents.',
  keywords: '2025 Medicare Advantage changes Fairfax VA, Medicare Advantage Fairfax County Virginia, Medicare updates Northern Virginia, Medicare enrollment 2025 Fairfax, Medicare plan changes Virginia, Inova Medicare Advantage 2025, Kaiser Medicare Fairfax VA, Medicare Advantage plans Fairfax Virginia 2025',
  openGraph: {
    title: '2025 Medicare Advantage Changes Fairfax VA | 36 Plans Available',
    description: 'Stay informed about 2025 Medicare Advantage changes in Fairfax VA. 36 plans available with new benefits, expanded Inova networks, and $0 premium options.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2025 Medicare Advantage Changes Fairfax VA | 36 Plans Available',
    description: 'Get the latest updates on 2025 Medicare Advantage changes for Fairfax VA. 36 plans with new benefits and expanded networks.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/2025-medicare-advantage-changes-fairfax',
  },
};

const fairfax2025Changes = {
  keyChanges: [
    {
      category: 'New Benefits',
      changes: [
        'Enhanced transportation services expanded to include rides to social activities',
        'New home-delivered meals program for chronically ill members',
        'Increased dental coverage limits from $1,500 to $2,000 annually',
        'Added coverage for acupuncture and chiropractic services',
      ],
    },
    {
      category: 'Provider Network Updates',
      changes: [
        'Inova Health System expanded network to include more specialists',
        'Kaiser Permanente added new primary care locations in Centreville',
        'Virginia Hospital Center strengthened partnerships with urgent care centers',
        'New telehealth options available 24/7 for routine consultations',
      ],
    },
    {
      category: 'Plan Costs',
      changes: [
        'Average monthly premiums decreased by $8 compared to 2024',
        'Out-of-pocket maximums reduced by an average of $300',
        'New $0 premium plans available from 3 additional carriers',
        'Prescription drug deductibles lowered for most plans',
      ],
    },
  ],
  newPlans: [
    {
      name: 'UnitedHealthcare AARP Medicare Advantage Select',
      premium: '$0',
      features: ['$0 copay primary care', '$5 generic drugs', 'Dental & Vision included'],
    },
    {
      name: 'Humana Gold Plus HMO',
      premium: '$15',
      features: ['$1,500 dental allowance', 'Transportation benefits', 'Wellness rewards'],
    },
    {
      name: 'Anthem HealthKeepers Plus',
      premium: '$0',
      features: ['Inova network access', '$10 specialist visits', 'Medicare Part B giveback'],
    },
  ],
  importantDates: [
    { date: 'October 15, 2024', event: 'Medicare Open Enrollment begins' },
    { date: 'December 7, 2024', event: 'Medicare Open Enrollment ends' },
    { date: 'January 1, 2025', event: 'New Medicare Advantage plans take effect' },
    { date: 'January 1 - March 31, 2025', event: 'Medicare Advantage Open Enrollment Period' },
  ],
};

export default function Medicare2025ChangesFairfaxPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: '2025 Changes - Fairfax County', href: '/2025-medicare-advantage-changes-fairfax' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="2025 Medicare Advantage Changes Fairfax"
        county="Fairfax County"
        state="Virginia"
        keyMetrics={{
          keyChangesCount: fairfax2025Changes.keyChanges.length,
          newPlansCount: fairfax2025Changes.newPlans.length,
          importantDatesCount: fairfax2025Changes.importantDates.length,
          pageType: 'medicare_changes_2025'
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
            "name": "El-Mag Insurance - Fairfax VA Medicare Specialists",
            "description": "Medicare Advantage specialists serving Fairfax VA and Northern Virginia. Expert guidance on 2025 Medicare changes, 36 plans available with 15 $0 premium options.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fairfax",
              "addressRegion": "VA",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://elmag-insurance.com/2025-medicare-advantage-changes-fairfax",
            "sameAs": [
              "https://elmag-insurance.com"
            ],
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Fairfax County, Virginia"
            },
            "serviceType": "Medicare Advantage Plan Consultation and 2025 Changes Advisory"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "2025 Medicare Advantage Changes Fairfax VA | 36 Plans Available",
            "description": "Discover the latest 2025 Medicare Advantage changes in Fairfax VA. 36 plans available, 15 with $0 premiums. New Inova network expansions and enhanced benefits.",
            "url": "https://elmag-insurance.com/2025-medicare-advantage-changes-fairfax",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many Medicare Advantage plans are available in Fairfax VA for 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are 36 Medicare Advantage plans available in Fairfax VA for 2025, including 15 plans with $0 monthly premiums."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What are the major Medicare Advantage changes in Fairfax VA for 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Major 2025 changes include expanded Inova Health System networks, new Kaiser Permanente locations in Centreville, enhanced transportation services, increased dental coverage limits to $2,000, and new $0 premium plans from 3 additional carriers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When is the 2025 Medicare open enrollment period?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Medicare Open Enrollment runs from October 15, 2024 to December 7, 2024. New plans take effect January 1, 2025, with an additional Medicare Advantage Open Enrollment Period from January 1 - March 31, 2025."
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
                2025 Medicare Advantage Changes Fairfax VA: 36 Plans Available
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Discover the latest 2025 <Link href="/medicare-advantage" className="text-white underline hover:text-primary-100">Medicare Advantage</Link> changes in Fairfax VA. 36 plans available with 15 $0 premium options. 
                New Inova network expansions and enhanced benefits for Northern Virginia residents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/medicare-advantage/fairfax-county-virginia" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('view_plans', 'hero', '/medicare-advantage/fairfax-county-virginia')}
                >
                  View 36 Fairfax VA Plans
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

        {/* Fairfax Market Overview */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fairfax VA Medicare Advantage Market Overview 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fairfax County VA offers 36 Medicare Advantage plans for 2025, with 15 $0 premium options available. 
                31.73% enrollment rate provides competitive options with expanded Inova and Kaiser networks. Compare with other leading markets like <Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-800">Fort Worth TX (55 plans)</Link> or <Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-800">Rochester NY (24 plans)</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">36</div>
                <p className="text-gray-600 font-medium">Available MA Plans</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">15</div>
                <p className="text-gray-600 font-medium">$0 Premium Plans</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$13.24</div>
                <p className="text-gray-600 font-medium">Avg Monthly Premium</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
                <p className="text-gray-600 font-medium">4+ Star Rated Plans</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Enrollment Dates */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Important 2025 Medicare Dates for Fairfax VA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fairfax2025Changes.importantDates.map((item, index) => (
                <div key={index} className="bg-primary-50 p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">{item.date}</div>
                  <div className="text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Changes for 2025 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Major <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-800">Medicare Advantage</Link> Changes for 2025 in Fairfax VA & Northern Virginia
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {fairfax2025Changes.keyChanges.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Plans Available */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              New Medicare Advantage Plans Available in Fairfax VA for 2025
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {fairfax2025Changes.newPlans.map((plan, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">{plan.premium}/month</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider Network Updates */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Healthcare Provider Network Changes in Fairfax VA & Northern Virginia
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Expanded Networks</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-2">Inova Health System</h4>
                    <p className="text-gray-700 text-sm">Added 15 new specialists including cardiology, orthopedics, and neurology at Inova Fair Oaks and Inova Fairfax hospitals.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-2">Kaiser Permanente</h4>
                    <p className="text-gray-700 text-sm">Opening new primary care facility in Centreville with extended hours and same-day appointments.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">New Services</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-600 mb-2">Telehealth Expansion</h4>
                    <p className="text-gray-700 text-sm">24/7 virtual consultations now available for routine care, prescription renewals, and mental health services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-600 mb-2">Urgent Care Partnerships</h4>
                    <p className="text-gray-700 text-sm">New partnerships with Patient First and MedStar PromptCare locations throughout Northern Virginia. Similar network expansions are happening nationwide - see <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-800">Vanderbilt vs HCA changes in Nashville</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Means for You */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What These Changes Mean for Fairfax County Residents
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Good News</h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Lower average premiums for 2025
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      More $0 premium plan options
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Enhanced benefits and services
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Expanded provider networks
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Action Required</h3>
                  <ul className="space-y-2 text-yellow-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Review your current plan annually
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Check if your doctors are still in-network
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Compare new plan options
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Enroll by December 7, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Next Steps for Fairfax County Medicare Beneficiaries
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Review Your Current Plan</h3>
                <p className="text-gray-600">Check your 2024 Annual Notice of Change (ANOC) to understand how your current plan is changing for 2025.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare New Options</h3>
                <p className="text-gray-600">Use Medicare.gov or speak with a licensed agent to compare all available plans in Fairfax County.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enroll Before December 7</h3>
                <p className="text-gray-600">Make your plan selection before the December 7, 2024 deadline for coverage starting January 1, 2025.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Markets & Changes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              2025 Medicare Advantage Changes in Other Markets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Virginia Markets</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/medicare-advantage/virginia-beach-virginia" className="text-primary-600 hover:text-primary-800">Virginia Beach: 28 plans available</Link></li>
                  <li><Link href="/medicare-advantage/richmond-virginia" className="text-primary-600 hover:text-primary-800">Richmond: 32 plans with new benefits</Link></li>
                  <li><Link href="/medicare-advantage/norfolk-virginia" className="text-primary-600 hover:text-primary-800">Norfolk: Expanded Sentara networks</Link></li>
                </ul>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Markets</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/medicare-advantage/tarrant-county-texas" className="text-secondary-600 hover:text-secondary-800">Fort Worth TX: 55 plans, 29 $0 premium</Link></li>
                  <li><Link href="/medicare-advantage/monroe-county" className="text-secondary-600 hover:text-secondary-800">Rochester NY: 73.8% enrollment rate</Link></li>
                  <li><Link href="/medicare-advantage/davidson-county-tennessee" className="text-secondary-600 hover:text-secondary-800">Nashville TN: 46 plans available</Link></li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Provider Network Changes</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-green-600 hover:text-green-800">Vanderbilt vs HCA Nashville updates</Link></li>
                  <li><Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-green-600 hover:text-green-800">UAB vs St. Vincent's Birmingham changes</Link></li>
                  <li className="text-gray-600">More network expansions nationwide</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Not sure Medicare Advantage is right for you? Explore traditional coverage options:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-800 font-medium">
                  Medicare Supplement Plan F
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/annuities" className="text-primary-600 hover:text-primary-800 font-medium">
                  Retirement Annuities
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/accessibility" className="text-primary-600 hover:text-primary-800 font-medium">
                  Accessibility Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Understanding Your 2025 Medicare Options in Fairfax County?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our licensed Medicare specialists can help you navigate the 2025 changes and find the best 
              Medicare Advantage plan for your needs in Fairfax County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                onClick={() => (window as any).trackLandingPageCTA?.('contact_form', 'footer', '/contact')}
              >
                Get Free Consultation
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