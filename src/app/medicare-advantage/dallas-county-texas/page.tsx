import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Best Medicare Advantage Plans Dallas County TX 2025 | $0 Premium | El-Mag Insurance',
  description: 'Find the best Medicare Advantage plans in Dallas County, Texas. Compare $0 premium plans with bilingual Spanish support, 4-5 star ratings, prescription drug coverage. Access to UT Southwestern, Baylor Scott & White, Texas Health Resources. Free consultation during 2025 open enrollment.',
  keywords: 'Medicare Advantage Dallas County Texas, Medicare plans Dallas TX, best Medicare Advantage plans 2025 Dallas, $0 premium Medicare plans Dallas County, Medicare Advantage enrollment Dallas, Medicare plans Spanish bilingual Dallas, UT Southwestern Medicare Advantage, Baylor Scott White Medicare Advantage, Texas Health Resources Medicare plans, Methodist Health System Medicare plans, Medicare Advantage Plano, Medicare Advantage Irving, Medicare Advantage Garland, Medicare Advantage Richardson, Medicare Advantage Mesquite, Medicare open enrollment 2025 Dallas, Medicare Advantage vs Original Medicare Dallas, Medicare Part D prescription drugs Dallas, Medicare Advantage dental vision Dallas, 4 star 5 star Medicare Advantage plans Dallas, Medicare Advantage DFW metroplex, Medicare Advantage Hispanic community Dallas, Medicare Advantage African American community Dallas, Medicare Advantage transportation benefits DART, Medicare Advantage dual eligible Dallas County',
  openGraph: {
    title: 'Best Medicare Advantage Plans Dallas County TX 2025 | $0 Premium Plans Available',
    description: 'Compare top-rated Medicare Advantage plans in Dallas County, TX. $0 premium options with 4-5 star ratings, bilingual Spanish support, access to UT Southwestern, Baylor Scott & White, Texas Health Resources. Multicultural services during 2025 open enrollment.',
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
    title: 'Best Medicare Advantage Plans Dallas County TX 2025 | $0 Premium Available',
    description: 'Find & compare top Medicare Advantage plans in Dallas County, TX. $0 premium options with bilingual support and DFW provider access. Licensed agents help during 2025 open enrollment.',
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dallas-county-texas',
  },
};

