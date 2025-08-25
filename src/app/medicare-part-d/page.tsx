import type { Metadata } from 'next';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Medicare Part D Plans 2025 | Best Prescription Drug Coverage | No Late Penalty',
  description: 'Find the best Medicare Part D prescription drug plans for 2025. New $2,000 out-of-pocket cap! Compare 25+ plans, avoid late enrollment penalties. Free expert help - call 331-E-HEALTH.',
  keywords: 'Medicare Part D, Medicare Part D plans 2025, prescription drug plans, Medicare Part D enrollment, Part D comparison, Medicare prescription coverage, Medicare Part D costs, late enrollment penalty, $2000 cap, Extra Help Medicare',
  openGraph: {
    title: 'Medicare Part D Plans 2025 | $2,000 Cap | Avoid Late Penalties',
    description: 'Historic changes to Medicare Part D in 2025! New $2,000 out-of-pocket maximum. Compare 25+ prescription drug plans. Free expert consultation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/medicare-part-d',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Part D 2025 | $2,000 Cap | Compare Plans',
    description: 'New $2,000 out-of-pocket maximum for Medicare Part D! Compare prescription drug plans and avoid late penalties. Free expert help.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-part-d',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Medicare Part D Plans 2025 | Prescription Drug Coverage',
  description: 'Find the best Medicare Part D prescription drug plans for 2025 with new $2,000 out-of-pocket cap. Compare plans and avoid late enrollment penalties.',
  url: 'https://elmag-insurance.com/medicare-part-d',
  datePublished: '2024-08-24',
  dateModified: '2024-08-24',
  inLanguage: 'en-US',
  keywords: 'Medicare Part D, Medicare Part D plans 2025, prescription drug plans, Medicare Part D enrollment, Part D comparison, Medicare prescription coverage, Medicare Part D costs, late enrollment penalty, $2000 cap, Extra Help Medicare',
  about: {
    '@type': 'Thing',
    name: 'Medicare Part D',
    description: 'Medicare prescription drug coverage program'
  },
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
    telephone: '331-343-2584',
    email: 'support@elmaginsurance.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://elmag-insurance.com/logo.png'
    },
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
    serviceType: 'Insurance Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medicare Part D Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medicare Part D Plan Comparison',
            description: 'Free comparison of Medicare Part D prescription drug plans'
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
        name: 'What is Medicare Part D?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Part D is prescription drug coverage that helps pay for brand-name and generic prescription drugs. It can be purchased as a standalone plan or included as part of a Medicare Advantage plan. All Part D plans must cover at least two drugs in each therapeutic category.',
        },
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in Medicare Part D?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enroll in Medicare Part D during your Initial Enrollment Period (7 months around your 65th birthday), during the Annual Open Enrollment Period (October 15 - December 7), or during a Special Enrollment Period if you qualify due to life changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Medicare Part D late enrollment penalty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Medicare Part D late enrollment penalty is a permanent increase to your monthly premium if you go 63+ days without creditable prescription drug coverage. For 2025, the penalty is approximately $0.35 per month for each month of delay, calculated as 1% of the national base premium.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the new $2,000 out-of-pocket cap for Medicare Part D in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Starting in 2025, Medicare Part D will have a historic $2,000 annual out-of-pocket maximum. Once you spend $2,000 on covered prescription drugs, your plan will pay 100% of drug costs for the rest of the year. This replaces the previous system with no annual limit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Medicare Part D cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Part D costs vary by plan but typically include a monthly premium (average $35), annual deductible (up to $590 in 2025), and copays/coinsurance for medications. Total costs depend on your specific medications and chosen plan. Extra Help may reduce or eliminate these costs for qualifying individuals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Medicare Extra Help for Part D?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Extra Help (Low Income Subsidy) helps pay Part D costs for people with limited income and resources. Benefits include $0 monthly premiums, $0 or low deductibles, and low copays ($1.55-$4.50 for generics, $4.60-$11.20 for brand names). Income limits for 2025 are $23,895 (individual) or $32,335 (married couple).',
        },
      },
    ],
  },
};

