import { Metadata } from 'next';
import Link from 'next/link';
import FinalExpenseAnalytics from '@/components/FinalExpenseAnalytics';
import { generateFinalExpenseSchema, finalExpenseFAQs } from '@/lib/schema/final-expense-schema';

export const metadata: Metadata = {
  title: 'Final Expense Insurance & Burial Insurance Quotes | Guaranteed Acceptance Life Insurance | El-Mag Insurance',
  description: 'Get affordable final expense insurance and burial insurance quotes. No medical exam required. Guaranteed acceptance life insurance for funeral cost coverage. Compare rates from top providers starting at $10/month.',
  keywords: 'final expense insurance, burial insurance quotes, funeral insurance quotes, guaranteed acceptance life insurance, final expense life insurance, funeral cost coverage, burial insurance for seniors, no medical exam life insurance, affordable burial insurance, final expense insurance quotes',
  openGraph: {
    title: 'Final Expense Insurance & Burial Insurance Quotes | Guaranteed Acceptance',
    description: 'Protect your family with affordable final expense insurance. Get burial insurance quotes with guaranteed acceptance and no medical exam required.',
    url: 'https://elmaginsurance.com/final-expense',
    siteName: 'El-Mag Insurance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Expense Insurance & Burial Insurance Quotes',
    description: 'Get affordable final expense insurance quotes. No medical exam required. Starting at $10/month.',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/final-expense',
  },
};

