import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Best Medicare Advantage Plans Los Angeles County CA 2025 | $0 Premium | El-Mag Insurance',
  description: 'Find the best Medicare Advantage plans in Los Angeles County, California. Compare $0 premium plans with bilingual Spanish support, 4-5 star ratings, prescription drug coverage. Access to Cedars-Sinai, UCLA Health, Kaiser Permanente. Free multicultural consultation during 2025 open enrollment.',
  keywords: 'Medicare Advantage Los Angeles County California, Medicare plans LA County, best Medicare Advantage plans 2025 Los Angeles, $0 premium Medicare plans Los Angeles County, Medicare Advantage enrollment Los Angeles, Medicare plans Spanish bilingual Los Angeles, Kaiser Permanente Medicare Advantage Los Angeles, Cedars-Sinai Medicare Advantage, UCLA Health Medicare Advantage, USC Healthcare Medicare plans, Medicare Advantage Pasadena, Medicare Advantage Long Beach, Medicare Advantage Burbank, Medicare Advantage Glendale, Medicare Advantage Santa Monica, Medicare open enrollment 2025 Los Angeles, Medicare Advantage vs Original Medicare Los Angeles, Medicare Part D prescription drugs Los Angeles, Medicare Advantage dental vision Los Angeles, 4 star 5 star Medicare Advantage plans Los Angeles, Medicare Advantage multicultural services, Medicare Advantage Hispanic community Los Angeles, Medicare Advantage Asian community Los Angeles, Medicare Advantage transportation benefits LA Metro, Medicare Advantage dual eligible Los Angeles',
  openGraph: {
    title: 'Best Medicare Advantage Plans Los Angeles County CA 2025 | $0 Premium Plans Available',
    description: 'Compare top-rated Medicare Advantage plans in Los Angeles County, CA. $0 premium options with 4-5 star ratings, bilingual Spanish support, access to Cedars-Sinai, UCLA Health, Kaiser Permanente. Multicultural services for diverse communities during 2025 open enrollment.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Medicare Advantage Plans Los Angeles County CA 2025 | $0 Premium Available',
    description: 'Find & compare top Medicare Advantage plans in Los Angeles County, CA. $0 premium options with bilingual support and multicultural services. Licensed agents help during 2025 open enrollment.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/los-angeles-county-california',
  },
};

