import { Metadata } from 'next';
import Link from 'next/link';
import SupplementalInsuranceAnalytics from '@/components/SupplementalInsuranceAnalytics';

export const metadata: Metadata = {
  title: 'Supplemental Health Insurance 2025 | Accident, Critical Illness & Hospital Coverage | Free Quotes',
  description: 'Get supplemental insurance to fill health coverage gaps. Accident insurance, critical illness plans, hospital indemnity, and dental/vision coverage. Compare quotes and enroll today - call 331-E-HEALTH.',
  keywords: 'supplemental health insurance, accident insurance, critical illness insurance, hospital indemnity insurance, supplemental medical insurance, gap insurance coverage, additional health coverage, short-term medical insurance, voluntary benefits, supplemental insurance quotes, dental vision insurance, hospital coverage insurance, supplemental insurance plans',
};

export default function SupplementalInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Analytics Component */}
      <SupplementalInsuranceAnalytics 
        pageType="main"
        userAge={40}
        hasExistingInsurance={true}
        supplementType="general"
        location="United States"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Supplemental Health Insurance 2025
          </h1>
          <p className="text-xl text-green-100 mb-6">
            Fill health insurance gaps with accident, critical illness, and hospital indemnity coverage. Get supplemental insurance quotes to protect against unexpected medical costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Quote
            </Link>
              <Link
              href="/resources"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Supplemental Insurance?</h2>
            <p className="text-gray-600 mb-4">
              Supplemental insurance provides additional coverage beyond your primary <Link href="/health-insurance-marketplace" className="text-green-600 hover:text-green-800 underline">health insurance plan</Link>. 
              It helps cover costs that your main insurance doesn't, such as deductibles, copayments, and specific medical events.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fill coverage gaps in your primary insurance</li>
              <li>Protect against high out-of-pocket medical costs</li>
              <li>Cover specific medical conditions and events</li>
              <li>Provide cash benefits for qualifying health emergencies</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Supplemental Plans</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-plan-type="accident">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accident Insurance</h3>
                <p className="text-sm text-gray-600">Coverage for accidental injuries and related expenses</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-plan-type="critical_illness">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Critical Illness Insurance</h3>
                <p className="text-sm text-gray-600">Lump-sum benefits for serious medical conditions</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-plan-type="hospital_indemnity">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hospital Indemnity Insurance</h3>
                <p className="text-sm text-gray-600">Daily benefits during hospital stays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Types Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Types of Supplemental Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospital Coverage</h3>
              <p className="text-gray-600">Daily benefits and lump-sum payments for hospital stays</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prescription Coverage</h3>
              <p className="text-gray-600">Help with medication costs and pharmacy expenses</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dental & Vision</h3>
              <p className="text-gray-600">Coverage for routine dental and vision care</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Supplemental Insurance?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Financial Protection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Reduce out-of-pocket medical expenses</li>
                <li>• Protect your savings from unexpected costs</li>
                <li>• Provide cash benefits for qualifying events</li>
                <li>• Help cover deductibles and copayments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Peace of Mind</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Know you're protected against major expenses</li>
                <li>• Focus on recovery, not medical bills</li>
                <li>• Maintain your standard of living</li>
                <li>• Protect your family's financial security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Primary Health Insurance Coordination */}
        <section className="mb-12">
          <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Coordinate with Your Primary Health Insurance</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Supplemental insurance works best when paired with comprehensive primary coverage. Explore your options for complete protection.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">ACA Marketplace Plans</h3>
                <p className="text-gray-600 mb-4">
                  Get primary health insurance through the marketplace and add supplemental coverage for complete protection.
                </p>
                <Link 
                  href="/health-insurance-marketplace"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Explore Marketplace →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Medicare Plans</h3>
                <p className="text-gray-600 mb-4">
                  If you're Medicare-eligible, coordinate supplemental insurance with Medicare coverage options.
                </p>
                <Link 
                  href="/medicare-advantage"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  View Medicare Options →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Cost Calculators</h3>
                <p className="text-gray-600 mb-4">
                  Use our tools to estimate total costs when combining primary and supplemental coverage.
                </p>
                <Link 
                  href="/health-insurance-cost-calculator"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Calculate Costs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Insurance Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Your Insurance Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Health Plans</h3>
              <p className="text-gray-600 mb-4">Start with comprehensive health insurance as your foundation coverage.</p>
              <Link 
                href="/health-insurance-marketplace"
                className="text-green-600 hover:text-green-800 font-semibold underline"
              >
                Get Coverage →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👴</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medicare Options</h3>
              <p className="text-gray-600 mb-4">Medicare-eligible? Explore Advantage and Supplement plan options.</p>
              <Link 
                href="/medicare-supplement"
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
              >
                View Medicare →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning Tools</h3>
              <p className="text-gray-600 mb-4">Use our calculators to plan your insurance strategy and budget.</p>
              <Link 
                href="/tools"
                className="text-orange-600 hover:text-orange-800 font-semibold underline"
              >
                Access Tools →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility Check</h3>
              <p className="text-gray-600 mb-4">Verify your eligibility for different insurance programs and benefits.</p>
              <Link 
                href="/eligibility"
                className="text-indigo-600 hover:text-indigo-800 font-semibold underline"
              >
                Check Eligibility →
              </Link>
            </div>
          </div>
        </section>

        {/* Retirement Planning Integration */}
        <section className="mb-12">
          <div className="bg-purple-50 border-2 border-purple-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Supplemental Insurance & Retirement Planning</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              As you approach retirement, supplemental insurance becomes even more important. Plan ahead for healthcare costs in retirement.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Social Security Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Coordinate your supplemental insurance strategy with your Social Security claiming decisions for comprehensive retirement planning.
                </p>
                <Link 
                  href="/social-security-analysis"
                  className="text-purple-600 hover:text-purple-800 font-semibold underline"
                >
                  Get Analysis →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Medicare Transition</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to transition from supplemental insurance to Medicare coverage when you turn 65.
                </p>
                <Link 
                  href="/medicare-enrollment-timeline"
                  className="text-purple-600 hover:text-purple-800 font-semibold underline"
                >
                  View Timeline →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Team Section */}
        <section className="mb-12">
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Meet Our Supplemental Insurance Experts</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our licensed specialists help you choose the right supplemental coverage to protect your health and finances.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Insurance Team</h3>
                  <p className="text-teal-600 font-semibold mb-3">Licensed Supplemental Insurance Specialists</p>
                  <p className="text-gray-600 mb-4">Helping clients protect against unexpected medical costs with comprehensive supplemental coverage.</p>
                  <Link 
                    href="/team"
                    className="text-teal-600 hover:text-teal-800 font-semibold underline"
                  >
                    Meet Our Team →
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Specialists</h3>
                  <p className="text-teal-600 font-semibold mb-3">Local Insurance Advisors</p>
                  <p className="text-gray-600 mb-4">Find specialists in your area who understand local insurance markets and regulations.</p>
                  <Link 
                    href="/specialists"
                    className="text-teal-600 hover:text-teal-800 font-semibold underline"
                  >
                    Find Local Help →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supplemental Insurance Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Coverage Guides</h3>
              <p className="text-gray-600 mb-4">Learn about different types of supplemental insurance and how they work with primary coverage.</p>
              <Link 
                href="/resources"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Browse Guides →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🧮 Quote Tools</h3>
              <p className="text-gray-600 mb-4">Use our tools to compare supplemental insurance options and get personalized quotes.</p>
              <Link 
                href="/tools"
                className="text-green-600 hover:text-green-800 font-semibold underline"
              >
                Get Quotes →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📝 Latest News</h3>
              <p className="text-gray-600 mb-4">Stay updated on supplemental insurance trends, new products, and industry changes.</p>
              <Link 
                href="/blog"
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
              >
                Read Updates →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Comprehensive Protection?</h2>
          <p className="text-gray-600 mb-6">
            Our insurance specialists can help you find the right supplemental coverage 
            to work with your <Link href="/health-insurance-marketplace" className="text-teal-600 hover:text-teal-800 underline font-semibold">primary health insurance</Link> and protect your family from unexpected medical expenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Free Quotes
            </Link>
            <Link
              href="/resources"
              className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              Download Coverage Guide
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Need primary coverage first? Start with <Link href="/health-insurance-marketplace" className="text-teal-600 hover:text-teal-800 underline">ACA Marketplace plans</Link> or explore <Link href="/medicare-advantage" className="text-teal-600 hover:text-teal-800 underline">Medicare options</Link> if you're 65+.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