export default function FinalExpensePage() {
  // Enhanced Structured Data for SEO
  const structuredData = generateFinalExpenseSchema({
    pagePath: '/final-expense',
    pageTitle: 'Final Expense Insurance & Burial Insurance Quotes | Guaranteed Acceptance Life Insurance',
    pageDescription: 'Get affordable final expense insurance and burial insurance quotes. No medical exam required. Guaranteed acceptance life insurance for funeral cost coverage. Compare rates from top providers starting at $10/month.',
    faqs: finalExpenseFAQs
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FinalExpenseAnalytics pageType="main" />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-medium">Final Expense Insurance</span>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Final Expense Insurance - Protect Your Family's Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get affordable final expense insurance and burial insurance quotes. Guaranteed acceptance life insurance with no medical exam required. Starting at just $10/month.
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-300">$10/month</div>
                <div className="text-sm text-blue-100">Starting Premium</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">No Medical Exam</div>
                <div className="text-sm text-blue-100">Guaranteed Acceptance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">Ages 50-85</div>
                <div className="text-sm text-blue-100">Coverage Available</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg transform hover:scale-105"
              data-coverage-amount="15000"
              data-funeral-costs="hero_quote_request"
            >
              🔥 Get Free Quote - Save $1000s
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              data-funeral-costs="hero_phone_call"
            >
              📞 Speak with Expert (855) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Final Expense Insurance? Complete Guide to Burial Insurance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Final expense insurance, also known as burial insurance or funeral insurance, is designed to cover funeral cost coverage, burial expenses, and other end-of-life financial obligations. With <strong>guaranteed acceptance life insurance</strong> starting at just $10/month, it's an affordable way to protect your family from expensive funeral costs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our <strong>final expense life insurance</strong> offers guaranteed acceptance with <strong>no medical exam required</strong>. Get burial insurance quotes instantly and compare funeral insurance costs from top carriers. Most policies provide $5,000 to $50,000 in coverage with fixed burial insurance rates that never increase.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Don't Burden Your Family with $24,000+ Funeral Costs</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>The average funeral costs over $24,000 in the United States. Final expense insurance ensures your family won't face this financial burden during their time of grief.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start" data-burial-insurance="funeral_costs" data-funeral-costs="funeral_burial">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Funeral Cost Coverage and Burial Expenses</h3>
                    <p className="text-gray-600">Cover expenses for funeral services, casket, burial plot, and related arrangements.</p>
                  </div>
                </div>
                <div className="flex items-start" data-burial-insurance="medical_coverage" data-funeral-costs="medical_bills">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Outstanding Medical Bills Coverage</h3>
                    <p className="text-gray-600">Help cover outstanding medical expenses and hospital bills. <Link href="/supplemental-insurance" className="text-blue-600 hover:text-blue-800 underline">Learn about supplemental insurance</Link> for additional medical coverage.</p>
                  </div>
                </div>
                <div className="flex items-start" data-burial-insurance="legal_coverage" data-funeral-costs="legal_expenses">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Estate Settlement and Legal Costs</h3>
                    <p className="text-gray-600">Cover costs for probate, legal fees, and estate settlement. <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact our specialists</Link> for personalized guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Free Final Expense Insurance Quotes - No Medical Exam Required
              </h2>
              <div className="text-center mb-4">
                <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No Medical Exam Required</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Guaranteed Acceptance</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Instant Approval</span>
                </div>
              </div>
              <form className="space-y-4" id="final-expense-quote-form" data-form-type="final_expense_quote">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="18"
                    max="85"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-md font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
                  data-coverage-amount="dynamic"
                  data-funeral-costs="sidebar_form_submission"
                >
                  💰 Get My Free Final Expense Quote
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to be contacted by El-Mag Insurance regarding your quote request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Burial Insurance Quotes Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Burial Insurance Quotes & Funeral Insurance Cost Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare burial insurance quotes from multiple carriers. Find the best funeral insurance rates with our free quote comparison tool.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Instant Burial Insurance Quotes</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Instant online quotes</li>
                <li>✓ No medical exam required</li>
                <li>✓ Coverage up to $25,000</li>
                <li>✓ Fixed premiums for life</li>
              </ul>
              <button 
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md"
                data-burial-insurance="burial_quote_request"
                data-coverage-amount="25000"
              >
                💼 Get Burial Insurance Quote
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Compare Funeral Insurance Quotes</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Compare multiple carriers</li>
                <li>✓ Guaranteed acceptance</li>
                <li>✓ Premiums from $15/month</li>
                <li>✓ Immediate coverage available</li>
              </ul>
              <button 
                className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all font-semibold shadow-md"
                data-burial-insurance="funeral_compare"
                data-coverage-amount="20000"
              >
                📊 Compare Funeral Insurance
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Final Expense Life Insurance Plans</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Ages 50-85 accepted</li>
                <li>✓ Simple application process</li>
                <li>✓ No waiting period options</li>
                <li>✓ Tax-free death benefit</li>
              </ul>
              <button 
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-semibold shadow-md"
                data-burial-insurance="final_expense_quote"
                data-coverage-amount="15000"
              >
                🏆 Final Expense Quote
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-orange-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Burial Insurance Cost Calculator</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Calculate exact costs</li>
                <li>✓ See monthly premiums</li>
                <li>✓ Compare coverage levels</li>
                <li>✓ Find best rates for your age</li>
              </ul>
              <button 
                className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-4 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all font-semibold shadow-md"
                data-burial-insurance="cost_calculator"
                data-funeral-costs="calculator_tool"
              >
                🧮 Calculate Burial Costs
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Final Expense Insurance Service?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
                <p className="text-gray-600">Quote Service Fee</p>
                <p className="text-sm text-gray-500 mt-2">100% free burial insurance quotes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2 Min</div>
                <p className="text-gray-600">Quote Time</p>
                <p className="text-sm text-gray-500 mt-2">Get instant funeral insurance quotes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <p className="text-gray-600">Insurance Carriers</p>
                <p className="text-sm text-gray-500 mt-2">Compare final expense insurance quotes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Final Expense Insurance vs Traditional Life Insurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Final expense insurance offers several advantages that make it an ideal choice for many families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-coverage-amount="10000" data-funeral-costs="affordable_premiums">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Monthly Premiums</h3>
              <p className="text-gray-600">
                Final expense insurance typically has lower premiums than traditional life insurance, making it accessible for most budgets.
              </p>
            </div>
            
            <div className="text-center" data-guaranteed-acceptance="simplified_underwriting" data-funeral-costs="easy_qualification">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Acceptance Process</h3>
              <p className="text-gray-600">
                Simplified underwriting process with fewer health questions and medical exams required.
              </p>
            </div>
            
            <div className="text-center" data-guaranteed-acceptance="guaranteed_coverage" data-funeral-costs="peace_of_mind">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Family Protection</h3>
              <p className="text-gray-600">
                Protect your family from financial stress during an already difficult time with guaranteed coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get Your Final Expense Insurance Quote Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to secure final expense insurance coverage. Get your free quote today and give your family the protection they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg transform hover:scale-105"
              data-coverage-amount="20000"
              data-funeral-costs="bottom_cta_quote"
            >
              🎯 Get FREE Quote - Protect Family Now
            </button>
            <button 
              className="border-3 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors shadow-lg"
              data-funeral-costs="bottom_cta_phone"
            >
              📞 Call Now: (855) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Insurance Services: Complete Family Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete your family's financial protection with our comprehensive insurance solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/term-life-insurance" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Term Life Insurance</h3>
              <p className="text-sm text-gray-600 mb-4">Affordable coverage for younger families needing larger death benefits and income replacement protection.</p>
              <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors">Learn More →</div>
            </Link>
            
            <Link href="/medicare-supplement" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Medicare Supplement</h3>
              <p className="text-sm text-gray-600 mb-4">Fill the gaps in Original Medicare with Medigap plans covering deductibles and co-payments.</p>
              <div className="text-green-600 font-semibold text-sm group-hover:text-green-800 transition-colors">Learn More →</div>
            </Link>
            
            <Link href="/supplemental-insurance" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Supplemental Insurance</h3>
              <p className="text-sm text-gray-600 mb-4">Hospital indemnity, critical illness, and accident insurance to fill gaps in major medical coverage.</p>
              <div className="text-purple-600 font-semibold text-sm group-hover:text-purple-800 transition-colors">Learn More →</div>
            </Link>
            
            <Link href="/medicare-advantage" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Medicare Advantage</h3>
              <p className="text-sm text-gray-600 mb-4">All-in-one Medicare plans with $0 premiums, plus dental, vision, and prescription coverage.</p>
              <div className="text-orange-600 font-semibold text-sm group-hover:text-orange-800 transition-colors">Learn More →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Expense Insurance Resources & Guides</h2>
            <p className="text-gray-600">Learn more about insurance and financial planning for your family's future.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/resources/understanding-costs" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Understanding Final Expense Insurance Costs</h3>
                <p className="text-sm text-gray-600">Learn how insurance premiums are calculated</p>
              </div>
            </Link>
            
            <Link href="/resources/enrollment-periods-explained" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
              <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Final Expense Insurance Enrollment Periods</h3>
                <p className="text-sm text-gray-600">When you can enroll in different insurance plans</p>
              </div>
            </Link>
            
            <Link href="/contact" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
              <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Final Expense Insurance Specialists</h3>
                <p className="text-sm text-gray-600">Get personalized insurance advice and quotes</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}