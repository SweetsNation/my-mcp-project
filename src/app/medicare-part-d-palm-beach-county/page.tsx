import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateCountyMedicareSchema, getMedicarePartDFAQs } from '@/lib/schema/county-medicare-schema'

export const metadata: Metadata = {
  title: 'Palm Beach County Medicare Part D Plans 2025 - West Palm Beach Prescription Drug Coverage | El-Mag Insurance',
  description: 'Palm Beach County Medicare Part D guide: Compare prescription drug plans for 350,000+ enrollees. West Palm Beach, Boca Raton, Delray Beach pharmacy networks. Formulary lookup.',
  keywords: 'Palm Beach County Medicare Part D, West Palm Beach prescription drug plans, Boca Raton Part D, Delray Beach pharmacy coverage, Wellington Medicare drug plans, Boynton Beach Part D, CVS pharmacy Palm Beach, Walgreens Part D coverage',
  openGraph: {
    title: 'Palm Beach County Medicare Part D - Prescription Drug Coverage 2025',
    description: 'Compare Medicare Part D prescription drug plans for Palm Beach County\'s 350,000+ enrollees with comprehensive pharmacy networks in West Palm Beach and beyond.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-part-d-palm-beach-county',
  },
}

const palmBeachPartDData = {
  totalBeneficiaries: 455000,
  partDEnrollment: 350000,
  averageMonthlyPremium: 46,
  majorPharmacies: 780,
  averagePrescriptions: 8.5,
  extraHelpEligible: 68000
}

const palmBeachPartDStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-part-d-palm-beach-county',
  pageTitle: 'Palm Beach County Medicare Part D Plans 2025 - West Palm Beach Prescription Drug Coverage',
  pageDescription: 'Palm Beach County Medicare Part D guide: Compare prescription drug plans for 350,000+ enrollees. West Palm Beach, Boca Raton, Delray Beach pharmacy networks. Formulary lookup.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'medicare-part-d',
  totalBeneficiaries: 350000,
  averagePremium: 46,
  faqs: getMedicarePartDFAQs('Palm Beach County', 'Florida', 780)
})

