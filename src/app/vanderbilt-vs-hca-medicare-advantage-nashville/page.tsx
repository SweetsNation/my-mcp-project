import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Nashville TN 2025 | 46 Plans Available | Vanderbilt vs HCA',
  description: 'Compare Medicare Advantage plans in Nashville TN. 46 plans available, 20 with $0 premiums. 57.11% enrollment rate. Vanderbilt network changes, HCA extensive coverage in Davidson County.',
  keywords: 'Medicare Advantage Nashville TN, Nashville Medicare plans 2025, Davidson County Medicare Advantage, Medicare plans Nashville Tennessee, HCA Medicare Nashville, Vanderbilt Medicare network 2025, Medicare Advantage Davidson County, Nashville TN Medicare enrollment',
  openGraph: {
    title: 'Medicare Advantage Nashville TN 2025 | 46 Plans Available',
    description: 'Compare Medicare Advantage plans in Nashville TN. 46 plans available with HCA extensive network. Vanderbilt network participation limited. 57.11% enrollment rate.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Nashville TN 2025 | 46 Plans Available',
    description: 'Compare Medicare Advantage networks in Nashville: HCA vs Vanderbilt. 46 plans available with 20 $0 premium options.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/vanderbilt-vs-hca-medicare-advantage-nashville',
  },
};

const providerComparison = {
  vanderbilt: {
    name: 'Vanderbilt University Medical Center',
    fullName: 'Vanderbilt University Medical Center',
    description: 'Academic medical center with world-class research and specialty care',
    locations: [
      'Vanderbilt University Medical Center (Main Campus)',
      'Monroe Carell Jr. Children\'s Hospital',
      'Vanderbilt-Ingram Cancer Center',
      'Vanderbilt Psychiatric Hospital',
      'Vanderbilt Clinics throughout Middle Tennessee',
    ],
    specialties: [
      'Cancer Treatment (NCI-designated comprehensive cancer center)',
      'Cardiovascular Surgery & Interventional Cardiology',
      'Organ Transplantation',
      'Neurosurgery & Neurology',
      'Children\'s Hospital',
      'Diabetes & Endocrinology Research',
    ],
    advantages: [
      'Top-ranked academic medical center',
      'Leading medical research institution',
      'Nationally recognized in multiple specialties',
      'Access to clinical trials and cutting-edge treatments',
      'Comprehensive children\'s hospital',
    ],
    medicareAdvantagePartners: [
      'BlueCross BlueShield of Tennessee',
      'Humana',
      'UnitedHealthcare',
    ],
  },
  hca: {
    name: 'HCA Healthcare',
    fullName: 'Hospital Corporation of America Healthcare',
    description: 'Extensive network of community hospitals and healthcare facilities',
    locations: [
      'TriStar Centennial Medical Center',
      'Saint Thomas West Hospital',
      'Saint Thomas Midtown Hospital',
      'TriStar Nashville',
      'Southern Hills Medical Center',
      'Multiple urgent care and outpatient centers',
    ],
    specialties: [
      'Emergency Medicine',
      'Heart & Vascular Care',
      'Maternity & Women\'s Health',
      'Orthopedic Services',
      'Primary Care Network',
      'Urgent Care Services',
    ],
    advantages: [
      'Largest healthcare network in Middle Tennessee',
      'Convenient locations throughout Nashville metro',
      'Strong primary care presence',
      'Comprehensive emergency services',
      'Focus on community healthcare',
    ],
    medicareAdvantagePartners: [
      'BlueCross BlueShield of Tennessee',
      'Humana',
      'Aetna Better Health',
    ],
  },
};

