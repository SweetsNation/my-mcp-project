import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'

export const metadata: Metadata = {
  title: 'Sacramento County Medicare Supplement Plans 2025 | California Medigap Coverage',
  description: 'Compare Medicare Supplement (Medigap) plans in Sacramento County, CA. Shop Plan G, Plan N, and Plan F with California Birthday Rule. Get quotes from top carriers - AARP/UnitedHealthcare, Blue Shield CA, Mutual of Omaha.',
  keywords: 'Sacramento County Medicare Supplement, Sacramento Medigap plans, California Birthday Rule Sacramento, Medicare Supplement Plan G Sacramento, Medigap quotes Sacramento CA, UC Davis Medicare Supplement, Sutter Health Medigap, Sacramento senior insurance',
  openGraph: {
    title: 'Sacramento County Medicare Supplement Plans 2025 | California Medigap',
    description: 'Compare Medigap Plan G, Plan N, Plan F in Sacramento County. California Birthday Rule annual switching. UC Davis Health & Sutter coverage.',
    type: 'website',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-supplement.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Supplement Plans - El-Mag Insurance',
        },
      ],
    },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-sacramento-county',
  },
}

export default function SacramentoCountyMedicareSupplementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Sacramento County Medicare Supplement"
        county="Sacramento County"
        state="California"
        demographics={{
          maPenetrationRate: 47
        }}
        keyMetrics={{
          total_beneficiaries: 285000,
          available_ma_plans: 62,
          average_premium: 165,
          zero_premium_plans: 28,
          content_type: 'medicare_supplement_county',
          page_category: 'medigap_landing_page'
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sacramento County Medicare Supplement Plans 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Compare Medigap Plan G, Plan N, and Plan F with California Birthday Rule Annual Switching
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">285,000+</div>
                  <div className="text-blue-200">Sacramento Medicare Beneficiaries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15+ Carriers</div>
                  <div className="text-blue-200">Top-Rated Medigap Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">Birthday Rule</div>
                  <div className="text-blue-200">Annual Plan Change Rights</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg"
              >
                Get Free Sacramento Medigap Quotes
              </Link>
              <a
                href="tel:331-343-2584"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Call: (331) 343-2584
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sacramento County Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Medicare Supplement Insurance in Sacramento County, California
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Sacramento County Medicare Market
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📊</span>
                  <span><strong>285,000+ Medicare beneficiaries</strong> in Sacramento County (2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📈</span>
                  <span><strong>47% Medicare Advantage penetration</strong> - 53% choose Original Medicare + Medigap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏥</span>
                  <span><strong>UC Davis Health, Sutter Health, Kaiser, Mercy</strong> - All hospitals accept Medigap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🎂</span>
                  <span><strong>California Birthday Rule:</strong> Change plans annually without underwriting</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Why Sacramento Seniors Choose Medigap
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Any doctor, any hospital:</strong> UC Davis, Sutter, Kaiser, Dignity Health - all covered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>No network restrictions:</strong> Travel to Tahoe, SF Bay Area, Southern CA without worry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Predictable costs:</strong> Fixed premiums, minimal out-of-pocket expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>No referrals needed:</strong> Direct access to specialists at UC Davis Medical Center</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 mb-3">
              🎂 California Birthday Rule - Unique to California Residents
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              California is one of only a few states with a <strong>Birthday Rule</strong> that allows Medicare Supplement
              policyholders to switch to a <strong>same or lesser benefit plan</strong> within 30 days after their birthday
              each year - <strong>without medical underwriting</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This means Sacramento County residents can shop for lower premiums annually. For example, if you have Plan G
              with AARP/UnitedHealthcare at $185/month, you can switch to Blue Shield of California Plan G at $165/month
              during your Birthday Rule window - even with pre-existing conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Medigap Plan Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Compare Medicare Supplement Plans in Sacramento County
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📘 Plan G (Most Popular)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Sacramento seniors who want comprehensive coverage with low out-of-pocket costs.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Covers everything except Part B deductible ($240/year)</li>
                <li>✓ No copays at UC Davis or Sutter Health</li>
                <li>✓ Average premium: $165-$185/month</li>
                <li>✓ Travel coverage nationwide</li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Plan G Quotes
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-500">
              <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                BEST VALUE
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">
                💚 Plan N (Lower Premium)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Healthy Sacramento seniors who don't visit doctors frequently.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ $20 copay for office visits</li>
                <li>✓ $50 copay for ER (waived if admitted)</li>
                <li>✓ Average premium: $125-$145/month</li>
                <li>✓ Save $40-$50/month vs. Plan G</li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Plan N Quotes
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                🌟 Plan F (Grandfathered)
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Sacramento seniors who enrolled before 2020 and want zero out-of-pocket.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Covers 100% of Medicare gaps (including Part B deductible)</li>
                <li>✓ No copays, no deductibles</li>
                <li>✓ Average premium: $195-$215/month</li>
                <li>✓ Only available if Medicare-eligible before 1/1/2020</li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Check Plan F Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Medigap Calculator */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Calculate Your Sacramento County Medigap Premium
          </h2>
        </div>
      </section>

      {/* Top Medigap Carriers in Sacramento */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Top Medicare Supplement Carriers in Sacramento County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                AARP/UnitedHealthcare
              </h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$175-$195</div>
                <div className="text-gray-600">Plan G (Age 65-75)</div>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Largest market share in Sacramento</li>
                <li>✓ AARP member discounts available</li>
                <li>✓ Household discount (both spouses)</li>
                <li>✓ Strong financial ratings (A+)</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> AARP members, couples seeking household discounts
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Blue Shield of California
              </h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$165-$185</div>
                <div className="text-gray-600">Plan G (Age 65-75)</div>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ California-based insurer</li>
                <li>✓ Competitive rates in Sacramento</li>
                <li>✓ Community-rated pricing (same rate by age)</li>
                <li>✓ Excellent customer service</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Sacramento residents wanting local CA insurer
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Mutual of Omaha
              </h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$160-$180</div>
                <div className="text-gray-600">Plan G (Age 65-75)</div>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Low rates for ages 65-70</li>
                <li>✓ Issue-age rating (rate locked at enrollment age)</li>
                <li>✓ Household discount available</li>
                <li>✓ Strong financial stability (A+)</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Newly enrolled Medicare beneficiaries (65-70)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Anthem Blue Cross
              </h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$170-$190</div>
                <div className="text-gray-600">Plan G (Age 65-75)</div>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Wide acceptance in Sacramento hospitals</li>
                <li>✓ Attained-age pricing (rates increase with age)</li>
                <li>✓ Online account management</li>
                <li>✓ Multiple plan options (G, N, F)</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Sacramento seniors age 65-70 seeking competitive rates
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Cigna Healthcare
              </h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$155-$175</div>
                <div className="text-gray-600">Plan G (Age 65-75)</div>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Competitive Plan N rates ($125-$140)</li>
                <li>✓ Attained-age pricing</li>
                <li>✓ Nationwide coverage</li>
                <li>✓ Easy claims processing</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Cost-conscious Sacramento seniors, Plan N shoppers
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Humana Insurance
              </h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600">$168-$188</div>
                <div className="text-gray-600">Plan G (Age 65-75)</div>
              </div>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Strong presence in Northern California</li>
                <li>✓ Issue-age rating available</li>
                <li>✓ Wellness programs included</li>
                <li>✓ 24/7 customer support</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Sacramento seniors wanting wellness benefits
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sacramento County Medigap Premium Factors
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Community-Rated (Blue Shield CA)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Same premium for all ages.</strong> A 65-year-old and 85-year-old pay the same rate.
                  Rates increase only due to inflation, not age.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Issue-Age Rated (Mutual of Omaha)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Premium based on age when you enroll.</strong> If you enroll at 65, your rate is locked
                  to age 65 pricing. Increases only for inflation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Attained-Age Rated (Anthem, Cigna)</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Premium increases as you age.</strong> Lower rates at 65, but increases at 70, 75, 80, etc.
                  plus inflation adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* California Birthday Rule Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to Use California Birthday Rule in Sacramento County
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              California Birthday Rule Explained
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The <strong>California Birthday Rule</strong> (California Insurance Code Section 10198.6) allows Medicare
              Supplement policyholders to change to a <strong>same or lesser benefit plan</strong> with any carrier within
              <strong> 30 days following their birthday</strong> each year - <strong>without medical underwriting</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">What You Can Do:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ <strong>Switch from Plan G to Plan N</strong> (lesser benefit) - guaranteed acceptance</li>
                  <li>✅ <strong>Switch from Plan F to Plan G</strong> (lesser benefit) - guaranteed acceptance</li>
                  <li>✅ <strong>Switch to same plan with different carrier</strong> (Plan G to Plan G) - guaranteed</li>
                  <li>✅ <strong>Lower your premium</strong> by shopping annually for better rates</li>
                  <li>✅ <strong>No health questions asked</strong> - pre-existing conditions covered</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-4">What You Cannot Do:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>❌ <strong>Switch from Plan N to Plan G</strong> (higher benefit) - requires underwriting</li>
                  <li>❌ <strong>Switch from Plan G to Plan F</strong> (higher benefit) - requires underwriting</li>
                  <li>❌ <strong>Apply outside 30-day birthday window</strong> - no Birthday Rule protection</li>
                  <li>❌ <strong>Keep same carrier and demand lower rate</strong> - must switch carriers</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-900 mb-3">
                💡 Sacramento Birthday Rule Strategy Example:
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Your Situation:</strong> You're 72 years old with AARP/UnitedHealthcare Plan G at $185/month.
                Your birthday is June 15th.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Birthday Rule Window:</strong> June 15 - July 15 (30 days after your birthday)
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Action:</strong> During June 15-July 15, you apply for Blue Shield of California Plan G at
                $165/month. Because it's the same plan (G to G), it's "same benefit" and Blue Shield MUST accept you
                without health questions. You save $20/month = $240/year. You can do this <strong>every year</strong>
                to find the lowest rate.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📅 Step-by-Step: Using Birthday Rule
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>Step 1:</strong> Mark your birthday on calendar - this starts your 30-day window</li>
                <li><strong>Step 2:</strong> Contact El-Mag Insurance 30 days before birthday to compare rates</li>
                <li><strong>Step 3:</strong> Choose same or lesser benefit plan with lower premium</li>
                <li><strong>Step 4:</strong> Apply during 30-day window (birthday + 30 days)</li>
                <li><strong>Step 5:</strong> New carrier must accept you without health questions</li>
                <li><strong>Step 6:</strong> Cancel old policy once new coverage starts (no gap in coverage)</li>
              </ol>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                💰 Sacramento Birthday Rule Savings
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">Plan G Switch Example:</div>
                  <div className="text-gray-700">
                    AARP Plan G ($185) → Blue Shield Plan G ($165)<br/>
                    <span className="text-green-700 font-semibold">Annual Savings: $240</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">Plan F to Plan G Example:</div>
                  <div className="text-gray-700">
                    AARP Plan F ($205) → Mutual of Omaha Plan G ($160)<br/>
                    <span className="text-green-700 font-semibold">Annual Savings: $540</span><br/>
                    <span className="text-sm text-gray-600">(You pay $240 Part B deductible, net savings $300)</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-2">Plan G to Plan N Example:</div>
                  <div className="text-gray-700">
                    AARP Plan G ($185) → Cigna Plan N ($130)<br/>
                    <span className="text-green-700 font-semibold">Annual Savings: $660</span><br/>
                    <span className="text-sm text-gray-600">(If you have fewer than 33 doctor visits/year, you save money)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacramento Hospitals & Medigap */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Sacramento County Hospitals Accepting Medicare Supplement Plans
          </h2>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            <strong>All Medicare Supplement plans are accepted at every hospital and doctor</strong> that accepts Original
            Medicare in Sacramento County. Unlike Medicare Advantage (which has network restrictions), Medigap gives you
            access to <strong>UC Davis Medical Center, Sutter Health, Mercy, Kaiser, and Dignity Health</strong> without
            prior authorization or referrals.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                🏥 UC Davis Medical Center
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>All Medigap plans accepted:</strong> Plan G, Plan N, Plan F</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>No referrals needed:</strong> Direct access to UC Davis specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Cancer center, trauma, transplant:</strong> All covered with Medigap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>2315 Stockton Blvd, Sacramento, CA 95817</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                🏥 Sutter Medical Center Sacramento
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>All Medigap plans accepted:</strong> Zero copays with Plan G or F</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Heart center, orthopedics:</strong> Full access without network restrictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Multiple Sutter locations:</strong> Roseville, Auburn, Davis all covered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>2801 L Street, Sacramento, CA 95816</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                🏥 Mercy General Hospital
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Dignity Health network:</strong> All Medigap plans accepted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Emergency care:</strong> No copays with Plan G (only Part B deductible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Cardiology, neurology:</strong> Direct specialist access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>4001 J Street, Sacramento, CA 95819</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                🏥 Kaiser Permanente Sacramento
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Medicare Supplement accepted:</strong> Use Kaiser with Original Medicare + Medigap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>No Kaiser network restriction:</strong> Unlike Medicare Advantage, Medigap lets you use Kaiser OR any other hospital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Multiple Kaiser locations:</strong> Roseville, South Sacramento, Point West</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>2025 Morse Avenue, Sacramento, CA 95825</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              🗺️ Sacramento Region Coverage
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Medicare Supplement plans provide <strong>nationwide coverage</strong> at any facility accepting Original Medicare.
              Sacramento County residents can receive care at:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <strong>Sacramento Metro:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Downtown Sacramento hospitals</li>
                  <li>• Midtown medical facilities</li>
                  <li>• East Sacramento clinics</li>
                  <li>• Natomas medical centers</li>
                </ul>
              </div>
              <div>
                <strong>Surrounding Areas:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Roseville (Placer County)</li>
                  <li>• Elk Grove (South Sacramento)</li>
                  <li>• Folsom medical facilities</li>
                  <li>• Davis (Yolo County)</li>
                </ul>
              </div>
              <div>
                <strong>Travel Coverage:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Lake Tahoe emergency care</li>
                  <li>• San Francisco Bay Area hospitals</li>
                  <li>• Southern California facilities</li>
                  <li>• Nationwide + foreign travel emergency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacramento Cities & Neighborhoods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Medicare Supplement Plans by Sacramento County City
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📍 Sacramento (City)
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Downtown:</strong> UC Davis Med Center access</li>
                <li>• <strong>Midtown:</strong> Sutter Medical Center nearby</li>
                <li>• <strong>East Sacramento:</strong> Multiple specialists</li>
                <li>• <strong>Land Park:</strong> Mercy General Hospital</li>
                <li>• <strong>Natomas:</strong> Kaiser Point West</li>
                <li className="pt-2 font-semibold text-blue-800">All Medigap plans: Plan G, N, F available</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                📍 Elk Grove
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>South Sacramento County</strong></li>
                <li>• Dignity Health Mercy Hospital nearby</li>
                <li>• Kaiser Permanente Elk Grove</li>
                <li>• UC Davis access via Highway 99</li>
                <li>• Growing senior population (85,000+ 65+)</li>
                <li className="pt-2 font-semibold text-green-800">Avg Plan G: $165/mo | Plan N: $130/mo</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                📍 Folsom
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>East Sacramento County</strong></li>
                <li>• Mercy Hospital Folsom</li>
                <li>• UC Davis access via Highway 50</li>
                <li>• Active senior community (Folsom Lake)</li>
                <li>• Travel coverage to Lake Tahoe</li>
                <li className="pt-2 font-semibold text-purple-800">Birthday Rule: Switch plans annually</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                📍 Citrus Heights
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Northeast Sacramento County</strong></li>
                <li>• Mercy San Juan Medical Center</li>
                <li>• Sutter Roseville nearby</li>
                <li>• High concentration of Medicare beneficiaries</li>
                <li>• Easy access to I-80 hospitals</li>
                <li className="pt-2 font-semibold text-orange-800">15+ carriers compete - shop annually</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-4">
                📍 Rancho Cordova
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>East Sacramento County</strong></li>
                <li>• Kaiser Permanente Rancho Cordova</li>
                <li>• UC Davis access via Highway 50</li>
                <li>• Mercy Folsom nearby</li>
                <li>• Growing retirement communities</li>
                <li className="pt-2 font-semibold text-pink-800">Plan N popular for healthy seniors</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">
                📍 Carmichael / Fair Oaks
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Northeast Sacramento County</strong></li>
                <li>• Mercy San Juan Medical Center</li>
                <li>• Easy access to Roseville hospitals</li>
                <li>• Established senior communities</li>
                <li>• American River Parkway recreation</li>
                <li className="pt-2 font-semibold text-yellow-800">Blue Shield CA competitive rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions: Sacramento County Medicare Supplement
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is the average cost of Medicare Supplement Plan G in Sacramento County?
              </h3>
              <p className="text-gray-700">
                The average cost for Medicare Supplement Plan G in Sacramento County ranges from <strong>$165-$185 per month</strong>
                for beneficiaries age 65-75. Blue Shield of California offers competitive rates at $165/month, while AARP/UnitedHealthcare
                averages $185/month. Your actual rate depends on your age, gender, tobacco use, and the carrier's rating method
                (community-rated, issue-age, or attained-age). Sacramento residents can use the <strong>California Birthday Rule</strong>
                to shop for lower rates annually.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I use UC Davis Medical Center with any Medicare Supplement plan?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> UC Davis Medical Center and all UC Davis Health facilities accept <strong>every Medicare Supplement
                plan</strong> (Plan G, Plan N, Plan F, etc.) from any carrier. Unlike Medicare Advantage plans which have network
                restrictions, Medicare Supplement works with Original Medicare - so you can see any doctor or use any hospital that
                accepts Medicare. This includes UC Davis Cancer Center, UC Davis transplant services, and all UC Davis specialists
                without referrals or prior authorization.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How does the California Birthday Rule work for Sacramento residents?
              </h3>
              <p className="text-gray-700">
                The <strong>California Birthday Rule</strong> allows Sacramento County Medicare Supplement policyholders to switch to a
                <strong> same or lesser benefit plan</strong> within 30 days after their birthday each year - <strong>without medical
                underwriting</strong>. For example, if your birthday is May 10th, you have May 10 - June 9 to apply for a new plan.
                You can switch from Plan G to Plan N (lesser benefit), or from AARP Plan G to Blue Shield Plan G (same benefit) to get
                a lower rate. Carriers must accept you regardless of health conditions. This is unique to California and lets you shop
                for the best rate annually.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I choose Plan G or Plan N in Sacramento County?
              </h3>
              <p className="text-gray-700">
                <strong>Plan G is best if:</strong> You visit doctors frequently, want zero copays at UC Davis or Sutter, and prefer
                predictable costs (only pay $240 Part B deductible annually). Average cost: $165-$185/month.<br/><br/>
                <strong>Plan N is best if:</strong> You're healthy, have fewer than 10-15 doctor visits per year, and want to save
                $40-$50/month on premiums. You pay $20 office visit copays and $50 ER copay (waived if admitted). Average cost: $125-$145/month.<br/><br/>
                <strong>Sacramento-specific tip:</strong> If you have Plan G now and are healthy, use the California Birthday Rule to
                switch to Plan N during your birthday month and save $500-$600 per year.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Which Medicare Supplement carrier has the lowest rates in Sacramento?
              </h3>
              <p className="text-gray-700">
                The lowest rates in Sacramento County vary by age, gender, and zip code, but <strong>Cigna Healthcare</strong> and
                <strong> Blue Shield of California</strong> consistently offer competitive pricing. For Plan G: Cigna averages $155-$175/month,
                Blue Shield $165-$185/month. For Plan N: Cigna averages $125-$140/month. <strong>Mutual of Omaha</strong> offers the
                best rates for newly enrolled beneficiaries age 65-70 due to issue-age rating. We recommend getting quotes from 5-7
                carriers because rates change annually, and you can switch using the California Birthday Rule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does Medicare Supplement cover travel to Lake Tahoe or outside California?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> Medicare Supplement plans provide <strong>nationwide coverage</strong> at any facility that accepts
                Original Medicare. Sacramento residents can receive care at Lake Tahoe hospitals, San Francisco Bay Area facilities, or
                anywhere in the United States without network restrictions. Additionally, Plans G, N, and F include <strong>foreign travel
                emergency coverage</strong> (up to $50,000 per lifetime after $250 deductible) for trips outside the U.S. This is ideal
                for Sacramento seniors who travel to Mexico, Canada, or internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Free Sacramento County Medicare Supplement Quotes
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Compare Plan G, Plan N, and Plan F rates from 15+ top-rated carriers. Use California Birthday Rule to save up to $500/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Compare Sacramento Medigap Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors text-lg"
            >
              Call: (331) 343-2584
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Medicare Supplement Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                📍 Northern California Medicare
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medicare-supplement-san-diego-county" className="text-blue-600 hover:underline">
                    San Diego County Medicare Supplement
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-supplement/california" className="text-blue-600 hover:underline">
                    California Medicare Supplement Plans
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-supplement/california-birthday-rule" className="text-blue-600 hover:underline">
                    California Birthday Rule Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                📘 Medigap Plan Guides
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/medigap-plan-g-guide" className="text-blue-600 hover:underline">
                    Medicare Supplement Plan G Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/medigap-plan-n-guide" className="text-blue-600 hover:underline">
                    Medicare Supplement Plan N Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/medigap-vs-medicare-advantage" className="text-blue-600 hover:underline">
                    Medigap vs Medicare Advantage Comparison
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                🏥 California Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/uc-davis-medicare-coverage" className="text-blue-600 hover:underline">
                    UC Davis Medical Center Medicare Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/resources/sutter-health-medigap" className="text-blue-600 hover:underline">
                    Sutter Health Medicare Supplement
                  </Link>
                </li>
                <li>
                  <Link href="/resources/california-community-rated-medigap" className="text-blue-600 hover:underline">
                    California Community-Rated Medigap Plans
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
