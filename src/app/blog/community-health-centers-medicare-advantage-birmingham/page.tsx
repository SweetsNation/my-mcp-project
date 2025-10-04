import type { Metadata } from 'next'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/schema/blog-schema'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'

// Structured Data for SEO
const structuredData = generateBlogPostSchema({
  pagePath: '/blog/community-health-centers-medicare-advantage-birmingham',
  pageTitle: 'Community Health Centers & Medicare Advantage in Birmingham: Affordable Care Access Guide 2025',
  pageDescription: 'Complete guide to Birmingham community health centers accepting Medicare Advantage: Federally Qualified Health Centers (FQHCs), affordable care options, and Medicare plans covering safety-net providers.',
  datePublished: '2025-01-15',
  category: 'Medicare Advantage Community Access',
  location: 'Birmingham, Alabama',
  wordCount: 3600
});

export const metadata: Metadata = {
  title: 'Community Health Centers Medicare Advantage Birmingham AL 2025 | FQHC & Safety-Net Care Guide',
  description: 'Birmingham community health centers accepting Medicare Advantage: FQHCs, sliding scale clinics, affordable care options, and Medicare plans covering safety-net providers for Jefferson County seniors.',
  keywords: 'Birmingham community health centers Medicare, FQHC Medicare Advantage Birmingham, Jefferson County community clinics Medicare, Birmingham sliding scale Medicare, affordable healthcare Birmingham seniors, safety net providers Medicare Alabama, Birmingham Medicare community care',
  openGraph: {
    title: 'Community Health Centers & Medicare Advantage Birmingham: Affordable Care Access',
    description: 'Find Birmingham community health centers accepting your Medicare Advantage plan. FQHCs, sliding scale care, and affordable healthcare options for Jefferson County seniors.',
    type: 'article',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: 'El-Mag Insurance Blog - Medicare Education',
        },
      ],
    },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/blog/community-health-centers-medicare-advantage-birmingham',
  },
}

