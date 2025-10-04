import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialProofSection from '@/components/SocialProofSection'
import RelatedServices from '@/components/RelatedServices'
import ResourceLinks from '@/components/ResourceLinks'
import { generateTeamPageSchema } from '@/lib/schema/team-schema'

// Enhanced Structured Data for SEO
const structuredData = generateTeamPageSchema({
  pagePath: '/team',
  pageTitle: 'Our Expert Insurance Team | Licensed Agents & Specialists',
  pageDescription: 'Meet our team of licensed insurance experts specializing in Medicare, ACA Marketplace, life insurance, disability insurance, business insurance, and auto insurance.'
});

export const metadata: Metadata = {
  title: 'Our Expert Insurance Team | Licensed Agents & Specialists | El-Mag Insurance',
  description: 'Meet our team of licensed insurance experts specializing in Medicare, ACA Marketplace, life insurance, disability insurance, business insurance, and auto insurance. Free consultations - call 331-E-HEALTH.',
  keywords: 'insurance team, licensed insurance agents, Medicare specialists, ACA experts, life insurance agents, disability insurance specialists, business insurance experts, auto insurance agents',
  openGraph: {
    title: 'Our Expert Insurance Team | El-Mag Insurance',
    description: 'Meet our team of licensed insurance specialists with expertise across Medicare, health insurance, life, disability, business, and auto coverage.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/team',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'El-Mag Insurance - Medicare and Health Insurance Solutions',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Expert Insurance Team | El-Mag Insurance',
    description: 'Licensed insurance specialists with expertise across all major insurance types. Get expert guidance for your insurance needs.',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/team',
  },
}


