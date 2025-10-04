import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMarketplaceFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Palm Beach County Health Insurance Marketplace 2025 - West Palm Beach ACA Plans & Subsidies | El-Mag Insurance',
  description: 'Palm Beach County Health Insurance Marketplace guide: Compare 2025 ACA plans for 385,000+ residents. $0 premium plans, subsidy calculator, West Palm Beach enrollment assistance.',
  keywords: 'Palm Beach County health insurance marketplace, ACA plans West Palm Beach, Obamacare Palm Beach, affordable health insurance Boca Raton, Delray Beach marketplace plans, subsidized health insurance Palm Beach, zero premium plans West Palm Beach',
  openGraph: {
    title: 'Palm Beach County Health Insurance Marketplace 2025 - ACA Plans & Subsidies',
    description: 'Find affordable health insurance in Palm Beach County with ACA Marketplace plans, subsidies up to 100%, and local enrollment support.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/health-insurance-marketplace-palm-beach-county',
  },
}

const palmBeachMarketplaceData = {
  totalPopulation: 1496770,
  uninsuredRate: 13.2,
  marketplaceEnrollees: 240000,
  averageSubsidy: 485,
  zeroPremiumEligible: 68,
  openEnrollmentStart: 'November 1, 2025',
  openEnrollmentEnd: 'January 15, 2026'
}

const palmBeachMarketplaceStructuredData = generateCountyMedicareSchema({
  pagePath: '/health-insurance-marketplace-palm-beach-county',
  pageTitle: 'Palm Beach County Health Insurance Marketplace 2025 - West Palm Beach ACA Plans & Subsidies',
  pageDescription: 'Palm Beach County Health Insurance Marketplace guide: Compare 2025 ACA plans for 385,000+ residents. $0 premium plans, subsidy calculator, West Palm Beach enrollment assistance.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'health-insurance-marketplace',
  totalBeneficiaries: 240000,
  averagePremium: 450,
  faqs: getMarketplaceFAQs('Palm Beach County', 'Florida', 68, 485)
})

