import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Best Medicare Advantage Plans Southwest 2025 | $0 Premium | TX, AZ, NM, NV, CO | El-Mag Insurance',
  description: 'Find the best Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, Colorado. Compare $0 premium plans with bilingual Spanish support, 4-5 star ratings, prescription drug coverage. Free consultation & Hispanic-focused services. Enroll during 2025 open enrollment.',
  keywords: 'Medicare Advantage Southwest, Medicare plans Texas Arizona New Mexico Nevada Colorado, best Medicare Advantage plans 2025 Southwest, $0 premium Medicare plans Texas Arizona, Medicare Advantage enrollment Southwest, Medicare plans Spanish bilingual, Hispanic Medicare services, Medicare Advantage Houston Dallas Phoenix San Antonio, Medicare Advantage Las Vegas Denver Tucson, Medicare open enrollment 2025 Southwest, Medicare Advantage vs Original Medicare Southwest, Medicare Part D prescription drugs Southwest, Medicare Advantage dental vision Southwest, 4 star 5 star Medicare Advantage plans Southwest, Medicare Advantage provider networks Texas Arizona, Medicare Advantage bilingual customer service, Medicare Advantage border healthcare, Medicare Advantage rural Southwest, Medicare Advantage telehealth Southwest, Medicare Advantage transportation benefits Southwest',
  openGraph: {
    title: 'Best Medicare Advantage Plans Southwest 2025 | $0 Premium Plans Available | TX, AZ, NM, NV, CO',
    description: 'Compare top-rated Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, Colorado. $0 premium options with 4-5 star ratings, bilingual Spanish services, prescription drug coverage, dental & vision benefits. Expert guidance during 2025 open enrollment.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Medicare Advantage Plans Southwest 2025 | $0 Premium Available',
    description: 'Find & compare top Medicare Advantage plans in TX, AZ, NM, NV, CO. $0 premium options with bilingual Spanish support available. Licensed agents help during 2025 open enrollment.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-advantage/southwest',
  },
};

