import { Metadata } from 'next';
import FinalExpenseAnalytics from '@/components/FinalExpenseAnalytics';

export const metadata: Metadata = {
  title: 'Burial Insurance Quotes & Final Expense Life Insurance | El-Mag Insurance',
  description: 'Get burial insurance quotes instantly. Compare funeral insurance costs and final expense life insurance rates. Low competition, affordable premiums, no medical exam required.',
  keywords: 'burial insurance quotes, funeral insurance quotes, final expense insurance quotes, final expense life insurance, burial insurance cost, funeral insurance cost, burial insurance rates, funeral insurance rates, burial life insurance, funeral life insurance',
};

export default function FinalExpensePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FinalExpenseAnalytics pageType="main" />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Burial Insurance Quotes & Final Expense Life Insurance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get instant burial insurance quotes. Compare funeral insurance costs and secure affordable final expense life insurance with no medical exam required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              data-coverage-amount="15000"
              data-funeral-costs="quote_request"
            >
              Get Free Quote
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              data-funeral-costs="information_request"
            >
              Learn More
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
                What is Burial Insurance? Understanding Final Expense Life Insurance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Burial insurance, also known as funeral insurance or final expense life insurance, is designed to cover burial costs, funeral expenses, and other end-of-life financial obligations. With burial insurance quotes starting at just $15/month, it's an affordable way to protect your family.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Final expense life insurance offers guaranteed acceptance with no medical exam required. Get burial insurance quotes instantly and compare funeral insurance costs from top carriers. Most policies provide $5,000 to $25,000 in coverage with fixed burial insurance rates that never increase.
              </p>
              <div className="space-y-4">
                <div className="flex items-start" data-burial-insurance="funeral_costs" data-funeral-costs="funeral_burial">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Funeral and Burial Costs</h3>
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
                    <h3 className="text-lg font-semibold text-gray-900">Medical Bills</h3>
                    <p className="text-gray-600">Help cover outstanding medical expenses and hospital bills.</p>
                  </div>
                </div>
                <div className="flex items-start" data-burial-insurance="legal_coverage" data-funeral-costs="legal_expenses">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Legal Expenses</h3>
                    <p className="text-gray-600">Cover costs for probate, legal fees, and estate settlement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Your Free Quote
              </h3>
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
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  data-coverage-amount="dynamic"
                  data-funeral-costs="form_submission"
                >
                  Get Free Quote
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
              Get Instant Burial Insurance Quotes - Compare Funeral Insurance Costs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare burial insurance quotes from multiple carriers. Find the best funeral insurance rates with our free quote comparison tool.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Burial Insurance Quotes</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Instant online quotes</li>
                <li>✓ No medical exam required</li>
                <li>✓ Coverage up to $25,000</li>
                <li>✓ Fixed premiums for life</li>
              </ul>
              <button 
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                data-burial-insurance="quote_request"
                data-coverage-amount="25000"
              >
                Get Burial Insurance Quote
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Funeral Insurance Quotes</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Compare multiple carriers</li>
                <li>✓ Guaranteed acceptance</li>
                <li>✓ Premiums from $15/month</li>
                <li>✓ Immediate coverage available</li>
              </ul>
              <button 
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                data-burial-insurance="funeral_quote"
                data-coverage-amount="20000"
              >
                Compare Funeral Insurance
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Final Expense Life Insurance</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Ages 50-85 accepted</li>
                <li>✓ Simple application process</li>
                <li>✓ No waiting period options</li>
                <li>✓ Tax-free death benefit</li>
              </ul>
              <button 
                className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                data-burial-insurance="final_expense_life"
                data-coverage-amount="15000"
              >
                Final Expense Quote
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
                className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
                data-burial-insurance="cost_calculator"
                data-funeral-costs="calculator_tool"
              >
                Calculate Burial Costs
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Burial Insurance Quotes Service?
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
              Why Choose Final Expense Insurance?
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Premiums</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Qualification</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Peace of Mind</h3>
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
            Ready to Protect Your Family?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to secure final expense insurance coverage. Get your free quote today and give your family the protection they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              data-coverage-amount="20000"
              data-funeral-costs="final_cta"
            >
              Get Free Quote Now
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              data-funeral-costs="phone_consultation"
            >
              Speak with an Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}