import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Best Annuities 2025 | Fixed Annuity Rates up to 6.80% | Retirement Annuities',
  description: 'Discover the best annuities for 2025. Fixed annuity rates up to 6.80% - highest in over a decade. Compare immediate annuities, MYGAs & indexed annuities for guaranteed retirement income.',
  keywords: 'best annuities 2025, fixed annuity rates, retirement annuities, immediate annuities, MYGA rates 2025, indexed annuities, guaranteed retirement income, best fixed annuities for retirement, highest annuity rates 2025, retirement planning annuities',
  openGraph: {
    title: 'Best Annuities 2025 | Fixed Rates up to 6.80% | Guaranteed Retirement Income',
    description: 'Find the best annuities for 2025 with fixed rates up to 6.80%. Compare top-rated annuity companies for guaranteed retirement income.',
    type: 'website',
    locale: 'en_US',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Best Annuities 2025 | Fixed Rates up to 6.80%',
    description: 'Discover the best annuities for 2025 with guaranteed retirement income and rates up to 6.80%.',
  },
  alternates: {
    canonical: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/annuities',
  },
};

const annuityTypes = [
  {
    type: 'Fixed Annuities',
    description: 'Guaranteed interest rate and predictable income payments',
    features: [
      'Guaranteed minimum interest rate',
      'Principal protection',
      'Predictable income stream',
      'No market risk',
    ],
    bestFor: 'Conservative investors seeking guaranteed returns',
    icon: '🛡️',
  },
  {
    type: 'Variable Annuities',
    description: 'Investment options with potential for higher returns',
    features: [
      'Investment sub-account options',
      'Potential for growth',
      'Death benefit protection',
      'Tax-deferred growth',
    ],
    bestFor: 'Investors comfortable with market risk',
    icon: '📈',
  },
  {
    type: 'Indexed Annuities',
    description: 'Returns linked to market index performance with downside protection',
    features: [
      'Market upside participation',
      'Downside protection',
      'Various index options',
      'Guaranteed minimum values',
    ],
    bestFor: 'Balanced approach to growth and protection',
    icon: '⚖️',
  },
];

const annuityBenefits = [
  {
    title: 'Guaranteed Income',
    description: 'Receive predictable payments for life or a specified period',
    icon: '💰',
  },
  {
    title: 'Tax-Deferred Growth',
    description: 'Your money grows tax-deferred until you begin withdrawals',
    icon: '🏛️',
  },
  {
    title: 'No Contribution Limits',
    description: 'Unlike IRAs and 401(k)s, annuities have no annual contribution limits',
    icon: '📊',
  },
  {
    title: 'Principal Protection',
    description: 'Many annuities protect your initial investment from market downturns',
    icon: '🛡️',
  },
  {
    title: 'Death Benefits',
    description: 'Provide financial security for your beneficiaries',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Flexible Options',
    description: 'Choose from immediate or deferred payout options',
    icon: '⏰',
  },
];

const considerations = [
  {
    title: 'Surrender Charges',
    description: 'Early withdrawal penalties may apply during the surrender period',
  },
  {
    title: 'Fees and Expenses',
    description: 'Understand all fees including management fees and rider costs',
  },
  {
    title: 'Liquidity',
    description: 'Limited access to your money without penalties during surrender period',
  },
  {
    title: 'Inflation Risk',
    description: 'Fixed payments may lose purchasing power over time due to inflation',
  },
];

