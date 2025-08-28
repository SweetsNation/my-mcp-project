import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'

export const metadata: Metadata = {
  title: 'Eric Salinas - Bilingual Medicare Specialist | Medicare Supplement & Part D Expert | El-Mag Insurance',
  description: 'Eric Salinas, Bilingual Medicare Specialist with 10+ years helping seniors with Medicare Supplement, Part D, Medicare Advantage, Security & Evacuation, and Hospital Indemnity. Spanish speaker - Free consultations - call 331-E-HEALTH.',
  keywords: 'Eric Salinas, Medicare specialist, Medicare Supplement expert, Medicare Part D, Medicare Advantage agent, Hospital Indemnity, Security Evacuation, bilingual Medicare agent, Spanish speaking Medicare specialist',
  openGraph: {
    title: 'Eric Salinas - Bilingual Medicare Specialist | El-Mag Insurance',
    description: 'Expert bilingual Medicare guidance from Eric Salinas. 10+ years helping seniors with comprehensive Medicare coverage and supplemental benefits. Fluent in English and Spanish.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/team/eric-salinas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Salinas - Bilingual Medicare Specialist',
    description: '10+ years bilingual Medicare expertise. Helping seniors with Medicare Supplement, Part D, and Advantage plans in English and Spanish.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/team/eric-salinas',
  },
}

const ericStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eric Salinas',
  jobTitle: 'Medicare Specialist',
  worksFor: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
    telephone: '331-343-2584'
  },
  url: 'https://elmag-insurance.com/team/eric-salinas',
  description: 'Bilingual Medicare Specialist with over 10 years of experience helping seniors with Medicare Supplement, Medicare Part D, Medicare Advantage, Security and Evacuation Membership, and Hospital Indemnity plans. Fluent in English and Spanish.',
  knowsAbout: [
    'Medicare Supplement Plans',
    'Medicare Part D',
    'Medicare Advantage Plans',
    'Hospital Indemnity Insurance',
    'Security and Evacuation Membership',
    'Medicare Enrollment',
    'Senior Health Insurance',
    'Medicare Annual Open Enrollment'
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Florida'
    },
    {
      '@type': 'State', 
      name: 'Georgia'
    },
    {
      '@type': 'State',
      name: 'South Carolina'
    },
    {
      '@type': 'State',
      name: 'North Carolina'
    },
    {
      '@type': 'State',
      name: 'Texas'
    }
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: 'Licensed Insurance Agent - Multi-State'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'Medicare Specialist Certification'
    }
  ]
};