export default function CommunityHealthCentersMedicareBirminghamBlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Community Health Centers Medicare Advantage Birmingham"
        county="Jefferson County"
        state="Alabama"
        demographics={{
          maPenetrationRate: 41
        }}
        keyMetrics={{
          total_beneficiaries: 147000,
          available_ma_plans: 38,
          average_premium: 22,
          zero_premium_plans: 16,
          content_type: 'blog_post',
          blog_category: 'medicare_advantage_community_access',
          word_count: 3600,
          estimated_read_time: 18
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">›</span>
          <span>Community Health Centers Medicare Advantage Birmingham</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg inline-block mb-4">
            <span className="font-bold">🏥 BIRMINGHAM COMMUNITY HEALTH ACCESS</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Community Health Centers & Medicare Advantage in Birmingham: Your Guide to Affordable, Accessible Healthcare
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-6 flex-wrap">
            <span>📅 Updated January 15, 2025</span>
            <span className="mx-3">•</span>
            <span>⏱️ 18 min read</span>
            <span className="mx-3">•</span>
            <span>📍 Birmingham, Jefferson County, AL</span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            For Birmingham's <strong>147,000+ Medicare beneficiaries</strong>, community health centers offer affordable,
            accessible care regardless of insurance status or ability to pay. This comprehensive guide helps you understand
            which <strong>Federally Qualified Health Centers (FQHCs)</strong> and safety-net providers accept Medicare
            Advantage plans, how sliding scale fees work with Medicare, and where to find quality care in
            <strong> Jefferson County</strong>.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 Table of Contents</h2>
          <ul className="space-y-2 text-blue-600">
            <li><a href="#birmingham-overview" className="hover:underline">1. Birmingham Community Health Landscape</a></li>
            <li><a href="#what-are-fqhcs" className="hover:underline">2. What Are FQHCs & How Do They Work with Medicare?</a></li>
            <li><a href="#birmingham-fqhcs" className="hover:underline">3. Birmingham FQHCs Accepting Medicare Advantage</a></li>
            <li><a href="#ma-coverage" className="hover:underline">4. Medicare Advantage Plans Covering FQHCs</a></li>
            <li><a href="#services-offered" className="hover:underline">5. Services Offered at Community Health Centers</a></li>
            <li><a href="#cost-comparison" className="hover:underline">6. Cost Comparison: FQHCs vs Traditional Providers</a></li>
            <li><a href="#eligibility" className="hover:underline">7. Eligibility & Enrollment Process</a></li>
            <li><a href="#locations" className="hover:underline">8. Birmingham FQHC Locations & Access</a></li>
            <li><a href="#choosing-provider" className="hover:underline">9. Choosing the Right Community Health Center</a></li>
            <li><a href="#additional-resources" className="hover:underline">10. Additional Resources & Support Services</a></li>
          </ul>
        </div>

        {/* CTA Section - Hero */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">🏥 Need Help Finding Affordable Medicare Care in Birmingham?</h2>
            <p className="text-lg mb-6 opacity-95">
              Our Birmingham Medicare specialists help seniors access community health centers and find Medicare Advantage
              plans that cover FQHCs and safety-net providers. Get personalized guidance today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'consultation_request',
                      'blog_hero_section',
                      '/contact'
                    );
                  }
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                📞 Schedule Free Consultation
              </Link>
              <Link
                href="/medicare-advantage/jefferson-county-alabama"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'plan_exploration',
                      'blog_hero_section',
                      '/medicare-advantage/jefferson-county-alabama'
                    );
                  }
                }}
                className="bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors text-center"
              >
                📋 View Jefferson County MA Plans
              </Link>
              <a
                href="tel:331-343-2584"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'phone_call',
                      'blog_hero_section',
                      'tel:331-343-2584'
                    );
                  }
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                📱 Call: (331) 343-2584
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Birmingham Community Health Landscape */}
        <section id="birmingham-overview" className="mb-12">
          <div className="bg-white border-2 border-green-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏙️ Birmingham Community Health Landscape</h2>

            <p className="text-gray-700 mb-6">
              Birmingham's community health center network serves as a critical safety net for the city's most vulnerable
              populations, including Medicare beneficiaries with limited income, those in underserved neighborhoods, and
              seniors facing barriers to traditional healthcare access.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Birmingham Medicare Demographics</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Total Medicare Beneficiaries:</strong> 147,000+</li>
                  <li>• <strong>Medicare Advantage Enrollment:</strong> ~60,000 (41%)</li>
                  <li>• <strong>Dual Eligible (Medicare + Medicaid):</strong> ~25,000</li>
                  <li>• <strong>Low-Income Subsidy (LIS) Recipients:</strong> ~22,000</li>
                  <li>• <strong>Seniors Below 200% Federal Poverty Level:</strong> ~38%</li>
                  <li>• <strong>Medically Underserved Areas:</strong> 8 ZIP codes</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Why Community Health Centers Matter</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>No Patient Turned Away:</strong> Care regardless of ability to pay</li>
                  <li>• <strong>Sliding Scale Fees:</strong> Based on income (works with Medicare)</li>
                  <li>• <strong>Comprehensive Services:</strong> Primary care, dental, behavioral health</li>
                  <li>• <strong>Cultural Competency:</strong> Multilingual staff, community focus</li>
                  <li>• <strong>Transportation Assistance:</strong> Help getting to appointments</li>
                  <li>• <strong>Medication Assistance:</strong> 340B drug pricing, patient assistance programs</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Healthcare Access Challenges in Birmingham</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Primary Care Shortage:</strong> Birmingham has fewer primary care physicians per capita than state average</li>
                <li>• <strong>Transportation Barriers:</strong> Limited public transit to medical facilities in some neighborhoods</li>
                <li>• <strong>Cost Barriers:</strong> Even with Medicare, copays and deductibles can be prohibitive</li>
                <li>• <strong>Health Disparities:</strong> Higher rates of chronic disease in underserved communities</li>
                <li>• <strong>Insurance Gaps:</strong> Some Medicare beneficiaries lack supplemental coverage</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">🗺️ Jefferson County Medicare Resources</h4>
              <p className="text-gray-600 mb-3 text-sm">
                See how community health access and Medicare Advantage options vary across Jefferson County:
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <Link href="/medicare-advantage/jefferson-county-alabama" className="text-blue-600 hover:text-blue-800 hover:underline">
                  → Jefferson County MA Plans
                </Link>
                <Link href="/medicare-advantage/birmingham-alabama" className="text-blue-600 hover:text-blue-800 hover:underline">
                  → Birmingham Medicare Guide
                </Link>
                <Link href="/medicare-advantage/alabama" className="text-blue-600 hover:text-blue-800 hover:underline">
                  → Alabama Medicare Overview
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What Are FQHCs */}
        <section id="what-are-fqhcs" className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏥 What Are FQHCs & How Do They Work with Medicare?</h2>

            <p className="text-gray-700 mb-6 text-lg">
              Federally Qualified Health Centers (FQHCs) are community-based healthcare providers that receive federal
              funding to serve underserved populations. They're required to offer care regardless of patients' ability
              to pay and must provide sliding scale fees based on income.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mb-4">FQHC Key Characteristics</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">✅ What FQHCs Must Provide</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Primary Care Services:</strong> General medical care for all ages</li>
                  <li>• <strong>Preventive Care:</strong> Screenings, vaccinations, wellness visits</li>
                  <li>• <strong>Dental Services:</strong> Oral health care (most FQHCs)</li>
                  <li>• <strong>Mental Health Services:</strong> Behavioral health counseling</li>
                  <li>• <strong>Substance Abuse Services:</strong> Addiction treatment support</li>
                  <li>• <strong>Enabling Services:</strong> Care coordination, transportation, translation</li>
                  <li>• <strong>Pharmacy Services:</strong> Onsite or referral to pharmacies</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">💰 How FQHCs Work with Medicare</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Medicare Accepts FQHCs:</strong> All Medicare plans must cover FQHC services</li>
                  <li>• <strong>Enhanced Payment Rate:</strong> FQHCs receive higher reimbursement than standard providers</li>
                  <li>• <strong>No Referral Required:</strong> Medicare beneficiaries can go directly to FQHCs</li>
                  <li>• <strong>Copays Apply:</strong> Medicare copays still apply (typically $0-$20 for primary care)</li>
                  <li>• <strong>Sliding Scale + Medicare:</strong> If you have high copays, FQHCs may offer additional assistance</li>
                  <li>• <strong>Comprehensive Care:</strong> One location for multiple services</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-800 mb-4">FQHC vs Regular Doctor's Office</h3>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Feature</th>
                    <th className="px-4 py-3 text-left">FQHC</th>
                    <th className="px-4 py-3 text-left">Traditional Provider</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Accepts All Patients</td>
                    <td className="px-4 py-3 text-green-600">✓ Yes, regardless of insurance</td>
                    <td className="px-4 py-3 text-yellow-600">~ May limit new patients</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Sliding Scale Fees</td>
                    <td className="px-4 py-3 text-green-600">✓ Required for uninsured/underinsured</td>
                    <td className="px-4 py-3 text-red-600">✗ Rarely available</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Medicare Coverage</td>
                    <td className="px-4 py-3 text-green-600">✓ All Medicare plans must cover</td>
                    <td className="px-4 py-3 text-green-600">✓ If provider accepts Medicare</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Comprehensive Services</td>
                    <td className="px-4 py-3 text-green-600">✓ Medical, dental, behavioral health</td>
                    <td className="px-4 py-3 text-yellow-600">~ Usually medical only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Evening/Weekend Hours</td>
                    <td className="px-4 py-3 text-green-600">✓ Most FQHCs offer extended hours</td>
                    <td className="px-4 py-3 text-yellow-600">~ Varies by practice</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Transportation Help</td>
                    <td className="px-4 py-3 text-green-600">✓ Many offer assistance</td>
                    <td className="px-4 py-3 text-red-600">✗ Rarely available</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Medication Assistance</td>
                    <td className="px-4 py-3 text-green-600">✓ 340B pricing, patient assistance</td>
                    <td className="px-4 py-3 text-yellow-600">~ May help connect to programs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Key Advantage for Medicare Beneficiaries</h4>
              <p className="text-sm text-gray-700">
                Even if you have Medicare Advantage or Original Medicare, FQHCs can help reduce out-of-pocket costs through:
                medication assistance programs (340B), sliding scale fees for services not covered by Medicare (like dental),
                and care coordination to help you navigate the Medicare system. Many Birmingham seniors use FQHCs as their
                primary care home even with Medicare coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Birmingham FQHCs */}
        <section id="birmingham-fqhcs" className="mb-12">
          <div className="bg-white border-2 border-teal-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏥 Birmingham FQHCs Accepting Medicare Advantage</h2>

            <p className="text-gray-700 mb-6">
              Jefferson County is home to several Federally Qualified Health Centers that accept Medicare Advantage plans.
              Here are the major FQHC networks serving Birmingham seniors:
            </p>

            <div className="space-y-6">
              {/* Birmingham Health Care */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">🏥 Birmingham Health Care (BHC)</h3>
                <p className="text-gray-700 mb-4">
                  Birmingham's largest FQHC network, serving over 25,000 patients annually across multiple locations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Services Offered:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Primary care (family medicine, internal medicine)</li>
                      <li>• Pediatrics</li>
                      <li>• Women's health (OB/GYN)</li>
                      <li>• Dental services</li>
                      <li>• Behavioral health counseling</li>
                      <li>• Chronic disease management (diabetes, hypertension)</li>
                      <li>• Laboratory services</li>
                      <li>• Pharmacy assistance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Medicare Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Accepts:</strong> All Medicare Advantage plans, Original Medicare</li>
                      <li>• <strong>Copays:</strong> Standard Medicare copays apply</li>
                      <li>• <strong>Sliding Scale:</strong> Available for services not covered by Medicare</li>
                      <li>• <strong>Transportation:</strong> Limited assistance available</li>
                    </ul>
                    <h4 className="font-semibold text-green-900 mb-2 mt-3">Locations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Northside Clinic (35212)</li>
                      <li>• Eastside Clinic (35206)</li>
                      <li>• Westside Clinic (35228)</li>
                      <li>• Bessemer Clinic (35020)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Community Health Advisors */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏥 Community Health Advisors (CHA)</h3>
                <p className="text-gray-700 mb-4">
                  Serving Birmingham since 1974, CHA provides comprehensive care to underserved populations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Services Offered:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Primary medical care</li>
                      <li>• Senior health programs</li>
                      <li>• Chronic care management</li>
                      <li>• Preventive screenings</li>
                      <li>• Health education</li>
                      <li>• Care coordination</li>
                      <li>• Social services referrals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Medicare Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Accepts:</strong> Medicare Advantage, Original Medicare</li>
                      <li>• <strong>Specialization:</strong> Strong focus on senior care</li>
                      <li>• <strong>Medicare Coordination:</strong> Help navigating Medicare benefits</li>
                    </ul>
                    <h4 className="font-semibold text-blue-900 mb-2 mt-3">Locations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Main Clinic (35204)</li>
                      <li>• Satellite locations across Jefferson County</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Jessie's Place */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">🏥 Jessie's Place</h3>
                <p className="text-gray-700 mb-4">
                  Women-focused FQHC serving Birmingham's most vulnerable female populations, including senior women.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Services Offered:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Women's primary care</li>
                      <li>• Gynecological services</li>
                      <li>• Breast and cervical cancer screenings</li>
                      <li>• Chronic disease management</li>
                      <li>• Mental health services</li>
                      <li>• Case management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Medicare Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Accepts:</strong> Medicare (women only)</li>
                      <li>• <strong>Focus:</strong> Underserved senior women</li>
                      <li>• <strong>Support Services:</strong> Extensive care coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cooper Green Mercy Health Services */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border-2 border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">🏥 Cooper Green Mercy Health Services Authority</h3>
                <p className="text-gray-700 mb-4">
                  Jefferson County's safety-net hospital and clinic system, serving uninsured and underinsured residents.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Services Offered:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Primary care clinics</li>
                      <li>• Specialty care (limited)</li>
                      <li>• Emergency services</li>
                      <li>• Inpatient hospital care</li>
                      <li>• Pharmacy services</li>
                      <li>• Laboratory and imaging</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Medicare Information:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Accepts:</strong> Medicare Advantage, Original Medicare</li>
                      <li>• <strong>Safety Net:</strong> Serves as backup for seniors with coverage gaps</li>
                      <li>• <strong>Financial Assistance:</strong> Available for Medicare copays/deductibles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mt-6">
              <h4 className="font-semibold text-teal-800 mb-2">📞 How to Get Started with a Birmingham FQHC</h4>
              <ol className="text-sm text-gray-700 space-y-2">
                <li><strong>1. Call the FQHC directly</strong> - Ask if they accept your Medicare Advantage plan</li>
                <li><strong>2. Bring your Medicare card</strong> - Both Part A and Part B (or Medicare Advantage card)</li>
                <li><strong>3. Complete intake paperwork</strong> - Income information for sliding scale (if needed)</li>
                <li><strong>4. Schedule your first appointment</strong> - Many FQHCs offer same-week appointments</li>
                <li><strong>5. Establish care</strong> - FQHCs work best when you use them as your regular provider</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: MA Coverage */}
        <section id="ma-coverage" className="mb-12">
          <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📋 Medicare Advantage Plans Covering FQHCs</h2>

            <p className="text-gray-700 mb-6">
              All Medicare Advantage plans are required by federal law to cover FQHC services, but the specific copays
              and network details can vary by carrier. Here's how major Birmingham MA plans work with FQHCs:
            </p>

            <div className="overflow-x-auto mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Birmingham MA Plans & FQHC Coverage</h3>
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Insurance Carrier</th>
                    <th className="px-4 py-3 text-left">FQHC Coverage</th>
                    <th className="px-4 py-3 text-left">Typical Copay</th>
                    <th className="px-4 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Humana</td>
                    <td className="px-4 py-3 text-green-600">✓ All plans</td>
                    <td className="px-4 py-3">$0-$15</td>
                    <td className="px-4 py-3">Strong FQHC partnerships</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">UnitedHealthcare</td>
                    <td className="px-4 py-3 text-green-600">✓ All plans</td>
                    <td className="px-4 py-3">$0-$20</td>
                    <td className="px-4 py-3">No referral required</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Wellcare (Centene)</td>
                    <td className="px-4 py-3 text-green-600">✓ All plans</td>
                    <td className="px-4 py-3">$0 (many plans)</td>
                    <td className="px-4 py-3">Focus on underserved populations</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Aetna Medicare</td>
                    <td className="px-4 py-3 text-green-600">✓ All plans</td>
                    <td className="px-4 py-3">$5-$15</td>
                    <td className="px-4 py-3">FQHC visits count as PCP visits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">VIVA Medicare (Blue Cross Blue Shield AL)</td>
                    <td className="px-4 py-3 text-green-600">✓ All plans</td>
                    <td className="px-4 py-3">$0-$10</td>
                    <td className="px-4 py-3">Strong Alabama FQHC network</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important: Always Verify Coverage</h4>
              <p className="text-sm text-gray-700 mb-3">
                While all Medicare Advantage plans must cover FQHCs, you should still:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Call your MA plan to confirm the specific FQHC is in-network</li>
                <li>• Ask about copays for FQHC primary care visits</li>
                <li>• Verify coverage for dental and behavioral health at FQHCs (may vary)</li>
                <li>• Understand if prior authorization is needed for specialty services</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">🔍 Best MA Plans for FQHC Users</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">For Maximum FQHC Coverage:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Wellcare plans (often $0 copay for FQHCs)</li>
                    <li>• Humana Value plans (low FQHC copays)</li>
                    <li>• VIVA Medicare (Alabama-based, strong local FQHC network)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">For Dual Eligible Beneficiaries:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Wellcare Dual Special Needs Plans ($0 copays)</li>
                    <li>• UnitedHealthcare Dual Complete ($0 FQHC visits)</li>
                    <li>• Humana Dual Harmony (comprehensive FQHC coverage)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Services Offered */}
        <section id="services-offered" className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🩺 Services Offered at Community Health Centers</h2>

            <p className="text-gray-700 mb-6">
              Birmingham FQHCs offer comprehensive services that go far beyond what many traditional doctor's offices provide.
              Here's what you can access as a Medicare beneficiary:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Primary Medical Care</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Preventive Care:</strong> Annual wellness visits, screenings (covered 100% by Medicare)</li>
                  <li>• <strong>Chronic Disease Management:</strong> Diabetes, hypertension, heart disease, COPD</li>
                  <li>• <strong>Acute Care:</strong> Sick visits, infections, minor injuries</li>
                  <li>• <strong>Medication Management:</strong> Prescription review, medication reconciliation</li>
                  <li>• <strong>Laboratory Services:</strong> Blood work, urinalysis, basic diagnostics</li>
                  <li>• <strong>Care Coordination:</strong> Help arranging specialist referrals, hospital follow-up</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Dental Services</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Preventive Dental:</strong> Cleanings, exams, fluoride treatments</li>
                  <li>• <strong>Restorative Care:</strong> Fillings, extractions, dentures</li>
                  <li>• <strong>Emergency Dental:</strong> Pain relief, infection treatment</li>
                  <li>• <strong>Medicare Note:</strong> Original Medicare doesn't cover routine dental, but many MA plans do</li>
                  <li>• <strong>Sliding Scale:</strong> FQHCs offer reduced fees for dental if not covered by Medicare</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Behavioral Health Services</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Mental Health Counseling:</strong> Depression, anxiety, grief support</li>
                  <li>• <strong>Substance Abuse Treatment:</strong> Addiction counseling, medication-assisted treatment</li>
                  <li>• <strong>Psychiatric Services:</strong> Medication management for mental health conditions</li>
                  <li>• <strong>Medicare Coverage:</strong> Medicare covers behavioral health visits with applicable copays</li>
                  <li>• <strong>Integrated Care:</strong> Mental health and medical care coordinated together</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Support Services</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Medication Assistance:</strong> 340B drug pricing, patient assistance program enrollment</li>
                  <li>• <strong>Transportation Help:</strong> Assistance arranging rides to appointments</li>
                  <li>• <strong>Language Services:</strong> Interpretation for non-English speakers</li>
                  <li>• <strong>Social Services:</strong> Referrals for food, housing, utilities assistance</li>
                  <li>• <strong>Health Education:</strong> Diabetes education, nutrition counseling, disease management classes</li>
                  <li>• <strong>Medicare Enrollment Assistance:</strong> Help understanding and using Medicare benefits</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h4 className="font-semibold text-green-800 mb-2">💡 Comprehensive Care Advantage</h4>
              <p className="text-sm text-gray-700">
                The biggest advantage of FQHCs for Medicare beneficiaries is <strong>comprehensive, coordinated care under
                one roof</strong>. Instead of visiting separate providers for medical, dental, and behavioral health needs,
                FQHCs offer all services in one location with care teams that communicate with each other. This is especially
                valuable for seniors managing multiple chronic conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Cost Comparison */}
        <section id="cost-comparison" className="mb-12">
          <div className="bg-white border-2 border-yellow-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Cost Comparison: FQHCs vs Traditional Providers</h2>

            <p className="text-gray-700 mb-6">
              For Medicare beneficiaries, FQHCs can offer significant cost savings through lower copays, medication assistance,
              and sliding scale fees for non-covered services.
            </p>

            <div className="overflow-x-auto mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Medicare Cost Comparison</h3>
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-yellow-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Service</th>
                    <th className="px-4 py-3 text-left">FQHC with Medicare</th>
                    <th className="px-4 py-3 text-left">Traditional Provider</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Primary Care Visit</td>
                    <td className="px-4 py-3 text-green-600">$0-$20 copay</td>
                    <td className="px-4 py-3">$0-$45 copay</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Preventive Care (Annual Wellness)</td>
                    <td className="px-4 py-3 text-green-600">$0 (covered 100%)</td>
                    <td className="px-4 py-3">$0 (covered 100%)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Dental Cleaning</td>
                    <td className="px-4 py-3 text-green-600">$0-$30 (sliding scale if not covered)</td>
                    <td className="px-4 py-3 text-red-600">$75-$150 (not covered by Original Medicare)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Behavioral Health Visit</td>
                    <td className="px-4 py-3 text-green-600">$0-$20 copay</td>
                    <td className="px-4 py-3">$20-$45 copay</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-semibold">Prescription Medications</td>
                    <td className="px-4 py-3 text-green-600">340B pricing + assistance programs</td>
                    <td className="px-4 py-3">Standard Medicare Part D pricing</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Transportation to Appointments</td>
                    <td className="px-4 py-3 text-green-600">Often assisted/free</td>
                    <td className="px-4 py-3 text-red-600">Patient responsibility</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">💰 Additional FQHC Cost Advantages</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>340B Drug Pricing:</strong> FQHCs can access medications at significantly reduced prices</li>
                  <li>• <strong>Patient Assistance Programs:</strong> Help enrolling in pharmaceutical assistance</li>
                  <li>• <strong>Sliding Scale for Gaps:</strong> If Medicare doesn't cover a service, sliding scale fees apply</li>
                  <li>• <strong>No Surprise Bills:</strong> Transparent pricing, financial counseling before services</li>
                  <li>• <strong>Comprehensive Care = Fewer Visits:</strong> Multiple services in one appointment</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">📊 Real-World Example</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Mrs. Johnson, 68, Medicare Advantage with limited income:</strong>
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Primary care visit:</strong> $0 copay at FQHC (vs $20 elsewhere)</li>
                  <li>• <strong>Dental cleaning:</strong> $15 sliding scale (vs $100+ out-of-pocket)</li>
                  <li>• <strong>Diabetes medications:</strong> Saved $180/month through 340B and assistance programs</li>
                  <li>• <strong>Transportation:</strong> FQHC arranged free rides (vs $30/month in gas/bus)</li>
                  <li className="font-semibold text-green-700">• <strong>Total Monthly Savings: $225+</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 When FQHCs Save the Most Money</h4>
              <p className="text-sm text-gray-700">
                FQHCs offer maximum value for Medicare beneficiaries who: (1) have high medication costs, (2) need dental
                or behavioral health services not fully covered by Medicare, (3) have limited income making copays difficult,
                (4) lack transportation to traditional medical offices, or (5) manage multiple chronic conditions requiring
                frequent care coordination.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Eligibility */}
        <section id="eligibility" className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">✅ Eligibility & Enrollment Process</h2>

            <h3 className="text-xl font-semibold text-purple-800 mb-4">Who Can Use Birmingham FQHCs?</h3>
            <p className="text-gray-700 mb-6">
              <strong>Everyone is eligible for FQHC care, regardless of insurance status, income, or ability to pay.</strong>
              As a Medicare beneficiary, you have the same rights to FQHC services as any other patient.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">✓ You Can Use an FQHC If You Have:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Original Medicare (Parts A & B)</li>
                  <li>• Medicare Advantage (any plan)</li>
                  <li>• Medicare + Medicaid (dual eligible)</li>
                  <li>• Medicare + Medigap supplement</li>
                  <li>• Medicare + employer/retiree coverage</li>
                  <li>• Medicare + Veterans benefits</li>
                  <li>• No insurance at all (sliding scale available)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">📋 What You'll Need to Enroll:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Photo ID:</strong> Driver's license or state ID</li>
                  <li>• <strong>Medicare Card:</strong> Red, white, and blue card OR Medicare Advantage card</li>
                  <li>• <strong>Proof of Address:</strong> Utility bill, lease agreement, or mail</li>
                  <li>• <strong>Income Information:</strong> For sliding scale (if needed for non-Medicare services)</li>
                  <li>• <strong>Medication List:</strong> Current prescriptions (if applicable)</li>
                  <li>• <strong>Medical Records:</strong> Helpful but not required for first visit</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-purple-800 mb-4">How to Enroll in a Birmingham FQHC</h3>

            <div className="bg-white rounded-lg p-6 border border-purple-200 mb-6">
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <span className="font-bold text-purple-600 mr-3">1.</span>
                  <div>
                    <strong>Choose an FQHC</strong> - Select from Birmingham Health Care, Community Health Advisors, Jessie's Place, or Cooper Green based on location and services needed
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-purple-600 mr-3">2.</span>
                  <div>
                    <strong>Call to Schedule Intake Appointment</strong> - Most FQHCs can see you within 1-2 weeks, some offer same-week appointments
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-purple-600 mr-3">3.</span>
                  <div>
                    <strong>Complete Registration Forms</strong> - Can often be done by phone or online before your visit
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-purple-600 mr-3">4.</span>
                  <div>
                    <strong>Attend First Appointment</strong> - Arrive 15 minutes early with required documents. Your intake will include medical history review and establishing care plan
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-purple-600 mr-3">5.</span>
                  <div>
                    <strong>Establish Regular Care</strong> - Schedule follow-up appointments and annual wellness visits to maximize benefits
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <h4 className="font-semibold text-purple-800 mb-2">💡 No Enrollment Deadline</h4>
              <p className="text-sm text-gray-700">
                Unlike Medicare Advantage plans with specific enrollment periods, you can enroll at an FQHC any time of year.
                There's no waiting period—you can typically get an appointment within days or weeks of calling.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Locations */}
        <section id="locations" className="mb-12">
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📍 Birmingham FQHC Locations & Access</h2>

            <p className="text-gray-700 mb-6">
              Birmingham's FQHCs are strategically located in underserved neighborhoods to maximize accessibility for
              communities that need them most.
            </p>

            <h3 className="text-xl font-semibold text-indigo-800 mb-4">FQHC Locations by Birmingham Area</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-3">North Birmingham (35212, 35215)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Birmingham Health Care - Northside</strong></li>
                  <li className="ml-4">Services: Primary care, dental, behavioral health</li>
                  <li className="ml-4">Transit: Accessible via MAX bus routes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">East Birmingham (35206, 35224)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Birmingham Health Care - Eastside</strong></li>
                  <li className="ml-4">Services: Comprehensive primary care, women's health</li>
                  <li className="ml-4">Transit: Near bus lines to downtown</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">West Birmingham (35228, 35211)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Birmingham Health Care - Westside</strong></li>
                  <li className="ml-4">Services: Primary care, chronic disease management</li>
                  <li className="ml-4">Parking: Free on-site parking available</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">Central Birmingham (35204, 35233)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Community Health Advisors - Main</strong></li>
                  <li>• <strong>Cooper Green Mercy Health</strong></li>
                  <li className="ml-4">Services: Full hospital and clinic services</li>
                  <li className="ml-4">Transit: Downtown hub, multiple bus routes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Bessemer (35020, 35023)</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Birmingham Health Care - Bessemer</strong></li>
                  <li className="ml-4">Services: Primary care, dental</li>
                  <li className="ml-4">Access: Serves western Jefferson County</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Transportation Assistance</h3>

            <div className="bg-indigo-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                Many Birmingham FQHCs offer transportation assistance for Medicare beneficiaries who face barriers getting to appointments:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Transportation Options:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• FQHC-arranged transportation (call to inquire)</li>
                    <li>• Medicare Advantage plan transportation benefits (some plans)</li>
                    <li>• Birmingham-Jefferson County Transit (MAX) reduced senior fares</li>
                    <li>• Volunteer driver programs through FQHCs</li>
                    <li>• Medicaid non-emergency medical transportation (for dual eligibles)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">How to Get Transportation Help:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>1. Ask about transportation when scheduling appointment</li>
                    <li>2. Provide at least 48 hours notice when possible</li>
                    <li>3. Check if your MA plan covers rides to medical appointments</li>
                    <li>4. Contact FQHC social services for additional resources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">🗺️ Find More Jefferson County Resources</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <Link href="/medicare-advantage/jefferson-county-alabama" className="text-blue-600 hover:text-blue-800 hover:underline">
                  → Jefferson County Medicare Advantage Plans
                </Link>
                <Link href="/resources/medicare-transportation-benefits" className="text-blue-600 hover:text-blue-800 hover:underline">
                  → Medicare Transportation Benefits Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Choosing Provider */}
        <section id="choosing-provider" className="mb-12">
          <div className="bg-white border-2 border-teal-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🤔 Choosing the Right Community Health Center</h2>

            <p className="text-gray-700 mb-6">
              With multiple FQHCs serving Birmingham, choosing the right one depends on your specific needs, location,
              and healthcare priorities.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">✓ Choose Birmingham Health Care If You:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Need comprehensive services (medical, dental, behavioral health) in one location</li>
                  <li>• Live in north, east, west Birmingham, or Bessemer</li>
                  <li>• Want a large FQHC network with multiple locations</li>
                  <li>• Need extended hours or weekend appointments</li>
                  <li>• Prefer established FQHC with large patient base</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">✓ Choose Community Health Advisors If You:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Are a senior looking for Medicare-focused care</li>
                  <li>• Need strong care coordination and social services</li>
                  <li>• Value long-standing community connections (50+ years serving Birmingham)</li>
                  <li>• Want assistance navigating Medicare benefits</li>
                  <li>• Live in central Birmingham area</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">✓ Choose Jessie's Place If You:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Are a senior woman needing women's health services</li>
                  <li>• Need gynecological care or breast/cervical cancer screening</li>
                  <li>• Face barriers to traditional healthcare (homelessness, domestic violence, etc.)</li>
                  <li>• Prefer women-focused care environment</li>
                  <li>• Need extensive case management and support services</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">✓ Choose Cooper Green If You:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Need access to hospital services in addition to primary care</li>
                  <li>• Have complex medical conditions requiring specialists</li>
                  <li>• Are uninsured or underinsured and need comprehensive safety-net care</li>
                  <li>• Need emergency services at a facility that knows your medical history</li>
                  <li>• Want Jefferson County's designated public hospital</li>
                </ul>
              </div>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mt-6">
              <h4 className="font-semibold text-teal-800 mb-2">💡 You Can Try Multiple FQHCs</h4>
              <p className="text-sm text-gray-700">
                You're not locked into one FQHC. Many Birmingham Medicare beneficiaries try appointments at 2-3 different
                FQHCs to find the best fit for location, providers, and services. Once you find one you like, establish
                regular care there for continuity and better health outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Additional Resources */}
        <section id="additional-resources" className="mb-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Additional Resources & Support Services</h2>

            <p className="text-gray-700 mb-6">
              Beyond FQHCs, Birmingham seniors have access to additional programs and resources to help with healthcare
              access, Medicare navigation, and financial assistance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Medicare Assistance Programs</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>SHIP (State Health Insurance Assistance Program):</strong> Free Medicare counseling</li>
                  <li>• <strong>Extra Help/LIS:</strong> Low-Income Subsidy for prescription drug costs</li>
                  <li>• <strong>Medicare Savings Programs:</strong> Help paying Medicare premiums and copays</li>
                  <li>• <strong>Medicaid (for Dual Eligibles):</strong> Additional coverage for low-income seniors</li>
                  <li>• <strong>Alabama Medicaid:</strong> 1-800-362-1504</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Prescription Drug Assistance</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>340B Drug Pricing:</strong> Available at all Birmingham FQHCs</li>
                  <li>• <strong>Patient Assistance Programs:</strong> Pharmaceutical company programs for free/discounted medications</li>
                  <li>• <strong>GoodRx:</strong> Prescription discount cards (can sometimes beat Medicare prices)</li>
                  <li>• <strong>ADAP (AIDS Drug Assistance):</strong> For HIV+ Medicare beneficiaries</li>
                  <li>• <strong>Walmart/Kroger $4 Generic List:</strong> Low-cost generic medications</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Food & Social Services</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>SNAP (Food Stamps):</strong> Supplemental nutrition assistance for low-income seniors</li>
                  <li>• <strong>Meals on Wheels:</strong> Home-delivered meals for homebound seniors</li>
                  <li>• <strong>Senior Centers:</strong> Congregate meals and social activities</li>
                  <li>• <strong>Area Agency on Aging:</strong> Care coordination and support services</li>
                  <li>• <strong>Birmingham Food Banks:</strong> Community Food Bank of Central Alabama</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 border border-cyan-200">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">Housing & Utilities Assistance</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>LIHEAP:</strong> Low Income Home Energy Assistance Program</li>
                  <li>• <strong>Jefferson County CAA:</strong> Community Action Agency housing help</li>
                  <li>• <strong>HUD Senior Housing:</strong> Subsidized housing for low-income seniors</li>
                  <li>• <strong>Salvation Army:</strong> Emergency assistance for bills and housing</li>
                  <li>• <strong>United Way 211:</strong> Dial 211 for comprehensive resource referrals</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4">
              <h4 className="font-semibold text-cyan-800 mb-2">📞 Important Birmingham Medicare Contact Numbers</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Medicare:</strong> 1-800-MEDICARE (1-800-633-4227)</li>
                <li>• <strong>Alabama SHIP:</strong> 1-800-243-5463</li>
                <li>• <strong>Alabama Medicaid:</strong> 1-800-362-1504</li>
                <li>• <strong>Social Security:</strong> 1-800-772-1213</li>
                <li>• <strong>United Way 211:</strong> Dial 211 (resource referrals)</li>
                <li>• <strong>Birmingham Health Care:</strong> (205) 251-4194</li>
                <li>• <strong>Community Health Advisors:</strong> (205) 322-4500</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section - Conclusion */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">🏥 Need Help Accessing Community Health Centers in Birmingham?</h2>
            <p className="text-lg mb-6 opacity-95">
              Our Birmingham Medicare specialists help seniors navigate FQHCs, find Medicare Advantage plans with strong
              community health center coverage, and access affordable care. Get personalized guidance today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'consultation_request',
                      'blog_cta_section',
                      '/contact'
                    );
                  }
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                📞 Schedule Free Consultation
              </Link>
              <Link
                href="/medicare-advantage/jefferson-county-alabama"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'plan_exploration',
                      'blog_cta_section',
                      '/medicare-advantage/jefferson-county-alabama'
                    );
                  }
                }}
                className="bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors text-center"
              >
                📋 View Jefferson County MA Plans
              </Link>
              <a
                href="tel:331-343-2584"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackLandingPageCTA) {
                    (window as any).trackLandingPageCTA(
                      'phone_call',
                      'blog_cta_section',
                      'tel:331-343-2584'
                    );
                  }
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                📱 Call: (331) 343-2584
              </a>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <section className="mb-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Related Resources</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4">Birmingham Medicare Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <Link href="/medicare-advantage/jefferson-county-alabama" className="underline hover:text-green-900">Jefferson County Medicare Advantage Plans</Link></li>
                  <li>• <Link href="/medicare-advantage/birmingham-alabama" className="underline hover:text-green-900">Birmingham Medicare Guide</Link></li>
                  <li>• <Link href="/blog/uab-vs-st-vincents-medicare-advantage-birmingham" className="underline hover:text-green-900">UAB vs St. Vincent's Hospital Networks</Link></li>
                  <li>• <Link href="/resources/dual-eligible-special-needs-plans" className="underline hover:text-green-900">Dual Eligible Special Needs Plans</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Alabama Medicare Coverage</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <Link href="/medicare-advantage/alabama" className="underline hover:text-teal-900">Alabama Medicare Advantage Overview</Link></li>
                  <li>• <Link href="/medicare-supplement-alabama" className="underline hover:text-teal-900">Alabama Medicare Supplement Plans</Link></li>
                  <li>• <Link href="/resources/low-income-medicare-assistance" className="underline hover:text-teal-900">Low-Income Medicare Assistance Programs</Link></li>
                  <li>• <Link href="/resources/prescription-drug-coverage" className="underline hover:text-teal-900">Part D Prescription Drug Guide</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Medicare Education</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <Link href="/resources/medicare-advantage-vs-original" className="underline hover:text-blue-900">Medicare Advantage vs Original Medicare</Link></li>
                  <li>• <Link href="/resources/choosing-primary-care-doctor" className="underline hover:text-blue-900">Choosing a Primary Care Doctor</Link></li>
                  <li>• <Link href="/resources/medicare-preventive-services" className="underline hover:text-blue-900">Medicare Preventive Services Guide</Link></li>
                  <li>• <Link href="/specialists" className="underline hover:text-blue-900">Meet Our Alabama Medicare Team</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Medigap Alternative Section */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want Maximum Doctor Choice Beyond FQHCs?</h2>
          <p className="text-gray-700 mb-4">
            If you want the flexibility to see <strong>any doctor or hospital that accepts Medicare</strong>—including
            FQHCs, major hospitals, and specialists—consider <Link href="/medicare-supplement" className="text-blue-600 hover:underline font-semibold">Medicare Supplement (Medigap) plans</Link>.
            With Medigap, you get complete freedom to choose providers without network restrictions.
          </p>
          <p className="text-gray-700 mb-6">
            Learn more about <Link href="/medicare-supplement-alabama" className="text-blue-600 hover:underline font-semibold">Alabama Medicare Supplement plans</Link> and
            how they compare to <Link href="/resources/medicare-advantage-vs-original" className="text-blue-600 hover:underline font-semibold">Medicare Advantage coverage</Link>.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Medicare Resources
          </Link>
        </div>

        {/* Final Thoughts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
          <p className="text-gray-700 leading-relaxed">
            Community Health Centers are a vital resource for Birmingham's Medicare beneficiaries, offering comprehensive,
            affordable care regardless of ability to pay. Whether you have Medicare Advantage, Original Medicare, or are
            dual eligible, FQHCs provide high-quality primary care, dental services, behavioral health support, and care
            coordination in one accessible location. Birmingham's FQHCs—Birmingham Health Care, Community Health Advisors,
            Jessie's Place, and Cooper Green—serve as safety-net providers committed to ensuring every senior has access
            to the healthcare they need. Our Medicare specialists are here to help you navigate FQHC services, find Medicare
            plans with strong community health center coverage, and access all available assistance programs.
          </p>
        </div>
      </article>
    </main>
  )
}