export default function PalmBeachCountyMedicarePartDPage() {
  React.useEffect(() => {
    // Initialize Palm Beach County Part D landing page analytics tracking
    if (typeof window !== 'undefined') {
      // Import and initialize analytics configuration
      import('@/lib/landing-page-analytics-config').then(({ initializeLandingPageTracking }) => {
        initializeLandingPageTracking('medicare-part-d-palm-beach-county');
      });

      // Track page view with Palm Beach County Part D context
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: 'Palm Beach County Medicare Part D Plans 2025',
          page_location: window.location.href,
          page_path: '/medicare-part-d-palm-beach-county',
          content_group: 'Medicare Part D County Landing Pages',
          county: 'Palm Beach County',
          state: 'Florida',
          total_beneficiaries: 455000,
          part_d_enrollment: 350000,
          avg_monthly_premium: 46,
          major_pharmacies: 780,
          extra_help_eligible: 68000,
          page_type: 'part_d_county_landing',
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

        // Track at 25%, 50%, 75%, 90% milestones
        if (scrollPercent >= 25 && scrollDepth < 25) {
          scrollDepth = 25;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Part D - 25%',
              value: 25,
              page_section: 'pharmacy_network'
            });
          }
        } else if (scrollPercent >= 50 && scrollDepth < 50) {
          scrollDepth = 50;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Part D - 50%',
              value: 50,
              page_section: 'coverage_tiers'
            });
          }
        } else if (scrollPercent >= 75 && scrollDepth < 75) {
          scrollDepth = 75;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Part D - 75%',
              value: 75,
              page_section: 'extra_help_enrollment'
            });
          }
        } else if (scrollPercent >= 90 && scrollDepth < 90) {
          scrollDepth = 90;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: 'Palm Beach County Part D - 90%',
              value: 90,
              page_section: 'resources_cta'
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track time on page (engagement threshold: 155 seconds)
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Palm Beach County Part D',
            value: timeSpent,
            engagement_threshold: 155,
            engaged: timeSpent >= 155
          });
        }
      };

      // Track formulary lookup clicks
      const trackFormularyLookupClick = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'formulary_lookup_click', {
            event_category: 'Part D Actions',
            event_label: 'Palm Beach Formulary Check',
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
            event_label: 'Palm Beach Extra Help - 68K Eligible',
            value: 45,
            action_type: 'extra_help_qualification',
            eligible_count: 68000
          });
        }
      };

      // Attach event listeners to formulary lookup links
      const formularyLinks = document.querySelectorAll('a[href*="formulary"]');
      formularyLinks.forEach(link => {
        link.addEventListener('click', trackFormularyLookupClick);
      });

      // Attach event listeners to Extra Help links
      const extraHelpLinks = document.querySelectorAll('a[href*="extra-help"], a[href*="lis"]');
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
          link.removeEventListener('click', trackFormularyLookupClick);
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
        pageTitle="Medicare Part D Palm Beach County Florida"
        county="Palm Beach County"
        state="Florida"
        demographics={{
          avgAge: 72,
          householdIncome: 68500,
        }}
        keyMetrics={{
          totalBeneficiaries: palmBeachPartDData.partDEnrollment,
          averagePremium: palmBeachPartDData.averageMonthlyPremium,
          pageType: 'part_d_county',
          productType: 'medicare_part_d'
        }}
      />
      <main className="min-h-screen">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(palmBeachPartDStructuredData)
          }}
        />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
            <span className="font-bold">💊 PALM BEACH COUNTY: Florida's Largest Medicare Part D Market</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Palm Beach County Medicare Part D Plans 2025: West Palm Beach Prescription Drug Coverage
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">💊</span>
              </div>
              <div className="ml-3">
                <p className="text-lg font-semibold text-blue-800 mb-2">
                  Palm Beach: 350,000+ Part D Enrollees, 780+ Pharmacy Locations, 68,000 Extra Help Eligible
                </p>
                <p className="text-blue-700">
                  Serving Palm Beach County from <strong>West Palm Beach to Boca Raton</strong> with comprehensive{' '}
                  <Link href="/medicare-part-d" className="text-blue-900 underline hover:text-blue-600">Medicare Part D prescription drug coverage</Link>.
                  Access <strong>780+ pharmacies</strong> including CVS, Walgreens, Publix, and Winn-Dixie, with <Link href="/medicare-part-d-formulary-lookup" className="text-blue-900 underline hover:text-blue-600">formulary lookup tools</Link>,
                  and <Link href="/specialists" className="text-blue-900 underline hover:text-blue-600">local Part D specialists</Link> who understand South Florida's prescription drug needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">350K+</div>
              <div className="text-blue-800 font-semibold">Part D enrollees</div>
              <div className="text-blue-600 text-sm mt-1">Largest FL county</div>
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">780+</div>
              <div className="text-green-800 font-semibold">Pharmacy locations</div>
              <div className="text-green-600 text-sm mt-1">Across county</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$46</div>
              <div className="text-purple-800 font-semibold">Avg monthly premium</div>
              <div className="text-purple-600 text-sm mt-1">Per month</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">68K</div>
              <div className="text-orange-800 font-semibold">Extra Help eligible</div>
              <div className="text-orange-600 text-sm mt-1">Low-income subsidy</div>
            </div>
          </div>
        </div>

        {/* Palm Beach Part D Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💊 Palm Beach County Medicare Part D Prescription Drug Plans</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏥 Palm Beach County Pharmacy Network</h3>
              <p className="text-gray-700 mb-4">
                <strong>780+ pharmacies</strong> across Palm Beach County provide convenient access to Medicare Part D prescription drug coverage:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>CVS Pharmacy</strong> - 185+ locations (West Palm Beach, Boca Raton, Delray Beach, Wellington)</li>
                <li>• <strong>Walgreens</strong> - 160+ locations (county-wide coverage)</li>
                <li>• <strong>Publix Pharmacy</strong> - 95+ locations (convenient grocery store access)</li>
                <li>• <strong>Winn-Dixie Pharmacy</strong> - 45+ locations (competitive pricing)</li>
                <li>• <strong>Walmart Pharmacy</strong> - 22+ locations (low-cost generics)</li>
                <li>• <strong>Independent Pharmacies</strong> - 150+ local options</li>
                <li>• <strong>Costco Pharmacy</strong> - 3 locations (West Palm Beach, Boca Raton, Wellington)</li>
                <li>• <strong>Sam's Club Pharmacy</strong> - 4 locations (membership pricing)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">📋 Part D Coverage Tiers</h3>
              <p className="text-gray-700 mb-4">
                Medicare Part D plans use a <strong>5-tier formulary structure</strong> to organize prescription drug coverage:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Tier 1 - Preferred Generics:</strong> $0-$10 copay (lowest cost)</li>
                <li><strong>Tier 2 - Generic Drugs:</strong> $10-$20 copay</li>
                <li><strong>Tier 3 - Preferred Brand Drugs:</strong> $35-$50 copay</li>
                <li><strong>Tier 4 - Non-Preferred Drugs:</strong> $80-$100 copay or 25-35% coinsurance</li>
                <li><strong>Tier 5 - Specialty Drugs:</strong> 25-33% coinsurance (cancer, MS, RA medications)</li>
              </ul>
              <div className="mt-4 bg-white p-3 rounded">
                <Link href="/medicare-part-d-formulary-lookup" className="text-blue-800 font-semibold underline hover:text-blue-600">
                  🔍 Check Your Medication Coverage →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded">
            <h3 className="font-semibold text-green-800 mb-2">💡 Palm Beach County Part D Advantage</h3>
            <p className="text-green-700 mb-4">
              With 350,000+ Part D enrollees, Palm Beach County is <Link href="/medicare-part-d" className="text-green-900 underline hover:text-green-700">Florida's largest prescription drug coverage market</Link>. The average beneficiary fills <strong>8.5 prescriptions monthly</strong>,
              with average premiums of $46/month. Popular with <strong>affluent retirees</strong> in Boca Raton, Delray Beach, and Wellington who value comprehensive drug coverage.
              Major pharmacy chains provide convenient access across all cities, from <Link href="/specialists" className="text-green-900 underline hover:text-green-700">West Palm Beach to Jupiter</Link>.
              <strong> 68,000 residents qualify for <Link href="/resources/prescription-drug-coverage" className="text-green-900 underline hover:text-green-700">Extra Help</Link></strong> (Low-Income Subsidy) which can reduce or eliminate premiums and copays.
              Pair Part D with <Link href="/medicare-supplement-palm-beach-county" className="text-green-900 underline hover:text-green-700">Palm Beach County Medigap coverage</Link> for comprehensive protection.
            </p>
            <div className="border-t border-green-200 pt-3">
              <p className="text-sm text-green-700 font-semibold mb-2">Compare Florida Part D Coverage:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/medicare-part-d" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Part D Overview</Link>
                <Link href="/medicare-part-d-formulary-lookup" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Formulary Lookup</Link>
                <Link href="/medicare-part-d-broward-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Broward County</Link>
                <Link href="/medicare-part-d-miami-dade-county" className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">Miami-Dade County</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Common Medications by Condition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💊 Common Medications Covered in Palm Beach County</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cardiovascular */}
            <div className="bg-white border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❤️ Cardiovascular Medications</h3>
              <p className="text-sm text-gray-600 mb-3">Most common prescriptions for Palm Beach County seniors:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Atorvastatin (Lipitor)</strong> - High cholesterol (Tier 1, $0-$10)</li>
                <li>• <strong>Lisinopril</strong> - High blood pressure (Tier 1, $0-$10)</li>
                <li>• <strong>Metoprolol</strong> - Heart conditions, hypertension (Tier 1)</li>
                <li>• <strong>Amlodipine</strong> - Blood pressure control (Tier 1)</li>
                <li>• <strong>Clopidogrel (Plavix)</strong> - Blood thinner (Tier 2, $10-$20)</li>
                <li>• <strong>Carvedilol</strong> - Heart failure management (Tier 1)</li>
                <li>• <strong>Warfarin</strong> - Anticoagulant therapy (Tier 1)</li>
                <li>• <strong>Eliquis</strong> - Blood clot prevention (Tier 3, $35-$50)</li>
              </ul>
            </div>

            {/* Diabetes */}
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">🩺 Diabetes Medications</h3>
              <p className="text-sm text-gray-600 mb-3">Essential diabetes management for 95,000+ Palm Beach diabetics:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Metformin</strong> - First-line diabetes treatment (Tier 1, $0-$10)</li>
                <li>• <strong>Glipizide</strong> - Blood sugar control (Tier 1)</li>
                <li>• <strong>Insulin (various types)</strong> - Critical therapy (Tier 3, $35-$50)</li>
                <li>• <strong>Jardiance</strong> - Type 2 diabetes, heart protection (Tier 3)</li>
                <li>• <strong>Ozempic</strong> - GLP-1 agonist (Tier 3-4, $50-$100)</li>
                <li>• <strong>Lantus/Basaglar</strong> - Long-acting insulin (Tier 3)</li>
                <li>• <strong>Test Strips & Supplies</strong> - Covered under Part D</li>
                <li>• <strong>Januvia</strong> - DPP-4 inhibitor (Tier 3)</li>
              </ul>
            </div>

            {/* Respiratory */}
            <div className="bg-white border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">🫁 Respiratory Medications</h3>
              <p className="text-sm text-gray-600 mb-3">Common for COPD, asthma in South Florida climate:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Albuterol Inhaler</strong> - Rescue inhaler (Tier 2, $10-$20)</li>
                <li>• <strong>Spiriva</strong> - COPD maintenance (Tier 3, $35-$50)</li>
                <li>• <strong>Advair Diskus</strong> - Asthma/COPD combo (Tier 3)</li>
                <li>• <strong>Symbicort</strong> - Maintenance inhaler (Tier 3)</li>
                <li>• <strong>Montelukast (Singulair)</strong> - Asthma control (Tier 1-2)</li>
                <li>• <strong>Fluticasone</strong> - Inhaled corticosteroid (Tier 2)</li>
                <li>• <strong>Breo Ellipta</strong> - Once-daily COPD (Tier 3)</li>
              </ul>
            </div>

            {/* Pain & Inflammation */}
            <div className="bg-white border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">🦴 Pain & Inflammation</h3>
              <p className="text-sm text-gray-600 mb-3">Arthritis, chronic pain management:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Gabapentin</strong> - Nerve pain (Tier 1, $0-$10)</li>
                <li>• <strong>Meloxicam</strong> - Anti-inflammatory (Tier 1)</li>
                <li>• <strong>Tramadol</strong> - Moderate pain relief (Tier 2)</li>
                <li>• <strong>Prednisone</strong> - Corticosteroid (Tier 1)</li>
                <li>• <strong>Diclofenac</strong> - Arthritis pain (Tier 1-2)</li>
                <li>• <strong>Duloxetine (Cymbalta)</strong> - Chronic pain, neuropathy (Tier 2-3)</li>
                <li>• <strong>Celebrex</strong> - COX-2 inhibitor (Tier 3)</li>
              </ul>
            </div>

            {/* Mental Health */}
            <div className="bg-white border border-cyan-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-3">🧠 Mental Health Medications</h3>
              <p className="text-sm text-gray-600 mb-3">Depression, anxiety, sleep disorders:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Sertraline (Zoloft)</strong> - Depression, anxiety (Tier 1, $0-$10)</li>
                <li>• <strong>Escitalopram (Lexapro)</strong> - SSRI antidepressant (Tier 1)</li>
                <li>• <strong>Trazodone</strong> - Sleep aid, depression (Tier 1)</li>
                <li>• <strong>Bupropion (Wellbutrin)</strong> - Depression (Tier 1-2)</li>
                <li>• <strong>Alprazolam (Xanax)</strong> - Anxiety (Tier 2)</li>
                <li>• <strong>Zolpidem (Ambien)</strong> - Sleep disorders (Tier 2)</li>
                <li>• <strong>Venlafaxine (Effexor)</strong> - SNRI antidepressant (Tier 2)</li>
              </ul>
            </div>

            {/* Other Common */}
            <div className="bg-white border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">💊 Other Common Medications</h3>
              <p className="text-sm text-gray-600 mb-3">Frequently prescribed in Palm Beach County:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Levothyroxine (Synthroid)</strong> - Thyroid (Tier 1, $0-$10)</li>
                <li>• <strong>Omeprazole (Prilosec)</strong> - Acid reflux (Tier 1)</li>
                <li>• <strong>Tamsulosin (Flomax)</strong> - Prostate health (Tier 1)</li>
                <li>• <strong>Furosemide (Lasix)</strong> - Diuretic (Tier 1)</li>
                <li>• <strong>Vitamin D</strong> - Bone health (OTC, some plans cover)</li>
                <li>• <strong>Calcium Supplements</strong> - Osteoporosis prevention</li>
                <li>• <strong>Latanoprost</strong> - Glaucoma (Tier 2)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-blue-800 mb-2">🔍 Check Your Medication Coverage</h3>
            <p className="text-blue-700 mb-3">
              Use our <Link href="/medicare-part-d-formulary-lookup" className="text-blue-900 underline hover:text-blue-600">formulary lookup tool</Link> to verify your specific medications are covered
              by Part D plans available in Palm Beach County. Compare drug tiers, copays, and pharmacy networks across multiple plans.
            </p>
            <div className="flex gap-3">
              <Link href="/medicare-part-d-formulary-lookup" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                🔍 Formulary Lookup
              </Link>
              <Link href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
                📞 Get Help
              </Link>
            </div>
          </div>
        </section>

        {/* Extra Help / LIS Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💰 Extra Help (Low-Income Subsidy) for Palm Beach County</h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">68,000 Palm Beach County Residents Qualify for Extra Help</h3>
            <p className="text-gray-700 mb-4">
              The <strong>Extra Help program (also called Low-Income Subsidy or LIS)</strong> can reduce or eliminate your Medicare Part D premiums and copays.
              In Palm Beach County, approximately <strong>68,000 seniors qualify</strong> but many don't realize they're eligible.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-3">📊 Income Eligibility (2025)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Individual:</strong> Income below $22,590 annually</li>
                  <li>• <strong>Married Couple:</strong> Income below $30,660 annually</li>
                  <li>• <strong>Resources:</strong> Less than $17,220 (individual) or $34,360 (couple)</li>
                  <li>• Automatic qualification if you receive SSI or Medicaid</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-3">💵 Extra Help Benefits</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>$0 monthly premium</strong> for most Part D plans</li>
                  <li>• <strong>$0-$4.50 copays</strong> for generic drugs</li>
                  <li>• <strong>$0-$11.20 copays</strong> for brand-name drugs</li>
                  <li>• <strong>No coverage gap</strong> (donut hole)</li>
                  <li>• No late enrollment penalty</li>
                  <li>• Can change plans monthly (not just during AEP)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">⚡ Apply for Extra Help Today</h4>
              <p className="text-yellow-700 mb-4">
                If you qualify, you could save <strong>$3,000-$5,000 annually</strong> on prescription drug costs. Application is free and confidential.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                  📞 Get Extra Help Application Assistance
                </Link>
                <Link href="/resources/prescription-drug-coverage" className="bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                  📚 Learn More About Extra Help
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Gap (Donut Hole) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🍩 Understanding the Coverage Gap (Donut Hole)</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-gray-700 mb-6">
              Medicare Part D has a <strong>coverage gap (donut hole)</strong> that begins after you and your plan have spent a certain amount on covered drugs.
              In 2025, the coverage gap begins at <strong>$5,030</strong> in total drug costs. Here's how it works:
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Stage 1</div>
                <div className="text-sm font-semibold text-blue-800 mb-2">Deductible</div>
                <div className="text-xs text-blue-700">Up to $590 (plan-specific)</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Stage 2</div>
                <div className="text-sm font-semibold text-green-800 mb-2">Initial Coverage</div>
                <div className="text-xs text-green-700">Pay copays/coinsurance until $5,030 total</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Stage 3</div>
                <div className="text-sm font-semibold text-orange-800 mb-2">Coverage Gap</div>
                <div className="text-xs text-orange-700">25% of drug costs until $8,000 out-of-pocket</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Stage 4</div>
                <div className="text-sm font-semibold text-purple-800 mb-2">Catastrophic</div>
                <div className="text-xs text-purple-700">$0 or 5% copay for rest of year</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h3 className="font-semibold text-yellow-800 mb-2">💡 How to Minimize Coverage Gap Impact</h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>✓ <strong>Use generic drugs</strong> when available (significantly lower costs)</li>
                <li>✓ <strong>Apply for <Link href="/resources/prescription-drug-coverage" className="text-yellow-900 underline hover:text-yellow-700">Extra Help</Link></strong> - Eliminates the coverage gap entirely for 68,000 eligible Palm Beach residents</li>
                <li>✓ <strong>Compare <Link href="/medicare-part-d" className="text-yellow-900 underline hover:text-yellow-700">Part D plans</Link></strong> - Some plans have lower initial coverage limits or better gap coverage</li>
                <li>✓ <strong>Use preferred pharmacies</strong> - Lower copays at in-network locations (CVS, Walgreens, Publix)</li>
                <li>✓ <strong>Ask about manufacturer coupons</strong> - Can reduce brand-name drug costs</li>
                <li>✓ <strong>Consider mail-order pharmacy</strong> - 90-day supplies often cost less than 3 monthly fills</li>
                <li>✓ <strong>Work with <Link href="/specialists" className="text-yellow-900 underline hover:text-yellow-700">local Part D specialists</Link></strong> - Get personalized plan recommendations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Palm Beach County Medicare Part D Enrollment Periods</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">✅ When You Can Enroll</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">1.</span>
                  <div>
                    <strong>Initial Enrollment Period (IEP):</strong> 7-month window around your 65th birthday (3 months before, birthday month, 3 months after). <Link href="/resources/enrollment-periods-explained" className="text-green-800 underline hover:text-green-600">Learn more</Link>.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">2.</span>
                  <div>
                    <strong>Annual Election Period (AEP):</strong> October 15 - December 7 annually. Coverage starts January 1. Best time to <Link href="/medicare-part-d" className="text-green-800 underline hover:text-green-600">compare Part D plans</Link>.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">3.</span>
                  <div>
                    <strong>Special Enrollment Period (SEP):</strong> Moving, losing coverage, <Link href="/resources/prescription-drug-coverage" className="text-green-800 underline hover:text-green-600">Extra Help qualification</Link>, or other qualifying events.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">4.</span>
                  <div>
                    <strong>Extra Help recipients:</strong> Can change plans monthly throughout the year. <Link href="/contact" className="text-green-800 underline hover:text-green-600">Get help applying</Link>.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">🏥 Palm Beach County Part D Resources</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <Link href="/specialists" className="underline hover:text-blue-900">Local Part D Specialists</Link></li>
                <li>• <Link href="/medicare-part-d" className="underline hover:text-blue-900">Part D Plan Comparison</Link></li>
                <li>• <Link href="/medicare-part-d-formulary-lookup" className="underline hover:text-blue-900">Formulary Lookup Tool</Link></li>
                <li>• <Link href="/medicare-supplement-palm-beach-county" className="underline hover:text-blue-900">Pair with Medigap Coverage</Link></li>
                <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-blue-900">Part D Coverage Guide</Link></li>
                <li>• <Link href="/resources/enrollment-periods-explained" className="underline hover:text-blue-900">Enrollment Periods Explained</Link></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">Compare Florida Counties:</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/medicare-part-d-broward-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Broward</Link>
                  <Link href="/medicare-part-d-miami-dade-county" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">Miami-Dade</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg mb-12" aria-labelledby="cta-heading">
          <div className="text-center">
            <p id="cta-heading" className="text-2xl font-bold mb-4">💊 Get Expert Medicare Part D Help in Palm Beach County</p>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Compare prescription drug plans for West Palm Beach, Boca Raton, Delray Beach, and all Palm Beach cities.
              Access 780+ pharmacies, check formulary coverage, and discover if you qualify for Extra Help (68,000 eligible).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Get Free Part D Consultation
              </Link>
              <Link
                href="/medicare-part-d-formulary-lookup"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                🔍 Check Your Medications
              </Link>
            </div>
          </div>
        </section>

      </div>
      </main>
    </>
  )
}