const planComparison = [
  {
    feature: 'Hospital Network',
    vanderbilt: 'VUMC, Vanderbilt specialties, limited locations',
    hca: 'Multiple HCA hospitals, Saint Thomas, TriStar network',
  },
  {
    feature: 'Primary Care Access',
    vanderbilt: 'Vanderbilt clinics, academic medicine focus',
    hca: 'Extensive primary care network, community physicians',
  },
  {
    feature: 'Specialty Care',
    vanderbilt: 'World-class specialists, research-based care',
    hca: 'Comprehensive specialty services, community-focused',
  },
  {
    feature: 'Emergency Care',
    vanderbilt: 'Level 1 trauma center, specialized emergency care',
    hca: 'Multiple emergency departments, urgent care centers',
  },
  {
    feature: 'Geographic Coverage',
    vanderbilt: 'Concentrated in Nashville with select locations',
    hca: 'Wide coverage across Nashville metro and Middle Tennessee',
  },
];

const nashvilleMedicare = {
  totalBeneficiaries: 135000,
  maPenetration: 57.11,
  topPlans: [
    {
      name: 'BlueCross BlueShield of Tennessee Medicare Advantage',
      network: 'Both Vanderbilt and HCA networks',
      premium: '$0',
      rating: '4.5 stars',
    },
    {
      name: 'Humana Gold Plus HMO',
      network: 'Select providers from both systems',
      premium: '$25',
      rating: '4 stars',
    },
    {
      name: 'UnitedHealthcare AARP Medicare Advantage',
      network: 'Primarily Vanderbilt and select HCA facilities',
      premium: '$0',
      rating: '4 stars',
    },
  ],
};

export default function VanderbiltvsHCANashvillePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Vanderbilt vs HCA Nashville', href: '/vanderbilt-vs-hca-medicare-advantage-nashville' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Vanderbilt vs HCA Medicare Advantage Nashville"
        county="Davidson County"
        state="Tennessee"
        demographics={{
          avgAge: 73,
          maPenetrationRate: nashvilleMedicare.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: nashvilleMedicare.totalBeneficiaries,
          availablePlans: nashvilleMedicare.topPlans.length,
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
            "name": "El-Mag Insurance - Nashville TN Medicare Specialists",
            "description": "Medicare Advantage specialists serving Nashville TN and Davidson County. Expert guidance on Vanderbilt vs HCA healthcare networks and 46 available Medicare plans.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nashville",
              "addressRegion": "TN",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://elmag-insurance.com/vanderbilt-vs-hca-medicare-advantage-nashville",
            "sameAs": [
              "https://elmag-insurance.com"
            ],
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Davidson County, Tennessee"
            },
            "serviceType": "Medicare Advantage Plan Comparison and Network Analysis"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medicare Advantage Nashville TN 2025 | 46 Plans Available | Vanderbilt vs HCA",
            "description": "Compare Medicare Advantage plans in Nashville TN. 46 plans available, 20 with $0 premiums. 57.11% enrollment rate. Vanderbilt network changes, HCA extensive coverage.",
            "url": "https://elmag-insurance.com/vanderbilt-vs-hca-medicare-advantage-nashville",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How many Medicare Advantage plans are available in Nashville TN?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are 46 Medicare Advantage plans available in Nashville TN and Davidson County for 2025, including 20 plans with $0 monthly premiums and an average star rating of 3.48."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What's the difference between Vanderbilt and HCA Medicare networks in Nashville?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vanderbilt University Medical Center is an academic medical center focused on specialized care and research with limited Medicare Advantage participation. HCA Healthcare has an extensive community-based network with multiple hospitals throughout Nashville and Middle Tennessee."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Vanderbilt accept Medicare Advantage plans in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Vanderbilt has limited Medicare Advantage participation. As of December 31, 2024, Vanderbilt is out-of-network with Blue Cross Blue Shield Tennessee Medicare Advantage plans and previously dropped Humana Medicare Advantage plans in April 2023."
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
                Medicare Advantage Nashville TN 2025: 46 Plans Available
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Compare Medicare Advantage plans in Nashville TN. 46 plans available with 20 $0 premium options. 
                57.11% enrollment rate. HCA extensive network vs Vanderbilt limited Medicare participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/medicare-advantage/davidson-county-tennessee" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('view_plans', 'hero', '/medicare-advantage/davidson-county-tennessee')}
                >
                  View 46 Nashville Plans
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

        {/* Nashville Medicare Market Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Nashville TN Medicare Advantage Market Overview 2025
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-primary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary-600">135,000</div>
                <div className="text-gray-600">Medicare Beneficiaries</div>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600">46</div>
                <div className="text-gray-600">MA Plans Available</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-600">20</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">3.48</div>
                <div className="text-gray-600">Average Star Rating</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Nashville's Medicare landscape extends beyond provider networks. Explore comprehensive Medicare guidance including 
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
                Provider network comparisons are essential for Medicare decisions. Similar healthcare system comparisons exist in other major markets, like 
                <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline">UAB vs St. Vincent's in Birmingham</Link>, 
                helping Medicare beneficiaries nationwide make informed choices.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vanderbilt */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">{providerComparison.vanderbilt.name}</h3>
                  <p className="text-gray-600">{providerComparison.vanderbilt.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Locations:</h4>
                  <ul className="space-y-2">
                    {providerComparison.vanderbilt.locations.map((location, index) => (
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
                    {providerComparison.vanderbilt.specialties.map((specialty, index) => (
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
                    {providerComparison.vanderbilt.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <span className="text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* HCA Healthcare */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-2">{providerComparison.hca.name}</h3>
                  <p className="text-gray-600">{providerComparison.hca.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Locations:</h4>
                  <ul className="space-y-2">
                    {providerComparison.hca.locations.map((location, index) => (
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
                    {providerComparison.hca.specialties.map((specialty, index) => (
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
                    {providerComparison.hca.advantages.map((advantage, index) => (
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
                    <th className="px-6 py-4 text-left text-sm font-semibold text-primary-600">Vanderbilt</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-600">HCA Healthcare</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.vanderbilt}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.hca}</td>
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
              Top Medicare Advantage Plans in Nashville
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {nashvilleMedicare.topPlans.map((plan, index) => (
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
                  <h4 className="font-semibold text-primary-800 mb-2">Vanderbilt Partners:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {providerComparison.vanderbilt.medicareAdvantagePartners.map((partner, index) => (
                      <li key={index}>• {partner}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-2">HCA Partners:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {providerComparison.hca.medicareAdvantagePartners.map((partner, index) => (
                      <li key={index}>• {partner}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Understanding Medicare changes is crucial for Nashville residents. Learn about the 
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
              Choosing Between Vanderbilt and HCA Networks
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">Choose Vanderbilt If You:</h3>
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
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                      <span>Need pediatric specialty care</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4">Choose HCA Healthcare If You:</h3>
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
                      <span>Need extensive emergency services access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                      <span>Live in outlying areas of Middle Tennessee</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                      <span>Want a large primary care network</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Additional Considerations for Nashville Residents</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">Geographic Accessibility:</h4>
                    <p>Consider your location within Davidson County and proximity to preferred facilities. Explore other Tennessee markets like <Link href="/medicare-advantage/tennessee" className="text-primary-600 hover:text-primary-700 underline">statewide Medicare options</Link>.</p>
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
                  Nashville's healthcare landscape is unique, but similar decisions face Medicare beneficiaries across the country. Compare regional markets:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Southern Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline">Birmingham: UAB vs St. Vincent's</Link></li>
                      <li>• <Link href="/medicare-advantage/southwest" className="text-primary-600 hover:text-primary-700 underline">Southwest Regional Plans</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Texas Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-700 underline">Tarrant County (Fort Worth)</Link></li>
                      <li>• <Link href="/medicare-advantage/dallas-county-texas" className="text-primary-600 hover:text-primary-700 underline">Dallas County Plans</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">East Coast:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-700 underline">Monroe County (Rochester NY)</Link></li>
                      <li>• <Link href="/medicare-advantage/mid-atlantic" className="text-primary-600 hover:text-primary-700 underline">Mid-Atlantic Region</Link></li>
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
              Need Help Choosing Between Vanderbilt and HCA Medicare Plans?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Nashville-area Medicare specialists understand both health systems and can help you 
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