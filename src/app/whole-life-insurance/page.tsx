import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Whole Life Insurance 2025 | Permanent Coverage & Cash Value | Compare Best Rates | Life Insurance Guide',
  description: 'Comprehensive whole life insurance guide 2025. Compare rates, understand cash value benefits, fixed premiums, and tax advantages. Find the best permanent life insurance coverage for estate planning, retirement supplement, and family protection. Expert guidance on mutual company dividends and borrowing options.',
  keywords: 'whole life insurance 2025, permanent life insurance, cash value life insurance, whole life insurance rates, life insurance comparison, best whole life insurance, whole life vs term life, cash value growth, permanent coverage, fixed premiums life insurance, whole life insurance benefits, tax free death benefit, life insurance cash value, whole life insurance dividends, permanent life insurance rates, whole life insurance quotes, best whole life insurance companies, whole life insurance estate planning, cash value loan, whole life insurance retirement, guaranteed life insurance, mutual life insurance companies, life insurance tax advantages, whole life insurance riders',
  openGraph: {
    title: 'Whole Life Insurance 2025 | Permanent Coverage & Cash Value Guide',
    description: 'Complete whole life insurance guide covering permanent coverage, cash value benefits, fixed premiums, and rate comparisons. Expert guidance on permanent life insurance options.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance - Life Insurance Specialists',
    images: [
      {
        url: '/images/whole-life-insurance-guide-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Whole Life Insurance 2025 Complete Guide Permanent Coverage Cash Value'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ElMagInsurance',
    title: 'Whole Life Insurance 2025 | Complete Coverage Guide',
    description: 'Whole life insurance explained: permanent coverage, cash value benefits, fixed premiums, and expert guidance for life insurance decisions.',
    images: ['/images/whole-life-insurance-guide-2025.jpg']
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/whole-life-insurance',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const wholeLifeBasics = {
  coverage: 'Permanent (lifetime)',
  premiums: 'Fixed and guaranteed',
  cashValue: 'Builds over time with guaranteed growth',
  dividends: 'May be paid by mutual insurance companies',
  borrowing: 'Can borrow against cash value'
};

const wholeLifeBenefits = [
  {
    benefit: 'Permanent Coverage',
    description: 'Coverage lasts your entire lifetime as long as premiums are paid',
    icon: '🛡️'
  },
  {
    benefit: 'Fixed Premiums',
    description: 'Premiums never increase and are guaranteed for life',
    icon: '💰'
  },
  {
    benefit: 'Cash Value Growth',
    description: 'Builds cash value with guaranteed minimum growth rate',
    icon: '📈'
  },
  {
    benefit: 'Tax Advantages',
    description: 'Cash value grows tax-deferred; death benefit is tax-free',
    icon: '🏛️'
  },
  {
    benefit: 'Dividend Potential',
    description: 'Mutual companies may pay annual dividends to policyholders',
    icon: '💎'
  },
  {
    benefit: 'Borrowing Options',
    description: 'Can borrow against cash value for various financial needs',
    icon: '🏦'
  }
];

const wholeLifeVsOthers = [
  {
    type: 'Whole Life',
    coverage: 'Permanent',
    premiums: 'Fixed, Higher',
    cashValue: 'Yes, Guaranteed Growth',
    complexity: 'Moderate',
    bestFor: 'Lifetime protection with savings component'
  },
  {
    type: 'Term Life',
    coverage: 'Temporary (10-30 years)',
    premiums: 'Low, Increasing',
    cashValue: 'No',
    complexity: 'Simple',
    bestFor: 'Temporary protection needs'
  },
  {
    type: 'Universal Life',
    coverage: 'Permanent',
    premiums: 'Flexible',
    cashValue: 'Yes, Variable Growth',
    complexity: 'High',
    bestFor: 'Flexible premium needs'
  },
  {
    type: 'Variable Life',
    coverage: 'Permanent', 
    premiums: 'Fixed',
    cashValue: 'Yes, Investment-Based',
    complexity: 'Very High',
    bestFor: 'Investment control preference'
  }
];

const sampleRates = [
  {
    age: 30,
    male: '$45-65/month',
    female: '$40-55/month',
    coverage: '$250,000',
    notes: 'Excellent health, non-smoker'
  },
  {
    age: 40,
    male: '$85-120/month',
    female: '$75-105/month',
    coverage: '$250,000',
    notes: 'Excellent health, non-smoker'
  },
  {
    age: 50,
    male: '$165-230/month',
    female: '$145-200/month',
    coverage: '$250,000',
    notes: 'Excellent health, non-smoker'
  },
  {
    age: 60,
    male: '$315-425/month',
    female: '$265-355/month',
    coverage: '$250,000',
    notes: 'Excellent health, non-smoker'
  }
];

const usesCases = [
  {
    scenario: 'Estate Planning',
    description: 'Provides tax-free death benefit to heirs and can help with estate tax planning',
    considerations: ['Large estates', 'Business succession', 'Charitable giving'],
    wholeLifeAdvantage: 'Permanent coverage ensures benefit availability'
  },
  {
    scenario: 'Income Replacement',
    description: 'Replaces income for surviving family members permanently',
    considerations: ['Spouse retirement security', 'Children\'s education', 'Ongoing expenses'],
    wholeLifeAdvantage: 'Lifetime protection regardless of health changes'
  },
  {
    scenario: 'Business Protection',
    description: 'Protects business interests and provides succession planning',
    considerations: ['Key person insurance', 'Buy-sell agreements', 'Business debt'],
    wholeLifeAdvantage: 'Predictable premiums for business budgeting'
  },
  {
    scenario: 'Retirement Supplement',
    description: 'Cash value can supplement retirement income through loans or withdrawals',
    considerations: ['Tax-advantaged growth', 'Access to funds', 'Retirement timing'],
    wholeLifeAdvantage: 'Tax-deferred cash value accumulation'
  }
];

export default function WholeLifeInsurancePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Life Insurance', href: '/term-life-insurance' },
    { label: 'Whole Life Insurance', href: '/whole-life-insurance' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  // Track scroll depth and time on page
  React.useEffect(() => {
    let scrollDepth = 0;
    let timeOnPage = Date.now();
    let hasTrackedMidpoint = false;
    let hasTrackedCompletion = false;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = Math.round((scrollTop / documentHeight) * 100);
      
      if (currentDepth > scrollDepth) {
        scrollDepth = currentDepth;
        
        // Track 50% scroll depth
        if (scrollDepth >= 50 && !hasTrackedMidpoint) {
          hasTrackedMidpoint = true;
          (window as any).gtag?.('event', 'scroll_depth_50', {
            event_category: 'engagement',
            event_label: 'whole_life_insurance_guide',
            custom_parameters: {
              landing_page_type: 'insurance_education',
              time_to_midpoint: Date.now() - timeOnPage
            }
          });
        }
        
        // Track 90% scroll depth (content completion)
        if (scrollDepth >= 90 && !hasTrackedCompletion) {
          hasTrackedCompletion = true;
          (window as any).gtag?.('event', 'content_completion', {
            event_category: 'engagement',
            event_label: 'whole_life_insurance_guide',
            custom_parameters: {
              landing_page_type: 'insurance_education',
              total_time_on_page: Date.now() - timeOnPage,
              final_scroll_depth: scrollDepth
            }
          });
        }
      }
    };

    // Track page view and initial metrics
    (window as any).gtag?.('event', 'page_view', {
      page_title: 'Whole Life Insurance 2025 Complete Guide',
      page_location: window.location.href,
      custom_parameters: {
        landing_page_type: 'insurance_education',
        service_type: 'whole_life_insurance',
        coverage_type: 'permanent',
        cash_value: 'yes',
        premium_type: 'fixed',
        education_sections: 6,
        rate_table_included: 'yes',
        comparison_chart_included: 'yes',
        use_cases_covered: 4
      }
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Track time on page when component unmounts
      const finalTimeOnPage = Date.now() - timeOnPage;
      if (finalTimeOnPage > 30000) { // Only track if user spent more than 30 seconds
        (window as any).gtag?.('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: 'whole_life_insurance_guide',
          value: Math.round(finalTimeOnPage / 1000), // Convert to seconds
          custom_parameters: {
            landing_page_type: 'insurance_education',
            final_scroll_depth: scrollDepth
          }
        });
      }
    };
  }, []);

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="Whole Life Insurance Coverage Guide"
        demographics={{
          avgAge: 45
        }}
        keyMetrics={{
          serviceType: 'whole_life_insurance',
          coverageType: 'permanent',
          cashValue: 'yes',
          pageType: 'insurance_education'
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
            "@type": "Service",
            "name": "Whole Life Insurance Guidance",
            "description": "Expert guidance on whole life insurance, permanent coverage options, cash value benefits, and rate comparisons to help you find the right life insurance protection.",
            "provider": {
              "@type": "Organization",
              "name": "El-Mag Insurance",
              "telephone": "331-343-2584",
              "url": "https://elmag-insurance.com"
            },
            "areaServed": "United States",
            "serviceType": "Life Insurance Consultation"
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
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Whole Life Insurance 2025: Permanent Coverage & Cash Value Guide
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Discover the benefits of whole life insurance with permanent coverage, guaranteed cash value growth, 
                  and fixed premiums. Compare rates and find the best whole life insurance for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPageCTA?.('whole_life_quote', 'hero', '/contact')}
                  >
                    Get Whole Life Quote
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

          {/* Whole Life Basics */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                What is Whole Life Insurance?
              </h2>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-gray-600 mb-6">
                  Whole life insurance provides permanent life insurance coverage with fixed premiums, 
                  guaranteed cash value growth, and lifetime protection for your beneficiaries. Unlike temporary coverage, 
                  whole life offers financial security that extends beyond employment transitions where 
                  <Link href="/cobra-insurance" className="text-primary-600 hover:text-primary-700 underline mx-1">COBRA insurance</Link> 
                  might be needed, providing permanent family protection.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-lg font-bold text-primary-600 mb-2">Permanent</div>
                  <div className="text-gray-600 text-sm">Coverage Duration</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-lg font-bold text-secondary-600 mb-2">Fixed</div>
                  <div className="text-gray-600 text-sm">Premium Structure</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-lg font-bold text-green-600 mb-2">Guaranteed</div>
                  <div className="text-gray-600 text-sm">Cash Value Growth</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 mb-2">Tax-Free</div>
                  <div className="text-gray-600 text-sm">Death Benefit</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-lg font-bold text-purple-600 mb-2">Borrowable</div>
                  <div className="text-gray-600 text-sm">Cash Value Access</div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Whole Life */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Benefits of Whole Life Insurance
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wholeLifeBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <span className="text-4xl mb-3 block">{benefit.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.benefit}</h3>
                    </div>
                    <p className="text-gray-600 text-sm text-center">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How Cash Value Works</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Cash Value Accumulation:</h4>
                    <p className="text-gray-600 text-sm mb-4">Part of your premium goes toward building cash value, which grows at a guaranteed minimum rate (typically 2-4% annually).</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Guaranteed growth regardless of market conditions</li>
                      <li>• Tax-deferred accumulation</li>
                      <li>• Accessible through loans or partial surrenders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Access Options:</h4>
                    <p className="text-gray-600 text-sm mb-4">You can access your cash value through policy loans or withdrawals, providing financial flexibility during your lifetime.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Policy loans typically at competitive rates</li>
                      <li>• No credit check or qualification required</li>
                      <li>• Can supplement retirement income</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Whole Life vs Other Types */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Whole Life vs Other Life Insurance Types
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Insurance Type</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Coverage</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premiums</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Cash Value</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wholeLifeVsOthers.map((type, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{type.type}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{type.coverage}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{type.premiums}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{type.cashValue}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{type.complexity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Considering different life insurance options? Compare 
                  <Link href="/term-life-insurance" className="text-primary-600 hover:text-primary-700 underline mx-1">term life insurance</Link> 
                  for temporary needs or explore <Link href="/final-expense" className="text-primary-600 hover:text-primary-700 underline mx-1">final expense insurance</Link> 
                  for burial and funeral costs.
                </p>
              </div>
            </div>
          </section>

          {/* Sample Rates */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Sample Whole Life Insurance Rates
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Age</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Male Rate</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-600">Female Rate</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Coverage</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleRates.map((rate, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm text-center font-medium text-gray-900">{rate.age}</td>
                        <td className="px-6 py-4 text-sm text-center text-primary-600 font-semibold">{rate.male}</td>
                        <td className="px-6 py-4 text-sm text-center text-secondary-600 font-semibold">{rate.female}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{rate.coverage}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{rate.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Rate Factors</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-yellow-700">
                  <div>
                    <h4 className="font-semibold mb-2">Health Factors:</h4>
                    <ul className="space-y-1">
                      <li>• Medical exam results</li>
                      <li>• Health history</li>
                      <li>• Smoking status</li>
                      <li>• Family medical history</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Factors:</h4>
                    <ul className="space-y-1">
                      <li>• Age at application</li>
                      <li>• Gender</li>
                      <li>• Lifestyle choices</li>
                      <li>• Occupation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Policy Factors:</h4>
                    <ul className="space-y-1">
                      <li>• Coverage amount</li>
                      <li>• Payment frequency</li>
                      <li>• Riders selected</li>
                      <li>• Insurance company</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                When to Consider Whole Life Insurance
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {usesCases.map((useCase, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.scenario}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Considerations:</h4>
                      <ul className="space-y-1">
                        {useCase.considerations.map((consideration, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-3">
                      <p className="text-sm font-semibold text-primary-800">
                        Whole Life Advantage: {useCase.wholeLifeAdvantage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Integration with Retirement Planning</h3>
                <p className="text-blue-700 mb-4">
                  Whole life insurance can complement your retirement strategy by providing tax-advantaged cash value growth 
                  and potential income through policy loans. Consider how it fits with other retirement vehicles:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Retirement Income:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/annuities" className="hover:underline">Retirement Annuities</Link> for guaranteed income</li>
                      <li>• <Link href="/social-security-analysis" className="hover:underline">Social Security optimization</Link></li>
                      <li>• <Link href="/medicare-advantage/san-diego-county" className="hover:underline">Medicare planning by location</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Healthcare Planning:</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• <Link href="/medicare-advantage" className="hover:underline">Medicare Advantage plans</Link></li>
                      <li>• <Link href="/supplemental-insurance" className="hover:underline">Supplemental insurance</Link></li>
                      <li>• <Link href="/medicare-advantage/hernando-county-florida" className="hover:underline">Regional Medicare options</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Getting Started with Whole Life Insurance
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">1</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Assess Your Needs</h3>
                      <p className="text-gray-600 text-sm">Determine your coverage amount, financial goals, and budget for permanent life insurance.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">2</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Compare Options</h3>
                      <p className="text-gray-600 text-sm">Review different whole life policies, carriers, and riders to find the best fit.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Apply & Underwrite</h3>
                      <p className="text-gray-600 text-sm">Complete the application process, medical exam, and underwriting review.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-primary-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Ready to Explore Whole Life Insurance?</h3>
                  <p className="text-primary-700 mb-4">
                    Our life insurance specialists can help you understand whole life insurance options, 
                    compare rates from top carriers, and find the right permanent coverage for your needs and budget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
                      onClick={() => (window as any).trackLandingPageCTA?.('whole_life_consultation', 'content', '/contact')}
                    >
                      Get Personalized Quote
                    </Link>
                    <a 
                      href="tel:331-343-2584" 
                      className="border border-primary-600 text-primary-600 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors"
                      onClick={() => (window as any).trackLandingPagePhoneCall?.('content')}
                    >
                      Call for Guidance
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Secure Your Family's Future with Whole Life Insurance
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Whole life insurance provides permanent protection and financial flexibility. 
                Get expert guidance to find the right coverage and build lasting financial security for your loved ones. 
                Complement your life insurance with comprehensive healthcare planning like 
                <Link href="/emory-vs-piedmont-medicare-advantage-atlanta" className="text-white hover:text-primary-200 underline mx-1">regional Medicare guidance</Link> 
                for complete financial protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('whole_life_expert_guidance', 'footer', '/contact')}
                >
                  Get Expert Guidance
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