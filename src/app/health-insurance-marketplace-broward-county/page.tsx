import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMarketplaceFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Broward County Health Insurance Marketplace 2025 - Fort Lauderdale ACA Plans & Subsidies | El-Mag Insurance',
  description: 'Broward County Health Insurance Marketplace guide: Compare 2025 ACA plans for 325,000+ residents. $0 premium plans, subsidy calculator, Fort Lauderdale enrollment assistance.',
  keywords: 'Broward County health insurance marketplace, ACA plans Fort Lauderdale, Obamacare Broward, affordable health insurance Pembroke Pines, Hollywood marketplace plans, subsidized health insurance Broward, zero premium plans Fort Lauderdale',
  openGraph: {
    title: 'Broward County Health Insurance Marketplace 2025 - ACA Plans & Subsidies',
    description: 'Find affordable health insurance in Broward County with ACA Marketplace plans, subsidies up to 100%, and local enrollment support.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/health-insurance-marketplace-broward-county',
  },
}

const browardMarketplaceData = {
  totalPopulation: 1952778,
  uninsuredRate: 14.8,
  marketplaceEnrollees: 195000,
  averageSubsidy: 465,
  zeroPremiumEligible: 65,
  openEnrollmentStart: 'November 1, 2025',
  openEnrollmentEnd: 'January 15, 2026'
}

const browardMarketplaceStructuredData = generateCountyMedicareSchema({
  pagePath: '/health-insurance-marketplace-broward-county',
  pageTitle: 'Broward County Health Insurance Marketplace 2025 - Fort Lauderdale ACA Plans & Subsidies',
  pageDescription: 'Broward County Health Insurance Marketplace guide: Compare 2025 ACA plans for 325,000+ residents. $0 premium plans, subsidy calculator, Fort Lauderdale enrollment assistance.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'health-insurance-marketplace',
  totalBeneficiaries: 195000,
  averagePremium: 445,
  faqs: getMarketplaceFAQs('Broward County', 'Florida', 65, 465)
})

