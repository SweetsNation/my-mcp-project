import type { Metadata } from 'next'
import Link from 'next/link'
import LandingPageAnalytics from '@/components/LandingPageAnalytics'
import { generateBlogPostSchema } from '@/lib/schema/blog-schema'

const blogPostData = {
  title: 'Medicare Advantage Plans for Diverse Communities in Atlanta: Multicultural Healthcare Access 2025',
  description: 'Discover Medicare Advantage plans serving Atlanta\'s diverse communities including Buford Highway, Clarkston, and International Corridor. Multilingual support, culturally competent care, and community health resources.',
  publishDate: '2025-01-15',
  modifiedDate: '2025-01-15',
  author: 'El-Mag Insurance',
  category: 'Medicare Advantage',
  keywords: 'Medicare Advantage Atlanta diverse communities, multicultural Medicare plans Atlanta, Buford Highway Medicare, Clarkston refugee Medicare, Atlanta multilingual healthcare, culturally competent Medicare Georgia, International Corridor Medicare, Asian Pacific Medicare Atlanta, Latino Medicare plans Georgia, African immigrant Medicare Atlanta'
}

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans for Diverse Communities in Atlanta | Multicultural Healthcare Access 2025',
  description: 'Discover Medicare Advantage plans serving Atlanta\'s diverse communities including Buford Highway, Clarkston, and International Corridor. Multilingual support, culturally competent care, and community health resources.',
  keywords: 'Medicare Advantage Atlanta diverse communities, multicultural Medicare plans Atlanta, Buford Highway Medicare, Clarkston refugee Medicare, Atlanta multilingual healthcare, culturally competent Medicare Georgia, International Corridor Medicare, Asian Pacific Medicare Atlanta, Latino Medicare plans Georgia, African immigrant Medicare Atlanta',
  openGraph: {
    title: 'Medicare Advantage Plans for Diverse Communities in Atlanta | Multicultural Healthcare',
    description: 'Medicare Advantage plans with multilingual support and culturally competent care for Atlanta\'s diverse communities.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://elmaginsurance.com/blog/medicare-advantage-diverse-communities-atlanta',
  },
}

