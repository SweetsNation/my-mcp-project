import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'

export const metadata: Metadata = {
  title: 'Magdalena Salinas - Social Security Advisor & Medicare Specialist | El-Mag Insurance',
  description: 'Magdalena Salinas, Bilingual Social Security Advisor and Medicare specialist with 11+ years experience. Licensed in FL, AL, AZ, GA, TX, NC, UT. Spanish speaker - Free consultations - call 331-E-HEALTH.',
  keywords: 'Magdalena Salinas, Social Security advisor, Medicare specialist, Medicare Advantage expert, health insurance marketplace, supplemental health insurance, Social Security benefits',
  openGraph: {
    title: 'Magdalena Salinas - Social Security Advisor & Medicare Specialist | El-Mag Insurance',
    description: 'Expert bilingual Social Security and Medicare guidance from Magdalena Salinas. 11+ years helping clients optimize benefits and find comprehensive coverage. Fluent in English and Spanish.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/team/magdalena-salinas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magdalena Salinas - Social Security Advisor & Medicare Specialist',
    description: '11+ years bilingual expertise in Social Security benefits and Medicare. Helping clients maximize benefits and find the right coverage in English and Spanish.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/team/magdalena-salinas',
  },
}

const magdalenaStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Magdalena Salinas',
  jobTitle: 'Social Security Advisor & Medicare Specialist',
  worksFor: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
    telephone: '331-343-2584'
  },
  url: 'https://elmag-insurance.com/team/magdalena-salinas',
  description: 'Bilingual Social Security Advisor and Medicare specialist with over 11 years of experience helping clients optimize Social Security benefits and find comprehensive Medicare and health insurance coverage. Fluent in English and Spanish.',
  knowsAbout: [
    'Social Security Benefits',
    'Social Security Optimization',
    'Medicare Advantage Plans',
    'Medicare Supplement Insurance',
    'Health Insurance Marketplace',
    'Supplemental Health Insurance',
    'Medicare Enrollment',
    'ACA Marketplace Plans'
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Florida'
    },
    {
      '@type': 'State', 
      name: 'Alabama'
    },
    {
      '@type': 'State',
      name: 'Arizona'
    },
    {
      '@type': 'State',
      name: 'Georgia'
    },
    {
      '@type': 'State',
      name: 'Texas'
    },
    {
      '@type': 'State',
      name: 'North Carolina'
    },
    {
      '@type': 'State',
      name: 'Utah'
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
      name: 'Social Security Advisor Certification'
    }
  ]
};