const losAngelesCountyData = {
  county: 'Los Angeles County',
  state: 'California',
  stateAbbrev: 'CA',
  slug: 'los-angeles-county-california',
  totalEnrollment: 1350000,
  maPenetrationRate: 52,
  opportunityScore: 95,
  dualEligibleRate: 18,
  competitionLevel: 'Very High' as const,
  addressableMarket: 702000,
  potentialRevenue: 1009440000,
  demographics: {
    avgAge: 73,
    malePercentage: 46,
    disabledPercentage: 15,
    raceDistribution: {
      white: 28,
      black: 8,
      hispanic: 47,
      asian: 15,
      other: 2,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Spanish Radio', 'Community Health Centers', 'Senior Centers', 'Digital Marketing'],
    targetDemographics: ['Hispanic/Latino Community', 'Asian American Community', 'Dual Eligible Beneficiaries'],
    keyMessages: [
      'Comprehensive Benefits Beyond Original Medicare',
      'Multilingual Customer Service',
      'Local Provider Networks',
      'Transportation and Meal Benefits',
    ],
  },
  nearbyCounties: [
    { name: 'Orange County, California', slug: 'orange-county-california' },
    { name: 'Riverside County, California', slug: 'riverside-county-california' },
    { name: 'San Bernardino County, California', slug: 'san-bernardino-county-california' },
    { name: 'Ventura County, California', slug: 'ventura-county-california' },
  ],
  localProviders: [
    'Kaiser Permanente Southern California',
    'Cedars-Sinai Health System',
    'UCLA Health',
    'USC Healthcare',
    'Providence Health & Services',
    'Dignity Health California',
    'MemorialCare Health System',
    'Adventist Health',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout LA County',
    'Walgreens with Medicare-preferred networks',
    'Rite Aid Pharmacy',
    'Vons Pharmacy',
    'Ralphs Pharmacy',
    'Independent ethnic pharmacies',
  ],
  keyBenefits: [
    'Access to world-renowned medical centers like Cedars-Sinai and UCLA',
    'Multilingual customer service in Spanish, Korean, Armenian, and other languages',
    'Transportation benefits for LA Metro area',
    'Specialized care for diverse cultural communities',
    'Prescription drug coverage with extensive pharmacy networks',
    'Enhanced benefits for managing chronic conditions',
  ],
  culturalServices: [
    {
      community: 'Hispanic/Latino',
      services: ['Spanish-speaking providers', 'Culturally appropriate care', 'Community health promoters'],
      percentage: 47,
    },
    {
      community: 'Asian American',
      services: ['Korean, Chinese, Tagalog-speaking providers', 'Traditional medicine integration', 'Community liaisons'],
      percentage: 15,
    },
    {
      community: 'Armenian American',
      services: ['Armenian-speaking providers', 'Cultural dietary considerations', 'Community partnerships'],
      percentage: 3,
    },
  ],
  localResources: [
    {
      name: 'LA County Department of Health Services',
      description: 'Medicare education and enrollment assistance',
      phone: '213-240-8101',
    },
    {
      name: 'Health Insurance Counseling & Advocacy Program (HICAP)',
      description: 'Free Medicare counseling and assistance',
      phone: '800-434-0222',
    },
    {
      name: 'LA County Area Agency on Aging',
      description: 'Senior services and Medicare support',
      phone: '213-738-2600',
    },
    {
      name: 'Community Health Centers',
      description: 'Local health centers providing Medicare enrollment help',
      note: 'Multiple locations across LA County',
    },
  ],
  competitiveAdvantages: [
    {
      title: '$0 Premium Plans Available',
      description: 'Access 25+ Medicare Advantage plans with $0 monthly premium throughout Los Angeles County',
      highlight: 'Save $1,500+ annually',
      icon: '💰'
    },
    {
      title: 'World-Class Healthcare Access',
      description: 'Direct access to Cedars-Sinai, UCLA Health, USC Healthcare, and Kaiser Permanente networks',
      highlight: 'Top-ranked providers',
      icon: '🏆'
    },
    {
      title: 'Multicultural & Bilingual Services',
      description: 'Full bilingual support in Spanish, Korean, Armenian, Chinese, and Tagalog with culturally competent care',
      highlight: '72% diverse population served',
      icon: '🌎'
    },
    {
      title: 'LA Metro Transportation Benefits',
      description: 'Transportation vouchers and benefits designed specifically for LA County’s vast geography and Metro system',
      highlight: 'Navigate LA easier',
      icon: '🚇'
    }
  ],
  planComparison: {
    originalMedicare: {
      monthlyPremium: '$174.70',
      deductible: '$1,600',
      prescriptionDrugs: 'Not included',
      dentalVision: 'Not covered',
      bilingualSupport: 'Limited',
      transportation: 'Not covered',
      outOfPocketMax: 'No limit'
    },
    medicareAdvantage: {
      monthlyPremium: '$0-$55',
      deductible: '$0-$450',
      prescriptionDrugs: 'Included',
      dentalVision: 'Often included',
      bilingualSupport: 'Full multicultural support',
      transportation: 'LA Metro benefits included',
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

export default function LosAngelesCountyCaliforniaPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('county', 'Los Angeles County, California');
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Structured data for local business and service area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "El-Mag Insurance - Medicare Advantage Los Angeles County",
    "description": "Licensed Medicare insurance agency serving Los Angeles County, California with multicultural Medicare Advantage plan enrollment and consultation services.",
    "url": "https://elmag-insurance.com/medicare-advantage/los-angeles-county-california",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Los Angeles County, California"
    },
    "serviceType": "Medicare Advantage Plan Enrollment",
    "priceRange": "Free Consultation",
    "languages": ["English", "Spanish", "Korean", "Armenian", "Chinese", "Tagalog"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medicare Advantage Plans Los Angeles County 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "$0 Premium Medicare Advantage Plans",
            "description": "25+ Medicare Advantage plans with $0 monthly premium including prescription drug coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multicultural Medicare Support",
            "description": "Full bilingual and multicultural Medicare enrollment assistance for LA County's diverse communities"
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
        "name": "What are the best Medicare Advantage plans in Los Angeles County, California?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best Medicare Advantage plans in Los Angeles County include options from Kaiser Permanente Southern California, Cedars-Sinai Health System, UCLA Health, USC Healthcare, and Providence Health & Services. The best plan depends on your specific needs, preferred doctors, medications, and language preferences. Our multilingual agents can help you compare plans in English, Spanish, Korean, Armenian, Chinese, and Tagalog."
        }
      },
      {
        "@type": "Question",
        "name": "Are there $0 premium Medicare Advantage plans available in Los Angeles County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Los Angeles County has 25+ Medicare Advantage plans with $0 premium available. These plans can save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap policy. $0 premium plans include prescription drug coverage and often include extra benefits like dental, vision, and transportation."
        }
      },
      {
        "@type": "Question",
        "name": "Do Medicare Advantage plans in Los Angeles County offer bilingual services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Many Medicare Advantage plans in Los Angeles County offer comprehensive multilingual support including Spanish, Korean, Armenian, Chinese, and Tagalog-speaking customer service, plan materials, and enrollment assistance. Our licensed multilingual agents can help you compare plans and enroll in your preferred language."
        }
      },
      {
        "@type": "Question",
        "name": "What transportation benefits do Medicare Advantage plans offer in Los Angeles County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Medicare Advantage plans in Los Angeles County offer transportation benefits specifically designed for LA's geography, including rides to medical appointments, pharmacy trips, and wellness activities. Some plans provide LA Metro TAP card credits or rideshare benefits to help you access care across the county's vast area."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage in Los Angeles County, California 2025"
        county="Los Angeles County"
        state="California"
        demographics={{
          avgAge: losAngelesCountyData.demographics.avgAge,
          hispanicPopulation: losAngelesCountyData.demographics.raceDistribution.hispanic,
          dualEligibleRate: losAngelesCountyData.dualEligibleRate,
          maPenetrationRate: losAngelesCountyData.maPenetrationRate
        }}
        keyMetrics={{
          total_enrollment: losAngelesCountyData.totalEnrollment,
          opportunity_score: losAngelesCountyData.opportunityScore
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
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Best Medicare Advantage Plans Los Angeles County CA 2025 - $0 Premium Options Available
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  Find & compare 25+ top-rated Medicare Advantage plans with $0 premium options and 4-5 star ratings. 
                  Access to Cedars-Sinai, UCLA Health, Kaiser Permanente with bilingual Spanish support for LA County's diverse communities.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 text-blue-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">25+</div>
                      <div className="text-sm">$0 Plans</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1.35M</div>
                      <div className="text-sm">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">5</div>
                      <div className="text-sm">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4-5⭐</div>
                      <div className="text-sm">Star Ratings</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/medicare-advantage" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}>
                    Compare Plans Now
                  </Link>
                  <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}>
                    331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Urgent Value Proposition */}
          <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-blue-600 text-xl">⏰</span>
                    <h2 className="text-xl font-bold text-blue-800">2025 Open Enrollment Deadline: December 7th | Fecha Límite: 7 de Diciembre</h2>
                  </div>
                  <p className="text-blue-700 mb-3">
                    ¡No pierdas tu oportunidad! Los Angeles County residents can save $1,500+ annually with 25+ $0 premium Medicare Advantage plans 
                    that include prescription drugs, dental, vision, and access to Cedars-Sinai, UCLA Health, and Kaiser Permanente.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:331-343-2584" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors text-center">
                      Llame Ahora: 331-E-HEALTH
                    </a>
                    <Link href="/contact" className="bg-white text-blue-600 border border-blue-300 font-semibold px-6 py-2 rounded-md hover:bg-blue-50 transition-colors text-center">
                      Free Multicultural Comparison
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Los Angeles County Medicare Advantage Market Overview
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Los Angeles County leads California with 1.35 million Medicare beneficiaries and the nation's most diverse healthcare 
                market. With 52% Medicare Advantage penetration and world-class providers, LA County offers exceptional value and choice. 
                Compare with regional markets like 
                <Link href="/medicare-advantage/west-coast" className="text-blue-600 hover:underline">West Coast</Link>, 
                <Link href="/medicare-advantage/southwest" className="text-blue-600 hover:underline">Southwest</Link>, or 
                <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York</Link> states.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">1.35M</div>
                  <div className="text-gray-600">Total Medicare Beneficiaries</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">52%</div>
                  <div className="text-gray-600">MA Penetration Rate</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">47%</div>
                  <div className="text-gray-600">Hispanic Population</div>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Medicare Advantage Over Original Medicare in Los Angeles County?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Los Angeles County Medicare Advantage plans offer significantly better value, multicultural support, and access to 
                  world-renowned healthcare systems that Original Medicare + Medigap simply cannot match.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {losAngelesCountyData.competitiveAdvantages.map((advantage, index) => (
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
                  Medicare Advantage vs Original Medicare: Los Angeles County Comparison
                </h2>
                <p className="text-lg text-gray-600">
                  See how Medicare Advantage plans in Los Angeles County compare to Original Medicare
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
                        <span className="font-semibold text-gray-900">{losAngelesCountyData.planComparison.originalMedicare.monthlyPremium}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-gray-900">{losAngelesCountyData.planComparison.originalMedicare.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-red-600">{losAngelesCountyData.planComparison.originalMedicare.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-red-600">{losAngelesCountyData.planComparison.originalMedicare.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bilingual Support:</span>
                        <span className="font-semibold text-red-600">{losAngelesCountyData.planComparison.originalMedicare.bilingualSupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Transportation:</span>
                        <span className="font-semibold text-red-600">{losAngelesCountyData.planComparison.originalMedicare.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-red-600">{losAngelesCountyData.planComparison.originalMedicare.outOfPocketMax}</span>
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
                      <p className="text-sm text-gray-600">All-in-one Medicare with multicultural support</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly Premium:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.monthlyPremium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bilingual Support:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.bilingualSupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Transportation:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-green-600">{losAngelesCountyData.planComparison.medicareAdvantage.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="bg-green-100 text-green-800 p-6 rounded-xl inline-block max-w-2xl">
                    <p className="font-semibold text-lg mb-2">💰 Potential Annual Savings with Medicare Advantage: $1,500 - $3,500+</p>
                    <p className="text-sm text-green-700">
                      Based on 2025 premiums: Original Medicare Part B ($174.70/month) + Medigap Plan G (~$200-280/month in CA) + Part D (~$50/month) vs $0 Premium Medicare Advantage with multicultural support and all benefits included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Services */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Multicultural Medicare Services in LA County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {losAngelesCountyData.culturalServices.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{service.community}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {service.percentage}%
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {service.services.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Medicare Advantage in LA County */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Local Medicare Advantage Benefits in Los Angeles County
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Why El-Mag Insurance is Your Best Choice for Los Angeles County Medicare</h3>
                    <p className="text-blue-800">
                      Unlike national call centers, our Los Angeles County Medicare specialists understand the diverse cultural needs of 
                      LA's communities, have relationships with local providers like Cedars-Sinai and UCLA Health, and provide service 
                      in Spanish, Korean, Armenian, Chinese, and Tagalog. We're locally licensed and culturally competent. We also serve 
                      <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-600 underline hover:text-blue-800">Dallas County, TX</Link>, 
                      <Link href="/medicare-advantage/mid-atlantic" className="text-blue-600 underline hover:text-blue-800">Mid-Atlantic region</Link>, and 
                      <Link href="/medicare-advantage/southwest" className="text-blue-600 underline hover:text-blue-800">Southwest states</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {losAngelesCountyData.keyBenefits.map((benefit, index) => (
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

          {/* Local Healthcare Networks */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Top Healthcare Providers in Los Angeles County
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hospital Systems</h3>
                  <ul className="space-y-3">
                    {losAngelesCountyData.localProviders.map((provider, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {provider}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                  <ul className="space-y-3">
                    {losAngelesCountyData.localPharmacies.map((pharmacy, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {pharmacy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Demographics and Market Insights */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Los Angeles County Medicare Demographics
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">73</div>
                  <p className="text-gray-600">Years old</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">18%</div>
                  <p className="text-gray-600">Medicare & Medicaid</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Disabled Rate</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">15%</div>
                  <p className="text-gray-600">Under 65 Disabled</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">72%</div>
                  <p className="text-gray-600">Non-White Population</p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Resources */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Resources in Los Angeles County
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {losAngelesCountyData.localResources.map((resource, index) => (
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

          {/* Nearby Counties */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Plans in Nearby California Counties
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {losAngelesCountyData.nearbyCounties.map((county, index) => (
                  <Link 
                    key={index}
                    href={`/medicare-advantage/${county.slug}`}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-colors group text-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 mb-3">
                      {county.name}
                    </h3>
                    <p className="text-blue-600 font-medium group-hover:text-blue-700">
                      View Plans →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Enrollment Periods */}
          <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  2025 Medicare Advantage Enrollment Periods in Los Angeles County
                </h2>
                <p className="text-xl text-gray-700">
                  Don't miss your chance to enroll in world-class LA County Medicare plans | No pierdas tu oportunidad
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {losAngelesCountyData.enrollmentPeriods.map((period, index) => (
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
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">⏰ ¡No Esperes! Don't Wait!</h3>
                  <p className="text-blue-700">
                    Missing enrollment deadlines means you may have to wait until next year to access Cedars-Sinai, UCLA Health, 
                    and other world-class providers. Call us today for a free multicultural consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions: Medicare Advantage in Los Angeles County
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the best Medicare Advantage plans in Los Angeles County, California?
                  </h3>
                  <p className="text-gray-700">
                    The best Medicare Advantage plans in Los Angeles County include options from Kaiser Permanente Southern California, 
                    Cedars-Sinai Health System, UCLA Health, USC Healthcare, and Providence Health & Services. The "best" plan 
                    depends on your specific needs, preferred doctors, medications, and language preferences. Our multilingual agents 
                    can help you compare plans in English, Spanish, Korean, Armenian, Chinese, and Tagalog. For other major markets, see 
                    <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-600 hover:underline">Dallas County, TX</Link> or 
                    <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York State plans</Link>.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are there $0 premium Medicare Advantage plans available in Los Angeles County?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Los Angeles County has 25+ Medicare Advantage plans with $0 premium available. These plans can 
                    save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap policy. 
                    $0 premium plans include prescription drug coverage and often include extra benefits like dental, 
                    vision, and transportation. Compare with nearby counties or explore 
                    <Link href="/medicare-advantage/southwest" className="text-blue-600 hover:underline">Southwest regional plans</Link> for additional options.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do Medicare Advantage plans in Los Angeles County offer bilingual services?
                  </h3>
                  <p className="text-gray-700">
                    ¡Absolutamente! Many Medicare Advantage plans in Los Angeles County offer comprehensive multilingual 
                    support including Spanish, Korean, Armenian, Chinese, and Tagalog-speaking customer service, plan 
                    materials, and enrollment assistance. Our licensed multilingual agents can help you compare plans 
                    and enroll in your preferred language.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What transportation benefits do Medicare Advantage plans offer in Los Angeles County?
                  </h3>
                  <p className="text-gray-700">
                    Many Medicare Advantage plans in Los Angeles County offer transportation benefits specifically designed 
                    for LA's geography, including rides to medical appointments, pharmacy trips, and wellness activities. 
                    Some plans provide LA Metro TAP card credits or rideshare benefits to help you access care across 
                    the county's vast area. Compare these LA-specific benefits with 
                    <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York's transit benefits</Link> or 
                    <Link href="/medicare-advantage/mid-atlantic" className="text-blue-600 hover:underline">Mid-Atlantic transportation options</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Blog Posts */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Latest Blog Posts for LA County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🏥</div>
                      <div className="text-lg font-semibold">Healthcare Access</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Medicare Advantage at Cedars-Sinai vs UCLA Health: LA County Comparison
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Compare coverage and benefits at Los Angeles County's premier medical centers, including network differences and specialty care access.
                    </p>
                    <Link href="/blog/cedars-sinai-vs-ucla-medicare-advantage-la" className="text-blue-600 font-medium hover:text-blue-700">
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🌍</div>
                      <div className="text-lg font-semibold">Multicultural</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Medicare Advantage for LA's Hispanic Community: Bilingual Services and Cultural Care
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Discover Medicare Advantage plans offering Spanish-language support and culturally appropriate healthcare for LA County's Latino population.
                    </p>
                    <Link href="/blog/medicare-advantage-hispanic-community-la-county" className="text-blue-600 font-medium hover:text-blue-700">
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🚇</div>
                      <div className="text-lg font-semibold">Transportation</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Medicare Advantage Transportation Benefits: Navigating LA County's Healthcare System
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Learn about transportation benefits available through Medicare Advantage plans to help you access care across LA County's vast geography.
                    </p>
                    <Link href="/blog/medicare-advantage-transportation-la-county" className="text-blue-600 font-medium hover:text-blue-700">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan in Los Angeles County?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our licensed multilingual Medicare specialists have helped thousands of Los Angeles County residents save money and access world-class care. 
                We'll compare all 25+ available plans from Kaiser Permanente, Cedars-Sinai, UCLA Health, USC Healthcare, and Providence to find your perfect match - at no cost to you. 
                We also serve other major markets including 
                <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-200 hover:underline hover:text-white">Dallas County, TX</Link>, 
                <Link href="/medicare-advantage/west-coast" className="text-blue-200 hover:underline hover:text-white">West Coast region</Link>, 
                <Link href="/medicare-advantage/new-york" className="text-blue-200 hover:underline hover:text-white">New York State</Link>, and 
                <Link href="/medicare-advantage/mid-atlantic" className="text-blue-200 hover:underline hover:text-white">Mid-Atlantic region</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('contact', 'cta', '/contact')}>
                  Get Free Multicultural Plan Comparison
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