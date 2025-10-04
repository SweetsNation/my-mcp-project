import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicareAdvantageFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Palm Beach County Medicare Advantage Plans 2025 - West Palm Beach MA Plans & Star Ratings | El-Mag Insurance',
  description: 'Palm Beach County Medicare Advantage guide: Compare 2025 MA plans for 218,000+ enrollees. $0 premium plans, Part B giveback, dental/vision coverage, West Palm Beach enrollment help.',
  keywords: 'Palm Beach County Medicare Advantage, MA plans West Palm Beach, Medicare Advantage Boca Raton, Part C plans Palm Beach, $0 premium Medicare Advantage, dental vision hearing coverage, Part B giveback Palm Beach, Medicare Advantage Delray Beach',
  openGraph: {
    title: 'Palm Beach County Medicare Advantage Plans 2025 - MA Plans & Benefits',
    description: 'Find the best Medicare Advantage plans in Palm Beach County with $0 premiums, comprehensive benefits, and local enrollment support.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-advantage-palm-beach-county',
  },
}

const palmBeachMAData = {
  totalBeneficiaries: 455000,
  maEnrollment: 218000,
  maPenetration: 48,
  averageStarRating: 4.2,
  zeroPremiumPlans: 85,
  partBGivebackPlans: 42,
  dentalVisionPlans: 98,
  majorProviders: ['Humana', 'UnitedHealthcare', 'Aetna', 'Devoted Health', 'Cigna', 'WellCare'],
  annualEnrollmentPeriod: 'October 15 - December 7, 2025'
}

const palmBeachMAStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-advantage-palm-beach-county',
  pageTitle: 'Palm Beach County Medicare Advantage Plans 2025 - West Palm Beach MA Plans & Star Ratings',
  pageDescription: 'Palm Beach County Medicare Advantage guide: Compare 2025 MA plans for 218,000+ enrollees. $0 premium plans, Part B giveback, dental/vision coverage, West Palm Beach enrollment help.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'medicare-advantage',
  totalBeneficiaries: 218000,
  averagePremium: 0,
  faqs: getMedicareAdvantageFAQs('Palm Beach County', 'Florida', 85, 85)
})

