import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Best Medicare Advantage Plans West Coast 2025 | $0 Premium | CA, OR, WA | El-Mag Insurance',
  description: 'Find the best Medicare Advantage plans in California, Oregon, Washington. Compare $0 premium plans with innovative telehealth, 4-5 star ratings, prescription drug coverage. Access to world-class providers like Kaiser Permanente, UCLA, UCSF. Free consultation during 2025 open enrollment.',
  keywords: 'Medicare Advantage West Coast, Medicare plans California Oregon Washington, best Medicare Advantage plans 2025 West Coast, $0 premium Medicare plans California, Medicare Advantage enrollment West Coast, Medicare plans telehealth innovation, Kaiser Permanente Medicare Advantage, UCLA Medicare Advantage, UCSF Medicare Advantage, Medicare Advantage Los Angeles San Francisco Seattle Portland, Medicare Advantage San Diego Sacramento Oakland, Medicare open enrollment 2025 West Coast, Medicare Advantage vs Original Medicare West Coast, Medicare Part D prescription drugs West Coast, Medicare Advantage dental vision West Coast, 4 star 5 star Medicare Advantage plans West Coast, Medicare Advantage provider networks California Oregon Washington, Medicare Advantage telehealth services, Medicare Advantage environmental health, Medicare Advantage mental health programs, Medicare Advantage clinical trials, Medicare Advantage innovation technology, Medicare Advantage air quality monitoring',
  openGraph: {
    title: 'Best Medicare Advantage Plans West Coast 2025 | $0 Premium Plans Available | CA, OR, WA',
    description: 'Compare top-rated Medicare Advantage plans in California, Oregon, Washington. $0 premium options with 4-5 star ratings, innovative telehealth services, prescription drug coverage, dental & vision benefits. Access to world-class providers during 2025 open enrollment.',
    type: 'website',
    locale: 'en_US',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-advantage.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Advantage Plans - El-Mag Insurance',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Medicare Advantage Plans West Coast 2025 | $0 Premium Available',
    description: 'Find & compare top Medicare Advantage plans in CA, OR, WA. $0 premium options with innovative telehealth and world-class providers available. Licensed agents help during 2025 open enrollment.',
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/west-coast',
  },
};

