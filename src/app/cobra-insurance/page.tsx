import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'COBRA Insurance 2025 | Continuation Coverage Guide | Eligibility & Alternatives',
  description: 'Complete COBRA insurance guide 2025. Understand eligibility, costs, and alternatives to COBRA continuation coverage. Expert guidance on health insurance options after job loss.',
  keywords: 'COBRA insurance 2025, COBRA continuation coverage, COBRA eligibility, COBRA alternatives, health insurance after job loss, COBRA cost, marketplace insurance vs COBRA',
  openGraph: {
    title: 'COBRA Insurance 2025 | Complete Coverage Guide',
    description: 'Comprehensive COBRA insurance guide covering eligibility, costs, and alternatives. Expert help navigating continuation coverage options.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COBRA Insurance 2025 | Coverage Guide',
    description: 'COBRA continuation coverage explained: eligibility, costs, alternatives, and expert guidance for health insurance transitions.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/cobra-insurance',
  },
};

const cobraBasics = {
  fullName: 'Consolidated Omnibus Budget Reconciliation Act',
  coverage: 'Up to 18-36 months',
  eligibility: 'Qualifying life events (job loss, divorce, etc.)',
  cost: '102% of group premium + 2% admin fee',
  deadline: '60 days to elect coverage'
};

const qualifyingEvents = [
  {
    event: 'Job Loss or Reduction in Hours',
    duration: '18 months',
    description: 'Involuntary or voluntary termination, layoffs, or significant reduction in work hours',
    commonScenario: 'Most common qualifying event'
  },
  {
    event: 'Divorce or Legal Separation',
    duration: '36 months',
    description: 'Spouse loses coverage due to divorce or legal separation from covered employee',
    commonScenario: 'Applies to former spouse only'
  },
  {
    event: 'Death of Covered Employee',
    duration: '36 months',
    description: 'Surviving family members can continue coverage',
    commonScenario: 'Spouse and dependent children eligible'
  },
  {
    event: 'Child Aging Out',
    duration: '36 months',
    description: 'Dependent child loses eligibility due to age or student status change',
    commonScenario: 'Typically age 26 limit'
  },
  {
    event: 'Medicare Entitlement',
    duration: '36 months',
    description: 'Employee becomes eligible for Medicare, affecting family coverage',
    commonScenario: 'Spouse and dependents can continue'
  }
];

const cobraAlternatives = [
  {
    option: 'Health Insurance Marketplace',
    pros: ['Premium subsidies available', 'Multiple plan options', 'Essential health benefits'],
    cons: ['Different provider networks', 'New deductibles start over', 'Limited enrollment periods'],
    bestFor: 'People eligible for premium tax credits'
  },
  {
    option: 'Short-Term Health Insurance',
    pros: ['Lower premiums', 'Quick coverage start', 'Flexible terms'],
    cons: ['Limited benefits', 'Pre-existing condition exclusions', 'Not ACA-compliant'],
    bestFor: 'Temporary coverage gaps'
  },
  {
    option: 'Spouse\'s Employer Plan',
    pros: ['Potentially lower cost', 'Employer contributions', 'Immediate coverage'],
    cons: ['Must qualify for special enrollment', 'Limited to spouse\'s options', 'Timing restrictions'],
    bestFor: 'Married couples with dual coverage options'
  },
  {
    option: 'Healthcare Sharing Plans',
    pros: ['Lower monthly costs', 'Religious exemption benefits', 'Community support'],
    cons: ['Not insurance', 'No guarantee of payment', 'Limited provider networks'],
    bestFor: 'Those with religious or ethical objections to insurance'
  }
];

