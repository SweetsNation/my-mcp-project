import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';
import MarketingOptimizer from '@/components/MarketingOptimizer';
import { PrimaryLinksSection, ContextualLinksSection, CrossSellSection } from '@/components/InternalLinksSection';

export const metadata: Metadata = {
  title: 'Medicare Plan N Cost 2025 | $165.45/Month Average | Medigap Plan N Benefits',
  description: 'Medicare Supplement Plan N costs $165.45/month average in 2025. Nearly comprehensive coverage with small copays. Popular alternative to Plan G with lower premiums.',
  keywords: 'Medicare Plan N cost 2025, Medigap Plan N premiums, Medicare Supplement Plan N benefits, Plan N vs Plan G, Medicare Plan N rates, Plan N copays, Medicare Supplement Plan N coverage, Medigap Plan N quotes, Medicare Plan N enrollment',
  openGraph: {
    title: 'Medicare Plan N Cost 2025 | $165.45/Month Average | Smart Medigap Choice',
    description: 'Medicare Plan N costs $165.45/month average in 2025. Nearly comprehensive coverage with small copays. Popular alternative to Plan G.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Plan N Cost 2025 | $165.45/Month Average',
    description: 'Medicare Plan N costs and benefits for 2025. Smart balance of coverage and affordability.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/medicare-supplement-plan-n',
  },
};

