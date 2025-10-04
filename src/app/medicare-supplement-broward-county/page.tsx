import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicareSupplementFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Broward County Medicare Supplement Plans 2025 - Medigap Coverage Fort Lauderdale | El-Mag Insurance',
  description: 'Broward County Medicare Supplement guide: Compare Medigap Plan G, N for 365,000+ beneficiaries. Fort Lauderdale, Hollywood, Pembroke Pines coverage. No network restrictions.',
  keywords: 'Broward County Medicare Supplement, Medigap Fort Lauderdale, Medicare Supplement Hollywood FL, Pembroke Pines Medigap, Broward Medigap Plan G, Fort Lauderdale Medicare coverage, Coral Springs Medicare Supplement',
  openGraph: {
    title: 'Broward County Medicare Supplement Plans 2025 - Fort Lauderdale Medigap',
    description: 'Compare Medicare Supplement plans for Broward County\'s 365,000+ beneficiaries with expert guidance and no network restrictions.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-broward-county',
  },
}

const browardMedigapData = {
  totalBeneficiaries: 365000,
  maPenetration: 51,
  medigapOpportunity: 178850,
  averagePlanGPremium: 162,
  majorHospitalSystems: 6,
  beachCommunities: true
}

const browardMedigapStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-broward-county',
  pageTitle: 'Broward County Medicare Supplement Plans 2025 - Medigap Coverage Fort Lauderdale',
  pageDescription: 'Broward County Medicare Supplement guide: Compare Medigap Plan G, N for 365,000+ beneficiaries. Fort Lauderdale, Hollywood, Pembroke Pines coverage. No network restrictions.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 365000,
  averagePremium: 162,
  faqs: getMedicareSupplementFAQs('Broward County', 'Florida', 162)
})

