import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicarePartDFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Broward County Medicare Part D Plans 2025 - Fort Lauderdale Prescription Drug Coverage | El-Mag Insurance',
  description: 'Broward County Medicare Part D guide: Compare prescription drug plans for 280,000+ enrollees. Fort Lauderdale, Pembroke Pines, Hollywood pharmacy networks. Formulary lookup.',
  keywords: 'Broward County Medicare Part D, Fort Lauderdale prescription drug plans, Pembroke Pines Part D, Hollywood pharmacy coverage, Coral Springs Medicare drug plans, Pompano Beach Part D, CVS pharmacy Broward, Walgreens Part D coverage',
  openGraph: {
    title: 'Broward County Medicare Part D - Prescription Drug Coverage 2025',
    description: 'Compare Medicare Part D prescription drug plans for Broward County\'s 280,000+ enrollees with comprehensive pharmacy networks in Fort Lauderdale and beyond.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-part-d-broward-county',
  },
}

const browardPartDData = {
  totalBeneficiaries: 365000,
  partDEnrollment: 280000,
  averageMonthlyPremium: 44,
  majorPharmacies: 620,
  averagePrescriptions: 8.2,
  extraHelpEligible: 58000
}

const browardPartDStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-part-d-broward-county',
  pageTitle: 'Broward County Medicare Part D Plans 2025 - Fort Lauderdale Prescription Drug Coverage',
  pageDescription: 'Broward County Medicare Part D guide: Compare prescription drug plans for 280,000+ enrollees. Fort Lauderdale, Pembroke Pines, Hollywood pharmacy networks. Formulary lookup.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'medicare-part-d',
  totalBeneficiaries: 280000,
  averagePremium: 44,
  faqs: getMedicarePartDFAQs('Broward County', 'Florida', 620)
})

