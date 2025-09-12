import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Emory vs Piedmont Medicare Advantage Atlanta GA 2025 | 52 Plans Available',
  description: 'Compare Emory Healthcare vs Piedmont Atlanta Medicare Advantage networks. 52 plans available in Atlanta GA, 28 with $0 premiums. Expert guidance on healthcare system differences.',
  keywords: 'Emory Healthcare Medicare Atlanta, Piedmont Atlanta Medicare Advantage, Atlanta GA Medicare plans 2025, Fulton County Medicare Advantage, DeKalb County Medicare, Georgia Medicare networks, Emory vs Piedmont comparison',
  openGraph: {
    title: 'Emory vs Piedmont Medicare Advantage Atlanta GA 2025 | 52 Plans Available',
    description: 'Compare Emory Healthcare vs Piedmont Atlanta Medicare networks. 52 plans available with comprehensive provider comparisons and network analysis.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emory vs Piedmont Medicare Advantage Atlanta GA 2025',
    description: 'Compare Atlanta healthcare networks: Emory vs Piedmont Medicare Advantage plans. 52 options with $0 premium choices.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/emory-vs-piedmont-medicare-advantage-atlanta',
  },
};

const providerComparison = {
  emory: {
    name: 'Emory Healthcare',
    fullName: 'Emory Healthcare System',
    description: 'Academic medical center with research excellence and comprehensive specialty care',
    locations: [
      'Emory University Hospital',
      'Emory University Hospital Midtown',
      'Emory Saint Joseph\'s Hospital',
      'Emory Johns Creek Hospital',
      'Emory Decatur Hospital',
      'Emory Hillandale Hospital',
      'Multiple Emory Clinic locations'
    ],
    specialties: [
      'Cancer Care (Winship Cancer Institute)',
      'Heart & Vascular Center',
      'Neurosciences & Spine Center',
      'Organ Transplantation',
      'Children\'s Healthcare',
      'Rehabilitation Medicine',
      'Emergency & Trauma Care'
    ],
    advantages: [
      'Academic medical center with research focus',
      'Nationally ranked specialty programs',
      'Emory University School of Medicine affiliation',
      'Advanced clinical trials access',
      'Comprehensive cancer care center',
      'Multiple convenient Atlanta locations'
    ],
    medicareAdvantagePartners: [
      'Kaiser Permanente Georgia',
      'Humana',
      'UnitedHealthcare',
      'Anthem Blue Cross Blue Shield'
    ],
  },
  piedmont: {
    name: 'Piedmont Healthcare',
    fullName: 'Piedmont Healthcare System',
    description: 'Georgia\'s largest healthcare system with extensive community presence',
    locations: [
      'Piedmont Atlanta Hospital',
      'Piedmont Heart Institute',
      'Piedmont Fayette Hospital',
      'Piedmont Henry Hospital',
      'Piedmont Newnan Hospital',
      'Piedmont Newton Hospital',
      'Multiple Piedmont Clinic locations'
    ],
    specialties: [
      'Heart & Vascular Care',
      'Cancer Treatment',
      'Neurology & Neurosurgery',
      'Orthopedics & Sports Medicine',
      'Women\'s Services',
      'Emergency Care',
      'Primary Care Network'
    ],
    advantages: [
      'Georgia\'s largest healthcare system',
      'Extensive metro Atlanta coverage',
      'Strong primary care network',
      'Community-focused healthcare approach',
      'Multiple hospital locations',
      'Comprehensive emergency services'
    ],
    medicareAdvantagePartners: [
      'Kaiser Permanente Georgia',
      'Humana',
      'Anthem Blue Cross Blue Shield',
      'Aetna Better Health'
    ],
  },
};