const westCoastData = {
  region: 'West Coast',
  states: ['California', 'Oregon', 'Washington'],
  totalEnrollment: 4250000,
  maPenetrationRate: 48,
  innovationScore: 92,
  opportunityScore: 88,
  competitionLevel: 'Very High' as const,
  majorCities: [
    'Los Angeles, CA',
    'San Francisco, CA',
    'San Diego, CA',
    'Seattle, WA',
    'Portland, OR',
    'Oakland, CA',
    'Sacramento, CA',
    'Fresno, CA',
    'Long Beach, CA',
    'San Jose, CA',
  ],
  demographics: {
    avgAge: 74,
    malePercentage: 47,
    disabledPercentage: 12,
    raceDistribution: {
      white: 52,
      black: 6,
      hispanic: 25,
      asian: 15,
      other: 2,
    },
  },
  keyBenefits: [
    'Access to innovative healthcare technology and telehealth services',
    'World-renowned medical centers and research hospitals',
    'Comprehensive mental health and wellness programs',
    'Environmental health considerations and air quality monitoring',
    'Multilingual services for diverse Pacific Coast communities',
    'Integration with cutting-edge medical research and clinical trials',
  ],
  majorProviders: [
    'Kaiser Permanente',
    'Sutter Health',
    'Providence Health & Services',
    'UCLA Health',
    'UCSF Health',
    'Cedars-Sinai Health System',
    'Seattle Cancer Care Alliance',
    'Oregon Health & Science University',
    'Virginia Mason Franciscan Health',
    'Sharp HealthCare',
  ],
  innovativeFeatures: [
    {
      title: 'Telehealth Innovation',
      description: 'Leading-edge telehealth and virtual care platforms integrated into Medicare Advantage plans',
      icon: '💻',
    },
    {
      title: 'Research Integration',
      description: 'Access to clinical trials and cutting-edge treatments at top research institutions',
      icon: '🔬',
    },
    {
      title: 'Environmental Health',
      description: 'Air quality monitoring, wildfire health alerts, and environmental health programs',
      icon: '🌲',
    },
    {
      title: 'Mental Health Focus',
      description: 'Comprehensive mental health services and innovative behavioral health programs',
      icon: '🧠',
    },
  ],
  specialPrograms: [
    {
      title: 'Pacific Coast Wellness Initiative',
      description: 'Integrated wellness programs focusing on active lifestyle and preventive care',
      states: ['CA', 'OR', 'WA'],
    },
    {
      title: 'Tech-Enabled Care Program',
      description: 'Wearable device integration, health apps, and digital health monitoring',
      coverage: 'Urban and suburban areas',
    },
    {
      title: 'Environmental Health Protection',
      description: 'Wildfire smoke alerts, air quality monitoring, and climate-related health support',
      seasons: 'Enhanced benefits during fire season and air quality events',
    },
    {
      title: 'Research Access Program',
      description: 'Priority access to clinical trials and innovative treatments',
      institutions: 'UCSF, UCLA, OHSU, UW Medicine',
    },
  ],
  countyLinks: [
    { name: 'Los Angeles County, California', slug: 'los-angeles-county-california', state: 'CA' },
    { name: 'Orange County, California', slug: 'orange-county-california', state: 'CA' },
    { name: 'San Diego County, California', slug: 'san-diego-county-california', state: 'CA' },
    { name: 'King County, Washington', slug: 'king-county-washington', state: 'WA' },
    { name: 'Multnomah County, Oregon', slug: 'multnomah-county-oregon', state: 'OR' },
    { name: 'San Francisco County, California', slug: 'san-francisco-county-california', state: 'CA' },
  ],
  competitiveAdvantages: [
    {
      title: '$0 Premium Plans Available',
      description: 'Access Medicare Advantage plans with $0 monthly premium across California, Oregon, and Washington',
      highlight: 'Save $1,500+ annually',
      icon: '💰'
    },
    {
      title: 'World-Class Healthcare Systems',
      description: 'Access to leading providers like Kaiser Permanente, UCLA Health, UCSF Health, and Seattle Cancer Care Alliance',
      highlight: 'Top-ranked providers',
      icon: '🏆'
    },
    {
      title: 'Innovative Telehealth Technology',
      description: 'Cutting-edge telehealth platforms, virtual care, and digital health monitoring integrated into your plan',
      highlight: 'Advanced technology',
      icon: '💻'
    },
    {
      title: 'Clinical Trial Access',
      description: 'Priority access to clinical trials and innovative treatments at leading research institutions',
      highlight: 'Latest treatments',
      icon: '🔬'
    }
  ],
  planComparison: {
    originalMedicare: {
      monthlyPremium: '$174.70',
      deductible: '$1,600',
      prescriptionDrugs: 'Not included',
      dentalVision: 'Not covered',
      telehealth: 'Limited coverage',
      mentalHealth: 'Basic coverage',
      outOfPocketMax: 'No limit'
    },
    medicareAdvantage: {
      monthlyPremium: '$0-$60',
      deductible: '$0-$500',
      prescriptionDrugs: 'Included',
      dentalVision: 'Often included',
      telehealth: 'Comprehensive coverage',
      mentalHealth: 'Enhanced programs',
      outOfPocketMax: '$3,300-$8,300'
    }
  },
  enrollmentPeriods: [
    {
      name: 'Annual Open Enrollment',
      dates: 'October 15 - December 7',
      description: 'Change your Medicare Advantage plan for the following year',
      action: 'Compare & switch plans'
    },
    {
      name: 'Medicare Advantage Open Enrollment',
      dates: 'January 1 - March 31',
      description: 'Switch from Medicare Advantage to Original Medicare or another MA plan',
      action: 'One plan change allowed'
    }
  ],
};