const dallasCountyData = {
  county: 'Dallas County',
  state: 'Texas',
  stateAbbrev: 'TX',
  slug: 'dallas-county-texas',
  totalEnrollment: 385000,
  maPenetrationRate: 41,
  opportunityScore: 78,
  dualEligibleRate: 16,
  competitionLevel: 'High' as const,
  addressableMarket: 227000,
  potentialRevenue: 326592000,
  demographics: {
    avgAge: 72,
    malePercentage: 47,
    disabledPercentage: 16,
    raceDistribution: {
      white: 34,
      black: 24,
      hispanic: 36,
      asian: 5,
      other: 1,
    },
  },
  marketingRecommendations: {
    primaryChannels: ['Spanish Radio', 'Community Centers', 'Churches', 'Direct Mail'],
    targetDemographics: ['Hispanic/Latino Community', 'African American Community', 'Dual Eligible Beneficiaries'],
    keyMessages: [
      'Better Benefits Than Original Medicare',
      'Local Provider Networks in DFW',
      'Bilingual Customer Service',
      'Transportation Benefits',
    ],
  },
  nearbyCounties: [
    { name: 'Tarrant County, Texas', slug: 'tarrant-county-texas' },
    { name: 'Collin County, Texas', slug: 'collin-county-texas' },
    { name: 'Denton County, Texas', slug: 'denton-county-texas' },
    { name: 'Harris County, Texas', slug: 'harris-county-texas' },
  ],
  localProviders: [
    'Baylor Scott & White Health',
    'UT Southwestern Medical Center',
    'Texas Health Resources',
    'Methodist Health System',
    'Presbyterian Healthcare',
    'Children\'s Health System of Texas',
    'Parkland Health & Hospital System',
    'Medical City Healthcare',
  ],
  localPharmacies: [
    'CVS Pharmacy locations throughout Dallas County',
    'Walgreens with Medicare-preferred networks',
    'Tom Thumb Pharmacy',
    'Kroger Pharmacy',
    'H-E-B Pharmacy',
    'Walmart Pharmacy',
    'Independent community pharmacies',
  ],
  keyBenefits: [
    'Access to world-class healthcare systems like UT Southwestern and Baylor',
    'Comprehensive transportation benefits for DFW metroplex',
    'Bilingual customer service and culturally competent care',
    'Enhanced benefits for managing diabetes and heart disease',
    'Prescription drug coverage with extensive Texas pharmacy networks',
    'Specialized care coordination for chronic conditions',
  ],
  dfwFeatures: [
    {
      title: 'DFW Metroplex Coverage',
      description: 'Seamless healthcare access across Dallas-Fort Worth metropolitan area',
      icon: '🏙️',
    },
    {
      title: 'Medical Excellence',
      description: 'Access to nationally ranked hospitals and medical centers',
      icon: '🏥',
    },
    {
      title: 'Cultural Competency',
      description: 'Providers trained in culturally appropriate care for diverse communities',
      icon: '🌍',
    },
    {
      title: 'Transportation Networks',
      description: 'Enhanced transportation benefits including DART partnerships',
      icon: '🚌',
    },
  ],
  localResources: [
    {
      name: 'Dallas County Health Department',
      description: 'Medicare education and enrollment assistance',
      phone: '214-819-2000',
    },
    {
      name: 'Area Agency on Aging of North Central Texas',
      description: 'Free Medicare counseling and SHIP services',
      phone: '214-871-5065',
    },
    {
      name: 'Parkland Hospital Medicare Education',
      description: 'Medicare enrollment help at safety net hospital',
      phone: '214-590-8000',
    },
    {
      name: 'Senior Source',
      description: 'Comprehensive senior services and Medicare assistance',
      phone: '214-823-5700',
    },
  ],
  majorCities: [
    'Dallas',
    'Garland', 
    'Irving',
    'Plano',
    'Mesquite',
    'Richardson',
    'Carrollton',
    'Grand Prairie',
  ],
  competitiveAdvantages: [
    {
      title: '$0 Premium Plans Available',
      description: 'Access 18+ Medicare Advantage plans with $0 monthly premium throughout Dallas County',
      highlight: 'Save $1,500+ annually',
      icon: '💰'
    },
    {
      title: 'World-Class DFW Healthcare Access',
      description: 'Direct access to UT Southwestern, Baylor Scott & White, Texas Health Resources, and Methodist Health System',
      highlight: 'Top-ranked providers',
      icon: '🏆'
    },
    {
      title: 'Bilingual & Cultural Services',
      description: 'Full bilingual support in Spanish and English with culturally competent care for diverse Dallas County communities',
      highlight: '66% diverse population served',
      icon: '🌎'
    },
    {
      title: 'DFW Metro Transportation Benefits',
      description: 'Transportation vouchers and DART partnerships designed specifically for Dallas County’s vast metroplex area',
      highlight: 'Navigate DFW easier',
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
      monthlyPremium: '$0-$45',
      deductible: '$0-$400',
      prescriptionDrugs: 'Included',
      dentalVision: 'Often included',
      bilingualSupport: 'Full Spanish support',
      transportation: 'DART benefits included',
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

export default function DallasCountyTexasPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('county', 'Dallas County, Texas');
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Structured data for local business and service area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "El-Mag Insurance - Medicare Advantage Dallas County",
    "description": "Licensed Medicare insurance agency serving Dallas County, Texas with bilingual Medicare Advantage plan enrollment and consultation services.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/dallas-county-texas",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Dallas County, Texas"
    },
    "serviceType": "Medicare Advantage Plan Enrollment",
    "priceRange": "Free Consultation",
    "languages": ["English", "Spanish"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medicare Advantage Plans Dallas County 2025",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "$0 Premium Medicare Advantage Plans",
            "description": "18+ Medicare Advantage plans with $0 monthly premium including prescription drug coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bilingual Medicare Support",
            "description": "Full bilingual Medicare enrollment assistance for Dallas County's diverse communities"
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
        "name": "What are the best Medicare Advantage plans in Dallas County, Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best Medicare Advantage plans in Dallas County include options from UT Southwestern Medical Center, Baylor Scott & White Health, Texas Health Resources, Methodist Health System, and Presbyterian Healthcare. The best plan depends on your specific needs, preferred doctors, medications, and language preferences. Our bilingual agents can help you compare plans in English and Spanish."
        }
      },
      {
        "@type": "Question",
        "name": "Are there $0 premium Medicare Advantage plans available in Dallas County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Dallas County has 18+ Medicare Advantage plans with $0 premium available. These plans can save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap policy. $0 premium plans include prescription drug coverage and often include extra benefits like dental, vision, and transportation."
        }
      },
      {
        "@type": "Question",
        "name": "Do Medicare Advantage plans in Dallas County offer bilingual services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Many Medicare Advantage plans in Dallas County offer comprehensive bilingual support including Spanish-speaking customer service, plan materials, and enrollment assistance. Our licensed bilingual agents can help you compare plans and enroll in your preferred language - English or Spanish."
        }
      },
      {
        "@type": "Question",
        "name": "What transportation benefits do Medicare Advantage plans offer in Dallas County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Medicare Advantage plans in Dallas County offer transportation benefits specifically designed for the DFW metroplex, including rides to medical appointments, pharmacy trips, and wellness activities. Some plans provide DART transit benefits or rideshare credits to help you access care across Dallas County's vast area."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage in Dallas County, Texas 2025"
        county="Dallas County"
        state="Texas"
        demographics={{
          avgAge: dallasCountyData.demographics.avgAge,
          hispanicPopulation: dallasCountyData.demographics.raceDistribution.hispanic,
          dualEligibleRate: dallasCountyData.dualEligibleRate,
          maPenetrationRate: dallasCountyData.maPenetrationRate
        }}
        keyMetrics={{
          total_enrollment: dallasCountyData.totalEnrollment,
          opportunity_score: dallasCountyData.opportunityScore
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
          <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Best Medicare Advantage Plans Dallas County TX 2025 - $0 Premium Options Available
                </h1>
                <p className="text-xl md:text-2xl text-red-100 mb-8">
                  Find & compare 18+ top-rated Medicare Advantage plans with $0 premium options and 4-5 star ratings. 
                  Access to UT Southwestern, Baylor Scott & White, Texas Health Resources with bilingual Spanish support for Dallas County's diverse communities.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 text-red-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">18+</div>
                      <div className="text-sm">$0 Plans</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">385K</div>
                      <div className="text-sm">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2</div>
                      <div className="text-sm">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">4-5⭐</div>
                      <div className="text-sm">Star Ratings</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/medicare-advantage" className="bg-white text-red-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('compare_plans', 'hero', '/medicare-advantage')}>
                    Compare Plans Now
                  </Link>
                  <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-red-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}>
                    331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Urgent Value Proposition */}
          <section className="py-8 bg-gradient-to-r from-red-50 to-blue-50 border-b border-red-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-red-600 text-xl">⏰</span>
                    <h2 className="text-xl font-bold text-red-800">2025 Open Enrollment Deadline: December 7th | Fecha Límite: 7 de Diciembre</h2>
                  </div>
                  <p className="text-red-700 mb-3">
                    ¡No pierdas tu oportunidad! Dallas County residents can save $1,500+ annually with 18+ $0 premium Medicare Advantage plans 
                    that include prescription drugs, dental, vision, and access to UT Southwestern, Baylor Scott & White, and Texas Health Resources.
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

          {/* Quick Stats */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Dallas County Medicare Advantage Market Overview
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Dallas County anchors the DFW metroplex with 385,000 Medicare beneficiaries and exceptional healthcare diversity. 
                With 41% Medicare Advantage penetration and world-class providers, Dallas County offers outstanding value and choice. 
                Compare with other major markets like 
                <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">Los Angeles County, CA</Link>, 
                <Link href="/medicare-advantage/southwest" className="text-blue-600 hover:underline">Southwest region</Link>, or 
                <Link href="/medicare-advantage/west-coast" className="text-blue-600 hover:underline">West Coast</Link> states.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">385,000</div>
                  <div className="text-gray-600">Total Medicare Beneficiaries</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">41%</div>
                  <div className="text-gray-600">MA Penetration Rate</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">18</div>
                  <div className="text-gray-600">$0 Premium Plans</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">36%</div>
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
                  Why Choose Medicare Advantage Over Original Medicare in Dallas County?
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Dallas County Medicare Advantage plans offer significantly better value, bilingual support, and access to 
                  world-renowned DFW healthcare systems that Original Medicare + Medigap simply cannot match.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {dallasCountyData.competitiveAdvantages.map((advantage, index) => (
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
                  Medicare Advantage vs Original Medicare: Dallas County Comparison
                </h2>
                <p className="text-lg text-gray-600">
                  See how Medicare Advantage plans in Dallas County compare to Original Medicare
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
                        <span className="font-semibold text-gray-900">{dallasCountyData.planComparison.originalMedicare.monthlyPremium}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-gray-900">{dallasCountyData.planComparison.originalMedicare.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-red-600">{dallasCountyData.planComparison.originalMedicare.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-red-600">{dallasCountyData.planComparison.originalMedicare.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bilingual Support:</span>
                        <span className="font-semibold text-red-600">{dallasCountyData.planComparison.originalMedicare.bilingualSupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Transportation:</span>
                        <span className="font-semibold text-red-600">{dallasCountyData.planComparison.originalMedicare.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-red-600">{dallasCountyData.planComparison.originalMedicare.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>

                  {/* Medicare Advantage */}
                  <div className="bg-white rounded-xl p-6 border-2 border-red-300 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">Recommended</span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-red-600 mb-2">Medicare Advantage</h3>
                      <p className="text-sm text-gray-600">All-in-one Medicare with bilingual support</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monthly Premium:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.monthlyPremium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Annual Deductible:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.deductible}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Prescription Drugs:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.prescriptionDrugs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Dental & Vision:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.dentalVision}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Bilingual Support:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.bilingualSupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Transportation:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.transportation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Out-of-Pocket Max:</span>
                        <span className="font-semibold text-green-600">{dallasCountyData.planComparison.medicareAdvantage.outOfPocketMax}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="bg-green-100 text-green-800 p-6 rounded-xl inline-block max-w-2xl">
                    <p className="font-semibold text-lg mb-2">💰 Potential Annual Savings with Medicare Advantage: $1,500 - $3,000+</p>
                    <p className="text-sm text-green-700">
                      Based on 2025 premiums: Original Medicare Part B ($174.70/month) + Medigap Plan G (~$140-180/month in TX) + Part D (~$40/month) vs $0 Premium Medicare Advantage with bilingual support and all benefits included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* DFW Features */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Dallas-Fort Worth Medicare Advantage Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {dallasCountyData.dfwFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Medicare Advantage in Dallas County */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Local Medicare Advantage Benefits in Dallas County
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-xl">🏆</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-900 mb-2">Why El-Mag Insurance is Your Best Choice for Dallas County Medicare</h3>
                    <p className="text-red-800">
                      Unlike national call centers, our Dallas County Medicare specialists understand the diverse cultural needs of 
                      DFW communities, have relationships with local providers like UT Southwestern and Baylor Scott & White, and provide 
                      service in Spanish and English. We're locally licensed and culturally competent. We also serve other major markets including 
                      <Link href="/medicare-advantage/los-angeles-county-california" className="text-red-600 underline hover:text-red-900">Los Angeles County, CA</Link>, 
                      <Link href="/medicare-advantage/new-york" className="text-red-600 underline hover:text-red-900">New York State</Link>, and 
                      <Link href="/medicare-advantage/mid-atlantic" className="text-red-600 underline hover:text-red-900">Mid-Atlantic region</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dallasCountyData.keyBenefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-bold text-xl">✓</span>
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
                Top Healthcare Providers in Dallas County
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hospital Systems</h3>
                  <ul className="space-y-3">
                    {dallasCountyData.localProviders.map((provider, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {provider}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pharmacy Networks</h3>
                  <ul className="space-y-3">
                    {dallasCountyData.localPharmacies.map((pharmacy, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {pharmacy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Major Cities */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Major Cities in Dallas County
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dallasCountyData.majorCities.map((city, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{city}</h3>
                    <div className="w-12 h-12 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-red-600 text-xl">🏙️</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Demographics and Market Insights */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Dallas County Medicare Demographics
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Age</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">72</div>
                  <p className="text-gray-600">Years old</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dual Eligible Rate</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">16%</div>
                  <p className="text-gray-600">Medicare & Medicaid</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Disabled Rate</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">16%</div>
                  <p className="text-gray-600">Under 65 Disabled</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">66%</div>
                  <p className="text-gray-600">Non-White Population</p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Resources */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Resources in Dallas County
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dallasCountyData.localResources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.name}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{resource.description}</p>
                    <p className="text-red-600 font-semibold text-sm">{resource.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Nearby Counties */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Plans in Nearby Texas Counties
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dallasCountyData.nearbyCounties.map((county, index) => (
                  <Link 
                    key={index}
                    href={`/medicare-advantage/${county.slug}`}
                    className="bg-white p-6 rounded-lg hover:bg-red-50 hover:border-red-200 border border-gray-200 transition-colors group text-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 mb-3">
                      {county.name}
                    </h3>
                    <p className="text-red-600 font-medium group-hover:text-red-700">
                      View Plans →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Enrollment Periods */}
          <section className="py-16 bg-gradient-to-r from-red-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  2025 Medicare Advantage Enrollment Periods in Dallas County
                </h2>
                <p className="text-xl text-gray-700">
                  Don't miss your chance to enroll in world-class DFW Medicare plans | No pierdas tu oportunidad
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {dallasCountyData.enrollmentPeriods.map((period, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-red-600 text-xl">📅</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{period.name}</h3>
                        <p className="text-red-600 font-medium">{period.dates}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{period.description}</p>
                    <div className="bg-red-50 text-red-800 px-3 py-2 rounded-lg text-sm">
                      <strong>Action:</strong> {period.action}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <div className="bg-red-100 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">⏰ ¡No Esperes! Don't Wait!</h3>
                  <p className="text-red-700">
                    Missing enrollment deadlines means you may have to wait until next year to access UT Southwestern, Baylor Scott & White, 
                    and other world-class DFW providers. Call us today for a free bilingual consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions: Medicare Advantage in Dallas County
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the best Medicare Advantage plans in Dallas County, Texas?
                  </h3>
                  <p className="text-gray-700">
                    The best Medicare Advantage plans in Dallas County include options from UT Southwestern Medical Center, 
                    Baylor Scott & White Health, Texas Health Resources, Methodist Health System, and Presbyterian Healthcare. 
                    The "best" plan depends on your specific needs, preferred doctors, medications, and language preferences. 
                    Our bilingual agents can help you compare plans in English and Spanish. For other major markets, see 
                    <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">Los Angeles County, CA</Link> or 
                    <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York State plans</Link>.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are there $0 premium Medicare Advantage plans available in Dallas County?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Dallas County has 18+ Medicare Advantage plans with $0 premium available. These plans can 
                    save you over $1,500 annually compared to Original Medicare Part B premium plus a Medigap policy. 
                    $0 premium plans include prescription drug coverage and often include extra benefits like dental, 
                    vision, and transportation. Compare with nearby Texas counties or explore 
                    <Link href="/medicare-advantage/southwest" className="text-blue-600 hover:underline">Southwest regional plans</Link> for additional options.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do Medicare Advantage plans in Dallas County offer bilingual services?
                  </h3>
                  <p className="text-gray-700">
                    ¡Sí! Many Medicare Advantage plans in Dallas County offer comprehensive bilingual support including 
                    Spanish-speaking customer service, plan materials, and enrollment assistance. Our licensed bilingual 
                    agents can help you compare plans and enroll in your preferred language - English or Spanish.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What transportation benefits do Medicare Advantage plans offer in Dallas County?
                  </h3>
                  <p className="text-gray-700">
                    Many Medicare Advantage plans in Dallas County offer transportation benefits specifically designed 
                    for the DFW metroplex, including rides to medical appointments, pharmacy trips, and wellness activities. 
                    Some plans provide DART transit benefits or rideshare credits to help you access care across 
                    Dallas County's vast area. Compare these DFW-specific benefits with 
                    <Link href="/medicare-advantage/los-angeles-county-california" className="text-blue-600 hover:underline">LA Metro benefits</Link> or 
                    <Link href="/medicare-advantage/new-york" className="text-blue-600 hover:underline">New York transit options</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Blog Posts */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Latest Blog Posts for Dallas County
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🏥</div>
                      <div className="text-lg font-semibold">Hospital Networks</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      UT Southwestern vs. Baylor Scott & White: Comparing Top Medicare Advantage Options in Dallas
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      A comprehensive comparison of Dallas County's premier healthcare systems, including network coverage, specialty care, and member satisfaction.
                    </p>
                    <Link href="/blog/ut-southwestern-vs-baylor-medicare-advantage-dallas" className="text-red-600 font-medium hover:text-red-700">
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🌍</div>
                      <div className="text-lg font-semibold">Cultural Care</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Medicare Advantage for Dallas County's Hispanic Community: Bilingual Care Options
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Discover Medicare Advantage plans offering Spanish-language support and culturally competent healthcare for Dallas County's Latino population.
                    </p>
                    <Link href="/blog/medicare-advantage-hispanic-community-dallas-county" className="text-red-600 font-medium hover:text-red-700">
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🚌</div>
                      <div className="text-lg font-semibold">Transportation</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Medicare Advantage Transportation Benefits: Navigating Healthcare in the DFW Metroplex
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Learn about transportation benefits available through Medicare Advantage plans to help you access care across the Dallas-Fort Worth area.
                    </p>
                    <Link href="/blog/medicare-advantage-transportation-dfw-metroplex" className="text-red-600 font-medium hover:text-red-700">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-red-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Find Your Perfect Medicare Plan in Dallas County?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                Our licensed bilingual Medicare specialists have helped thousands of Dallas County residents save money and access world-class DFW care. 
                We'll compare all 18+ available plans from UT Southwestern, Baylor Scott & White, Texas Health Resources, Methodist Health System, and Presbyterian Healthcare to find your perfect match - at no cost to you. 
                We also serve other major markets including 
                <Link href="/medicare-advantage/los-angeles-county-california" className="text-red-200 hover:underline hover:text-white">Los Angeles County, CA</Link>, 
                <Link href="/medicare-advantage/southwest" className="text-red-200 hover:underline hover:text-white">Southwest region</Link>, 
                <Link href="/medicare-advantage/new-york" className="text-red-200 hover:underline hover:text-white">New York State</Link>, and 
                <Link href="/medicare-advantage/west-coast" className="text-red-200 hover:underline hover:text-white">West Coast region</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-red-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center" onClick={() => (window as any).trackLandingPageCTA?.('contact', 'cta', '/contact')}>
                  Get Free DFW Plan Comparison
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-red-600 transition-colors text-center" onClick={() => (window as any).trackLandingPagePhoneCall?.('cta')}>
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