const planNBenefits = [
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
    benefit: 'Medicare Part B Coinsurance',
    coverage: 'With Copays',
    description: 'Covers Part B coinsurance except for $20 office visit and $50 ER copays',
    icon: '👨‍⚕️',
  },
  {
    benefit: 'Part B Deductible',
    coverage: 'Not Covered',
    description: 'You pay the $240 annual Medicare Part B deductible',
    icon: '💳',
  },
  {
    benefit: 'Part B Excess Charges',
    coverage: 'Not Covered',
    description: 'You pay charges up to 15% above Medicare-approved amounts',
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

const planNCopays = [
  {
    service: 'Doctor Office Visits',
    copay: '$20',
    description: 'Copay for office visits and consultations',
    frequency: 'Per Visit',
  },
  {
    service: 'Emergency Room Visits',
    copay: '$50',
    description: 'Copay for emergency room visits (waived if admitted)',
    frequency: 'Per Visit',
  },
];

const planComparison = [
  {
    feature: 'Part A Deductible',
    planN: '✓ Covered',
    planG: '✓ Covered',
    planF: '✓ Covered',
  },
  {
    feature: 'Part B Deductible',
    planN: '✗ Not Covered',
    planG: '✗ Not Covered',
    planF: '✓ Covered',
  },
  {
    feature: 'Part B Coinsurance',
    planN: '✓ With Copays',
    planG: '✓ 100% Covered',
    planF: '✓ 100% Covered',
  },
  {
    feature: 'Part B Excess Charges',
    planN: '✗ Not Covered',
    planG: '✓ Covered',
    planF: '✓ Covered',
  },
  {
    feature: 'Foreign Travel Emergency',
    planN: '✓ Up to $50,000',
    planG: '✓ Up to $50,000',
    planF: '✓ Up to $50,000',
  },
  {
    feature: 'Average Monthly Premium',
    planN: '$165.45',
    planG: '$195.58',
    planF: '$227.83',
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

export default function MedicareSupplementPlanNPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Medicare Supplement', href: '/medicare-supplement' },
    { label: 'Plan N', href: '/medicare-supplement-plan-n' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Medicare Supplement Plan N"
        region="National"
        keyMetrics={{
          planType: 'Plan N',
          benefitCount: planNBenefits.length,
          costFactors: costFactors.length,
          eligibilityRestricted: 'false',
          comprehensiveLevel: 'Nearly Comprehensive'
        }}
      />

      {/* Marketing Strategy Implementation */}
      <MarketingOptimizer
        pageKey="medicare-supplement-plan-n"
        enableDynamicOptimization={true}
        trackKeywordPerformance={true}
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
            "name": "El-Mag Insurance - Medicare Plan N Cost 2025",
            "description": "Medicare Supplement Plan N costs $165.45/month average in 2025. Nearly comprehensive Medigap coverage with small copays for office visits and emergency room.",
            "url": "https://elmag-insurance.com/medicare-supplement-plan-n",
            "telephone": "331-343-2584",
            "serviceType": "Medicare Supplement Plan N",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Medicare Plan N Options",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "FinancialProduct",
                    "name": "Standard Medicare Plan N",
                    "description": "Nearly comprehensive Medigap coverage with $20 office visit and $50 ER copays, $165.45 average monthly premium"
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
            "name": "Medicare Plan N Cost 2025 | $165.45/Month Average | Medigap Plan N Benefits",
            "description": "Medicare Supplement Plan N costs $165.45/month average in 2025. Nearly comprehensive coverage with small copays. Popular alternative to Plan G with lower premiums.",
            "url": "https://elmag-insurance.com/medicare-supplement-plan-n",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does Medicare Plan N cost in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Medicare Supplement Plan N costs an average of $165.45 per month ($1,985 per year) in 2025. This is typically $30-60 less per month than Plan G, making it a popular cost-effective alternative."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What copays does Medicare Plan N have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Medicare Plan N has two copays: $20 for doctor office visits and $50 for emergency room visits (waived if you're admitted to the hospital). These are the only out-of-pocket costs beyond your monthly premium."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Medicare Plan N cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Plan N covers Medicare Part A deductible ($1,676), Part A and B coinsurance (with small copays), skilled nursing facility coinsurance, first 3 pints of blood, hospice coinsurance, and foreign travel emergency up to $50,000. It does not cover Part B deductible or excess charges."
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
                Medicare Plan N Cost 2025: $165.45/Month Average
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Medicare Supplement Plan N averages $165.45/month ($1,985/year) in 2025. Nearly comprehensive coverage with just
                $20 office visit and $50 ER copays. Popular alternative to Plan G with lower premiums.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/medicare-supplement-plan-n/quote"
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('get_quote', 'hero', '/medicare-supplement-plan-n/quote')}
                >
                  Get Plan N Quote
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

        {/* Cost Overview Section */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Medicare Plan N Cost 2025: Premium Rates & Copays
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plan N offers excellent value with nearly comprehensive coverage at a lower premium than Plan G.
                Small copays help keep premiums affordable while maintaining robust protection.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">$165.45</div>
                <p className="text-gray-600 font-medium">Average Monthly Premium</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">$20</div>
                <p className="text-gray-600 font-medium">Office Visit Copay</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$50</div>
                <p className="text-gray-600 font-medium">Emergency Room Copay</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$240</div>
                <p className="text-gray-600 font-medium">Part B Deductible (You Pay)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan N Copays */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Understanding Plan N Copays
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {planNCopays.map((copay, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{copay.service}</h3>
                      <span className="text-2xl font-bold text-blue-600">{copay.copay}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{copay.description}</p>
                    <p className="text-sm text-gray-600">{copay.frequency}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Important Note About Emergency Room Copay</h3>
                <p className="text-green-700">
                  The $50 emergency room copay is waived if you are admitted to the hospital as an inpatient.
                  This means you only pay the copay for emergency room visits where you're treated and released.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan N Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Medicare Plan N Covers: Complete Benefits List
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planNBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{benefit.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.benefit}</h3>
                  </div>
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-1 rounded text-sm font-semibold ${
                      benefit.coverage === '100%' ? 'bg-green-100 text-green-800' :
                      benefit.coverage === 'With Copays' ? 'bg-yellow-100 text-yellow-800' :
                      benefit.coverage === 'Not Covered' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {benefit.coverage}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Plan N Compares to Other Medicare Supplement Plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Plan N</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-600">Plan G</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Plan F</th>
                  </tr>
                </thead>
                <tbody>
                  {planComparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-center">{item.planN}</td>
                      <td className="px-6 py-4 text-sm text-center">{item.planG}</td>
                      <td className="px-6 py-4 text-sm text-center">{item.planF}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Plan N vs Plan G: The Key Difference</h3>
              <p className="text-blue-700 text-sm mb-4">
                Plan N costs about $30-60 less per month than Plan G but requires small copays for doctor visits ($20) and
                emergency room visits ($50). For most people, the annual savings from lower premiums exceed the copay costs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/medicare-supplement-plan-g" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                  Medicare Supplement Plan G
                </Link>
                <Link href="/medicare-supplement-plan-f" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                  Medicare Supplement Plan F
                </Link>
                <Link href="/medicare-cost-calculator" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                  Medicare Cost Calculator
                </Link>
                <Link href="/medicare-disability-insurance" className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors">
                  Disability Medicare
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Plan N Cost Analysis: When It Makes Sense
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Annual Cost Comparison Example
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Plan N Total Annual Cost</h4>
                    <div className="space-y-3 text-green-700">
                      <div className="flex justify-between">
                        <span>Monthly Premium:</span>
                        <span className="font-semibold">$165.45 × 12 = $1,985</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Part B Deductible:</span>
                        <span className="font-semibold">$240</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Office Visits (10/year):</span>
                        <span className="font-semibold">$20 × 10 = $200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ER Visits (1/year):</span>
                        <span className="font-semibold">$50</span>
                      </div>
                      <hr className="border-green-300" />
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total Annual Cost:</span>
                        <span className="font-bold">$2,475</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Plan G Total Annual Cost</h4>
                    <div className="space-y-3 text-blue-700">
                      <div className="flex justify-between">
                        <span>Monthly Premium:</span>
                        <span className="font-semibold">$195.58 × 12 = $2,347</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Part B Deductible:</span>
                        <span className="font-semibold">$240</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Office Visits:</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ER Visits:</span>
                        <span className="font-semibold">$0</span>
                      </div>
                      <hr className="border-blue-300" />
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total Annual Cost:</span>
                        <span className="font-bold">$2,587</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-green-600 font-semibold text-lg">
                    Plan N saves $112 annually in this example
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Savings increase if you have fewer doctor visits or choose Plan N in areas where the premium difference is larger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Factors That Affect Plan N Costs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costFactors.map((factor, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">{factor.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{factor.factor}</h3>
                  <p className="text-gray-600 text-sm">{factor.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Plan N Advantages and Considerations
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Advantages</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Lower premiums than Plan G and Plan F
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Nearly comprehensive coverage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Predictable out-of-pocket costs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Freedom to see any Medicare provider
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      No prior authorization required
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Available to all Medicare beneficiaries
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-4">Considerations</h3>
                  <ul className="space-y-3 text-yellow-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      $20 copay for each doctor visit
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      $50 copay for emergency room visits
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Part B deductible not covered ($240)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                      Part B excess charges not covered
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
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Getting Started with Plan N
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Evaluate Your Usage</h3>
                  <p className="text-gray-600">Consider how often you visit doctors and use healthcare services to determine if Plan N's copays work for your situation.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare Prices</h3>
                  <p className="text-gray-600">Get quotes from multiple insurance companies to find the best rate for identical Plan N coverage in your area.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Enroll</h3>
                  <p className="text-gray-600">Work with a licensed agent to complete your application and ensure you have the right effective date for your coverage.</p>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Plan N Enrollment Timing</h3>
                <p className="text-blue-700 text-sm">
                  Plan N is available year-round, but the best time to enroll is during your Medigap Open Enrollment Period
                  (6 months starting when you first enroll in Medicare Part B at age 65 or older) for guaranteed issue rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Links Section */}
        <PrimaryLinksSection
          currentPageKey="medicare-supplement-plan-n"
          className="py-16"
        />

        {/* Related Topics Section */}
        <ContextualLinksSection
          currentPageKey="medicare-supplement-plan-n"
          className="py-12 bg-white"
        />

        {/* Cross-Sell Section */}
        <CrossSellSection
          currentPageKey="medicare-supplement-plan-n"
          className="py-12 bg-gray-50"
        />

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Plan N Coverage?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our Medicare Supplement specialists can help you compare Plan N rates from top insurance companies
              and determine if it's the right choice for your healthcare needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/medicare-supplement-plan-n/quote"
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                onClick={() => (window as any).trackLandingPageCTA?.('get_quote', 'footer', '/medicare-supplement-plan-n/quote')}
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