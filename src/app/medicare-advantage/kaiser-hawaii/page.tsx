import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Kaiser Permanente Medicare Advantage Hawaii 2025 | Best Kaiser MA Plans Oahu, Maui, Big Island',
  description: 'Find Kaiser Permanente Medicare Advantage plans in Hawaii 2025. Compare Kaiser Senior Advantage HMO plans on Oahu, Maui, Big Island, Kauai. Integrated care, $0 premiums, dental, vision. Free quotes.',
  keywords: 'Kaiser Permanente Medicare Advantage Hawaii, Kaiser Medicare plans Hawaii, Kaiser Senior Advantage Oahu, Kaiser MA Maui, Kaiser Medicare Big Island, Kaiser Permanente Hawaii seniors',
  openGraph: {
    title: 'Kaiser Permanente Medicare Advantage Hawaii 2025 | Integrated Care for Seniors',
    description: 'Compare Kaiser Permanente Medicare Advantage plans across all Hawaiian Islands. Integrated care model, $0 premiums, comprehensive benefits. Get free quotes.',
    url: 'https://el-mag.com/medicare-advantage/kaiser-hawaii',
    siteName: 'El-Mag Insurance',
    locale: 'en_US',
    type: 'website',
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
    title: 'Kaiser Permanente Medicare Advantage Hawaii 2025',
    description: 'Compare Kaiser Medicare Advantage plans in Hawaii. Integrated care, $0 premiums, dental & vision benefits.',
  },
  alternates: {
    canonical: 'https://el-mag.com/medicare-advantage/kaiser-hawaii',
  },
};

// Kaiser Hawaii specific data
const kaiserHawaiiData = {
  totalBeneficiaries: 42000, // Kaiser Medicare members in Hawaii
  maPenetration: 52.3, // Kaiser's share of Hawaii MA market
  averageAge: 72,
  planCount: 6, // Kaiser Senior Advantage HMO plans
  zeroPremiumPlans: 4,
  averageStarRating: 4.5,
  avgMonthlySavings: 1850,
  medicalCenters: 4, // Kaiser facilities in Hawaii
  islandsCovered: ['Oahu', 'Maui', 'Big Island', 'Kauai'],
  integratedCareModel: true,
  japaneseLanguageSupport: true
};

const kaiserPlans = [
  {
    name: 'Kaiser Senior Advantage Basic (HMO)',
    premium: 0,
    maxOutOfPocket: '$5,900',
    starRating: 4.5,
    benefits: ['$0 Primary Care Visits', '$1,500 Dental', 'SilverSneakers', '$100 OTC Quarterly'],
    islands: ['Oahu', 'Maui', 'Big Island', 'Kauai'],
    bestFor: 'Budget-conscious seniors wanting integrated care'
  },
  {
    name: 'Kaiser Senior Advantage Enhanced (HMO)',
    premium: 0,
    maxOutOfPocket: '$4,900',
    starRating: 4.5,
    benefits: ['$0 PCP & Specialists', '$2,500 Dental', 'Vision $400', '$150 OTC Quarterly'],
    islands: ['Oahu', 'Maui'],
    bestFor: 'Comprehensive benefits with low out-of-pocket costs'
  },
  {
    name: 'Kaiser Senior Advantage Premier (HMO)',
    premium: '$35/month',
    maxOutOfPocket: '$3,900',
    starRating: 4.5,
    benefits: ['$0 All Visits', '$3,000 Dental', 'Hearing Aids $2,500', 'Vision $500', '$200 OTC'],
    islands: ['Oahu'],
    bestFor: 'Maximum benefits and lowest cost-sharing'
  }
];

const kaiserFacilities = [
  {
    name: 'Kaiser Permanente Moanalua Medical Center',
    island: 'Oahu',
    location: 'Honolulu',
    services: ['Full Hospital', 'Emergency Care', 'Specialty Care', 'Lab & Imaging'],
    specialists: 350
  },
  {
    name: 'Kaiser Permanente Waipio Medical Office',
    island: 'Oahu',
    location: 'Waipio',
    services: ['Primary Care', 'Specialty Care', 'Lab & Imaging', 'Pharmacy'],
    specialists: 120
  },
  {
    name: 'Kaiser Permanente Maui Lani Medical & Urgent Care',
    island: 'Maui',
    location: 'Wailuku',
    services: ['Urgent Care', 'Primary Care', 'Lab & Imaging', 'Pharmacy'],
    specialists: 45
  },
  {
    name: 'Kaiser Permanente Kona Medical Office',
    island: 'Big Island',
    location: 'Kailua-Kona',
    services: ['Primary Care', 'Specialty Care', 'Lab & Imaging', 'Pharmacy'],
    specialists: 30
  }
];

