import { Metadata } from 'next';
import Link from 'next/link';
import SupplementalInsuranceAnalytics from '@/components/SupplementalInsuranceAnalytics';

export const metadata: Metadata = {
  title: 'Supplemental Health Insurance 2025 | Hospital Indemnity Plans | Cancer Insurance Coverage | Critical Illness Insurance',
  description: 'Get supplemental health insurance for high deductible health plans. Hospital indemnity plans, cancer insurance coverage, accident insurance for families, and critical illness coverage options. Fill coverage gaps with supplemental insurance - call 331-E-HEALTH.',
  keywords: 'supplemental health insurance, hospital indemnity insurance, critical illness insurance, cancer insurance coverage, accident insurance for families, hospital indemnity plans, supplemental insurance for Medicare, critical illness coverage options, high deductible health plan, gap coverage, dental insurance, vision insurance',
  openGraph: {
    title: 'Hospital Indemnity Insurance | Critical Illness Coverage | Supplemental Health Insurance 2025',
    description: 'Get hospital indemnity plans and critical illness insurance to fill coverage gaps. Cancer insurance coverage, accident insurance for families, and supplemental insurance for high deductible health plans.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/supplemental-insurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Indemnity Insurance | Critical Illness Coverage & Cancer Insurance',
    description: 'Fill health insurance gaps with hospital indemnity plans, critical illness coverage, cancer insurance coverage, and accident insurance for families.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/supplemental-insurance',
  },
};