export default function BrowardCountyMedicarePartDPage() {
  React.useEffect(() => {
    // Initialize Broward County Part D landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('medicare-part-d-broward-county');
      });

      // Track page view with Broward County Part D context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Broward County Medicare Part D Plans 2025',
          page_location: window.location.href,
          page_path: '/medicare-part-d-broward-county',
          content_group: 'Medicare Part D County Landing Pages',
          county: 'Broward County',
          state: 'Florida',
          total_beneficiaries: 365000,
          part_d_enrollment: 280000,
          avg_monthly_premium: 44,
          major_pharmacies: 620,
          extra_help_eligible: 58000,
          page_type: 'part_d_county_landing',
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
              event_label: 'Broward County Part D - 25%',
              value: 25,
              page_section: 'pharmacy_network'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Part D - 50%',
              value: 50,
              page_section: 'coverage_tiers'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Part D - 75%',
              value: 75,
              page_section: 'extra_help_enrollment'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Broward County Part D - 90%',
              value: 90,
              page_section: 'resources_cta'
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
            event_label: 'Broward County Part D',
            value: timeSpent,
            engagement_threshold: 150,
            engaged: timeSpent >= 150
          });
        }
      };

      // Track formulary lookup link clicks
      const trackFormularyClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'formulary_lookup_click', {
            event_category: 'Part D Actions',
            event_label: 'Broward County Formulary Tool',
            value: 50,
            action_type: 'high_intent_conversion'
          });
        }
      };

      // Track Extra Help interest
      const trackExtraHelpClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'extra_help_interest', {
            event_category: 'Part D Actions',
            event_label: 'Broward County Extra Help',
            value: 45,
            action_type: 'subsidy_qualification'
          });
        }
      };

      // Attach event listeners to formulary and extra help links
      const formularyLinks = document.querySelectorAll('a[href*="formulary"]');
      formularyLinks.forEach(link => {
        link.addEventListener('click', trackFormularyClick);
      });

      const extraHelpLinks = document.querySelectorAll('a[href*="extra-help"], a[href*="lis-program"]');
      extraHelpLinks.forEach(link => {
        link.addEventListener('click', trackExtraHelpClick);
      });

      // Track on page unload
      window.addEventListener('beforeunload', trackTimeOnPage);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
        formularyLinks.forEach(link => {
          link.removeEventListener('click', trackFormularyClick);
        });
        extraHelpLinks.forEach(link => {
          link.removeEventListener('click', trackExtraHelpClick);
        });
      };
    }
  }, [])

  return (
    <>
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Part D Broward County Florida"
        county="Broward County"
        state="Florida"
        demographics={{
          avgAge: 71,
          maPenetrationRate: 51,
        }}
        keyMetrics={{
          totalBeneficiaries: browardPartDData.totalBeneficiaries,
          partDEnrollment: browardPartDData.partDEnrollment,
          averagePremium: browardPartDData.averageMonthlyPremium,
          pageType: 'part_d_county',
          productType: 'medicare_part_d'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(browardPartDStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">💊 BROWARD COUNTY: South Florida's Premier Part D Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Broward County Medicare Part D Plans 2025: Fort Lauderdale Prescription Drug Coverage
          </h1>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">💊</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-green-800 mb-2">
                  Broward County: 280,000+ Part D Enrollees, 620+ Pharmacy Locations
                </p>
                <p className="text-green-700">
                  Serving Broward County from <strong>Fort Lauderdale to Pompano Beach</strong> with comprehensive{' '}
                  <Link href="/medicare-part-d" className="text-green-900 underline hover:text-green-600">Medicare Part D prescription drug coverage</Link>.
                  Access <strong>620+ pharmacies</strong> including CVS, Walgreens, Publix, and local independent pharmacies with plans averaging{' '}
                  <strong>$44/month</strong>. Use our <Link href="/medicare-part-d-formulary-lookup" className="text-green-900 underline hover:text-green-600">formulary lookup tool</Link> to
                  check drug coverage and compare plans with <Link href="/specialists" className="text-green-900 underline hover:text-green-600">local specialists</Link> who understand South Florida's healthcare needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">280K+</div>
              <div className="text-green-800 font-semibold">Part D enrollees</div>
              <div className="text-green-600 text-sm mt-1">2nd largest FL market</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">620+</div>
              <div className="text-blue-800 font-semibold">Pharmacy locations</div>
              <div className="text-blue-600 text-sm mt-1">Countywide access</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$44</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Competitive rates</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8.2</div>
              <div className="text-orange-800 font-semibold">Avg prescriptions</div>
              <div className="text-orange-600 text-sm mt-1">Per beneficiary</div>
            </div>
          </div>
        </div>

        {/* Broward Pharmacy Network */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏪 Broward County Medicare Part D Pharmacy Network</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Major Pharmacy Chains (600+ Locations)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏪</span>
                  <span><strong>CVS Pharmacy:</strong> 180+ locations countywide, 24-hour stores, drive-thru service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏪</span>
                  <span><strong>Walgreens:</strong> 150+ locations, convenient hours, prescription delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏪</span>
                  <span><strong>Publix Pharmacy:</strong> 140+ supermarket pharmacies, free antibiotics program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏪</span>
                  <span><strong>Winn-Dixie Pharmacy:</strong> 35+ locations, competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏪</span>
                  <span><strong>Walmart Pharmacy:</strong> 25+ locations, $4 generic program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🏪</span>
                  <span><strong>Costco Pharmacy:</strong> 4 locations (Pembroke Pines, Pompano, Davie, Sunrise)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Pharmacy Network Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Preferred Pharmacies:</strong> Lower copays at network pharmacies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Mail Order:</strong> 90-day supply delivery, often lower cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>24/7 Access:</strong> Multiple 24-hour pharmacy locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Auto-Refill Programs:</strong> Never miss a prescription</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Bilingual Services:</strong> Spanish-speaking pharmacists available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Home Delivery:</strong> Available for mobility-limited seniors</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Pharmacy Network Tips for Broward Residents</h3>
            <p className="text-blue-700 mb-4">
              Broward County's extensive pharmacy network provides convenient access across all major cities. Most{' '}
              <Link href="/medicare-part-d" className="text-blue-900 underline hover:text-blue-600">Medicare Part D plans</Link> include
              CVS, Walgreens, and Publix as preferred pharmacies with lower copays. Independent pharmacies may also participate—check your
              plan's formulary. Consider mail-order for maintenance medications to save money. If you also need{' '}
              <Link href="/medicare-supplement-broward-county" className="text-blue-900 underline hover:text-blue-600">Medigap coverage</Link>, Part D
              pairs perfectly with Medicare Supplement plans.
            </p>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-sm text-blue-700 font-semibold mb-2">Compare Part D Coverage Across Florida:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-part-d" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Part D Overview</Link>
                <Link href="/medicare-part-d-formulary-lookup" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Formulary Lookup</Link>
                <Link href="/medicare-part-d-miami-dade-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Miami-Dade Part D</Link>
                <Link href="/medicare-extra-help" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Extra Help Program</Link>
                <Link href="/medicare-lis-program" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">LIS Program</Link>
              </div>
            </div>
          </div>
        </section>

        {/* City Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏙️ Broward County Part D Coverage by City</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Fort Lauderdale</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <div><strong>Part D Enrollees:</strong> 36,000+</div>
                <div><strong>Pharmacy Locations:</strong> 150+ (CVS, Walgreens, Publix)</div>
                <div><strong>24-Hour Pharmacies:</strong> 12 locations</div>
                <div><strong>Avg Premium:</strong> $45/month</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Pembroke Pines</h3>
              <div className="space-y-2 text-blue-700 text-sm">
                <div><strong>Part D Enrollees:</strong> 32,000+</div>
                <div><strong>Pharmacy Locations:</strong> 95+ (includes Costco)</div>
                <div><strong>24-Hour Pharmacies:</strong> 8 locations</div>
                <div><strong>Avg Premium:</strong> $43/month</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Hollywood</h3>
              <div className="space-y-2 text-purple-700 text-sm">
                <div><strong>Part D Enrollees:</strong> 28,000+</div>
                <div><strong>Pharmacy Locations:</strong> 85+ countywide</div>
                <div><strong>24-Hour Pharmacies:</strong> 6 locations</div>
                <div><strong>Avg Premium:</strong> $44/month</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Coral Springs</h3>
              <div className="space-y-2 text-orange-700 text-sm">
                <div><strong>Part D Enrollees:</strong> 24,000+</div>
                <div><strong>Pharmacy Locations:</strong> 65+ locations</div>
                <div><strong>24-Hour Pharmacies:</strong> 4 locations</div>
                <div><strong>Avg Premium:</strong> $42/month</div>
              </div>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Pompano Beach</h3>
              <div className="space-y-2 text-cyan-700 text-sm">
                <div><strong>Part D Enrollees:</strong> 21,000+</div>
                <div><strong>Pharmacy Locations:</strong> 55+ (includes Costco)</div>
                <div><strong>24-Hour Pharmacies:</strong> 5 locations</div>
                <div><strong>Avg Premium:</strong> $44/month</div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Plantation & Sunrise</h3>
              <div className="space-y-2 text-teal-700 text-sm">
                <div><strong>Part D Enrollees:</strong> 26,000+</div>
                <div><strong>Pharmacy Locations:</strong> 75+ (includes Costco)</div>
                <div><strong>24-Hour Pharmacies:</strong> 7 locations</div>
                <div><strong>Avg Premium:</strong> $43/month</div>
              </div>
            </div>
          </div>
        </section>

        {/* Part D Coverage Tiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💊 Understanding Medicare Part D Coverage Tiers in Broward County</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How Part D Formulary Tiers Work</h3>
            <p className="text-gray-700 mb-6">
              Medicare Part D plans organize medications into tiers, with lower tiers having lower copays. Understanding your tier structure
              helps you save money on prescriptions. Use our <Link href="/medicare-part-d-formulary-lookup" className="text-blue-600 underline hover:text-blue-800">formulary lookup tool</Link> to
              check which tier your medications fall into.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-green-800">Tier 1: Preferred Generic</span>
                    <span className="ml-auto text-green-600 font-bold">$0-$10</span>
                  </div>
                  <p className="text-sm text-green-700">Lowest cost drugs, typically generic medications. Examples: metformin, lisinopril, atorvastatin</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-blue-800">Tier 2: Generic</span>
                    <span className="ml-auto text-blue-600 font-bold">$10-$20</span>
                  </div>
                  <p className="text-sm text-blue-700">Other generic drugs not in Tier 1. Still affordable, moderate copays</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-purple-800">Tier 3: Preferred Brand</span>
                    <span className="ml-auto text-purple-600 font-bold">$35-$50</span>
                  </div>
                  <p className="text-sm text-purple-700">Preferred brand-name drugs. Higher copay but often better than Tier 4</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-orange-800">Tier 4: Non-Preferred</span>
                    <span className="ml-auto text-orange-600 font-bold">$50-$100</span>
                  </div>
                  <p className="text-sm text-orange-700">Non-preferred brand drugs and higher-cost generics. Higher out-of-pocket costs</p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-red-800">Tier 5: Specialty Drugs</span>
                    <span className="ml-auto text-red-600 font-bold">25-33%</span>
                  </div>
                  <p className="text-sm text-red-700">High-cost specialty medications (biologics, cancer drugs). Coinsurance typically 25-33% of drug cost</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Cost-Saving Tip:</strong> Ask your doctor if a lower-tier alternative exists for your medications.
                    Generic equivalents can save hundreds per month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Gap (Donut Hole) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🔄 Part D Coverage Gap: What Broward Residents Need to Know</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">2025 Part D Coverage Stages</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-gray-900">Stage 1: Deductible ($545)</p>
                  <p className="text-sm text-gray-600">Pay full cost until you meet the deductible (if applicable)</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-semibold text-gray-900">Stage 2: Initial Coverage</p>
                  <p className="text-sm text-gray-600">Pay copay/coinsurance until total drug costs reach $5,030</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-semibold text-gray-900">Stage 3: Coverage Gap (Donut Hole)</p>
                  <p className="text-sm text-gray-600">Pay 25% for brand and generic drugs until out-of-pocket hits $8,000</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <p className="font-semibold text-gray-900">Stage 4: Catastrophic Coverage</p>
                  <p className="text-sm text-gray-600">Pay $0 or minimal copay (greater of $4.50 generic/$11.20 brand or 5%)</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Closing the Gap Strategies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💡</span>
                  <span><strong>Generic Substitution:</strong> Switch to generics to reduce costs in the gap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💡</span>
                  <span><strong>Manufacturer Discounts:</strong> 70% discount on brand drugs in the gap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💡</span>
                  <span><strong>Extra Help Program:</strong> Low-income subsidy eliminates coverage gap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💡</span>
                  <span><strong>Mail Order:</strong> 90-day supply can reduce total costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💡</span>
                  <span><strong>Patient Assistance:</strong> Pharmaceutical company programs available</span>
                </li>
              </ul>
              <div className="mt-4 bg-white p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>58,000+ Broward seniors</strong> qualify for Extra Help but haven't enrolled. Check your eligibility at{' '}
                  <Link href="/medicare-extra-help" className="text-blue-600 underline hover:text-blue-800">Medicare Extra Help</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Medications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💊 Common Medications & Part D Coverage in Broward County</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-4">❤️ Cardiovascular</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex justify-between">
                  <span>Atorvastatin (Lipitor)</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Lisinopril</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Metoprolol</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Amlodipine</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Eliquis (brand)</span>
                  <span className="font-semibold">Tier 3-4</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 mb-4">🩺 Diabetes</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex justify-between">
                  <span>Metformin</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Glipizide</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Insulin (generic)</span>
                  <span className="font-semibold">Tier 2-3</span>
                </li>
                <li className="flex justify-between">
                  <span>Lantus (brand)</span>
                  <span className="font-semibold">Tier 3</span>
                </li>
                <li className="flex justify-between">
                  <span>Ozempic (brand)</span>
                  <span className="font-semibold">Tier 3-4</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-purple-800 mb-4">🫁 Respiratory</h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li className="flex justify-between">
                  <span>Albuterol inhaler</span>
                  <span className="font-semibold">Tier 1-2</span>
                </li>
                <li className="flex justify-between">
                  <span>Montelukast</span>
                  <span className="font-semibold">Tier 1</span>
                </li>
                <li className="flex justify-between">
                  <span>Fluticasone</span>
                  <span className="font-semibold">Tier 2</span>
                </li>
                <li className="flex justify-between">
                  <span>Advair (brand)</span>
                  <span className="font-semibold">Tier 3</span>
                </li>
                <li className="flex justify-between">
                  <span>Spiriva (brand)</span>
                  <span className="font-semibold">Tier 3-4</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-yellow-800 mb-2">🔍 Check Your Medications</h3>
            <p className="text-yellow-700 mb-4">
              Every Part D plan has a unique formulary. Use our <Link href="/medicare-part-d-formulary-lookup" className="text-yellow-900 underline hover:text-yellow-700">formulary lookup tool</Link> to
              check if your specific medications are covered and which tier they're in. Don't assume—verify before enrolling!
            </p>
          </div>
        </section>

        {/* Extra Help Program */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Medicare Extra Help (LIS) for Broward County Residents</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What is Extra Help?</h3>
            <p className="text-gray-700 mb-4">
              Extra Help (also called Low-Income Subsidy or LIS) is a federal program that helps pay Medicare Part D costs for people with
              limited income and resources. <strong>58,000+ Broward County seniors qualify</strong> but haven't enrolled, missing out on
              significant savings.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-3">2025 Income Limits (Broward County)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>Individual:</span>
                    <span className="font-semibold">$23,0</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Married (living together):</span>
                    <span className="font-semibold">$31,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Resource limit (individual):</span>
                    <span className="font-semibold">$17,220</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Resource limit (married):</span>
                    <span className="font-semibold">$34,360</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-3">Extra Help Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>$0 monthly premium</strong> (most plans)</li>
                  <li>✓ <strong>$0 deductible</strong></li>
                  <li>✓ <strong>Low copays:</strong> $0-$4.50 generic, $0-$11.20 brand</li>
                  <li>✓ <strong>No coverage gap</strong> (donut hole eliminated)</li>
                  <li>✓ <strong>Automatic enrollment</strong> in low-cost plans</li>
                  <li>✓ <strong>Special Enrollment Period</strong> year-round</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-blue-50 p-4 rounded">
              <p className="text-sm text-blue-800">
                <strong>Apply for Extra Help:</strong> Contact Social Security at 1-800-772-1213 or apply online. Our{' '}
                <Link href="/specialists" className="text-blue-900 underline hover:text-blue-700">local specialists</Link> can help with the application process.
                Learn more at <Link href="/medicare-extra-help" className="text-blue-900 underline hover:text-blue-700">Medicare Extra Help</Link> or
                the <Link href="/medicare-lis-program" className="text-blue-900 underline hover:text-blue-700">Low-Income Subsidy program</Link>. With 58,000 eligible
                Broward residents, this program provides significant prescription savings.
              </p>
            </div>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Broward County Medicare Part D Enrollment Periods</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">When You Can Enroll</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800 mb-2">Initial Enrollment Period (IEP)</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 3 months before turning 65</li>
                    <li>• Your birth month</li>
                    <li>• 3 months after turning 65</li>
                    <li>• <strong>7-month window total</strong></li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Annual Enrollment Period (AEP)</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>October 15 - December 7</strong> every year</li>
                    <li>• Switch plans or join Part D</li>
                    <li>• Coverage starts January 1</li>
                    <li>• Most popular enrollment window</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-800 mb-2">Special Enrollment Period (SEP)</p>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Move to new service area</li>
                    <li>• Lose employer coverage</li>
                    <li>• Qualify for Extra Help</li>
                    <li>• Plan leaves your area</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Late Enrollment Penalty</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">How the Penalty Works:</p>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>1% of national base premium</strong> per month</li>
                    <li>• Multiply by months without coverage</li>
                    <li>• Added to premium for life</li>
                    <li>• 2025 base premium: $34.70</li>
                    <li>• Example: 12 months late = $4.16/month penalty forever</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">Avoiding the Penalty:</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>✓ Enroll during Initial Enrollment Period</li>
                    <li>✓ Maintain creditable drug coverage (employer, VA, TRICARE)</li>
                    <li>✓ Keep proof of creditable coverage</li>
                    <li>✓ Enroll within 63 days of losing coverage</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ Important:</strong> Even if you don't take medications now, enroll in Part D to avoid the penalty.
                    Plans start at $0-$10/month with Extra Help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">⏰ Enrollment Deadlines for Broward Residents</h3>
            <p className="text-blue-700">
              The <strong>Annual Enrollment Period (October 15 - December 7)</strong> is the best time to compare Part D plans.
              Pharmacy networks, formularies, and costs change every year. Review your current plan annually to ensure it still covers
              your medications at the best price. Our <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">Broward specialists</Link> offer
              free plan comparisons during AEP. Learn more about <Link href="/resources/enrollment-periods-explained" className="text-blue-900 underline hover:text-blue-600">Medicare enrollment periods</Link>.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">💊 Get Expert Medicare Part D Guidance in Broward County</p>
            <p className="text-green-100 mb-6 max-w-3xl mx-auto">
              Compare Medicare Part D prescription drug plans for Fort Lauderdale, Pembroke Pines, Hollywood, and all Broward cities.
              Check formulary coverage, find preferred pharmacies, and maximize your prescription savings with local specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                📞 Compare Part D Plans
              </Link>
              <Link
                href="/medicare-part-d-formulary-lookup"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                🔍 Check Drug Coverage
              </Link>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Broward County Medicare Part D Resources</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Part D Plan Resources</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <Link href="/medicare-part-d" className="underline hover:text-green-900">Medicare Part D Overview</Link></li>
                <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-green-900">Formulary Lookup Tool</Link></li>
                <li>• <Link href="/medicare-extra-help" className="underline hover:text-green-900">Extra Help (LIS) Program</Link></li>
                <li>• <Link href="/medicare-lis-program" className="underline hover:text-green-900">Low-Income Subsidy Details</Link></li>
                <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-green-900">Prescription Drug Coverage Guide</Link></li>
                <li>• <Link href="/resources/understanding-costs" className="underline hover:text-green-900">Understanding Part D Costs</Link></li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Broward County Services</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-blue-900">Local Part D Specialists</Link></li>
                <li>• <Link href="/contact" className="underline hover:text-blue-900">Free Plan Comparison</Link></li>
                <li>• <Link href="/medicare-cost-calculator" className="underline hover:text-blue-900">Part D Cost Calculator</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Enrollment Periods Guide</Link></li>
                <li>• <Link href="/medicare-supplement-broward-county" className="underline hover:text-blue-900">Broward Medigap Plans</Link></li>
                <li>• <Link href="/medicare-supplement" className="underline hover:text-blue-900">Medicare Supplement Overview</Link></li>
                <li>• <Link href="/medicare-advantage" className="underline hover:text-blue-900">Compare with Medicare Advantage</Link></li>
                <li>• <Link href="/resources/dental-vision-benefits" className="underline hover:text-blue-900">Dental & Vision Benefits</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Part D Coverage Across South Florida</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Florida Part D Coverage:</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• <Link href="/medicare-part-d" className="underline hover:text-green-900">Florida Part D Overview</Link></li>
                  <li>• <Link href="/medicare-part-d-miami-dade-county" className="underline hover:text-green-900">Miami-Dade Part D</Link></li>
                  <li>• <Link href="/medicare-part-d-broward-county" className="underline hover:text-green-900">Broward County Part D</Link></li>
                  <li>• Palm Beach Part D (Coming Soon)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Broward Medicare Coverage:</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <Link href="/medicare-supplement-broward-county" className="underline hover:text-blue-900">Broward Medigap Plans</Link></li>
                  <li>• <Link href="/medicare-supplement-miami-dade-county" className="underline hover:text-blue-900">Miami-Dade Medigap</Link></li>
                  <li>• <Link href="/medicare-supplement-florida" className="underline hover:text-blue-900">Florida Medigap Guide</Link></li>
                  <li>• <Link href="/medicare-advantage" className="underline hover:text-blue-900">Medicare Advantage Plans</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Part D Tools & Help:</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-purple-900">Drug Coverage Lookup</Link></li>
                  <li>• <Link href="/medicare-extra-help" className="underline hover:text-purple-900">Extra Help (58K eligible)</Link></li>
                  <li>• <Link href="/medicare-cost-calculator" className="underline hover:text-purple-900">Cost Calculator</Link></li>
                  <li>• <Link href="/contact" className="underline hover:text-purple-900">Schedule Consultation</Link></li>
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
