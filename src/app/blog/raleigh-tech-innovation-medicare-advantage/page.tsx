import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateBlogPostSchema } from '@/lib/schema'

const blogPostData = {
  title: 'Raleigh Tech Workers & Medicare Advantage: Coverage for Research Triangle Park Professionals 2025',
  description: 'Medicare Advantage guide for Raleigh tech workers, Research Triangle Park professionals, and Innovation Corridor retirees. Compare Duke Health, UNC Health, and WakeMed coverage for tech industry careers.',
  publishDate: '2025-01-16',
  modifiedDate: '2025-01-16',
  author: 'El-Mag Insurance',
  category: 'Medicare Advantage',
  keywords: 'Raleigh tech workers Medicare Advantage, Research Triangle Park Medicare, RTP retirees Medicare, Duke Health Medicare plans, WakeMed Medicare Advantage, Raleigh tech industry Medicare, North Carolina tech professionals Medicare, IBM retirees Medicare Raleigh'
}

export const metadata: Metadata = {
  title: 'Raleigh Tech Workers Medicare Advantage 2025 | Research Triangle Park Coverage',
  description: 'Medicare Advantage plans for Raleigh tech workers, RTP professionals, and tech industry retirees. Duke Health, UNC Health, WakeMed coverage for Research Triangle careers.',
  keywords: 'Raleigh tech workers Medicare Advantage, Research Triangle Park Medicare, RTP retirees Medicare, Duke Health Medicare plans, WakeMed Medicare Advantage, Raleigh tech industry Medicare, North Carolina tech professionals Medicare, IBM retirees Medicare Raleigh',
  openGraph: {
    title: 'Raleigh Tech Workers Medicare Advantage 2025 | Research Triangle Park Coverage',
    description: 'Medicare plans for Raleigh tech professionals. Duke Health, UNC Health, WakeMed coverage.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/blog/raleigh-tech-innovation-medicare-advantage',
  },
}

