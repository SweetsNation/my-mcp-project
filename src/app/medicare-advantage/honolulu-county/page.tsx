import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Honolulu County Medicare Advantage 2025 | Oahu Urban Healthcare Plans | Multicultural Hawaii Coverage',
  description: 'Best Honolulu County Medicare Advantage plans 2025. Compare 42+ Oahu urban healthcare plans with multicultural services, Asian Pacific Islander programs, HART rail access.',
  keywords: 'Honolulu County Medicare Advantage 2025, Oahu Medicare plans, urban Hawaii Medicare, multicultural Medicare Hawaii, Asian Pacific Islander Medicare, Tagalog Medicare services Honolulu, Japanese Medicare plans Hawaii, Korean Medicare Honolulu, Hawaii Pacific Health Medicare, Kaiser Permanente Oahu, Queens Medical Center Medicare, Straub Medical Center Medicare, Honolulu Medicare specialists, Oahu senior health insurance, urban island Medicare coverage, Hawaii multicultural healthcare, Pacific Islander Medicare plans, Asian American Medicare Honolulu, Filipino Medicare services Hawaii, Honolulu County Medicare enrollment, Oahu Medicare brokers, Hawaii urban healthcare networks, HART rail Medicare access, Honolulu public transportation Medicare, Waikiki Medicare plans, Pearl City Medicare coverage, Kailua Medicare Advantage, Kaneohe Medicare plans, Hawaii Kai Medicare coverage, Aiea Medicare plans Oahu, Honolulu Medicare comparison 2025, urban Hawaii senior insurance, multicultural Medicare navigation Hawaii, Pacific Islander health equity Medicare',
  openGraph: {
    title: 'Best Medicare Advantage Plans Honolulu County 2025 | Oahu Coverage',
    description: 'Compare 40+ Medicare Advantage plans in Honolulu County. Urban healthcare networks, specialists, and comprehensive coverage for Oahu seniors.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-advantage/honolulu-county',
  },
}

const analyticsData = {
  pageType: 'medicare-advantage-honolulu-county',
  location: 'Honolulu County, Hawaii',
  planCount: 42,
  zeroPremiumPlans: 28,
  maPenetration: 58.7,
  seniorPopulation: 18.2,
  medianAge: 41.8,
  primaryLanguages: ['English', 'Tagalog', 'Japanese', 'Korean'],
  majorProviders: ['Hawaii Pacific Health', 'Kaiser Permanente Hawaii', 'Queens Health Systems', 'Straub Medical Center'],
  specialtyServices: ['Cardiology', 'Cancer Care', 'Orthopedics', 'Neurology'],
  transportationServices: true,
  islandHealthcare: true,
  urbanDensity: 'high'
}