export default function PalmBeachMarketplacePage() {
  React.useEffect(() => {
    // Initialize Palm Beach County Marketplace landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('health-insurance-marketplace-palm-beach-county');
      });

      // Track page view with Palm Beach County Marketplace context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Palm Beach County Health Insurance Marketplace 2025',
          page_location: window.location.href,
          page_path: '/health-insurance-marketplace-palm-beach-county',
          content_group: 'Health Insurance Marketplace County Landing Pages',
          county: 'Palm Beach County',
          state: 'Florida',
          total_population: 1496770,
          marketplace_enrollees: 240000,
          uninsured_rate: 13.2,
          avg_subsidy: 485,
          zero_premium_eligible: 68,
          page_type: 'marketplace_county_landing',
          market_rank: 'largest_fl_county_marketplace'
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
              event_label: 'Palm Beach Marketplace - 25%',
              value: 25,
              page_section: 'open_enrollment_alert'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach Marketplace - 50%',
              value: 50,
              page_section: 'plan_types_zero_premium'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach Marketplace - 75%',
              value: 75,
              page_section: 'subsidy_eligibility'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach Marketplace - 90%',
              value: 90,
              page_section: 'resources_cta'
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page (engagement threshold: 185 seconds)
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Palm Beach Marketplace',
            value: timeSpent,
            engagement_threshold: 185,
            engaged: timeSpent >= 185
          });
        }
      };

      // Track subsidy calculator clicks
      const trackSubsidyCalculatorClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'subsidy_calculator_click', {
            event_category: 'Marketplace Actions',
            event_label: 'Palm Beach Subsidy Check',
            value: 70,
            action_type: 'high_intent_conversion'
          });
        }
      };

      // Track zero premium interest
      const trackZeroPremiumClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'zero_premium_interest', {
            event_category: 'Marketplace Actions',
            event_label: 'Palm Beach $0 Premium Plans',
            value: 90,
            action_type: 'zero_premium_qualification',
            eligible_percentage: 68
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
        pageTitle="Health Insurance Marketplace Palm Beach County Florida"
        county="Palm Beach County"
        state="Florida"
        demographics={{
          avgAge: 48,
        }}
        keyMetrics={{
          totalBeneficiaries: palmBeachMarketplaceData.marketplaceEnrollees,
          averagePremium: 385,
          pageType: 'marketplace_county',
          productType: 'health_insurance_marketplace'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(palmBeachMarketplaceStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">🏥 PALM BEACH COUNTY: Florida's Premier ACA Marketplace</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Palm Beach County Health Insurance Marketplace 2025: West Palm Beach ACA Plans & Subsidies
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Palm Beach: 240,000+ Marketplace Enrollees, 68% Eligible for $0 Premiums
                </p>
                <p className="text-blue-700">
                  Serving Palm Beach County from <strong>West Palm Beach to Boca Raton</strong> with comprehensive{' '}
                  <Link href="/health-insurance-marketplace/plans" className="text-blue-900 underline hover:text-blue-600">ACA Marketplace health insurance plans</Link>.
                  Access <strong>$0 premium coverage</strong> for 68% of eligible residents (163,000+ people!),{' '}
                  <Link href="/health-insurance-marketplace/subsidies" className="text-blue-900 underline hover:text-blue-600">subsidies averaging $485/month</Link> (highest in Florida),
                  and <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">local enrollment specialists</Link> who understand Palm Beach's diverse healthcare needs.
                  <Link href="/resources/enrollment-periods-explained" className="text-blue-900 underline hover:text-blue-600">Open Enrollment runs November 1 - January 15</Link> annually.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">240K+</div>
              <div className="text-blue-800 font-semibold">Marketplace enrollees</div>
              <div className="text-blue-600 text-sm mt-1">Largest FL market</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">68%</div>
              <div className="text-green-800 font-semibold">$0 premium eligible</div>
              <div className="text-green-600 text-sm mt-1">163,000+ residents!</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$485</div>
              <div className="text-purple-800 font-semibold">Average subsidy</div>
              <div className="text-purple-600 text-sm mt-1">Per month savings</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">13.2%</div>
              <div className="text-orange-800 font-semibold">Uninsured rate</div>
              <div className="text-orange-600 text-sm mt-1">198K+ eligible</div>
            </div>
          </div>
        </div>

        {/* 2025 Open Enrollment Alert */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg">
            <div className="flex items-start">
              <span className="text-3xl mr-4">⏰</span>
              <div>
                <h2 className="text-2xl font-bold mb-3">2025 Palm Beach County Health Insurance Marketplace Open Enrollment</h2>
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
                  <Link href="/health-insurance-marketplace/enrollment" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30">
                    📋 Enrollment Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Palm Beach Marketplace Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏥 Palm Beach County ACA Marketplace Health Insurance Plans</h2>

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
                <strong>68% of Palm Beach residents qualify for $0 premium plans</strong> with enhanced subsidies. That's <strong>163,000+ people</strong> who could have $0 monthly premiums if:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Individual income under $43,000</li>
                <li>✓ Family of 4 income under $88,000</li>
                <li>✓ Household income 100-150% of <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">poverty level</Link></li>
                <li>✓ Eligible for <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">enhanced premium tax credits</Link></li>
              </ul>
              <div className="mt-4 bg-white p-3 rounded">
                <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 font-semibold underline hover:text-blue-600">
                  Calculate Your Subsidy →
                </Link>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                <Link href="/resources/understanding-costs" className="underline hover:text-blue-800">Learn about ACA cost-sharing reductions</Link> and <Link href="/health-insurance-marketplace/plans" className="underline hover:text-blue-800">Silver plan benefits</Link>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">💡 Palm Beach Marketplace Advantage</h3>
            <p className="text-green-700 mb-4">
              With 240,000+ Marketplace enrollees, Palm Beach County is <Link href="/health-insurance-marketplace/plans" className="text-green-900 underline hover:text-green-700">Florida's largest ACA Marketplace</Link>.
              Palm Beach's <strong>higher household incomes</strong> (avg $72,500) mean more residents qualify for substantial subsidies without hitting Medicaid eligibility.
              Major providers including Molina, Ambetter, Oscar, and Cigna offer comprehensive coverage.
              All plans cover <Link href="/resources/dental-vision-benefits" className="text-green-900 underline hover:text-green-700">essential health benefits</Link> including
              preventive care, emergency services, prescription drugs, and maternity care. Compare plans and enroll with{' '}
              <Link href="/specialists" className="text-green-900 underline hover:text-green-700">local specialists</Link> who understand Palm Beach's affluent yet diverse healthcare landscape.
              For seniors 65+, explore <Link href="/medicare-supplement-palm-beach-county" className="text-green-900 underline hover:text-green-700">Medicare Supplement options</Link> instead.
            </p>
            <div className="border-t border-green-200 pt-3">
              <p className="text-sm text-green-700 font-semibold mb-2">Compare Florida ACA Coverage:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/health-insurance-marketplace/plans" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Marketplace Plans</Link>
                <Link href="/health-insurance-marketplace/subsidies" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Subsidy Calculator</Link>
                <Link href="/health-insurance-marketplace-broward-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Broward Marketplace</Link>
                <Link href="/health-insurance-marketplace-miami-dade-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Miami-Dade Marketplace</Link>
                <Link href="/health-insurance-marketplace/enrollment" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Enrollment Guide</Link>
              </div>
            </div>
          </div>
        </section>

        {/* City Coverage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ ACA Marketplace Coverage Across Palm Beach County</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏢 West Palm Beach ACA Marketplace</h3>
              <p className="text-gray-700 mb-3">
                West Palm Beach leads with <strong>85,000+ Marketplace enrollees</strong>. Downtown professionals, Norton Museum district residents, and CityPlace workers access{' '}
                <Link href="/health-insurance-marketplace/plans" className="text-blue-800 underline hover:text-blue-600">comprehensive ACA plans</Link> with{' '}
                <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">$485 average subsidies</Link>.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>St. Mary's Medical Center</strong> network access</li>
                <li>• <strong>Good Samaritan Medical Center</strong> coverage</li>
                <li>• Young professional and family-focused plans</li>
                <li>• Downtown enrollment support available via <Link href="/specialists" className="text-blue-800 underline hover:text-blue-600">local specialists</Link></li>
              </ul>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🏖️ Boca Raton ACA Marketplace</h3>
              <p className="text-gray-700 mb-3">
                Boca Raton's <strong>58,000+ Marketplace enrollees</strong> include tech entrepreneurs and self-employed professionals. Despite higher incomes, many qualify for{' '}
                <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">substantial subsidies</Link> under expanded eligibility.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Boca Raton Regional Hospital</strong> premium networks</li>
                <li>• <Link href="/health-insurance-marketplace/plans" className="text-blue-800 underline hover:text-blue-600">Gold and Platinum plans</Link> for comprehensive coverage</li>
                <li>• High-income subsidy eligibility (up to $125K for families)</li>
                <li>• Specialized plans for <Link href="/resources/dental-vision-benefits" className="text-blue-800 underline hover:text-blue-600">dental and vision benefits</Link></li>
              </ul>
            </div>

            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🌴 Delray Beach ACA Marketplace</h3>
              <p className="text-gray-700 mb-3">
                Delray Beach serves <strong>32,000+ Marketplace enrollees</strong> with beach community focus. Atlantic Avenue businesses and seasonal residents access{' '}
                <Link href="/health-insurance-marketplace/plans" className="text-blue-800 underline hover:text-blue-600">flexible ACA plans</Link>.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Delray Medical Center</strong> network access</li>
                <li>• Seasonal coverage options for snowbirds</li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="text-blue-800 underline hover:text-blue-600">Special Enrollment Periods</Link> for life changes</li>
                <li>• Plans covering <Link href="/resources/understanding-costs" className="text-blue-800 underline hover:text-blue-600">preventive care and wellness</Link></li>
              </ul>
            </div>

            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">🐴 Wellington, Boynton Beach & Jupiter</h3>
              <p className="text-gray-700 mb-3">
                Combined <strong>65,000+ Marketplace enrollees</strong> across Wellington (equestrian community), Boynton Beach (family-focused), and Jupiter/Palm Beach Gardens (coastal affluent).
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Wellington: Equestrian industry self-employed coverage</li>
                <li>• Boynton Beach: Family plans with pediatric care</li>
                <li>• Jupiter/PBG: <strong>Jupiter Medical Center</strong> access</li>
                <li>• All cities: <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">$0 premium eligibility</Link> for 68% of residents</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">🏥 Major Hospital Networks in Palm Beach ACA Plans</h3>
            <p className="text-blue-700 mb-3">
              All <Link href="/health-insurance-marketplace/plans" className="text-blue-900 underline hover:text-blue-700">Palm Beach County ACA Marketplace plans</Link> include access to major hospital systems including{' '}
              <strong>Cleveland Clinic Florida (Weston)</strong>, <strong>JFK Medical Center</strong>, <strong>Bethesda Hospital East/West</strong>,
              <strong>St. Mary's Medical Center</strong>, <strong>Palm Beach Gardens Medical Center</strong>, and <strong>Wellington Regional Medical Center</strong>.
            </p>
            <p className="text-sm text-blue-700">
              Compare hospital networks and plan quality with <Link href="/resources/star-ratings-guide" className="text-blue-900 underline hover:text-blue-700">ACA plan star ratings</Link> or{' '}
              <Link href="/contact" className="text-blue-900 underline hover:text-blue-700">schedule a free consultation</Link> with our specialists.
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Palm Beach County Health Insurance Marketplace Resources</h2>

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
              <h3 className="text-xl font-semibold text-green-800 mb-4">Palm Beach County Services</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-green-900">Local ACA Enrollment Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-green-900">Free Plan Comparison</Link></li>
                <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-green-900">Medicare for Seniors 65+</Link></li>
                <li>• <Link href="/medicare-part-d-palm-beach-county" className="underline hover:text-green-900">Prescription Drug Coverage</Link></li>
                <li>• <Link href="/resources/star-ratings-guide" className="underline hover:text-green-900">Plan Quality Ratings</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ Special Enrollment Period (SEP) - Enroll Outside Open Enrollment</h3>
            <p className="text-gray-700 mb-3">
              Missed <Link href="/resources/enrollment-periods-explained" className="text-blue-800 underline hover:text-blue-600">Open Enrollment</Link>? You may qualify for{' '}
              <Link href="/resources/enrollment-periods-explained" className="text-blue-800 underline hover:text-blue-600">Special Enrollment Period</Link> if you experienced:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✓ Lost job-based health coverage</li>
                <li>✓ Got married or divorced</li>
                <li>✓ Had a baby or adopted a child</li>
                <li>✓ Moved to Palm Beach County</li>
              </ul>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✓ Lost Medicaid or CHIP coverage</li>
                <li>✓ Became a U.S. citizen</li>
                <li>✓ Released from incarceration</li>
                <li>✓ Income change affecting <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">subsidy eligibility</Link></li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              You typically have <strong>60 days</strong> from the qualifying event to enroll. <Link href="/contact" className="text-blue-800 underline hover:text-blue-600">Contact our specialists</Link> to verify SEP eligibility and enroll today.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Health Insurance Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Florida ACA Marketplaces:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/health-insurance-marketplace/plans" className="underline hover:text-blue-900">Florida ACA Overview</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-palm-beach-county" className="underline hover:text-blue-900">Palm Beach County</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-broward-county" className="underline hover:text-blue-900">Broward County</Link></li>
                  <li>• <Link href="/health-insurance-marketplace-miami-dade-county" className="underline hover:text-blue-900">Miami-Dade County</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Palm Beach Medicare Options:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-green-900">Palm Beach Medigap Plans</Link></li>
                  <li>• <Link href="/medicare-part-d-palm-beach-county" className="underline hover:text-green-900">Palm Beach Part D Plans</Link></li>
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

        {/* Plan Comparison & Other Options Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 ACA Marketplace vs. Other Health Insurance Options</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">When ACA Marketplace is Best:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ <strong>Self-employed or freelance workers</strong> without employer coverage</li>
                <li>✓ <strong>Income between $15,060 - $125,000+</strong> for <Link href="/health-insurance-marketplace/subsidies" className="text-blue-800 underline hover:text-blue-600">subsidy eligibility</Link></li>
                <li>✓ <strong>Lost job-based coverage</strong> during <Link href="/resources/enrollment-periods-explained" className="text-blue-800 underline hover:text-blue-600">Special Enrollment Period</Link></li>
                <li>✓ <strong>Need comprehensive coverage</strong> with <Link href="/resources/dental-vision-benefits" className="text-blue-800 underline hover:text-blue-600">essential health benefits</Link></li>
                <li>✓ <strong>Pre-existing conditions</strong> requiring guaranteed coverage</li>
              </ul>
            </div>

            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Other Coverage Options:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Age 65+:</strong> <Link href="/medicare-supplement-palm-beach-county" className="text-green-800 underline hover:text-green-600">Medicare Supplement (Medigap)</Link> + <Link href="/medicare-part-d-palm-beach-county" className="text-green-800 underline hover:text-green-600">Part D</Link></li>
                <li>• <strong>Limited income:</strong> Florida Medicaid (under $15,060 individual)</li>
                <li>• <strong>Employer coverage:</strong> Compare with <Link href="/health-insurance-marketplace/subsidies" className="text-green-800 underline hover:text-green-600">Marketplace subsidies</Link></li>
                <li>• <strong>Short-term needs:</strong> <Link href="/supplemental-insurance" className="text-green-800 underline hover:text-green-600">Supplemental insurance</Link> for gaps</li>
                <li>• <strong>International travel:</strong> <Link href="/trip-cancellation-insurance" className="text-green-800 underline hover:text-green-600">Travel insurance</Link> add-ons</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
            <h3 className="font-semibold text-purple-800 mb-2">💡 Palm Beach County Insurance Planning</h3>
            <p className="text-purple-700 text-sm">
              Our <Link href="/specialists" className="text-purple-900 underline hover:text-purple-700">local specialists</Link> help Palm Beach County residents navigate{' '}
              <Link href="/health-insurance-marketplace/plans" className="text-purple-900 underline hover:text-purple-700">ACA Marketplace plans</Link>,{' '}
              <Link href="/medicare-supplement-palm-beach-county" className="text-purple-900 underline hover:text-purple-700">Medicare Supplement</Link>,{' '}
              <Link href="/medicare-advantage" className="text-purple-900 underline hover:text-purple-700">Medicare Advantage</Link>, and{' '}
              <Link href="/supplemental-insurance" className="text-purple-900 underline hover:text-purple-700">supplemental coverage</Link>. We provide free plan comparisons,{' '}
              <Link href="/health-insurance-marketplace/subsidies" className="text-purple-900 underline hover:text-purple-700">subsidy calculations</Link>, and enrollment support across
              West Palm Beach, Boca Raton, Delray Beach, Wellington, Boynton Beach, and Jupiter. <Link href="/contact" className="text-purple-900 underline hover:text-purple-700">Schedule a consultation</Link> to find the best coverage for your needs and budget.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">🏥 Get Expert ACA Marketplace Help in Palm Beach County</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Compare 2025 ACA Marketplace plans for West Palm Beach, Boca Raton, Delray Beach, and all Palm Beach cities.
              68% of residents qualify for $0 premiums (163,000+ people). Check your subsidy eligibility and enroll with local specialists.
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
              <Link
                href="/health-insurance-marketplace/plans"
                className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                📋 Compare Plans
              </Link>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              Also serving: <Link href="/health-insurance-marketplace-broward-county" className="underline hover:text-white">Broward County</Link> | <Link href="/health-insurance-marketplace-miami-dade-county" className="underline hover:text-white">Miami-Dade County</Link> | <Link href="/health-insurance-marketplace/enrollment" className="underline hover:text-white">Enrollment Guide</Link> | <Link href="/resources" className="underline hover:text-white">Resources</Link>
            </p>
          </div>
        </section>

      </div>
      </main>
    </>
  )
}
