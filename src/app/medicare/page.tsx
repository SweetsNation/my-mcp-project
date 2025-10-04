import { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import MarketingOptimizer from '@/components/MarketingOptimizer'
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs'
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection'

export const metadata: Metadata = {
  title: 'Medicare 2025 Guide | Parts A, B, C, D Explained | Medicare Advantage vs Supplement | Enrollment Help',
  description: 'Complete Medicare guide for 2025. Understand Medicare Parts A, B, C, D, Medicare Advantage vs Supplement plans, enrollment periods, costs, and coverage. Expert help for Medicare decisions.',
  keywords: 'Medicare 2025, Medicare Parts A B C D, Medicare Advantage vs supplement, Medicare enrollment 2025, Medicare costs, Medicare coverage, Original Medicare, Medicare Part A hospital insurance, Medicare Part B medical insurance, Medicare Part C Advantage plans, Medicare Part D prescription drugs, Medicare supplement insurance, Medigap plans, Medicare eligibility age 65, Medicare enrollment periods, Medicare premiums deductibles, Medicare benefits guide, Medicare plan comparison, Medicare decision help',
  openGraph: {
    title: 'Medicare 2025 Guide | Parts A, B, C, D Explained | Medicare Advantage vs Supplement',
    description: 'Complete Medicare guide for 2025. Understand all Medicare parts, compare Advantage vs Supplement plans, and get expert enrollment help.',
    type: 'website',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'El-Mag Insurance - Medicare and Health Insurance Solutions',
        },
      ],
    },
}

const medicareData = {
  partAPremium: 0,
  partBPremium: 174.70,
  partBDeductible: 240,
  partDPremium: 35,
  medicareAdvantageAverage: 28,
  supplementPremium: 150,
  enrollmentAge: 65,
  penaltyRate: 10,
  totalBeneficiaries: 66000000
}

const analyticsData = {
  pageType: 'medicare-guide',
  location: 'Nationwide',
  targetAudience: ['Age 65+', 'Disabled', 'ESRD patients', 'Pre-Medicare planners'],
  focusArea: 'medicare-education',
  planTypes: ['Original Medicare', 'Medicare Advantage', 'Medicare Supplement', 'Part D Plans'],
  keyTopics: ['Enrollment', 'Coverage', 'Costs', 'Plan comparison'],
  majorProviders: ['CMS', 'Private insurers', 'Medicare contractors']
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Education and Enrollment Services",
  "description": "Comprehensive Medicare guidance for Parts A, B, C, D, Medicare Advantage, and Supplement plans with expert enrollment assistance.",
  "serviceType": "Medicare Education and Enrollment",
  "areaServed": "United States",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medicare Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medicare Plan Consultation",
          "description": "Free Medicare plan consultation and enrollment assistance"
        }
      }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the four parts of Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare has four parts: Part A (hospital insurance) covers inpatient hospital stays, skilled nursing, hospice, and some home health care. Part B (medical insurance) covers doctor visits, outpatient care, medical supplies, and preventive services. Part C (Medicare Advantage) is an alternative that includes Parts A, B, and usually D. Part D covers prescription drugs."
      }
    },
    {
      "@type": "Question",
      "name": "When can I enroll in Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can first enroll in Medicare during your Initial Enrollment Period (IEP), which begins 3 months before your 65th birthday month and ends 3 months after. If you miss this period, you can enroll during General Enrollment (January 1 - March 31) or Special Enrollment Periods if you qualify."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Medicare Advantage and Medicare Supplement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Advantage (Part C) replaces Original Medicare and typically includes prescription drug coverage, often with $0 premiums but network restrictions. Medicare Supplement (Medigap) works alongside Original Medicare to cover gaps like copayments and deductibles, offering more provider flexibility but requiring separate Part D coverage."
      }
    }
  ]
}

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Medicare", url: "/medicare" }
]