const southwestData = {
  region: 'Southwest',
  states: ['Texas', 'Arizona', 'New Mexico', 'Nevada', 'Colorado'],
  totalEnrollment: 3250000,
  maPenetrationRate: 38,
  hispanicPopulation: 35,
  opportunityScore: 82,
  competitionLevel: 'Medium-High' as const,
  majorCities: [
    'Houston, TX',
    'Dallas, TX',
    'San Antonio, TX',
    'Phoenix, AZ',
    'Austin, TX',
    'Las Vegas, NV',
    'Denver, CO',
    'Tucson, AZ',
    'El Paso, TX',
    'Albuquerque, NM',
  ],
  demographics: {
    avgAge: 72,
    malePercentage: 48,
    disabledPercentage: 14,
    raceDistribution: {
      white: 45,
      black: 8,
      hispanic: 35,
      asian: 5,
      native: 5,
      other: 2,
    },
  },
  keyBenefits: [
    'Bilingual customer service and plan materials in Spanish',
    'Culturally competent healthcare providers',
    'Coverage for border healthcare services',
    'Desert climate specialized care programs',
    'Transportation benefits for rural communities',
    'Telehealth services connecting vast geographic areas',
  ],
  majorProviders: [
    'HCA Healthcare (Texas)',
    'Banner Health (Arizona)',
    'Presbyterian Healthcare Services (New Mexico)',
    'Dignity Health (Nevada)',
    'Kaiser Permanente Colorado',
    'Methodist Healthcare (Texas)',
    'University of New Mexico Health',
    'Valley Health System (Nevada)',
  ],
  regionalFeatures: [
    {
      title: 'Bilingual Services',
      description: 'Comprehensive Spanish-language support for enrollment, customer service, and plan materials',
      icon: '🌎',
    },
    {
      title: 'Border Healthcare',
      description: 'Special provisions for cross-border medical care and emergency services',
      icon: '🏥',
    },
    {
      title: 'Desert Climate Care',
      description: 'Specialized programs for heat-related health conditions and hydration support',
      icon: '🌵',
    },
    {
      title: 'Rural Connectivity',
      description: 'Enhanced telehealth and transportation services for rural and remote communities',
      icon: '🚗',
    },
  ],
  specialPrograms: [
    {
      title: 'Hispanic Health Initiative',
      description: 'Culturally tailored health programs addressing diabetes, hypertension, and cardiovascular health',
      languages: ['Spanish', 'English'],
    },
    {
      title: 'Rural Health Access Program',
      description: 'Transportation vouchers and mobile health units serving remote communities',
      coverage: 'Rural areas across all Southwest states',
    },
    {
      title: 'Desert Wellness Program',
      description: 'Heat safety education, hydration support, and air quality monitoring',
      seasons: 'Enhanced benefits during summer months',
    },
  ],
  countyLinks: [
    { name: 'Harris County, Texas', slug: 'harris-county-texas', state: 'TX' },
    { name: 'Dallas County, Texas', slug: 'dallas-county-texas', state: 'TX' },
    { name: 'Maricopa County, Arizona', slug: 'maricopa-county-arizona', state: 'AZ' },
    { name: 'Clark County, Nevada', slug: 'clark-county-nevada', state: 'NV' },
    { name: 'Denver County, Colorado', slug: 'denver-county-colorado', state: 'CO' },
    { name: 'Bernalillo County, New Mexico', slug: 'bernalillo-county-new-mexico', state: 'NM' },
  ],
  competitiveAdvantages: [
    {
      title: '$0 Premium Plans Available',
      description: 'Access Medicare Advantage plans with $0 monthly premium across Texas, Arizona, New Mexico, Nevada, and Colorado',
      highlight: 'Save $1,500+ annually',
      icon: '💰'
    },
    {
      title: 'Bilingual Spanish Support',
      description: 'Full bilingual customer service, plan materials, and enrollment assistance in Spanish and English',
      highlight: 'Servicio en Español',
      icon: '🌎'
    },
    {
      title: '4 & 5-Star Plan Options',
      description: 'Choose from top-rated Medicare Advantage plans with CMS quality ratings of 4-5 stars across the Southwest',
      highlight: 'Higher quality care',
      icon: '⭐'
    },
    {
      title: 'Border & Rural Coverage',
      description: 'Specialized coverage for border healthcare services and enhanced rural transportation benefits',
      highlight: 'Unique Southwest benefits',
      icon: '🏥'
    }
  ],
  planComparison: {
    originalMedicare: {
      monthlyPremium: '$174.70',
      deductible: '$1,600',
      prescriptionDrugs: 'Not included',
      dentalVision: 'Not covered',
      bilingualSupport: 'Limited',
      outOfPocketMax: 'No limit'
    },
    medicareAdvantage: {
      monthlyPremium: '$0-$45',
      deductible: '$0-$400',
      prescriptionDrugs: 'Included',
      dentalVision: 'Often included',
      bilingualSupport: 'Full Spanish support',
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

export default function SouthwestPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('index');
  breadcrumbItems.push({ label: 'Southwest Region', current: true });
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Structured data for local business and service area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "El-Mag Insurance - Medicare Advantage Southwest",
    "description": "Licensed Medicare insurance agency serving Texas, Arizona, New Mexico, Nevada, and Colorado with bilingual Medicare Advantage plan enrollment and consultation services.",
    "url": "https://elmag-insurance.com/medicare-advantage/southwest",
    "telephone": "331-343-2584",
    "areaServed": [
      "Texas", "Arizona", "New Mexico", "Nevada", "Colorado"
    ],
    "serviceType": "Medicare Advantage Plan Enrollment",
    "priceRange": "Free Consultation",
    "languages": ["English", "Spanish"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medicare Advantage Plans Southwest 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "$0 Premium Medicare Advantage Plans",
            "description": "Medicare Advantage plans with $0 monthly premium including prescription drug coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bilingual Spanish Medicare Support",
            "description": "Full bilingual customer service and enrollment assistance in Spanish and English"
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
        "name": "What are the best Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, and Colorado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best Medicare Advantage plans in the Southwest include options from HCA Healthcare, Banner Health, Kaiser Permanente Colorado, Presbyterian Healthcare Services, and Dignity Health. The best plan depends on your specific needs, preferred doctors, medications, and language preferences. Our bilingual agents can help you compare plans in English and Spanish."
        }
      },
      {
        "@type": "Question",
        "name": "Are there $0 premium Medicare Advantage plans available in the Southwest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Many counties in Texas, Arizona, New Mexico, Nevada, and Colorado offer $0 premium Medicare Advantage plans. These plans can save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap policy. $0 premium plans include prescription drug coverage and often include extra benefits like dental and vision."
        }
      },
      {
        "@type": "Question",
        "name": "Do Medicare Advantage plans in the Southwest offer bilingual Spanish support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Many Medicare Advantage plans in the Southwest offer comprehensive bilingual support including Spanish-language customer service, plan materials, and enrollment assistance. Our licensed bilingual agents can help you compare plans and enroll in your preferred language."
        }
      },
      {
        "@type": "Question",
        "name": "What special benefits do Medicare Advantage plans offer in the Southwest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicare Advantage plans in the Southwest often include specialized benefits like border healthcare coverage, desert climate care programs, rural transportation services, bilingual customer support, culturally competent care, and enhanced telehealth services connecting rural and urban areas."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Medicare Advantage Plans Southwest Region 2025"
        region="Southwest"
        demographics={{
          avgAge: 72,
          hispanicPopulation: 35,
          maPenetrationRate: 38
        }}
        keyMetrics={{
          total_enrollment: 3250000,
          opportunity_score: 82,
          states_covered: 5
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
          <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Best Medicare Advantage Plans Southwest 2025 - $0 Premium Options Available
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 mb-8">
                  Find & compare top-rated Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, and Colorado. 
                  $0 premium options with 4-5 star ratings, bilingual Spanish support, prescription drug coverage, and extra benefits Original Medicare doesn't cover.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 text-orange-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">3.25M+</div>
                      <div className="text-sm">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">$0</div>
                      <div className="text-sm">Premium Plans</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Español</div>
                      <div className="text-sm">Bilingual Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4-5★</div>
                      <div className="text-sm">Star Ratings</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/medicare-advantage" className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}>
                    Compare Southwest Plans
                  </Link>
                  <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}>
                    331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Urgent Value Proposition */}
          <section className="py-8 bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-red-600 text-xl">⏰</span>
                    <h2 className="text-xl font-bold text-red-800">2025 Open Enrollment Deadline: December 7th | Fecha Límite: 7 de Diciembre</h2>
                  </div>
                  <p className="text-red-700 mb-3">
                    ¡No pierdas tu oportunidad! Southwest residents can save $1,500+ annually with $0 premium Medicare Advantage plans 
                    that include dental, vision, prescription drug coverage, and bilingual Spanish support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="tel:331-343-2584" className="bg-red-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700 transition-colors text-center">
                      Llame Ahora: 331-E-HEALTH
                    </a>
                    <Link href="/contact" className="bg-white text-red-600 border border-red-300 font-semibold px-6 py-2 rounded-md hover:bg-red-50 transition-colors text-center">
                      Free Bilingual Comparison
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
                Southwest Medicare Market Overview
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                The Southwest region offers exceptional Medicare Advantage options with strong bilingual support, diverse provider networks, 
                and specialized programs for Hispanic communities. Compare with neighboring regions like 
                <Link href="/medicare-advantage/west-coast" className="text-blue-600 hover:underline">West Coast</Link>, 
                <Link href="/medicare-advantage/mid-atlantic" className="text-blue-600 hover:underline">Mid-Atlantic</Link>, or 
                <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York</Link> markets.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">3.25M</div>
                  <div className="text-gray-600">Total Medicare Beneficiaries</div>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">38%</div>
                  <div className="text-gray-600">MA Penetration Rate</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">35%</div>
                  <div className="text-gray-600">Hispanic Population</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">82</div>
                  <div className="text-gray-600">Opportunity Score</div>
                </div>
              </div>
            </div>
          </section>

          {/* States Covered */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                States We Serve in the Southwest Region
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {southwestData.states.map((state, index) => {
                  const stateLinks: Record<string, string> = {
                    'Texas': '/medicare-advantage/dallas-county-texas',
                    'Arizona': '/medicare-advantage/southwest',
                    'New Mexico': '/medicare-advantage/southwest',
                    'Nevada': '/medicare-advantage/southwest',
                    'Colorado': '/medicare-advantage/southwest'
                  };
                  
                  return (
                    <Link key={index} href={stateLinks[state] || '/medicare-advantage/southwest'} className="bg-white p-6 rounded-lg shadow-sm text-center hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition-colors group">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700 mb-2">{state}</h3>
                      <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-orange-600 text-2xl">🌵</span>
                      </div>
                      <p className="text-orange-600 font-medium group-hover:text-orange-700 mt-2 text-sm">
                        View Plans →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Medicare Advantage Over Original Medicare in the Southwest?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, and Colorado offer significantly better value, 
                  comprehensive bilingual support, and specialized Southwest benefits that Original Medicare + Medigap cannot match.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {southwestData.competitiveAdvantages.map((advantage, index) => (
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
                  Medicare Advantage vs Original Medicare: Southwest Comparison
                </h2>
                <p className="text-lg text-gray-600">
                  See how Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, and Colorado compare to Original Medicare
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
                        <span className="font-semibold text-gray-900">{southwestData.planComparison.originalMedicare.monthlyPremium}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-gray-900">{southwestData.planComparison.originalMedicare.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-red-600">{southwestData.planComparison.originalMedicare.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-red-600">{southwestData.planComparison.originalMedicare.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bilingual Support:</span>
                        <span className="font-semibold text-red-600">{southwestData.planComparison.originalMedicare.bilingualSupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-red-600">{southwestData.planComparison.originalMedicare.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>

                  {/* Medicare Advantage */}
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-300 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">Recommended</span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-orange-600 mb-2">Medicare Advantage</h3>
                      <p className="text-sm text-gray-600">All-in-one Medicare alternative with bilingual support</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly Premium:</span>
                        <span className="font-semibold text-green-600">{southwestData.planComparison.medicareAdvantage.monthlyPremium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-green-600">{southwestData.planComparison.medicareAdvantage.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-green-600">{southwestData.planComparison.medicareAdvantage.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-green-600">{southwestData.planComparison.medicareAdvantage.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bilingual Support:</span>
                        <span className="font-semibold text-green-600">{southwestData.planComparison.medicareAdvantage.bilingualSupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-green-600">{southwestData.planComparison.medicareAdvantage.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="bg-green-100 text-green-800 p-6 rounded-xl inline-block max-w-2xl">
                    <p className="font-semibold text-lg mb-2">💰 Potential Annual Savings with Medicare Advantage: $1,500 - $3,000+</p>
                    <p className="text-sm text-green-700">
                      Based on 2025 premiums: Original Medicare Part B ($174.70/month) + Medigap Plan G (~$130-180/month) + Part D (~$35/month) vs $0 Premium Medicare Advantage with bilingual support and all benefits included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regional Features */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Southwest Medicare Advantage Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {southwestData.regionalFeatures.map((feature, index) => (
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
                Specialized Southwest Programs
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {southwestData.specialPrograms.map((program, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.languages && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Languages: </span>
                        <span className="text-sm text-orange-600">{program.languages.join(', ')}</span>
                      </div>
                    )}
                    {program.coverage && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Coverage: </span>
                        <span className="text-sm text-orange-600">{program.coverage}</span>
                      </div>
                    )}
                    {program.seasons && (
                      <div className="mb-2">
                        <span className="text-sm font-medium text-gray-600">Timing: </span>
                        <span className="text-sm text-orange-600">{program.seasons}</span>
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
                Local Medicare Advantage Benefits in the Southwest
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Why El-Mag Insurance is Your Best Choice for Southwest Medicare</h3>
                    <p className="text-blue-800">
                      Unlike national call centers, our bilingual Southwest Medicare specialists understand regional provider networks, 
                      Hispanic community needs, and border healthcare requirements. We're licensed in all 5 Southwest states and provide 
                      culturally competent service in English and Spanish. We also serve 
                      <Link href="/medicare-advantage/mid-atlantic" className="text-blue-600 underline hover:text-blue-800">Mid-Atlantic</Link>, 
                      <Link href="/medicare-advantage/new-york" className="text-blue-600 underline hover:text-blue-800">New York</Link>, and 
                      <Link href="/medicare-advantage/west-coast" className="text-blue-600 underline hover:text-blue-800">West Coast</Link> regions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {southwestData.keyBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-orange-600 font-bold text-xl">✓</span>
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
                Top Healthcare Systems in the Southwest
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {southwestData.majorProviders.map((provider, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <span className="text-orange-600 text-2xl">🏥</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{provider}</h3>
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
                {southwestData.majorCities.map((city, index) => {
                  const cityLinks: Record<string, string> = {
                    'Houston, TX': '/medicare-advantage/southwest',
                    'Dallas, TX': '/medicare-advantage/dallas-county-texas',
                    'San Antonio, TX': '/medicare-advantage/southwest',
                    'Phoenix, AZ': '/medicare-advantage/southwest',
                    'Austin, TX': '/medicare-advantage/southwest',
                    'Las Vegas, NV': '/medicare-advantage/southwest',
                    'Denver, CO': '/medicare-advantage/southwest',
                    'Tucson, AZ': '/medicare-advantage/southwest',
                    'El Paso, TX': '/medicare-advantage/southwest',
                    'Albuquerque, NM': '/medicare-advantage/southwest'
                  };
                  
                  return (
                    <Link key={index} href={cityLinks[city] || '/medicare-advantage/southwest'} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition-colors group">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700 mb-2">{city}</h3>
                      <div className="w-12 h-12 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-red-600 text-xl">🏙️</span>
                      </div>
                      <p className="text-orange-600 font-medium group-hover:text-orange-700 mt-2 text-sm">
                        Local Plans →
                      </p>
                    </Link>
                  );
                })}
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
                {southwestData.countyLinks.map((county, index) => (
                  <Link 
                    key={index}
                    href={`/medicare-advantage/${county.slug}`}
                    className="bg-white p-6 rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-gray-200 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700">
                        {county.name}
                      </h3>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        {county.state}
                      </span>
                    </div>
                    <p className="text-orange-600 font-medium group-hover:text-orange-700">
                      View Local Plans →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Enrollment Periods */}
          <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  2025 Medicare Advantage Enrollment Periods in Southwest States
                </h2>
                <p className="text-xl text-gray-700">
                  Don't miss your chance to enroll in or change your Medicare Advantage plan | No pierdas tu oportunidad
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {southwestData.enrollmentPeriods.map((period, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-orange-600 text-xl">📅</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{period.name}</h3>
                        <p className="text-orange-600 font-medium">{period.dates}</p>
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
                <div className="bg-red-100 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">⏰ ¡No Esperes! Don't Wait!</h3>
                  <p className="text-red-700">
                    Missing enrollment deadlines means you may have to wait until next year to make changes. 
                    Call us today for a free bilingual consultation and plan comparison.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions: Medicare Advantage in the Southwest
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the best Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, and Colorado?
                  </h3>
                  <p className="text-gray-700">
                    The best Medicare Advantage plans in the Southwest include options from HCA Healthcare, Banner Health, 
                    Kaiser Permanente Colorado, Presbyterian Healthcare Services, and Dignity Health. The "best" plan depends on your 
                    specific needs, preferred doctors, medications, and language preferences. Our bilingual agents can help you compare 
                    plans in English and Spanish. For neighboring areas, see 
                    <Link href="/medicare-advantage/west-coast" className="text-blue-600 hover:underline">West Coast plans</Link> or 
                    <Link href="/medicare-advantage/mid-atlantic" className="text-blue-600 hover:underline">Mid-Atlantic region plans</Link>.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are there $0 premium Medicare Advantage plans available in the Southwest?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Many counties in Texas, Arizona, New Mexico, Nevada, and Colorado offer $0 premium Medicare 
                    Advantage plans. These plans can save you over $1,500 annually compared to Original Medicare Part B 
                    premium plus a Medigap policy. $0 premium plans include prescription drug coverage and often 
                    include extra benefits like dental and vision. For specific county information, check out 
                    <Link href="/medicare-advantage/dallas-county-texas" className="text-blue-600 hover:underline">Dallas County, TX plans</Link> with detailed local provider networks.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do Medicare Advantage plans in the Southwest offer bilingual Spanish support?
                  </h3>
                  <p className="text-gray-700">
                    ¡Sí! Many Medicare Advantage plans in the Southwest offer comprehensive bilingual support including 
                    Spanish-language customer service, plan materials, and enrollment assistance. Our licensed bilingual 
                    agents can help you compare plans and enroll in your preferred language - English or Spanish.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What special benefits do Medicare Advantage plans offer in the Southwest?
                  </h3>
                  <p className="text-gray-700">
                    Medicare Advantage plans in Texas, Arizona, New Mexico, Nevada, and Colorado often include specialized 
                    benefits like border healthcare coverage, desert climate care programs, rural transportation services, 
                    bilingual customer support, culturally competent care, and enhanced telehealth services connecting 
                    rural and urban areas. Compare these Southwest-specific benefits with plans in 
                    <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">Los Angeles County, CA</Link> or 
                    <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York State</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Demographics */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Southwest Medicare Demographics
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">72</div>
                  <p className="text-gray-600">Years old</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gender Split</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">48%</div>
                  <p className="text-gray-600">Male / 52% Female</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Disabled Rate</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">14%</div>
                  <p className="text-gray-600">Under 65 Disabled</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">55%</div>
                  <p className="text-gray-600">Non-White Population</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-orange-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para Encontrar tu Plan Medicare Perfecto en el Suroeste?
              </h2>
              <p className="text-xl text-orange-100 mb-4 max-w-3xl mx-auto">
                Ready to Find Your Perfect Medicare Plan in the Southwest?
              </p>
              <p className="text-lg text-orange-100 mb-8 max-w-3xl mx-auto">
                Our licensed bilingual Medicare specialists have helped thousands of Southwest residents save money and get better benefits. 
                We'll compare all available plans from HCA Healthcare, Banner Health, Kaiser Permanente, and more to find your perfect match - at no cost to you. 
                We also serve neighboring regions including 
                <Link href="/medicare-advantage/west-coast" className="text-orange-200 hover:underline hover:text-white">West Coast</Link>, 
                <Link href="/medicare-advantage/mid-atlantic" className="text-orange-200 hover:underline hover:text-white">Mid-Atlantic</Link>, 
                <Link href="/medicare-advantage/new-york" className="text-orange-200 hover:underline hover:text-white">New York</Link>, and specific counties like 
                <Link href="/medicare-advantage/los-angeles-county-california" className="text-orange-200 hover:underline hover:text-white">Los Angeles County, CA</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('contact', 'cta', '/contact')}>
                  Get Bilingual Plan Comparison
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('cta')}>
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