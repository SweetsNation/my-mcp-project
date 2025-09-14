import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'UAB vs St. Vincent\'s Medicare Advantage Birmingham AL 2025 | 42 Plans Available',
  description: 'Compare UAB Medicine and St. Vincent\'s Medicare Advantage plans in Birmingham AL. 42 plans available, Viva Health 5-star rated, Blue Cross 38,524 enrolled. Jefferson County Medicare guide.',
  keywords: 'UAB Medicare Advantage Birmingham AL, St Vincents Medicare Birmingham Alabama, Jefferson County Medicare plans 2025, Birmingham AL Medicare Advantage, Viva Medicare UAB, Blue Cross Blue Shield Birmingham Medicare, Medicare plans Birmingham Alabama, UAB vs St Vincents 2025',
  openGraph: {
    title: 'UAB vs St. Vincent\'s Medicare Advantage Birmingham AL 2025 | 42 Plans Available',
    description: 'Compare UAB Medicine and St. Vincent\'s Medicare Advantage networks in Birmingham AL. Viva Health 5-star rated, 42 plans from 10 insurers available.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAB vs St. Vincent\'s Medicare Advantage Birmingham AL 2025',
    description: 'Compare Medicare Advantage networks: UAB Medicine vs St. Vincent\'s in Birmingham AL. 42 plans available.',
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/uab-vs-st-vincents-medicare-advantage-birmingham',
  },
};

const providerComparison = {
  uab: {
    name: 'UAB Medicine',
    fullName: 'University of Alabama at Birmingham Medicine',
    description: 'Academic medical center with comprehensive specialty care',
    locations: [
      'UAB Hospital (Main Campus)',
      'UAB Highlands',
      'UAB Medicine-Leeds',
      'UAB Medicine-Gardendale',
      'UAB Medicine-Hoover',
    ],
    specialties: [
      'Cardiovascular Surgery',
      'Cancer Treatment (O\'Neal Comprehensive Cancer Center)',
      'Organ Transplantation',
      'Neurosurgery',
      'Orthopedic Surgery',
      'Diabetes & Endocrinology',
    ],
    advantages: [
      'Leading academic medical center in the Southeast',
      'Nationally ranked in multiple specialties',
      'Advanced research and clinical trials access',
      'Comprehensive cancer center',
      'Top-tier specialists and subspecialists',
    ],
    medicareAdvantagePartners: [
      'Blue Cross Blue Shield of Alabama',
      'Humana',
      'UnitedHealthcare',
    ],
  },
  stVincents: {
    name: 'St. Vincent\'s Health System',
    fullName: 'Ascension St. Vincent\'s Health System',
    description: 'Catholic health system focused on community care and accessibility',
    locations: [
      'St. Vincent\'s Birmingham',
      'St. Vincent\'s East',
      'St. Vincent\'s Blount',
      'St. Vincent\'s Chilton',
      'St. Vincent\'s One Nineteen',
    ],
    specialties: [
      'Emergency Medicine',
      'Maternity & Women\'s Health',
      'Heart & Vascular Care',
      'Orthopedic Services',
      'Primary Care Network',
      'Urgent Care Centers',
    ],
    advantages: [
      'Extensive network throughout Jefferson County',
      'Strong primary care presence',
      'Multiple convenient locations',
      'Focus on preventive care',
      'Comprehensive women\'s health services',
    ],
    medicareAdvantagePartners: [
      'Blue Cross Blue Shield of Alabama',
      'Humana',
      'Aetna Better Health',
    ],
  },
};

const planComparison = [
  {
    feature: 'Hospital Network',
    uab: 'UAB Hospital, UAB Highlands, specialized facilities',
    stVincents: 'St. Vincent\'s Birmingham, East, Blount, multiple locations',
  },
  {
    feature: 'Primary Care Access',
    uab: 'UAB Medicine clinics throughout Birmingham metro',
    stVincents: 'Extensive primary care network, multiple locations',
  },
  {
    feature: 'Specialty Care',
    uab: 'World-class specialists, research-based care',
    stVincents: 'Comprehensive specialty services, community-focused',
  },
  {
    feature: 'Emergency Care',
    uab: 'Level 1 trauma center, emergency medicine residency',
    stVincents: 'Multiple emergency departments, urgent care centers',
  },
  {
    feature: 'Geographic Coverage',
    uab: 'Concentrated in Birmingham with satellite locations',
    stVincents: 'Wide coverage across Jefferson and surrounding counties',
  },
];