const teamMembers = [
  {
    name: 'Elsa Galicia-Lona',
    title: 'Senior Insurance Specialist',
    specialty: 'Medicare Advantage, Health Marketplace & International',
    experience: '15+ years',
    location: 'Florida',
    image: 'EGL',
    color: 'blue',
    description: 'Bilingual insurance expert specializing in Medicare Advantage, Health Marketplace, and International coverage with 15+ years of experience.',
    achievements: ['3,800+ clients served', '97% client retention', 'Bilingual English/Spanish'],
    slug: 'elsa-galicia-lona'
  },
  {
    name: 'Magdalena Salinas',
    title: 'Social Security Advisor & Medicare Specialist',
    specialty: 'Social Security Benefits & Medicare',
    experience: '11+ years',
    location: 'Florida',
    image: 'MS',
    color: 'green',
    description: 'Social Security Advisor and Medicare specialist helping clients optimize benefits and find comprehensive coverage.',
    achievements: ['2,800+ clients served', '$15K+ SS optimization', 'Licensed in 7 states'],
    slug: 'magdalena-salinas'
  },
  {
    name: 'Eric Salinas',
    title: 'Medicare Specialist',
    specialty: 'Medicare Supplement, Part D & Advantage',
    experience: '10+ years',
    location: 'Florida',
    image: 'ES',
    color: 'purple',
    description: 'Bilingual Medicare specialist helping seniors with comprehensive Medicare coverage, Hospital Indemnity, and Security Evacuation benefits.',
    achievements: ['3,200+ seniors enrolled', '$1,800 average savings', 'Licensed in 5 states'],
    slug: 'eric-salinas'
  },
  {
    name: 'Junior Goulbourne',
    title: 'Insurance Specialist',
    specialty: 'Medicare Advantage, Final Expense & Life',
    experience: '11+ years',
    location: 'Florida',
    image: 'JG',
    color: 'indigo',
    description: 'Multi-line insurance specialist helping clients with Medicare Advantage, Final Expense, Life Insurance, and Employee Benefits.',
    achievements: ['2,400+ clients served', '$2,100 average savings', '5 insurance specialties'],
    slug: 'junior-goulbourne'
  },
  {
    name: 'Yaissa Acosta',
    title: 'Insurance Specialist',
    specialty: 'Health Marketplace & Medicare Advantage',
    experience: '2+ years',
    location: 'Florida',
    image: 'YA',
    color: 'orange',
    description: 'Bilingual insurance specialist helping families with Health Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health coverage.',
    achievements: ['450+ clients enrolled', '$1,400 average savings', 'Bilingual English/Spanish'],
    slug: 'yaissa-acosta'
  },
  {
    name: 'Marcia Zulema Cordero Rizo',
    title: 'Insurance Specialist',
    specialty: 'Health Marketplace & Life Insurance',
    experience: '1+ years',
    location: 'Florida',
    image: 'MC',
    color: 'teal',
    description: 'Spanish-speaking insurance specialist serving the Hispanic community with Health Marketplace, Life Insurance, and Medicare coverage.',
    achievements: ['180+ Hispanic clients served', '$1,200 average savings', 'Complete Spanish service'],
    slug: 'marcia-cordero'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    teal: 'bg-teal-50 border-teal-200 text-teal-800'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Insurance Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Licensed specialists with decades of combined experience helping clients find the perfect insurance coverage 
              for Medicare, health, life, disability, business, and auto insurance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Our Team: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors"
              >
                💬 Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Team Stats */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team's Collective Expertise</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">49+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">10,680+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">States Licensed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">$305M+</div>
                <div className="text-gray-600">Coverage Placed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Insurance Specialists</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`${getColorClasses(member.color)} border-2 rounded-xl p-8 hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 bg-white/50 rounded-full flex items-center justify-center`}>
                      <span className="text-2xl font-bold">{member.image}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-lg font-semibold opacity-80 mb-2">{member.title}</p>
                        <div className="flex gap-4 text-sm opacity-75">
                          <span>📍 {member.location}</span>
                          <span>⏱️ {member.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Specialty:</h4>
                      <p className="opacity-90">{member.specialty}</p>
                    </div>

                    <p className="mb-4 opacity-90">{member.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="opacity-90 text-sm">• {achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/team/${member.slug}`}
                        className="bg-white/80 hover:bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                      >
                        Learn More About {member.name.split(' ')[0]}
                      </Link>
                      <a
                        href="tel:331-343-2584"
                        className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                      >
                        Call {member.name.split(' ')[0]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Medicare & Senior Insurance</h3>
              <p className="text-blue-700 mb-4">
                Complete Medicare solutions including Advantage, Supplement, and Part D plans for seniors 65+.
              </p>
              <Link href="/team/elsa-galicia-lona" className="text-blue-600 font-semibold hover:underline">
                Meet Our Medicare Expert →
              </Link>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Social Security & Medicare</h3>
              <p className="text-green-700 mb-4">
                Social Security optimization, Medicare Advantage plans, and comprehensive health coverage coordination.
              </p>
              <Link href="/team/magdalena-salinas" className="text-green-600 font-semibold hover:underline">
                Meet Our Social Security Advisor →
              </Link>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Medicare & Senior Coverage</h3>
              <p className="text-purple-700 mb-4">
                Medicare Supplement, Part D, Advantage plans, Hospital Indemnity, and Security Evacuation coverage for seniors.
              </p>
              <Link href="/team/eric-salinas" className="text-purple-600 font-semibold hover:underline">
                Meet Our Medicare Specialist →
              </Link>
            </div>
            
            <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">Multi-Line Insurance</h3>
              <p className="text-indigo-700 mb-4">
                Medicare Advantage, Final Expense, Life Insurance, Health Marketplace, and Employee Benefits coverage.
              </p>
              <Link href="/team/junior-goulbourne" className="text-indigo-600 font-semibold hover:underline">
                Meet Our Insurance Specialist →
              </Link>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Health & Life Insurance</h3>
              <p className="text-orange-700 mb-4">
                Health Marketplace, Medicare Advantage, Life Insurance, and Supplemental Health coverage for individuals and families.
              </p>
              <Link href="/team/yaissa-acosta" className="text-orange-600 font-semibold hover:underline">
                Meet Our Bilingual Specialist →
              </Link>
            </div>
            
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-3">Spanish Insurance Services</h3>
              <p className="text-teal-700 mb-4">
                Complete insurance guidance in Spanish including Health Marketplace, Life Insurance, Medicare Advantage, and Final Expense coverage.
              </p>
              <Link href="/team/marcia-cordero" className="text-teal-600 font-semibold hover:underline">
                Meet Our Spanish-Speaking Specialist →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Team */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Insurance Team?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Licensed Experts</h3>
                <p className="text-gray-300 text-sm">All agents are fully licensed and certified in their specialties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🆓</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Free Service</h3>
                <p className="text-gray-300 text-sm">No cost consultations, quotes, and enrollment assistance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Service</h3>
                <p className="text-gray-300 text-sm">Quick quotes, same-day enrollment, and immediate policy issuance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
                <p className="text-gray-300 text-sm">One-on-one attention with ongoing support and advocacy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Expert Team?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Get personalized insurance guidance from our licensed specialists. Free consultations available 
              for all insurance types with no obligation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">6</div>
                <div className="text-blue-100">Insurance Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Free Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 Call Our Team: 331-E-HEALTH
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

        {/* Resource Links Section */}
        <ResourceLinks 
          currentService="team"
          excludePaths={['/team']}
          title="Educational Resources from Our Experts"
          description="Guides, tools, and resources curated by our licensed insurance specialists to help you make informed decisions"
        />

        {/* Related Services */}
        <RelatedServices 
          currentService="team"
          excludePaths={['/team']}
          title="Insurance Services Our Team Specializes In"
          description="Our expert agents can help you with all these insurance options. Contact any team member for personalized assistance."
        />

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm 
            title="Connect with Our Insurance Specialists"
            subtitle="Get expert guidance from our team of licensed insurance professionals. Whether you need Medicare, health, life, disability, business, or auto insurance, our specialists are here to help you find the perfect coverage."
          />
        </div>

        {/* Social Proof */}
        <SocialProofSection 
          county="Nationwide" 
          state="USA"
          demographic="individuals, families, and businesses"
        />

      </main>
    </div>
  )
}