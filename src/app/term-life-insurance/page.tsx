import { Metadata } from 'next';
import Link from 'next/link';
import TermLifeInsuranceAnalytics from '@/components/TermLifeInsuranceAnalytics';
import { generateTermLifeInsuranceSchema, termLifeInsuranceFAQs } from '@/lib/schema/term-life-insurance-schema';

// Structured Data for SEO
const structuredData = generateTermLifeInsuranceSchema({
  pagePath: '/term-life-insurance',
  pageTitle: 'Life Insurance Quotes 2025 | Term Life Insurance | Affordable Coverage',
  pageDescription: 'Get instant life insurance quotes! Compare affordable term life insurance rates for families, young adults & business owners. Use our life insurance calculator for coverage needs.',
  faqs: termLifeInsuranceFAQs
});

export const metadata: Metadata = {
  title: 'Life Insurance Quotes 2025 | Term Life Insurance | Affordable Coverage for Families & Young Adults',
  description: 'Get instant life insurance quotes! Compare affordable term life insurance rates for families, young adults & business owners. Use our life insurance calculator for coverage needs. Call 331-E-HEALTH for cheap life insurance.',
  keywords: 'life insurance quotes, term life insurance, affordable life insurance, cheap life insurance, life insurance calculator, term life insurance for young adults, life insurance for families, life insurance for business owners, whole life insurance rates, life insurance for seniors, smoker life insurance, high risk life insurance, universal life insurance',
  openGraph: {
    title: 'Life Insurance Quotes | Term Life Insurance Calculator | Affordable Coverage',
    description: 'Get instant life insurance quotes and compare affordable term life insurance rates. Life insurance calculator for families, young adults, business owners. Cheap life insurance coverage options.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/term-life-insurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Term Life Insurance | Life Insurance Quotes & Calculator',
    description: 'Get affordable term life insurance for your family. Compare life insurance quotes, calculate coverage needs, protect your loved ones.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/term-life-insurance',
  },
};