const uniqueBenefits = [
  {
    title: 'Integrated Care Model',
    description: 'Doctors, specialists, hospital, pharmacy - all coordinated under one system',
    icon: '🏥',
    value: 'Seamless care coordination'
  },
  {
    title: 'Electronic Health Records',
    description: 'All Kaiser providers access your complete medical history instantly',
    icon: '💻',
    value: 'Better informed decisions'
  },
  {
    title: 'Same-Day Appointments',
    description: 'Urgent care and same-day sick visits available at most locations',
    icon: '📅',
    value: 'Quick access to care'
  },
  {
    title: 'Kaiser Permanente App',
    description: 'Schedule appointments, refill prescriptions, video visits, secure messaging',
    icon: '📱',
    value: 'Healthcare at your fingertips'
  },
  {
    title: 'Japanese Language Services',
    description: 'Japanese-speaking providers and staff at select locations',
    icon: '🗣️',
    value: 'Cultural & language support'
  },
  {
    title: 'Island-to-Island Coverage',
    description: 'Access Kaiser facilities on Oahu, Maui, Big Island, and Kauai',
    icon: '🏝️',
    value: 'Statewide network'
  }
];

const faqs = [
  {
    question: 'What islands does Kaiser Permanente Medicare Advantage cover in Hawaii?',
    answer: 'Kaiser Permanente Medicare Advantage plans are available on Oahu, Maui, Big Island (Hawaii), and Kauai. Kaiser operates medical centers and offices on all major islands, providing integrated care across the state. Some premium plans may be limited to Oahu where the main medical center is located.'
  },
  {
    question: 'How does Kaiser\'s integrated care model benefit Medicare seniors?',
    answer: 'Kaiser\'s integrated care model means your doctor, specialists, hospital, lab, pharmacy, and medical records are all connected. Your care team can instantly access your complete health history, coordinate treatments, and avoid duplicate tests. This results in better health outcomes, fewer medical errors, and more convenient care for seniors.'
  },
  {
    question: 'Does Kaiser Permanente offer $0 premium Medicare Advantage plans in Hawaii?',
    answer: 'Yes, Kaiser offers 4 Senior Advantage HMO plans with $0 monthly premiums in Hawaii. These plans include comprehensive benefits like dental coverage (up to $2,500/year), vision benefits, SilverSneakers fitness, and OTC allowances. Premium plans with even more benefits are available for $35-60/month.'
  },
  {
    question: 'Can I use Kaiser facilities if I travel between Hawaiian islands?',
    answer: 'Yes, Kaiser Permanente members can access care at any Kaiser facility across the Hawaiian Islands. If you live on Oahu but visit family on Maui, you can receive care at Kaiser Maui Lani Medical Center. Your electronic health records travel with you, ensuring continuity of care across islands.'
  },
  {
    question: 'Does Kaiser Permanente Hawaii offer services in Japanese?',
    answer: 'Yes, Kaiser Permanente Hawaii provides Japanese language services at select locations, particularly in Honolulu. Japanese-speaking physicians, nurses, and support staff are available to serve Hawaii\'s Japanese-American senior community. Translation services and Japanese-language health education materials are also provided.'
  }
];

