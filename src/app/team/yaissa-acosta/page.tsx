import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'

export const metadata: Metadata = {
  title: 'Yaissa Acosta - Bilingual Insurance Specialist | Health & Medicare Expert | El-Mag Insurance',
  description: 'Yaissa Acosta, Bilingual Insurance Specialist with 2+ years helping Florida clients with Health Insurance Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health Insurance. Spanish speaker - Free consultations - call 331-E-HEALTH.',
  keywords: 'Yaissa Acosta, bilingual insurance specialist, Health Insurance Marketplace, Medicare Advantage, Life insurance agent, Supplemental Health Insurance, Spanish speaking agent, Florida insurance agent',
  openGraph: {
    title: 'Yaissa Acosta - Bilingual Insurance Specialist | El-Mag Insurance',
    description: 'Expert bilingual insurance guidance from Yaissa Acosta. 2+ years helping clients with Health Marketplace, Medicare Advantage, and Life Insurance. Fluent in English and Spanish.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/team/yaissa-acosta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaissa Acosta - Bilingual Insurance Specialist',
    description: '2+ years bilingual insurance expertise. Helping clients with Health Marketplace, Medicare Advantage, and Life Insurance in English and Spanish.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/team/yaissa-acosta',
  },
}

const yaissaStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yaissa Acosta',
  jobTitle: 'Insurance Specialist',
  worksFor: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
    telephone: '331-343-2584'
  },
  url: 'https://elmag-insurance.com/team/yaissa-acosta',
  description: 'Bilingual Insurance Specialist with over 2 years of experience helping clients with Health Insurance Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health Insurance. Fluent in English and Spanish.',
  knowsAbout: [
    'Health Insurance Marketplace',
    'Medicare Advantage Plans',
    'Life Insurance',
    'Supplemental Health Insurance',
    'ACA Plans',
    'Premium Tax Credits',
    'Medicare Enrollment',
    'Individual Health Insurance'
  ],
  areaServed: {
    '@type': 'State',
    name: 'Florida'
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: 'Licensed Insurance Agent - Florida'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'Certified Insurance Specialist'
    }
  ]
};