const planComparison = [
  {
    feature: 'Hospital Network',
    emory: 'Emory hospitals, academic medical centers, specialized facilities',
    piedmont: 'Piedmont hospitals, community hospitals, extensive metro coverage',
  },
  {
    feature: 'Primary Care Access',
    emory: 'Emory Clinic locations, academic medicine approach',
    piedmont: 'Extensive primary care network, community physicians',
  },
  {
    feature: 'Specialty Care',
    emory: 'Research-based specialists, clinical trials, advanced treatments',
    piedmont: 'Comprehensive specialty services, community-focused care',
  },
  {
    feature: 'Emergency Care',
    emory: 'Level 1 trauma centers, specialized emergency care',
    piedmont: 'Multiple emergency departments, urgent care centers',
  },
  {
    feature: 'Geographic Coverage',
    emory: 'Central Atlanta with select metro locations',
    piedmont: 'Extensive coverage across metro Atlanta and North Georgia',
  },
];

const atlantaMedicare = {
  totalBeneficiaries: 285000,
  maPenetration: 41.2,
  topPlans: [
    {
      name: 'Kaiser Permanente Georgia Medicare Advantage',
      network: 'Kaiser Permanente network with Emory partnerships',
      premium: '$0',
      rating: '4 stars',
    },
    {
      name: 'Humana Gold Plus HMO',
      network: 'Both Emory and Piedmont providers',
      premium: '$18',
      rating: '4.5 stars',
    },
    {
      name: 'UnitedHealthcare AARP Medicare Advantage',
      network: 'Select Emory and Piedmont facilities',
      premium: '$0',
      rating: '4 stars',
    },
  ],
};

export default function EmoryVsPiedmontAtlantaPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Emory vs Piedmont Atlanta', href: '/emory-vs-piedmont-medicare-advantage-atlanta' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Emory vs Piedmont Medicare Advantage Atlanta"
        county="Fulton County"
        state="Georgia"
        demographics={{
          avgAge: 72,
          maPenetrationRate: atlantaMedicare.maPenetration,
        }}
        keyMetrics={{
          totalBeneficiaries: atlantaMedicare.totalBeneficiaries,
          availablePlans: 52,
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
            "name": "El-Mag Insurance - Atlanta GA Medicare Specialists",
            "description": "Medicare Advantage specialists serving Atlanta GA and metro area. Expert guidance on Emory Healthcare vs Piedmont Healthcare networks and 52 available Medicare plans.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "addressCountry": "US"
            },
            "telephone": "331-343-2584",
            "url": "https://elmag-insurance.com/emory-vs-piedmont-medicare-advantage-atlanta",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Atlanta Metro Area, Georgia"
            },
            "serviceType": "Medicare Advantage Plan Comparison and Healthcare Network Analysis"
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
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Emory vs Piedmont Medicare Advantage Atlanta GA 2025: 52 Plans Available
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Compare Emory Healthcare vs Piedmont Atlanta Medicare networks. 52 plans available with 28 $0 premium options. 
                  Expert guidance on Georgia's top healthcare systems and Medicare Advantage coverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/medicare-advantage/fulton-county-georgia" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPageCTA?.('view_plans', 'hero', '/medicare-advantage/fulton-county-georgia')}
                  >
                    View 52 Atlanta Plans
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

          {/* Atlanta Medicare Market Overview */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Atlanta GA Medicare Advantage Market Overview 2025
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">285,000</div>
                  <div className="text-gray-600">Medicare Beneficiaries</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600">52</div>
                  <div className="text-gray-600">MA Plans Available</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">28</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">41.2%</div>
                  <div className="text-gray-600">MA Penetration Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Atlanta's Medicare landscape features two major healthcare systems competing for beneficiaries. Explore comprehensive Medicare guidance including 
                  <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                  and <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Supplement options</Link> 
                  for complete coverage protection.
                </p>
              </div>
            </div>
          </section>

          {/* Healthcare System Comparison */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Atlanta Healthcare System Comparison: Emory vs Piedmont
              </h2>
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Provider network comparisons are essential for Medicare decisions in major metropolitan areas. Similar healthcare system comparisons exist in other markets, like 
                  <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline">UAB vs St. Vincent's in Birmingham</Link> and 
                  <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-700 underline mx-1">Vanderbilt vs HCA in Nashville</Link>.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Emory Healthcare */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{providerComparison.emory.name}</h3>
                    <p className="text-gray-600">{providerComparison.emory.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Locations:</h4>
                    <ul className="space-y-2">
                      {providerComparison.emory.locations.map((location, index) => (
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
                      {providerComparison.emory.specialties.map((specialty, index) => (
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
                      {providerComparison.emory.advantages.map((advantage, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Piedmont Healthcare */}
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-secondary-600 mb-2">{providerComparison.piedmont.name}</h3>
                    <p className="text-gray-600">{providerComparison.piedmont.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Locations:</h4>
                    <ul className="space-y-2">
                      {providerComparison.piedmont.locations.map((location, index) => (
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
                      {providerComparison.piedmont.specialties.map((specialty, index) => (
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
                      {providerComparison.piedmont.advantages.map((advantage, index) => (
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

          {/* Network Feature Comparison */}
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
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary-600">Emory Healthcare</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-600">Piedmont Healthcare</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.emory}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.piedmont}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Top Medicare Advantage Plans */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Medicare Advantage Plans in Atlanta
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {atlantaMedicare.topPlans.map((plan, index) => (
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
                    <h4 className="font-semibold text-primary-800 mb-2">Emory Healthcare Partners:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {providerComparison.emory.medicareAdvantagePartners.map((partner, index) => (
                        <li key={index}>• {partner}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">Piedmont Healthcare Partners:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {providerComparison.piedmont.medicareAdvantagePartners.map((partner, index) => (
                        <li key={index}>• {partner}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Understanding Medicare changes is crucial for Atlanta residents. Learn about the 
                    <Link href="/2025-medicare-advantage-changes-fairfax" className="text-primary-600 hover:text-primary-700 underline mx-1">2025 Medicare Advantage changes</Link> 
                    that may affect your coverage options nationwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Healthcare System Selection Guidance */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Choosing Between Emory and Piedmont Networks
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">Choose Emory Healthcare If You:</h3>
                    <ul className="space-y-2 text-primary-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                        <span>Need specialized cancer treatment or clinical trials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                        <span>Prefer academic medical center approach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                        <span>Have complex medical conditions requiring research-based care</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                        <span>Want access to cutting-edge treatments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                        <span>Live in central Atlanta or Decatur area</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-secondary-800 mb-4">Choose Piedmont Healthcare If You:</h3>
                    <ul className="space-y-2 text-secondary-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                        <span>Value extensive geographic coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                        <span>Prefer community-based healthcare approach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                        <span>Need convenient access to multiple locations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                        <span>Live in suburban Atlanta or North Georgia</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary-600 rounded-full mr-3 mt-2"></span>
                        <span>Want a large primary care network</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Additional Considerations for Atlanta Residents</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                    <div>
                      <h4 className="font-semibold mb-2">Geographic Accessibility:</h4>
                      <p>Consider your location within metro Atlanta and proximity to preferred facilities. Explore other Georgia markets and <Link href="/medicare-advantage/fulton-county-georgia" className="text-primary-600 hover:text-primary-700 underline">Fulton County Medicare options</Link>.</p>
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

          {/* Regional Medicare Markets */}
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
                    Atlanta's healthcare landscape is unique, but similar decisions face Medicare beneficiaries across the country. Compare regional markets:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Southern Markets:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline">Birmingham: UAB vs St. Vincent's</Link></li>
                        <li>• <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-700 underline">Nashville: Vanderbilt vs HCA</Link></li>
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
                Need Help Choosing Between Emory and Piedmont Medicare Plans?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our Atlanta-area Medicare specialists understand both healthcare systems and can help you 
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