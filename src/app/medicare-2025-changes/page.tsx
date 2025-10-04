import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Changes 2025 - What\'s New for Medicare Beneficiaries',
  description: 'Complete guide to Medicare changes for 2025. New $2,000 Part D cap, premium increases, benefit updates, and what it means for your coverage.',
  keywords: 'Medicare changes 2025, Medicare updates 2025, Part D changes, Medicare premium increases, Medicare benefits 2025',
  openGraph: {
    title: 'Medicare Changes 2025 - Important Updates for Beneficiaries',
    description: 'Major Medicare changes for 2025 including the new $2,000 Part D out-of-pocket cap and other benefit updates.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-2025-changes',
  },
}

const changesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: 'Medicare Changes for 2025: What Every Beneficiary Needs to Know',
  description: 'Complete guide to Medicare changes for 2025 including the new $2,000 Part D cap, premium increases, and benefit updates.',
  datePublished: '2024-10-01',
  dateModified: '2024-12-01',
  author: {
    '@type': 'Organization',
    name: 'El-Mag Insurance'
  },
  publisher: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://el-mag.com'
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://el-mag.com/medicare-2025-changes'
  },
  keywords: ['Medicare 2025', '$2000 Part D cap', 'Medicare changes', 'prescription drug coverage', 'Medicare benefits'],
  about: {
    '@type': 'Thing',
    name: 'Medicare Program Changes 2025'
  }
}

