import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans New York State 2025 | $0 Premium Plans Available | El-Mag Insurance',
  description: 'Compare 2025 Medicare Advantage plans in New York State with $0 premiums and 5-star ratings. NYC, Long Island, Upstate coverage with NewYork-Presbyterian, Mount Sinai, NYU Langone access.',
  keywords: 'Medicare Advantage New York, $0 premium Medicare plans NYC, NewYork-Presbyterian Medicare Advantage, Mount Sinai Medicare plans, NYU Langone Medicare Advantage, Medicare Advantage Manhattan, Medicare plans Brooklyn, Queens Medicare Advantage, Bronx Medicare plans, Staten Island Medicare, Long Island Medicare Advantage, Westchester County Medicare, Upstate New York Medicare, Medicare plans Albany, Buffalo Medicare Advantage, Rochester Medicare plans, Syracuse Medicare, multilingual Medicare New York',
  openGraph: {
    title: 'Medicare Advantage Plans New York State 2025 | $0 Premium Plans',
    description: 'Compare 2025 Medicare Advantage plans in NY with $0 premiums. Access NewYork-Presbyterian, Mount Sinai, NYU Langone with 5-star rated plans.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Advantage Plans New York State 2025 | $0 Premium Plans',
    description: 'Compare NY Medicare Advantage plans with $0 premiums and 5-star ratings. NewYork-Presbyterian, Mount Sinai access.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/new-york',
  },
};

// Competitive advantages for New York State
const competitiveAdvantages = [
  {
    title: 'World-Class Medical Centers',
    description: 'Access to NewYork-Presbyterian, Mount Sinai, NYU Langone - internationally renowned healthcare systems with cutting-edge treatments and research.',
    icon: '🏥'
  },
  {
    title: 'Multilingual Healthcare Support',
    description: 'Healthcare services available in 20+ languages including Spanish, Chinese, Russian, Arabic, and Bengali with certified medical interpreters.',
    icon: '🌍'
  },
  {
    title: 'Comprehensive Transportation Benefits',
    description: 'Enhanced transportation coverage including MetroCard assistance, Access-A-Ride services, and medical shuttle transportation throughout NYC and beyond.',
    icon: '🚇'
  },
  {
    title: 'Urban & Rural Healthcare Integration',
    description: 'Seamless care coordination from Manhattan to Upstate NY, combining world-class urban facilities with comprehensive rural telehealth services.',
    icon: '🔗'
  }
];

// Medicare comparison data
const planComparison = {
  original: {
    name: 'Original Medicare',
    premium: '$174.70/month',
    deductible: '$1,676 annually',
    drugCoverage: 'Separate Part D required',
    dentalVision: 'Not included',
    transportation: 'Not covered',
    languages: 'English only'
  },
  advantage: {
    name: 'Medicare Advantage',
    premium: '$0-$50/month',
    deductible: '$0-$500 annually',
    drugCoverage: 'Often included',
    dentalVision: 'Usually included',
    transportation: 'MetroCard/Access-A-Ride',
    languages: '20+ languages supported'
  }
};

// Enrollment periods
const enrollmentPeriods = [
  {
    period: 'Annual Open Enrollment',
    dates: 'October 15 - December 7, 2024',
    action: 'Compare and switch plans',
    deadline: 'December 7, 2024',
    spanish: 'Inscripción Abierta Anual'
  },
  {
    period: 'Medicare Advantage Open Enrollment',
    dates: 'January 1 - March 31, 2025',
    action: 'Switch MA plans or return to Original Medicare',
    deadline: 'March 31, 2025',
    spanish: 'Inscripción Abierta de Medicare Advantage'
  }
];

