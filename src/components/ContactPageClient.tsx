'use client';

import Link from 'next/link';
import ContactForm from './ContactForm';
import { trackPhoneCall } from '@/lib/analytics';
import { useLiveChat } from '@/hooks/useLiveChat';

export default function ContactPageClient() {
  const { openLiveChat } = useLiveChat();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to find your perfect Insurance plan? Our licensed experts are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us Today</h3>
              <a 
                href="tel:331-343-2584" 
                onClick={() => trackPhoneCall('331-343-2584')}
                className="text-blue-600 font-bold text-2xl mb-2 hover:text-blue-800 transition-colors inline-block"
              >
                331-E-HEALTH
              </a>
              <p className="text-gray-600 text-sm mb-4">
                Monday - Friday: 9AM - 6PM EST<br />
                Saturday and Sunday: Closed
              </p>
              <a 
                href="tel:331-343-2584" 
                onClick={() => trackPhoneCall('331-343-2584')}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full text-center"
              >
                Call Now
              </a>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-green-600 font-bold text-lg mb-4">support@elmaginsurance.com</p>
              <p className="text-gray-600 text-sm mb-4">
                We respond to all emails within 24 hours during business days.
              </p>
              <a 
                href="mailto:support@elmaginsurance.com" 
                className="inline-block border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors w-full text-center"
              >
                Send Email
              </a>
            </div>

            {/* Live Chat */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-purple-600 font-medium mb-4">Chat with an agent now</p>
              <p className="text-gray-600 text-sm mb-4">
                Get instant answers to your Insurance questions from our live support team.
              </p>
              <button 
                onClick={openLiveChat}
                className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors w-full"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Send Us a Message"
            subtitle="Fill out the form below and one of our Insurance experts will contact you within one business day."
            source="Contact Page"
          />
        </div>
      </section>

      {/* Insurance Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Services We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Medicare to Health Insurance Marketplace, we offer comprehensive coverage solutions 
              tailored to your unique needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Talk to a Specialist Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Talk to a Specialist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of licensed insurance professionals is here to guide you 
              through your insurance journey with personalized expert advice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/team/elsa-galicia-lona" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl font-bold text-blue-600">EGL</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Elsa Galicia-Lona</h3>
                <p className="text-blue-600 font-medium mb-2">Health Insurance Marketplace Expert</p>
                <p className="text-gray-600 text-sm mb-3">15+ years experience • Licensed in Florida • Fluent in Spanish</p>
                <a href="tel:331-343-2584" className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  📞 331-E-HEALTH
                </a>
              </div>
            </Link>
            
            <Link href="/team/magdalena-salinas" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl font-bold text-green-600">MS</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Magdalena Salinas</h3>
                <p className="text-green-600 font-medium mb-2">Social Security & Medicare Expert</p>
                <p className="text-gray-600 text-sm mb-3">11+ years experience • Licensed in 7 states • Fluent in Spanish</p>
                <a href="tel:954-668-1970" className="text-green-600 font-medium text-sm hover:text-green-800">
                  📞 954-668-1970
                </a>
              </div>
            </Link>
            
            <Link href="/team/eric-salinas" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl font-bold text-purple-600">ES</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Eric Salinas</h3>
                <p className="text-purple-600 font-medium mb-2">Medicare Supplement & Part D Expert</p>
                <p className="text-gray-600 text-sm mb-3">10+ years experience • Licensed in 5 states • Fluent in Spanish</p>
                <a href="tel:954-665-7228" className="text-purple-600 font-medium text-sm hover:text-purple-800">
                  📞 954-665-7228
                </a>
              </div>
            </Link>
            
            <Link href="/team/junior-goulbourne" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl font-bold text-orange-600">JG</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Junior Goulbourne</h3>
                <p className="text-orange-600 font-medium mb-2">Medicare Advantage & Life Insurance Expert</p>
                <p className="text-gray-600 text-sm mb-3">11+ years experience • Licensed in Florida • Former police official</p>
                <a href="tel:786-515-3808" className="text-orange-600 font-medium text-sm hover:text-orange-800">
                  📞 786-515-3808
                </a>
              </div>
            </Link>
            
            <Link href="/team/yaissa-acosta" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-2xl font-bold text-teal-600">YA</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">Yaissa Acosta</h3>
                <p className="text-teal-600 font-medium mb-2">Health Insurance Marketplace Expert</p>
                <p className="text-gray-600 text-sm mb-3">2+ years experience • Licensed in Florida • Fluent in Spanish</p>
                <a href="tel:786-378-3921" className="text-teal-600 font-medium text-sm hover:text-teal-800">
                  📞 786-378-3921
                </a>
              </div>
            </Link>
            
            <Link href="/team/marcia-cordero" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl font-bold text-red-600">MC</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">Marcia Cordero</h3>
                <p className="text-red-600 font-medium mb-2">Health Insurance Marketplace & Life Insurance Expert</p>
                <p className="text-gray-600 text-sm mb-3">1+ year experience • Licensed in Florida • Fluent in Spanish</p>
                <a href="tel:786-569-7713" className="text-red-600 font-medium text-sm hover:text-red-800">
                  📞 786-569-7713
                </a>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools & Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our free calculators and tools to estimate costs, compare plans, and understand 
              important enrollment timelines for your insurance decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/medicare-cost-calculator" className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🧮</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">Medicare Cost Calculator</h4>
              <p className="text-sm text-gray-600 mb-4">Calculate and compare Medicare plan costs including premiums, deductibles, and out-of-pocket expenses.</p>
              <span className="text-blue-600 font-medium group-hover:text-blue-800">
                Calculate Now →
              </span>
            </Link>

            <Link href="/health-insurance-cost-calculator" className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 mb-2">ACA Subsidy Calculator</h4>
              <p className="text-sm text-gray-600 mb-4">Estimate premium tax credits and cost-sharing reductions for Health Insurance Marketplace plans.</p>
              <span className="text-teal-600 font-medium group-hover:text-teal-800">
                Check Eligibility →
              </span>
            </Link>

            <Link href="/medicare-plan-comparison-tool" className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">Plan Comparison Tool</h4>
              <p className="text-sm text-gray-600 mb-4">Compare Medicare Advantage, Supplement, and Part D plans side-by-side to find the best coverage.</p>
              <span className="text-purple-600 font-medium group-hover:text-purple-800">
                Compare Plans →
              </span>
            </Link>

            <Link href="/enrollment-timeline" className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">📅</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">Enrollment Timeline</h4>
              <p className="text-sm text-gray-600 mb-4">Stay informed about important Medicare and ACA enrollment periods and deadlines throughout the year.</p>
              <span className="text-green-600 font-medium group-hover:text-green-800">
                View Timeline →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600">
              We serve clients nationwide with local offices in key markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plantation, FL (Headquarters)</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  7520 NW 5th St, #201
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Plantation, FL 33317
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:331-343-2584" className="hover:text-blue-600 transition-colors">(331) E-HEALTH</a>
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nashville, TN</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  567 Music Row, Suite 200
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Nashville, TN 37203
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (615) 555-0456
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Raleigh, NC</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                  </svg>
                  890 Capital Blvd, Suite 300
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Raleigh, NC 27605
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (919) 555-0789
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}