export default function AnnuitiesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Annuities', href: '/annuities' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Annuities - Secure Your Retirement"
        region="National"
        keyMetrics={{
          annuityTypes: annuityTypes.length,
          benefitCount: annuityBenefits.length,
          considerationCount: considerations.length,
          productType: 'annuities'
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
            "name": "El-Mag Insurance - Best Annuities 2025",
            "description": "Discover the best annuities for 2025 with fixed rates up to 6.80%. Compare retirement annuities, immediate annuities, and MYGAs for guaranteed retirement income.",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/annuities",
            "telephone": "331-343-2584",
            "serviceType": "Annuity Services",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Annuity Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "FinancialProduct",
                    "name": "Fixed Annuities",
                    "description": "Guaranteed interest rate up to 6.80% with predictable income payments and principal protection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "FinancialProduct", 
                    "name": "MYGA (Multi-Year Guaranteed Annuities)",
                    "description": "Multi-year guaranteed rates up to 6.45% with tax-deferred growth"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "FinancialProduct",
                    "name": "Indexed Annuities", 
                    "description": "Market upside participation with downside protection and guaranteed minimum values"
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
            "name": "Best Annuities 2025 | Fixed Annuity Rates up to 6.80%",
            "description": "Discover the best annuities for 2025. Fixed annuity rates up to 6.80% - highest in over a decade. Compare immediate annuities, MYGAs & indexed annuities.",
            "url": "https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/annuities",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the best annuity rates for 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best fixed annuity rates for 2025 range up to 6.80%, with MYGA rates up to 6.45%. These are the highest rates in over a decade, fueled by recent federal rate hikes."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What types of annuities are available in 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The main types of annuities available are Fixed Annuities (guaranteed rates), Variable Annuities (investment options), and Indexed Annuities (market-linked with downside protection). Each offers different risk/reward profiles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who should consider annuities for retirement?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Annuities are best for pre-retirees seeking guaranteed income, conservative investors wanting principal protection, those who have maximized other retirement accounts, and individuals concerned about outliving their money."
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
                Best Annuities 2025: Fixed Rates up to 6.80%
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Discover the highest annuity rates in over a decade. Fixed annuity rates up to 6.80%, 
                MYGA rates up to 6.45%. Compare the best retirement annuities for guaranteed income.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('get_quote', 'hero', '/contact')}
                >
                  Get Free Annuity Quote
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

        {/* Current Market Overview */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2025 Annuity Rates: Highest in Over a Decade
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fixed annuity rates are now ranging between 5.25% and 6.80%, fueled by recent federal rate hikes. 
                Annuity sales have grown 70% since 2014, with over $28 billion in sales in 2024.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">6.80%</div>
                <p className="text-gray-600 font-medium">Best Fixed Annuity Rate</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">6.45%</div>
                <p className="text-gray-600 font-medium">Best MYGA Rate</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                <p className="text-gray-600 font-medium">Sales Growth Since 2014</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$28B</div>
                <p className="text-gray-600 font-medium">2024 Annual Sales</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Annuities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Are the Best Annuities for 2025?
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 mb-6">
                  An annuity is a financial product that provides guaranteed income payments in exchange for 
                  an initial investment. Annuities are designed to help you accumulate money for retirement 
                  and then convert that money into a stream of payments during your retirement years.
                </p>
                <p className="text-lg text-gray-600">
                  Think of an annuity as a contract between you and an insurance company. You make a payment 
                  or series of payments, and in return, the insurer agrees to make periodic payments to you 
                  beginning either immediately or at some future date. While annuities focus on retirement income, they complement other retirement strategies like <Link href="/medicare-advantage" className="text-primary-600 hover:text-primary-700 underline">Medicare Advantage plans</Link> which provide healthcare coverage during retirement years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Annuities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Types of Annuities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {annuityTypes.map((annuity, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{annuity.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900">{annuity.type}</h3>
                    <p className="text-gray-600 mt-2">{annuity.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {annuity.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Best for:</span> {annuity.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Planning for retirement involves both income security and healthcare coverage. Learn about 
                <Link href="/medicare-supplement-plan-f" className="text-primary-600 hover:text-primary-700 underline mx-1">Medicare Supplement Plan F</Link> 
                for comprehensive healthcare protection alongside your annuity income strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits of Annuities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefits of Annuities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {annuityBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Annuities Work */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How Annuities Work
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Accumulation Phase</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-primary-600 font-bold text-sm">1</span>
                      </span>
                      <span>You make a lump sum payment or series of payments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-primary-600 font-bold text-sm">2</span>
                      </span>
                      <span>Your money grows tax-deferred over time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-primary-600 font-bold text-sm">3</span>
                      </span>
                      <span>Interest or investment gains compound without taxation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Distribution Phase</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-secondary-600 font-bold text-sm">1</span>
                      </span>
                      <span>Choose when to begin receiving payments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-secondary-600 font-bold text-sm">2</span>
                      </span>
                      <span>Select payment frequency and duration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-secondary-600 font-bold text-sm">3</span>
                      </span>
                      <span>Receive guaranteed income payments as scheduled</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Considerations for Retirement Planning</h3>
                <p className="text-gray-600 mb-4">
                  Retirement planning needs can vary significantly by location due to cost of living, healthcare availability, and local insurance markets. Explore regional-specific guidance:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">High-Cost Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/new-york" className="text-primary-600 hover:text-primary-700 underline">New York Medicare Advantage</Link></li>
                      <li>• <Link href="/medicare-advantage/west-coast" className="text-primary-600 hover:text-primary-700 underline">West Coast Medicare Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/los-angeles-county-california" className="text-primary-600 hover:text-primary-700 underline">Los Angeles County Plans</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Growth Markets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-700 underline">Tarrant County Texas Plans</Link></li>
                      <li>• <Link href="/medicare-advantage/southwest" className="text-primary-600 hover:text-primary-700 underline">Southwest Medicare Options</Link></li>
                      <li>• <Link href="/medicare-advantage/dallas-county-texas" className="text-primary-600 hover:text-primary-700 underline">Dallas County Medicare</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Considerations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Important Considerations
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
                <div className="grid md:grid-cols-2 gap-6">
                  {considerations.map((consideration, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">{consideration.title}</h4>
                        <p className="text-yellow-700 text-sm">{consideration.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Consider Annuities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Who Should Consider Annuities?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-4">Good Candidates for Annuities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Pre-retirees seeking guaranteed income
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Conservative investors wanting principal protection
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Those who have maximized other retirement accounts
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Individuals concerned about outliving their money
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      People wanting tax-deferred growth
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">May Not Be Right For</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Young investors with long time horizons
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Those needing immediate liquidity
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Investors comfortable with market volatility
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      People with limited retirement savings
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Those who need flexible access to funds
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market-Specific Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Local Market Insights
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 text-center mb-8">
                Annuity planning can vary by region due to state regulations, cost of living, and local market conditions. 
                Explore market-specific resources for comprehensive retirement planning:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">East Coast Markets</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/medicare-advantage/monroe-county" className="text-primary-600 hover:text-primary-700 underline">Monroe County (Rochester) Plans</Link></li>
                    <li><Link href="/medicare-advantage/mid-atlantic" className="text-primary-600 hover:text-primary-700 underline">Mid-Atlantic Region Options</Link></li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Southern Markets</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/uab-vs-st-vincents-medicare-advantage-birmingham" className="text-primary-600 hover:text-primary-700 underline">Birmingham Healthcare Systems</Link></li>
                    <li><Link href="/vanderbilt-vs-hca-medicare-advantage-nashville" className="text-primary-600 hover:text-primary-700 underline">Nashville Provider Networks</Link></li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Texas Markets</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/medicare-advantage/tarrant-county-texas" className="text-primary-600 hover:text-primary-700 underline">Tarrant County (Fort Worth)</Link></li>
                    <li><Link href="/medicare-advantage/dallas-county-texas" className="text-primary-600 hover:text-primary-700 underline">Dallas County Plans</Link></li>
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
              Getting Started with Annuities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assess Your Needs</h3>
                <p className="text-gray-600">Determine your retirement income goals and risk tolerance to find the right annuity type.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare Options</h3>
                <p className="text-gray-600">Review different annuity products, features, and insurance companies to find the best fit.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work with an Expert</h3>
                <p className="text-gray-600">Partner with a licensed agent to navigate the details and make an informed decision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Financial Planning Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete Your Retirement Strategy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Protect your retirement income from unexpected medical costs with comprehensive Medicare coverage.
                </p>
                <Link 
                  href="/2025-medicare-advantage-changes-fairfax" 
                  className="text-primary-600 hover:text-primary-700 underline font-medium"
                >
                  Learn About 2025 Medicare Changes →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Supplemental Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Fill coverage gaps with Medicare Supplement insurance for comprehensive protection.
                </p>
                <Link 
                  href="/medicare-supplement-plan-f" 
                  className="text-primary-600 hover:text-primary-700 underline font-medium"
                >
                  Explore Medicare Supplement Plans →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Resources</h3>
                <p className="text-gray-600 mb-4">
                  Ensure your retirement planning resources are accessible to all family members.
                </p>
                <Link 
                  href="/accessibility" 
                  className="text-primary-600 hover:text-primary-700 underline font-medium"
                >
                  View Accessibility Information →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your Retirement Income?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our licensed insurance professionals can help you understand your annuity options 
              and find the right solution for your retirement planning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                onClick={() => (window as any).trackLandingPageCTA?.('consultation', 'footer', '/contact')}
              >
                Get Free Consultation
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