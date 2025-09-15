import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medicare Supplement Plan G Quotes - Get Free 2025 Rates & Compare Plans',
  description: 'Get free Medicare Supplement Plan G quotes for 2025. Compare rates from top insurance companies and find the best Plan G coverage for your needs.',
  keywords: 'Plan G quotes, Medicare Supplement quotes, Plan G rates 2025, Plan G comparison, free Plan G quotes',
  openGraph: {
    title: 'Free Plan G Quotes - Compare 2025 Medicare Supplement Rates',
    description: 'Get instant Plan G quotes from top insurance companies. Compare rates and find the best Medicare Supplement coverage.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/medicare-supplement-plan-g/quote',
  },
}

export default function PlanGQuotePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-8 text-center">
          <div className="mb-6">
            <span className="text-6xl">💰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Plan G Quote
          </h1>
          <div className="text-2xl font-semibold mb-4">
            Compare Rates from Top Insurance Companies
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Get free, no-obligation quotes for Medicare Supplement Plan G. 
            Find the best rates and coverage for your needs.
          </p>
        </section>

        {/* Quote Form Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Plan G Quote</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your ZIP code"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <select
                    id="age"
                    name="age"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your age</option>
                    <option value="65">65</option>
                    <option value="66">66</option>
                    <option value="67">67</option>
                    <option value="68">68</option>
                    <option value="69">69</option>
                    <option value="70">70</option>
                    <option value="71">71</option>
                    <option value="72">72</option>
                    <option value="73">73</option>
                    <option value="74">74</option>
                    <option value="75">75</option>
                    <option value="76">76</option>
                    <option value="77">77</option>
                    <option value="78">78</option>
                    <option value="79">79</option>
                    <option value="80">80+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="tobacco" className="block text-sm font-medium text-gray-700 mb-1">
                    Do you use tobacco? *
                  </label>
                  <select
                    id="tobacco"
                    name="tobacco"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="enrollmentPeriod" className="block text-sm font-medium text-gray-700 mb-1">
                    When do you want to enroll? *
                  </label>
                  <select
                    id="enrollmentPeriod"
                    name="enrollmentPeriod"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select enrollment period</option>
                    <option value="immediate">Immediately</option>
                    <option value="next-month">Next month</option>
                    <option value="open-enrollment">During Open Enrollment</option>
                    <option value="birthday">Birthday month</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                  >
                    📞 GET MY FREE PLAN G QUOTES
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted by our Medicare experts. 
                  Your information is secure and will not be shared with third parties.
                </p>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">✅ What You'll Get</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free quotes from top insurance companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Side-by-side plan comparisons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Expert guidance on choosing the right plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>No-obligation consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Help with enrollment process</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">📞 Need Immediate Help?</h3>
                <p className="text-blue-700 mb-4">
                  Speak directly with a Medicare expert right now:
                </p>
                <a
                  href="tel:331-343-2584"
                  className="block bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-center hover:bg-blue-700 transition-colors"
                >
                  📞 CALL NOW: 331-E-HEALTH
                </a>
              </div>
              
              <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">⏰ Limited Time Offer</h3>
                <p className="text-yellow-700 mb-4">
                  Get your Plan G quotes today and receive:
                </p>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Free consultation with Medicare expert</li>
                  <li>• Personalized plan recommendations</li>
                  <li>• Enrollment assistance at no cost</li>
                  <li>• Ongoing support after enrollment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Get Quotes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Get Multiple Plan G Quotes?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Save Money</h3>
              <p className="text-gray-700">
                Plan G rates can vary by hundreds of dollars between insurance companies. 
                Compare to find the best value.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Find Quality</h3>
              <p className="text-gray-700">
                Not all insurance companies are created equal. 
                Compare customer service, financial strength, and claims processing.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Expert Advice</h3>
              <p className="text-gray-700">
                Our Medicare experts will help you understand the differences 
                and choose the plan that's right for you.
              </p>
            </div>
          </div>
        </section>

        {/* Sample Rates Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Plan G Rates (2025)</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Example: 65-year-old, Non-smoker</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Insurance Company</th>
                      <th className="border border-gray-300 p-3 text-center">Monthly Premium</th>
                      <th className="border border-gray-300 p-3 text-center">Annual Cost</th>
                      <th className="border border-gray-300 p-3 text-center">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Company A</td>
                      <td className="border border-gray-300 p-3 text-center">$165</td>
                      <td className="border border-gray-300 p-3 text-center">$1,980</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">A+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Company B</td>
                      <td className="border border-gray-300 p-3 text-center">$180</td>
                      <td className="border border-gray-300 p-3 text-center">$2,160</td>
                      <td className="border border-gray-300 p-3 text-center text-green-600">A</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Company C</td>
                      <td className="border border-gray-300 p-3 text-center">$195</td>
                      <td className="border border-gray-300 p-3 text-center">$2,340</td>
                      <td className="border border-gray-300 p-3 text-center text-blue-600">A-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Company D</td>
                      <td className="border border-gray-300 p-3 text-center">$210</td>
                      <td className="border border-gray-300 p-3 text-center">$2,520</td>
                      <td className="border border-gray-300 p-3 text-center text-blue-600">B+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-center">
                  <strong>Note:</strong> These are example rates. Your actual rates will depend on your age, location, 
                  health status, and the specific insurance company. Get personalized quotes to see your actual costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens After You Request Quotes?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Step 1: Submit Form</h3>
              <p className="text-gray-700 text-sm">
                Fill out our simple form with your basic information. 
                It only takes 2 minutes!
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Step 2: Get Quotes</h3>
              <p className="text-gray-700 text-sm">
                We'll gather quotes from top insurance companies 
                and prepare a personalized comparison for you.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Step 3: Expert Review</h3>
              <p className="text-gray-700 text-sm">
                A Medicare expert will call you to review your quotes 
                and answer any questions you have.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Step 4: Enroll</h3>
              <p className="text-gray-700 text-sm">
                Once you choose a plan, we'll help you complete 
                the enrollment process quickly and easily.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much do Plan G quotes cost?</h3>
              <p className="text-gray-700">
                Our Plan G quotes are completely free! There's no cost to get quotes, compare plans, or speak with our experts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly will I receive my quotes?</h3>
              <p className="text-gray-700">
                We typically provide quotes within 24 hours. For immediate assistance, you can call us directly at 331-E-HEALTH.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I have to enroll if I get quotes?</h3>
              <p className="text-gray-700">
                No, there's no obligation to enroll. You can review your quotes and take your time to make the best decision for your needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Which insurance companies do you work with?</h3>
              <p className="text-gray-700">
                We work with all major Medicare Supplement insurance companies including AARP, Mutual of Omaha, Cigna, and many others.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Your Plan G Quotes?</h2>
            <p className="text-xl mb-6">
              Join thousands of satisfied customers who found the perfect Medicare Supplement plan with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 CALL NOW: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                📝 GET FREE QUOTES
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More About Plan G</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/medicare-supplement-plan-g" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-blue-600">Plan G Benefits</h3>
              <p className="text-gray-600 text-sm">Complete coverage details</p>
            </Link>
            <Link href="/medicare-supplement-plan-g/comparison" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">⚖️</div>
              <h3 className="font-semibold text-blue-600">Plan Comparisons</h3>
              <p className="text-gray-600 text-sm">Compare with other plans</p>
            </Link>
            <Link href="/medicare-part-d" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">💊</div>
              <h3 className="font-semibold text-blue-600">Part D Plans</h3>
              <p className="text-gray-600 text-sm">Prescription coverage</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