export default function MagdalenaSalinasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(magdalenaStructuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl font-bold">MS</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Magdalena Salinas</h1>
                  <p className="text-xl text-purple-100">Social Security Advisor & Medicare Specialist</p>
                </div>
              </div>
              <p className="text-xl text-purple-100 mb-6">
                11+ years helping clients optimize Social Security benefits and find comprehensive Medicare and health insurance coverage.
                Licensed in 7 states with expertise in Medicare Advantage and marketplace plans. <strong>¡Hablo Español!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:331-343-2584"
                  className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors text-center"
                >
                  📞 Call Magdalena: 331-E-HEALTH
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-purple-50 transition-colors text-center"
                >
                  💼 Social Security Analysis
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-purple-600">👩‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Magdalena's Expertise</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span className="text-gray-700">Social Security Advisor</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span className="text-gray-700">Medicare Advantage Specialist</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span className="text-gray-700">Supplemental Health Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span className="text-gray-700">Health Marketplace Navigator</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span className="text-gray-700">Licensed in 7 States</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span className="text-gray-700">Bilingual (English/Spanish)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* About Magdalena */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Magdalena Salinas</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Magdalena Salinas is a certified Social Security Advisor and Medicare specialist with over 11 years 
                  of experience helping individuals and families optimize their benefits and find comprehensive health 
                  insurance coverage. Based in Florida and licensed in seven states, Magdalena has helped thousands 
                  maximize their Social Security benefits while securing the right Medicare and health insurance plans.
                </p>
                <p className="text-gray-700 mb-4">
                  As a specialist in Social Security optimization, Magdalena understands the complex interplay between 
                  Social Security benefits, Medicare timing, and health insurance needs. Her expertise helps clients 
                  make informed decisions about when to claim benefits, how to coordinate Medicare with other coverage, 
                  and which supplemental plans provide the best value.
                </p>
                <p className="text-gray-700">
                  Magdalena is passionate about educating clients on their benefit options and ensuring they understand 
                  exactly how their Social Security and health insurance decisions will impact their financial security. 
                  Her multi-state licensing and bilingual capabilities (<em>¡Hablo Español!</em>) allow her to serve diverse clients across the Southeast and Southwest.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Professional Background</h3>
                  <ul className="space-y-2 text-purple-700">
                    <li>• 11+ years Social Security & Medicare experience</li>
                    <li>• Licensed in FL, AL, AZ, GA, TX, NC, UT</li>
                    <li>• Certified Social Security Advisor</li>
                    <li>• 2,800+ clients served</li>
                    <li>• Medicare & ACA Marketplace expert</li>
                    <li>• Fluent in English and Spanish</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Client Benefits</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Average $15,000+ Social Security optimization</li>
                    <li>• 92% Medicare satisfaction rate</li>
                    <li>• 89% find better health coverage</li>
                    <li>• Comprehensive benefit coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magdalena's Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Magdalena's Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Social Security Benefits</h3>
              <p className="text-purple-700 text-sm mb-3">
                Expert analysis of claiming strategies, spousal benefits, and timing optimization.
              </p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• Claiming strategy analysis</li>
                <li>• Spousal benefit optimization</li>
                <li>• Survivor benefit planning</li>
                <li>• Earnings record review</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Medicare Advantage</h3>
              <p className="text-blue-700 text-sm mb-3">
                Comprehensive Medicare Advantage plan selection and benefit coordination.
              </p>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• Plan comparison & selection</li>
                <li>• Provider network analysis</li>
                <li>• Prescription drug coverage</li>
                <li>• Annual enrollment periods</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Supplemental Health</h3>
              <p className="text-green-700 text-sm mb-3">
                Gap coverage and supplemental insurance to enhance primary health plans.
              </p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• Medicare Supplement plans</li>
                <li>• Dental & vision coverage</li>
                <li>• Critical illness insurance</li>
                <li>• Hospital indemnity plans</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Health Marketplace</h3>
              <p className="text-orange-700 text-sm mb-3">
                ACA Marketplace navigation and subsidy optimization for under-65 clients.
              </p>
              <ul className="text-xs text-orange-600 space-y-1">
                <li>• Marketplace plan selection</li>
                <li>• Premium tax credits</li>
                <li>• Special enrollment periods</li>
                <li>• COBRA alternatives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-purple-800">Social Security Optimization Success</h3>
                <p className="text-purple-600">Married Couple, Age 62 & 66, Florida</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Original Strategy:</span>
                  <span className="font-bold text-red-600">Claim at 62</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Optimized Strategy:</span>
                  <span className="font-bold text-green-600">Delayed filing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Coordination:</span>
                  <span className="font-bold text-blue-600">Perfect timing</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Lifetime Benefit Increase:</span>
                  <span className="font-bold text-green-600">$180,000+</span>
                </div>
                <div className="text-center text-purple-800 font-bold text-xl">
                  💰 Plus Medicare Savings: $2,400/year
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-800">Medicare Advantage Transition</h3>
                <p className="text-blue-600">Early Retiree, Age 64, Georgia</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">COBRA Cost:</span>
                  <span className="font-bold text-red-600">$850/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">ACA Marketplace:</span>
                  <span className="font-bold text-green-600">$320/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Medicare Prep:</span>
                  <span className="font-bold text-blue-600">Ready at 65</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Annual Savings:</span>
                  <span className="font-bold text-green-600">$6,360</span>
                </div>
                <div className="text-center text-blue-800 font-bold text-xl">
                  🎯 Seamless Medicare transition planned
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Magdalena's Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">RG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Robert G.</h4>
                  <p className="text-sm text-gray-600">Retired Teacher, Tampa, FL</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Magdalena saved me thousands by showing me the right time to claim Social Security. She also found me 
                a Medicare Advantage plan that covers all my doctors. Her knowledge is incredible!"
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">LM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Linda M.</h4>
                  <p className="text-sm text-gray-600">Small Business Owner, Phoenix, AZ</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I was overwhelmed by all the Medicare and Social Security decisions. Magdalena made it simple and 
                saved me money on both. She's licensed in Arizona which made everything so much easier."
              </p>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Optimize Your Social Security & Health Benefits with Magdalena</h2>
            <p className="text-xl text-purple-100 mb-6">
              Get expert analysis of your Social Security claiming strategy and comprehensive health insurance coverage. 
              Free consultation with no obligation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$15K+</div>
                <div className="text-purple-100">Average SS Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">7</div>
                <div className="text-purple-100">States Licensed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free</div>
                <div className="text-purple-100">Comprehensive Analysis</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Magdalena: 331-E-HEALTH
              </a>
              <Link
                href="/medicare-cost-calculator"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-purple-50 transition-colors"
              >
                🧮 Medicare Cost Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Get Your Free Social Security & Medicare Analysis from Magdalena"
            subtitle="Discover how to maximize your Social Security benefits and find the best Medicare and health insurance coverage. Magdalena will analyze your unique situation across all her licensed states."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Multi-State" 
          state="FL, AL, AZ, GA, TX, NC, UT"
          demographic="individuals and couples approaching or in retirement"
        />

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Social Security & Medicare Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/medicare-advantage" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold text-purple-600">Medicare Advantage</h3>
              <p className="text-gray-600 text-sm">Plan comparison</p>
            </Link>
            <Link href="/medicare-cost-calculator" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧮</div>
              <h3 className="font-semibold text-purple-600">Medicare Calculator</h3>
              <p className="text-gray-600 text-sm">Cost estimates</p>
            </Link>
            <Link href="/health-insurance-marketplace" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-semibold text-purple-600">Health Marketplace</h3>
              <p className="text-gray-600 text-sm">ACA plans</p>
            </Link>
            <Link href="/team" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-purple-600">Our Team</h3>
              <p className="text-gray-600 text-sm">Meet our experts</p>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}