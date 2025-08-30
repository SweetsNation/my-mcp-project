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
  title: 'Health Insurance Marketplace 2025 | ACA Plans & Premium Tax Credits | Save $2,400+',
  description: 'Get affordable health insurance through the ACA Marketplace with subsidies up to $2,400/year. Compare Obamacare plans, check eligibility, and enroll with expert help. Free licensed agent assistance - call 331-E-HEALTH.',
  keywords: 'Health Insurance Marketplace, Health Insurance Marketplace 2025, ACA plans, Obamacare enrollment, Affordable Care Act plans, health insurance subsidies, premium tax credits, marketplace health insurance, health insurance enrollment, ACA subsidies, health insurance marketplace enrollment, health insurance marketplace plans',
  openGraph: {
    title: 'Health Insurance Marketplace 2025 | Save $2,400+ with ACA Subsidies',
    description: 'Get affordable ACA health insurance with premium tax credits and subsidies. Expert guidance for Marketplace enrollment. Free licensed agent help available.',
    type: 'website',
    locale: 'en_US',
    siteName: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com/health-insurance-marketplace',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Insurance Marketplace 2025 | ACA Plans & Subsidies',
    description: 'Save $2,400+ per year with ACA subsidies and premium tax credits. Get expert help enrolling in Marketplace health insurance.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/health-insurance-marketplace',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Health Insurance Marketplace 2025',
  description: 'Get affordable health insurance through the ACA Marketplace with subsidies up to $2,400/year. Expert guidance for enrollment and plan selection.',
  url: 'https://elmag-insurance.com/health-insurance-marketplace',
  datePublished: '2024-08-27',
  dateModified: '2024-08-27',
  inLanguage: 'en-US',
  keywords: 'Health Insurance Marketplace, Health Insurance Marketplace 2025, ACA plans, Obamacare enrollment, Affordable Care Act plans, health insurance subsidies, premium tax credits',
  about: {
    '@type': 'Thing',
    name: 'Health Insurance Marketplace',
    description: 'Government-run exchange for purchasing ACA health insurance plans with subsidies'
  },
  provider: {
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmag-insurance.com',
    telephone: '331-343-2584',
    email: 'support@elmaginsurance.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://elmag-insurance.com/logo.png'
    },
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
      name: 'Health Insurance Marketplace Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ACA Plan Comparison and Enrollment',
            description: 'Free comparison and enrollment assistance for Health Insurance Marketplace plans'
          },
          price: '0',
          priceCurrency: 'USD'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Subsidy and Tax Credit Optimization',
            description: 'Maximize premium tax credits and cost-sharing reductions'
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
        name: 'What is the Health Insurance Marketplace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Health Insurance Marketplace is a government-run exchange created by the Affordable Care Act (ACA) where individuals and families can shop for health insurance plans, compare coverage options, check eligibility for subsidies, and enroll in coverage. Most people qualify for financial assistance through premium tax credits.'
        }
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in Health Insurance Marketplace plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open Enrollment Period runs from November 1 through January 15 each year for most people. You can also enroll during a Special Enrollment Period within 60 days of qualifying life events like job loss, marriage, or having a baby. Medicaid and CHIP enrollment is available year-round.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much can I save with Health Insurance Marketplace subsidies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Premium tax credits can save you an average of $2,400 per year on health insurance premiums. Cost-sharing reductions can lower your deductibles, copays, and out-of-pocket maximums. The amount depends on your income and household size - most people with incomes between $15,060 and $60,240 (for individuals) qualify for some financial assistance.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the different Health Insurance Marketplace plan categories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Marketplace plans are divided into Bronze (60% coverage), Silver (70% coverage), Gold (80% coverage), and Platinum (90% coverage) categories. The percentage represents how much of your medical costs the plan pays on average. Bronze plans have lower premiums but higher deductibles, while Platinum plans have higher premiums but lower out-of-pocket costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need help enrolling in a Marketplace plan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, licensed insurance agents can provide free help navigating the Health Insurance Marketplace, comparing plans, maximizing your subsidies, and completing your enrollment. This service is free to you and ensures you get the best coverage for your needs and budget.'
        }
      }
    ]
  }
};

export default function HealthInsuranceMarketplacePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health Insurance Marketplace 2025 | Save $2,400+ with ACA Subsidies
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Get affordable health insurance through the Health Insurance Marketplace. 
            Compare plans, check eligibility for subsidies, and enroll in ACA coverage.
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
              🎯 START ENROLLMENT
            </Link>
          </div>
        </section>

        {/* Savings Highlight */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">💰 Save an Average of $2,400 per Year!</h2>
            <p className="text-lg text-green-700 mb-6">
              Most people qualify for premium tax credits and cost-sharing reductions that significantly reduce health insurance costs through the ACA Marketplace.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">87%</div>
                <p className="text-green-700">of enrollees qualify for subsidies</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$2,400</div>
                <p className="text-green-700">average annual savings</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$0</div>
                <p className="text-green-700">cost for our assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is the Marketplace */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Health Insurance Marketplace?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🏛️ Government-Run Exchange</h3>
              <p className="text-gray-700 mb-4">
                The Health Insurance Marketplace (also called the ACA Exchange or Obamacare Marketplace) is a government-run platform created by the Affordable Care Act 
                where individuals and families can shop for comprehensive health insurance plans.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Compare plans side-by-side easily</li>
                <li>• Check eligibility for subsidies instantly</li>
                <li>• Enroll in coverage online securely</li>
                <li>• Get free expert help with enrollment</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Financial Assistance Available</h3>
              <p className="text-gray-700 mb-4">
                Most people qualify for financial help to lower their monthly premiums and out-of-pocket costs. Income limits are generous!
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Premium tax credits</strong> - Lower monthly costs</li>
                <li>• <strong>Cost-sharing reductions</strong> - Lower deductibles & copays</li>
                <li>• <strong>Medicaid expansion</strong> - Free coverage for low income</li>
                <li>• <strong>CHIP for children</strong> - Affordable kids' coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Eligibility and Income Limits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Do You Qualify for Health Insurance Marketplace Subsidies?</h2>
          <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">2025 Income Limits for Premium Tax Credits</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Individual:</span>
                    <span className="font-bold text-blue-600">Up to $60,240/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Family of 2:</span>
                    <span className="font-bold text-blue-600">Up to $81,560/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Family of 3:</span>
                    <span className="font-bold text-blue-600">Up to $102,880/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Family of 4:</span>
                    <span className="font-bold text-blue-600">Up to $124,200/year</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Additional Qualifications</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>✓ U.S. citizen or legal resident</li>
                  <li>✓ Not eligible for employer coverage</li>
                  <li>✓ Not eligible for Medicare</li>
                  <li>✓ Income above Medicaid limits</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Not sure if you qualify?</strong> Our licensed agents can check your eligibility in minutes - completely free!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Enrollment Periods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Open Enrollment</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">Nov 1 - Jan 15</div>
              <p className="text-blue-700">Annual enrollment period for everyone</p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-800 mb-3">Special Enrollment</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">60 Days</div>
              <p className="text-green-700">After qualifying life events</p>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Medicaid/CHIP</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">Year-Round</div>
              <p className="text-purple-700">Enrollment anytime for eligible</p>
            </div>
          </div>
        </section>

        {/* Plan Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketplace Plan Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Bronze</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">60%</div>
              <p className="text-orange-700 text-sm">Low premiums, high deductibles</p>
            </div>
            
            <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Silver</h3>
              <div className="text-2xl font-bold text-gray-600 mb-2">70%</div>
              <p className="text-gray-700 text-sm">Most popular, good balance</p>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Gold</h3>
              <div className="text-2xl font-bold text-yellow-600 mb-2">80%</div>
              <p className="text-yellow-700 text-sm">Higher premiums, lower costs</p>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Platinum</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
              <p className="text-blue-700 text-sm">Highest premiums, lowest costs</p>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <ServiceComparison 
          primaryService="health-marketplace"
          showCTA={true}
        />

                {/* Educational Resources */}
        <ResourceLinking 
          currentResource=""
          currentCategory=""
          userContext="health-marketplace"
          showTools={true}
          maxResources={4}
          maxTools={3}
        />

        {/* Service Recommendations */}
        <ServiceRecommendations 
          userContext="health-marketplace"
          showEligibilityCheck={true}
          maxRecommendations={6}
          showMatchScores={true}
          showAlternatives={true}
        />

        {/* Enrollment Timeline */}
        <EnrollmentTimeline 
          userContext="health-marketplace"
          showActiveOnly={false}
          maxPeriods={6}
          showCountdown={true}
          layout="timeline"
        />

        {/* Geographic Grouping */}
        <GeographicGrouping 
          serviceType="health-marketplace"
          showMarketData={true}
          layout="hierarchical"
          maxItems={15}
        />

        {/* Tool Linking */}
        <ToolLinking 
          currentTool=""
          userContext="health-marketplace"
          showRelatedTools={true}
          maxTools={6}
          showFeatures={false}
          layout="featured"
        />

        {/* Cross-Service Recommendations */}
        <CrossServiceRecommendations
          currentService="health-marketplace"
          showAgeBased={true}
        />

        {/* Team Member Linking */}
        <TeamMemberLinking
          userContext="health-marketplace"
          userAge={45}
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
          userContext="health-marketplace"
          maxPosts={3}
          layout="grid"
        />

        {/* FAQ Cross-Referencing */}
        <FAQCrossReferencing
          userContext="health-marketplace"
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
          userContext="health-marketplace"
          currentState="Texas"
          userAge={35}
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
          userContext="health-marketplace"
          currentState="Texas"
          userAge={35}
          userLanguage="English"
          maxSpecialists={6}
          layout="grid"
          showFilters={true}
          showCategories={true}
          showRatings={true}
          showAvailability={true}
          showResponseTime={true}
          showAchievements={true}
          showConsultationInfo={true}
          showEmergencyContact={false}
          showFreeConsultation={true}
        />

        {/* Resource Links Section */}
        <ResourceLinks 
          currentService="health-marketplace"
          excludePaths={['/health-insurance-marketplace']}
          title="ACA Marketplace Resources & Calculators"
          description="Educational guides, subsidy calculators, and enrollment tools for Health Insurance Marketplace plans"
        />

        {/* Related Services Section */}
        <RelatedServices 
          currentService="health-marketplace"
          excludePaths={['/health-insurance-marketplace']}
          title="Explore Other Insurance Options"
          description="Health Insurance Marketplace is perfect for under-65. If you're approaching Medicare age, explore Medicare options, or use our calculators to compare all coverage types."
        />

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Marketplace Coverage?</h2>
            <p className="text-xl mb-6">
              Get help enrolling in affordable health insurance through the Health Insurance Marketplace.
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
                🎯 START ENROLLMENT
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