export default function Medicare() {
  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Medicare Information Guide"
        county=""
        state=""
        demographics={{
          avgAge: 72,
        }}
        keyMetrics={{
          totalBeneficiaries: medicareData.totalBeneficiaries,
          pageType: 'medicare_guide'
        }}
      />

      {/* Marketing Strategy Implementation */}
      <MarketingOptimizer
        pageKey="medicare"
        enableDynamicOptimization={true}
        trackKeywordPerformance={true}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbStructuredData(breadcrumbItems)) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Medicare 2025<br />
                  <span className="text-blue-200">Complete Guide & Enrollment Help</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Understanding Medicare Parts A, B, C, D. Compare Medicare Advantage vs Supplement plans. Get expert help with enrollment and plan selection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Get Medicare Help
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Compare Plans
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-lg font-semibold text-yellow-200 mb-2">Medicare 2025 Costs</h3>
                <div className="space-y-3 text-blue-100">
                  <div className="flex justify-between">
                    <span>Part A Premium:</span>
                    <span className="font-bold text-white">${medicareData.partAPremium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Premium:</span>
                    <span className="font-bold text-white">${medicareData.partBPremium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Deductible:</span>
                    <span className="font-bold text-white">${medicareData.partBDeductible}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg MA Premium:</span>
                    <span className="font-bold text-white">${medicareData.medicareAdvantageAverage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Medicare Parts Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding the Four Parts of Medicare
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-600 font-bold text-xl">A</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Part A - Hospital Insurance
                </h3>
                <div className="space-y-2 text-gray-700 text-sm mb-4">
                  <div>" Inpatient hospital stays</div>
                  <div>" Skilled nursing facility care</div>
                  <div>" Hospice care</div>
                  <div>" Some home health care</div>
                </div>
                <div className="text-red-600 font-semibold">
                  Premium: ${medicareData.partAPremium} (most people)
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">B</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Part B - Medical Insurance
                </h3>
                <div className="space-y-2 text-gray-700 text-sm mb-4">
                  <div>" Doctor visits</div>
                  <div>" Outpatient care</div>
                  <div>" Medical supplies</div>
                  <div>" Preventive services</div>
                </div>
                <div className="text-blue-600 font-semibold">
                  Premium: ${medicareData.partBPremium}/month
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">C</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Part C - Medicare Advantage
                </h3>
                <div className="space-y-2 text-gray-700 text-sm mb-4">
                  <div>" Includes Parts A & B</div>
                  <div>" Usually includes Part D</div>
                  <div>" Extra benefits available</div>
                  <div>" Network restrictions</div>
                </div>
                <div className="text-green-600 font-semibold">
                  Avg Premium: ${medicareData.medicareAdvantageAverage}/month
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-xl">D</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Part D - Prescription Drugs
                </h3>
                <div className="space-y-2 text-gray-700 text-sm mb-4">
                  <div>" Prescription drug coverage</div>
                  <div>" Stand-alone plans</div>
                  <div>" Formulary restrictions</div>
                  <div>" Coverage gap (donut hole)</div>
                </div>
                <div className="text-purple-600 font-semibold">
                  Avg Premium: ${medicareData.partDPremium}/month
                </div>
              </div>
            </div>
          </section>

          {/* Medicare Advantage vs Supplement */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Medicare Advantage vs Medicare Supplement (Medigap)
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Medicare Advantage (Part C)</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">How It Works</h4>
                    <p className="text-gray-700 text-sm">Replaces Original Medicare (Parts A & B) with private insurance plan that includes additional benefits.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Often $0 monthly premium</li>
                      <li>" Usually includes prescription drugs</li>
                      <li>" Extra benefits (dental, vision, hearing)</li>
                      <li>" Annual out-of-pocket maximum</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Cons</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Network restrictions</li>
                      <li>" Need referrals for specialists</li>
                      <li>" Plan can change annually</li>
                      <li>" Limited to plan's service area</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Medicare Supplement (Medigap)</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">How It Works</h4>
                    <p className="text-gray-700 text-sm">Works alongside Original Medicare to cover gaps like copayments, deductibles, and coinsurance.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Pros</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Use any Medicare-accepting doctor</li>
                      <li>" No referrals needed</li>
                      <li>" Standardized benefits</li>
                      <li>" Guaranteed renewable</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Cons</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Monthly premium required</li>
                      <li>" No prescription drug coverage</li>
                      <li>" No extra benefits</li>
                      <li>" Must buy separate Part D plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medicare Enrollment */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Medicare Enrollment Periods
            </h2>
            <div className="space-y-6">
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Initial Enrollment Period (IEP)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">7-month period surrounding your 65th birthday</p>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Timeline</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>" 3 months before your birthday month</li>
                        <li>" Your birthday month</li>
                        <li>" 3 months after your birthday month</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What to Enroll In</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Medicare Part A (automatic if receiving Social Security)</li>
                      <li>" Medicare Part B (optional but recommended)</li>
                      <li>" Medicare Part D or Medicare Advantage</li>
                      <li>" Medicare Supplement (if choosing Original Medicare)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Annual Open Enrollment (October 15 - December 7)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What You Can Do</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Switch from Original Medicare to Medicare Advantage</li>
                      <li>" Switch from Medicare Advantage to Original Medicare</li>
                      <li>" Switch Medicare Advantage plans</li>
                      <li>" Add, drop, or switch Part D plans</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Important Notes</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Changes take effect January 1</li>
                      <li>" Cannot change Medicare Supplement during this time</li>
                      <li>" Best time to review and compare plans</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Special Enrollment Periods (SEPs)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Qualifying Events</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Moving to a new area</li>
                      <li>" Losing employer coverage</li>
                      <li>" Qualifying for Extra Help</li>
                      <li>" Plan no longer available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Time Limits</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>" Usually 63 days from qualifying event</li>
                      <li>" Varies depending on the situation</li>
                      <li>" Documentation may be required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medicare Costs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Understanding Medicare Costs
            </h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">2025 Medicare Costs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">${medicareData.partAPremium}</div>
                  <div className="text-gray-700">Part A Premium</div>
                  <div className="text-sm text-gray-600">Most people pay $0</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">${medicareData.partBPremium}</div>
                  <div className="text-gray-700">Part B Premium</div>
                  <div className="text-sm text-gray-600">Standard monthly amount</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">${medicareData.medicareAdvantageAverage}</div>
                  <div className="text-gray-700">Medicare Advantage</div>
                  <div className="text-sm text-gray-600">Average monthly premium</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">${medicareData.partDPremium}</div>
                  <div className="text-gray-700">Part D Premium</div>
                  <div className="text-sm text-gray-600">Average monthly cost</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Original Medicare Costs</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Part A Deductible (per benefit period):</span>
                    <span className="font-semibold">$1,632</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Deductible (annual):</span>
                    <span className="font-semibold">${medicareData.partBDeductible}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Coinsurance:</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>No out-of-pocket maximum:</span>
                    <span className="font-semibold text-red-600">Unlimited</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Late Enrollment Penalties</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Part B Penalty:</span>
                    <span className="font-semibold">10% per year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part D Penalty:</span>
                    <span className="font-semibold">1% per month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold text-red-600">Lifetime</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Penalties apply for each full month you were eligible but not enrolled.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Medicare
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What are the four parts of Medicare?",
                  answer: "Medicare has four parts: Part A (hospital insurance) covers inpatient hospital stays, skilled nursing, hospice, and some home health care. Part B (medical insurance) covers doctor visits, outpatient care, medical supplies, and preventive services. Part C (Medicare Advantage) is an alternative that includes Parts A, B, and usually D. Part D covers prescription drugs."
                },
                {
                  question: "When can I enroll in Medicare?",
                  answer: "You can first enroll in Medicare during your Initial Enrollment Period (IEP), which begins 3 months before your 65th birthday month and ends 3 months after. If you miss this period, you can enroll during General Enrollment (January 1 - March 31) or Special Enrollment Periods if you qualify."
                },
                {
                  question: "What's the difference between Medicare Advantage and Medicare Supplement?",
                  answer: "Medicare Advantage (Part C) replaces Original Medicare and typically includes prescription drug coverage, often with $0 premiums but network restrictions. Medicare Supplement (Medigap) works alongside Original Medicare to cover gaps like copayments and deductibles, offering more provider flexibility but requiring separate Part D coverage."
                },
                {
                  question: "Do I have to pay for Medicare Part A?",
                  answer: "Most people don't pay a premium for Medicare Part A if they or their spouse paid Medicare taxes for at least 10 years (40 quarters). If you don't qualify for premium-free Part A, you may be able to buy it, with premiums up to $505 per month in 2025."
                },
                {
                  question: "What happens if I don't sign up for Medicare when I'm first eligible?",
                  answer: "If you don't enroll in Medicare Part B or Part D when first eligible, you may face late enrollment penalties that last as long as you have Medicare. The Part B penalty is 10% of the premium for each 12-month period you could have had Part B but didn't sign up."
                },
                {
                  question: "Can I have both Medicare and employer insurance?",
                  answer: "Yes, you can have both Medicare and employer insurance. Which pays first depends on several factors including the size of your employer and whether you're actively working. If your employer has 20 or more employees, employer insurance usually pays first."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Primary Links Section */}
          <PrimaryLinksSection
            currentPageKey="medicare"
            className="py-16"
          />

          {/* Related Topics Section */}
          <ContextualLinksSection
            currentPageKey="medicare"
            className="py-12 bg-white"
          />

          {/* Cross-Sell Section */}
          <CrossSellSection
            currentPageKey="medicare"
            className="py-12 bg-gray-50"
          />

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get Expert Medicare Guidance
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Navigate your Medicare options with confidence. Get personalized help with enrollment and plan selection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                Get Medicare Help
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Compare Medicare Plans
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}