export default function HonoluluCountyMedicareAdvantage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Advantage', href: '/medicare-advantage' },
    { label: 'Honolulu County', href: '/medicare-advantage/honolulu-county' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Local Business Schema for Honolulu County Medicare Services
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Honolulu County Medicare Advantage Specialists | Multicultural Hawaii Healthcare",
    "description": "Urban Hawaii Medicare Advantage plans for Honolulu County multicultural communities. Expert guidance for Asian Pacific Islander Medicare with multilingual services on Oahu.",
    "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/honolulu-county",
    "telephone": "331-343-2584",
    "areaServed": {
      "@type": "State",
      "name": "Hawaii",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Honolulu"
        },
        {
          "@type": "City",
          "name": "Pearl City"
        },
        {
          "@type": "City",
          "name": "Kailua"
        },
        {
          "@type": "City",
          "name": "Kaneohe"
        }
      ]
    },
    "serviceType": "Multicultural Medicare Advantage Insurance",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Honolulu County Multicultural Medicare Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medicare Advantage Plans Honolulu County",
            "description": "42 Medicare Advantage plans with 28 zero premium options for Honolulu County multicultural communities"
          }
        }
      ]
    }
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Honolulu County Medicare plans different for multicultural communities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Honolulu County Medicare Advantage plans include multilingual services in Tagalog, Japanese, and Korean, Asian Pacific Islander health programs, cultural competency training, and HART rail transportation benefits for urban Oahu access."
        }
      },
      {
        "@type": "Question",
        "name": "How many Medicare Advantage plans are available in Honolulu County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 42 Medicare Advantage plans available in Honolulu County for 2025, including 28 zero premium options with urban healthcare networks and multicultural services across Oahu."
        }
      },
      {
        "@type": "Question",
        "name": "Do Honolulu County Medicare plans include Asian Pacific Islander programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many Honolulu County Medicare Advantage plans include specific Asian Pacific Islander health initiatives, traditional medicine integration, and culturally appropriate care through partnerships with Hawaii Pacific Health and Kaiser Permanente."
        }
      }
    ]
  };

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Honolulu County"
        county="Honolulu County"
        state="Hawaii"
        demographics={{
          avgAge: analyticsData.medianAge,
        }}
        keyMetrics={{
          planCount: analyticsData.planCount,
          zeroPremiumPlans: analyticsData.zeroPremiumPlans,
          maPenetration: analyticsData.maPenetration,
          seniorPopulation: analyticsData.seniorPopulation,
          pageType: 'honolulu_county'
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
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">/</span><Link href="/medicare-advantage" className="hover:text-blue-600">Medicare Advantage</Link></li>
              <li className="flex items-center"><span className="mx-2">/</span><span className="text-gray-900">Honolulu County</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Honolulu County Medicare Advantage 2025<br />
                <span className="text-blue-200">Urban Oahu Multicultural Healthcare</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                <strong>Best urban Hawaii Medicare plans for multicultural communities.</strong> Compare 
                <strong>42+ Honolulu County Medicare Advantage plans</strong> with <strong>Asian Pacific Islander programs,</strong> 
                <strong>multilingual services,</strong> and <strong>HART rail transportation access</strong> across Oahu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                  Compare Honolulu Plans
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">42+</div>
                <div className="text-gray-600">Medicare Advantage Plans</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">28</div>
                <div className="text-gray-600">$0 Premium Plans</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">58.7%</div>
                <div className="text-gray-600">MA Penetration Rate</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">180k+</div>
                <div className="text-gray-600">Eligible Seniors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Top Medicare Advantage Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Best Honolulu County Medicare Advantage Plans 2025 | Urban Oahu Coverage</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Kaiser Permanente Hawaii Plans</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Integrated healthcare system with 20+ locations on Oahu</li>
                    <li>• Electronic health records across all specialists</li>
                    <li>• $0 premium options with comprehensive benefits</li>
                    <li>• Same-day appointments and 24/7 advice nurse</li>
                  </ul>
                  <Link href="/medicare-advantage/kaiser-hawaii" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Learn more about Kaiser Hawaii Plans →
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Hawaii Pacific Health Network</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Access to Straub Medical Center and Pali Momi</li>
                    <li>• Kapiolani Medical Center for specialized care</li>
                    <li>• Downtown Honolulu and suburban locations</li>
                    <li>• Advanced cardiac and cancer treatment centers</li>
                  </ul>
                  <Link href="/medicare-advantage/hawaii-pacific-health" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Explore Hawaii Pacific Health Plans →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Urban Healthcare Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Urban Healthcare Advantages in Honolulu</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h1m-1-4h1m4 4h1m-1-4h1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Major Medical Centers</h3>
                  <p className="text-gray-600">Queen's Medical Center, Straub Medical Center, and Kaiser Permanente Moanalua</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialist Access</h3>
                  <p className="text-gray-600">Same-day appointments with cardiologists, oncologists, and neurologists</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a2 2 0 002 2h6a2 2 0 002-2l-2-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Public Transportation</h3>
                  <p className="text-gray-600">TheBus routes and HART rail system connecting medical facilities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Multicultural Healthcare */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Multicultural Healthcare Support</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Language Services Available</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Tagalog</span>
                      <span className="text-gray-600">25% of Honolulu County population</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Japanese</span>
                      <span className="text-gray-600">Professional interpreters available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Korean</span>
                      <span className="text-gray-600">24/7 phone interpretation</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Competency Programs</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Asian and Pacific Islander health initiatives</li>
                    <li>• Traditional medicine integration options</li>
                    <li>• Community health worker programs</li>
                    <li>• Culturally appropriate nutrition counseling</li>
                  </ul>
                  <Link href="/medicare-advantage/multicultural-health" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                    Learn about multicultural health programs →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SEO-Optimized Marketing Section */}
          <section className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Honolulu County Medicare Advantage Plans?
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                <strong>Honolulu County Medicare specialists</strong> recommend Medicare Advantage plans 
                because they're specifically designed for <strong>urban Hawaii multicultural communities</strong>. 
                Unlike mainland plans, these <strong>Oahu Medicare options</strong> include Asian Pacific Islander 
                programs and multilingual services essential for diverse island communities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🌺 Multicultural Healthcare Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Our <strong>Honolulu County Medicare specialists</strong> understand Asian Pacific Islander 
                  healthcare needs and cultural preferences across Oahu communities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tagalog-speaking Medicare agents</li>
                  <li>• Japanese interpretation services</li>
                  <li>• Korean language support</li>
                  <li>• Filipino community health programs</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🏥 Urban Healthcare Networks
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>42 Honolulu County Medicare plans</strong> with access to Oahu's premier 
                  healthcare networks and specialist providers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kaiser Permanente integrated care</li>
                  <li>• Hawaii Pacific Health networks</li>
                  <li>• Queen's Medical Center access</li>
                  <li>• Straub Medical Center partnerships</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🚌 HART Rail Transportation
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Oahu Medicare plans</strong> include transportation benefits designed 
                  for urban island living with HART rail and TheBus access.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• HART rail medical facility access</li>
                  <li>• TheBus transportation benefits</li>
                  <li>• Medical appointment ride services</li>
                  <li>• Urban island mobility solutions</li>
                </ul>
              </div>
            </div>
            
            {/* Call-to-Action with Local Keywords */}
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Get Free Honolulu County Medicare Plan Comparison
              </h3>
              <p className="text-lg mb-6">
                <strong>Local Oahu Medicare specialists</strong> help multicultural families compare all 42 Honolulu County 
                Medicare Advantage plans. Multilingual consultation, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/medicare-plan-comparison-tool?location=honolulu-county" 
                  className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Compare Oahu Medicare Plans
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Call Honolulu Medicare Specialist
                </a>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Serving all Oahu: Honolulu • Pearl City • Kailua • Kaneohe • Aiea • Hawaii Kai
              </p>
              <p className="text-xs text-blue-300 mt-2">
                Multilingual Services | Tagalog • Japanese • Korean Support Available
              </p>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Honolulu County Medicare Advantage FAQ | Urban Hawaii Healthcare Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What makes Honolulu County Medicare plans different for multicultural communities?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Honolulu County Medicare Advantage plans</strong> include <strong>multilingual services in Tagalog, Japanese, and Korean</strong>, 
                    Asian Pacific Islander health programs, cultural competency training, and HART rail transportation 
                    benefits for urban Oahu access.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How many Medicare Advantage plans are available in Honolulu County?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    There are <strong>42 Medicare Advantage plans available in Honolulu County</strong> for 2025, 
                    including <strong>28 zero premium options</strong> with urban healthcare networks and 
                    multicultural services across Oahu.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do Honolulu County Medicare plans include Asian Pacific Islander programs?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Yes, <strong>many Honolulu County Medicare Advantage plans include specific Asian Pacific Islander</strong> 
                    health initiatives, traditional medicine integration, and culturally appropriate care through 
                    partnerships with Hawaii Pacific Health and Kaiser Permanente.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which Oahu healthcare systems work with Medicare Advantage plans?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Kaiser Permanente Hawaii, Hawaii Pacific Health, Queen's Medical Center,</strong> and 
                    Straub Medical Center all partner with Medicare Advantage plans. Many offer multilingual 
                    providers and culturally competent care for Asian Pacific Islander communities.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How does HART rail benefit Honolulu Medicare patients?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    <strong>HART rail system connects major medical facilities across Oahu,</strong> and many 
                    Honolulu County Medicare plans include transportation benefits that cover rail access 
                    to healthcare appointments and specialist visits.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Are there local Medicare agents who speak Asian languages in Honolulu?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Yes, <strong>local Honolulu County Medicare specialists</strong> are available who speak 
                    Tagalog, Japanese, and Korean. Our agents understand Asian Pacific Islander healthcare 
                    culture and can provide personalized guidance for multicultural families.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Honolulu Healthcare Networks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Compare Honolulu Healthcare Networks in Other Cities</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 mb-6">
                Explore how Honolulu's urban healthcare infrastructure compares to other major Medicare markets with diverse populations and specialized medical centers.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/medicare-advantage/orange-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Orange County, CA</h4>
                  <p className="text-gray-600 text-sm">Compare urban Medicare networks with similar demographics and premium healthcare options</p>
                </Link>
                <Link href="/medicare-advantage/miami-dade-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Miami-Dade County, FL</h4>
                  <p className="text-gray-600 text-sm">Explore multicultural healthcare services and urban specialist access</p>
                </Link>
                <Link href="/medicare-advantage/hawaii-county" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Hawaii County (Big Island)</h4>
                  <p className="text-gray-600 text-sm">Compare rural vs urban healthcare in Hawaii's Medicare system</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Regional Comparison Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Medicare Advantage in Other Hawaii Markets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/medicare-advantage-diverse-communities-atlanta" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Atlanta Diverse Communities</h4>
                <p className="text-gray-600 text-sm">Compare multicultural Medicare networks in urban Atlanta</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">View Atlanta Plans →</span>
              </Link>
              <Link href="/medicare-advantage-transportation-benefits-nashville" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Nashville Transportation</h4>
                <p className="text-gray-600 text-sm">Medicare plans with enhanced transportation benefits</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">View Nashville Plans →</span>
              </Link>
              <Link href="/medicare-advantage/bexar-county-texas" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bexar County Texas</h4>
                <p className="text-gray-600 text-sm">Hispanic community Medicare benefits in San Antonio</p>
                <span className="text-blue-600 text-sm font-medium mt-2 inline-block">View Texas Plans →</span>
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Medicare Plan in Honolulu?</h2>
            <p className="text-xl mb-8 text-blue-100">Compare 42+ Medicare Advantage plans with urban healthcare networks on Oahu</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Get Free Personalized Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Speak with Local Agent
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}