const newYorkData = {
  state: 'New York',
  stateAbbrev: 'NY',
  slug: 'new-york',
  totalEnrollment: 3850000,
  maPenetrationRate: 34,
  opportunityScore: 85,
  dualEligibleRate: 22,
  competitionLevel: 'Very High' as const,
  addressableMarket: 1309000,
  potentialRevenue: 1884960000,
  regions: [
    'New York City',
    'Long Island',
    'Hudson Valley',
    'Capital Region',
    'Central New York',
    'Western New York',
    'North Country',
    'Southern Tier',
  ],
  demographics: {
    avgAge: 74,
    malePercentage: 45,
    disabledPercentage: 14,
    raceDistribution: {
      white: 58,
      black: 15,
      hispanic: 18,
      asian: 8,
      other: 1,
    },
  },
  keyBenefits: [
    'Access to world-renowned medical centers like Mount Sinai and NewYork-Presbyterian',
    'Comprehensive transportation benefits including NYC subway and bus systems',
    'Multilingual customer service in 20+ languages',
    'Specialized urban health programs for high-density living',
    'Enhanced mental health and social services',
    'Prescription drug coverage with extensive pharmacy networks',
  ],
  majorProviders: [
    'NewYork-Presbyterian Healthcare System',
    'Mount Sinai Health System',
    'NYU Langone Health',
    'Northwell Health',
    'BronxCare Health System',
    'NYC Health + Hospitals',
    'Rochester Regional Health',
    'St. Peter\'s Health Partners',
    'URMC (University of Rochester Medical Center)',
    'Albany Medical Center',
  ],
  nycFeatures: [
    {
      title: 'Urban Healthcare Access',
      description: 'Extensive healthcare networks covering all five boroughs with subway accessibility',
      icon: '🚇',
    },
    {
      title: 'World-Class Medicine',
      description: 'Access to internationally recognized medical centers and specialty care',
      icon: '🏥',
    },
    {
      title: 'Cultural Diversity',
      description: 'Healthcare services tailored to over 200 languages and ethnic communities',
      icon: '🌍',
    },
    {
      title: 'Integrated Care',
      description: 'Coordinated care networks connecting urban, suburban, and rural areas',
      icon: '🔗',
    },
  ],
  specialPrograms: [
    {
      title: 'NYC Community Health Initiative',
      description: 'Neighborhood-based health programs addressing urban health challenges',
      coverage: 'All five boroughs',
    },
    {
      title: 'Multilingual Access Program',
      description: 'Healthcare services available in 20+ languages with certified interpreters',
      languages: 'Spanish, Chinese, Russian, Arabic, Bengali, and more',
    },
    {
      title: 'Transportation Partnership Program',
      description: 'Enhanced transportation benefits including MetroCard assistance and medical transport',
      systems: 'MTA, Access-A-Ride, medical shuttle services',
    },
    {
      title: 'Rural Health Outreach',
      description: 'Telehealth and mobile health services for Upstate and rural communities',
      regions: 'North Country, Southern Tier, Central NY',
    },
  ],
  countyLinks: [
    { name: 'New York County (Manhattan)', slug: 'new-york-county-new-york', region: 'NYC' },
    { name: 'Kings County (Brooklyn)', slug: 'kings-county-new-york', region: 'NYC' },
    { name: 'Queens County', slug: 'queens-county-new-york', region: 'NYC' },
    { name: 'Bronx County', slug: 'bronx-county-new-york', region: 'NYC' },
    { name: 'Nassau County', slug: 'nassau-county-new-york', region: 'Long Island' },
    { name: 'Suffolk County', slug: 'suffolk-county-new-york', region: 'Long Island' },
    { name: 'Westchester County', slug: 'westchester-county-new-york', region: 'Hudson Valley' },
    { name: 'Albany County', slug: 'albany-county-new-york', region: 'Capital Region' },
  ],
  localResources: [
    {
      name: 'NYC Department for the Aging',
      description: 'Medicare counseling and HIICAP services for NYC residents',
      phone: '212-244-6469',
    },
    {
      name: 'New York StateWide Senior Action Council',
      description: 'Statewide Medicare advocacy and assistance',
      phone: '800-333-4374',
    },
    {
      name: 'HIICAP (Health Insurance Information, Counseling & Assistance Program)',
      description: 'Free Medicare counseling throughout New York State',
      phone: '800-701-0501',
    },
    {
      name: 'Office for the Aging (by County)',
      description: 'Local Area Agencies on Aging providing Medicare support',
      note: 'Available in all 62 counties',
    },
  ],
  majorCities: [
    'New York City',
    'Buffalo',
    'Rochester',
    'Yonkers',
    'Syracuse',
    'Albany',
    'New Rochelle',
    'Mount Vernon',
    'Schenectady',
    'Utica',
  ],
};