export default function YaissaAcostaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(yaissaStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">YA</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Yaissa Acosta</h1>
                  <p className="text-xl text-orange-100">Insurance Specialist</p>
                </div>
              </div>
              <p className="text-xl text-orange-100 mb-6">
                2+ years helping Florida families and individuals find the right insurance coverage with Health Marketplace, 
                Medicare Advantage, Life Insurance, and Supplemental Health plans. <strong>¡Hablo Español!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:331-343-2584"
                  className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Call Yaissa: 331-E-HEALTH
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-orange-50 transition-colors text-center"
                >
                  🏥 Get Your Quote
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-orange-600">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Yaissa's Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Health Marketplace Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Life Insurance Advisor</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Supplemental Health Plans</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Florida Licensed Agent</span>
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
        
        {/* About Yaissa */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Yaissa Acosta</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Yaissa Acosta is a passionate and dedicated insurance specialist who brings fresh energy and 
                  bilingual expertise to help Florida families find the right insurance coverage. With over 2 years 
                  of focused experience in health insurance, Medicare, and life insurance, Yaissa has quickly 
                  established herself as a trusted advisor for diverse communities seeking quality coverage.
                </p>
                <p className="text-gray-700 mb-4">
                  Yaissa specializes in Health Insurance Marketplace navigation, Medicare Advantage plan selection, 
                  Life Insurance planning, and Supplemental Health Insurance to fill coverage gaps. Her bilingual 
                  capabilities and cultural understanding make her especially valuable for Spanish-speaking families 
                  who need clear guidance through the insurance selection process.
                </p>
                <p className="text-gray-700">
                  What makes Yaissa special is her commitment to personalized service and her ability to explain 
                  complex insurance concepts in simple terms. She takes the time to understand each client's unique 
                  situation and provides clear guidance in both English and Spanish (<em>¡Hablo Español!</em>) to 
                  ensure everyone feels confident about their insurance decisions.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Professional Background</h3>
                  <ul className="space-y-2 text-orange-700">
                    <li>• 2+ years focused insurance experience</li>
                    <li>• Licensed in Florida and growing states</li>
                    <li>• Certified Insurance Specialist</li>
                    <li>• 450+ clients successfully enrolled</li>
                    <li>• Fluent in English and Spanish</li>
                    <li>• Health and Medicare specialist</li>
                  </ul>
                </div>
                <div className="bg-pink-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-pink-800 mb-4">Client Results</h3>
                  <ul className="space-y-2 text-pink-700">
                    <li>• Average savings: $1,400 per year</li>
                    <li>• 98% client satisfaction rate</li>
                    <li>• 91% client referral rate</li>
                    <li>• Bilingual service excellence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yaissa's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Yaissa's Insurance Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Health Insurance Marketplace</h3>
              <p className="text-blue-700 mb-4">
                Expert navigation of the ACA Marketplace with premium tax credits and subsidy optimization for individuals and families.
              </p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Marketplace plan selection</li>
                <li>• Premium tax credit analysis</li>
                <li>• Subsidy qualification review</li>
                <li>• Special enrollment periods</li>
                <li>• COBRA alternatives</li>
                <li>• Family coverage planning</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Medicare Advantage</h3>
              <p className="text-green-700 mb-4">
                Comprehensive Medicare Advantage plan guidance for seniors seeking all-in-one coverage with additional benefits.
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Plan benefit comparison</li>
                <li>• Provider network analysis</li>
                <li>• Prescription drug coverage</li>
                <li>• Extra benefits (dental, vision)</li>
                <li>• Star rating evaluation</li>
                <li>• Annual enrollment assistance</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Life Insurance</h3>
              <p className="text-purple-700 mb-4">
                Term and permanent life insurance solutions to protect families and provide financial security for loved ones.
              </p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Term life insurance plans</li>
                <li>• Whole life coverage</li>
                <li>• Family protection planning</li>
                <li>• Beneficiary guidance</li>
                <li>• Coverage amount analysis</li>
                <li>• Affordable options</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Supplemental Health Insurance</h3>
              <p className="text-teal-700 mb-4">
                Additional coverage to fill gaps in primary health insurance including dental, vision, and critical illness plans.
              </p>
              <ul className="text-sm text-teal-600 space-y-1">
                <li>• Dental insurance plans</li>
                <li>• Vision coverage options</li>
                <li>• Critical illness insurance</li>
                <li>• Hospital indemnity plans</li>
                <li>• Gap coverage analysis</li>
                <li>• Affordable supplemental options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-orange-800">Young Family Health Coverage</h3>
                <p className="text-orange-600">Family of 3, Tampa, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Original COBRA Cost:</span>
                  <span className="font-bold text-red-600">$950/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Marketplace Plan:</span>
                  <span className="font-bold text-green-600">$285/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Premium Tax Credit:</span>
                  <span className="font-bold text-blue-600">$350/month</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$7,980</span>
                </div>
                <div className="text-center text-orange-800 font-bold text-xl">
                  💰 Better coverage, major savings
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Senior Medicare Transition</h3>
                <p className="text-blue-600">New Medicare Beneficiary, Age 65, Miami, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Previous Employer Plan:</span>
                  <span className="font-bold text-red-600">$420/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Advantage:</span>
                  <span className="font-bold text-green-600">$45/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Added Benefits:</span>
                  <span className="font-bold text-blue-600">Dental + Vision + Rx</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$4,500</span>
                </div>
                <div className="text-center text-blue-800 font-bold text-xl">
                  🎯 Enhanced benefits, lower cost
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Yaissa's Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carmen M.</h4>
                  <p className="text-sm text-gray-600">Working Mother, Fort Lauderdale, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Yaissa helped me find health insurance for my family that we could actually afford. She explained 
                everything in Spanish for my mom and made sure we understood all our options. ¡Muy profesional!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold">RH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Robert H.</h4>
                  <p className="text-sm text-gray-600">Early Retiree, Orlando, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Yaissa made my transition from employer insurance to Medicare Advantage seamless. She's young but 
                really knows her stuff. Great attention to detail and very patient with all my questions."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Expert Insurance Guidance with Yaissa</h2>
            <p className="text-xl text-orange-100 mb-6">
              Whether you need Health Marketplace coverage, Medicare Advantage plans, Life Insurance, or Supplemental 
              Health benefits, Yaissa provides personalized guidance in English and Spanish.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$1,400</div>
                <div className="text-orange-100">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Bilingüe</div>
                <div className="text-orange-100">English & Spanish</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">98%</div>
                <div className="text-orange-100">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Yaissa: 331-E-HEALTH
              </a>
              <Link
                href="/health-insurance-cost-calculator"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-orange-50 transition-colors"
              >
                💰 Calculate Savings
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Get Your Free Insurance Analysis from Yaissa"
            subtitle="Discover the best coverage options for Health Insurance Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health plans. Yaissa provides expert bilingual guidance to help you find affordable, comprehensive coverage."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Florida" 
          state="FL"
          demographic="individuals and families"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Insurance Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/health-insurance-marketplace" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-semibold text-orange-600">Health Marketplace</h3>
              <p className="text-gray-600 text-sm">ACA plans</p>
            </Link>
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold text-orange-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">All-in-one plans</p>
            </Link>
            <Link href="/health-insurance-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-orange-600">Cost Calculator</h3>
              <p className="text-gray-600 text-sm">Estimate savings</p>
            </Link>
            <Link href="/team" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-orange-600">Our Team</h3>
              <p className="text-gray-600 text-sm">Meet our experts</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}