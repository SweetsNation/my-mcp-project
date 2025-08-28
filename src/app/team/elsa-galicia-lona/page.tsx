import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'

export const metadata: Metadata = {
  title: 'Elsa Galicia-Lona - Senior Insurance Specialist | Medicare & International Health | El-Mag Insurance',
  description: 'Elsa Galicia-Lona, Bilingual Senior Insurance Specialist with 15+ years helping Florida residents with Medicare Advantage, Health Insurance Marketplace, and International Health Insurance. Spanish speaker - Free consultations - call 331-E-HEALTH.',
  keywords: 'Elsa Galicia-Lona, Medicare specialist, Health Insurance Marketplace expert, International Health Insurance, Medicare Advantage agent, Florida insurance agent, licensed insurance agent',
  openGraph: {
    title: 'Elsa Galicia-Lona - Senior Insurance Specialist | El-Mag Insurance',
    description: 'Expert bilingual insurance guidance from Elsa Galicia-Lona. 15+ years experience helping clients with Medicare, Health Marketplace, and International Health Insurance. Fluent in English and Spanish.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/team/elsa-galicia-lona',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elsa Galicia-Lona - Senior Insurance Specialist',
    description: '15+ years bilingual insurance expertise. Helping clients with Medicare, Health Marketplace, and International Health Insurance in English and Spanish.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/team/elsa-galicia-lona',
  },
}

const elsaStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Elsa Galicia-Lona',
  jobTitle: 'Senior Insurance Specialist',
  worksFor: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
    telephone: '331-343-2584'
  },
  url: 'https://elmag-insurance.com/team/elsa-galicia-lona',
  description: 'Bilingual Senior Insurance Specialist with over 15 years of experience helping clients with Medicare Advantage, Health Insurance Marketplace, and International Health Insurance. Fluent in English and Spanish.'
  knowsAbout: [
    'Medicare Advantage Plans',
    'Health Insurance Marketplace',
    'International Health Insurance',
    'ACA Plans',
    'Medicare Enrollment',
    'Premium Tax Credits',
    'Expatriate Health Insurance'
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United States'
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
      name: 'Senior Insurance Specialist Certification'
    }
  ]
};