const birminghamMedicare = {
  totalBeneficiaries: 125000,
  maPenetration: 35,
  topPlans: [
    {
      name: 'Blue Cross Blue Shield of Alabama Medicare Advantage',
      network: 'Both UAB and St. Vincent\'s',
      premium: '$0',
      rating: '4.5 stars',
    },
    {
      name: 'Humana Gold Plus HMO',
      network: 'Select providers from both systems',
      premium: '$18',
      rating: '4 stars',
    },
    {
      name: 'UnitedHealthcare AARP Medicare Advantage',
      network: 'Primarily UAB network',
      premium: '$0',
      rating: '4 stars',
    },
  ],
};

export default function UABvsStVincentsBirminghamPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'UAB vs St. Vincents Birmingham', href: '/uab-vs-st-vincents-medicare-advantage-birmingham' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="UAB vs St Vincents Medicare Advantage Birmingham"
        county="Jefferson County"
        state="Alabama"
        demographics={{
          avgAge: 72,
          maPenetrationRate: birminghamMedicare.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: birminghamMedicare.totalBeneficiaries,
          availablePlans: birminghamMedicare.topPlans.length,
          primaryProviders: 2,
          pageType: 'provider_comparison'
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
            "name": "El-Mag Insurance - Birmingham AL Medicare Specialists",
            "description": "Medicare Advantage specialists serving Birmingham AL and Jefferson County. Expert guidance on UAB Medicine vs St. Vincent's Medicare networks.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Birmingham",
              "addressRegion": "AL",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/uab-vs-st-vincents-medicare-advantage-birmingham",
            "sameAs": [
              "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app"
            ],
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Jefferson County, Alabama"
            },
            "serviceType": "Medicare Advantage Plan Comparison and Consultation"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "UAB vs St. Vincent's Medicare Advantage Birmingham AL 2025 | 42 Plans Available",
            "description": "Compare UAB Medicine and St. Vincent's Medicare Advantage plans in Birmingham AL. 42 plans available, Viva Health 5-star rated, Blue Cross 38,524 enrolled.",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/uab-vs-st-vincents-medicare-advantage-birmingham",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many Medicare Advantage plans are available in Birmingham AL?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are 42 Medicare Advantage plans available in Birmingham AL and Jefferson County from 10 different insurance companies, with an average premium of $23 per month."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What's the difference between UAB Medicine and St. Vincent's Medicare networks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UAB Medicine is an academic medical center focused on specialized care, research, and complex conditions. St. Vincent's is a community-based Catholic health system with extensive primary care and multiple convenient locations throughout Jefferson County."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which Medicare Advantage plan is most popular in Birmingham AL?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Blue Cross Blue Shield of Alabama Medicare Advantage is the most popular plan with 38,524 seniors enrolled. It includes both UAB Medicine and St. Vincent's networks with a $0 premium and 4.5-star rating."
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
                UAB Medicine vs St. Vincent's Medicare Advantage Birmingham AL 2025
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare Birmingham AL's top healthcare systems for Medicare Advantage. 42 plans available from 10 insurers. 
                Viva Health 5-star rated, Blue Cross serves 38,524 members. Jefferson County Medicare guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/medicare-advantage/jefferson-county-alabama" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('view_plans', 'hero', '/medicare-advantage/jefferson-county-alabama')}
                >
                  View 42 Birmingham AL Plans
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

        {/* Birmingham Medicare Market Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Birmingham AL Medicare Advantage Market Overview 2025
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">125,000</div>
                <div className="text-gray-600">Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">42</div>
                <div className="text-gray-600">MA Plans Available</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">10</div>
                <div className="text-gray-600">Insurance Companies</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">$23</div>
                <div className="text-gray-600">Average Premium</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Birmingham's Medicare landscape extends beyond provider networks. Explore comprehensive Medicare guidance including 
                <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                and <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Supplement Plan F</Link> 
                for complete coverage protection.
              </p>
            </div>
          </div>
        </section>

        {/* Provider Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Health System Comparison
            </h2>
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Provider network comparisons are essential for Medicare decisions. Similar provider comparisons exist in other major markets, like 
                <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-700 underline">Vanderbilt vs HCA in Nashville</Link>, 
                helping Medicare beneficiaries nationwide make informed choices.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* UAB Medicine */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">{providerComparison.uab.name}</h3>
                  <p className="text-gray-600">{providerComparison.uab.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Locations:</h4>
                  <ul className="space-y-2">
                    {providerComparison.uab.locations.map((location, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        <span className="text-sm">{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties:</h4>
                  <ul className="space-y-2">
                    {providerComparison.uab.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        <span className="text-sm">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Advantages:</h4>
                  <ul className="space-y-2">
                    {providerComparison.uab.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <span className="text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* St. Vincent's */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-2">{providerComparison.stVincents.name}</h3>
                  <p className="text-gray-600">{providerComparison.stVincents.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Locations:</h4>
                  <ul className="space-y-2">
                    {providerComparison.stVincents.locations.map((location, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></span>
                        <span className="text-sm">{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties:</h4>
                  <ul className="space-y-2">
                    {providerComparison.stVincents.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        <span className="text-sm">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Advantages:</h4>
                  <ul className="space-y-2">
                    {providerComparison.stVincents.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <span className="text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Network Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-600">UAB Medicine</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-600">St. Vincent's</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.uab}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.stVincents}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Medicare Advantage Plans */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Top Medicare Advantage Plans in Birmingham
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {birminghamMedicare.topPlans.map((plan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{plan.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Premium:</span>
                      <span className="font-semibold text-primary-600">{plan.premium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold text-yellow-600">{plan.rating}</span>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Network:</span> {plan.network}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medicare Advantage Partners</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">UAB Medicine Partners:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {providerComparison.uab.medicareAdvantagePartners.map((partner, index) => (
                      <li key={index}>• {partner}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-2">St. Vincent's Partners:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {providerComparison.stVincents.medicareAdvantagePartners.map((partner, index) => (
                      <li key={index}>• {partner}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Understanding Medicare changes is crucial for Birmingham residents. Learn about the 
                  <Link href="/2025-medicare-advantage-changes-fairfax" className="text-primary-600 hover:text-primary-700 underline mx-1">2025 Medicare Advantage changes</Link> 
                  that may affect your coverage options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Factors */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Choosing Between UAB and St. Vincent's Networks
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">Choose UAB Medicine If You:</h3>
                  <ul className="space-y-2 text-primary-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                      <span>Need specialized or complex medical care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                      <span>Want access to clinical trials and research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                      <span>Have complex medical conditions requiring specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                      <span>Prefer academic medical center environment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4">Choose St. Vincent's If You:</h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                      <span>Value convenience and multiple locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                      <span>Prefer community-based healthcare approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                      <span>Need extensive primary care access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                      <span>Live in outlying areas of Jefferson County</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Additional Considerations for Birmingham Residents</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">Geographic Accessibility:</h4>
                    <p>Consider your location within Jefferson County and proximity to preferred facilities. Explore other Alabama markets like <Link href="/medicare-advantage/alabama" className="text-primary-600 hover:text-primary-700 underline">statewide Medicare options</Link>.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Retirement Planning:</h4>
                    <p>Healthcare costs are a major retirement expense. Consider pairing your Medicare choice with <Link href="/annuities" className="text-primary-600 hover:text-primary-700 underline">annuities for guaranteed retirement income</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Making Your Decision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Making Your Medicare Advantage Decision
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Check Your Doctors</h3>
                    <p className="text-gray-600 text-sm">Verify that your current doctors are in-network with your chosen Medicare Advantage plan.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Your Health Needs</h3>
                    <p className="text-gray-600 text-sm">Think about your current health conditions and which system best serves those needs.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Compare Plan Benefits</h3>
                    <p className="text-gray-600 text-sm">Review premiums, deductibles, copays, and additional benefits offered by each plan.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Regional Medicare Markets</h3>
                <p className="text-gray-600 mb-4">
                  Birmingham's healthcare landscape is unique, but similar decisions face Medicare beneficiaries across the country. Compare regional markets:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Texas Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-700 underline">Tarrant County (Fort Worth)</Link></li>
                      <li>• <Link href="/medicare-advantage/dallas-county-texas" className="text-primary-600 hover:text-primary-700 underline">Dallas County Plans</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">East Coast Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-700 underline">Monroe County (Rochester NY)</Link></li>
                      <li>• <Link href="/medicare-advantage/mid-atlantic" className="text-primary-600 hover:text-primary-700 underline">Mid-Atlantic Region</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">West Coast:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/los-angeles-county-california" className="text-primary-600 hover:text-primary-700 underline">Los Angeles County</Link></li>
                      <li>• <Link href="/medicare-advantage/west-coast" className="text-primary-600 hover:text-primary-700 underline">West Coast Plans</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Choosing Between UAB and St. Vincent's Medicare Plans?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Birmingham-area Medicare specialists understand both health systems and can help you 
              find the right Medicare Advantage plan for your healthcare needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                onClick={() => (window as any).trackLandingPageCTA?.('expert_guidance', 'footer', '/contact')}
              >
                Get Expert Guidance
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