export default function PalmBeachMAPage() {
  React.useEffect(() => {
    // Initialize Palm Beach County Medicare Advantage landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('medicare-advantage-palm-beach-county');
      });

      // Track page view with Palm Beach County MA context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Palm Beach County Medicare Advantage Plans 2025',
          page_location: window.location.href,
          page_path: '/medicare-advantage-palm-beach-county',
          content_group: 'Medicare Advantage County Landing Pages',
          county: 'Palm Beach County',
          state: 'Florida',
          total_beneficiaries: 455000,
          ma_enrollment: 218000,
          ma_penetration: 48,
          avg_star_rating: 4.2,
          zero_premium_plans: 85,
          page_type: 'medicare_advantage_county_landing',
          market_rank: 'largest_fl_county_ma_market'
        });
      }

      // Track scroll depth for content engagement
      let scrollDepth = 0;
      const trackScrollDepth = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

        // Track at 25%, 50%, 75%, 90% milestones
        if (scrollPercent >= 25 && scrollDepth < 25) {
          scrollDepth = 25;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach MA - 25%',
              value: 25,
              page_section: 'aep_enrollment_alert'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach MA - 50%',
              value: 50,
              page_section: 'plan_types_benefits'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach MA - 75%',
              value: 75,
              page_section: 'city_coverage'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach MA - 90%',
              value: 90,
              page_section: 'resources_cta'
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page (engagement threshold: 165 seconds)
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Palm Beach MA',
            value: timeSpent,
            engagement_threshold: 165,
            engaged: timeSpent >= 165
          });
        }
      };

      // Track on page unload
      window.addEventListener('beforeunload', trackTimeOnPage);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Palm Beach County Florida"
        county="Palm Beach County"
        state="Florida"
        demographics={{
          avgAge: 68,
        }}
        keyMetrics={{
          totalBeneficiaries: palmBeachMAData.maEnrollment,
          averagePremium: 0,
          pageType: 'medicare_advantage_county',
          productType: 'medicare_advantage'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(palmBeachMAStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏥 PALM BEACH COUNTY: Florida's Largest Medicare Advantage Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Palm Beach County Medicare Advantage Plans 2025: West Palm Beach MA Plans & Star Ratings
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Palm Beach: 218,000 Medicare Advantage Enrollees, 48% MA Penetration, 4.2★ Average Rating
                </p>
                <p className="text-blue-700">
                  Serving Palm Beach County from <strong>West Palm Beach to Boca Raton</strong> with comprehensive{' '}
                  <Link href="/medicare-advantage/plans" className="text-blue-900 underline hover:text-blue-600">Medicare Advantage (Part C) plans</Link>.
                  Choose from <strong>85+ $0 premium plans</strong>, 42 plans with{' '}
                  <Link href="/part-b-premium-give-back" className="text-blue-900 underline hover:text-blue-600">Part B giveback</Link> up to $174.70/month,
                  and comprehensive <Link href="/resources/dental-vision-benefits" className="text-blue-900 underline hover:text-blue-600">dental, vision, and hearing coverage</Link>.
                  Work with <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">local specialists</Link> who understand Palm Beach's premium healthcare networks including
                  Cleveland Clinic, JFK Medical Center, and Boca Raton Regional Hospital.{' '}
                  <Link href="/resources/enrollment-periods-explained" className="text-blue-900 underline hover:text-blue-600">Annual Enrollment Period runs October 15 - December 7</Link> with
                  coverage starting January 1, 2026. Compare <Link href="/resources/star-ratings-guide" className="text-blue-900 underline hover:text-blue-600">4.5★ and 5★ rated plans</Link> for
                  the best benefits and lowest out-of-pocket costs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">218K</div>
              <div className="text-blue-800 font-semibold">MA enrollees</div>
              <div className="text-blue-600 text-sm mt-1">Largest FL county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85+</div>
              <div className="text-green-800 font-semibold">$0 premium plans</div>
              <div className="text-green-600 text-sm mt-1">Save on premiums</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.2★</div>
              <div className="text-purple-800 font-semibold">Average star rating</div>
              <div className="text-purple-600 text-sm mt-1">High quality plans</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-orange-800 font-semibold">Dental/vision coverage</div>
              <div className="text-orange-600 text-sm mt-1">Extra benefits</div>
            </div>
          </div>
        </div>

        {/* Annual Enrollment Period Alert */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">📅</span>
              <div>
                <h2 className="text-2xl font-bold mb-3">2025 Medicare Advantage Annual Enrollment Period (AEP)</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-lg font-semibold mb-2">📅 Enrollment Period:</p>
                    <p className="text-white/90">October 15 - December 7, 2025</p>
                    <p className="text-sm text-white/80 mt-1">Coverage starts: January 1, 2026</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">⚡ Why Switch to Medicare Advantage:</p>
                    <p className="text-white/90">$0 premiums + dental/vision + <Link href="/part-b-premium-give-back" className="text-white underline hover:text-yellow-200">Part B giveback</Link></p>
                    <p className="text-sm text-white/80 mt-1">All-in-one coverage vs. <Link href="/resources/medicare-advantage-vs-original" className="text-white underline hover:text-yellow-200">Original Medicare</Link></p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link href="/contact" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50">
                    📞 Compare Plans Now
                  </Link>
                  <Link href="/medicare-advantage/plans" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30">
                    📋 View All MA Plans
                  </Link>
                  <Link href="/resources/enrollment-periods-explained" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30">
                    🗓️ Enrollment Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Beach MA Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Palm Beach County Medicare Advantage Plans & Benefits</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">⭐ Top Medicare Advantage Providers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Humana</strong> - 4.5★ average, extensive <Link href="/resources/dental-vision-benefits" className="text-blue-800 underline hover:text-blue-600">dental/vision benefits</Link>, nationwide PPO networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>UnitedHealthcare</strong> - 4.2★ average, <Link href="/part-b-premium-give-back" className="text-blue-800 underline hover:text-blue-600">Part B giveback</Link> up to $174.70/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Aetna (CVS Health)</strong> - 4.3★ average, integrated <Link href="/medicare-part-d-palm-beach-county" className="text-blue-800 underline hover:text-blue-600">pharmacy benefits</Link>, SilverSneakers fitness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Devoted Health</strong> - 4.6★ average, concierge-style care, <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">$0 copays</Link> on primary care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Cigna</strong> - 4.0★ average, <Link href="/resources/star-ratings-guide" className="text-blue-800 underline hover:text-blue-600">health rewards programs</Link>, telehealth included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>WellCare (Centene)</strong> - 3.9★ average, competitive pricing, comprehensive <Link href="/medicare-part-d-formulary-lookup" className="text-blue-800 underline hover:text-blue-600">Rx coverage</Link></span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">💰 Medicare Advantage Extra Benefits</h3>
              <p className="text-gray-700 mb-4">
                <strong>98% of Palm Beach MA plans include dental, vision, and hearing coverage</strong> at no extra cost. Additional benefits include:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ <strong>Dental:</strong> <Link href="/resources/dental-vision-benefits" className="text-green-800 underline hover:text-green-600">Preventive, basic, major services</Link> (up to $3,000/year)</li>
                <li>✓ <strong>Vision:</strong> Annual eye exams, $200-$400 eyewear allowance</li>
                <li>✓ <strong>Hearing:</strong> Exams + hearing aids (up to $2,500/year)</li>
                <li>✓ <strong>Fitness:</strong> SilverSneakers or Renew Active gym memberships</li>
                <li>✓ <strong>OTC allowance:</strong> $50-$200/month for over-the-counter items</li>
                <li>✓ <strong>Transportation:</strong> Rides to <Link href="/specialists" className="text-green-800 underline hover:text-green-600">medical appointments</Link></li>
                <li>✓ <strong>Meals:</strong> Post-discharge meal delivery</li>
                <li>✓ <strong>Telehealth:</strong> <Link href="/resources/understanding-costs" className="text-green-800 underline hover:text-green-600">$0 virtual doctor visits</Link></li>
              </ul>
              <div className="mt-4 bg-white p-3 rounded">
                <Link href="/resources/dental-vision-benefits" className="text-green-800 font-semibold underline hover:text-green-600">
                  Compare Extra Benefits by Plan →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <h3 className="font-semibold text-purple-800 mb-2">💡 Medicare Advantage vs. Original Medicare + Medigap</h3>
            <p className="text-purple-700 mb-4">
              With 218,000 Palm Beach County enrollees (48% penetration), <Link href="/medicare-advantage/plans" className="text-purple-900 underline hover:text-purple-700">Medicare Advantage</Link> offers
              all-in-one coverage including Part A (hospital), Part B (medical), and usually Part D (prescription drugs) in a single plan. Compare with{' '}
              <Link href="/medicare-supplement-palm-beach-county" className="text-purple-900 underline hover:text-purple-700">Medicare Supplement (Medigap)</Link> which
              requires separate <Link href="/medicare-part-d-palm-beach-county" className="text-purple-900 underline hover:text-purple-700">Part D prescription coverage</Link> and
              typically doesn't include dental/vision/hearing. <Link href="/resources/medicare-advantage-vs-original" className="text-purple-900 underline hover:text-purple-700">See full comparison</Link>.
            </p>
            <div className="border-t border-purple-200 pt-3">
              <p className="text-sm text-purple-700 font-semibold mb-2">Compare Palm Beach Medicare Options:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-advantage/plans" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">MA Plans</Link>
                <Link href="/medicare-supplement-palm-beach-county" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Medigap Plans</Link>
                <Link href="/medicare-part-d-palm-beach-county" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Part D Plans</Link>
                <Link href="/resources/star-ratings-guide" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Star Ratings</Link>
                <Link href="/part-b-premium-give-back" className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Part B Giveback</Link>
              </div>
            </div>
          </div>
        </section>

        {/* City Coverage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Medicare Advantage Coverage Across Palm Beach County</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏢 West Palm Beach Medicare Advantage</h3>
              <p className="text-gray-700 mb-3">
                West Palm Beach leads with <strong>78,000+ Medicare Advantage enrollees</strong>. Downtown seniors, Norton Museum district retirees, and CityPlace residents access{' '}
                <Link href="/medicare-advantage/plans" className="text-blue-800 underline hover:text-blue-600">premium MA plans</Link> with 4.3★ average ratings.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>St. Mary's Medical Center</strong> - in-network for 92 MA plans</li>
                <li>• <strong>Good Samaritan Medical Center</strong> - 88 MA plans</li>
                <li>• <strong>Palm Beach Gardens Medical Center</strong> - 85 MA plans</li>
                <li>• <strong>Cleveland Clinic Florida (Weston)</strong> - 78 MA plans</li>
                <li>• 32 plans with <Link href="/part-b-premium-give-back" className="text-blue-800 underline hover:text-blue-600">Part B giveback</Link> ($80-$174.70/month)</li>
                <li>• <Link href="/specialists" className="text-blue-800 underline hover:text-blue-600">Local specialists</Link> offering in-home consultations</li>
              </ul>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🏖️ Boca Raton Medicare Advantage</h3>
              <p className="text-gray-700 mb-3">
                Boca Raton's <strong>68,000+ MA enrollees</strong> enjoy premium healthcare access. Affluent retirees prioritize{' '}
                <Link href="/resources/star-ratings-guide" className="text-blue-800 underline hover:text-blue-600">4.5★ and 5★ rated plans</Link> with comprehensive benefits.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Boca Raton Regional Hospital</strong> - in-network for 95 MA plans</li>
                <li>• <strong>West Boca Medical Center</strong> - 90 MA plans</li>
                <li>• Highest concentration of <Link href="/resources/dental-vision-benefits" className="text-blue-800 underline hover:text-blue-600">premium dental/vision benefits</Link> ($3,500+ value)</li>
                <li>• 28 plans with concierge care coordination</li>
                <li>• Average OTC allowance: $175/month (highest in county)</li>
                <li>• SilverSneakers access at LA Fitness, Equinox, Lifestyle Family Fitness</li>
              </ul>
            </div>

            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🌴 Delray Beach Medicare Advantage</h3>
              <p className="text-gray-700 mb-3">
                Delray Beach serves <strong>32,000+ MA enrollees</strong> with beach lifestyle focus. Atlantic Avenue businesses and seasonal residents (snowbirds) access{' '}
                <Link href="/medicare-advantage/plans" className="text-blue-800 underline hover:text-blue-600">flexible nationwide PPO plans</Link>.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Delray Medical Center</strong> - in-network for 88 MA plans</li>
                <li>• <strong>Bethesda Hospital East</strong> - 82 MA plans</li>
                <li>• 48 PPO plans for snowbirds traveling between FL/Northeast</li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="text-blue-800 underline hover:text-blue-600">Special Enrollment Periods</Link> for permanent relocation</li>
                <li>• Plans with expanded <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">out-of-network coverage</Link></li>
              </ul>
            </div>

            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">🐴 Wellington, Boynton Beach & Jupiter</h3>
              <p className="text-gray-700 mb-3">
                Combined <strong>40,000+ MA enrollees</strong> across Wellington (equestrian community seniors), Boynton Beach (family-oriented retirees), and Jupiter/Palm Beach Gardens (coastal affluent).
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Wellington: <strong>Wellington Regional Medical Center</strong> (75 MA plans)</li>
                <li>• Boynton Beach: <strong>Bethesda Hospital East</strong> (82 MA plans)</li>
                <li>• Jupiter/PBG: <strong>Jupiter Medical Center</strong> (85 MA plans)</li>
                <li>• All cities: 85+ <Link href="/medicare-advantage/plans" className="text-blue-800 underline hover:text-blue-600">$0 premium plans</Link> available</li>
                <li>• Active adult communities: specialized fitness/wellness programs</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">🏥 Major Hospital Networks in Palm Beach Medicare Advantage Plans</h3>
            <p className="text-blue-700 mb-3">
              All <Link href="/medicare-advantage/plans" className="text-blue-900 underline hover:text-blue-700">Palm Beach County Medicare Advantage plans</Link> include access to 8 major hospital systems:{' '}
              <strong>Cleveland Clinic Florida</strong>, <strong>JFK Medical Center</strong>, <strong>Boca Raton Regional Hospital</strong>,
              <strong>St. Mary's Medical Center</strong>, <strong>Palm Beach Gardens Medical Center</strong>, <strong>Wellington Regional Medical Center</strong>,
              <strong>Delray Medical Center</strong>, and <strong>Bethesda Hospital East/West</strong>. Network sizes vary by plan type (HMO vs PPO).
            </p>
            <p className="text-sm text-blue-700">
              Compare hospital networks, star ratings, and out-of-pocket costs with <Link href="/resources/star-ratings-guide" className="text-blue-900 underline hover:text-blue-700">our MA plan comparison tool</Link> or{' '}
              <Link href="/contact" className="text-blue-900 underline hover:text-blue-700">schedule a free consultation</Link> with our specialists.
            </p>
          </div>
        </section>

        {/* Plan Types Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Medicare Advantage Plan Types in Palm Beach County</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏥 HMO Medicare Advantage Plans</h3>
              <p className="text-gray-700 mb-3">
                <strong>Health Maintenance Organization (HMO)</strong> plans require you to use in-network providers and choose a primary care physician (PCP). Popular for <strong>$0 premiums</strong> and comprehensive benefits.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>$0 monthly premiums</strong> on 72 HMO plans</li>
                <li>✓ PCP coordinates all care and specialist referrals</li>
                <li>✓ Lower copays: $0-$10 PCP, $25-$45 specialists</li>
                <li>✓ Best for: West Palm Beach, Boca Raton residents staying local</li>
                <li>✓ Coverage: In-network only (except emergencies)</li>
                <li>✓ Average star rating: 4.3★ in Palm Beach County</li>
              </ul>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🌎 PPO Medicare Advantage Plans</h3>
              <p className="text-gray-700 mb-3">
                <strong>Preferred Provider Organization (PPO)</strong> plans allow out-of-network care without referrals. Ideal for snowbirds and nationwide travelers.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>Flexibility:</strong> See any doctor, no referrals needed</li>
                <li>✓ <strong>Nationwide coverage:</strong> Great for snowbirds (FL ↔ Northeast)</li>
                <li>✓ <strong>Out-of-network:</strong> Higher copays but still covered</li>
                <li>✓ Best for: Delray Beach snowbirds, frequent travelers</li>
                <li>✓ Premiums: $0-$85/month (higher than HMO)</li>
                <li>✓ Average star rating: 4.0★ in Palm Beach County</li>
              </ul>
            </div>

            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🩺 HMO-POS Medicare Advantage Plans</h3>
              <p className="text-gray-700 mb-3">
                <strong>HMO Point-of-Service (HMO-POS)</strong> plans combine HMO's low costs with limited out-of-network coverage for specialists.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>$0 premiums</strong> on 15 HMO-POS plans</li>
                <li>✓ PCP required, but some out-of-network care allowed</li>
                <li>✓ Best of both: HMO pricing + PPO flexibility</li>
                <li>✓ Best for: Boca Raton residents wanting specialist choice</li>
                <li>✓ Limited availability: 18 plans in Palm Beach County</li>
              </ul>
            </div>

            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">💊 Medicare Advantage-Prescription Drug (MA-PD) Plans</h3>
              <p className="text-gray-700 mb-3">
                <strong>95% of Palm Beach MA plans include Part D prescription drug coverage</strong> (MA-PD). No need for separate{' '}
                <Link href="/medicare-part-d-palm-beach-county" className="text-orange-800 underline hover:text-orange-600">Part D plan</Link>.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>All-in-one:</strong> Medical + hospital + prescription coverage</li>
                <li>✓ <strong>Formulary tiers:</strong> $0-$47 copays on most drugs</li>
                <li>✓ <strong>Coverage gap protection:</strong> Many plans cover donut hole</li>
                <li>✓ Preferred pharmacies: CVS, Walgreens, Publix, Winn-Dixie</li>
                <li>✓ Mail-order options: 90-day supply, lower copays</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-yellow-800 mb-2">💰 Part B Premium Giveback Plans (42 available)</h3>
            <p className="text-yellow-700 text-sm mb-3">
              <strong>Part B giveback plans</strong> reduce or eliminate your $174.70/month Part B premium. Available from Humana, UnitedHealthcare, Aetna, and WellCare.
              Giveback amounts: <strong>$80-$174.70/month</strong> ($960-$2,096/year savings).{' '}
              <Link href="/part-b-premium-give-back" className="text-yellow-900 underline hover:text-yellow-700">See all giveback plans</Link>.
            </p>
            <p className="text-xs text-yellow-700">
              <strong>Note:</strong> Giveback is credited to your Social Security check. Not available on all plans. Compare with{' '}
              <Link href="/specialists" className="text-yellow-900 underline hover:text-yellow-700">local specialists</Link> to maximize savings.
            </p>
          </div>
        </section>

        {/* Enrollment Periods Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Medicare Advantage Enrollment Periods in Palm Beach County</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">📋 Annual Enrollment Period (AEP)</h3>
              <p className="text-gray-700 mb-3">
                <strong>October 15 - December 7, 2025</strong> - Switch Medicare Advantage plans, change from Original Medicare to MA, or drop MA for{' '}
                <Link href="/medicare-supplement-palm-beach-county" className="text-blue-800 underline hover:text-blue-600">Medicare Supplement</Link>.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Coverage starts: <strong>January 1, 2026</strong></li>
                <li>✓ Compare <Link href="/resources/star-ratings-guide" className="text-blue-800 underline hover:text-blue-600">star ratings</Link> (look for 4.5★ and 5★ plans)</li>
                <li>✓ Review <Link href="/part-b-premium-give-back" className="text-blue-800 underline hover:text-blue-600">Part B giveback</Link> options (42 plans available)</li>
                <li>✓ Check <Link href="/resources/dental-vision-benefits" className="text-blue-800 underline hover:text-blue-600">dental/vision/hearing benefits</Link> (98% of plans include)</li>
                <li>✓ Verify hospital networks: Cleveland Clinic, Boca Regional, JFK Medical</li>
                <li>✓ <Link href="/contact" className="text-blue-800 underline hover:text-blue-600">Schedule consultation</Link> with local specialists by early November</li>
              </ul>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🔄 Medicare Advantage Open Enrollment Period (OEP)</h3>
              <p className="text-gray-700 mb-3">
                <strong>January 1 - March 31, 2026</strong> - Already enrolled in Medicare Advantage? You get one chance to switch to a different MA plan or return to{' '}
                <Link href="/resources/medicare-advantage-vs-original" className="text-blue-800 underline hover:text-blue-600">Original Medicare</Link> + <Link href="/medicare-supplement-palm-beach-county" className="text-blue-800 underline hover:text-blue-600">Medigap</Link>.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>One switch allowed</strong> during this period</li>
                <li>✓ Great for trying MA plans without long-term commitment</li>
                <li>✓ Add or drop <Link href="/medicare-part-d-palm-beach-county" className="text-blue-800 underline hover:text-blue-600">Part D prescription drug coverage</Link></li>
                <li>✓ Switch from HMO to PPO (or vice versa) for better fit</li>
                <li>✓ New enrollees: If you enrolled Oct 15 - Dec 7, you get another chance to switch Jan 1 - Mar 31</li>
              </ul>
            </div>

            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">⚡ Special Enrollment Periods (SEP)</h3>
              <p className="text-gray-700 mb-3">
                <Link href="/resources/enrollment-periods-explained" className="text-blue-800 underline hover:text-blue-600">Special circumstances</Link> allow enrollment outside AEP. Common SEPs for Palm Beach County:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>Moving to/from Palm Beach County</strong> - Change plans within 2 months</li>
                <li>✓ <strong>Losing employer/union coverage</strong> - 2 months before/after loss</li>
                <li>✓ <strong>Snowbirds:</strong> Moving between FL and another state (permanent residence change)</li>
                <li>✓ <strong>Medicaid eligibility change</strong> - Losing Extra Help/LIS</li>
                <li>✓ <strong>Chronic condition SEP</strong> - Certain chronic conditions qualify for quarterly enrollment</li>
                <li>✓ <strong>5-star plan enrollment</strong> - Switch to 5★ rated plans anytime (Dec 8 - Nov 30)</li>
              </ul>
            </div>

            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">🆕 Initial Enrollment Period (IEP)</h3>
              <p className="text-gray-700 mb-3">
                Turning 65 or new to Medicare? Your <strong>7-month Initial Enrollment Period</strong> starts 3 months before your 65th birthday month.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ <strong>Best time to enroll:</strong> 3 months before 65th birthday</li>
                <li>✓ Avoid late enrollment penalties for <Link href="/medicare-part-d-palm-beach-county" className="text-blue-800 underline hover:text-blue-600">Part D</Link></li>
                <li>✓ Compare <Link href="/medicare-advantage/plans" className="text-blue-800 underline hover:text-blue-600">Medicare Advantage</Link> vs. <Link href="/medicare-supplement-palm-beach-county" className="text-blue-800 underline hover:text-blue-600">Medicare Supplement</Link></li>
                <li>✓ Palm Beach options: 85+ $0 premium MA plans or Medigap Plan G ($165/month avg)</li>
                <li>✓ <Link href="/specialists" className="text-blue-800 underline hover:text-blue-600">Work with local specialists</Link> for personalized guidance</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-yellow-800 mb-2">⏰ Important Deadlines for Palm Beach County Seniors</h3>
            <p className="text-yellow-700 text-sm mb-3">
              <strong>Mark your calendar:</strong> AEP (Oct 15 - Dec 7) is the most important enrollment period for Medicare Advantage. This is your annual opportunity to review and switch plans.
              With 218,000 Palm Beach County MA enrollees, popular plans fill up quickly. <Link href="/contact" className="text-yellow-900 underline hover:text-yellow-700">Schedule your consultation</Link> in early October
              to ensure you have time to compare <Link href="/resources/star-ratings-guide" className="text-yellow-900 underline hover:text-yellow-700">star ratings</Link>,{' '}
              <Link href="/part-b-premium-give-back" className="text-yellow-900 underline hover:text-yellow-700">Part B giveback options</Link>, and{' '}
              <Link href="/resources/dental-vision-benefits" className="text-yellow-900 underline hover:text-yellow-700">extra benefits</Link> before enrollment deadlines.
            </p>
            <p className="text-xs text-yellow-700">
              <strong>Snowbird tip:</strong> If you split time between Palm Beach and another state, choose a{' '}
              <Link href="/medicare-advantage/plans" className="text-yellow-900 underline hover:text-yellow-700">nationwide PPO plan</Link> with coverage in both locations. Delray Beach offers 48 PPO plans for snowbirds.
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Palm Beach County Medicare Advantage Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Medicare Advantage Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/medicare-advantage/plans" className="underline hover:text-blue-900">Medicare Advantage Plans Overview</Link></li>
                <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-blue-900">Star Ratings Guide (4★ vs 5★)</Link></li>
                <li>• <Link href="/resources/dental-vision-benefits" className="underline hover:text-blue-900">Dental, Vision, Hearing Benefits</Link></li>
                <li>• <Link href="/part-b-premium-give-back" className="underline hover:text-blue-900">Part B Premium Giveback Plans</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding MA Costs (MOOP)</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Enrollment Periods (AEP, OEP, SEP)</Link></li>
                <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-blue-900">MA vs. Original Medicare + Medigap</Link></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Palm Beach County Medicare Services</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-green-900">Local Medicare Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-green-900">Free Plan Comparison</Link></li>
                <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-green-900">Medicare Supplement (Medigap)</Link></li>
                <li>• <Link href="/medicare-part-d-palm-beach-county" className="underline hover:text-green-900">Medicare Part D Prescription Plans</Link></li>
                <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-green-900">Part D Formulary Lookup</Link></li>
                <li>• <Link href="/social-security-analysis" className="underline hover:text-green-900">Social Security Analysis</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Medicare Options Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Florida Medicare Advantage:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-advantage/plans" className="underline hover:text-blue-900">Florida MA Overview</Link></li>
                  <li>• <Link href="/medicare-advantage-palm-beach-county" className="underline hover:text-blue-900">Palm Beach County</Link></li>
                  <li>• <Link href="/medicare-advantage-broward-county" className="underline hover:text-blue-900">Broward County</Link></li>
                  <li>• <Link href="/medicare-advantage-miami-dade-county" className="underline hover:text-blue-900">Miami-Dade County</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Palm Beach Medicare Options:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/medicare-advantage-palm-beach-county" className="underline hover:text-green-900">Medicare Advantage</Link></li>
                  <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-green-900">Medicare Supplement</Link></li>
                  <li>• <Link href="/medicare-part-d-palm-beach-county" className="underline hover:text-green-900">Part D Prescription Plans</Link></li>
                  <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-green-900">MA vs. Medigap Comparison</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Enrollment Tools:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-purple-900">Star Ratings Comparison</Link></li>
                  <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-purple-900">Enrollment Calendar</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Schedule Consultation</Link></li>
                  <li>• <Link href="/specialists" className="underline hover:text-purple-900">Find Local Help</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏥 Get Expert Medicare Advantage Help in Palm Beach County</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Compare 2025 Medicare Advantage plans for West Palm Beach, Boca Raton, Delray Beach, and all Palm Beach cities.
              85+ $0 premium plans with dental/vision/hearing. 42 plans with Part B giveback up to $174.70/month. Enroll with local specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Compare MA Plans Now
              </Link>
              <Link
                href="/medicare-advantage/plans"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📋 View All Plans
              </Link>
              <Link
                href="/resources/star-ratings-guide"
                className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                ⭐ Check Star Ratings
              </Link>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              Also serving: <Link href="/medicare-advantage-broward-county" className="underline hover:text-white">Broward County</Link> | <Link href="/medicare-advantage-miami-dade-county" className="underline hover:text-white">Miami-Dade County</Link> | <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-white">Medigap Plans</Link> | <Link href="/resources" className="underline hover:text-white">Resources</Link>
            </p>
          </div>
        </section>

      </div>
      </main>
    </>
  )
}