export default function ElsaGaliciaLonaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(elsaStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">EGL</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Elsa Galicia-Lona</h1>
                  <p className="text-xl text-blue-100">Senior Insurance Specialist</p>
                </div>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                15+ years of expertise helping Florida residents and international clients with comprehensive insurance solutions.
                Specializing in Medicare Advantage, Health Insurance Marketplace, and International Health Insurance. <strong>Hablo Español!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:331-343-2584"
                  className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Call Elsa: 331-E-HEALTH
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors text-center"
                >
                  📅 Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-blue-600">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Elsa's Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">Health Marketplace Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">International Health Insurance</span>
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
        
        {/* About Elsa */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Elsa Galicia-Lona</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Elsa Galicia-Lona brings over 15 years of comprehensive insurance experience, helping thousands 
                  of clients navigate Medicare, Health Insurance Marketplace, and International Health Insurance. 
                  Based in Florida and serving clients nationwide and internationally, Elsa has built a reputation 
                  for her multilingual expertise and deep understanding of diverse insurance needs.
                </p>
                <p className="text-gray-700 mb-4">
                  Elsa's unique expertise spans Medicare Advantage plans, ACA Marketplace coverage with premium 
                  tax credits, and specialized International Health Insurance for expatriates and travelers. Her 
                  bilingual capabilities and cultural understanding make her especially valuable for diverse 
                  communities seeking comprehensive insurance solutions.
                </p>
                <p className="text-gray-700">
                  What sets Elsa apart is her global perspective, personalized approach, and fluency in Spanish. She understands that 
                  insurance needs vary greatly depending on location, lifestyle, and life circumstances. Whether 
                  you're retiring domestically, living abroad, or seeking marketplace coverage, Elsa provides 
                  clear guidance in both English and Spanish (<em>¡Hablo Español!</em>).
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Professional Background</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• 15+ years comprehensive insurance experience</li>
                    <li>• Licensed in Florida and 45+ states</li>
                    <li>• Senior Insurance Specialist Certification</li>
                    <li>• 3,800+ clients successfully enrolled</li>
                    <li>• Fluent in English and Spanish</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Client Results</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Average savings: $2,200 per year</li>
                    <li>• 97% client satisfaction rate</li>
                    <li>• 88% client referral rate</li>
                    <li>• International coverage expertise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elsa's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Elsa's Insurance Specializations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Medicare Advantage</h3>
              <p className="text-blue-700 mb-4">
                Expert guidance on Medicare Advantage plans, including HMO, PPO, and Special Needs Plans across all major carriers.
              </p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Plan comparison and selection</li>
                <li>• Network and formulary analysis</li>
                <li>• Special needs plan expertise</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Health Insurance Marketplace</h3>
              <p className="text-green-700 mb-4">
                Comprehensive ACA Marketplace expertise including premium tax credits, subsidies, and cost-sharing reductions.
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Premium tax credit optimization</li>
                <li>• Cost-sharing reduction benefits</li>
                <li>• Special enrollment periods</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">International Health Insurance</h3>
              <p className="text-purple-700 mb-4">
                Specialized coverage for expatriates, international travelers, and those living or working abroad.
              </p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>• Expatriate health coverage</li>
                <li>• International travel insurance</li>
                <li>• Global health plan coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Medicare to ACA Transition</h3>
                <p className="text-blue-600">Early retiree, Age 62, Tampa, FL</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">COBRA Premium:</span>
                  <span className="font-bold text-red-600">$650/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">ACA Marketplace:</span>
                  <span className="font-bold text-blue-600">$420/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Premium Tax Credit:</span>
                  <span className="font-bold text-green-600">-$180/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Final Cost:</span>
                  <span className="font-bold text-green-600">$240/month</span>
                </div>
                <hr className="border-gray-300" />
                <div className="text-center">
                  <p className="text-blue-700 text-sm mb-2">Bridge coverage until Medicare eligibility</p>
                  <div className="text-blue-800 font-bold">
                    💰 Annual Savings: $4,920
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-purple-800">International Expat Coverage</h3>
                <p className="text-purple-600">American couple, living in Mexico</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">US-only Coverage:</span>
                  <span className="font-bold text-red-600">$850/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">International Plan:</span>
                  <span className="font-bold text-purple-600">$485/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Coverage Area:</span>
                  <span className="font-bold text-purple-600">Global</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Emergency Evacuation:</span>
                  <span className="font-bold text-purple-600">Included</span>
                </div>
                <hr className="border-gray-300" />
                <div className="text-center">
                  <p className="text-purple-700 text-sm mb-2">Comprehensive international health coverage</p>
                  <div className="text-purple-800 font-bold">
                    🌍 Annual Savings: $4,380
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Elsa's Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carlos M.</h4>
                  <p className="text-sm text-gray-600">Retired Engineer, Miami</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Elsa helped me navigate both Medicare and international coverage for our winter home in Costa Rica. 
                Her bilingual service and expertise in both areas saved us thousands while ensuring complete coverage."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">LR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lisa R.</h4>
                  <p className="text-sm text-gray-600">Small Business Owner, Orlando</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "When I lost my employer coverage, Elsa found me an ACA plan with tax credits that cost less than 
                my previous premium. Her knowledge of the marketplace saved my business budget!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Expert Insurance Guidance from Elsa</h2>
            <p className="text-xl text-blue-100 mb-6">
              Get personalized insurance guidance from a specialist with 15+ years of experience across Medicare, 
              Health Marketplace, and International coverage. No obligation, no pressure - just expert advice.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Free Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Bilingual</div>
                <div className="text-blue-100">English & Spanish</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Elsa Now: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors"
              >
                📅 Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Get Personalized Insurance Guidance from Elsa"
            subtitle="Schedule your free consultation with our Senior Insurance Specialist. Elsa will help you find the perfect Medicare, Health Marketplace, or International Health Insurance coverage for your needs."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Florida" 
          state="FL"
          demographic="Medicare beneficiaries and health insurance seekers"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Insurance Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold text-blue-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">Compare MA plans</p>
            </Link>
            <Link href="/health-insurance-marketplace" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-semibold text-blue-600">ACA Marketplace</h3>
              <p className="text-gray-600 text-sm">Health insurance plans</p>
            </Link>
            <Link href="/health-insurance-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-blue-600">Cost Calculator</h3>
              <p className="text-gray-600 text-sm">Estimate savings</p>
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