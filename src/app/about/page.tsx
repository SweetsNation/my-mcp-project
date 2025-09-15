import type { Metadata } from 'next';
import Link from 'next/link';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'About Us - El-Mag Insurance',
  description: 'Learn about El-Mag Insurance, our mission to help you find the perfect Medicare Advantage plan, and our team of licensed insurance professionals.',
  keywords: 'about El-Mag Insurance, Medicare experts, licensed agents, insurance agency',
  alternates: {
    canonical: 'https://elmaginsurance.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About El-Mag Insurance</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in navigating Insurance plans with expert guidance 
              and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe everyone deserves access to quality healthcare coverage that fits their needs and budget. 
              Our mission is to simplify the Insurance selection process and help you make informed 
              decisions about your healthcare future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded with a commitment to transparency and client advocacy, El-Mag Insurance 
                  emerged from the recognition that Insurance can be overwhelming and confusing for 
                  many Americans starting married life, building a family, or approaching retirement.
                </p>
                <p>
                  Our founders, experienced insurance professionals, witnessed firsthand the 
                  challenges people face when trying to understand their Insurance options. They 
                  set out to create an agency that would prioritize education, transparency, and 
                  genuine care for each client's unique situation.
                </p>
                <p>
                  Today, we continue to uphold those values, helping thousands of individuals and 
                  families find Insurance plans that provide the coverage they need at 
                  prices they can afford.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                    <div className="text-gray-600">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">States Licensed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                    <div className="text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency about plan costs, benefits, and limitations. 
                No hidden fees or surprises.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We understand that healthcare decisions are personal and important. We listen with 
                empathy and provide support every step of the way.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of licensed professionals with deep knowledge of insurance 
                regulations and insurance products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Services We Provide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Medicare to Health Insurance Marketplace, we offer comprehensive coverage solutions 
              tailored to your unique needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Medicare Services */}
            <Link href="/medicare-advantage" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Medicare Advantage</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive Medicare plans with extra benefits like dental, vision, and prescription coverage. 
                Many plans available with $0 monthly premiums.
              </p>
              <span className="text-blue-600 font-medium group-hover:text-blue-800">
                Learn More →
              </span>
            </Link>

            <Link href="/medicare-supplement-plan-g" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Medicare Supplement</h3>
              <p className="text-gray-600 mb-4">
                Medigap insurance that works with Original Medicare to cover gaps in coverage. 
                Plan G offers comprehensive protection with predictable costs.
              </p>
              <span className="text-green-600 font-medium group-hover:text-green-800">
                Explore Plans →
              </span>
            </Link>

            <Link href="/medicare-part-d" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Medicare Part D</h3>
              <p className="text-gray-600 mb-4">
                Prescription drug coverage plans to help reduce your medication costs. 
                We help you find plans that cover your specific medications.
              </p>
              <span className="text-purple-600 font-medium group-hover:text-purple-800">
                Check Coverage →
              </span>
            </Link>

            <Link href="/health-insurance-marketplace" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">Health Insurance Marketplace</h3>
              <p className="text-gray-600 mb-4">
                ACA plans with premium tax credits and cost-sharing reductions. 
                Find affordable health insurance for individuals and families under 65.
              </p>
              <span className="text-teal-600 font-medium group-hover:text-teal-800">
                Get Coverage →
              </span>
            </Link>

            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Term life, whole life, and final expense insurance to protect your family's financial future. 
                Affordable coverage options for every budget.
              </p>
              <Link href="/contact" className="text-orange-600 font-medium group-hover:text-orange-800">
                Get Quote →
              </Link>
            </div>

            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Medicare Extra Help</h3>
              <p className="text-gray-600 mb-4">
                Low-income subsidy programs to help reduce prescription drug costs and Medicare premiums. 
                We help determine eligibility and apply.
              </p>
              <Link href="/medicare-extra-help" className="text-indigo-600 font-medium group-hover:text-indigo-800">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Tools & Resources */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Free Tools & Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/medicare-cost-calculator" className="group text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <span className="text-xl">🧮</span>
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Cost Calculator</h4>
                <p className="text-sm text-gray-600 mt-1">Calculate Medicare costs</p>
              </Link>

              <Link href="/health-insurance-cost-calculator" className="group text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors">
                  <span className="text-xl">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-teal-600">ACA Calculator</h4>
                <p className="text-sm text-gray-600 mt-1">Estimate subsidies</p>
              </Link>

              <Link href="/medicare-plan-comparison-tool" className="group text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                  <span className="text-xl">📋</span>
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Plan Comparison</h4>
                <p className="text-sm text-gray-600 mt-1">Compare plans side-by-side</p>
              </Link>

              <Link href="/enrollment-timeline" className="group text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                  <span className="text-xl">📅</span>
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600">Enrollment Timeline</h4>
                <p className="text-sm text-gray-600 mt-1">Important dates</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of licensed insurance professionals is here to guide you 
              through your Medicare Advantage journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/team/elsa-galicia-lona" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl font-bold text-blue-600">EGL</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Elsa Galicia-Lona</h3>
                <p className="text-blue-600 font-medium mb-3">Health Insurance Marketplace Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  15+ years of experience helping clients with ACA plans, Medicare Advantage, and international health insurance. 
                  Licensed in Florida. Fluent in Spanish.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-800">
                  View Profile →
                </span>
              </div>
            </Link>
            <Link href="/team/magdalena-salinas" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl font-bold text-green-600">MS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Magdalena Salinas</h3>
                <p className="text-green-600 font-medium mb-3">Social Security & Medicare Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  11+ years optimizing Social Security benefits and Medicare Supplement coverage. 
                  Expert in retirement planning and benefits comparison. Licensed in 7 states. Fluent in Spanish.
                </p>
                <span className="text-green-600 font-medium group-hover:text-green-800">
                  View Profile →
                </span>
              </div>
            </Link>
            <Link href="/team/eric-salinas" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl font-bold text-purple-600">ES</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Eric Salinas</h3>
                <p className="text-purple-600 font-medium mb-3">Medicare Supplement & Part D Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  10+ years expertise in Medicare Supplement plans and Part D prescription coverage. 
                  Technology-driven approach to simplify complex Medicare concepts. Licensed in 5 states. Fluent in Spanish.
                </p>
                <span className="text-purple-600 font-medium group-hover:text-purple-800">
                  View Profile →
                </span>
              </div>
            </Link>
            <Link href="/team/junior-goulbourne" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl font-bold text-orange-600">JG</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Junior Goulbourne</h3>
                <p className="text-orange-600 font-medium mb-3">Medicare Advantage & Life Insurance Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  11+ years expertise in Medicare Advantage plans and Life Insurance solutions. 
                  Former police official serving Florida families and businesses with comprehensive protection.
                </p>
                <span className="text-orange-600 font-medium group-hover:text-orange-800">
                  View Profile →
                </span>
              </div>
            </Link>
            <Link href="/team/yaissa-acosta" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl font-bold text-teal-600">YA</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">Yaissa Acosta</h3>
                <p className="text-teal-600 font-medium mb-3">Health Insurance Marketplace Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  2+ years helping Florida families with Health Insurance Marketplace, ACA plans, and premium tax credits. 
                  Healthcare field veteran with bilingual expertise. Fluent in Spanish.
                </p>
                <span className="text-teal-600 font-medium group-hover:text-teal-800">
                  View Profile →
                </span>
              </div>
            </Link>
            <Link href="/team/marcia-cordero" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl font-bold text-red-600">MC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Marcia Cordero</h3>
                <p className="text-red-600 font-medium mb-3">Health Insurance Marketplace & Life Insurance Expert</p>
                <p className="text-gray-600 text-sm mb-4">
                  1+ year helping Hispanic families with Health Insurance Marketplace, ACA plans, and life insurance. 
                  Former educator bringing teaching expertise to insurance guidance. Fluent in Spanish.
                </p>
                <span className="text-red-600 font-medium group-hover:text-red-800">
                  View Profile →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Licensing & Compliance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Licensing & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensed & Certified</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Licensed in multiple states
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Medicare certified agents
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Regular continuing education
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Standards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    CMS compliance certified
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    HIPAA compliant practices
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    State insurance board approved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Insurance Plan?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced team help you navigate your Insurance options 
            with personalized guidance and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block">
              Get Free Consultation
            </Link>
            <a href="tel:331-343-2584" className="border border-gray-400 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center inline-block">
              331-E-HEALTH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}