export default function TermLifeInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Analytics Component */}
      <TermLifeInsuranceAnalytics 
        pageType="main"
        userAge={35}
        coverageAmount={500000}
        familyStatus="family_with_children"
        location="United States"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Life Insurance Quotes | Get Affordable Term Life Insurance 2025
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Protect your family with affordable term life insurance. Get instant life insurance quotes, compare rates, and use our life insurance calculator to find the perfect coverage for young adults, families, and business owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Quotes
            </Link>
            <Link
              href="/tools"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Calculate Coverage
            </Link>
          </div>
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Term Life Insurance?</h2>
            <p className="text-gray-600 mb-4">
              Term life insurance provides temporary life insurance coverage for a specific period (term), typically 10, 20, or 30 years. It offers affordable protection for your family's financial security during your most critical earning years. Combine with <Link href="/health-insurance-marketplace" className="text-blue-600 hover:text-blue-800 underline">comprehensive health insurance</Link> and <Link href="/supplemental-insurance" className="text-blue-600 hover:text-blue-800 underline">supplemental coverage</Link> for complete family protection.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Most affordable type of life insurance</li>
              <li>Coverage for 10, 20, or 30 years</li>
              <li>Death benefit protects your family's income</li>
              <li>No cash value - pure insurance protection</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Term Life Insurance?</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Coverage</h3>
                <p className="text-sm text-gray-600">Get maximum protection at the lowest cost, especially for young adults</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Protection</h3>
                <p className="text-sm text-gray-600">Ensure your family can maintain their lifestyle if something happens to you</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Continuity</h3>
                <p className="text-sm text-gray-600">Perfect for business owners who need key person insurance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Life Insurance Calculator Section */}
        <section className="mb-12">
          <div className="bg-green-50 border-2 border-green-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Life Insurance Calculator: How Much Coverage Do You Need?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Use our life insurance calculator to determine the right coverage amount for your family's financial needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-green-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-3">10-12x</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Annual Income</h3>
                <p className="text-gray-600">Standard recommendation for family protection</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-green-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-3">$250K+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Debt Coverage</h3>
                <p className="text-gray-600">Include mortgage, loans, and future expenses</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-green-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-3">$100K+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Education Fund</h3>
                <p className="text-gray-600">Per child for college expenses</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/tools"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Use Our Life Insurance Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Problem-Solution: Expensive Life Insurance */}
        <section className="mb-12">
          <div className="bg-red-50 border-2 border-red-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Affordable Life Insurance: Cheap Life Insurance Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-3">❌ The Problem</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Life insurance premiums seem unaffordable</li>
                  <li>• Quotes from big-name companies are sky-high</li>
                  <li>• Young adults told they "don't need" life insurance</li>
                  <li>• Families can't find cheap life insurance options</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-3">✅ Our Solution</h3>
                <ul className="text-gray-700 space-y-2">
                  <li data-coverage-amount="affordable">• <strong>Affordable life insurance</strong> starting at $15/month</li>
                  <li>• Compare rates from 50+ top-rated insurers</li>
                  <li data-coverage-amount="cheap">• <strong>Cheap life insurance</strong> for healthy applicants</li>
                  <li>• Instant online quotes with no obligations</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors" data-coverage-amount="quote">
                    Get Cheap Life Insurance Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution: Life Insurance for Smokers */}
        <section className="mb-12">
          <div className="bg-orange-50 border-2 border-orange-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Smoker Life Insurance: Tobacco User Coverage Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">🚭 Smoker Challenges</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Traditional life insurance rates 2-3x higher</li>
                  <li>• Many insurers automatically decline smokers</li>
                  <li>• Vaping and e-cigarettes treated as tobacco use</li>
                  <li>• Social smokers face same penalties as heavy users</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">💡 Smoker-Friendly Options</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Smoker life insurance</strong> specialists</li>
                  <li>• Competitive <strong>tobacco user coverage</strong> rates</li>
                  <li>• No-exam policies available for smokers</li>
                  <li>• Quit-smoking rate reduction programs</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Smoker Life Insurance Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution: High Risk Life Insurance */}
        <section className="mb-12">
          <div className="bg-purple-50 border-2 border-purple-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">High Risk Life Insurance: Impaired Risk Coverage Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">⚠️ High Risk Factors</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Diabetes, heart disease, cancer history</li>
                  <li>• High-risk occupations (pilot, military, oil rig)</li>
                  <li>• Dangerous hobbies (skydiving, rock climbing)</li>
                  <li>• Previous life insurance application denials</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-3">🎯 Specialized Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>High risk life insurance</strong> underwriting experts</li>
                  <li>• <strong>Impaired risk</strong> life insurance specialists</li>
                  <li>• Guaranteed issue and simplified underwriting</li>
                  <li>• Table ratings and flat extra premium options</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Get High Risk Life Insurance Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution: Life Insurance Denied Appeals */}
        <section className="mb-12">
          <div className="bg-indigo-50 border-2 border-indigo-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Life Insurance Denied: Coverage Denial Help & Appeals</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-3">❌ Common Denial Reasons</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Medical conditions or health history</li>
                  <li>• Incomplete or inaccurate application information</li>
                  <li>• High-risk lifestyle or occupation</li>
                  <li>• Financial justification issues</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-3">🔄 Appeal Process</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Life insurance appeal</strong> representation</li>
                  <li>• <strong>Coverage denial</strong> review and strategy</li>
                  <li>• Alternative carrier placement options</li>
                  <li>• Medical record review and improvement</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Get Help with Denied Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Term Life Insurance for Young Adults */}
        <section className="mb-12">
          <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Term Life Insurance for Young Adults</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Young adults can secure affordable life insurance rates that stay level for decades. Lock in low premiums while you're healthy. Consider pairing with <Link href="/health-insurance-marketplace" className="text-green-600 hover:text-green-800 underline">individual health insurance</Link> for complete protection.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Why Start Young?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lowest possible life insurance rates</li>
                  <li>• Lock in rates for 20-30 years</li>
                  <li>• Protect future insurability</li>
                  <li>• Cover student loans and debt</li>
                  <li>• Start building financial responsibility</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Sample Rates for 25-Year-Olds</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$250,000 - 20 Year Term:</span>
                    <span className="font-bold text-blue-600">$15-25/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$500,000 - 30 Year Term:</span>
                    <span className="font-bold text-blue-600">$25-35/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">$1,000,000 - 30 Year Term:</span>
                    <span className="font-bold text-blue-600">$40-60/month</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Rates based on healthy non-smokers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Life Insurance for Families */}
        <section className="mb-12">
          <div className="bg-purple-50 border-2 border-purple-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Life Insurance for Families</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Protect your family's financial future with comprehensive term life insurance coverage that adapts to your family's changing needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Primary Breadwinner</h3>
                <h4 className="text-md font-semibold text-purple-700 mb-2">Coverage Needs Assessment</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• 10-12x annual income</div>
                  <div>• Mortgage payoff amount</div>
                  <div>• Children's education costs</div>
                  <div>• 5-10 years living expenses</div>
                  <div>• <Link href="/final-expense" className="text-purple-600 hover:text-purple-800 underline">Final expenses</Link> ($15K-25K)</div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <strong className="text-purple-800">Typical Coverage: $750K - $2M</strong>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Stay-at-Home Parent</h3>
                <h4 className="text-md font-semibold text-purple-700 mb-2">Essential Family Services</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Childcare replacement costs</div>
                  <div>• Household management</div>
                  <div>• Transportation and errands</div>
                  <div>• Educational support</div>
                  <div>• Final expenses</div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <strong className="text-purple-800">Typical Coverage: $250K - $500K</strong>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Child Coverage</h3>
                <h4 className="text-md font-semibold text-purple-700 mb-2">Child Life Insurance Benefits</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Final expenses coverage</div>
                  <div>• Lost income during grieving</div>
                  <div>• Guaranteed insurability rider</div>
                  <div>• Future coverage options</div>
                  <div>• Very affordable premiums</div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <strong className="text-purple-800">Typical Coverage: $10K - $50K</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life Insurance for Business Owners */}
        <section className="mb-12">
          <div className="bg-orange-50 border-2 border-orange-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Life Insurance for Business Owners</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Business owners need specialized life insurance coverage to protect both their families and their business interests.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Key Person Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Protect your business from financial loss if a key employee or owner dies. Coverage helps maintain business operations and creditworthiness.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Replace lost revenue and profits</li>
                  <li>• Cover recruitment and training costs</li>
                  <li>• Maintain business credit and contracts</li>
                  <li>• Provide time to restructure operations</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Buy-Sell Agreements</h3>
                <p className="text-gray-600 mb-4">
                  Ensure smooth business transitions with funded buy-sell agreements. Life insurance provides the cash needed for ownership transfers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Fund partnership buyouts</li>
                  <li>• Prevent forced liquidation</li>
                  <li>• Provide fair market value</li>
                  <li>• Protect family interests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Linking: Life Insurance Age Groups & Related Coverage */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Life Insurance by Age & Related Insurance Planning</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Your life insurance needs change throughout different life stages. Explore age-appropriate coverage options and complementary insurance planning.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Age-Based Coverage */}
              <div className="bg-white p-6 rounded-lg border border-teal-200">
                <h3 className="text-xl font-bold text-teal-800 mb-3">📅 Coverage by Life Stage</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Young Adults (20-30)</Link> - Start early, lock in low rates</li>
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Families (30-50)</Link> - Maximum coverage for dependents</li>
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Pre-Retirees (50-65)</Link> - Estate planning focus</li>
                  <li>• <Link href="/final-expense" className="text-purple-600 hover:text-purple-800 underline">Seniors (65+)</Link> - <Link href="/final-expense" className="text-purple-600 hover:text-purple-800 underline">Final expense coverage</Link></li>
                </ul>
              </div>

              {/* Health & Retirement Planning */}
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">🏥 Health & Retirement Coordination</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <Link href="/health-insurance-marketplace" className="text-green-600 hover:text-green-800 underline">Individual Health Insurance</Link> - Under 65 coverage</li>
                  <li>• <Link href="/social-security-analysis" className="text-purple-600 hover:text-purple-800 underline">Social Security Planning</Link> - Retirement timing</li>
                  <li>• <Link href="/supplemental-insurance" className="text-teal-600 hover:text-teal-800 underline">Supplemental Coverage</Link> - Gap protection</li>
                  <li>• <Link href="/tools" className="text-orange-600 hover:text-orange-800 underline">Insurance Calculators</Link> - Coverage planning</li>
                </ul>
              </div>

              {/* Specialized Coverage */}
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">🎯 Specialized Life Insurance</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Business Owner Protection</Link> - Key person insurance</li>
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">High-Risk Coverage</Link> - Impaired risk specialists</li>
                  <li>• <Link href="/term-life-insurance" className="text-blue-600 hover:text-blue-800 underline">Smoker-Friendly Policies</Link> - Tobacco user rates</li>
                  <li>• <Link href="/contact" className="text-green-600 hover:text-green-800 underline">Application Appeals</Link> - Denial assistance</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/specialists" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Speak with a Life Insurance Specialist
              </Link>
            </div>
          </div>
        </section>

        {/* Life Insurance for Seniors */}
        <section className="mb-12">
          <div className="bg-emerald-50 border-2 border-emerald-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Life Insurance for Seniors (Ages 50-80)</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Seniors can still qualify for affordable life insurance coverage. Compare term life, whole life, and guaranteed issue options designed for older adults. Plan retirement with <Link href="/social-security-analysis" className="text-purple-600 hover:text-purple-800 underline">Social Security analysis</Link> and consider <Link href="/supplemental-insurance" className="text-teal-600 hover:text-teal-800 underline">supplemental coverage</Link> for gaps.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-emerald-200">
                <h3 className="text-xl font-bold text-emerald-800 mb-3">👥 Senior Life Insurance Options</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Life insurance for seniors</strong> ages 50-80</li>
                  <li>• No-exam policies available</li>
                  <li>• Guaranteed issue life insurance (no health questions)</li>
                  <li>• Final expense and burial insurance</li>
                  <li>• Term life insurance up to age 75</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">💰 Senior Rate Examples</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>$25K Final Expense (Age 65):</span>
                    <strong>$45-65/month</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>$50K Guaranteed Issue (Age 70):</span>
                    <strong>$95-125/month</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>$100K Term Life (Age 55):</span>
                    <strong>$85-110/month</strong>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    Get Senior Life Insurance Quotes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Life Insurance & Whole Life Insurance Rates */}
        <section className="mb-12">
          <div className="bg-amber-50 border-2 border-amber-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Universal Life Insurance & Whole Life Insurance Rates</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Compare permanent life insurance options with cash value growth potential. Get competitive whole life insurance rates and flexible universal life insurance options.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Term Life Insurance</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Temporary coverage (10-30 years)</li>
                  <li>• Lowest premium costs</li>
                  <li>• No cash value accumulation</li>
                  <li>• Perfect for young families</li>
                  <li>• Coverage expires at term end</li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded text-center">
                  <strong className="text-green-800">Best Value for Families</strong>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Whole Life Insurance</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Whole life insurance rates</strong> stay level</li>
                  <li>• Guaranteed cash value growth</li>
                  <li>• Permanent lifetime coverage</li>
                  <li>• Dividend payments possible</li>
                  <li>• Premium 10-20x higher than term</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded text-center">
                  <strong className="text-purple-800">Estate Planning Tool</strong>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Universal Life Insurance</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Universal life insurance</strong> flexibility</li>
                  <li>• Adjustable premiums and coverage</li>
                  <li>• Cash value investment options</li>
                  <li>• Market-linked growth potential</li>
                  <li>• More complex than whole life</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded text-center">
                  <strong className="text-blue-800">Flexible Investment Option</strong>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Compare Permanent Life Insurance Options
              </Link>
            </div>
          </div>
        </section>

        {/* Term vs Whole Life Insurance */}
        <section className="mb-12">
          <div className="bg-gray-50 border-2 border-gray-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Term Life Insurance vs Whole Life Insurance</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Understanding the difference between term and whole life insurance helps you choose the right coverage for your needs and budget.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-blue-800">Term Life Insurance</th>
                    <th className="px-6 py-4 text-center font-semibold text-purple-800">Whole Life Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-medium text-gray-900">Cost</td>
                    <td className="px-6 py-4 text-center text-green-600">Much Lower</td>
                    <td className="px-6 py-4 text-center text-red-600">10-20x Higher</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Coverage Period</td>
                    <td className="px-6 py-4 text-center">10-30 years</td>
                    <td className="px-6 py-4 text-center">Lifetime</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-medium text-gray-900">Cash Value</td>
                    <td className="px-6 py-4 text-center">None</td>
                    <td className="px-6 py-4 text-center">Yes</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                    <td className="px-6 py-4 text-center">Young families, debt protection</td>
                    <td className="px-6 py-4 text-center">Estate planning, wealthy individuals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Life Insurance Quotes Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Your Life Insurance Quotes in 3 Easy Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Calculate Coverage</h3>
              <p className="text-gray-600 mb-4">Use our life insurance calculator to determine how much coverage your family needs.</p>
              <Link 
                href="/tools"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Use Calculator →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare Quotes</h3>
              <p className="text-gray-600 mb-4">Get instant life insurance quotes from multiple top-rated insurance companies.</p>
              <Link 
                href="/contact"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Get Quotes →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply & Protect</h3>
              <p className="text-gray-600 mb-4">Complete your application and secure affordable protection for your family.</p>
              <Link 
                href="/contact"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Start Application →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Your Financial Protection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Insurance</h3>
              <p className="text-gray-600 mb-4">Protect your family's health and finances with comprehensive health coverage.</p>
              <Link 
                href="/health-insurance-marketplace"
                className="text-green-600 hover:text-green-800 font-semibold underline"
              >
                Get Coverage →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supplemental Insurance</h3>
              <p className="text-gray-600 mb-4">Add extra protection with accident, critical illness, and disability coverage.</p>
              <Link 
                href="/supplemental-insurance"
                className="text-teal-600 hover:text-teal-800 font-semibold underline"
              >
                Explore Options →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">Plan for retirement with Social Security analysis and annuity options.</p>
              <Link 
                href="/social-security-analysis"
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
              >
                Get Analysis →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Insurance Calculators</h3>
              <p className="text-gray-600 mb-4">Use our tools to calculate coverage needs and compare options.</p>
              <Link 
                href="/tools"
                className="text-orange-600 hover:text-orange-800 font-semibold underline"
              >
                Access Tools →
              </Link>
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="mb-12">
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Meet Our Life Insurance Experts</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our licensed life insurance specialists help you find the right coverage at the best rates for your family's needs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Insurance Agents</h3>
                  <p className="text-blue-600 font-semibold mb-3">Life Insurance Specialists</p>
                  <p className="text-gray-600 mb-4">Helping families and business owners secure affordable life insurance protection for over 15 years.</p>
                  <Link 
                    href="/team"
                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    Meet Our Team →
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Planning Advisors</h3>
                  <p className="text-blue-600 font-semibold mb-3">Comprehensive Financial Planning</p>
                  <p className="text-gray-600 mb-4">Integrate life insurance with your complete financial plan for optimal protection and growth.</p>
                  <Link 
                    href="/specialists"
                    className="text-blue-600 hover:text-blue-800 font-semibold underline"
                  >
                    Find an Advisor →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Protect Your Family's Future?</h2>
          <p className="text-gray-600 mb-6">
            Get instant life insurance quotes and find affordable term life insurance coverage. Our experts will help you compare rates and choose the perfect policy for your family's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Life Insurance Quotes
            </Link>
            <Link
              href="/tools"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Use Life Insurance Calculator
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Call us at <Link href="tel:331-343-2584" className="text-blue-600 hover:text-blue-800 underline">331-E-HEALTH (331-343-2584)</Link> for immediate assistance with life insurance quotes and applications.</p>
          </div>
        </div>
      </div>
    </main>
  );
}