export default function BrowardMarketplacePage() {
  React.useEffect(() => {
    // Initialize Broward County Marketplace landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('health-insurance-marketplace-broward-county');
      });

      // Track page view with Broward County Marketplace context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Broward County Health Insurance Marketplace 2025',
          page_location: window.location.href,
          page_path: '/health-insurance-marketplace-broward-county',
          content_group: 'Health Insurance Marketplace County Landing Pages',
          county: 'Broward County',
          state: 'Florida',
          total_population: 1952778,
          marketplace_enrollees: 195000,
          uninsured_rate: 14.8,
          avg_subsidy: 465,
          zero_premium_eligible: 65,
          page_type: 'marketplace_county_landing',
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

        // Track at 25%, 50%, 75%, 90% milestones
        if (scrollPercent >= 25 && scrollDepth < 25) {
          scrollDepth = 25;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward Marketplace - 25%',
              value: 25,
              page_section: 'open_enrollment_alert'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward Marketplace - 50%',
              value: 50,
              page_section: 'plan_types_zero_premium'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward Marketplace - 75%',
              value: 75,
              page_section: 'subsidy_eligibility'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward Marketplace - 90%',
              value: 90,
              page_section: 'resources_cta'
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page (engagement threshold: 180 seconds)
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Broward Marketplace',
            value: timeSpent,
            engagement_threshold: 180,
            engaged: timeSpent >= 180
          });
        }
      };

      // Track subsidy calculator clicks
      const trackSubsidyCalculatorClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'subsidy_calculator_click', {
            event_category: 'Marketplace Actions',
            event_label: 'Broward Subsidy Check',
            value: 65,
            action_type: 'high_intent_conversion'
          });
        }
      };

      // Track zero premium interest
      const trackZeroPremiumClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'zero_premium_interest', {
            event_category: 'Marketplace Actions',
            event_label: 'Broward $0 Premium Plans',
            value: 85,
            action_type: 'zero_premium_qualification',
            eligible_percentage: 65
          });
        }
      };

      // Attach event listeners to subsidy calculator links
      const subsidyLinks = document.querySelectorAll('a[href*="subsidy"], a[href*="subsidies"]');
      subsidyLinks.forEach(link => {
        link.addEventListener('click', trackSubsidyCalculatorClick);
      });

      // Track on page unload
      window.addEventListener('beforeunload', trackTimeOnPage);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
        subsidyLinks.forEach(link => {
          link.removeEventListener('click', trackSubsidyCalculatorClick);
        });
      };
    }
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Health Insurance Marketplace Broward County Florida"
        county="Broward County"
        state="Florida"
        demographics={{
          avgAge: 42,
        }}
        keyMetrics={{
          totalBeneficiaries: browardMarketplaceData.marketplaceEnrollees,
          averagePremium: 445,
          pageType: 'marketplace_county',
          productType: 'health_insurance_marketplace'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(browardMarketplaceStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏥 BROWARD COUNTY: South Florida's Premier ACA Marketplace</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Broward County Health Insurance Marketplace 2025: Fort Lauderdale ACA Plans & Subsidies
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Broward County: 195,000+ Marketplace Enrollees, 65% Eligible for $0 Premiums
                </p>
                <p className="text-blue-700">
                  Serving Broward County from <strong>Fort Lauderdale to Pompano Beach</strong> with comprehensive{' '}
                  <Link href="/health-insurance-marketplace/plans" className="text-blue-900 underline hover:text-blue-600">ACA Marketplace health insurance plans</Link>.
                  Access <strong>$0 premium coverage</strong> for 65% of eligible residents,{' '}
                  <Link href="/health-insurance-marketplace/subsidies" className="text-blue-900 underline hover:text-blue-600">subsidies averaging $465/month</Link>,
                  and <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">local enrollment specialists</Link> who understand South Florida's unique healthcare needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">195K+</div>
              <div className="text-blue-800 font-semibold">Marketplace enrollees</div>
              <div className="text-blue-600 text-sm mt-1">2nd largest FL market</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
              <div className="text-green-800 font-semibold">$0 premium eligible</div>
              <div className="text-green-600 text-sm mt-1">With subsidies</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$465</div>
              <div className="text-purple-800 font-semibold">Average subsidy</div>
              <div className="text-purple-600 text-sm mt-1">Per month savings</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">14.8%</div>
              <div className="text-orange-800 font-semibold">Uninsured rate</div>
              <div className="text-orange-600 text-sm mt-1">290K+ eligible</div>
            </div>
          </div>
        </div>

        {/* 2025 Open Enrollment Alert */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">⏰</span>
              <div>
                <h2 className="text-2xl font-bold mb-3">2025 Broward County Health Insurance Marketplace Open Enrollment</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-lg font-semibold mb-2">📅 Enrollment Period:</p>
                    <p className="text-white/90">November 1, 2025 - January 15, 2026</p>
                    <p className="text-sm text-white/80 mt-1">Coverage starts: January 1, 2026</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">⚡ Quick Action Required:</p>
                    <p className="text-white/90">Enroll by December 15 for January 1 coverage</p>
                    <p className="text-sm text-white/80 mt-1">After Jan 15: Special Enrollment Period only</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link href="/contact" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50">
                    📞 Enroll Now
                  </Link>
                  <Link href="/health-insurance-marketplace/subsidies" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30">
                    💰 Check Eligibility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Broward Marketplace Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Broward County ACA Marketplace Health Insurance Plans</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🌟 Available Plan Types</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🥉</span>
                  <span><strong>Bronze Plans:</strong> Low premium, higher deductible ($8,500+ deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🥈</span>
                  <span><strong>Silver Plans:</strong> <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">Best for subsidies</Link>, moderate costs ($6,000 deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🥇</span>
                  <span><strong>Gold Plans:</strong> <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">Lower out-of-pocket</Link>, higher premium ($2,500 deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💎</span>
                  <span><strong>Platinum Plans:</strong> Comprehensive coverage, lowest out-of-pocket</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">💰 Zero Premium Plans</h3>
              <p className="text-gray-700 mb-4">
                <strong>65% of Broward residents qualify for $0 premium plans</strong> with enhanced subsidies. Your monthly premium could be $0 if:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Individual income under $41,000</li>
                <li>✓ Family of 4 income under $84,000</li>
                <li>✓ Household income 100-150% of poverty level</li>
                <li>✓ Eligible for enhanced premium tax credits</li>
              </ul>
              <div className="mt-4 bg-white p-3 rounded">
                <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 font-semibold underline hover:text-blue-600">
                  Calculate Your Subsidy →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">💡 Broward Marketplace Advantage</h3>
            <p className="text-green-700 mb-4">
              Broward County's ACA Marketplace offers comprehensive coverage through major providers including Molina, Ambetter, Oscar, and Cigna.
              All plans cover <Link href="/resources/dental-vision-benefits" className="text-green-900 underline hover:text-green-700">essential health benefits</Link> including
              preventive care, emergency services, prescription drugs, and maternity care. Compare plans and enroll with{' '}
              <Link href="/specialists" className="text-green-900 underline hover:text-green-700">local specialists</Link> who understand Broward's healthcare landscape.
              For seniors 65+, explore <Link href="/medicare-supplement-broward-county" className="text-green-900 underline hover:text-green-700">Medicare Supplement options</Link> instead.
            </p>
            <div className="border-t border-green-200 pt-3">
              <p className="text-sm text-green-700 font-semibold mb-2">Compare Florida ACA Coverage:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/health-insurance-marketplace/plans" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Marketplace Plans</Link>
                <Link href="/health-insurance-marketplace/subsidies" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Subsidy Calculator</Link>
                <Link href="/health-insurance-marketplace-miami-dade-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Miami-Dade Marketplace</Link>
                <Link href="/health-insurance-marketplace/enrollment" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Enrollment Guide</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Broward County Health Insurance Marketplace Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">ACA Marketplace Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/health-insurance-marketplace/plans" className="underline hover:text-blue-900">ACA Marketplace Plans</Link></li>
                <li>• <Link href="/health-insurance-marketplace/subsidies" className="underline hover:text-blue-900">Subsidy Calculator & Eligibility</Link></li>
                <li>• <Link href="/health-insurance-marketplace/enrollment" className="underline hover:text-blue-900">Enrollment Guide & Periods</Link></li>
                <li>• <Link href="/resources/dental-vision-benefits" className="underline hover:text-blue-900">Essential Health Benefits</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-blue-900">Understanding ACA Costs</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Open & Special Enrollment</Link></li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Broward County Services</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-green-900">Local ACA Enrollment Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-green-900">Free Plan Comparison</Link></li>
                <li>• <Link href="/medicare-supplement-broward-county" className="underline hover:text-green-900">Medicare for Seniors 65+</Link></li>
                <li>• <Link href="/medicare-part-d-broward-county" className="underline hover:text-green-900">Prescription Drug Coverage</Link></li>
                <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-green-900">Plan Quality Ratings</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Health Insurance Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Florida ACA Marketplaces:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/health-insurance-marketplace/plans" className="underline hover:text-blue-900">Florida ACA Overview</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-broward-county" className="underline hover:text-blue-900">Broward County</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-miami-dade-county" className="underline hover:text-blue-900">Miami-Dade County</Link></li>
                  <li>• Palm Beach County (Coming Soon)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Broward Medicare Options:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/medicare-supplement-broward-county" className="underline hover:text-green-900">Broward Medigap Plans</Link></li>
                  <li>• <Link href="/medicare-part-d-broward-county" className="underline hover:text-green-900">Broward Part D Plans</Link></li>
                  <li>• <Link href="/medicare-advantage" className="underline hover:text-green-900">Medicare Advantage</Link></li>
                  <li>• <Link href="/medicare-supplement" className="underline hover:text-green-900">Medicare Supplement Overview</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Enrollment Tools:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/health-insurance-marketplace/subsidies" className="underline hover:text-purple-900">Subsidy Calculator</Link></li>
                  <li>• <Link href="/health-insurance-marketplace/enrollment" className="underline hover:text-purple-900">Enrollment Checklist</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Schedule Consultation</Link></li>
                  <li>• <Link href="/specialists" className="underline hover:text-purple-900">Find Local Help</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏥 Get Expert ACA Marketplace Help in Broward County</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Compare 2025 ACA Marketplace plans for Fort Lauderdale, Pembroke Pines, Hollywood, and all Broward cities.
              65% of residents qualify for $0 premiums. Check your subsidy eligibility and enroll with local specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Enroll Now
              </Link>
              <Link
                href="/health-insurance-marketplace/subsidies"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                💰 Check Subsidy Eligibility
              </Link>
            </div>
          </div>
        </section>

      </div>
      </main>
    </>
  )
}