export default function Medicare2025ChangesPage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(changesStructuredData)
        }}
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
            <span className="font-bold">📢 NEW for 2025: Major Medicare Updates</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medicare Changes for 2025: What Every Beneficiary Needs to Know
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Significant changes are coming to Medicare in 2025, including the biggest Part D update in decades. 
            Here's everything you need to know to prepare for these changes.
          </p>
        </div>

        {/* Major Changes Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Top 5 Medicare Changes for 2025</h2>
          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-green-50 border-2 border-green-400 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-green-800">🎉 NEW: $2,000 Part D Out-of-Pocket Cap</h3>
              </div>
              <p className="text-green-700 text-lg mb-3">
                <strong>HUGE WIN:</strong> You'll never pay more than $2,000 total for prescription drugs in a year.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What This Means:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Eliminates the coverage gap ("donut hole") entirely</li>
                  <li>• Catastrophic coverage kicks in after $2,000 spent</li>
                  <li>• Average savings of $1,500-$3,000 for high-cost drug users</li>
                  <li>• Predictable, capped prescription costs</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-400 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-blue-800">💳 NEW: Medicare Part D Smoothing Program</h3>
              </div>
              <p className="text-blue-700 text-lg mb-3">
                <strong>Payment Option:</strong> Spread annual drug costs evenly across 12 months.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">How It Works:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Instead of paying large amounts upfront, costs are averaged monthly</li>
                  <li>• Example: $1,200 annual drug costs = $100/month instead of seasonal spikes</li>
                  <li>• Voluntary program - you choose whether to participate</li>
                  <li>• Helps with budgeting and cash flow management</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-400 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-purple-800">📈 Medicare Part B Premium Increase</h3>
              </div>
              <p className="text-purple-700 text-lg mb-3">
                <strong>2025 Premium:</strong> $185.00/month (up from $174.70 in 2024)
              </p>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Impact:</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• $10.30/month increase = $123.60 more per year</li>
                  <li>• Most Medicare beneficiaries will pay this amount</li>
                  <li>• Higher-income beneficiaries pay more (IRMAA surcharges)</li>
                  <li>• Social Security recipients will see this deducted from benefits</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-400 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-orange-800">💰 Part B Deductible Increase</h3>
              </div>
              <p className="text-orange-700 text-lg mb-3">
                <strong>2025 Deductible:</strong> $240 (up from $226 in 2024)
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">What This Means:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• You pay the first $240 of Medicare-covered services</li>
                  <li>• After deductible met, you pay 20% coinsurance</li>
                  <li>• $14 increase from 2024</li>
                  <li>• Applies to doctor visits, outpatient care, and medical equipment</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-400 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <h3 className="text-xl font-semibold text-red-800">⚖️ Income-Related Medicare Adjustment Amounts (IRMAA) Updates</h3>
              </div>
              <p className="text-red-700 text-lg mb-3">
                <strong>Higher-Income Adjustments:</strong> Updated income thresholds and surcharge amounts
              </p>
              <div className="bg-red-100 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">2025 IRMAA Thresholds:</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Individual income over $106,000 pays additional premiums</li>
                  <li>• Married couples over $212,000 pay additional premiums</li>
                  <li>• Based on tax returns from two years prior (2023 for 2025)</li>
                  <li>• Applies to both Part B and Part D premiums</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Part D Deep Dive */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💊 Medicare Part D: The Biggest Changes in 20 Years</h2>
          
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">🎊 Revolutionary Change: $2,000 Out-of-Pocket Maximum</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Before 2025 (Old System):</h4>
                <ul className="text-green-100 space-y-2">
                  <li>• Annual deductible: up to $545</li>
                  <li>• Initial coverage phase: 25% coinsurance</li>
                  <li>• Coverage gap ("donut hole"): 25% of drug cost</li>
                  <li>• Catastrophic phase: 5% coinsurance or small copay</li>
                  <li>• <strong>NO annual limit on spending</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Starting 2025 (New System):</h4>
                <ul className="text-green-100 space-y-2">
                  <li>• Same initial deductible: up to $590</li>
                  <li>• Initial coverage phase: same copays/coinsurance</li>
                  <li>• <strong>NO MORE coverage gap!</strong></li>
                  <li>• <strong>$2,000 maximum out-of-pocket spending</strong></li>
                  <li>• After $2,000: $0 copays for covered drugs</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-700 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Real-World Example:</h4>
              <p className="text-green-100">
                If you take expensive medications costing $8,000/year, you'll pay a maximum of $2,000 in 2025 
                (versus potentially $6,000+ under the old system). <strong>That's $4,000+ in savings!</strong>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">💳 New Smoothing Program Details</h3>
            <p className="text-blue-700 mb-4">
              The Medicare Prescription Payment Plan allows you to spread your annual out-of-pocket prescription costs evenly across the year:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">How Smoothing Works:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Plan estimates your annual drug costs</li>
                  <li>• Costs are divided into 12 equal monthly payments</li>
                  <li>• You pay the same amount each month</li>
                  <li>• No more seasonal spikes in prescription costs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Example Scenario:</h4>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-blue-800 text-sm">
                    <strong>Without Smoothing:</strong> $50 Jan-Mar, $200 Apr-Jun, $150 Jul-Sep, $100 Oct-Dec<br />
                    <strong>With Smoothing:</strong> $125 every month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium and Cost Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Medicare Premium and Cost Changes for 2025</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicare Component
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    2024 Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    2025 Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Part B Premium (Standard)
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $174.70/month
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $185.00/month
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                    +$10.30/month
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Part B Deductible
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $226
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $240
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                    +$14
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Part A Deductible
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $1,556 per stay
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $1,632 per stay
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                    +$76
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Part D Maximum Deductible
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $545
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $590
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">
                    +$45
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Part D Out-of-Pocket Max
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    No limit
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $2,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
                    NEW BENEFIT!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Annual Impact for Average Beneficiary</h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
              <div>
                <h4 className="font-semibold mb-2">Additional Costs:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Part B premium increase: +$123.60/year</li>
                  <li>• Part B deductible increase: +$14/year</li>
                  <li>• Part A deductible increase: +$76/stay (if hospitalized)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Potential Savings:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Part D out-of-pocket cap: Could save thousands</li>
                  <li>• Eliminated coverage gap: $1,000-$3,000+ savings</li>
                  <li>• Better budget predictability with smoothing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IRMAA Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 High-Income Medicare Surcharges (IRMAA) for 2025</h2>
          
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">👥 Who Pays IRMAA Surcharges?</h3>
            <p className="text-red-700 mb-4">
              Higher-income Medicare beneficiaries pay additional monthly amounts on top of standard premiums:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">2025 Income Thresholds (Individual):</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Over $106,000: Pay IRMAA surcharges</li>
                  <li>• Over $133,000: Higher surcharge tier</li>
                  <li>• Over $167,000: Even higher surcharge</li>
                  <li>• Over $200,000: Highest surcharge tier</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">2025 Income Thresholds (Married):</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Over $212,000: Pay IRMAA surcharges</li>
                  <li>• Over $266,000: Higher surcharge tier</li>
                  <li>• Over $334,000: Even higher surcharge</li>
                  <li>• Over $400,000: Highest surcharge tier</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Income Range (Individual)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Part B Premium
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Additional Part D Premium
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $106,000 or less
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $185.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $0
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $106,001 - $133,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $259.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    +$12.90
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $133,001 - $167,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $333.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    +$33.30
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $167,001 - $200,000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $407.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    +$53.80
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $200,001+
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    $481.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    +$74.20
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Medicare Advantage Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏥 Medicare Advantage Plan Changes for 2025</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">📈 Enhanced Benefits and Competition</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">New Benefit Offerings:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Expanded telehealth services</li>
                    <li>• Enhanced dental and vision coverage</li>
                    <li>• More comprehensive wellness programs</li>
                    <li>• Improved prescription drug formularies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Market Trends:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• More plan options in most areas</li>
                    <li>• Increased focus on chronic care management</li>
                    <li>• Better integration with Part D benefits</li>
                    <li>• Competitive premium pricing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">💊 Medicare Advantage Part D Integration</h3>
              <p className="text-green-700 mb-4">
                Medicare Advantage plans with prescription drug coverage (MA-PD) also benefit from the new Part D changes:
              </p>
              <div className="space-y-2 text-green-700">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Same $2,000 out-of-pocket maximum applies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Access to prescription payment smoothing program</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No more coverage gap for prescription drugs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Plans may offer additional drug coverage benefits</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What This Means for You */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🤔 What These Changes Mean for Your Medicare Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">👍 If You Take Expensive Medications</h3>
                <p className="text-green-700 mb-3">
                  <strong>Big Winner:</strong> The $2,000 cap could save you thousands of dollars.
                </p>
                <div className="text-green-700 text-sm space-y-1">
                  <p>• Review your current Part D plan during Open Enrollment</p>
                  <p>• Consider plans with better formulary coverage</p>
                  <p>• Ask about the smoothing program for budget planning</p>
                  <p>• Calculate potential savings with the new cap</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 If You Take Few or No Medications</h3>
                <p className="text-blue-700 mb-3">
                  <strong>Mixed Impact:</strong> Higher premiums but better protection if needs change.
                </p>
                <div className="text-blue-700 text-sm space-y-1">
                  <p>• Part B premium increase affects everyone</p>
                  <p>• Part D protection is valuable insurance</p>
                  <p>• Consider future medication needs</p>
                  <p>• Review plan options for best value</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">💰 If You're a Higher-Income Beneficiary</h3>
                <p className="text-purple-700 mb-3">
                  <strong>Higher Costs:</strong> IRMAA surcharges increase with income thresholds.
                </p>
                <div className="text-purple-700 text-sm space-y-1">
                  <p>• Review 2023 tax return for IRMAA impact</p>
                  <p>• Consider income smoothing strategies</p>
                  <p>• Appeal IRMAA if circumstances changed</p>
                  <p>• Factor surcharges into Medicare planning</p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">📋 If You Have Medicare Advantage</h3>
                <p className="text-orange-700 mb-3">
                  <strong>Benefits Apply:</strong> MA-PD plans get the same Part D improvements.
                </p>
                <div className="text-orange-700 text-sm space-y-1">
                  <p>• Same $2,000 out-of-pocket maximum</p>
                  <p>• Access to smoothing program</p>
                  <p>• Compare MA plans during Open Enrollment</p>
                  <p>• Look for enhanced 2025 benefits</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Action Steps for Medicare Beneficiaries</h2>
          
          <div className="bg-white border-2 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">📅 What to Do During 2025 Open Enrollment</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Review Your Current Coverage</h4>
                  <p className="text-gray-700 text-sm">
                    Check your Annual Notice of Change to see how your plan is changing for 2025.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Compare All Available Plans</h4>
                  <p className="text-gray-700 text-sm">
                    Use Medicare.gov Plan Finder or get help from a licensed agent to compare options.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Calculate Your Potential Savings</h4>
                  <p className="text-gray-700 text-sm">
                    Estimate how the $2,000 Part D cap and other changes will affect your costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Enroll Before December 7, 2025</h4>
                  <p className="text-gray-700 text-sm">
                    Don't wait! Make your 2025 coverage changes during Open Enrollment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Understanding How 2025 Changes Affect You?</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              These Medicare changes are complex, but you don't have to figure them out alone. Our licensed Medicare experts 
              can explain how the 2025 changes impact your specific situation and help you find the best coverage options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call 331-E-HEALTH Now
              </a>
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                📧 Get Free Analysis
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Licensed Medicare specialists • Free consultation • Personalized guidance for 2025 changes
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Related 2025 Medicare Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/medicare-open-enrollment-2025" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🗓️ Open Enrollment 2025</h3>
              <p className="text-gray-600 text-sm">
                Complete guide to Medicare Open Enrollment with deadlines and requirements
              </p>
            </Link>
            <Link href="/medicare-part-d/costs" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💊 Part D Costs 2025</h3>
              <p className="text-gray-600 text-sm">
                Detailed breakdown of Medicare Part D costs with the new $2,000 cap
              </p>
            </Link>
            <Link href="/medicare-extra-help" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💰 Extra Help Program</h3>
              <p className="text-gray-600 text-sm">
                Learn how Extra Help benefits work with the new 2025 Part D changes
              </p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🏥 Medicare Advantage 2025</h3>
              <p className="text-gray-600 text-sm">
                How Medicare Advantage plans are adapting to 2025 changes
              </p>
            </Link>
            <Link href="/medicare-open-enrollment-checklist" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">✅ Enrollment Checklist</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step checklist for reviewing your Medicare coverage
              </p>
            </Link>
            <Link href="/medicare-plan-comparison-tool" className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🔍 Plan Comparison</h3>
              <p className="text-gray-600 text-sm">
                Compare 2025 Medicare plans with the latest benefit information
              </p>
            </Link>
          </div>
        </section>

        <nav className="text-sm text-gray-600">
          <Link href="/medicare-open-enrollment-2025" className="hover:text-blue-600">
            ← Back to Open Enrollment 2025
          </Link>
        </nav>
      </div>
    </main>
  )
}