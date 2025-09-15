import type { Metadata } from 'next';
import Link from 'next/link';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Medicare Extra Help 2025 | Free Prescription Drug Coverage | Qualify Now',
  description: 'Medicare Extra Help (Low Income Subsidy) can pay for your prescription drug costs. Check if you qualify for $0 premiums, low copays. Income limits: $23,895 (individual), $32,335 (couple). Free qualification help.',
  keywords: 'Medicare Extra Help, Medicare Extra Help 2025, Low Income Subsidy, Medicare prescription drug help, Medicare Extra Help eligibility, Medicare Extra Help application, Medicare LIS, Medicare Extra Help income limits, Medicare copay assistance',
  openGraph: {
    title: 'Medicare Extra Help 2025 | Get FREE Prescription Drug Coverage',
    description: 'You may qualify for Medicare Extra Help! Get $0 premiums, $0 deductibles, and low copays for prescription drugs. Check eligibility instantly.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-extra-help',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Extra Help 2025 | Free Drug Coverage',
    description: 'Get FREE Medicare prescription drug coverage with Extra Help! $0 premiums, low copays. Check if you qualify instantly.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-extra-help',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Medicare Extra Help 2025 | Low Income Subsidy Program',
  description: 'Complete guide to Medicare Extra Help (Low Income Subsidy) program. Check eligibility, learn benefits, and get help applying for free prescription drug coverage.',
  url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-extra-help',
  datePublished: '2024-08-24',
  dateModified: '2024-08-24',
  inLanguage: 'en-US',
  keywords: 'Medicare Extra Help, Medicare Extra Help 2025, Low Income Subsidy, Medicare prescription drug help, Medicare Extra Help eligibility, Medicare Extra Help application',
  about: {
    '@type': 'GovernmentService',
    name: 'Medicare Extra Help Program',
    description: 'Federal program that helps pay Medicare prescription drug costs for people with limited income and resources',
    provider: {
      '@type': 'GovernmentOrganization',
      name: 'Social Security Administration'
    }
  },
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app',
    telephone: '331-343-2584',
    email: 'support@elmaginsurance.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7520 NW 5th St, #201',
      addressLocality: 'Plantation',
      addressRegion: 'FL',
      postalCode: '33317',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medicare Extra Help Application Assistance',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medicare Extra Help Qualification Assessment',
            description: 'Free assessment to determine Medicare Extra Help eligibility'
          },
          price: '0',
          priceCurrency: 'USD'
        }
      ]
    }
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Medicare Extra Help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Extra Help (also called the Low Income Subsidy or LIS) is a federal program that helps pay Medicare prescription drug costs for people with limited income and resources. Benefits include $0 monthly premiums, $0 or low deductibles, and low copays for medications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the Medicare Extra Help income limits for 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For 2025, Medicare Extra Help income limits are $23,895 per year ($1,991 per month) for individuals and $32,335 per year ($2,694 per month) for married couples living together. Resource limits are $17,220 for individuals and $34,360 for couples.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I apply for Medicare Extra Help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can apply for Medicare Extra Help online at ssa.gov, by calling Social Security at 1-800-772-1213, or by visiting your local Social Security office. You can apply any time of year, and benefits are retroactive to your application date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I automatically qualify for Medicare Extra Help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You automatically qualify for Medicare Extra Help if you have Medicaid, receive Supplemental Security Income (SSI), or participate in a Medicare Savings Program (QMB, SLMB, or QI). No separate application is needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Medicare Extra Help copay amounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With full Medicare Extra Help, you pay $1.55 for generic drugs and $4.60 for brand-name drugs in 2025. With partial Extra Help, you pay 15% of drug costs with no coverage gap. These amounts are much lower than regular Part D copays.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I change Medicare Part D plans with Extra Help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, with Medicare Extra Help you can change Part D plans at any time during the year, not just during Open Enrollment. This gives you more flexibility to switch if your medications change or you find a better plan.',
        },
      },
    ],
  },
};

