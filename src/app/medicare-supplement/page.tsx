import { Metadata } from 'next';
import Link from 'next/link';
import { MedicarePlanFinder } from '@/components/MedicarePlanFinder';

export const metadata: Metadata = {
  title: 'Medicare Supplement Plans | El-Mag Insurance',
  description: 'Compare Medicare Supplement (Medigap) plans to fill gaps in Original Medicare coverage. Get quotes and expert guidance.',
  keywords: 'Medicare Supplement, Medigap, Medicare Gap Insurance, Medicare coverage',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/medicare-supplement',
  },
};

export default function MedicareSupplementPage() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement',
        url: 'https://www.elmaginsurance.com/medicare-supplement',
        name: 'Medicare Supplement Plans | El-Mag Insurance',
        description: 'Compare Medicare Supplement (Medigap) plans to fill gaps in Original Medicare coverage. Get quotes and expert guidance.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://www.elmaginsurance.com/#website'
        },
        breadcrumb: {
          '@id': 'https://www.elmaginsurance.com/medicare-supplement#breadcrumb'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.elmaginsurance.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Medicare Supplement',
            item: 'https://www.elmaginsurance.com/medicare-supplement'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement#service',
        name: 'Medicare Supplement Insurance',
        description: 'Medicare Supplement (Medigap) insurance services helping fill gaps in Original Medicare coverage across the United States.',
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: 'https://www.elmaginsurance.com'
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Medicare Supplement Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Supplement Plan G',
                description: 'Most comprehensive Medigap plan available for new enrollees, covering all Medicare cost-sharing except Part B deductible'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Supplement Plan N',
                description: 'Affordable Medigap option with moderate copayments for office visits and emergency room care'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Supplement Plan F',
                description: 'Most comprehensive Medigap plan including Part B deductible coverage (available only to those eligible before 2020)'
              }
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.elmaginsurance.com/medicare-supplement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Medicare Supplement insurance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Supplement (Medigap) insurance is private insurance that helps pay for out-of-pocket costs not covered by Original Medicare, such as copayments, coinsurance, and deductibles. Medigap policies are standardized and regulated by federal and state law. These plans work alongside Original Medicare Part A and Part B to provide comprehensive coverage.'
            }
          },
          {
            '@type': 'Question',
            name: 'When can I enroll in Medicare Supplement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The best time to buy a Medigap policy is during your 6-month Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Medicare Part B. During this period, you have guaranteed issue rights and cannot be denied coverage or charged higher premiums due to health conditions. You can also enroll outside this period, but you may face medical underwriting.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Medicare Supplement and Medicare Advantage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Supplement (Medigap) works with Original Medicare to cover out-of-pocket costs and allows you to see any doctor that accepts Medicare nationwide with no network restrictions. Medicare Advantage (Part C) replaces Original Medicare with a private plan that typically has network restrictions but may include extra benefits like dental, vision, and prescription drug coverage. Medigap provides more flexibility but requires a separate Part D plan for prescription drugs.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which Medicare Supplement plan is best?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The best Medicare Supplement plan depends on your individual needs and budget. Plan G is currently the most popular choice for new enrollees, offering comprehensive coverage with only the Part B deductible not covered. Plan N provides a more affordable option with modest copayments. Plan F offers the most comprehensive coverage but is only available to those who became eligible for Medicare before January 1, 2020. Compare plans based on your healthcare usage, budget, and coverage preferences.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does Medicare Supplement insurance cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Supplement premiums vary based on several factors including your location, age (in most states), tobacco use, the plan you choose (Plan G, Plan N, etc.), and the insurance carrier. On average, premiums range from $150-$400+ per month. Plan N typically has lower premiums than Plan G, which has lower premiums than Plan F. It is important to compare quotes from multiple carriers as the same standardized plan can vary significantly in cost between insurance companies.'
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medicare Supplement Plans
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Fill the gaps in Original Medicare coverage with comprehensive Medigap plans
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/medicare-supplement-plan-g"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Learn About Plan G
            </Link>
          </div>
        </section>

        {/* Medicare Plan Finder */}
        <section className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Medicare Supplement Plans in Your Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare Medigap plans side by side and find the perfect coverage for your needs.
            </p>
          </div>
          <MedicarePlanFinder 
            planType="Medigap"
            title="Find Medicare Supplement Plans in Your Area"
            subtitle="Compare Medigap plans side by side. Find the best coverage to fill gaps in Original Medicare with predictable costs and no network restrictions."
          />
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Medicare Supplement?</h2>
            <p className="text-gray-600 mb-4">
              Medicare Supplement (Medigap) plans help pay some of the healthcare costs that Original Medicare doesn't cover, 
              such as copayments, coinsurance, and deductibles.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Standardized benefits across all insurance companies</li>
              <li>Guaranteed renewable coverage</li>
              <li>No network restrictions</li>
              <li>Coverage for foreign travel emergencies</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Plans</h2>
            <div className="space-y-4">
              <Link href="/medicare-supplement-plan-g" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Plan G</h3>
                <p className="text-sm text-gray-600">Most comprehensive coverage with predictable costs</p>
              </Link>
              <Link href="/medicare-supplement-plan-f" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Plan F</h3>
                <p className="text-sm text-gray-600">Covers Medicare Part B deductible (if eligible)</p>
              </Link>
              <Link href="/medicare-supplement-plan-n" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">Plan N</h3>
                <p className="text-sm text-gray-600">Lower premiums with some cost-sharing</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Medicare Supplement Coverage by State</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/medicare-supplement-california" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">California</h3>
              <p className="text-sm text-gray-600">Community-rated Medigap plans</p>
            </Link>
            <Link href="/medicare-supplement-texas" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Texas</h3>
              <p className="text-sm text-gray-600">Low penetration market opportunities</p>
            </Link>
            <Link href="/medicare-supplement-new-york" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">New York</h3>
              <p className="text-sm text-gray-600">NY-specific standardized plans</p>
            </Link>
            <Link href="/medicare-supplement-florida" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Florida</h3>
              <p className="text-sm text-gray-600">Retiree-focused Medigap coverage</p>
            </Link>
            <Link href="/medicare-supplement-hawaii" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Hawaii</h3>
              <p className="text-sm text-gray-600">Island healthcare gap coverage</p>
            </Link>
            <Link href="/medicare-supplement-los-angeles-county" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Los Angeles County</h3>
              <p className="text-sm text-gray-600">1.8M+ beneficiaries, 75% market gap</p>
            </Link>
            <Link href="/medicare-supplement-dallas-county-texas" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Dallas County, TX</h3>
              <p className="text-sm text-gray-600">DFW metro Medigap solutions</p>
            </Link>
            <Link href="/medicare-supplement-nassau-county" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Nassau County, NY</h3>
              <p className="text-sm text-gray-600">Long Island premium coverage</p>
            </Link>
            <Link href="/medicare-supplement-orange-county-california" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <h3 className="font-semibold text-gray-900">Orange County, CA</h3>
              <p className="text-sm text-gray-600">Southern California Medigap plans</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Our licensed agents can help you compare plans and find the best Medicare Supplement coverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact an Agent
            </Link>
            <Link
              href="/medicare-comparison-tool"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