export default function BrowardCountyMedigapPage() {
  React.useEffect(() => {
    // Initialize Broward County Medigap landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('medicare-supplement-broward-county');
      });

      // Track page view with Broward County Medigap context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Broward County Medicare Supplement Plans 2025',
          page_location: window.location.href,
          page_path: '/medicare-supplement-broward-county',
          content_group: 'Medicare Supplement County Landing Pages',
          county: 'Broward County',
          state: 'Florida',
          total_beneficiaries: 365000,
          medigap_opportunity: 178850,
          ma_penetration_rate: 51,
          avg_plan_g_premium: 162,
          major_hospital_systems: 6,
          page_type: 'medigap_county_landing',
          market_rank: 'second_largest_fl_county'
        });
      }

      // Track scroll depth for content engagement
      let scrollDepth = 0;
      const trackScrollDepth = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

        // Track at 25%, 50%, 75%, 100% milestones
        if (scrollPercent >= 25 && scrollDepth < 25) {
          scrollDepth = 25;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Medigap - 25%',
              value: 25,
              page_section: 'upper_content'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Medigap - 50%',
              value: 50,
              page_section: 'city_breakdowns'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Medigap - 75%',
              value: 75,
              page_section: 'plan_comparison_enrollment'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Medigap - 90%',
              value: 90,
              page_section: 'bottom_cta'
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page (engagement threshold: 145 seconds)
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Broward County Medigap',
            value: timeSpent,
            engagement_threshold: 145,
            engaged: timeSpent >= 145
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
        pageTitle="Medicare Supplement Broward County Florida"
        county="Broward County"
        state="Florida"
        demographics={{
          avgAge: 71,
          maPenetrationRate: 51,
        }}
        keyMetrics={{
          totalBeneficiaries: browardMedigapData.totalBeneficiaries,
          averagePremium: browardMedigapData.averagePlanGPremium,
          pageType: 'medigap_county',
          productType: 'medicare_supplement'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(browardMedigapStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏖️ BROWARD COUNTY: South Florida's Premier Medigap Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Broward County Medicare Supplement Plans 2025: Fort Lauderdale Medigap Coverage Guide
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Broward: 365,000+ Medicare Beneficiaries, 178,850 Medigap Opportunity
                </p>
                <p className="text-blue-700">
                  Serving Broward County from <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Fort Lauderdale to Pompano Beach</Link> with
                  comprehensive <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Medicare Supplement (Medigap) coverage</Link>.
                  Access <strong>freedom to choose any doctor</strong> nationwide with no network restrictions, <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">local specialists</Link>,
                  and <Link href="/medicare-supplement-plan-g" className="text-blue-900 underline hover:text-blue-600">Plan G coverage</Link> starting at $162/month for South Florida's active senior community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">365K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">2nd largest FL county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">49%</div>
              <div className="text-green-800 font-semibold">Choose Medigap</div>
              <div className="text-green-600 text-sm mt-1">178,850 enrollees</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$162</div>
              <div className="text-purple-800 font-semibold">Avg Plan G premium</div>
              <div className="text-purple-600 text-sm mt-1">Per month</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-orange-800 font-semibold">Major hospitals</div>
              <div className="text-orange-600 text-sm mt-1">All accessible</div>
            </div>
          </div>
        </div>

        {/* Broward Medigap Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Broward County Medicare Supplement Insurance Plans</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Popular Medigap Plans in Broward</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⭐</span>
                  <span><strong>Plan G:</strong> Most comprehensive, covers all gaps except Part B deductible ($240)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💰</span>
                  <span><strong>Plan N:</strong> Lower premium, small copays ($20 office, $50 ER)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔄</span>
                  <span><strong>High Deductible Plan G:</strong> Lowest premium ($50-60/mo), $2,800 deductible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📋</span>
                  <span><strong>Plan F:</strong> Grandfathered (enrolled before 2020), full coverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Why Medigap in Broward County?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>No Network Restrictions:</strong> See any Medicare doctor nationwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌍</span>
                  <span><strong>Travel Freedom:</strong> Coverage anywhere in US, even 80% abroad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💊</span>
                  <span><strong>Pair with Part D:</strong> Add prescription drug coverage separately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔒</span>
                  <span><strong>Guaranteed Renewable:</strong> Cannot be cancelled for health reasons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📊</span>
                  <span><strong>Predictable Costs:</strong> Fixed monthly premium, minimal surprises</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">🏖️ Broward Medigap Value</h3>
            <p className="text-blue-700 mb-4">
              Broward County's <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Medicare Supplement plans</Link> offer unmatched
              flexibility for South Florida's active senior community. With <strong>365,000+ beneficiaries</strong> and 49% choosing Medigap over Medicare Advantage,
              Broward residents enjoy access to <Link href="/medicare-supplement-plan-g" className="text-blue-900 underline hover:text-blue-600">premier hospital systems</Link> including
              Cleveland Clinic, Broward Health, Holy Cross, and Memorial Healthcare without network restrictions. Perfect for snowbirds and frequent travelers.
              Learn more about <Link href="/medicare-supplement-florida" className="text-blue-900 underline hover:text-blue-600">Florida Medicare Supplement options</Link> statewide.
            </p>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-sm text-blue-700 font-semibold mb-2">Compare South Florida Medigap Options:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-supplement-florida" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Florida Medigap Overview</Link>
                <Link href="/medicare-supplement-miami-dade-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Miami-Dade Medigap</Link>
                <Link href="/medicare-supplement-palm-beach-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Palm Beach Medigap</Link>
                <Link href="/medicare-supplement-orange-county-florida" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Orange County Medigap</Link>
                <Link href="/medicare-supplement-monroe-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Monroe County (Keys)</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Broward County Medicare Supplement Coverage by City</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Fort Lauderdale</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Beneficiaries:</strong> 48,000+</div>
                <div><strong>MA Penetration:</strong> 48%</div>
                <div><strong>Major Hospitals:</strong> Holy Cross, Broward Health Medical Center</div>
                <div><strong>Avg Plan G:</strong> $165/month</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Pembroke Pines</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Beneficiaries:</strong> 42,000+</div>
                <div><strong>MA Penetration:</strong> 53%</div>
                <div><strong>Major Hospitals:</strong> Memorial, Broward Health</div>
                <div><strong>Avg Plan G:</strong> $160/month</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Hollywood</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Beneficiaries:</strong> 38,000+</div>
                <div><strong>MA Penetration:</strong> 50%</div>
                <div><strong>Major Hospitals:</strong> Memorial Regional, Joe DiMaggio</div>
                <div><strong>Avg Plan G:</strong> $162/month</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Coral Springs</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Beneficiaries:</strong> 32,000+</div>
                <div><strong>MA Penetration:</strong> 49%</div>
                <div><strong>Major Hospitals:</strong> Coral Springs Medical Center</div>
                <div><strong>Avg Plan G:</strong> $158/month</div>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Pompano Beach</h3>
              <div className="space-y-2 text-cyan-700 text-sm">
                <div><strong>Beneficiaries:</strong> 28,000+</div>
                <div><strong>MA Penetration:</strong> 52%</div>
                <div><strong>Major Hospitals:</strong> Broward Health North</div>
                <div><strong>Avg Plan G:</strong> $163/month</div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Plantation & Sunrise</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Beneficiaries:</strong> 35,000+</div>
                <div><strong>MA Penetration:</strong> 50%</div>
                <div><strong>Major Hospitals:</strong> Westside Regional, Cleveland Clinic</div>
                <div><strong>Avg Plan G:</strong> $161/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Networks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Broward County Major Hospital Systems - All Accessible with Medigap</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Premier Hospital Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Cleveland Clinic Florida:</strong> World-class cardiac care, Weston campus, digestive disease institute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Memorial Healthcare System:</strong> 6 hospitals, Level I trauma, cancer center excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Broward Health:</strong> 5 hospitals, Broward General, North, Imperial Point</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Holy Cross Health:</strong> Fort Lauderdale, cardiac center, orthopedic excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Joe DiMaggio Children's Hospital:</strong> Pediatric specialty, Hollywood location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🏥</span>
                  <span><strong>Westside Regional Medical Center:</strong> Plantation, comprehensive services</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Medigap Hospital Access Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Zero Network Restrictions:</strong> Access all 6 major hospital systems freely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>No Referrals Required:</strong> See specialists directly without PCP approval</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Out-of-County Care:</strong> Use Miami, Palm Beach, or any US hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Snowbird Coverage:</strong> Full benefits in other states during travel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Emergency Services:</strong> Worldwide emergency coverage (80% abroad)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">🌟 Cleveland Clinic Florida Access</h3>
            <p className="text-green-700">
              Broward residents with <Link href="/medicare-supplement-plan-g" className="text-green-900 underline hover:text-green-600">Medigap Plan G</Link> enjoy
              unrestricted access to Cleveland Clinic Florida's world-renowned cardiac care, digestive disease institute, and comprehensive wellness programs.
              Unlike <Link href="/resources/medicare-advantage-vs-original" className="text-green-900 underline hover:text-green-600">Medicare Advantage plans</Link> with
              network limitations, Medigap ensures you can choose Cleveland Clinic or any provider nationwide.
            </p>
          </div>
        </section>

        {/* Plan G vs Plan N Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Broward County Medigap Plan Comparison: Plan G vs Plan N</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border-2 border-blue-300 rounded-xl p-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan G</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$162<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Covers all gaps except Part B deductible ($240/year)</li>
                <li>✓ No copays for doctor visits or ER</li>
                <li>✓ Predictable out-of-pocket costs</li>
                <li>✓ Foreign travel emergency (80% coverage)</li>
                <li>✓ Excess charges covered (100%)</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                <strong>Best for:</strong> Frequent doctor visits, chronic conditions, peace of mind
              </div>
            </div>

            <div className="bg-white border-2 border-green-300 rounded-xl p-6">
              <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-3">
                BUDGET OPTION
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plan N</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$128<span className="text-lg text-gray-600">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Lower monthly premium ($34/month savings)</li>
                <li>✓ $20 copay for office visits</li>
                <li>✓ $50 copay for ER (waived if admitted)</li>
                <li>✓ Part B deductible required ($240/year)</li>
                <li>✓ Foreign travel emergency (80% coverage)</li>
              </ul>
              <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                <strong>Best for:</strong> Healthy seniors, infrequent doctor visits, budget-conscious
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">🧮 Annual Cost Comparison (Broward County)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-purple-300">
                    <th className="text-left py-2 px-3">Scenario</th>
                    <th className="text-center py-2 px-3">Plan G Total</th>
                    <th className="text-center py-2 px-3">Plan N Total</th>
                    <th className="text-center py-2 px-3">Best Choice</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-purple-200">
                    <td className="py-2 px-3">Healthy (2 office visits/year)</td>
                    <td className="text-center py-2 px-3">$2,184</td>
                    <td className="text-center py-2 px-3">$1,816</td>
                    <td className="text-center py-2 px-3 text-green-600 font-semibold">Plan N saves $368</td>
                  </tr>
                  <tr className="border-b border-purple-200">
                    <td className="py-2 px-3">Moderate (6 office visits/year)</td>
                    <td className="text-center py-2 px-3">$2,184</td>
                    <td className="text-center py-2 px-3">$1,896</td>
                    <td className="text-center py-2 px-3 text-green-600 font-semibold">Plan N saves $288</td>
                  </tr>
                  <tr className="border-b border-purple-200">
                    <td className="py-2 px-3">Active (12 office visits/year)</td>
                    <td className="text-center py-2 px-3">$2,184</td>
                    <td className="text-center py-2 px-3">$2,016</td>
                    <td className="text-center py-2 px-3 text-green-600 font-semibold">Plan N saves $168</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Chronic (20+ visits/year)</td>
                    <td className="text-center py-2 px-3">$2,184</td>
                    <td className="text-center py-2 px-3">$2,176</td>
                    <td className="text-center py-2 px-3 text-blue-600 font-semibold">Plan G (simplicity)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-purple-600 mt-3">
              *Includes premiums, Part B deductible, and copays. Does not include Part D or other medical costs.
              Use our <Link href="/medicare-cost-calculator" className="text-purple-900 underline hover:text-purple-700">Medicare Cost Calculator</Link> for
              personalized estimates. Compare with <Link href="/medicare-supplement-plan-n" className="text-purple-900 underline hover:text-purple-700">Plan N details</Link>.
            </p>
          </div>
        </section>

        {/* Snowbird & Travel Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">✈️ Snowbird & Travel Coverage: Broward Medicare Supplement Benefits</h2>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Perfect for South Florida Snowbirds</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Domestic Travel Coverage:</h4>
                <ul className="space-y-2 text-blue-600 text-sm">
                  <li>✓ <strong>Full coverage in all 50 states</strong></li>
                  <li>✓ No network restrictions anywhere in US</li>
                  <li>✓ Same benefits whether in Florida or visiting family</li>
                  <li>✓ Perfect for summer trips to Northeast or Midwest</li>
                  <li>✓ Emergency care covered nationwide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">International Travel:</h4>
                <ul className="space-y-2 text-green-600 text-sm">
                  <li>✓ <strong>80% coverage for foreign emergency care</strong></li>
                  <li>✓ $50,000 lifetime maximum (Plans G, N)</li>
                  <li>✓ $250 deductible for foreign travel</li>
                  <li>✓ Covers first 60 days of travel per trip</li>
                  <li>✓ Caribbean cruises fully covered</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="text-blue-700 text-sm">
                <strong>Broward Snowbird Scenario:</strong> If you spend summers in Massachusetts or winters in North Carolina,
                <Link href="/medicare-supplement-plan-g" className="text-blue-900 underline hover:text-blue-600 ml-1">Medigap Plan G</Link> provides
                identical coverage regardless of location. Unlike Medicare Advantage with network restrictions,
                you can see any Medicare doctor without worrying about in-network vs out-of-network.
              </p>
            </div>
          </div>
        </section>

        {/* Enrollment & Eligibility */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Broward County Medigap Enrollment & Eligibility</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Best Time to Enroll (Guaranteed Issue)</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800 mb-2">Medigap Open Enrollment Period:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>6-month window:</strong> Starts when you turn 65 AND enroll in Medicare Part B</li>
                    <li>• <strong>Guaranteed acceptance:</strong> Cannot be denied for health reasons</li>
                    <li>• <strong>Best rates:</strong> Lowest premiums available</li>
                    <li>• <strong>No medical underwriting:</strong> Pre-existing conditions covered</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Special Guaranteed Issue Rights:</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Leaving employer coverage (retiree plan ends)</li>
                    <li>• Medicare Advantage plan leaves your area</li>
                    <li>• Medicare Advantage plan violates contract</li>
                    <li>• Moving out of plan service area</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Outside Open Enrollment (Medical Underwriting)</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">Health Questions Required:</p>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Medical history review</li>
                    <li>• Possible rate increases or denial</li>
                    <li>• Pre-existing condition waiting periods possible</li>
                    <li>• Some insurers may not accept applications</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-800 mb-2">Florida Medigap Protections:</p>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>✓ Cannot be cancelled due to health</li>
                    <li>✓ Guaranteed renewable for life</li>
                    <li>✓ Rate increases apply to all policyholders equally</li>
                    <li>✓ No individual rate hikes based on claims</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">⏰ Critical Timing for Broward Residents</h3>
            <p className="text-blue-700 mb-3">
              Your <Link href="/resources/enrollment-periods-explained" className="text-blue-900 underline hover:text-blue-600">Medigap Open Enrollment Period</Link> is
              the most important window to secure coverage. Broward County residents turning 65 should enroll during this 6-month period to avoid health questions
              and guarantee acceptance. <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">Our local specialists</Link> can help you
              navigate enrollment and compare <Link href="/medicare-supplement-plan-g" className="text-blue-900 underline hover:text-blue-600">Plan G</Link> vs
              Plan N options.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏖️ Get Expert Broward County Medicare Supplement Guidance</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Navigate Broward County's Medicare Supplement options with expert assistance. Compare Plan G, Plan N, and High Deductible options
              for Fort Lauderdale, Pembroke Pines, Hollywood, and all Broward cities. Local specialists who understand South Florida's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Get Free Quote
              </Link>
              <Link
                href="/medicare-supplement-plan-g"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📋 Compare Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Medigap Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Broward County Medicare Supplement Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Medigap Plan Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/medicare-supplement" className="underline hover:text-blue-900">Medicare Supplement Overview</Link></li>
                <li>• <Link href="/medicare-supplement-florida" className="underline hover:text-blue-900">Florida Medigap State Guide</Link></li>
                <li>• <Link href="/medicare-supplement-plan-g" className="underline hover:text-blue-900">Plan G Comprehensive Guide</Link></li>
                <li>• <Link href="/medicare-supplement-plan-n" className="underline hover:text-blue-900">Plan N Detailed Guide</Link></li>
                <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-blue-900">Medigap vs Medicare Advantage</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Medigap Enrollment Periods</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding Medigap Costs</Link></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Broward County Services</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-green-900">Local Medigap Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-green-900">Free Plan Comparison</Link></li>
                <li>• <Link href="/medicare-cost-calculator" className="underline hover:text-green-900">Medicare Cost Calculator</Link></li>
                <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-green-900">Insurance Company Ratings</Link></li>
                <li>• <Link href="/part-b-premium-give-back" className="underline hover:text-green-900">Part B Premium Reduction</Link></li>
                <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-green-900">Part D Drug Coverage</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Medicare Supplement Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">South Florida Counties:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-supplement-florida" className="underline hover:text-blue-900">Florida State Medigap Guide</Link></li>
                  <li>• <Link href="/medicare-supplement-miami-dade-county" className="underline hover:text-blue-900">Miami-Dade Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-blue-900">Palm Beach Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-orange-county-florida" className="underline hover:text-blue-900">Orange County Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-monroe-county" className="underline hover:text-blue-900">Monroe County (Keys)</Link></li>
                  <li>• <Link href="/medicare-supplement-hernando-county-florida" className="underline hover:text-blue-900">Hernando County Medigap</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Major Broward Cities:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Fort Lauderdale Medicare Supplement</li>
                  <li>• Pembroke Pines Medigap Plans</li>
                  <li>• Hollywood Medicare Coverage</li>
                  <li>• Coral Springs Supplement Plans</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Planning Resources:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-purple-900">Enrollment Windows</Link></li>
                  <li>• <Link href="/medicare-cost-calculator" className="underline hover:text-purple-900">Cost Calculator Tool</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Schedule Consultation</Link></li>
                  <li>• <Link href="/medicare-supplement-plan-g" className="underline hover:text-purple-900">Plan G Guide</Link></li>
                  <li>• <Link href="/resources/dental-vision-benefits" className="underline hover:text-purple-900">Dental & Vision Benefits</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      </main>
    </>
  )
}