export default function WestCoastPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('index');
  breadcrumbItems.push({ label: 'West Coast Region', current: true });
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Structured data for local business and service area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "El-Mag Insurance - Medicare Advantage West Coast",
    "description": "Licensed Medicare insurance agency serving California, Oregon, and Washington with innovative Medicare Advantage plan enrollment and consultation services.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/west-coast",
    "telephone": "331-343-2584",
    "areaServed": [
      "California", "Oregon", "Washington"
    ],
    "serviceType": "Medicare Advantage Plan Enrollment",
    "priceRange": "Free Consultation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medicare Advantage Plans West Coast 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "$0 Premium Medicare Advantage Plans",
            "description": "Medicare Advantage plans with $0 monthly premium including prescription drug coverage and telehealth services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Innovative Telehealth Medicare Coverage",
            "description": "Advanced telehealth and digital health monitoring services integrated into Medicare Advantage plans"
          }
        }
      ]
    }
  };

  // FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best Medicare Advantage plans in California, Oregon, and Washington?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best Medicare Advantage plans on the West Coast include options from Kaiser Permanente, Sutter Health, Providence Health & Services, UCLA Health, UCSF Health, and Cedars-Sinai Health System. The best plan depends on your specific needs, preferred doctors, medications, and technology preferences. Our licensed agents can help you compare innovative plans with advanced telehealth features."
        }
      },
      {
        "@type": "Question",
        "name": "Are there $0 premium Medicare Advantage plans available on the West Coast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Many counties in California, Oregon, and Washington offer $0 premium Medicare Advantage plans. These plans can save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap policy. $0 premium plans include prescription drug coverage and often include innovative telehealth services and extra benefits like dental and vision."
        }
      },
      {
        "@type": "Question",
        "name": "Do West Coast Medicare Advantage plans offer telehealth services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! West Coast Medicare Advantage plans are leaders in telehealth innovation, offering comprehensive virtual care platforms, remote monitoring, digital health apps, and 24/7 virtual consultations. Many plans include wearable device integration and advanced digital health tools at no extra cost."
        }
      },
      {
        "@type": "Question",
        "name": "What innovative benefits do West Coast Medicare Advantage plans offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "West Coast Medicare Advantage plans offer cutting-edge benefits including advanced telehealth services, clinical trial access, environmental health monitoring, comprehensive mental health programs, air quality alerts, and integration with leading research institutions like UCLA, UCSF, and OHSU."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Medicare Advantage Plans West Coast Region 2025"
        region="West Coast"
        demographics={{
          avgAge: westCoastData.demographics.avgAge,
          maPenetrationRate: westCoastData.maPenetrationRate
        }}
        keyMetrics={{
          total_enrollment: westCoastData.totalEnrollment,
          innovation_score: westCoastData.innovationScore,
          opportunity_score: westCoastData.opportunityScore,
          states_covered: 3
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
          <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Best Medicare Advantage Plans West Coast 2025 - $0 Premium Options Available
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Find & compare top-rated Medicare Advantage plans in California, Oregon, and Washington. 
                  $0 premium options with 4-5 star ratings, cutting-edge telehealth technology, prescription drug coverage, and access to world-class providers like Kaiser Permanente, UCLA, and UCSF.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 text-blue-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4.25M+</div>
                      <div className="text-sm">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">$0</div>
                      <div className="text-sm">Premium Plans</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">💻</div>
                      <div className="text-sm">Telehealth Leader</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4-5⭐</div>
                      <div className="text-sm">Star Ratings</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/medicare-advantage" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}>
                    Compare West Coast Plans
                  </Link>
                  <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}>
                    331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Urgent Value Proposition */}
          <section className="py-8 bg-gradient-to-r from-blue-50 to-green-50 border-b border-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-blue-600 text-xl">⏰</span>
                    <h2 className="text-xl font-bold text-blue-800">2025 Open Enrollment Deadline: December 7th</h2>
                  </div>
                  <p className="text-blue-700 mb-3">
                    Don't miss out on innovative West Coast Medicare plans! Save $1,500+ annually with $0 premium Medicare Advantage plans 
                    that include advanced telehealth, prescription drug coverage, dental, vision, and access to world-class providers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:331-343-2584" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center">
                      Call Now: 331-E-HEALTH
                    </a>
                    <Link href="/contact" className="bg-white text-blue-600 border border-blue-300 font-semibold px-6 py-2 rounded-md hover:bg-blue-50 transition-colors text-center">
                      Free Innovation Comparison
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Quick Stats */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                West Coast Medicare Market Overview
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                The West Coast leads the nation in Medicare innovation with the highest concentration of world-class healthcare systems, 
                cutting-edge telehealth services, and advanced medical research. Market data shows exceptional growth and value opportunities.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">4.25M</div>
                  <div className="text-gray-600">Total Medicare Beneficiaries</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">48%</div>
                  <div className="text-gray-600">MA Penetration Rate</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">92</div>
                  <div className="text-gray-600">Innovation Score</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">3</div>
                  <div className="text-gray-600">States Covered</div>
                </div>
              </div>
            </div>
          </section>

          {/* States Covered */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                States We Serve on the West Coast
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {westCoastData.states.map((state, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{state}</h3>
                    <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <span className="text-blue-600 text-3xl">🌊</span>
                    </div>
                    <p className="text-gray-600">Leading healthcare innovation and quality care</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Medicare Advantage Over Original Medicare on the West Coast?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  West Coast Medicare Advantage plans offer significantly better value, innovative technology, and access to world-class 
                  healthcare systems that Original Medicare + Medigap simply cannot match.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {westCoastData.competitiveAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-4 text-center">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{advantage.title}</h3>
                    <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-3 text-center">
                      {advantage.highlight}
                    </div>
                    <p className="text-gray-700 text-center">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Medicare Advantage vs Original Medicare Comparison */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Medicare Advantage vs Original Medicare: West Coast Comparison
                </h2>
                <p className="text-lg text-gray-600">
                  See how Medicare Advantage plans in California, Oregon, and Washington compare to Original Medicare
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Original Medicare */}
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-700 mb-2">Original Medicare + Medigap</h3>
                      <p className="text-sm text-gray-600">Traditional Medicare with supplement insurance</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly Premium:</span>
                        <span className="font-semibold text-gray-900">{westCoastData.planComparison.originalMedicare.monthlyPremium}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-gray-900">{westCoastData.planComparison.originalMedicare.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-red-600">{westCoastData.planComparison.originalMedicare.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-red-600">{westCoastData.planComparison.originalMedicare.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Telehealth Services:</span>
                        <span className="font-semibold text-red-600">{westCoastData.planComparison.originalMedicare.telehealth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mental Health:</span>
                        <span className="font-semibold text-red-600">{westCoastData.planComparison.originalMedicare.mentalHealth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-red-600">{westCoastData.planComparison.originalMedicare.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>

                  {/* Medicare Advantage */}
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-300 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Recommended</span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">Medicare Advantage</h3>
                      <p className="text-sm text-gray-600">All-in-one Medicare with innovative technology</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly Premium:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.monthlyPremium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Telehealth Services:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.telehealth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Mental Health:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.mentalHealth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-green-600">{westCoastData.planComparison.medicareAdvantage.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="bg-green-100 text-green-800 p-6 rounded-xl inline-block max-w-2xl">
                    <p className="font-semibold text-lg mb-2">💰 Potential Annual Savings with Medicare Advantage: $1,500 - $4,000+</p>
                    <p className="text-sm text-green-700">
                      Based on 2025 premiums: Original Medicare Part B ($174.70/month) + Medigap Plan G (~$180-250/month) + Part D (~$45/month) vs $0 Premium Medicare Advantage with innovative telehealth and all benefits included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Innovative Features */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                West Coast Medicare Innovation Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {westCoastData.innovativeFeatures.map((feature, index) => (
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
                Specialized West Coast Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {westCoastData.specialPrograms.map((program, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.states && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">States: </span>
                        <span className="text-sm text-blue-600">{program.states.join(', ')}</span>
                      </div>
                    )}
                    {program.coverage && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Coverage: </span>
                        <span className="text-sm text-blue-600">{program.coverage}</span>
                      </div>
                    )}
                    {program.seasons && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Timing: </span>
                        <span className="text-sm text-blue-600">{program.seasons}</span>
                      </div>
                    )}
                    {program.institutions && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Partner Institutions: </span>
                        <span className="text-sm text-blue-600">{program.institutions}</span>
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
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Local Medicare Advantage Benefits on the West Coast
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Why El-Mag Insurance is Your Best Choice for West Coast Medicare</h3>
                    <p className="text-blue-800">
                      Unlike generic comparison sites, our West Coast Medicare specialists understand innovative healthcare technology, 
                      have relationships with top providers like Kaiser Permanente and UCLA Health, and stay current with the latest 
                      telehealth and digital health advancements available in your area.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {westCoastData.keyBenefits.map((benefit, index) => (
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
                Top Healthcare Systems on the West Coast
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {westCoastData.majorProviders.map((provider, index) => (
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

          {/* Major Cities Served */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Major Cities We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {westCoastData.majorCities.map((city, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-md font-semibold text-gray-900 mb-2">{city}</h3>
                    <div className="w-12 h-12 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-green-600 text-xl">🏙️</span>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {westCoastData.countyLinks.map((county, index) => (
                  <Link 
                    key={index}
                    href={`/medicare-advantage/${county.slug}`}
                    className="bg-white p-6 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">
                        {county.name}
                      </h3>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        {county.state}
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

          {/* Enrollment Periods */}
          <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  2025 Medicare Advantage Enrollment Periods on the West Coast
                </h2>
                <p className="text-xl text-gray-700">
                  Don't miss your chance to enroll in innovative West Coast Medicare plans with advanced technology
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {westCoastData.enrollmentPeriods.map((period, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-blue-600 text-xl">📅</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{period.name}</h3>
                        <p className="text-blue-600 font-medium">{period.dates}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{period.description}</p>
                    <div className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm">
                      <strong>Action:</strong> {period.action}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">⏰ Don't Wait for Innovation!</h3>
                  <p className="text-blue-700">
                    Missing enrollment deadlines means you may have to wait until next year to access cutting-edge telehealth, 
                    clinical trial opportunities, and innovative West Coast Medicare benefits. Call us today for a free consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions: Medicare Advantage on the West Coast
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the best Medicare Advantage plans in California, Oregon, and Washington?
                  </h3>
                  <p className="text-gray-700">
                    The best Medicare Advantage plans on the West Coast include options from Kaiser Permanente, Sutter Health, 
                    Providence Health & Services, UCLA Health, UCSF Health, and Cedars-Sinai Health System. The "best" plan 
                    depends on your specific needs, preferred doctors, medications, and interest in innovative technology features. 
                    Our licensed agents can help you compare plans with advanced telehealth capabilities.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are there $0 premium Medicare Advantage plans available on the West Coast?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Many counties in California, Oregon, and Washington offer $0 premium Medicare Advantage plans. 
                    These plans can save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap 
                    policy. $0 premium plans include prescription drug coverage and often include innovative telehealth services 
                    and extra benefits like dental and vision.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do West Coast Medicare Advantage plans offer telehealth services?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! West Coast Medicare Advantage plans are industry leaders in telehealth innovation, offering 
                    comprehensive virtual care platforms, remote monitoring, digital health apps, 24/7 virtual consultations, 
                    and integration with wearable devices. Many plans include advanced digital health tools at no extra cost.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What innovative benefits do West Coast Medicare Advantage plans offer?
                  </h3>
                  <p className="text-gray-700">
                    West Coast Medicare Advantage plans offer cutting-edge benefits including advanced telehealth services, 
                    clinical trial access, environmental health monitoring, comprehensive mental health programs, air quality 
                    alerts, wildfire smoke protection, and integration with leading research institutions like UCLA, UCSF, 
                    and Oregon Health & Science University.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Demographics */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                West Coast Medicare Demographics
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">74</div>
                  <p className="text-gray-600">Years old</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gender Split</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">47%</div>
                  <p className="text-gray-600">Male / 53% Female</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Disabled Rate</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">12%</div>
                  <p className="text-gray-600">Under 65 Disabled</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">48%</div>
                  <p className="text-gray-600">Non-White Population</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan on the West Coast?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our licensed Medicare specialists have helped thousands of West Coast residents access innovative healthcare technology and save money. 
                We'll compare all available plans from Kaiser Permanente, UCLA Health, UCSF Health, Cedars-Sinai, and Seattle Cancer Care Alliance to find your perfect match - at no cost to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('contact', 'cta', '/contact')}>
                  Get Innovative Plan Comparison
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('cta')}>
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