export default function RaleighTechInnovationMedicareAdvantagePage() {
  const structuredData = generateBlogPostSchema({
    title: blogPostData.title,
    description: blogPostData.description,
    publishDate: blogPostData.publishDate,
    modifiedDate: blogPostData.modifiedDate,
    author: blogPostData.author,
    url: 'https://elmaginsurance.com/blog/raleigh-tech-innovation-medicare-advantage',
    category: blogPostData.category,
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="blog"
        pageTitle="Raleigh Tech Innovation Medicare Advantage"
        county="Wake County"
        state="North Carolina"
        demographics={{
          maPenetrationRate: 48
        }}
        keyMetrics={{
          total_beneficiaries: 165000,
          available_ma_plans: 54,
          average_premium: 0,
          zero_premium_plans: 26,
          content_type: 'blog_post',
          page_category: 'medicare_advantage_tech_professionals'
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Raleigh Tech Workers Medicare Advantage</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Medicare Advantage
            </span>
            <span className="ml-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              Tech Professionals
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Raleigh Tech Workers & Medicare Advantage: Coverage for Research Triangle Park Professionals 2025
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime={blogPostData.publishDate}>January 16, 2025</time>
            <span className="mx-3">•</span>
            <span>18 min read</span>
            <span className="mx-3">•</span>
            <span>Wake County, North Carolina</span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Research Triangle Park (RTP) is one of America's largest tech hubs, home to IBM, Cisco, SAS Institute,
            and over 300 companies employing 55,000+ workers. As tech professionals retire from careers at RTP,
            Duke University, NC State, and Raleigh's Innovation Corridor, understanding Medicare Advantage options
            becomes critical. This comprehensive guide explores Medicare Advantage plans tailored for tech workers,
            Duke Health and UNC Health coverage, and how former employer benefits integrate with Medicare.
          </p>
        </header>

        {/* Why Raleigh Tech Workers Choose Medicare Advantage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            💼 Why Raleigh Tech Workers Choose Medicare Advantage
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Research Triangle Park Medicare Market
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Raleigh Tech Industry by the Numbers:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>💻 <strong>55,000+ tech workers</strong> in Research Triangle Park</li>
                  <li>🏢 <strong>300+ companies:</strong> IBM, Cisco, SAS, Lenovo, MetLife, GSK, Biogen</li>
                  <li>🎓 <strong>Duke, UNC, NC State:</strong> 15,000+ faculty/staff approaching retirement</li>
                  <li>📈 <strong>$18.9 billion economic impact</strong> - tech professionals with strong retirement benefits</li>
                  <li>🏥 <strong>Duke Health, UNC Health, WakeMed:</strong> Top-tier medical centers</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Tech Worker Medicare Advantages:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ <strong>Employer retiree benefits:</strong> IBM, Cisco, SAS offer Medicare supplements</li>
                  <li>✓ <strong>Duke/UNC Health networks:</strong> MA plans include premier academic medical centers</li>
                  <li>✓ <strong>Prescription drug coverage:</strong> Tech workers often have complex medication needs</li>
                  <li>✓ <strong>$0 premium plans:</strong> 26 zero-premium MA plans in Wake County</li>
                  <li>✓ <strong>Dental/vision/hearing:</strong> Extra benefits tech employers didn't cover</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h4 className="font-semibold text-green-900 mb-3">💡 Tech Industry Retirement Transition:</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Many Research Triangle tech companies (IBM, SAS Institute, Cisco) offer <strong>retiree health benefits</strong>
                that coordinate with Medicare. When you turn 65, your employer plan typically becomes <strong>secondary to Medicare</strong>,
                and many tech workers choose Medicare Advantage to maximize coverage while minimizing out-of-pocket costs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Duke University and UNC Chapel Hill faculty/staff receive <strong>retiree medical benefits</strong> that work
                alongside Medicare Advantage plans. Understanding how employer benefits integrate with Duke Health or UNC Health
                Medicare Advantage networks is key to maintaining seamless coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Medicare Advantage Plans for RTP Tech Workers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🏥 Best Medicare Advantage Plans for Research Triangle Park Tech Workers
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">UnitedHealthcare AARP Medicare Advantage (PPO)</h3>
                <p className="text-blue-100">Best for IBM, Cisco, SAS Retirees with Employer Benefits</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Duke Health & UNC Health Network:</h4>
                  <div className="bg-blue-50 rounded-lg p-6 mb-4">
                    <p className="text-xl font-bold text-blue-900 mb-2">✅ Full Duke Health + UNC Health Access</p>
                    <p className="text-gray-700">PPO network includes Duke University Hospital, UNC Medical Center, WakeMed</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Duke University Hospital:</strong> In-network for cancer care, cardiac surgery, transplant</li>
                    <li>✓ <strong>UNC Health:</strong> UNC Medical Center, UNC Rex accessible in PPO network</li>
                    <li>✓ <strong>WakeMed Raleigh:</strong> All WakeMed facilities in-network</li>
                    <li>✓ <strong>Out-of-network coverage:</strong> See any doctor (higher copays apply)</li>
                    <li>✓ <strong>National coverage:</strong> Travel to San Francisco, Seattle, Austin - still covered</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Tech Workers Choose UnitedHealthcare AARP:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>$0-$35 monthly premium</strong> (most Raleigh zip codes $0)</li>
                    <li>💊 <strong>$480 yearly drug deductible</strong> then $0-$47 copays</li>
                    <li>🏥 <strong>$350/day hospital copay</strong> (days 1-5), $0 after day 6</li>
                    <li>🩺 <strong>$0-$50 specialist copay</strong> at Duke or UNC specialists</li>
                    <li>👁️ <strong>$200 eyewear allowance</strong> every year</li>
                    <li>🦷 <strong>Dental coverage:</strong> Preventive, basic, major services</li>
                    <li>🏋️ <strong>SilverSneakers fitness:</strong> Free gym membership</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> IBM, Cisco, SAS Institute retirees with employer health benefits that coordinate
                    with Medicare, tech workers who want Duke Health + UNC Health access, professionals who travel frequently
                    (PPO out-of-network coverage).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Humana Gold Plus H5216-140 (HMO)</h3>
                <p className="text-green-100">Best for Duke University & NC State Retirees</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Duke Health Network Emphasis:</h4>
                  <div className="bg-green-50 rounded-lg p-6 mb-4">
                    <p className="text-xl font-bold text-green-900 mb-2">✅ Strong Duke Health Partnership</p>
                    <p className="text-gray-700">Duke Regional, Duke Raleigh, Duke University Hospital all in-network</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Duke University Hospital:</strong> Full access to Duke Cancer Center, Duke Heart Center</li>
                    <li>✓ <strong>Duke Regional Hospital (Durham):</strong> In-network emergency care</li>
                    <li>✓ <strong>Duke Raleigh Hospital:</strong> Convenient North Raleigh location</li>
                    <li>✓ <strong>Duke Primary Care:</strong> 50+ Duke primary care locations in Wake County</li>
                    <li>✓ <strong>Duke specialists:</strong> Cardiology, oncology, neurology, orthopedics in-network</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Humana Benefits for Tech Professionals:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>$0 monthly premium</strong></li>
                    <li>💊 <strong>$0 drug deductible</strong> - prescriptions covered day one</li>
                    <li>🏥 <strong>$275/day hospital copay</strong> (days 1-6), $0 after day 7</li>
                    <li>🩺 <strong>$0 primary care, $40 specialist</strong> copays</li>
                    <li>🦷 <strong>$2,000/year dental allowance</strong> - comprehensive, preventive, major</li>
                    <li>👁️ <strong>$250/year vision allowance</strong> for glasses/contacts</li>
                    <li>🚗 <strong>48 one-way rides/year</strong> to Duke appointments</li>
                    <li>📦 <strong>$75/quarter OTC allowance</strong> (over-the-counter items)</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Duke University faculty/staff retirees, NC State employees, tech workers who
                    primarily use Duke Health for care, Raleigh residents who don't need out-of-network coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">WellCare by Allwell No Premium (HMO)</h3>
                <p className="text-purple-100">Best for UNC Chapel Hill Faculty & Research Scientists</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">UNC Health Network Strength:</h4>
                  <div className="bg-purple-50 rounded-lg p-6 mb-4">
                    <p className="text-xl font-bold text-purple-900 mb-2">✅ Full UNC Health System Access</p>
                    <p className="text-gray-700">UNC Medical Center, UNC Rex Hospital, UNC Hospitals in-network</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>UNC Medical Center (Chapel Hill):</strong> Academic medical center, trauma center</li>
                    <li>✓ <strong>UNC Rex Hospital (Raleigh):</strong> Cancer center, heart & vascular, orthopedics</li>
                    <li>✓ <strong>UNC Health Rex Holly Springs:</strong> Growing South Wake County facility</li>
                    <li>✓ <strong>UNC Physicians Network:</strong> 1,800+ UNC doctors across Triangle</li>
                    <li>✓ <strong>UNC Cancer Center:</strong> NCI-designated comprehensive cancer center</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">WellCare Tech Professional Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>$0 monthly premium</strong></li>
                    <li>💊 <strong>$200 drug deductible</strong> then $0-$47 copays</li>
                    <li>🏥 <strong>$350/day hospital copay</strong> (days 1-7), then $0</li>
                    <li>🩺 <strong>$0 primary care, $35 specialist</strong> at UNC Health</li>
                    <li>🦷 <strong>Dental coverage:</strong> $1,500/year comprehensive + preventive</li>
                    <li>👁️ <strong>Vision coverage:</strong> $150 eyewear allowance</li>
                    <li>🏃 <strong>Fitness benefit:</strong> Free gym membership or home fitness kit</li>
                    <li>💊 <strong>Home delivery:</strong> Free prescription mail-order</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> UNC Chapel Hill faculty retirees, research scientists, tech workers who use
                    UNC Health exclusively, Chapel Hill/Cary residents, professionals seeking comprehensive UNC network access.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Blue Cross Blue Shield of North Carolina (HMO-POS)</h3>
                <p className="text-orange-100">Best for WakeMed Loyalists & Raleigh Metro Tech Workers</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">WakeMed Network Partnership:</h4>
                  <div className="bg-orange-50 rounded-lg p-6 mb-4">
                    <p className="text-xl font-bold text-orange-900 mb-2">✅ Comprehensive WakeMed Access</p>
                    <p className="text-gray-700">WakeMed Raleigh, WakeMed Cary, WakeMed North all in-network</p>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>WakeMed Raleigh Campus:</strong> Heart Center, Children's Hospital, trauma</li>
                    <li>✓ <strong>WakeMed Cary Hospital:</strong> Cancer center, women's services</li>
                    <li>✓ <strong>WakeMed North Hospital (Raleigh):</strong> Emergency care, orthopedics</li>
                    <li>✓ <strong>WakeMed Physician Practices:</strong> 750+ physicians across Wake County</li>
                    <li>✓ <strong>Plus Duke & UNC Health:</strong> HMO-POS allows Duke/UNC with referral</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Blue Cross NC Benefits:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>$18-$35 monthly premium</strong> (varies by plan)</li>
                    <li>💊 <strong>$300 drug deductible</strong> then $0-$47 copays</li>
                    <li>🏥 <strong>$295/day hospital copay</strong> (days 1-5), then $0</li>
                    <li>🩺 <strong>$0 primary care, $30 specialist</strong> copays</li>
                    <li>🦷 <strong>$1,800/year dental coverage</strong></li>
                    <li>👁️ <strong>$300 vision allowance</strong> annually</li>
                    <li>🏋️ <strong>SilverSneakers + fitness reimbursement</strong></li>
                    <li>💳 <strong>$60/month healthy rewards card</strong> ($720/year for healthy activities)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Tech workers who use WakeMed, Raleigh metro residents (Cary, Apex, North Raleigh),
                    professionals wanting North Carolina-based insurer, those seeking healthy rewards incentives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Employer Benefits Coordination */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🔄 Research Triangle Tech Employer Benefits & Medicare Coordination
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              How RTP Employer Benefits Work with Medicare
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Major Research Triangle employers (IBM, Cisco, SAS Institute, GSK, Biogen) offer <strong>retiree health
              benefits</strong> that coordinate with Medicare. When you turn 65, understanding how your employer plan
              integrates with Medicare Advantage is critical for maximizing coverage and minimizing costs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">IBM Retiree Benefits + Medicare:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>💼 <strong>IBM Extend Health program:</strong> Provides Medicare Advantage plan selection assistance</li>
                  <li>💰 <strong>HRA (Health Reimbursement Arrangement):</strong> IBM contributes to your Medicare costs</li>
                  <li>📋 <strong>IBM recommends MA plans:</strong> UnitedHealthcare, Humana, Aetna options</li>
                  <li>🏥 <strong>Coverage coordination:</strong> IBM HRA pays what Medicare Advantage doesn't cover</li>
                  <li>💊 <strong>Drug coverage:</strong> Medicare Part D + IBM HRA for out-of-pocket costs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Cisco Retiree Benefits + Medicare:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>💼 <strong>Cisco Via Benefits program:</strong> Medicare Advantage marketplace access</li>
                  <li>💰 <strong>Cisco subsidy:</strong> Monthly contribution toward Medicare premiums</li>
                  <li>📋 <strong>PPO preference:</strong> Cisco retirees often choose UnitedHealthcare AARP (PPO)</li>
                  <li>🏥 <strong>National coverage:</strong> Important for Cisco retirees with multiple homes</li>
                  <li>💊 <strong>Prescription coverage:</strong> Part D integrated with Cisco subsidy</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">SAS Institute Retiree Benefits:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>💼 <strong>SAS retiree medical:</strong> Comprehensive benefits supplement Medicare</li>
                  <li>💰 <strong>Company-paid premiums:</strong> SAS covers Medicare Supplement premiums (or MA)</li>
                  <li>📋 <strong>Generous coverage:</strong> SAS known for platinum-level retiree benefits</li>
                  <li>🏥 <strong>Duke Health preference:</strong> Many SAS retirees use Duke Health network</li>
                  <li>💊 <strong>Drug coverage:</strong> SAS + Medicare Part D = comprehensive Rx benefits</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Duke/UNC Faculty Retiree Benefits:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>🎓 <strong>Duke University:</strong> Retiree benefits coordinate with Duke Health MA plans</li>
                  <li>🎓 <strong>UNC System:</strong> UNC retiree medical + UNC Health Medicare Advantage</li>
                  <li>💰 <strong>University subsidies:</strong> Both Duke and UNC contribute to retiree premiums</li>
                  <li>🏥 <strong>Network alignment:</strong> Retiree benefits designed to work with university health systems</li>
                  <li>💊 <strong>Prescription benefits:</strong> University plans supplement Part D coverage</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
              <h4 className="font-semibold text-yellow-900 mb-3">💡 Coordination of Benefits Rules:</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you have <strong>employer retiree benefits + Medicare</strong>, Medicare is the <strong>primary payer</strong>
                and your employer plan is <strong>secondary</strong>. This means:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>1. <strong>Medicare Advantage pays first</strong> for doctor visits, hospital stays, prescriptions</li>
                <li>2. <strong>Employer plan pays second</strong> to cover copays, deductibles, gaps in MA coverage</li>
                <li>3. <strong>Combined coverage</strong> often results in $0 out-of-pocket for most services</li>
                <li>4. <strong>No duplicate coverage</strong> - employer plan can't pay what Medicare already covered</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              📞 Tech Employer Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <strong>IBM Extend Health:</strong> 1-866-322-2824
              </div>
              <div>
                <strong>Cisco Via Benefits:</strong> 1-844-287-9945
              </div>
              <div>
                <strong>SAS Retiree Benefits:</strong> 1-919-677-8000
              </div>
              <div>
                <strong>Duke HR Benefits:</strong> 1-919-684-5600
              </div>
              <div>
                <strong>UNC System HR:</strong> 1-919-843-2300
              </div>
              <div>
                <strong>NC State HR Benefits:</strong> 1-919-515-2011
              </div>
            </div>
          </div>
        </section>

        {/* Duke Health vs UNC Health Medicare Networks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🏥 Duke Health vs UNC Health Medicare Advantage Networks
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Choosing Between Duke Health and UNC Health Medicare Plans
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Research Triangle tech workers have access to two premier academic medical centers: <strong>Duke University
              Health System</strong> and <strong>UNC Health</strong>. Your Medicare Advantage plan choice depends on which
              health system you prefer and where you live in the Triangle.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Duke Health Medicare Advantage Strengths:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>🏥 <strong>Duke University Hospital:</strong> #1 hospital in North Carolina (U.S. News)</li>
                  <li>🫀 <strong>Duke Heart Center:</strong> Top-ranked cardiovascular care</li>
                  <li>🧬 <strong>Duke Cancer Institute:</strong> NCI-designated comprehensive cancer center</li>
                  <li>🧠 <strong>Duke Neurosciences:</strong> Brain tumor, Parkinson's, Alzheimer's expertise</li>
                  <li>🏥 <strong>Duke Regional (Durham):</strong> Community hospital with Duke quality</li>
                  <li>🏥 <strong>Duke Raleigh Hospital:</strong> North Raleigh convenience</li>
                  <li>👨‍⚕️ <strong>2,500+ Duke physicians:</strong> Specialists across 100+ specialties</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <strong>Best MA Plans for Duke Health:</strong>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• UnitedHealthcare AARP (PPO)</li>
                    <li>• Humana Gold Plus (HMO)</li>
                    <li>• Blue Cross NC (HMO-POS)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-4">UNC Health Medicare Advantage Strengths:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>🏥 <strong>UNC Medical Center:</strong> Chapel Hill academic medical center, Level I trauma</li>
                  <li>🫀 <strong>UNC Rex Hospital:</strong> Raleigh's largest hospital, heart & vascular excellence</li>
                  <li>🧬 <strong>UNC Lineberger:</strong> NCI-designated comprehensive cancer center</li>
                  <li>👶 <strong>UNC Children's Hospital:</strong> Pediatric specialties (for grandchildren)</li>
                  <li>🏥 <strong>UNC Rex Holly Springs:</strong> Growing South Wake County facility</li>
                  <li>🔬 <strong>UNC research trials:</strong> Access to cutting-edge clinical trials</li>
                  <li>👨‍⚕️ <strong>1,800+ UNC physicians:</strong> Triangle-wide physician network</li>
                </ul>
                <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                  <strong>Best MA Plans for UNC Health:</strong>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>• WellCare by Allwell (HMO)</li>
                    <li>• UnitedHealthcare AARP (PPO)</li>
                    <li>• Blue Cross NC (HMO-POS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
            <h4 className="font-semibold text-green-900 mb-3">💡 Geographic Considerations:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <div>
                <strong>Durham/North Durham:</strong>
                <p className="text-sm mt-1">Duke Health is closer. Choose Humana Gold Plus or UnitedHealthcare AARP.</p>
              </div>
              <div>
                <strong>Chapel Hill/Carrboro:</strong>
                <p className="text-sm mt-1">UNC Health is primary. Choose WellCare or UnitedHealthcare AARP.</p>
              </div>
              <div>
                <strong>Raleigh/Cary/Apex:</strong>
                <p className="text-sm mt-1">Both systems accessible. Choose based on preferred doctors or employer network.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prescription Drug Coverage for Tech Workers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            💊 Prescription Drug Coverage for Raleigh Tech Professionals
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              Medicare Part D for Tech Workers with Complex Medication Needs
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tech professionals often have <strong>specialty medications</strong> for conditions like diabetes, heart disease,
              autoimmune disorders, or cancer. Medicare Advantage plans include <strong>Part D prescription drug coverage</strong>,
              but understanding formularies and tier pricing is critical.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">Common Tech Worker Medications & Coverage:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Diabetes Medications:</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Metformin:</strong> Tier 1 ($0-$10/month)</li>
                      <li>• <strong>Jardiance, Ozempic:</strong> Tier 3 ($47/month)</li>
                      <li>• <strong>Insulin (Humalog, Lantus):</strong> Tier 3 ($35/month under insulin cap)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Cardiovascular Medications:</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Atorvastatin (Lipitor):</strong> Tier 1 ($0-$5/month)</li>
                      <li>• <strong>Eliquis (blood thinner):</strong> Tier 3 ($47/month)</li>
                      <li>• <strong>Metoprolol (beta blocker):</strong> Tier 1 ($0-$5/month)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Specialty Medications:</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Humira (autoimmune):</strong> Tier 5 specialty ($100-$500/month)</li>
                      <li>• <strong>Keytruda (cancer):</strong> Tier 5 specialty (covered by Part B)</li>
                      <li>• <strong>Enbrel (rheumatoid arthritis):</strong> Tier 5 specialty</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Mental Health Medications:</h5>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Sertraline (Zoloft):</strong> Tier 1 ($0-$5/month)</li>
                      <li>• <strong>Lexapro (escitalopram):</strong> Tier 2 ($10-$20/month)</li>
                      <li>• <strong>Vraylar (bipolar):</strong> Tier 3 ($47/month)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">Drug Coverage Phases (2025):</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong className="text-blue-900">Phase 1: Annual Deductible</strong>
                    <p className="text-gray-700 text-sm">Pay $0-$480 deductible (varies by plan) before coverage starts</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <strong className="text-green-900">Phase 2: Initial Coverage</strong>
                    <p className="text-gray-700 text-sm">Pay copays ($0-$47/month) until total drug costs reach $5,030</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <strong className="text-purple-900">Phase 3: Coverage Gap ("Donut Hole")</strong>
                    <p className="text-gray-700 text-sm">Pay 25% of drug costs from $5,030 to $8,000 out-of-pocket</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <strong className="text-orange-900">Phase 4: Catastrophic Coverage</strong>
                    <p className="text-gray-700 text-sm">After $8,000 out-of-pocket: Pay $0 or $4.50-$11.20 per prescription</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                <h4 className="font-semibold text-yellow-900 mb-3">💡 Tech Worker Drug Coverage Tips:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Use formulary checker:</strong> Before enrolling, verify your medications are covered (Tier 1-3 preferred)</li>
                  <li>✓ <strong>Mail-order savings:</strong> 90-day supply = 2.5 months' copay (save 30%)</li>
                  <li>✓ <strong>Specialty pharmacy:</strong> Required for Tier 5 specialty drugs (often $0 with assistance programs)</li>
                  <li>✓ <strong>Employer coordination:</strong> IBM/Cisco HRA may cover Part D copays/deductibles</li>
                  <li>✓ <strong>Extra Help (LIS):</strong> Low-income subsidy reduces drug costs to $0-$4.50/prescription</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Raleigh Tech Neighborhoods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📍 Medicare Advantage by Raleigh Tech Neighborhood
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📍 Research Triangle Park (RTP)
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Major Employers:</strong> IBM, Cisco, SAS, GSK, Biogen, RTI</li>
                <li>• <strong>Closest Hospital:</strong> Duke Regional (Durham), UNC Rex (Raleigh)</li>
                <li>• <strong>Recommended Plans:</strong> UnitedHealthcare AARP (PPO), Humana Gold Plus</li>
                <li>• <strong>Tech Retirees:</strong> 15,000+ living in RTP area</li>
                <li className="pt-2 font-semibold text-blue-800">IBM/Cisco retirees: PPO flexibility important</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                📍 North Raleigh / Brier Creek
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Tech Companies:</strong> Red Hat, Citrix, Epic Games</li>
                <li>• <strong>Closest Hospital:</strong> Duke Raleigh Hospital, WakeMed North</li>
                <li>• <strong>Recommended Plans:</strong> Humana (Duke network), Blue Cross NC (WakeMed)</li>
                <li>• <strong>Active Seniors:</strong> High concentration of tech professionals 65+</li>
                <li className="pt-2 font-semibold text-green-800">Duke Raleigh Hospital convenient location</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                📍 Cary / Apex / Morrisville
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Tech Hub:</strong> SAS Institute HQ, Apple, Epic Games, MetLife</li>
                <li>• <strong>Closest Hospital:</strong> WakeMed Cary, UNC Rex</li>
                <li>• <strong>Recommended Plans:</strong> WellCare (UNC Health), Blue Cross NC (WakeMed)</li>
                <li>• <strong>Family-Oriented:</strong> Tech families with aging parents nearby</li>
                <li className="pt-2 font-semibold text-purple-800">SAS retirees receive excellent benefits</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                📍 Durham / Duke Forest
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Major Employers:</strong> Duke University, IBM, Lenovo</li>
                <li>• <strong>Closest Hospital:</strong> Duke University Hospital, Duke Regional</li>
                <li>• <strong>Recommended Plans:</strong> Humana Gold Plus (Duke), UnitedHealthcare AARP</li>
                <li>• <strong>Academic Community:</strong> Duke faculty/staff retirees</li>
                <li className="pt-2 font-semibold text-orange-800">Duke Health network essential</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-4">
                📍 Chapel Hill / Carrboro
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Major Employers:</strong> UNC Chapel Hill, UNC Health, research institutes</li>
                <li>• <strong>Closest Hospital:</strong> UNC Medical Center, UNC Hillsborough</li>
                <li>• <strong>Recommended Plans:</strong> WellCare (UNC Health), UnitedHealthcare AARP</li>
                <li>• <strong>University Retirees:</strong> UNC faculty/staff with retiree benefits</li>
                <li className="pt-2 font-semibold text-pink-800">UNC Health network priority</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">
                📍 Downtown Raleigh / Warehouse District
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Innovation Corridor:</strong> Startups, Google Fiber, Citrix</li>
                <li>• <strong>Closest Hospital:</strong> WakeMed Raleigh Campus, UNC Rex</li>
                <li>• <strong>Recommended Plans:</strong> Blue Cross NC (WakeMed), WellCare (UNC)</li>
                <li>• <strong>Urban Seniors:</strong> Early tech adopters aging in place downtown</li>
                <li className="pt-2 font-semibold text-yellow-800">WakeMed Raleigh <1 mile from downtown</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ❓ Frequently Asked Questions: Raleigh Tech Workers & Medicare Advantage
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do IBM and Cisco retiree benefits work with Medicare Advantage?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> IBM Extend Health and Cisco Via Benefits programs are specifically designed to help retirees
                choose Medicare Advantage plans. IBM offers a <strong>Health Reimbursement Arrangement (HRA)</strong> that reimburses
                Medicare premiums and out-of-pocket costs. Cisco provides a <strong>monthly subsidy</strong> toward Medicare Advantage
                premiums. Both programs coordinate as <strong>secondary coverage</strong> - Medicare Advantage pays first, then your
                employer benefit pays remaining costs. Many IBM/Cisco retirees choose <strong>UnitedHealthcare AARP Medicare Advantage
                (PPO)</strong> because it offers nationwide coverage for travel and out-of-network flexibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Which Medicare Advantage plan is best for Duke University retirees?
              </h3>
              <p className="text-gray-700">
                <strong>Humana Gold Plus H5216-140 (HMO)</strong> is the top choice for Duke University faculty/staff retirees because
                it has the strongest <strong>Duke Health network</strong> - including Duke University Hospital, Duke Regional Hospital,
                Duke Raleigh Hospital, and 50+ Duke primary care locations. The plan offers <strong>$0 monthly premium, $0 drug deductible,
                and $0 primary care copays</strong>. Duke's retiree benefits coordinate as secondary coverage, often resulting in $0
                out-of-pocket for most services. <strong>UnitedHealthcare AARP (PPO)</strong> is an alternative if you want out-of-network
                flexibility or travel frequently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I use both Duke Health and UNC Health with the same Medicare Advantage plan?
              </h3>
              <p className="text-gray-700">
                <strong>Yes, with certain plans.</strong> <strong>UnitedHealthcare AARP Medicare Advantage (PPO)</strong> includes both
                Duke Health and UNC Health in its network, allowing you to see doctors at Duke University Hospital, UNC Medical Center,
                and UNC Rex Hospital. <strong>Blue Cross Blue Shield of North Carolina (HMO-POS)</strong> also covers both systems -
                primary network is WakeMed, but you can access Duke and UNC with a referral. <strong>HMO plans</strong> (Humana, WellCare)
                typically focus on one system (Duke OR UNC), so if you need both, choose a PPO or HMO-POS plan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens to my employer drug coverage when I enroll in Medicare?
              </h3>
              <p className="text-gray-700">
                When you turn 65 and enroll in Medicare, your <strong>employer prescription drug coverage ends</strong> and you must
                enroll in <strong>Medicare Part D</strong> (included in Medicare Advantage plans). If you don't enroll in Part D when
                first eligible, you face a <strong>1% per month late enrollment penalty</strong> for life. However, if your employer
                plan is "creditable" (as good as Part D), you can delay without penalty - check with your HR. Most Research Triangle
                tech companies (IBM, Cisco, SAS) transition retirees to Part D at age 65, then use employer subsidies/HRAs to cover
                Part D copays and deductibles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are Research Triangle Park tech workers eligible for Medicare at 65 even if still working?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> All U.S. citizens and permanent residents become <strong>eligible for Medicare at age 65</strong>,
                even if still working full-time at IBM, Cisco, SAS, or other RTP employers. However, if your employer has <strong>20+
                employees</strong> (all major RTP companies do), your employer health plan remains <strong>primary</strong> and Medicare
                becomes <strong>secondary</strong>. Many tech workers delay Medicare Part B until retirement to avoid paying premiums
                for secondary coverage. But you <strong>must enroll in Part A</strong> at 65 if you're receiving Social Security. Consult
                your HR benefits team about the best enrollment timing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do Medicare Advantage plans cover specialty medications for complex health conditions?
              </h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> Medicare Advantage plans include <strong>Part D prescription drug coverage</strong> that covers
                specialty medications like <strong>Humira (autoimmune), Enbrel (rheumatoid arthritis), Revlimid (cancer)</strong>, and
                other Tier 5 specialty drugs. However, specialty medications often require <strong>specialty pharmacy</strong> delivery
                and may have copays of $100-$500/month. Many tech employer retiree benefits (IBM HRA, Cisco subsidy) help cover these
                costs. Additionally, pharmaceutical <strong>patient assistance programs</strong> can reduce specialty drug copays to $0-$5/month.
                Check your plan's formulary before enrolling to ensure your medications are covered, and ask about <strong>Extra Help
                (Low-Income Subsidy)</strong> which can eliminate specialty drug costs entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing a Medicare Advantage Plan as a Research Triangle Tech Professional?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Our Raleigh Medicare specialists understand IBM, Cisco, SAS, and Duke/UNC retiree benefits. We'll help you
            coordinate employer coverage, compare Duke Health vs UNC Health networks, and find the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-lg"
            >
              Compare Raleigh Tech Medicare Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors text-center text-lg"
            >
              Call Now: (331) 343-2584
            </a>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📚 Related Medicare Resources for Raleigh
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                📍 Raleigh Medicare Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medicare-advantage/wake-county-north-carolina" className="text-blue-600 hover:underline">
                    Wake County Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/blog/duke-health-medicare-advantage-raleigh" className="text-blue-600 hover:underline">
                    Duke Health Medicare Advantage Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/unc-health-medicare-advantage-triangle" className="text-blue-600 hover:underline">
                    UNC Health Medicare Advantage Triangle
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                📘 Medicare Guides
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/medicare-advantage-vs-original" className="text-blue-600 hover:underline">
                    Medicare Advantage vs Original Medicare
                  </Link>
                </li>
                <li>
                  <Link href="/resources/employer-retiree-benefits-medicare" className="text-blue-600 hover:underline">
                    Employer Retiree Benefits & Medicare
                  </Link>
                </li>
                <li>
                  <Link href="/resources/prescription-drug-coverage" className="text-blue-600 hover:underline">
                    Medicare Part D Prescription Coverage
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                🏥 North Carolina Medicare
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medicare-advantage/north-carolina" className="text-blue-600 hover:underline">
                    North Carolina Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/resources/research-triangle-park-medicare" className="text-blue-600 hover:underline">
                    Research Triangle Park Medicare Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tech-industry-medicare-planning" className="text-blue-600 hover:underline">
                    Tech Industry Medicare Planning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