const costComparison = [
  {
    scenario: 'Individual Coverage',
    cobraCost: '$350-$700/month',
    marketplaceCost: '$200-$500/month*',
    notes: '*With subsidies for eligible individuals'
  },
  {
    scenario: 'Family Coverage',
    cobraCost: '$1,200-$2,200/month',
    marketplaceCost: '$600-$1,500/month*',
    notes: '*Significant savings possible with premium tax credits'
  },
  {
    scenario: 'High-Income Individuals',
    cobraCost: '$450-$800/month',
    marketplaceCost: '$400-$700/month',
    notes: 'Less subsidy available, but still competitive'
  }
];

export default function CobraInsurancePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Health Insurance', href: '/health-insurance-marketplace' },
    { label: 'COBRA Insurance', href: '/cobra-insurance' },
  ];
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="regional"
        pageTitle="COBRA Insurance Coverage Guide"
        demographics={{
          avgAge: 45
        }}
        keyMetrics={{
          serviceType: 'COBRA_guidance',
          coverageDuration: '18-36 months',
          costFactor: '102% + admin fees',
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
            "name": "COBRA Insurance Guidance",
            "description": "Expert guidance on COBRA continuation coverage, eligibility requirements, costs, and alternatives to help you make informed health insurance decisions.",
            "provider": {
              "@type": "Organization",
              "name": "El-Mag Insurance",
              "telephone": "331-343-2584",
              "url": "https://elmag-insurance.com"
            },
            "areaServed": "United States",
            "serviceType": "Health Insurance Consultation"
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
                  COBRA Insurance 2025: Complete Continuation Coverage Guide
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Navigate COBRA continuation coverage with expert guidance. Understand eligibility, costs, and alternatives 
                  to make the best health insurance decision after job loss or life changes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                    onClick={() => (window as any).trackLandingPageCTA?.('cobra_consultation', 'hero', '/contact')}
                  >
                    Get COBRA Guidance
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

          {/* COBRA Basics */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                What is COBRA Insurance?
              </h2>
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-gray-600 mb-6">
                  COBRA (Consolidated Omnibus Budget Reconciliation Act) allows you to temporarily continue your employer's 
                  health insurance after certain qualifying life events, typically for 18-36 months.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-2">18-36</div>
                  <div className="text-gray-600">Months Coverage</div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600 mb-2">102%</div>
                  <div className="text-gray-600">Premium Cost</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">60</div>
                  <div className="text-gray-600">Days to Elect</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Same</div>
                  <div className="text-gray-600">Plan Benefits</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Qualifying Events</div>
                </div>
              </div>
            </div>
          </section>

          {/* Qualifying Events */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                COBRA Qualifying Events
              </h2>
              <div className="grid gap-8">
                {qualifyingEvents.map((event, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">{event.event}</h3>
                      <div className="flex items-center gap-4">
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {event.duration}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {event.commonScenario}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important COBRA Deadlines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Election Period:</h4>
                    <p className="text-gray-600 text-sm">You have 60 days from the later of: (1) the date you lose coverage, or (2) the date you receive your COBRA election notice.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Premium Payment:</h4>
                    <p className="text-gray-600 text-sm">First premium payment is due within 45 days of electing COBRA. Subsequent payments are due by the first of each month.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COBRA Alternatives */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                COBRA Alternatives to Consider
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {cobraAlternatives.map((alternative, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{alternative.option}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {alternative.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center text-sm text-green-700">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {alternative.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center text-sm text-red-700">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-3">
                      <p className="text-sm font-semibold text-primary-800">Best for: {alternative.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Exploring marketplace options? Our insurance specialists can help compare 
                  <Link href="/health-insurance-marketplace" className="text-primary-600 hover:text-primary-700 underline mx-1">Health Insurance Marketplace plans</Link> 
                  with your COBRA options to find the best coverage for your situation.
                </p>
              </div>
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                COBRA vs Marketplace Cost Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage Type</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">COBRA Cost</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-600">Marketplace Cost</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.scenario}</td>
                        <td className="px-6 py-4 text-sm text-center text-primary-600 font-semibold">{item.cobraCost}</td>
                        <td className="px-6 py-4 text-sm text-center text-secondary-600 font-semibold">{item.marketplaceCost}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Cost Considerations</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>
                    <h4 className="font-semibold mb-2">COBRA Advantages:</h4>
                    <ul className="space-y-1">
                      <li>• Keep the same plan and providers</li>
                      <li>• No medical underwriting required</li>
                      <li>• Deductibles and out-of-pocket maximums continue</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketplace Advantages:</h4>
                    <ul className="space-y-1">
                      <li>• Premium tax credits can significantly reduce costs</li>
                      <li>• More plan options to choose from</li>
                      <li>• Cost-sharing reductions for eligible individuals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Situations */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Special COBRA Situations
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Approaching Medicare Eligibility</h3>
                  <p className="text-gray-600 mb-4">
                    If you're close to age 65, COBRA may bridge the gap until Medicare eligibility. However, 
                    Medicare planning requires careful consideration of timing and coverage options.
                  </p>
                  <div className="space-y-2">
                    <Link href="/medicare-advantage" className="block text-primary-600 hover:text-primary-700 underline text-sm">
                      • Explore Medicare Advantage Plans
                    </Link>
                    <Link href="/medicare-supplement-plan-f" className="block text-primary-600 hover:text-primary-700 underline text-sm">
                      • Learn About Medicare Supplements
                    </Link>
                    <Link href="/medicare-enrollment-timeline" className="block text-primary-600 hover:text-primary-700 underline text-sm">
                      • Understand Medicare Enrollment Timing
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Small Business Owners</h3>
                  <p className="text-gray-600 mb-4">
                    Business owners and their families may have different COBRA eligibility rules. 
                    Alternative coverage options might include individual marketplace plans or association health plans.
                  </p>
                  <div className="space-y-2">
                    <Link href="/health-insurance-marketplace" className="block text-primary-600 hover:text-primary-700 underline text-sm">
                      • Individual Marketplace Plans
                    </Link>
                    <Link href="/supplemental-insurance" className="block text-primary-600 hover:text-primary-700 underline text-sm">
                      • Supplemental Insurance Options
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Reminders</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-yellow-700">
                  <div>
                    <h4 className="font-semibold mb-2">Don't Wait:</h4>
                    <p>COBRA deadlines are strict. Missing the 60-day election period means losing your right to continue coverage.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compare Options:</h4>
                    <p>COBRA isn't automatically the best choice. Compare costs and benefits with marketplace alternatives.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Plan Ahead:</h4>
                    <p>If you know a job change is coming, research your options before your coverage ends.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Help */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Making Your COBRA Decision
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">1</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Your Options</h3>
                      <p className="text-gray-600 text-sm">Compare COBRA costs with marketplace plans and other alternatives available to you.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">2</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Your Needs</h3>
                      <p className="text-gray-600 text-sm">Think about your healthcare needs, preferred providers, and financial situation.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary-600">3</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Get Expert Help</h3>
                      <p className="text-gray-600 text-sm">Consult with insurance specialists who can help you navigate your options.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-primary-50 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Need Personalized COBRA Guidance?</h3>
                  <p className="text-primary-700 mb-4">
                    Our insurance specialists can help you understand your COBRA options, compare alternatives, 
                    and make the best decision for your specific situation. We're here to help you navigate 
                    this important transition with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
                      onClick={() => (window as any).trackLandingPageCTA?.('cobra_consultation', 'content', '/contact')}
                    >
                      Schedule Consultation
                    </Link>
                    <a 
                      href="tel:331-343-2584" 
                      className="border border-primary-600 text-primary-600 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors"
                      onClick={() => (window as any).trackLandingPagePhoneCall?.('content')}
                    >
                      Call Now
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
                Don't Navigate COBRA Alone
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                COBRA decisions have long-term financial and health implications. Get expert guidance to ensure 
                you're making the best choice for your family's health insurance needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                  onClick={() => (window as any).trackLandingPageCTA?.('expert_guidance', 'footer', '/contact')}
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