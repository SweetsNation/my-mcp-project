import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Medicare Plan F Cost 2025 | $227.83/Month Average | Medigap Plan F Benefits',
  description: 'Medicare Supplement Plan F costs $227.83/month average in 2025. High-deductible Plan F only $82.50/month. 36% market share. Pre-2020 Medicare eligibility required.',
  keywords: 'Medicare Plan F cost 2025, Medigap Plan F premiums, Medicare Supplement Plan F benefits, Plan F high deductible, Medicare Plan F rates, Plan F vs Plan G 2025, Medicare Supplement Plan F eligibility, Medigap Plan F coverage, Medicare Plan F quotes',
  openGraph: {
    title: 'Medicare Plan F Cost 2025 | $227.83/Month Average | Comprehensive Coverage',
    description: 'Medicare Plan F costs $227.83/month average in 2025. Most comprehensive Medigap coverage. High-deductible option $82.50/month. Pre-2020 eligibility required.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Plan F Cost 2025 | $227.83/Month Average',
    description: 'Medicare Plan F costs and benefits for 2025. Most comprehensive Medigap coverage available.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-supplement-plan-f',
  },
};

const planFBenefits = [
  {
    benefit: 'Medicare Part A Deductible',
    coverage: '100%',
    description: 'Covers the $1,676 annual deductible for hospital stays',
    icon: '🏥',
  },
  {
    benefit: 'Medicare Part A Coinsurance',
    coverage: '100%',
    description: 'Covers hospital coinsurance for days 61-90 and lifetime reserve days',
    icon: '🛏️',
  },
  {
    benefit: 'Medicare Part B Deductible',
    coverage: '100%',
    description: 'Covers the $240 annual deductible for medical services',
    icon: '👨‍⚕️',
  },
  {
    benefit: 'Medicare Part B Coinsurance',
    coverage: '100%',
    description: 'Covers the 20% coinsurance for Medicare-approved services',
    icon: '💊',
  },
  {
    benefit: 'Part B Excess Charges',
    coverage: '100%',
    description: 'Covers charges up to 15% above Medicare-approved amounts',
    icon: '💰',
  },
  {
    benefit: 'Skilled Nursing Facility Coinsurance',
    coverage: '100%',
    description: 'Covers coinsurance for days 21-100 in skilled nursing facility',
    icon: '🏥',
  },
  {
    benefit: 'First 3 Pints of Blood',
    coverage: '100%',
    description: 'Covers the first 3 pints of blood needed each year',
    icon: '🩸',
  },
  {
    benefit: 'Part A Hospice Coinsurance',
    coverage: '100%',
    description: 'Covers hospice care coinsurance and copayments',
    icon: '🏠',
  },
  {
    benefit: 'Foreign Travel Emergency',
    coverage: 'Up to $50,000',
    description: 'Covers emergency care during foreign travel (after $250 deductible)',
    icon: '✈️',
  },
];

const eligibilityInfo = {
  whoCanEnroll: [
    'People who became eligible for Medicare before January 1, 2020',
    'People who were enrolled in Plan F before January 1, 2020',
    'People who qualify for Medicare due to disability and enrolled in Plan F before turning 65',
  ],
  whoCannotEnroll: [
    'People who first became eligible for Medicare on or after January 1, 2020',
    'New Medicare beneficiaries turning 65 on or after January 1, 2020',
  ],
};

const planComparison = [
  {
    feature: 'Part A Deductible',
    planF: '✓ Covered',
    planG: '✗ Not Covered',
    planN: '✗ Not Covered',
  },
  {
    feature: 'Part B Deductible',
    planF: '✓ Covered',
    planG: '✗ Not Covered',
    planN: '✗ Not Covered',
  },
  {
    feature: 'Part B Coinsurance',
    planF: '✓ 100% Covered',
    planG: '✓ 100% Covered',
    planN: '✓ With Copays',
  },
  {
    feature: 'Part B Excess Charges',
    planF: '✓ Covered',
    planG: '✓ Covered',
    planN: '✗ Not Covered',
  },
  {
    feature: 'Foreign Travel Emergency',
    planF: '✓ Up to $50,000',
    planG: '✓ Up to $50,000',
    planN: '✓ Up to $50,000',
  },
];

const costFactors = [
  {
    factor: 'Age',
    impact: 'Premiums typically increase as you get older',
    icon: '📈',
  },
  {
    factor: 'Location',
    impact: 'Costs vary significantly by state and ZIP code',
    icon: '📍',
  },
  {
    factor: 'Insurance Company',
    impact: 'Different insurers charge different rates for the same coverage',
    icon: '🏢',
  },
  {
    factor: 'Health Status',
    impact: 'May affect premiums if you apply outside of guaranteed issue periods',
    icon: '🏥',
  },
  {
    factor: 'Tobacco Use',
    impact: 'Tobacco users may pay higher premiums',
    icon: '🚭',
  },
];

export default function MedicareSupplementPlanFPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Supplement', href: '/medicare-supplement-plan-g' },
    { label: 'Plan F', href: '/medicare-supplement-plan-f' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Medicare Supplement Plan F"
        region="National"
        keyMetrics={{
          planType: 'Plan F',
          benefitCount: planFBenefits.length,
          costFactors: costFactors.length,
          eligibilityRestricted: 'true',
          comprehensiveLevel: 'Most Comprehensive'
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "El-Mag Insurance - Medicare Plan F Cost 2025",
            "description": "Medicare Supplement Plan F costs $227.83/month average in 2025. High-deductible Plan F only $82.50/month. Most comprehensive Medigap coverage available.",
            "url": "https://elmag-insurance.com/medicare-supplement-plan-f",
            "telephone": "331-343-2584",
            "serviceType": "Medicare Supplement Plan F",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Medicare Plan F Options",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "FinancialProduct",
                    "name": "Standard Medicare Plan F",
                    "description": "Most comprehensive Medigap coverage with 100% coverage of all Medicare gaps, $227.83 average monthly premium"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "FinancialProduct", 
                    "name": "High-Deductible Medicare Plan F",
                    "description": "Same comprehensive coverage as Plan F with $2,870 annual deductible and $82.50 monthly premium"
                  }
                }
              ]
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Medicare Plan F Cost 2025 | $227.83/Month Average | Medigap Plan F Benefits",
            "description": "Medicare Supplement Plan F costs $227.83/month average in 2025. High-deductible Plan F only $82.50/month. 36% market share. Pre-2020 Medicare eligibility required.",
            "url": "https://elmag-insurance.com/medicare-supplement-plan-f",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does Medicare Plan F cost in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Medicare Supplement Plan F costs an average of $227.83 per month ($2,734 per year) in 2025. High-deductible Plan F costs only $82.50 per month ($990 per year) with a $2,870 annual deductible."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Who is eligible for Medicare Plan F in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Plan F is only available to people who became eligible for Medicare before January 1, 2020, or were already enrolled in Plan F before that date. New Medicare beneficiaries must choose Plan G as the most comprehensive option."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Medicare Plan F cover?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Plan F covers 100% of Medicare Part A deductible ($1,676), Part B deductible ($240), Part A and B coinsurance, Part B excess charges, skilled nursing facility coinsurance, first 3 pints of blood, hospice coinsurance, and foreign travel emergency up to $50,000."
                  }
                }
              ]
            }
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

      {/* Main Content */}
      <main>
        {/* Hero Section with H1 */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Medicare Plan F Cost 2025: $227.83/Month Average
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Medicare Supplement Plan F averages $227.83/month ($2,734/year) in 2025. High-deductible Plan F only $82.50/month. 
                Most comprehensive Medigap coverage - limited to pre-2020 Medicare eligibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/medicare-supplement-plan-g/quote" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('get_quote', 'hero', '/medicare-supplement-plan-g/quote')}
                >
                  Get Plan F Quote
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}
                >
                  Call 331-E-HEALTH
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400">
                  <span className="text-yellow-800 font-bold">!</span>
                </div>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">Important: Plan F Availability</h3>
                <p className="text-yellow-700 mt-2">
                  Medicare Supplement Plan F is only available to people who became eligible for Medicare before January 1, 2020. 
                  If you first became eligible for Medicare on or after January 1, 2020, consider <Link href="/medicare-supplement-plan-g" className="underline font-semibold">Plan G</Link> as the most comprehensive option.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Overview Section */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Medicare Plan F Cost 2025: Current Premium Rates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plan F holds 36% of the Medigap market despite being closed to new enrollees. 
                Rate increases averaging 2.5-3% higher than previous years in 2025. Compare with 
                <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Advantage plans</Link> 
                which may offer different cost structures and benefits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">$227.83</div>
                <p className="text-gray-600 font-medium">Average Monthly Premium</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">$82.50</div>
                <p className="text-gray-600 font-medium">High-Deductible Plan F</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">36%</div>
                <p className="text-gray-600 font-medium">Medigap Market Share</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$2,870</div>
                <p className="text-gray-600 font-medium">High-Deductible Amount</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan F Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Medicare Plan F Covers: Complete Benefits List
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planFBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{benefit.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.benefit}</h3>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      {benefit.coverage}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                While Plan F provides comprehensive coverage, it's important to understand current 
                <Link href="/2025-medicare-advantage-changes-fairfax" className="text-primary-600 hover:text-primary-700 underline mx-1">2025 Medicare changes</Link> 
                that may affect your coverage options and supplement choices.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Who Can Enroll in Plan F?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">✓ Eligible for Plan F</h3>
                  <ul className="space-y-3">
                    {eligibilityInfo.whoCanEnroll.map((item, index) => (
                      <li key={index} className="flex items-start text-green-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">✗ Not Eligible for Plan F</h3>
                  <ul className="space-y-3">
                    {eligibilityInfo.whoCannotEnroll.map((item, index) => (
                      <li key={index} className="flex items-start text-red-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Alternative:</strong> If you're not eligible for Plan F, consider 
                      <Link href="/medicare-supplement-plan-g" className="text-blue-700 hover:text-blue-800 underline font-semibold">Plan G</Link>, 
                      which provides nearly identical coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Plan F Compares to Other Medicare Supplement Plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Plan F</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-600">Plan G</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Plan N</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-center">{item.planF}</td>
                      <td className="px-6 py-4 text-sm text-center">{item.planG}</td>
                      <td className="px-6 py-4 text-sm text-center">{item.planN}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Supplement vs. Advantage Plan Comparison</h3>
              <p className="text-blue-700 text-sm mb-4">
                Medicare Supplement plans work differently than Medicare Advantage plans. While supplements like Plan F work alongside Original Medicare, 
                Medicare Advantage plans replace your Original Medicare coverage entirely. Explore the differences:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/medicare-supplement-plan-g" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                  Medicare Supplement Plan G
                </Link>
                <Link href="/medicare-advantage" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                  Medicare Advantage Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Factors That Affect Plan F Costs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl mb-3">{factor.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{factor.factor}</h3>
                  <p className="text-gray-600 text-sm">{factor.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Plan F Advantages and Considerations
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Advantages</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Most comprehensive coverage available
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Predictable healthcare costs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      No surprise medical bills
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Freedom to see any Medicare provider
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      No prior authorization required
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Considerations</h3>
                  <ul className="space-y-3 text-yellow-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Higher monthly premiums than other plans
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Limited availability (pre-2020 Medicare eligibility)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      May encourage overutilization of services
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Premiums may increase over time
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      No prescription drug coverage included
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Medicare Supplement Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">For New Medicare Beneficiaries:</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      If you're not eligible for Plan F, these alternatives provide comprehensive coverage:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-supplement-plan-g" className="text-primary-600 hover:text-primary-700 underline">Medicare Supplement Plan G</Link> (most comprehensive for new beneficiaries)</li>
                      <li>• Medicare Supplement Plan N (lower premiums, small copays)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800 mb-2">High-Deductible Options:</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Lower premium options with higher out-of-pocket costs:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• High-Deductible Plan F ($82.50/month, $2,870 deductible)</li>
                      <li>• High-Deductible Plan G (similar benefits, lower premiums)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Getting Started with Plan F
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Check Eligibility</h3>
                  <p className="text-gray-600">Confirm you became eligible for Medicare before January 1, 2020, or were already enrolled in Plan F.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare Prices</h3>
                  <p className="text-gray-600">Get quotes from multiple insurance companies to find the best rate for identical Plan F coverage.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Enroll</h3>
                  <p className="text-gray-600">Work with a licensed agent to complete your application and ensure you have the right effective date.</p>
                </div>
              </div>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Considerations for Medicare Planning</h3>
                <p className="text-gray-600 mb-4">
                  Medicare Supplement premiums can vary significantly by location. Explore regional Medicare guidance:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">High-Cost Areas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/new-york" className="text-primary-600 hover:text-primary-700 underline">New York Medicare Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/los-angeles-county-california" className="text-primary-600 hover:text-primary-700 underline">Los Angeles County Options</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Growing Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-700 underline">Tarrant County TX Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-700 underline">Monroe County NY Options</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Healthcare Systems:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline">Birmingham Healthcare Comparison</Link></li>
                      <li>• <Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-700 underline">Nashville Provider Networks</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Medicare planning extends beyond healthcare coverage. Consider pairing your Medicare choice with 
                    <Link href="/annuities" className="text-primary-600 hover:text-primary-700 underline mx-1">annuities for retirement income security</Link> 
                    to create a comprehensive retirement strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Plan F Coverage?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Medicare Supplement specialists can help you determine if you're eligible for Plan F 
              and find the best rates from top insurance companies in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/medicare-supplement-plan-g/quote" 
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                onClick={() => (window as any).trackLandingPageCTA?.('get_quote', 'footer', '/medicare-supplement-plan-g/quote')}
              >
                Get Free Quote
              </Link>
              <a 
                href="tel:331-343-2584" 
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors text-center"
                onClick={() => (window as any).trackLandingPagePhoneCall?.('footer')}
              >
                331-E-HEALTH
              </a>
            </div>
          </div>
        </section>
      </main>

      </div>
    </>
  );
}