export default function KaiserHawaiiPage() {
  // Track page view
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).trackMedicareAdvancedPageView) {
      (window as any).trackMedicareAdvancedPageView('Kaiser Permanente Medicare Advantage Hawaii', {
        pageType: 'carrier_location',
        carrier: 'Kaiser Permanente',
        state: 'Hawaii',
        totalBeneficiaries: kaiserHawaiiData.totalBeneficiaries,
        availablePlans: kaiserHawaiiData.planCount,
        specialMetrics: {
          zeroPremiumPlans: kaiserHawaiiData.zeroPremiumPlans,
          maPenetration: kaiserHawaiiData.maPenetration,
          medicalCenters: kaiserHawaiiData.medicalCenters,
          islandsCovered: kaiserHawaiiData.islandsCovered.length
        }
      });

      // Setup scroll tracking
      if ((window as any).setupMedicareAdvancedScrollTracking) {
        (window as any).setupMedicareAdvancedScrollTracking('carrier_location', [
          { percentage: 25, milestone: 'kaiser_plans_overview' },
          { percentage: 50, milestone: 'integrated_care_benefits_viewed' },
          { percentage: 75, milestone: 'facilities_locations_explored' },
          { percentage: 90, milestone: 'conversion_section_reached' }
        ]);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="/medicare-advantage" className="text-blue-600 hover:text-blue-800">Medicare Advantage</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">Kaiser Hawaii</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500/30 rounded-full px-4 py-1 mb-4">
                <span className="text-sm font-semibold">Kaiser Permanente Hawaii 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Kaiser Permanente Medicare Advantage Plans in Hawaii
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Integrated care across all Hawaiian Islands. {kaiserHawaiiData.zeroPremiumPlans} plans with $0 premiums.
                Comprehensive benefits with {kaiserHawaiiData.medicalCenters} medical centers statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Compare Kaiser Plans - Free Quote
                </a>
                <a
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Call 331-E-HEALTH
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Kaiser Hawaii Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-200">{kaiserHawaiiData.totalBeneficiaries.toLocaleString()}</div>
                  <div className="text-sm text-blue-100">Kaiser Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-200">{kaiserHawaiiData.planCount}</div>
                  <div className="text-sm text-blue-100">Senior Advantage Plans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-200">{kaiserHawaiiData.averageStarRating}★</div>
                  <div className="text-sm text-blue-100">Average Star Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-200">{kaiserHawaiiData.medicalCenters}</div>
                  <div className="text-sm text-blue-100">Medical Centers</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-sm font-semibold mb-2">Islands Covered:</div>
                <div className="flex flex-wrap gap-2">
                  {kaiserHawaiiData.islandsCovered.map((island) => (
                    <span key={island} className="bg-white/20 px-3 py-1 rounded-full text-sm">{island}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kaiser in Hawaii - Unique Selling Points */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kaiser Permanente Medicare Advantage in Hawaii?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The integrated care model designed for Hawaii's unique island geography and multicultural senior community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-blue-600 font-semibold text-sm">{benefit.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kaiser Senior Advantage Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kaiser Senior Advantage HMO Plans 2025
            </h2>
            <p className="text-xl text-gray-600">
              Compare {kaiserHawaiiData.planCount} integrated care plans with comprehensive benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {kaiserPlans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold flex-1">{plan.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${plan.premium === 0 ? '0' : plan.premium}</div>
                      <div className="text-xs text-blue-100">per month</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-yellow-300">★</span>
                    <span className="font-semibold">{plan.starRating} Star Rating</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Max Out-of-Pocket</div>
                    <div className="text-2xl font-bold text-gray-900">{plan.maxOutOfPocket}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</div>
                    <ul className="space-y-2">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Available Islands:</div>
                    <div className="flex flex-wrap gap-2">
                      {plan.islands.map((island) => (
                        <span key={island} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {island}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-600 mb-1">Best For:</div>
                    <div className="text-sm font-semibold text-gray-900">{plan.bestFor}</div>
                  </div>

                  <a
                    href="/contact"
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get This Plan - Free Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/medicare-advantage/plans"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Compare All Kaiser Plans Side-by-Side
            </a>
          </div>
        </div>
      </section>

      {/* Kaiser Facilities Across Hawaii */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kaiser Permanente Facilities Across Hawaii
            </h2>
            <p className="text-xl text-gray-600">
              {kaiserHawaiiData.medicalCenters} medical centers and offices serving all major islands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {kaiserFacilities.map((facility) => (
              <div key={facility.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <span>🏝️</span> {facility.island}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📍</span> {facility.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{facility.specialists}</div>
                    <div className="text-xs text-gray-500">Specialists</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Services Available:</div>
                  <div className="flex flex-wrap gap-2">
                    {facility.services.map((service) => (
                      <span key={service} className="bg-white px-3 py-1 rounded-full text-xs text-gray-700 border border-gray-200">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏥</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Island-to-Island Care Continuity</h3>
                <p className="text-gray-600">
                  Your electronic health records are accessible at all Kaiser facilities across Hawaii. Whether you're on Oahu,
                  Maui, Big Island, or Kauai, your care team has instant access to your complete medical history, ensuring
                  seamless care coordination no matter which island you're on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Care Model Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Kaiser's Integrated Care Model Works in Hawaii
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for your healthcare, all in one coordinated system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Care Team Works Together</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Primary Care Physician</h4>
                    <p className="text-sm text-gray-600">Your main doctor coordinates all your care and knows your complete health history</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Specialists & Hospital</h4>
                    <p className="text-sm text-gray-600">All specialists and hospital staff share your records - no repeated tests</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">💊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Pharmacy Integration</h4>
                    <p className="text-sm text-gray-600">Pharmacists see all your medications and alert doctors to potential interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Lab & Imaging</h4>
                    <p className="text-sm text-gray-600">Results automatically uploaded to your record - your doctor reviews them immediately</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology That Connects Your Care</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Electronic Health Records</h4>
                    <p className="text-sm text-gray-600">One comprehensive digital record accessible to all your Kaiser providers statewide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Kaiser Permanente App</h4>
                    <p className="text-sm text-gray-600">Schedule appointments, video visits, secure messages, prescription refills - all in one app</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Secure Messaging</h4>
                    <p className="text-sm text-gray-600">Email your doctor with non-urgent questions - usually answered within 2 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 mt-1">
                    <span className="text-2xl">📹</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Video Visits</h4>
                    <p className="text-sm text-gray-600">See your doctor from home - perfect for follow-ups or when traveling between islands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
            <div className="flex items-center gap-6">
              <div className="text-6xl">⭐</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">4.5-Star Rated Medicare Advantage Plans</h3>
                <p className="text-blue-100 text-lg">
                  Kaiser Permanente's integrated care model consistently earns top ratings from CMS for quality care,
                  member satisfaction, and health outcomes. Hawaii seniors benefit from nationally recognized excellence
                  adapted to island living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural & Language Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serving Hawaii's Diverse Senior Community
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kaiser Permanente Hawaii understands the unique needs of Hawaii's multicultural senior population,
                offering culturally sensitive care and language services.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <span className="text-2xl">🗣️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Japanese Language Services</h3>
                    <p className="text-gray-600">Japanese-speaking physicians, nurses, and support staff available at Honolulu locations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <span className="text-2xl">🌏</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Asian Pacific Islander Focus</h3>
                    <p className="text-gray-600">Cultural competency training for providers serving Hawaii's Asian American seniors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Multilingual Resources</h3>
                    <p className="text-gray-600">Health education materials available in multiple languages including Japanese, Chinese, Korean</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <span className="text-2xl">🏝️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Island Lifestyle Understanding</h3>
                    <p className="text-gray-600">Providers familiar with Hawaii's unique lifestyle, diet, and health considerations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Member Support Services</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Member Services Hotline</div>
                  <div className="text-sm text-gray-600">Multi-language support available 7 days a week</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Health Education Classes</div>
                  <div className="text-sm text-gray-600">Diabetes, heart health, fall prevention - offered in multiple languages</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Care Management</div>
                  <div className="text-sm text-gray-600">Personalized support for chronic conditions with culturally sensitive care coordinators</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Community Programs</div>
                  <div className="text-sm text-gray-600">Senior wellness events, health fairs, and social activities across all islands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment & Next Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enroll in Kaiser Permanente Medicare Advantage Hawaii
            </h2>
            <p className="text-xl text-gray-600">
              Join 42,000+ Hawaii seniors who trust Kaiser for integrated Medicare care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Check Eligibility</h3>
              <p className="text-gray-600 mb-4">Must have Medicare Parts A & B and live on Oahu, Maui, Big Island, or Kauai</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compare Plans</h3>
              <p className="text-gray-600 mb-4">Review 6 Kaiser Senior Advantage plans - choose benefits that fit your needs</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enroll Today</h3>
              <p className="text-gray-600 mb-4">Get help from our licensed agents - enrollment is free and takes 15 minutes</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Integrated Care?</h3>
              <p className="text-xl text-blue-100 mb-6">
                Compare Kaiser Permanente Medicare Advantage plans and get a free personalized recommendation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Free Kaiser Plan Comparison
                </a>
                <a
                  href="tel:331-343-2584"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Call 331-E-HEALTH (331-343-2584)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions About Kaiser Medicare Advantage Hawaii
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4 text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Hawaii's Most Integrated Medicare Network
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            42,000+ Hawaii seniors trust Kaiser Permanente for coordinated, comprehensive Medicare care across all islands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Compare Kaiser Plans - Free Quote
            </a>
            <a
              href="/medicare-advantage/plans"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Hawaii Plans
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Kaiser Permanente Medicare Advantage Hawaii',
            provider: {
              '@type': 'Organization',
              name: 'Kaiser Permanente',
              areaServed: {
                '@type': 'State',
                name: 'Hawaii'
              }
            },
            serviceType: 'Medicare Advantage Plans',
            areaServed: [
              { '@type': 'City', name: 'Oahu' },
              { '@type': 'City', name: 'Maui' },
              { '@type': 'City', name: 'Big Island' },
              { '@type': 'City', name: 'Kauai' }
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: kaiserHawaiiData.averageStarRating,
              bestRating: '5',
              ratingCount: kaiserHawaiiData.totalBeneficiaries
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://el-mag.com'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Medicare Advantage',
                item: 'https://el-mag.com/medicare-advantage'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Kaiser Hawaii',
                item: 'https://el-mag.com/medicare-advantage/kaiser-hawaii'
              }
            ]
          })
        }}
      />
    </div>
  );
}
