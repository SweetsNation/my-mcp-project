import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicareSupplementFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Palm Beach County Medicare Supplement Plans 2025 - Medigap Coverage West Palm Beach | El-Mag Insurance',
  description: 'Palm Beach County Medicare Supplement guide: Compare Medigap Plan G, N for 455,000+ beneficiaries. West Palm Beach, Boca Raton, Delray Beach coverage. No network restrictions.',
  keywords: 'Palm Beach County Medicare Supplement, Medigap West Palm Beach, Medicare Supplement Boca Raton, Delray Beach Medigap, Palm Beach Medigap Plan G, West Palm Beach Medicare coverage, Wellington Medicare Supplement',
  openGraph: {
    title: 'Palm Beach County Medicare Supplement Plans 2025 - West Palm Beach Medigap',
    description: 'Compare Medicare Supplement plans for Palm Beach County\'s 455,000+ beneficiaries with expert guidance and no network restrictions.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-palm-beach-county',
  },
}

const palmBeachMedigapData = {
  totalBeneficiaries: 455000,
  maPenetration: 48,
  medigapOpportunity: 236600,
  averagePlanGPremium: 165,
  majorHospitalSystems: 8,
  beachCommunities: true
}

const palmBeachMedigapStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-palm-beach-county',
  pageTitle: 'Palm Beach County Medicare Supplement Plans 2025 - Medigap Coverage West Palm Beach',
  pageDescription: 'Palm Beach County Medicare Supplement guide: Compare Medigap Plan G, N for 455,000+ beneficiaries. West Palm Beach, Boca Raton, Delray Beach coverage. No network restrictions.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 455000,
  averagePremium: 165,
  faqs: getMedicareSupplementFAQs('Palm Beach County', 'Florida', 165)
})

