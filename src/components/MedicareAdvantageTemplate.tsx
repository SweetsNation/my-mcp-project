'use client';

import Link from 'next/link';
import { MedicareAdvantageHero } from './MedicareAdvantageHero';
import { PlanComparisonTool } from './PlanComparisonTool';
import { BenefitsOverview } from './BenefitsOverview';
import { EnrollmentGuide } from './EnrollmentGuide';
import { FAQSection } from './FAQSection';
import { LocationData, ContentTemplate } from '@/lib/content-generator';
import { MedicarePlan } from '@/types/medicare';

interface Props {
  locationData?: LocationData;
  content?: ContentTemplate;
  plans?: MedicarePlan[];
}

export function MedicareAdvantageTemplate({ locationData, content, plans }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <MedicareAdvantageHero 
        headline={content?.heroHeadline}
        subtitle={content?.heroSubtitle}
        locationData={locationData}
      />

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900 font-medium">Medicare Advantage Plans</li>
          </ol>
        </nav>

        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {locationData ? `Medicare Advantage Plans in ${locationData.city}, ${locationData.state}` : 'What is Medicare Advantage?'}
          </h2>
          <div className="prose prose-lg max-w-none">
            {content?.introText ? (
              <div className="text-lg text-gray-700 whitespace-pre-line">
                {content.introText}
              </div>
            ) : (
              <>
                <p className="text-lg text-gray-700 mb-4">
                  Medicare Advantage (Part C) is a popular alternative to Original Medicare that combines 
                  Medicare Parts A and B into a single plan offered by private insurance companies. 
                  These plans often include prescription drug coverage (Part D) and additional benefits 
                  like dental, vision, and hearing aids at no extra cost.
                </p>
                <p className="text-gray-700">
                  With over 26 million Americans enrolled in Medicare Advantage plans, these comprehensive 
                  health plans offer more benefits and often lower costs than Original Medicare alone.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Plan Comparison Tool */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compare Medicare Advantage Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our interactive tool to compare plans side by side and find the perfect 
              Medicare Advantage plan for your needs and budget.
            </p>
          </div>
          <PlanComparisonTool />
        </section>

        {/* Benefits Overview */}
        <BenefitsOverview />

        {/* Cost Analysis */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Understanding Medicare Advantage Costs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Costs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Plan Premium:</strong> Many plans have $0 monthly premiums
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Medicare Part B Premium:</strong> You still pay your Part B premium (standard $174.70 in 2024)
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Part D Premium:</strong> Often included at no additional cost
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">When You Use Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Deductibles:</strong> Annual amount you pay before plan coverage begins
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Copayments:</strong> Fixed amounts for specific services
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900">Max Out-of-Pocket:</strong> Annual limit on your total costs (2024 limit: $8,850)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enrollment Guide */}
        <EnrollmentGuide />

        {/* FAQ Section */}
        <FAQSection />

        {/* Call to Action */}
        <section className="bg-primary-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Insurance Plan?
          </h2>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            Our licensed agents are standing by to help you compare plans and enroll in coverage 
            that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:331-343-2584"
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-block text-center"
            >
              Call 331-343-2584
            </a>
            <Link 
              href="/contact"
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block text-center"
            >
              Get Free Quote Online
            </Link>
          </div>
          <p className="text-primary-100 text-sm mt-4">
            Licensed agents available 7 days a week • No obligation • 100% free service
          </p>
        </section>

      </main>

    </div>
  );
}