export default function MedicareAdvantageDiverseCommunitiesAtlantaPage() {
  const structuredData = generateBlogPostSchema({
    pagePath: '/blog/medicare-advantage-diverse-communities-atlanta',
    pageTitle: blogPostData.title,
    pageDescription: blogPostData.description,
    datePublished: blogPostData.publishDate,
    dateModified: blogPostData.modifiedDate,
    author: blogPostData.author,
    category: blogPostData.category,
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Analytics Tracking */}
      <LandingPageAnalytics
        pageType="county"
        pageTitle="Medicare Advantage Diverse Communities Atlanta"
        county="Fulton County"
        state="Georgia"
        demographics={{
          maPenetrationRate: 52
        }}
        keyMetrics={{
          total_beneficiaries: 145000,
          available_ma_plans: 58,
          average_premium: 0,
          zero_premium_plans: 32,
          content_type: 'blog_post',
          page_category: 'medicare_advantage_multicultural'
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
          <span className="text-gray-900">Medicare Advantage Diverse Communities Atlanta</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Medicare Advantage
            </span>
            <span className="ml-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              Multicultural Healthcare
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Medicare Advantage Plans for Diverse Communities in Atlanta: Multicultural Healthcare Access 2025
          </h1>

          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime={blogPostData.publishDate}>January 15, 2025</time>
            <span className="mx-3">•</span>
            <span>12 min read</span>
            <span className="mx-3">•</span>
            <span>Fulton County, Georgia</span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Atlanta is one of America's most culturally diverse cities, with thriving communities along Buford Highway,
            the International Corridor, and Clarkston's refugee neighborhoods. This comprehensive guide explores Medicare
            Advantage plans designed to serve Atlanta's multicultural communities with multilingual support, culturally
            competent care, and community health resources.
          </p>
        </header>

        {/* Atlanta's Multicultural Medicare Landscape */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🌍 Atlanta's Multicultural Medicare Landscape
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              Atlanta's Diverse Communities by the Numbers
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-4">Fulton County Medicare Demographics:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>145,000+</strong> Medicare beneficiaries</li>
                  <li><strong>52%</strong> MA penetration rate</li>
                  <li><strong>58 Medicare Advantage plans</strong> available</li>
                  <li><strong>32 zero-premium plans</strong></li>
                  <li><strong>150+ languages</strong> spoken in metro Atlanta</li>
                  <li><strong>13.4%</strong> foreign-born population</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-4">Major Multicultural Communities:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>🌏 <strong>Buford Highway:</strong> Asian Pacific Islander corridor (Vietnamese, Korean, Chinese)</li>
                  <li>🌎 <strong>International Corridor:</strong> Latino communities (Mexican, Central American)</li>
                  <li>🌍 <strong>Clarkston:</strong> Refugee resettlement hub (African, Middle Eastern)</li>
                  <li>🇪🇹 <strong>East Atlanta/Decatur:</strong> Ethiopian and Eritrean communities</li>
                  <li>🇮🇳 <strong>North Fulton:</strong> South Asian communities (Indian, Pakistani)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Why This Matters for Medicare:</strong> Atlanta's Medicare Advantage plans increasingly offer
                multilingual member services, culturally competent care coordination, and partnerships with community
                health centers that serve diverse populations. Understanding which plans prioritize multicultural access
                can significantly improve healthcare outcomes for non-English speaking beneficiaries and immigrants
                navigating the U.S. healthcare system.
              </p>
            </div>
          </div>
        </section>

        {/* Medicare Advantage Plans with Multilingual Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🗣️ Medicare Advantage Plans with Multilingual Support in Atlanta
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Kaiser Permanente Georgia</h3>
                <p className="text-blue-100">Top Multilingual Support & Cultural Competency</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Languages Supported:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Spanish (24/7 phone support)</li>
                      <li>✓ Vietnamese (dedicated line)</li>
                      <li>✓ Korean (dedicated line)</li>
                      <li>✓ Chinese (Mandarin & Cantonese)</li>
                      <li>✓ Hindi/Gujarati (South Asian languages)</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Amharic (Ethiopian community)</li>
                      <li>✓ Somali (East African community)</li>
                      <li>✓ Arabic (Middle Eastern community)</li>
                      <li>✓ Tagalog (Filipino community)</li>
                      <li>✓ 200+ languages via interpreter services</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Culturally Competent Care Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Multilingual providers:</strong> Physicians fluent in Spanish, Vietnamese, Korean, Hindi at Perimeter and Gwinnett locations</li>
                    <li>📄 <strong>Translated materials:</strong> Member handbooks, enrollment guides, and EOCs in 15+ languages</li>
                    <li>🩺 <strong>Cultural health programs:</strong> Diabetes management for Asian Pacific Islander communities, hypertension programs for African communities</li>
                    <li>📞 <strong>24/7 nurse advice line:</strong> Available in 200+ languages via interpreter services</li>
                    <li>🌐 <strong>Online portal:</strong> Spanish, Vietnamese, Korean, Chinese language options</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Vietnamese, Korean, Chinese, Ethiopian, and Spanish-speaking Medicare beneficiaries
                    who want comprehensive language support from enrollment through care delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Humana Gold Plus</h3>
                <p className="text-green-100">Strong Latino & Refugee Community Support</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Languages Supported:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Spanish:</strong> 24/7 customer service, bilingual care coordinators</li>
                    <li>✓ <strong>Vietnamese:</strong> Dedicated phone line, community outreach in Chamblee</li>
                    <li>✓ <strong>Somali:</strong> Interpreter services, partnership with Clarkston Community Health Center</li>
                    <li>✓ <strong>Arabic:</strong> Phone support, translated materials</li>
                    <li>✓ <strong>150+ languages:</strong> Via LanguageLine Solutions</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Community Partnerships:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Clarkston Community Health Center:</strong> Serves refugee populations with interpreter services</li>
                    <li>🌎 <strong>Latin American Association:</strong> Medicare enrollment assistance in Spanish</li>
                    <li>🏪 <strong>Buford Highway community centers:</strong> On-site enrollment events with multilingual staff</li>
                    <li>⛪ <strong>Faith-based partnerships:</strong> Latino churches, Ethiopian Orthodox churches, Vietnamese temples</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Latino communities along the International Corridor, refugees in Clarkston, and
                    Vietnamese communities on Buford Highway who value community health center partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">WellCare by Allwell (Centene)</h3>
                <p className="text-purple-100">Medicaid-to-Medicare Dual Eligible Specialists</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Languages Supported:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Spanish:</strong> Dedicated dual-eligible support team</li>
                    <li>✓ <strong>Vietnamese, Korean, Chinese:</strong> Asian language support</li>
                    <li>✓ <strong>Somali, Amharic, Arabic:</strong> African and Middle Eastern language support</li>
                    <li>✓ <strong>TTY services:</strong> For deaf and hard-of-hearing members</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Dual-Eligible Special Needs Plans (D-SNP):</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>💰 <strong>$0 premium plans:</strong> For Medicare + Medicaid dual-eligible beneficiaries</li>
                    <li>💊 <strong>$0 drug copays:</strong> On most medications for dual-eligible members</li>
                    <li>🚗 <strong>Transportation benefits:</strong> 48 one-way trips/year to medical appointments</li>
                    <li>🥗 <strong>Meals after hospitalization:</strong> 28 meals delivered (culturally appropriate options)</li>
                    <li>🦷 <strong>Dental, vision, hearing:</strong> Comprehensive coverage included</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Low-income Medicare beneficiaries who also qualify for Medicaid (dual-eligible),
                    especially immigrant seniors who may qualify for both programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">UnitedHealthcare Dual Complete (D-SNP)</h3>
                <p className="text-orange-100">Extensive Provider Network for Diverse Communities</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Languages Supported:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>Spanish:</strong> 24/7 bilingual support, Spanish-speaking care coordinators</li>
                    <li>✓ <strong>Asian languages:</strong> Vietnamese, Korean, Chinese, Hindi</li>
                    <li>✓ <strong>African languages:</strong> Amharic, Somali, Swahili</li>
                    <li>✓ <strong>Real-time interpretation:</strong> 240+ languages available during calls</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Provider Network Strengths:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Grady Health System:</strong> Primary safety-net hospital serving diverse Atlanta</li>
                    <li>🏥 <strong>Emory Healthcare:</strong> Culturally competent specialty care</li>
                    <li>🏥 <strong>Piedmont Healthcare:</strong> Multilingual patient navigators</li>
                    <li>🏥 <strong>Community health centers:</strong> In-network access to FQHCs on Buford Highway, Clarkston, International Corridor</li>
                    <li>👨‍⚕️ <strong>Diverse provider directory:</strong> Searchable by language spoken (Spanish, Vietnamese, Korean, Chinese, Hindi, Amharic)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Dual-eligible beneficiaries who want the largest provider network with access to
                    both major hospital systems and community health centers serving diverse populations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community-Specific Medicare Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🏘️ Medicare Resources by Atlanta Multicultural Community
          </h2>

          <div className="space-y-6">
            {/* Buford Highway - Asian Pacific Communities */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                🌏 Buford Highway: Asian Pacific Islander Corridor
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Primary Communities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🇻🇳 Vietnamese (largest Asian community in Georgia)</li>
                    <li>🇰🇷 Korean (Duluth, Norcross)</li>
                    <li>🇨🇳 Chinese (Cantonese & Mandarin)</li>
                    <li>🇮🇳 Indian (North Fulton, Gwinnett)</li>
                    <li>🇵🇭 Filipino</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-800 mb-3">Healthcare Facilities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Emory-Adventist Hospital:</strong> Multilingual services</li>
                    <li>🏥 <strong>Northside Hospital Gwinnett:</strong> Asian language interpreters</li>
                    <li>🏥 <strong>Kaiser Permanente Perimeter:</strong> Korean, Vietnamese, Chinese-speaking physicians</li>
                    <li>🏥 <strong>Buford Highway Community Health Center:</strong> Culturally competent primary care</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Medicare Plan Recommendations:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Vietnamese seniors:</strong> Kaiser Permanente Georgia (Vietnamese-speaking physicians at Perimeter)
                    or Humana Gold Plus (Vietnamese customer service, Chamblee community outreach)
                  </li>
                  <li>
                    <strong>Korean seniors:</strong> Kaiser Permanente Georgia (Korean-speaking physicians, Korean member materials)
                    or UnitedHealthcare (Korean interpreter services, diverse provider directory)
                  </li>
                  <li>
                    <strong>Chinese seniors:</strong> Kaiser Permanente Georgia (Mandarin & Cantonese support) or Humana (Chinese
                    interpreter services)
                  </li>
                  <li>
                    <strong>South Asian seniors:</strong> Kaiser Permanente (Hindi/Gujarati-speaking physicians) or UnitedHealthcare
                    (South Asian provider directory)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3">Community Resources:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>📞 <strong>Korean Community Services:</strong> Medicare enrollment assistance in Korean</li>
                  <li>📞 <strong>Chinese Community Center:</strong> Mandarin/Cantonese Medicare counseling</li>
                  <li>📞 <strong>Vietnamese Community Center:</strong> Medicare navigation in Vietnamese</li>
                  <li>📞 <strong>India Cultural and Religious Center:</strong> South Asian senior services</li>
                </ul>
              </div>
            </div>

            {/* International Corridor - Latino Communities */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6">
                🌎 International Corridor: Latino Communities
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Primary Communities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🇲🇽 Mexican (largest Latino community)</li>
                    <li>🇸🇻 Salvadoran</li>
                    <li>🇬🇹 Guatemalan</li>
                    <li>🇭🇳 Honduran</li>
                    <li>🇨🇴 Colombian</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-800 mb-3">Healthcare Facilities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Grady Health System:</strong> Spanish interpretation, Latino patient navigators</li>
                    <li>🏥 <strong>Mercy Care:</strong> Catholic healthcare serving Latino communities</li>
                    <li>🏥 <strong>Southside Medical Center:</strong> Bilingual Spanish services</li>
                    <li>🏥 <strong>Latin American Association Health Center:</strong> Primary care in Spanish</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">Medicare Plan Recommendations:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Spanish-speaking seniors:</strong> Humana Gold Plus (24/7 Spanish support, Latino community partnerships)
                    or Kaiser Permanente (Spanish-speaking physicians, bilingual care coordinators)
                  </li>
                  <li>
                    <strong>Dual-eligible (Medicare + Medicaid):</strong> WellCare by Allwell D-SNP or UnitedHealthcare Dual Complete
                    ($0 premium, Spanish care coordination, Grady network access)
                  </li>
                  <li>
                    <strong>Recent immigrants (40 quarters Social Security):</strong> Plans with community health center networks
                    (Grady, LAA Health Center) and Spanish enrollment assistance
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-3">Community Resources:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>📞 <strong>Latin American Association (LAA):</strong> Medicare enrollment assistance in Spanish, 404-638-1800</li>
                  <li>📞 <strong>Catholic Charities Atlanta:</strong> Senior services for Latino immigrants</li>
                  <li>📞 <strong>Georgia Latino Alliance for Human Rights (GLAHR):</strong> Immigration + Medicare navigation</li>
                  <li>⛪ <strong>Catholic churches:</strong> St. Anthony's, Sagrado Corazón - Medicare information sessions in Spanish</li>
                </ul>
              </div>
            </div>

            {/* Clarkston - Refugee Communities */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                🌍 Clarkston: "Most Diverse Square Mile in America" - Refugee Communities
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Primary Communities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🇸🇴 Somali (largest refugee community)</li>
                    <li>🇪🇷 Eritrean</li>
                    <li>🇪🇹 Ethiopian (Oromo, Amharic speakers)</li>
                    <li>🇸🇩 Sudanese (Arabic speakers)</li>
                    <li>🇧🇹 Bhutanese (Nepali speakers)</li>
                    <li>🇲🇲 Burmese (Karen, Karenni)</li>
                    <li>🇸🇾 Syrian</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Healthcare Facilities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Clarkston Community Health Center:</strong> Refugee-focused, 40+ languages</li>
                    <li>🏥 <strong>Global Grady (Grady Health):</strong> Refugee healthcare program</li>
                    <li>🏥 <strong>Mercy Care Clarkston:</strong> Free clinic for uninsured refugees</li>
                    <li>🏥 <strong>DeKalb Medical:</strong> Interpreter services, refugee patient navigators</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Medicare Plan Recommendations:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Somali refugees (age 65+):</strong> Humana Gold Plus (Somali interpreter services, Clarkston Community
                    Health Center partnership) or UnitedHealthcare Dual Complete (Somali interpretation, Grady network)
                  </li>
                  <li>
                    <strong>Ethiopian/Eritrean seniors:</strong> Kaiser Permanente (Amharic support, Decatur location) or
                    UnitedHealthcare (Amharic interpreters, Emory Ethiopian clinic access)
                  </li>
                  <li>
                    <strong>Dual-eligible refugees:</strong> WellCare by Allwell D-SNP ($0 premium, culturally appropriate meals,
                    transportation to refugee health centers)
                  </li>
                  <li>
                    <strong>Recent refugee arrivals (40 quarters work):</strong> Plans covering Clarkston Community Health Center
                    and Global Grady with robust interpreter services
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3">Community Resources:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>📞 <strong>Refugee Women's Network (RWN):</strong> Medicare assistance in Somali, Amharic, Arabic, 678-615-5005</li>
                  <li>📞 <strong>New American Pathways:</strong> Refugee resettlement, Medicare enrollment for seniors</li>
                  <li>📞 <strong>Friends of Refugees:</strong> Healthcare navigation in 25+ refugee languages</li>
                  <li>🏥 <strong>Clarkston Community Health Center:</strong> Medicare counseling with interpreters, 404-728-6614</li>
                </ul>
              </div>
            </div>

            {/* East Atlanta/Decatur - Ethiopian/Eritrean Communities */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-900 mb-6">
                🇪🇹 East Atlanta/Decatur: Ethiopian & Eritrean Communities
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Community Overview:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🇪🇹 <strong>Ethiopian:</strong> Largest Ethiopian population outside of Washington D.C.</li>
                    <li>🇪🇷 <strong>Eritrean:</strong> Growing community in East Atlanta</li>
                    <li>💬 <strong>Languages:</strong> Amharic, Tigrinya, Oromo</li>
                    <li>⛪ <strong>Community hubs:</strong> Ethiopian Orthodox churches, community centers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">Healthcare Resources:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏥 <strong>Emory Decatur Hospital:</strong> Amharic-speaking patient navigators</li>
                    <li>🏥 <strong>Ethiopian Community Health Center:</strong> Culturally specific care</li>
                    <li>🏥 <strong>Grady Global Grady Program:</strong> Ethiopian health services</li>
                    <li>👨‍⚕️ <strong>Ethiopian physicians:</strong> At Emory, Grady, private practices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-3">Medicare Plan Recommendations:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Amharic-speaking seniors:</strong> Kaiser Permanente (Amharic interpreter services, cultural competency
                    training) or UnitedHealthcare (Amharic interpretation, Emory network access to Ethiopian physicians)
                  </li>
                  <li>
                    <strong>Tigrinya-speaking Eritrean seniors:</strong> Plans with robust interpreter services and Grady/Emory
                    network access
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-800 mb-3">Community Resources:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>📞 <strong>Ethiopian Community Association in Georgia (ECAG):</strong> Senior services, Medicare counseling in Amharic</li>
                  <li>📞 <strong>Eritrean Community Center of Atlanta:</strong> Healthcare navigation in Tigrinya</li>
                  <li>⛪ <strong>Ethiopian Orthodox churches:</strong> Medicare information sessions in Amharic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Medicare Eligibility for Immigrants */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📋 Medicare Eligibility for Immigrants in Atlanta
          </h2>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6">
              Understanding Medicare Eligibility for Non-Citizens
            </h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-4">✓ Who Qualifies for Medicare?</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">1. U.S. Citizens (Age 65+)</h5>
                    <p className="text-gray-700">
                      Automatic Medicare eligibility at age 65 if receiving Social Security benefits. Can enroll starting
                      3 months before 65th birthday.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">2. Lawful Permanent Residents (Green Card Holders)</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>40 quarters of work (10 years):</strong> Premium-free Part A + option to enroll in Part B</li>
                      <li><strong>Less than 40 quarters:</strong> Can purchase Part A ($505/month in 2024) + Part B ($174.70/month)</li>
                      <li><strong>Married to U.S. citizen/LPR with 40 quarters:</strong> May qualify for premium-free Part A based on spouse's work history</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">3. Refugees & Asylees</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>Refugee/asylee status with 40 quarters:</strong> Premium-free Part A (quarters earned as refugee count)</li>
                      <li><strong>Less than 40 quarters:</strong> Can purchase Part A + Part B</li>
                      <li><strong>Medicaid eligible:</strong> May qualify for dual-eligible D-SNP plans with $0 premium</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-4">✗ Who Does NOT Qualify for Medicare?</h4>

                <ul className="space-y-3 text-gray-700">
                  <li>❌ <strong>Undocumented immigrants:</strong> Not eligible for Medicare (may qualify for emergency Medicaid only)</li>
                  <li>❌ <strong>Temporary visa holders:</strong> Tourist visas, student visas, work visas (H-1B, etc.) - not eligible</li>
                  <li>❌ <strong>DACA recipients:</strong> Not eligible for Medicare (though work quarters count if status changes)</li>
                  <li>❌ <strong>Temporary Protected Status (TPS):</strong> Generally not eligible unless also LPR or other qualifying status</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                <h4 className="font-semibold text-yellow-900 mb-3">⚠️ Important for Atlanta's Immigrant Communities:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Work quarters earned anywhere:</strong> If you worked legally in the U.S. (even before green card),
                    those quarters count toward your 40 quarters for premium-free Part A.
                  </li>
                  <li>
                    <strong>Spouse's work history:</strong> If married to someone with 40 quarters, you may qualify for premium-free
                    Part A based on their work record.
                  </li>
                  <li>
                    <strong>Check your quarters:</strong> Contact Social Security at 1-800-772-1213 (interpreter services available)
                    to verify your work quarters.
                  </li>
                  <li>
                    <strong>Medicaid + Medicare (dual-eligible):</strong> If you have Medicare AND qualify for Medicaid, you can
                    enroll in a D-SNP plan with $0 premium and enhanced benefits.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Enroll with Language Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            📝 How to Enroll in Medicare Advantage with Language Support in Atlanta
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Step-by-Step Enrollment Process</h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 1: Verify Your Medicare Eligibility</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📞 <strong>Call Social Security:</strong> 1-800-772-1213 (TTY: 1-800-325-0778)</li>
                    <li>🗣️ <strong>Language line available:</strong> Say "Español" for Spanish, or your language when prompted</li>
                    <li>📋 <strong>What to ask:</strong> "How many work quarters do I have?" and "Am I eligible for premium-free Part A?"</li>
                    <li>💳 <strong>You'll need:</strong> Social Security number, green card or naturalization certificate</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 2: Enroll in Original Medicare (Parts A & B)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📅 <strong>When:</strong> 3 months before your 65th birthday through 3 months after (7-month window)</li>
                    <li>🌐 <strong>Online:</strong> ssa.gov/medicare (available in Spanish)</li>
                    <li>📞 <strong>Phone:</strong> 1-800-772-1213 (multilingual support)</li>
                    <li>🏢 <strong>In-person:</strong> Local Social Security office (bring interpreter if needed)</li>
                    <li>💰 <strong>Part B premium:</strong> $174.70/month in 2024 (deducted from Social Security if receiving benefits)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 3: Choose a Medicare Advantage Plan with Language Support</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📞 <strong>Call insurance carriers directly:</strong></li>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Kaiser Permanente: 1-800-494-5314 (Spanish, Vietnamese, Korean, Chinese, Amharic)</li>
                      <li>• Humana: 1-800-213-5286 (Spanish, Vietnamese, Somali, Arabic)</li>
                      <li>• WellCare: 1-877-247-7783 (Spanish, multilingual interpreters)</li>
                      <li>• UnitedHealthcare: 1-844-368-8873 (240+ languages via interpreter)</li>
                    </ul>
                    <li>🌐 <strong>Online comparison:</strong> medicare.gov (available in Spanish, limited other languages)</li>
                    <li>🤝 <strong>Local broker assistance:</strong> El-Mag Insurance provides multilingual enrollment support - Call (331) 343-2584</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 4: Enroll in Your Chosen Medicare Advantage Plan</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📅 <strong>Annual Enrollment Period (AEP):</strong> October 15 - December 7 (coverage starts January 1)</li>
                    <li>📅 <strong>Initial Enrollment Period:</strong> 3 months before age 65 through 3 months after</li>
                    <li>📞 <strong>Enroll by phone:</strong> Call carrier in your language, enrollment takes 15-30 minutes</li>
                    <li>🌐 <strong>Enroll online:</strong> Carrier websites (Spanish available, other languages limited)</li>
                    <li>📧 <strong>Confirmation:</strong> You'll receive welcome packet in English + Spanish (other languages available upon request)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Step 5: Activate Your Coverage & Find Providers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>💳 <strong>Member ID card:</strong> Arrives 7-10 days after enrollment (use immediately)</li>
                    <li>👨‍⚕️ <strong>Find multilingual providers:</strong> Call member services to request providers who speak your language</li>
                    <li>📞 <strong>Set up care coordination:</strong> Request bilingual care coordinator if you have chronic conditions</li>
                    <li>📱 <strong>Download member app:</strong> Kaiser, Humana, UnitedHealthcare, WellCare have Spanish-language apps</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <h4 className="font-semibold text-green-900 mb-3">💡 Free Medicare Counseling in Your Language:</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  📞 <strong>Georgia SHIP (State Health Insurance Assistance Program):</strong> 1-866-552-4464
                  <br /><span className="text-sm ml-6">Free, unbiased Medicare counseling. Interpreter services available.</span>
                </li>
                <li>
                  📞 <strong>Atlanta Regional Commission - Senior Services:</strong> 404-463-3100
                  <br /><span className="text-sm ml-6">Multilingual Medicare assistance for metro Atlanta seniors.</span>
                </li>
                <li>
                  📞 <strong>El-Mag Insurance:</strong> (331) 343-2584
                  <br /><span className="text-sm ml-6">Licensed Medicare broker with multilingual support for Atlanta's diverse communities.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cultural Competency in Medicare Plans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🌟 What Makes a Medicare Advantage Plan Culturally Competent?
          </h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              Key Features to Look For
            </h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">1. Multilingual Member Services</h4>
                <p className="text-gray-700 mb-3">
                  Look for plans that offer customer service in your primary language, not just interpreter services.
                  Best plans have dedicated phone lines for Spanish, Vietnamese, Korean, Chinese, and other languages.
                </p>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Kaiser Permanente has Vietnamese-speaking member services representatives
                    available during business hours, plus 24/7 nurse advice line with Vietnamese interpretation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">2. Provider Network Diversity</h4>
                <p className="text-gray-700 mb-3">
                  Plans should have providers who speak your language and understand your cultural health practices.
                  Ask if you can search the provider directory by language spoken.
                </p>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> UnitedHealthcare's online provider directory allows filtering by 40+ languages,
                    including Spanish, Vietnamese, Korean, Chinese, Hindi, Amharic, Somali, and Arabic.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">3. Translated Member Materials</h4>
                <p className="text-gray-700 mb-3">
                  Essential documents (Evidence of Coverage, Summary of Benefits, formulary) should be available in your language.
                </p>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Kaiser Permanente provides member handbooks in 15+ languages including Spanish,
                    Vietnamese, Korean, Chinese, Tagalog, Amharic, Russian, and Farsi.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">4. Cultural Health Programs</h4>
                <p className="text-gray-700 mb-3">
                  Plans with disease management programs tailored to specific ethnic communities (e.g., diabetes programs
                  for Asian communities, hypertension programs for African communities) show cultural competency.
                </p>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> Kaiser Permanente offers culturally specific diabetes prevention classes for
                    Asian Pacific Islander communities with higher diabetes risk, taught in Korean, Vietnamese, and Chinese.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">5. Community Health Center Partnerships</h4>
                <p className="text-gray-700 mb-3">
                  Plans that include community health centers (FQHCs) in their network demonstrate commitment to serving
                  diverse and underserved populations.
                </p>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> UnitedHealthcare includes Clarkston Community Health Center, Latin American
                    Association Health Center, and Buford Highway Community Health Center in their provider network.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-purple-800 mb-3">6. Transportation to Medical Appointments</h4>
                <p className="text-gray-700 mb-3">
                  Many immigrants and refugees rely on public transportation. Plans with robust transportation benefits
                  reduce barriers to care.
                </p>
                <div className="bg-purple-50 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> WellCare by Allwell D-SNP provides 48 one-way trips per year to medical
                    appointments, pharmacies, and plan-approved locations—critical for Clarkston refugee seniors without cars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ❓ Frequently Asked Questions: Medicare for Atlanta's Diverse Communities
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                I'm a green card holder but haven't worked 40 quarters. Can I still get Medicare?
              </h3>
              <p className="text-gray-700">
                Yes, but you'll need to pay a premium for Part A. In 2024, the Part A premium is $505/month if you have fewer
                than 30 quarters of work, or $278/month if you have 30-39 quarters. You'll also pay the Part B premium
                ($174.70/month). However, if you're married to a U.S. citizen or green card holder who has 40 quarters, you
                may qualify for premium-free Part A based on their work record. Contact Social Security at 1-800-772-1213
                (interpreter services available) to check your spouse's eligibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Which Medicare Advantage plans have the best Spanish language support in Atlanta?
              </h3>
              <p className="text-gray-700">
                <strong>Kaiser Permanente Georgia</strong> and <strong>Humana Gold Plus</strong> have the most comprehensive
                Spanish language support in Atlanta. Both offer 24/7 Spanish-speaking customer service, bilingual care
                coordinators, Spanish-language member portals and mobile apps, and provider directories with Spanish-speaking
                physicians. Additionally, both have partnerships with Latino community health centers like the Latin American
                Association Health Center. For dual-eligible beneficiaries (Medicare + Medicaid), <strong>WellCare by Allwell</strong>
                offers excellent Spanish support with $0 premium D-SNP plans.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are there Medicare plans that work with Clarkston Community Health Center for refugee seniors?
              </h3>
              <p className="text-gray-700">
                Yes! <strong>UnitedHealthcare Dual Complete</strong> and <strong>Humana Gold Plus</strong> both include
                Clarkston Community Health Center in their provider networks. Clarkston Community Health Center specializes
                in serving refugee populations with interpreter services in 40+ languages including Somali, Amharic, Arabic,
                Burmese, Nepali, and more. If you're dual-eligible (Medicare + Medicaid), UnitedHealthcare's D-SNP plan offers
                $0 premium with transportation benefits to get to Clarkston for appointments—especially helpful for seniors
                without cars.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I find Vietnamese-speaking doctors with Medicare Advantage plans in Atlanta?
              </h3>
              <p className="text-gray-700">
                Absolutely! <strong>Kaiser Permanente Georgia</strong> has Vietnamese-speaking physicians at their Perimeter
                and Gwinnett locations, serving the Buford Highway Vietnamese community. <strong>UnitedHealthcare</strong>
                also has a searchable provider directory where you can filter by "Vietnamese" language to find doctors in the
                Chamblee, Doraville, and Norcross areas. Both plans offer Vietnamese-language member services and interpreter
                services for medical appointments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                I speak Korean and need help enrolling in Medicare. Where can I get assistance in Korean?
              </h3>
              <p className="text-gray-700">
                <strong>Kaiser Permanente Georgia</strong> offers enrollment assistance in Korean—call 1-800-494-5314 and
                request a Korean-speaking representative. Additionally, <strong>Korean Community Services</strong> in Atlanta
                provides free Medicare counseling in Korean. <strong>El-Mag Insurance</strong> also offers multilingual
                enrollment support—call (331) 343-2584 to request Korean language assistance. For government Medicare resources,
                call Medicare at 1-800-MEDICARE (1-800-633-4227) and say "Korean" when prompted for interpreter services.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's a D-SNP plan and should I consider it if I'm a low-income immigrant senior?
              </h3>
              <p className="text-gray-700">
                A <strong>D-SNP (Dual Eligible Special Needs Plan)</strong> is a Medicare Advantage plan specifically for
                people who have both Medicare and Medicaid (dual-eligible). If you qualify for both programs, D-SNP plans
                offer exceptional benefits: <strong>$0 premium</strong>, $0 or very low copays for drugs, enhanced benefits
                like transportation (48 trips/year), meals after hospitalization, over-the-counter allowances, and comprehensive
                dental/vision/hearing coverage. Many immigrant seniors qualify for Medicaid based on income, especially if
                receiving SSI. Check with <strong>WellCare by Allwell</strong> or <strong>UnitedHealthcare Dual Complete</strong>—both
                have strong D-SNP plans with multilingual support in Atlanta.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing a Medicare Advantage Plan in Your Language?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Our team provides Medicare enrollment assistance with multilingual support for Atlanta's diverse communities.
            We speak Spanish, Vietnamese, Korean, Amharic, and connect you with interpreters for 200+ languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center text-lg"
            >
              Get Free Medicare Plan Comparison
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
            📚 Related Medicare Resources for Atlanta
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                📍 Atlanta Medicare Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/emory-vs-piedmont-medicare-advantage-atlanta" className="text-blue-600 hover:underline">
                    Emory vs Piedmont Medicare Advantage
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-advantage/fulton-county-georgia" className="text-blue-600 hover:underline">
                    Fulton County Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grady-health-medicare-advantage-atlanta" className="text-blue-600 hover:underline">
                    Grady Health Medicare Advantage Guide
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
                  <Link href="/resources/enrollment-periods-explained" className="text-blue-600 hover:underline">
                    Medicare Enrollment Periods Explained
                  </Link>
                </li>
                <li>
                  <Link href="/resources/dual-eligible-special-needs-plans" className="text-blue-600 hover:underline">
                    Dual-Eligible Special Needs Plans (D-SNP)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                🌍 Georgia Medicare
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medicare-advantage/georgia" className="text-blue-600 hover:underline">
                    Georgia Medicare Advantage Plans
                  </Link>
                </li>
                <li>
                  <Link href="/resources/georgia-medicaid-medicare" className="text-blue-600 hover:underline">
                    Georgia Medicaid + Medicare (Dual-Eligible)
                  </Link>
                </li>
                <li>
                  <Link href="/resources/immigrant-medicare-eligibility" className="text-blue-600 hover:underline">
                    Medicare Eligibility for Immigrants
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