export default function SupplementalInsurancePage() {
  return (
    <main className="min-h-screen">
      {/* Analytics Component */}
      <SupplementalInsuranceAnalytics 
        pageType="main"
        userAge={42}
        hasExistingInsurance={true}
        supplementType="comprehensive"
        location="United States"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hospital Indemnity Insurance | Critical Illness Insurance | Supplemental Health Insurance 2025
          </h1>
          <p className="text-xl text-green-100 mb-6">
            Get supplemental health insurance to fill coverage gaps in your primary health plan. Accident insurance, critical illness insurance, and hospital indemnity insurance provide essential financial protection for families. Pair with <Link href="/health-insurance-marketplace" className="text-yellow-200 hover:text-yellow-100 underline font-semibold">comprehensive health insurance</Link> and <Link href="/term-life-insurance" className="text-yellow-200 hover:text-yellow-100 underline font-semibold">life insurance protection</Link>.
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

        {/* High Deductible Health Plan Gap Coverage */}
        <section className="mb-12">
          <div className="bg-orange-50 border-2 border-orange-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">High Deductible Health Plan Gap Coverage: Supplemental Insurance Solutions</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              If you have a high deductible health plan, supplemental insurance provides essential gap coverage to protect you from expensive out-of-pocket costs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Cancer Insurance Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Cancer insurance provides critical illness coverage when you need it most. Get lump-sum benefits to help pay for cancer treatment costs not covered by your primary plan.
                </p>
                <h4 className="text-md font-semibold text-orange-700 mb-2">Cancer Treatment Benefits</h4>
                <div className="text-sm text-gray-500" data-cancer-insurance="treatment">
                  <strong>Cancer Insurance Coverage Benefits:</strong> Diagnostic tests, chemotherapy, radiation, surgery, and recovery expenses.
                </div>
                <div className="mt-4">
                  <Link href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors" data-cancer-insurance="diagnosis">
                    Get Cancer Insurance Quote
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Accident Insurance for Families</h3>
                <p className="text-gray-600 mb-4">
                  Protect your family with accident insurance that pays cash benefits for emergency room visits, ambulance rides, and accidental injuries.
                </p>
                <h4 className="text-md font-semibold text-orange-700 mb-2">Family Coverage Benefits</h4>
                <div className="text-sm text-gray-500" data-accident-insurance="family">
                  <strong>Family Benefits:</strong> Coverage for spouse and children, emergency care, fractures, burns, and rehabilitation costs.
                </div>
                <div className="mt-4">
                  <Link href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors" data-accident-insurance="emergency">
                    Get Family Accident Insurance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Indemnity Plans */}
        <section className="mb-12">
          <div className="bg-red-50 border-2 border-red-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hospital Indemnity Plans: Daily Cash Benefits & Coverage Options</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Hospital indemnity insurance pays you cash benefits for each day you're hospitalized, helping cover expenses your health insurance doesn't.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-red-200 text-center" data-hospital-indemnity="daily">
                <div className="text-3xl font-bold text-red-600 mb-3">$100-500</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Hospital Benefits</h3>
                <h4 className="text-sm font-medium text-red-700 mb-1">Cash Payment Structure</h4>
                <p className="text-gray-600">Cash payments for each day in the hospital</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-red-200 text-center" data-hospital-indemnity="icu">
                <div className="text-3xl font-bold text-red-600 mb-3">$50-250</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ICU Coverage</h3>
                <h4 className="text-sm font-medium text-red-700 mb-1">Intensive Care Benefits</h4>
                <p className="text-gray-600">Additional benefits for intensive care</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-red-200 text-center" data-hospital-indemnity="comprehensive">
                <div className="text-3xl font-bold text-red-600 mb-3">365</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Days Coverage</h3>
                <h4 className="text-sm font-medium text-red-700 mb-1">Maximum Benefit Period</h4>
                <p className="text-gray-600">Up to one full year of benefits</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors" data-hospital-indemnity="quote">
                Get Hospital Indemnity Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Critical Illness Coverage Options */}
        <section className="mb-12">
          <div className="bg-purple-50 border-2 border-purple-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Critical Illness Coverage Options: Cancer Insurance & Serious Medical Conditions</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Critical illness insurance provides lump-sum cash benefits when you're diagnosed with covered conditions like cancer, heart attack, or stroke. Works alongside <Link href="/term-life-insurance" className="text-purple-600 hover:text-purple-800 underline font-semibold">life insurance protection</Link> and <Link href="/disability-insurance" className="text-purple-600 hover:text-purple-800 underline font-semibold">disability income coverage</Link>.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Covered Conditions</h3>
                <h4 className="text-md font-semibold text-purple-700 mb-2">Major Medical Conditions</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Cancer</div>
                  <div>• Heart Attack</div>
                  <div>• Stroke</div>
                  <div>• Kidney Failure</div>
                  <div>• Major Organ Transplant</div>
                  <div>• Coronary Artery Bypass</div>
                  <div>• Paralysis</div>
                  <div>• Blindness</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Coverage Amounts</h3>
                <h4 className="text-md font-semibold text-purple-700 mb-2">Benefit Amount Options</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Individual:</span>
                    <span className="font-bold text-purple-600">$5,000 - $100,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Family:</span>
                    <span className="font-bold text-purple-600">$10,000 - $200,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Child Coverage:</span>
                    <span className="font-bold text-purple-600">25% of adult benefit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution: Supplemental Insurance for Medicare */}
        <section className="mb-12">
          <div className="bg-indigo-50 border-2 border-indigo-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Supplemental Insurance for Medicare: Bridge Coverage Gaps</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-3">❌ Medicare Coverage Gaps</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Original Medicare doesn't cover everything</li>
                  <li>• No out-of-pocket maximum protection</li>
                  <li>• Limited coverage for prescription drugs</li>
                  <li>• No dental, vision, or hearing coverage</li>
                  <li>• High deductibles and copayments</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-3">✅ Supplemental Insurance Solutions</h3>
                <ul className="text-gray-700 space-y-2" data-supplemental-insurance-medicare="true">
                  <li>• <strong>Supplemental insurance for Medicare</strong> fills gaps</li>
                  <li>• Hospital indemnity plans for Medicare beneficiaries</li>
                  <li>• Critical illness coverage for seniors</li>
                  <li>• Dental and vision supplemental plans</li>
                  <li>• Cancer insurance coverage for Medicare users</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors" data-cancer-insurance="medicare">
                    Get Medicare Supplemental Quotes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution: Dental and Vision Costs */}
        <section className="mb-12">
          <div className="bg-yellow-50 border-2 border-yellow-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Dental Insurance & Vision Insurance: Affordable Coverage Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">💰 High Dental & Vision Costs</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average dental cleaning costs $75-200</li>
                  <li>• Root canal procedures cost $1,000+</li>
                  <li>• Vision exams and glasses cost $200-500</li>
                  <li>• Most health plans don't cover routine care</li>
                  <li>• Emergency dental work is expensive</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">👁️ Affordable Coverage Solutions</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Dental insurance</strong> starting at $15/month</li>
                  <li>• Routine cleanings and checkups covered</li>
                  <li>• <strong>Vision insurance</strong> for eye exams and glasses</li>
                  <li>• Family plans available for complete coverage</li>
                  <li>• Network discounts for additional savings</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" data-plan-type="dental_vision">
                    Get Dental & Vision Quotes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Cross-Linking Hub: Comprehensive Insurance Strategy */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Build Your Complete Insurance Strategy</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Supplemental insurance works best as part of a comprehensive protection plan. Explore how different types of insurance work together to protect your family.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Primary Health Coverage */}
              <div className="bg-white p-6 rounded-lg border border-teal-200">
                <h3 className="text-xl font-bold text-teal-800 mb-3">🏥 Primary Health Coverage</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <Link href="/health-insurance-marketplace" className="text-blue-600 hover:text-blue-800 underline">ACA Marketplace Plans</Link> - Foundation coverage</li>
                  <li>• <Link href="/medicare-advantage" className="text-purple-600 hover:text-purple-800 underline">Medicare Advantage Plans</Link> - 65+ comprehensive</li>
                  <li>• <Link href="/medicare-supplement" className="text-indigo-600 hover:text-indigo-800 underline">Medicare Supplement Plans</Link> - Gap coverage</li>
                  <li>• <Link href="/short-term-health-insurance" className="text-green-600 hover:text-green-800 underline">Short-term Health Plans</Link> - Temporary coverage</li>
                </ul>
              </div>

              {/* Life & Disability Protection */}
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">💛 Life & Disability Protection</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <Link href="/term-life-insurance" className="text-red-600 hover:text-red-800 underline">Term Life Insurance</Link> - Family protection</li>
                  <li>• <Link href="/whole-life-insurance" className="text-purple-600 hover:text-purple-800 underline">Whole Life Insurance</Link> - Permanent coverage</li>
                  <li>• <Link href="/disability-insurance" className="text-orange-600 hover:text-orange-800 underline">Disability Insurance</Link> - Income protection</li>
                  <li>• <Link href="/long-term-care-insurance" className="text-teal-600 hover:text-teal-800 underline">Long-term Care Insurance</Link> - Senior care</li>
                </ul>
              </div>

              {/* Retirement & Financial Planning */}
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-3">📊 Retirement & Financial Planning</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <Link href="/social-security-analysis" className="text-purple-600 hover:text-purple-800 underline">Social Security Analysis</Link> - Claiming strategy</li>
                  <li>• <Link href="/retirement-planning" className="text-blue-600 hover:text-blue-800 underline">Retirement Planning</Link> - Income strategies</li>
                  <li>• <Link href="/annuities" className="text-green-600 hover:text-green-800 underline">Annuity Products</Link> - Guaranteed income</li>
                  <li>• <Link href="/medicare-enrollment-timeline" className="text-indigo-600 hover:text-indigo-800 underline">Medicare Enrollment</Link> - Transition planning</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/specialists" className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors mr-4">
                Speak with Insurance Specialist
              </Link>
              <Link href="/tools" className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors">
                Use Planning Tools
              </Link>
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
            <p>Need primary coverage first? Start with <Link href="/health-insurance-marketplace" className="text-teal-600 hover:text-teal-800 underline">ACA Marketplace plans</Link> or explore <Link href="/medicare-advantage" className="text-teal-600 hover:text-teal-800 underline">Medicare options</Link> if you're 65+. Consider <Link href="/final-expense" className="text-teal-600 hover:text-teal-800 underline">final expense insurance</Link> for end-of-life costs.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
