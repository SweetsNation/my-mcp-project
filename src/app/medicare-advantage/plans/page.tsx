import { Metadata } from 'next';
import { PlanComparisonTool } from '@/components/PlanComparisonTool';
import { MedicareAdvantageZipSearch } from '@/components/MedicareAdvantageZipSearch';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans - Compare & Find the Best Plan | El-Mag Insurance',
  description: 'Compare Medicare Advantage plans in your area. Find $0 premium plans with dental, vision & fitness benefits. Get free quotes from licensed agents.',
  keywords: 'Medicare Advantage plans, Medicare Part C, compare Medicare plans, $0 premium plans, dental vision coverage',
};

export default function MedicareAdvantagePlansPage({
  searchParams,
}: {
  searchParams: { zip?: string };
}) {
  const zipCode = searchParams.zip;

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://elmaginsurance.com/medicare-advantage/plans',
        url: 'https://elmaginsurance.com/medicare-advantage/plans',
        name: 'Medicare Advantage Plans - Compare & Find the Best Plan',
        description: 'Compare Medicare Advantage plans in your area. Find $0 premium plans with dental, vision & fitness benefits.',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://elmaginsurance.com/#website'
        }
      },
      {
        '@type': 'Service',
        name: 'Medicare Advantage Plan Comparison',
        description: 'Compare Medicare Advantage (Part C) plans including HMO, PPO, PFFS, and SNP options with comprehensive coverage comparison.',
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance'
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Medicare Advantage Plan Types',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Advantage HMO Plans',
                description: '$0 premium options with network-based care and comprehensive benefits'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Advantage PPO Plans',
                description: 'Flexible provider choice with in-network and out-of-network coverage'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medicare Advantage SNP Plans',
                description: 'Special Needs Plans for chronic conditions or dual-eligible beneficiaries'
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Medicare Advantage Plans
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Compare plans with $0 premiums, dental, vision & fitness benefits. 
            Find the perfect Medicare Advantage plan for your needs.
          </p>
          
          {/* ZIP Code Search */}
          <div className="max-w-md mx-auto">
            <MedicareAdvantageZipSearch />
          </div>
        </div>
      </section>

      {/* Plan Comparison Tool */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare Medicare Advantage Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use our interactive tool to compare plans side by side and find the perfect 
              Medicare Advantage plan for your needs and budget.
            </p>
            {zipCode && (
              <p className="text-lg text-blue-600 font-medium mt-4">
                Showing plans for ZIP code: {zipCode}
              </p>
            )}
          </div>
          
          <PlanComparisonTool />
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Medicare Advantage Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the additional benefits that make Medicare Advantage plans so valuable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dental Coverage</h3>
              <p className="text-gray-600 text-sm">Routine dental care, cleanings, and basic procedures</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision Benefits</h3>
              <p className="text-gray-600 text-sm">Eye exams, glasses, and contact lenses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hearing Aids</h3>
              <p className="text-gray-600 text-sm">Hearing aid coverage and fittings</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fitness Programs</h3>
              <p className="text-gray-600 text-sm">Gym memberships and wellness programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing a Plan?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our licensed Medicare specialists are here to help you find the perfect plan. 
            Get personalized guidance and free quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="/team" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Meet Our Specialists
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