export default function PalmBeachCountyMedigapPage() {
  React.useEffect(() => {
    // Initialize Palm Beach County Medigap landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('medicare-supplement-palm-beach-county');
      });

      // Track page view with Palm Beach County Medigap context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Palm Beach County Medicare Supplement Plans 2025',
          page_location: window.location.href,
          page_path: '/medicare-supplement-palm-beach-county',
          content_group: 'Medicare Supplement County Landing Pages',
          county: 'Palm Beach County',
          state: 'Florida',
          total_beneficiaries: 455000,
          medigap_opportunity: 236600,
          ma_penetration_rate: 48,
          avg_plan_g_premium: 165,
          major_hospital_systems: 8,
          page_type: 'medigap_county_landing',
          market_rank: 'largest_fl_county_medicare'
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
              event_label: 'Palm Beach County Medigap - 25%',
              value: 25,
              page_section: 'upper_content'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Medigap - 50%',
              value: 50,
              page_section: 'city_breakdowns'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Medigap - 75%',
              value: 75,
              page_section: 'plan_comparison_enrollment'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Medigap - 90%',
              value: 90,
              page_section: 'bottom_cta'
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page (engagement threshold: 150 seconds)
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Palm Beach County Medigap',
            value: timeSpent,
            engagement_threshold: 150,
            engaged: timeSpent >= 150
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
        pageTitle="Medicare Supplement Palm Beach County Florida"
        county="Palm Beach County"
        state="Florida"
        demographics={{
          avgAge: 72,
          maPenetrationRate: 48,
        }}
        keyMetrics={{
          totalBeneficiaries: palmBeachMedigapData.totalBeneficiaries,
          averagePremium: palmBeachMedigapData.averagePlanGPremium,
          pageType: 'medigap_county',
          productType: 'medicare_supplement'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(palmBeachMedigapStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏖️ PALM BEACH COUNTY: Florida's Largest Medicare Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Palm Beach County Medicare Supplement Plans 2025: West Palm Beach Medigap Coverage Guide
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Palm Beach: 455,000+ Medicare Beneficiaries, 236,600 Medigap Opportunity
                </p>
                <p className="text-blue-700">
                  Serving Palm Beach County from <strong>West Palm Beach to Boca Raton</strong> with
                  comprehensive <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Medicare Supplement (Medigap) coverage</Link>.
                  Access <strong>freedom to choose any doctor</strong> nationwide with no network restrictions, <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">local specialists</Link>,
                  and <Link href="/medicare-supplement" className="text-blue-900 underline hover:text-blue-600">Plan G coverage</Link> starting at $165/month for South Florida's affluent senior community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">455K+</div>
              <div className="text-blue-800 font-semibold">Medicare beneficiaries</div>
              <div className="text-blue-600 text-sm mt-1">Largest FL county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">52%</div>
              <div className="text-green-800 font-semibold">Choose Medigap</div>
              <div className="text-green-600 text-sm mt-1">236,600 enrollees</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$165</div>
              <div className="text-purple-800 font-semibold">Avg Plan G premium</div>
              <div className="text-purple-600 text-sm mt-1">Per month</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-orange-800 font-semibold">Major hospitals</div>
              <div className="text-orange-600 text-sm mt-1">All accessible</div>
            </div>
          </div>
        </div>

        {/* Palm Beach Medigap Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Palm Beach County Medicare Supplement Insurance Plans</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Popular Medigap Plans in Palm Beach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⭐</span>
                  <span><strong><Link href="/medicare-supplement-plan-g" className="text-blue-800 underline hover:text-blue-600">Plan G</Link>:</strong> Most comprehensive, covers all gaps except Part B deductible ($240)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💰</span>
                  <span><strong><Link href="/medicare-supplement-plan-n" className="text-blue-800 underline hover:text-blue-600">Plan N</Link>:</strong> Lower premium, small copays ($20 office, $50 ER)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔄</span>
                  <span><strong>High Deductible Plan G:</strong> Lowest premium ($50-60/mo), $2,800 deductible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📋</span>
                  <span><strong><Link href="/medicare-supplement-plan-f" className="text-blue-800 underline hover:text-blue-600">Plan F</Link>:</strong> Grandfathered (enrolled before 2020), full coverage</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Why Medigap in Palm Beach County?</h3>
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
                  <span><strong>Pair with Part D:</strong> Add <Link href="/medicare-part-d" className="text-blue-800 underline hover:text-blue-600">prescription drug coverage</Link> separately</span>
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

          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">💡 Palm Beach County Medicare Advantage</h3>
            <p className="text-green-700 mb-4">
              With 455,000+ Medicare beneficiaries, Palm Beach County is <Link href="/medicare-supplement-florida" className="text-green-900 underline hover:text-green-700">Florida's largest Medicare market</Link>. While 48% choose <Link href="/medicare-advantage" className="text-green-900 underline hover:text-green-700">Medicare Advantage</Link>,
              52% (236,600 seniors) prefer the flexibility of Original Medicare with <Link href="/medicare-supplement" className="text-green-900 underline hover:text-green-700">Medigap coverage</Link>. Popular with affluent retirees who value <strong>nationwide coverage</strong>,
              access to <Link href="/specialists" className="text-green-900 underline hover:text-green-700">top medical specialists</Link> without referrals, and predictable healthcare costs.
              Major healthcare systems like Jupiter Medical Center, Palm Beach Gardens Medical Center, and Bethesda Hospital East serve the region.
            </p>
            <div className="border-t border-green-200 pt-3">
              <p className="text-sm text-green-700 font-semibold mb-2">Compare South Florida Medicare Coverage:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-supplement" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Medigap Overview</Link>
                <Link href="/medicare-supplement-plan-g" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Plan G Details</Link>
                <Link href="/medicare-supplement-florida" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Florida Medigap Guide</Link>
                <Link href="/medicare-supplement-broward-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Broward County</Link>
                <Link href="/medicare-supplement-miami-dade-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Miami-Dade County</Link>
                <Link href="/medicare-advantage" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Medicare Advantage vs Medigap</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Beach Cities Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌴 Medicare Supplement Coverage by Palm Beach County City</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* West Palm Beach */}
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">🏙️ West Palm Beach Medigap Plans</h3>
              <p className="text-gray-700 mb-3">
                <strong>West Palm Beach</strong> (112,000 residents, 28,000+ Medicare beneficiaries) is Palm Beach County's largest city and healthcare hub.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ St. Mary's Medical Center - Major hospital system</li>
                <li>✓ Good Samaritan Medical Center - Comprehensive care</li>
                <li>✓ Plan G premiums: $165-$185/month</li>
                <li>✓ Urban access to specialists without referrals</li>
                <li>✓ <Link href="/medicare-part-d" className="text-blue-800 underline hover:text-blue-600">Pair with Part D</Link> for prescription coverage</li>
              </ul>
            </div>

            {/* Boca Raton */}
            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">🏖️ Boca Raton Medigap Coverage</h3>
              <p className="text-gray-700 mb-3">
                <strong>Boca Raton</strong> (98,000 residents, 32,000+ Medicare beneficiaries) offers premium healthcare for affluent retirees.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Boca Raton Regional Hospital - Top-rated facility</li>
                <li>✓ West Boca Medical Center - Comprehensive services</li>
                <li>✓ Plan G premiums: $165-$190/month</li>
                <li>✓ High Medigap penetration (60%+) among affluent seniors</li>
                <li>✓ Access to Cleveland Clinic affiliates nationwide</li>
              </ul>
            </div>

            {/* Delray Beach */}
            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">🌊 Delray Beach Medicare Supplement</h3>
              <p className="text-gray-700 mb-3">
                <strong>Delray Beach</strong> (70,000 residents, 19,000+ Medicare beneficiaries) is known for active adult communities and beach lifestyle.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Delray Medical Center - Full-service hospital</li>
                <li>✓ Plan G premiums: $162-$180/month</li>
                <li>✓ Popular with snowbirds who travel frequently</li>
                <li>✓ No network restrictions for summer travel north</li>
                <li>✓ Foreign travel emergency coverage (80%)</li>
              </ul>
            </div>

            {/* Wellington */}
            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">🐴 Wellington Medigap Plans</h3>
              <p className="text-gray-700 mb-3">
                <strong>Wellington</strong> (65,000 residents, 12,000+ Medicare beneficiaries) serves equestrian community with high-quality healthcare access.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Wellington Regional Medical Center - Modern facility</li>
                <li>✓ Plan G premiums: $165-$185/month</li>
                <li>✓ Access to Mayo Clinic and Johns Hopkins via Medigap</li>
                <li>✓ No referrals needed for sports medicine specialists</li>
                <li>✓ Coverage for equestrian-related medical needs</li>
              </ul>
            </div>

            {/* Boynton Beach */}
            <div className="bg-white border border-cyan-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-3">🏝️ Boynton Beach Medigap Coverage</h3>
              <p className="text-gray-700 mb-3">
                <strong>Boynton Beach</strong> (80,000 residents, 24,000+ Medicare beneficiaries) offers coastal living with strong Medigap enrollment.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Bethesda Hospital East - Comprehensive care center</li>
                <li>✓ Plan G premiums: $160-$180/month</li>
                <li>✓ Popular with retirees from Northeast US</li>
                <li>✓ Coverage anywhere in US (visit family up north)</li>
                <li>✓ Pair with standalone <Link href="/medicare-part-d" className="text-cyan-800 underline hover:text-cyan-600">Part D plan</Link></li>
              </ul>
            </div>

            {/* Jupiter/Palm Beach Gardens */}
            <div className="bg-white border border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">⛳ Jupiter & Palm Beach Gardens Medigap</h3>
              <p className="text-gray-700 mb-3">
                <strong>Jupiter & Palm Beach Gardens</strong> (125,000+ combined residents, 28,000+ Medicare beneficiaries) serve northern Palm Beach's golf communities.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Jupiter Medical Center - Top-rated regional hospital</li>
                <li>✓ Palm Beach Gardens Medical Center - Advanced care</li>
                <li>✓ Plan G premiums: $165-$190/month</li>
                <li>✓ High-income retirees prefer Medigap flexibility</li>
                <li>✓ Access to cardiology specialists without referrals</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">📍 Other Palm Beach County Communities Served</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-700">
              <div>
                <p className="font-semibold mb-1">Coastal Communities:</p>
                <ul className="space-y-1">
                  <li>• Lake Worth Beach</li>
                  <li>• Palm Beach</li>
                  <li>• Singer Island</li>
                  <li>• Juno Beach</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Inland Cities:</p>
                <ul className="space-y-1">
                  <li>• Royal Palm Beach</li>
                  <li>• Greenacres</li>
                  <li>• Lake Worth</li>
                  <li>• Lantana</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Active Adult Communities:</p>
                <ul className="space-y-1">
                  <li>• Century Village (Boca & WPB)</li>
                  <li>• Kings Point</li>
                  <li>• Aberdeen</li>
                  <li>• Leisureville</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Compare Medicare Supplement Plans in Palm Beach County</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Coverage</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-blue-900">Plan G</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-blue-900">Plan N</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-blue-900">HD Plan G</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Monthly Premium</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-green-600">$165-$190</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-green-600">$130-$155</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-green-600">$50-$65</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Part B Deductible ($240)</td>
                  <td className="px-4 py-3 text-center text-sm">❌ Not covered</td>
                  <td className="px-4 py-3 text-center text-sm">❌ Not covered</td>
                  <td className="px-4 py-3 text-center text-sm">❌ Not covered</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Part B Excess Charges</td>
                  <td className="px-4 py-3 text-center text-sm">✅ Covered</td>
                  <td className="px-4 py-3 text-center text-sm">❌ Not covered</td>
                  <td className="px-4 py-3 text-center text-sm">✅ After deductible</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Part A/B Copays</td>
                  <td className="px-4 py-3 text-center text-sm">✅ 100% covered</td>
                  <td className="px-4 py-3 text-center text-sm">⚠️ $20 office / $50 ER</td>
                  <td className="px-4 py-3 text-center text-sm">✅ After $2,800 deductible</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Foreign Travel Emergency</td>
                  <td className="px-4 py-3 text-center text-sm">✅ 80% coverage</td>
                  <td className="px-4 py-3 text-center text-sm">✅ 80% coverage</td>
                  <td className="px-4 py-3 text-center text-sm">✅ After deductible</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Best For</td>
                  <td className="px-4 py-3 text-center text-sm text-blue-700">Comprehensive coverage</td>
                  <td className="px-4 py-3 text-center text-sm text-blue-700">Lower premiums</td>
                  <td className="px-4 py-3 text-center text-sm text-blue-700">Healthy, budget-conscious</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-yellow-800 mb-2">💡 Palm Beach County Plan Selection Tips</h3>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>✓ <strong><Link href="/medicare-supplement-plan-g" className="text-yellow-900 underline hover:text-yellow-700">Plan G</Link></strong> is the most popular choice (65% of Palm Beach enrollees) - comprehensive coverage with predictable costs</li>
              <li>✓ <strong><Link href="/medicare-supplement-plan-n" className="text-yellow-900 underline hover:text-yellow-700">Plan N</Link></strong> saves $30-35/month if you're comfortable with small copays and rarely see specialists</li>
              <li>✓ <strong>High Deductible Plan G</strong> ideal if you spend less than $2,000/year on healthcare and want lowest premiums</li>
              <li>✓ All plans standardized by federal law - same benefits regardless of insurance carrier</li>
              <li>✓ Compare rates from multiple carriers - <Link href="/contact" className="text-yellow-900 underline hover:text-yellow-700">get free quotes</Link> for identical coverage</li>
              <li>✓ Pair any Medigap plan with <Link href="/medicare-part-d" className="text-yellow-900 underline hover:text-yellow-700">standalone Part D</Link> for prescription drug coverage</li>
            </ul>
          </div>
        </section>

        {/* Enrollment & Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Palm Beach County Medicare Supplement Enrollment</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">✅ Best Time to Enroll</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">1.</span>
                  <div>
                    <strong>Medigap Open Enrollment (6 months):</strong> Starts when you turn 65 and enroll in Part B. Guaranteed acceptance, no health questions, best rates. <Link href="/resources/enrollment-periods-explained" className="text-green-800 underline hover:text-green-600">Learn more</Link>.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">2.</span>
                  <div>
                    <strong>Switching from <Link href="/medicare-advantage" className="text-green-800 underline hover:text-green-600">Medicare Advantage</Link>:</strong> Florida offers limited guaranteed issue rights. Apply during Annual Enrollment Period (Oct 15 - Dec 7).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">3.</span>
                  <div>
                    <strong>Year-round enrollment:</strong> Can apply anytime, but may require health underwriting if outside open enrollment periods.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">🏥 Palm Beach County Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-blue-900">Local Medicare Supplement Specialists</Link></li>
                <li>• <Link href="/medicare-supplement" className="underline hover:text-blue-900">Medigap Plan Comparison Guide</Link></li>
                <li>• <Link href="/medicare-supplement-plan-g" className="underline hover:text-blue-900">Plan G Coverage Details</Link></li>
                <li>• <Link href="/medicare-part-d" className="underline hover:text-blue-900">Part D Prescription Drug Plans</Link></li>
                <li>• <Link href="/medicare-advantage" className="underline hover:text-blue-900">Medicare Advantage vs Medigap</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding Medicare Costs</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Enrollment Periods Explained</Link></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">Compare Florida Counties:</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/medicare-supplement-florida" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Florida Guide</Link>
                  <Link href="/medicare-supplement-broward-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Broward</Link>
                  <Link href="/medicare-supplement-miami-dade-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Miami-Dade</Link>
                  <Link href="/medicare-supplement-monroe-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Monroe</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Palm Beach County Medicare Supplement Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Medigap Plans:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-supplement" className="underline hover:text-blue-900">Medicare Supplement Overview</Link></li>
                  <li>• <Link href="/medicare-supplement-plans" className="underline hover:text-blue-900">All Medigap Plans A-N</Link></li>
                  <li>• Plan G vs Plan N Comparison</li>
                  <li>• High Deductible Plan G Guide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Prescription Coverage:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/medicare-part-d" className="underline hover:text-green-900">Medicare Part D Plans</Link></li>
                  <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-green-900">Formulary Lookup Tool</Link></li>
                  <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-green-900">Part D Coverage Guide</Link></li>
                  <li>• Extra Help / LIS Program</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Medicare Education:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-purple-900">Medicare Advantage vs Original Medicare</Link></li>
                  <li>• <Link href="/resources/understanding-costs" className="underline hover:text-purple-900">Understanding Medicare Costs</Link></li>
                  <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-purple-900">Enrollment Periods Guide</Link></li>
                  <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-purple-900">Medicare Star Ratings</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏥 Get Expert Medicare Supplement Help in Palm Beach County</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Compare Plan G, Plan N, and High Deductible Plan G for West Palm Beach, Boca Raton, Delray Beach, and all Palm Beach cities.
              Work with local specialists who understand Florida's largest Medicare market. No network restrictions, nationwide coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Get Free Quote
              </Link>
              <Link
                href="/medicare-supplement"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📊 Compare All Plans
              </Link>
            </div>
          </div>
        </section>

      </div>
      </main>
    </>
  )
}