export default function NewYorkPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('index');
  breadcrumbItems.push({ label: 'New York State', current: true });
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Structured Data for Local Business
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "El-Mag Insurance - Medicare Advantage Plans New York",
    "description": "Medicare Advantage plan comparison and enrollment services for New York State residents",
    "url": "https://elmag-insurance.com/medicare-advantage/new-york",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "State",
      "name": "New York",
      "containsPlace": [
        { "@type": "City", "name": "New York City" },
        { "@type": "City", "name": "Buffalo" },
        { "@type": "City", "name": "Rochester" },
        { "@type": "City", "name": "Syracuse" },
        { "@type": "City", "name": "Albany" }
      ]
    },
    "serviceType": "Medicare Advantage Plan Comparison and Enrollment",
    "provider": [
      "NewYork-Presbyterian Healthcare System",
      "Mount Sinai Health System",
      "NYU Langone Health",
      "Northwell Health"
    ],
    "availableLanguage": ["English", "Spanish", "Chinese", "Russian", "Arabic", "Bengali", "Korean", "Italian", "French", "Portuguese"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medicare Advantage Plans New York",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "$0 Premium Medicare Advantage Plans",
            "provider": "Multiple Insurance Carriers"
          }
        }
      ]
    }
  };

  // FAQ Structured Data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Medicare Advantage plans are available in New York City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New York City residents have access to numerous Medicare Advantage plans from major providers, many with $0 monthly premiums. Plans include access to world-renowned hospitals like NewYork-Presbyterian, Mount Sinai, and NYU Langone, plus transportation benefits including MetroCard assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Are there multilingual Medicare Advantage plans in New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! New York Medicare Advantage plans offer customer service and healthcare provider networks supporting 20+ languages including Spanish, Chinese (Mandarin/Cantonese), Russian, Arabic, Bengali, Korean, Italian, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Do New York Medicare Advantage plans cover transportation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many New York Medicare Advantage plans include transportation benefits such as MetroCard assistance for NYC subway/bus systems, Access-A-Ride services, and medical shuttle transportation to healthcare appointments."
        }
      },
      {
        "@type": "Question",
        "name": "What major hospitals accept Medicare Advantage in New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major New York hospitals accepting Medicare Advantage include NewYork-Presbyterian Healthcare System, Mount Sinai Health System, NYU Langone Health, Northwell Health, BronxCare, NYC Health + Hospitals, Rochester Regional Health, and Albany Medical Center."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="state"
        pageTitle="Medicare Advantage Plans New York State 2025"
        state="New York"
        demographics={{
          avgAge: newYorkData.demographics.avgAge,
          dualEligibleRate: newYorkData.dualEligibleRate,
          maPenetrationRate: newYorkData.maPenetrationRate
        }}
        keyMetrics={{
          total_enrollment: newYorkData.totalEnrollment,
          opportunity_score: newYorkData.opportunityScore,
          languages_supported: 20
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
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
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
          {/* Urgent Enrollment Banner */}
          <div className="bg-red-600 text-white py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center text-center">
                <span className="text-lg font-semibold">
                  ⏰ Medicare Open Enrollment Deadline: December 7, 2024 | Inscripción Abierta: 7 de Diciembre
                </span>
              </div>
            </div>
          </div>

          {/* Hero Section with H1 */}
          <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    $0 Premium Plans Available
                  </span>
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ 5-Star Rated Plans
                  </span>
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    20+ Languages Supported
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Medicare Advantage Plans New York State 2025
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Compare Medicare Advantage plans across New York State from NYC to Upstate. 
                  Access world-class healthcare with NewYork-Presbyterian, Mount Sinai, NYU Langone and extensive multicultural services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/medicare-advantage" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}>
                    Compare NY Plans
                  </Link>
                  <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-700 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}>
                    331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose Medicare Advantage in New York State?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {competitiveAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-700">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                New York State Medicare Market Overview
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                New York State leads the Northeast with 3.85 million Medicare beneficiaries and diverse healthcare markets from NYC to Upstate. 
                With 34% Medicare Advantage penetration and world-class providers, New York offers exceptional value and choice. 
                Compare with neighboring markets like 
                <Link href="/medicare-advantage/mid-atlantic" className="text-blue-600 hover:underline">Mid-Atlantic</Link>, 
                <Link href="/medicare-advantage/west-coast" className="text-blue-600 hover:underline">West Coast</Link>, or 
                <Link href="/medicare-advantage/southwest" className="text-blue-600 hover:underline">Southwest</Link> regions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">3.85M</div>
                  <div className="text-gray-600">Total Medicare Beneficiaries</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">34%</div>
                  <div className="text-gray-600">MA Penetration Rate</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">22%</div>
                  <div className="text-gray-600">Dual Eligible Rate</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">20+</div>
                  <div className="text-gray-600">Languages Supported</div>
                </div>
              </div>
            </div>
          </section>

          {/* Medicare Advantage vs Original Medicare Comparison */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Advantage vs Original Medicare in New York
              </h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Original Medicare */}
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{planComparison.original.name}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Monthly Premium (Part B):</span>
                        <span className="text-red-600 font-semibold">{planComparison.original.premium}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Annual Deductible:</span>
                        <span className="text-red-600 font-semibold">{planComparison.original.deductible}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Prescription Drug Coverage:</span>
                        <span className="text-red-600 font-semibold">{planComparison.original.drugCoverage}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Dental & Vision:</span>
                        <span className="text-red-600 font-semibold">{planComparison.original.dentalVision}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">Transportation Benefits:</span>
                        <span className="text-red-600 font-semibold">{planComparison.original.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Language Support:</span>
                        <span className="text-red-600 font-semibold">{planComparison.original.languages}</span>
                      </div>
                    </div>
                  </div>

                  {/* Medicare Advantage */}
                  <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
                    <div className="flex items-center justify-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-900">{planComparison.advantage.name}</h3>
                      <span className="ml-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">RECOMMENDED</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-blue-200 pb-2">
                        <span className="font-medium text-gray-700">Monthly Premium:</span>
                        <span className="text-green-600 font-semibold">{planComparison.advantage.premium}</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-200 pb-2">
                        <span className="font-medium text-gray-700">Annual Deductible:</span>
                        <span className="text-green-600 font-semibold">{planComparison.advantage.deductible}</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-200 pb-2">
                        <span className="font-medium text-gray-700">Prescription Drug Coverage:</span>
                        <span className="text-green-600 font-semibold">{planComparison.advantage.drugCoverage}</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-200 pb-2">
                        <span className="font-medium text-gray-700">Dental & Vision:</span>
                        <span className="text-green-600 font-semibold">{planComparison.advantage.dentalVision}</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-200 pb-2">
                        <span className="font-medium text-gray-700">Transportation Benefits:</span>
                        <span className="text-green-600 font-semibold">{planComparison.advantage.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Language Support:</span>
                        <span className="text-green-600 font-semibold">{planComparison.advantage.languages}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="/medicare-advantage" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block" onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'comparison_table', '/medicare-advantage')}>
                    Compare NY Medicare Advantage Plans Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Enrollment Periods */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                New York Medicare Enrollment Periods 2024-2025
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {enrollmentPeriods.map((period, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">{period.period}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-gray-700">Dates: </span>
                        <span className="text-blue-600 font-semibold">{period.dates}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">What you can do: </span>
                        <span className="text-gray-900">{period.action}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Deadline: </span>
                        <span className="text-red-600 font-semibold">{period.deadline}</span>
                      </div>
                      <div className="text-sm text-purple-600 italic">
                        En Español: {period.spanish}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="tel:331-343-2584" className="bg-red-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-red-700 transition-colors inline-block" onClick={() => (window as any).trackLandingPagePhoneCall?.('enrollment_periods')}>
                  Don't Miss the Deadline - Call 331-E-HEALTH
                </a>
              </div>
            </div>
          </section>

          {/* Regions Covered */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                New York Regions We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newYorkData.regions.map((region, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{region}</h3>
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-blue-600 text-2xl">🗽</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NYC Features */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                New York Medicare Advantage Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {newYorkData.nycFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Special Programs */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Specialized New York Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {newYorkData.specialPrograms.map((program, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.coverage && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Coverage: </span>
                        <span className="text-sm text-blue-600">{program.coverage}</span>
                      </div>
                    )}
                    {program.languages && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Languages: </span>
                        <span className="text-sm text-blue-600">{program.languages}</span>
                      </div>
                    )}
                    {program.systems && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Transportation: </span>
                        <span className="text-sm text-blue-600">{program.systems}</span>
                      </div>
                    )}
                    {program.regions && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Service Areas: </span>
                        <span className="text-sm text-blue-600">{program.regions}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Local Medicare Advantage Benefits in New York State
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newYorkData.keyBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold text-xl">✓</span>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Major Healthcare Systems */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Healthcare Systems in New York State
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {newYorkData.majorProviders.map((provider, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <span className="text-blue-600 text-2xl">🏥</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{provider}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Major Cities We Serve in New York State
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {newYorkData.majorCities.map((city, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{city}</h3>
                    <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-purple-600 text-xl">🏙️</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* County-Specific Pages */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                County-Specific Medicare Information
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newYorkData.countyLinks.map((county, index) => (
                  <Link 
                    key={index}
                    href={`/medicare-advantage/${county.slug}`}
                    className="bg-white p-6 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-colors group"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 mb-1">
                        {county.name}
                      </h3>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        {county.region}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium group-hover:text-blue-700">
                      View Local Plans →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Demographics */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                New York State Medicare Demographics
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">74</div>
                  <p className="text-gray-600">Years old</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gender Split</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                  <p className="text-gray-600">Male / 55% Female</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Disabled Rate</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">14%</div>
                  <p className="text-gray-600">Under 65 Disabled</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">42%</div>
                  <p className="text-gray-600">Non-White Population</p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Resources */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Resources in New York State
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newYorkData.localResources.map((resource, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.name}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{resource.description}</p>
                    {resource.phone && (
                      <p className="text-blue-600 font-semibold text-sm">{resource.phone}</p>
                    )}
                    {resource.note && (
                      <p className="text-gray-600 italic text-sm mt-2">{resource.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions About Medicare Advantage in New York
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What Medicare Advantage plans are available in New York City?
                  </h3>
                  <p className="text-gray-700">
                    New York City residents have access to numerous Medicare Advantage plans from major providers, many with $0 monthly premiums. 
                    Plans include access to world-renowned hospitals like NewYork-Presbyterian, Mount Sinai, and NYU Langone, plus transportation 
                    benefits including MetroCard assistance for subway and bus travel. Compare NYC options with other major markets like 
                    <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">Los Angeles County, CA</Link> or 
                    <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-600 hover:underline">Dallas County, TX</Link>.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Are there multilingual Medicare Advantage plans in New York?
                  </h3>
                  <p className="text-gray-700">
                    ¡Absolutely! | 是的! | Да! New York Medicare Advantage plans offer customer service and healthcare provider networks 
                    supporting 20+ languages including Spanish, Chinese (Mandarin/Cantonese), Russian, Arabic, Bengali, Korean, Italian, French, 
                    Portuguese, and more. Many plans also provide certified medical interpreters. Compare these multilingual services with 
                    <Link href="/medicare-advantage/southwest" className="text-blue-600 hover:underline">Southwest region's bilingual programs</Link> or 
                    <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">LA County's multicultural services</Link>.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Do New York Medicare Advantage plans cover transportation?
                  </h3>
                  <p className="text-gray-700">
                    Many New York Medicare Advantage plans include comprehensive transportation benefits such as MetroCard assistance for 
                    NYC subway and bus systems, Access-A-Ride services for disabled beneficiaries, medical shuttle transportation to healthcare 
                    appointments, and even rideshare credits for medical visits. Compare these NYC transit benefits with 
                    <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-600 hover:underline">Dallas County's DART benefits</Link> or 
                    <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">LA Metro transportation options</Link>.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What major hospitals accept Medicare Advantage in New York?
                  </h3>
                  <p className="text-gray-700">
                    Major New York hospitals and health systems accepting Medicare Advantage include NewYork-Presbyterian Healthcare System, 
                    Mount Sinai Health System, NYU Langone Health, Northwell Health, BronxCare Health System, NYC Health + Hospitals, 
                    Rochester Regional Health, St. Peter's Health Partners, University of Rochester Medical Center (URMC), and Albany Medical Center.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    How do Medicare Advantage plans work in rural Upstate New York?
                  </h3>
                  <p className="text-gray-700">
                    Medicare Advantage plans in rural Upstate New York often include enhanced telehealth benefits, mobile health services, 
                    and transportation assistance to urban medical centers. Many plans coordinate between local rural providers and 
                    major medical centers in Albany, Syracuse, Rochester, and Buffalo.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Can I use my Medicare Advantage plan if I spend time in both NYC and Florida?
                  </h3>
                  <p className="text-gray-700">
                    Many New York Medicare Advantage plans offer out-of-area coverage or have partnerships with national networks. Some plans 
                    specifically cater to "snowbirds" who split time between New York and Florida. Always check your plan's coverage area 
                    and emergency care provisions before traveling.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/contact" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block" onClick={() => (window as any).trackLandingPageCTA?.('contact', 'faq', '/contact')}>
                  Get Personalized NY Medicare Answers
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan in New York State?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our multilingual specialists understand New York's diverse communities and can help you 
                compare $0 premium plans with access to NewYork-Presbyterian, Mount Sinai, NYU Langone, Northwell Health, 
                BronxCare, and all major NYC hospitals. ¡Hablamos Español! | 我们讲中文! | Мы говорим по-русски! 
                We also serve other major markets including 
                <Link href="/medicare-advantage/mid-atlantic" className="text-blue-200 hover:underline hover:text-white">Mid-Atlantic region</Link>, 
                <Link href="/medicare-advantage/west-coast" className="text-blue-200 hover:underline hover:text-white">West Coast</Link>, 
                <Link href="/medicare-advantage/southwest" className="text-blue-200 hover:underline hover:text-white">Southwest states</Link>, and counties like 
                <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-200 hover:underline hover:text-white">Dallas County, TX</Link> and 
                <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-200 hover:underline hover:text-white">Los Angeles County, CA</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('contact', 'cta', '/contact')}>
                  Get Free NY Plan Comparison
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-700 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('cta')}>
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