export default function MedicarePartDPage() {
  return (
    <>
      <ClientOnly>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </ClientOnly>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Medicare Part D Plans 2025<br/>
                <span className="text-3xl md:text-4xl text-yellow-300">
                  <ClientOnly>NEW $2,000 Out-of-Pocket Cap!</ClientOnly>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto">
                Historic changes save you money! Compare 25+ Medicare Part D prescription drug plans.
                Avoid costly late enrollment penalties. <strong>Expert guidance at no cost to you.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg text-center shadow-lg hover:shadow-xl">
                  🔍 Compare Part D Plans FREE
                </Link>
                <a href="tel:331-343-2584" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-lg text-center">
                  331-E-HEALTH
                </a>
              </div>
            </div>
          </section>

          {/* Urgent Warning + Value Prop Section */}
          <section className="py-12 bg-red-50 border-l-4 border-red-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-red-800">Don't Pay Late Enrollment Penalties!</h2>
                  </div>
                  <p className="text-lg text-red-700 mb-4">
                    Missing Medicare Part D enrollment costs you money <strong>FOR LIFE</strong>. If you go 63+ days 
                    without creditable prescription drug coverage, you'll pay a permanent penalty added to every 
                    monthly premium.
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <p className="text-red-800 font-semibold">
                      ⚠️ <strong>Real Example:</strong> Wait 12 months = <ClientOnly>$4.16/month penalty FOR LIFE</ClientOnly><br/>
                      That's <ClientOnly>$50+ extra per year</ClientOnly>, every year you have Medicare!
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-4">✅ We Help You Avoid Penalties</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Free plan comparison - no cost to you
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Expert guidance on enrollment deadlines
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Help with all enrollment paperwork
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Maximize your 2025 savings with new <ClientOnly>$2,000 cap</ClientOnly>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600">
                      <strong>Licensed in 50 states</strong> • <strong>No fees</strong> • <strong>Expert advice</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Medicare Part D by the Numbers
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Key statistics that show why Medicare Part D is essential for prescription drug coverage
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600">47M+</div>
                  <div className="text-gray-600">Americans with Part D</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg border-2 border-secondary-200">
                  <div className="text-3xl font-bold text-secondary-600">
                    <ClientOnly>$2,000</ClientOnly>
                  </div>
                  <div className="text-gray-600 font-medium">NEW 2025 Out-of-Pocket Cap</div>
                  <div className="text-xs text-secondary-700 mt-1">Historic Change!</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Plans Available Per Area</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">$35</div>
                  <div className="text-gray-600">Average Monthly Premium</div>
                  <div className="text-xs text-orange-700 mt-1">Can be $0 with Extra Help</div>
                </div>
              </div>
            </div>
          </section>

          {/* What is Medicare Part D */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What is Medicare Part D?
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Medicare Part D is prescription drug coverage that helps pay for both brand-name 
                      and generic prescription drugs at participating pharmacies in your area.
                    </p>
                    <p>
                      Part D coverage is available either as a standalone Prescription Drug Plan (PDP) 
                      if you have Original Medicare, or it can be included as part of a Medicare Advantage plan.
                    </p>
                    <p>
                      All Medicare Part D plans must cover at least two drugs in each therapeutic 
                      category, but the specific drugs covered (called a formulary) vary by plan.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Part D Coverage Phases</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Deductible Phase</h4>
                      <p className="text-sm text-gray-600">You pay 100% until you meet your deductible (up to $590 in 2025)</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Initial Coverage</h4>
                      <p className="text-sm text-gray-600">You and your plan share costs until total drug costs reach <ClientOnly>$5,030</ClientOnly></p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Coverage Gap</h4>
                      <p className="text-sm text-gray-600">You pay 25% of drug costs until you spend <ClientOnly>$8,000</ClientOnly> out-of-pocket</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Catastrophic Coverage</h4>
                      <p className="text-sm text-gray-600">You pay the greater of 5% or <ClientOnly>$4.50/$11.20</ClientOnly> per prescription</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who Needs Part D */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Do You Need Medicare Part D?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-green-800 mb-6">✅ You SHOULD Enroll If:</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You have Original Medicare (Parts A & B) without prescription coverage
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You take prescription medications regularly
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You want protection against high prescription costs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You don't have creditable coverage from another source
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You want to avoid the late enrollment penalty
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-yellow-800 mb-6">⚠️ You MAY NOT Need Part D If:</h3>
                  <ul className="space-y-3 text-yellow-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You have a Medicare Advantage plan with drug coverage
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You have creditable employer or union coverage
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You're eligible for TRICARE or VA benefits
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      You qualify for Extra Help/Low Income Subsidy
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Even if you don't take medications now, consider enrolling 
                      to avoid the late enrollment penalty if you need coverage later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Choose a Part D Plan */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                How to Choose the Right Part D Plan
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Check Your Medications</h3>
                  <p className="text-gray-600">
                    Make sure your current medications are covered by the plan's formulary. 
                    Different plans cover different drugs and may require prior authorization.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Review Pharmacy Networks</h3>
                  <p className="text-gray-600">
                    Ensure your preferred pharmacy is in the plan's network. Using out-of-network 
                    pharmacies can significantly increase your costs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Compare Total Costs</h3>
                  <p className="text-gray-600">
                    Look beyond the monthly premium. Consider deductibles, copays, coinsurance, 
                    and annual out-of-pocket maximums for your specific medications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2025 Changes */}
          <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Major Changes to Medicare Part D in 2025
                </h2>
                <p className="text-lg text-gray-600">
                  Important improvements that could save you money on prescription drugs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                    🎯 $2,000 Annual Out-of-Pocket Cap
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For the first time ever, Medicare Part D will have a hard cap on out-of-pocket spending. 
                    Once you spend $2,000 on covered drugs in 2025, your plan pays 100% for the rest of the year.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Previous:</strong> No annual limit - you could spend thousands more<br/>
                      <strong>2025:</strong> Maximum $2,000 out-of-pocket per year
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-green-600 mb-4">
                    📅 Monthly Payment Option
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Starting in 2025, you can choose to spread your annual out-of-pocket costs 
                    across monthly payments, making expensive medications more manageable.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Example:</strong> Instead of paying $2,000 upfront for a specialty drug, 
                      you could pay approximately $167 per month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enrollment Periods */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Part D Enrollment Periods
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-2 border-blue-200 rounded-xl p-6 hover:border-blue-400 transition-colors">
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Initial Enrollment Period</h3>
                  <p className="text-gray-700 mb-4">
                    7-month period that begins 3 months before you turn 65, includes your birth month, 
                    and ends 3 months after your birth month.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Best time to enroll:</strong> During the 3 months before your 65th birthday
                    </p>
                  </div>
                </div>
                
                <div className="border-2 border-green-200 rounded-xl p-6 hover:border-green-400 transition-colors">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Annual Open Enrollment</h3>
                  <p className="text-gray-700 mb-4">
                    October 15 - December 7 each year. You can join, switch, or drop Medicare Part D plans. 
                    Changes take effect January 1.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Current period:</strong> October 15 - December 7, 2024 for 2025 coverage
                    </p>
                  </div>
                </div>
                
                <div className="border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 transition-colors">
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">Special Enrollment Periods</h3>
                  <p className="text-gray-700 mb-4">
                    Available if you move, lose creditable coverage, qualify for Extra Help, 
                    or meet other qualifying circumstances.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Duration:</strong> Typically 2-3 months depending on qualifying event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Extra Help Program */}
          <section className="py-16 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Extra Help with Prescription Drug Costs
                </h2>
                <p className="text-lg text-gray-600">
                  Medicare's Low Income Subsidy (LIS) program can help pay for Part D costs
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-6">
                    You May Qualify for Extra Help If:
                  </h3>
                  <ul className="space-y-4 text-green-700">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Your annual income is below <ClientOnly>$23,895 (individual) or $32,335 (married couple)</ClientOnly>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Your resources are limited to <ClientOnly>$17,220 (individual) or $34,360 (married couple)</ClientOnly>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      You automatically qualify if you have Medicaid or receive SSI
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Extra Help Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-900">Monthly Premium</span>
                      <span className="font-bold text-green-600"><ClientOnly>$0</ClientOnly></span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-900">Annual Deductible</span>
                      <span className="font-bold text-green-600"><ClientOnly>$0</ClientOnly></span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-900">Generic Copay</span>
                      <span className="font-bold text-green-600"><ClientOnly>$1.55 - $4.50</ClientOnly></span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-900">Brand Name Copay</span>
                      <span className="font-bold text-green-600"><ClientOnly>$4.60 - $11.20</ClientOnly></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Common Medicare Part D Questions
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can I change my Part D plan?
                    </h3>
                    <p className="text-gray-700">
                      Yes, you can change your Part D plan during the Annual Open Enrollment Period 
                      (October 15 - December 7) or if you qualify for a Special Enrollment Period.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What if my medication isn't covered?
                    </h3>
                    <p className="text-gray-700">
                      You can request an exception from your plan, ask your doctor about covered 
                      alternatives, or pay the full cost. You may also want to consider switching 
                      plans during Open Enrollment.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can I have both Medicare Advantage and Part D?
                    </h3>
                    <p className="text-gray-700">
                      Most Medicare Advantage plans include prescription drug coverage. If your 
                      Medicare Advantage plan has drug coverage, you cannot enroll in a separate Part D plan.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      How much does Part D cost?
                    </h3>
                    <p className="text-gray-700">
                      Part D costs vary by plan. You'll pay a monthly premium (average $35), 
                      annual deductible (up to $590), and copays/coinsurance for medications. 
                      Total costs depend on the drugs you take.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What is the coverage gap (donut hole)?
                    </h3>
                    <p className="text-gray-700">
                      The coverage gap begins when your total drug costs reach $5,030. You'll pay 25% 
                      of drug costs until your out-of-pocket spending reaches $8,000, then catastrophic 
                      coverage begins.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Can I use mail-order pharmacy?
                    </h3>
                    <p className="text-gray-700">
                      Most Part D plans offer mail-order pharmacy options, which can save money 
                      on maintenance medications. You typically get a 90-day supply for the 
                      cost of a 60-day supply at retail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  🎆 Ready to Maximize Your 2025 Savings?
                </h2>
                <p className="text-2xl text-yellow-300 font-semibold mb-6">
                  New $2,000 Cap Could Save You Thousands!
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">⚡ Fast & Free Service</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ Compare 25+ plans in minutes</li>
                    <li>✓ No cost, no obligation</li>
                    <li>✓ Expert guidance included</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🛡️ Avoid Costly Mistakes</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ No late enrollment penalties</li>
                    <li>✓ Ensure medication coverage</li>
                    <li>✓ Find lowest total costs</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">🏆 Expert Support</h3>
                  <ul className="text-sm space-y-2">
                    <li>✓ Licensed in all 50 states</li>
                    <li>✓ 15+ years Medicare experience</li>
                    <li>✓ Ongoing plan support</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl text-primary-100 mb-8 max-w-4xl mx-auto">
                <strong>Don't wait!</strong> Open Enrollment ends December 7, 2024. Missing the deadline could cost 
                you money for life. Our Medicare specialists make Part D selection simple and free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/contact" className="bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-lg hover:bg-yellow-300 transition-colors text-xl text-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                  🎆 GET MY FREE COMPARISON NOW
                </Link>
                <a href="tel:331-343-2584" className="border-3 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-xl text-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                  📞 CALL 331-E-HEALTH
                </a>
              </div>
              
              <p className="text-sm text-primary-200">
                🔒 <strong>Secure & Confidential</strong> • 🏆 <strong>A+ BBB Rating</strong> • ⭐ <strong>Thousands of Happy Clients</strong>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}