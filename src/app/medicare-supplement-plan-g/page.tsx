import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import ResourceLinks from '@/components/ResourceLinks'
import ServiceComparison from '@/components/ServiceComparison'
import CrossServiceRecommendations from '@/components/CrossServiceRecommendations'
import ResourceLinking from '@/components/ResourceLinking'
import ToolLinking from '@/components/ToolLinking'
import GeographicGrouping from '@/components/GeographicGrouping'
import ServiceRecommendations from '@/components/ServiceRecommendations'
import EnrollmentTimeline from '@/components/EnrollmentTimeline'
import TeamMemberLinking from '@/components/TeamMemberLinking'
import BlogPostLinking from '@/components/BlogPostLinking'
import FAQCrossReferencing from '@/components/FAQCrossReferencing'
import SuccessStoryLinking from '@/components/SuccessStoryLinking'
import ContactFormLinking from '@/components/ContactFormLinking'

export const metadata: Metadata = {
  title: 'Medicare Supplement Plan G 2025 | Most Popular Medigap Plan | $240 Deductible Only',
  description: 'Medicare Supplement Plan G: Most popular Medigap choice with only $240 deductible, then 100% coverage. No networks, see any doctor. Free quotes from top insurers. Licensed agents available 331-E-HEALTH.',
  keywords: 'Medicare Supplement Plan G, Medicare Supplement Plan G 2025, Medigap Plan G, Plan G benefits, Plan G coverage, Plan G deductible, Plan G quotes, Plan G vs Plan F, Plan G vs Plan N, best Medicare Supplement plan, Medigap Plan G rates, Medicare Supplement quotes',
  openGraph: {
    title: 'Medicare Supplement Plan G 2025 | Most Popular Medigap Plan',
    description: 'Get comprehensive Medicare coverage with Plan G. Only },40 deductible, covers 100% of costs after. No networks, see any doctor nationwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-supplement-plan-g',
  ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-supplement.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Supplement Plans - El-Mag Insurance',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicare Supplement Plan G 2025 | $240 Deductible Only',
    description: 'Most popular Medigap plan! Only $240 deductible, then 100% coverage. No networks, see any doctor. Get free quotes.',
  },
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement-plan-g',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Medicare Supplement Plan G 2025',
  description: 'Medicare Supplement Plan G: Most popular Medigap choice with only $240 deductible, then 100% coverage. No networks, see any doctor.',
  url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-supplement-plan-g',
  datePublished: '2024-08-27',
  dateModified: '2024-08-27',
  inLanguage: 'en-US',
  keywords: 'Medicare Supplement Plan G, Medicare Supplement Plan G 2025, Medigap Plan G, Plan G benefits, Plan G coverage, Plan G deductible',
  about: {
    '@type': 'FinancialProduct',
    name: 'Medicare Supplement Plan G',
    description: 'Comprehensive Medicare supplement insurance plan with $240 deductible and 100% coverage after deductible',
    category: 'Medicare Supplement Insurance',
    provider: {
      '@type': 'Organization',
      name: 'El-Mag Insurance'
    }
  },
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app',
    telephone: '331-343-2584',
    email: 'support@elmaginsurance.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7520 NW 5th St, #201',
      addressLocality: 'Plantation',
      addressRegion: 'FL',
      postalCode: '33317',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medicare Supplement Plan G Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plan G Quote Comparison',
            description: 'Free comparison of Medicare Supplement Plan G rates from multiple insurers'
          },
          price: '0',
          priceCurrency: 'USD'
        }
      ]
    }
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Medicare Supplement Plan G?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Supplement Plan G is the most popular Medigap plan that covers 100% of Medicare costs after you pay a $240 deductible. It provides comprehensive coverage with no network restrictions, allowing you to see any doctor who accepts Medicare.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Plan F and Plan G?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plan F covers the Part B deductible ($240), while Plan G requires you to pay it. However, Plan G premiums are typically lower, making it more cost-effective for most people. Plan F is no longer available to new Medicare beneficiaries as of 2020.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does Plan G cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plan G premiums vary by location, age, gender, and insurance company. Typical monthly premiums range from $120-300 depending on these factors. Contact a licensed agent for personalized quotes from multiple insurers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I keep my doctor with Plan G?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Plan G works with any doctor who accepts Medicare. You don\'t need referrals and there are no network restrictions. You have complete freedom to choose your healthcare providers.'
        }
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in Plan G?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enroll in Plan G without medical underwriting during your 6-month Medigap Open Enrollment Period (starting when you turn 65 and enroll in Part B) or during certain guaranteed issue periods. Outside these periods, you may need to answer health questions.'
        }
      }
    ]
  }
};

export default function MedicareSupplementPlanGPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-8 text-center">
          <div className="mb-6">
            <span className="text-6xl">🛡️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medicare Supplement Plan G 2025 | Most Popular Medigap Coverage
          </h1>
          <div className="text-2xl font-semibold mb-4">
            The Most Popular Medigap Plan for 2025
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Get comprehensive coverage with just a $240 deductible. 
            Covers 100% of Medicare costs after your deductible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:331-343-2584"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              📞 GET PLAN G QUOTE: 331-E-HEALTH
            </a>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              📝 FREE CONSULTATION
            </Link>
          </div>
        </section>

        {/* Why Plan G Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Medicare Supplement Plan G?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Lowest Out-of-Pocket Costs</h3>
              <p className="text-green-700">
                Only $240 deductible per year. After that, Plan G covers 100% of your Medicare costs.
              </p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Comprehensive Coverage</h3>
              <p className="text-blue-700">
                Covers Medicare Part A deductible, coinsurance, and most other out-of-pocket costs.
              </p>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-500 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Go Anywhere</h3>
              <p className="text-purple-700">
                See any doctor that accepts Medicare. No network restrictions or referrals needed.
              </p>
            </div>
          </div>
        </section>

        {/* Plan G Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan G Benefits & Coverage</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">What Plan G Covers</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">✅ FULLY COVERED (100%)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Medicare Part A coinsurance and hospital costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Medicare Part B coinsurance (20%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Blood (first 3 pints)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Part A hospice care coinsurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Skilled nursing facility coinsurance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Foreign travel emergency (up to $50,000)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">💲 PARTIALLY COVERED</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">$</span>
                      <span><strong>Part A deductible:</strong> You pay $240 (2025)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">$</span>
                      <span><strong>Part B deductible:</strong> You pay $240 (2025)</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-red-700 mb-3 mt-6">❌ NOT COVERED</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Prescription drugs (need Part D)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Dental, vision, hearing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Long-term care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan G vs Other Plans */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan G vs Other Medicare Supplement Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Benefit</th>
                  <th className="border border-gray-300 p-3 text-center">Plan F</th>
                  <th className="border border-gray-300 p-3 text-center bg-blue-100 font-bold">Plan G</th>
                  <th className="border border-gray-300 p-3 text-center">Plan N</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Part A Deductible</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                  <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold">You pay $240</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Part B Deductible</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                  <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold">You pay $240</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Part B Coinsurance</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                  <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold">✓ Covered</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Part B Excess Charges</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">✓ Covered</td>
                  <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold">✓ Covered</td>
                  <td className="border border-gray-300 p-3 text-center text-red-600">✗ Not Covered</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Monthly Premium</td>
                  <td className="border border-gray-300 p-3 text-center text-red-600">Highest</td>
                  <td className="border border-gray-300 p-3 text-center bg-blue-50 font-bold text-green-600">Lower</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">Lowest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Savings Example */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Cost Savings with Plan G</h2>
          <div className="bg-green-50 border-2 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Example: Hospital Stay + Doctor Visits</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-red-800 mb-4">Without Plan G</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Part A Deductible:</span>
                    <span className="font-semibold">$1,632</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Coinsurance (20%):</span>
                    <span className="font-semibold">$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Deductible:</span>
                    <span className="font-semibold">$240</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-red-800">
                    <span>Total Out-of-Pocket:</span>
                    <span>$2,672</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-green-800 mb-4">With Plan G</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Part A Deductible:</span>
                    <span className="font-semibold text-green-600">$240</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Coinsurance (20%):</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part B Deductible:</span>
                    <span className="font-semibold text-green-600">$0</span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-green-800">
                    <span>Total Out-of-Pocket:</span>
                    <span>$240</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <div className="text-2xl font-bold text-green-800">
                💰 You Save: $2,432 with Plan G!
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When Can You Enroll in Plan G?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">✅ Guaranteed Issue Rights</h3>
              <p className="text-blue-700 mb-4">
                You can enroll in Plan G without medical underwriting during these periods:
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• Within 6 months of turning 65</li>
                <li>• Within 6 months of enrolling in Part B</li>
                <li>• When you lose employer coverage</li>
                <li>• When your plan is discontinued</li>
                <li>• During Medicare Advantage trial period</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4">⚠️ Medical Underwriting</h3>
              <p className="text-orange-700 mb-4">
                Outside of guaranteed issue periods, you may need to answer health questions:
              </p>
              <ul className="space-y-2 text-orange-700">
                <li>• Health conditions may affect eligibility</li>
                <li>• Premiums may be higher</li>
                <li>• Some conditions may be excluded</li>
                <li>• Pre-existing conditions may have waiting periods</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Plan G Quote Today!</h2>
            <p className="text-xl mb-6">
              Our Medicare experts will help you find the best Plan G rates and coverage for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
              >
                📞 CALL NOW: 331-E-HEALTH
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
              >
                📝 GET FREE QUOTE
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the difference between Plan F and Plan G?</h3>
              <p className="text-gray-700">
                Plan F covers the Part B deductible ($240), while Plan G requires you to pay it. However, Plan G premiums are typically lower, making it more cost-effective for most people.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I keep my doctor with Plan G?</h3>
              <p className="text-gray-700">
                Yes! Plan G works with any doctor who accepts Medicare. You don't need referrals and there are no network restrictions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does Plan G cost?</h3>
              <p className="text-gray-700">
                Plan G premiums vary by location, age, and insurance company. Contact us for a personalized quote based on your specific situation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need Part D with Plan G?</h3>
              <p className="text-gray-700">
                Yes, Plan G doesn't cover prescription drugs. You'll need a separate Medicare Part D plan for prescription coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <ServiceComparison 
          primaryService="medicare-supplement"
          showCTA={true}
        />

                {/* Educational Resources */}
        <ResourceLinking 
          currentResource=""
          currentCategory=""
          userContext="medicare-supplement"
          showTools={true}
          maxResources={4}
          maxTools={3}
        />

        {/* Service Recommendations */}
        <ServiceRecommendations 
          userContext="medicare-supplement"
          showEligibilityCheck={true}
          maxRecommendations={6}
          showMatchScores={true}
          showAlternatives={true}
        />

        {/* Enrollment Timeline */}
        <EnrollmentTimeline 
          userContext="medicare-supplement"
          showActiveOnly={false}
          maxPeriods={6}
          showCountdown={true}
          layout="timeline"
        />

        {/* Geographic Grouping */}
        <GeographicGrouping 
          serviceType="medicare-supplement"
          showMarketData={true}
          layout="hierarchical"
          maxItems={15}
        />

        {/* Tool Linking */}
        <ToolLinking 
          currentTool=""
          userContext="medicare-supplement"
          showRelatedTools={true}
          maxTools={6}
          showFeatures={false}
          layout="featured"
        />

        {/* Cross-Service Recommendations */}
        <CrossServiceRecommendations
          currentService="medicare-supplement"
          showAgeBased={true}
        />

        {/* Team Member Linking */}
        <TeamMemberLinking
          userContext="medicare-supplement"
          userAge={65}
          showAvailability={true}
          maxMembers={3}
          showRatings={true}
          showResponseTime={true}
          layout="grid"
          showSpecializations={true}
          showLanguages={true}
          showStates={true}
        />

        {/* Blog Post Linking */}
        <BlogPostLinking
          userContext="medicare-supplement"
          maxPosts={3}
          layout="grid"
        />

        {/* FAQ Cross-Referencing */}
        <FAQCrossReferencing
          userContext="medicare-supplement"
          maxFAQs={5}
          layout="accordion"
          showCategories={true}
          showDifficulty={false}
          showHelpfulCount={true}
          showInteractive={true}
          showCrossReferences={true}
        />

        {/* Success Story Linking */}
        <SuccessStoryLinking
          userContext="medicare-supplement"
          currentState="Virginia"
          maxStories={6}
          layout="grid"
          showFilters={true}
          showCategories={true}
          showSavings={true}
          showTeamMembers={true}
          showGeographic={true}
          showInteractive={true}
          showRelatedStories={true}
        />

        {/* Contact Form Linking to Specialists */}
        <ContactFormLinking
          userContext="medicare-supplement"
          currentState="Virginia"
          userAge={65}
          maxSpecialists={6}
          layout="grid"
          showFilters={true}
          showCategories={true}
          showRatings={true}
          showAvailability={true}
          showResponseTime={true}
          showAchievements={true}
          showConsultationInfo={true}
          showEmergencyContact={true}
          showFreeConsultation={true}
        />

        {/* Resource Links Section */}
        <ResourceLinks 
          currentService="medicare-supplement"
          excludePaths={['/medicare-supplement-plan-g']}
          title="Medicare Resources & Tools"
          description="Educational guides, cost calculators, and comparison tools for Medicare coverage options"
        />

        {/* Related Services */}
        <RelatedServices 
          currentService="medicare-supplement"
          excludePaths={['/medicare-supplement-plan-g']}
          title="Explore Related Medicare & Health Insurance Options"
          description="Compare Medicare Supplement with Medicare Advantage, explore Health Marketplace for under-65, or use our tools."
        />
      </div>
    </main>
  )
}