export default function MedicareExtraHelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-6">
                <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  💰 FREE GOVERNMENT BENEFIT
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Medicare Extra Help 2025<br/>
                <span className="text-3xl md:text-4xl text-green-200">Get FREE Prescription Drug Coverage!</span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                You may qualify for <strong>$0 premiums, $0 deductibles, and $1.55-$4.60 copays</strong> for prescription drugs. 
                Income limits: $23,895 (individual) or $32,335 (married couple).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors text-lg text-center shadow-lg hover:shadow-xl">
                  ✅ CHECK MY ELIGIBILITY FREE
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors text-lg text-center">
                  📞 331-E-HEALTH
                </a>
              </div>
            </div>
          </section>

          {/* Quick Benefits Overview */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Medicare Extra Help Could Save You Thousands!
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The Low Income Subsidy (LIS) program helps millions of Americans afford their prescription medications.
                  Here's what you could save:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-8 rounded-xl border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-6">❌ WITHOUT Extra Help</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium text-gray-900">Monthly Premium</span>
                      <span className="font-bold text-red-600">$35+ per month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium text-gray-900">Annual Deductible</span>
                      <span className="font-bold text-red-600">Up to $590</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium text-gray-900">Generic Copay</span>
                      <span className="font-bold text-red-600">$10-20+ each</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <span className="font-medium text-gray-900">Brand Name Copay</span>
                      <span className="font-bold text-red-600">$40-100+ each</span>
                    </div>
                    <div className="bg-red-100 p-3 rounded-lg mt-4">
                      <p className="text-red-800 font-semibold text-center">
                        Annual Cost: $1,000-$5,000+
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">✅ WITH Extra Help</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                      <span className="font-medium text-gray-900">Monthly Premium</span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                      <span className="font-medium text-gray-900">Annual Deductible</span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                      <span className="font-medium text-gray-900">Generic Copay</span>
                      <span className="font-bold text-green-600">$1.55 each</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                      <span className="font-medium text-gray-900">Brand Name Copay</span>
                      <span className="font-bold text-green-600">$4.60 each</span>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg mt-4">
                      <p className="text-green-800 font-semibold text-center">
                        Annual Cost: $50-$200 typical
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 inline-block">
                  <p className="text-2xl font-bold text-yellow-800">
                    💰 Potential Annual Savings: $800 - $4,800+
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Requirements */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Do You Qualify for Medicare Extra Help?
                </h2>
                <p className="text-lg text-gray-600">
                  Check if you meet the 2025 income and resource limits for this valuable program
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-green-600 mb-6">
                    ✅ 2025 Income Limits
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Individual (Single)</h4>
                      <div className="space-y-2">
                        <p className="text-lg"><strong>Monthly:</strong> $1,991 or less</p>
                        <p className="text-lg"><strong>Annual:</strong> $23,895 or less</p>
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Married Couple</h4>
                      <div className="space-y-2">
                        <p className="text-lg"><strong>Monthly:</strong> $2,694 or less</p>
                        <p className="text-lg"><strong>Annual:</strong> $32,335 or less</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Note:</strong> Income includes wages, Social Security, pensions, and most other income sources.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">
                    💎 2025 Resource Limits
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Individual (Single)</h4>
                      <p className="text-lg"><strong>$17,220</strong> or less in resources</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Married Couple</h4>
                      <p className="text-lg"><strong>$34,360</strong> or less in resources</p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Resources Include:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ Bank accounts, stocks, bonds</li>
                        <li>✓ Real estate (other than your home)</li>
                        <li>✓ Vehicles (beyond first $4,500 value)</li>
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900">Resources DON'T Include:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>✗ Your home and property</li>
                        <li>✗ Personal belongings</li>
                        <li>✗ One vehicle (any value)</li>
                        <li>✗ Life insurance under $1,500</li>
                        <li>✗ Burial funds up to $1,500</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Automatic Qualification */}
          <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🎯 Automatic Qualification - No Application Needed!
                </h2>
                <p className="text-lg text-gray-600">
                  If you have any of these benefits, you automatically qualify for Medicare Extra Help
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏥</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Medicaid</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    If you have Medicaid coverage for any reason, you automatically qualify for full Extra Help benefits.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">SSI</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Supplemental Security Income (SSI) recipients automatically qualify for full Extra Help benefits.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🛡️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Medicare Savings Programs</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    QMB, SLMB, or QI program participants automatically qualify for full Extra Help benefits.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-green-100 border border-green-300 rounded-lg p-6 inline-block max-w-2xl">
                  <p className="text-green-800">
                    <strong>🎉 Good News!</strong> If you have any of these benefits, Extra Help is automatically applied to your Medicare Part D plan. 
                    You don't need to do anything - you're already getting the savings!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Full vs Partial Benefits */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Full vs. Partial Extra Help Benefits
                </h2>
                <p className="text-lg text-gray-600">
                  The level of help you receive depends on your income and resources
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">
                    🌟 Full Extra Help Benefits
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Monthly Premium</span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Annual Deductible</span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Generic Copay</span>
                      <span className="font-bold text-green-600">$1.55</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Brand Name Copay</span>
                      <span className="font-bold text-green-600">$4.60</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Coverage Gap</span>
                      <span className="font-bold text-green-600">No Gap</span>
                    </div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Who Qualifies:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Automatic qualifiers (Medicaid, SSI, MSP)</li>
                      <li>• Income ≤ 135% of Federal Poverty Level</li>
                      <li>• Resources within limits</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6">
                    ⭐ Partial Extra Help Benefits
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Monthly Premium</span>
                      <span className="font-bold text-blue-600">Sliding Scale</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Annual Deductible</span>
                      <span className="font-bold text-blue-600">$104 (2025)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Drug Costs</span>
                      <span className="font-bold text-blue-600">15% of costs</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-900">Coverage Gap</span>
                      <span className="font-bold text-blue-600">No Gap</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Who Qualifies:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Income 135-150% of Federal Poverty Level</li>
                      <li>• Resources within limits</li>
                      <li>• Still significant savings vs. regular Part D</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Apply */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How to Apply for Medicare Extra Help
                </h2>
                <p className="text-lg text-gray-600">
                  Multiple ways to apply - choose what works best for you
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Online</h3>
                  <p className="text-gray-600 mb-4">Apply 24/7 at ssa.gov - fastest method</p>
                  <a href="https://www.ssa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                    Visit ssa.gov →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">By Phone</h3>
                  <p className="text-gray-600 mb-4">Call Social Security directly</p>
                  <a href="tel:1-800-772-1213" className="text-green-600 hover:text-green-800 font-medium">
                    1-800-772-1213
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">In Person</h3>
                  <p className="text-gray-600 mb-4">Visit your local Social Security office</p>
                  <a href="https://www.ssa.gov/locator" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                    Find Office →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Get Help</h3>
                  <p className="text-gray-600 mb-4">We'll help you apply for free</p>
                  <a href="tel:331-343-2584" className="text-yellow-600 hover:text-yellow-800 font-medium">
                    331-E-HEALTH
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📋 What You'll Need to Apply</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Social Security number</li>
                      <li>✓ Medicare number</li>
                      <li>✓ Contact information</li>
                      <li>✓ Bank account information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Income statements (pay stubs, benefits letters)</li>
                      <li>✓ Bank statements</li>
                      <li>✓ Investment account statements</li>
                      <li>✓ Real estate and vehicle information</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>💡 Pro Tip:</strong> You can apply any time during the year, and benefits start the month after your application is approved. 
                    Don't wait for Open Enrollment!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Common Medicare Extra Help Questions
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How long does Extra Help last?
                    </h3>
                    <p className="text-gray-700">
                      Extra Help continues as long as you meet the eligibility requirements. Social Security reviews 
                      your eligibility annually, and you'll receive a notice if anything changes.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can I choose any Part D plan with Extra Help?
                    </h3>
                    <p className="text-gray-700">
                      You can choose any Part D plan in your area, but you'll only pay $0 premium for plans 
                      that don't charge more than the Low Income Premium Subsidy Amount.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What if I'm denied Extra Help?
                    </h3>
                    <p className="text-gray-700">
                      You can appeal the decision within 60 days. Many denials are due to missing information, 
                      so make sure to provide all required documentation with your application.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Does Extra Help cover all my medications?
                    </h3>
                    <p className="text-gray-700">
                      Extra Help lowers your costs, but your medications must still be covered by your Part D 
                      plan's formulary. We can help you find a plan that covers your specific medications.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can I switch Part D plans with Extra Help?
                    </h3>
                    <p className="text-gray-700">
                      Yes! With Extra Help, you can change Part D plans any time during the year, not just 
                      during Open Enrollment. This gives you more flexibility if your needs change.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How quickly will I get Extra Help benefits?
                    </h3>
                    <p className="text-gray-700">
                      Most applications are processed within 2-4 weeks. If approved, benefits are retroactive 
                      to your application date, so you may receive refunds for premiums already paid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  💰 Ready to Save Thousands on Prescription Drugs?
                </h2>
                <p className="text-2xl text-green-200 font-semibold mb-6">
                  Find Out if You Qualify for Medicare Extra Help!
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">📋 Free Eligibility Check</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ Instant qualification assessment</li>
                    <li>✓ No cost, no obligation</li>
                    <li>✓ Expert guidance included</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🤝 Application Assistance</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ Help completing forms</li>
                    <li>✓ Document preparation</li>
                    <li>✓ Follow-up support</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🎯 Plan Selection Help</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ Find best plans with Extra Help</li>
                    <li>✓ Medication coverage verification</li>
                    <li>✓ Maximize your savings</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
                <strong>Don't miss out on this valuable benefit!</strong> Millions of Americans are eligible for Medicare Extra Help 
                but don't know it. Let our experts help you determine if you qualify and assist with your application.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/contact" className="bg-yellow-400 text-gray-900 font-bold px-12 py-4 rounded-lg hover:bg-yellow-300 transition-colors text-xl text-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                  ✅ CHECK MY ELIGIBILITY NOW
                </Link>
                <a href="tel:331-343-2584" className="border-3 border-white text-white font-bold px-12 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors text-xl text-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                  📞 CALL 331-E-HEALTH
                </a>
              </div>
              
              <p className="text-sm text-green-200">
                🔒 <strong>Secure & Confidential</strong> • 🆓 <strong>100% Free Service</strong> • ⭐ <strong>Licensed Medicare Experts</strong>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}