export default function EricSalinasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ericStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">ES</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Eric Salinas</h1>
                  <p className="text-xl text-blue-100">Medicare Specialist</p>
                </div>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                10+ years helping seniors navigate Medicare with comprehensive coverage solutions including Supplement, Part D, Advantage, and specialized protection plans.
                Licensed in 5 states. <strong>¡Hablo Español!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:331-343-2584"
                  className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Call Eric: 331-E-HEALTH
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors text-center"
                >
                  🏥 Medicare Analysis
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-blue-600">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Eric's Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Supplement Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Part D Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage Advisor</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Hospital Indemnity Plans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Security & Evacuation Coverage</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Licensed in 5 States</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Bilingual (English/Spanish)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* About Eric */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Eric Salinas</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Eric Salinas is a dedicated Medicare specialist with over 10 years of experience helping seniors 
                  find comprehensive Medicare coverage and supplemental protection. Based in Florida and licensed 
                  in five southeastern states, Eric has helped thousands of Medicare-eligible individuals navigate 
                  the complex world of Medicare Supplement, Part D, Advantage plans, and specialized coverage options.
                </p>
                <p className="text-gray-700 mb-4">
                  Eric's expertise extends beyond traditional Medicare coverage to include Hospital Indemnity plans 
                  that provide additional financial protection during hospital stays, and Security and Evacuation 
                  Membership services that offer peace of mind for active seniors who travel or face emergency 
                  situations. His comprehensive approach ensures clients have complete protection.
                </p>
                <p className="text-gray-700">
                  What makes Eric unique is his bilingual capability and deep understanding of diverse community 
                  needs. He provides clear explanations in both English and Spanish (<em>¡Hablo Español!</em>), 
                  ensuring all clients fully understand their Medicare options and feel confident in their coverage decisions.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Professional Background</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• 10+ years Medicare expertise</li>
                    <li>• Licensed in FL, GA, SC, NC, TX</li>
                    <li>• Medicare Specialist Certification</li>
                    <li>• 3,200+ seniors enrolled</li>
                    <li>• Fluent in English and Spanish</li>
                    <li>• Hospital Indemnity specialist</li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-4">Client Results</h3>
                  <ul className="space-y-2 text-teal-700">
                    <li>• Average savings: $1,800 per year</li>
                    <li>• 96% client satisfaction rate</li>
                    <li>• 92% annual retention rate</li>
                    <li>• Comprehensive coverage coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eric's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eric's Medicare Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Medicare Supplement</h3>
              <p className="text-blue-700 text-sm mb-3">
                Expert in Medigap Plans A through N, helping cover Medicare gaps and out-of-pocket costs.
              </p>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Plan comparison analysis</li>
                <li>• Cost-benefit optimization</li>
                <li>• Guaranteed issue rights</li>
                <li>• Annual review services</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Medicare Part D</h3>
              <p className="text-teal-700 text-sm mb-3">
                Prescription drug plan analysis to find the best coverage for your specific medications.
              </p>
              <ul className="text-xs text-teal-600 space-y-1">
                <li>• Drug formulary analysis</li>
                <li>• Pharmacy network review</li>
                <li>• Coverage gap planning</li>
                <li>• Annual enrollment optimization</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Medicare Advantage</h3>
              <p className="text-green-700 text-sm mb-3">
                Comprehensive Medicare Advantage plan selection with additional benefits beyond Original Medicare.
              </p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Plan benefit comparison</li>
                <li>• Provider network analysis</li>
                <li>• Extra benefits evaluation</li>
                <li>• Star rating assessment</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Hospital Indemnity</h3>
              <p className="text-purple-700 text-sm mb-3">
                Additional financial protection during hospital stays with cash benefits paid directly to you.
              </p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Daily benefit plans</li>
                <li>• Lump sum options</li>
                <li>• No network restrictions</li>
                <li>• Flexible benefit use</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Security & Evacuation</h3>
              <p className="text-orange-700 text-sm mb-3">
                Emergency medical evacuation and security services for active seniors and travelers.
              </p>
              <ul className="text-xs text-orange-600 space-y-1">
                <li>• Emergency evacuation</li>
                <li>• Medical repatriation</li>
                <li>• 24/7 assistance services</li>
                <li>• Travel security support</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Bilingual Services</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Complete Medicare guidance in English and Spanish for diverse communities.
              </p>
              <ul className="text-xs text-indigo-600 space-y-1">
                <li>• Spanish consultations</li>
                <li>• Bilingual materials</li>
                <li>• Cultural understanding</li>
                <li>• Family education</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Complete Medicare Package</h3>
                <p className="text-blue-600">Couple, Age 65 & 67, Florida</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Supplement:</span>
                  <span className="font-bold text-blue-600">Plan G</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Part D Coverage:</span>
                  <span className="font-bold text-blue-600">Optimized</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Hospital Indemnity:</span>
                  <span className="font-bold text-green-600">$200/day</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total Monthly Cost:</span>
                  <span className="font-bold text-green-600">$385/month</span>
                </div>
                <div className="text-center text-blue-800 font-bold text-xl">
                  🎯 Comprehensive protection with gap coverage
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-8 border-2 border-teal-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-teal-800">Medicare Advantage Success</h3>
                <p className="text-teal-600">Individual, Age 66, Georgia</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Original Medicare Cost:</span>
                  <span className="font-bold text-red-600">$320/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Advantage Plan:</span>
                  <span className="font-bold text-green-600">$0 premium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Extra Benefits:</span>
                  <span className="font-bold text-green-600">Dental + Vision</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$3,840</span>
                </div>
                <div className="text-center text-teal-800 font-bold text-xl">
                  💰 Plus $2,000 value in added benefits
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Eric's Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Maria R.</h4>
                  <p className="text-sm text-gray-600">Retired Nurse, Miami, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Eric explained everything in Spanish for my husband and English for me. He found us a Medicare 
                Supplement plan that covers everything and added Hospital Indemnity for extra peace of mind. ¡Excelente servicio!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-600 font-bold">JT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">James T.</h4>
                  <p className="text-sm text-gray-600">Retiree, Charlotte, NC</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Eric helped me switch from expensive Medicare Supplement to a Medicare Advantage plan that actually 
                pays me back! I'm saving $200+ per month and got dental coverage I didn't have before."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Complete Medicare Analysis with Eric</h2>
            <p className="text-xl text-blue-100 mb-6">
              Discover all your Medicare options including Supplement, Part D, Advantage, Hospital Indemnity, 
              and Security Evacuation coverage. Free consultation in English or Spanish.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$1,800</div>
                <div className="text-blue-100">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5</div>
                <div className="text-blue-100">States Licensed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Bilingüe</div>
                <div className="text-blue-100">English & Spanish</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Eric: 331-E-HEALTH
              </a>
              <Link
                href="/medicare-cost-calculator"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors"
              >
                🧮 Medicare Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Get Your Free Medicare Analysis from Eric"
            subtitle="Discover comprehensive Medicare coverage options including Supplement, Part D, Advantage plans, Hospital Indemnity, and Security Evacuation benefits. Eric provides expert guidance in English and Spanish across five southeastern states."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Multi-State" 
          state="FL, GA, SC, NC, TX"
          demographic="Medicare-eligible seniors"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Medicare Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold text-blue-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">All-in-one plans</p>
            </Link>
            <Link href="/medicare-supplement-plan-g" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold text-blue-600">Medicare Supplement</h3>
              <p className="text-gray-600 text-sm">Gap coverage</p>
            </Link>
            <Link href="/medicare-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-blue-600">Medicare Calculator</h3>
              <p className="text-gray-600 text-sm">Cost estimates</p>
            </Link>
            <Link href="/team" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-blue-600">Our Team</h3>
              <p className="text-gray-600 text-sm">Meet our experts</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}