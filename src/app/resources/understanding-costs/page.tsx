import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateArticlePageSchema } from '@/lib/schema/article-schema';

// Structured Data for SEO
const structuredData = generateArticlePageSchema({
  pagePath: '/resources/understanding-costs',
  pageTitle: 'Understanding Medicare Advantage Costs',
  pageDescription: 'Learn about Medicare Advantage costs including premiums, deductibles, copays, and out-of-pocket maximums.',
  datePublished: '2024-03-05',
  category: 'Costs',
  wordCount: 1050
});

export const metadata: Metadata = {
  title: 'Understanding Medicare Advantage Costs - El-Mag Insurance',
  description: 'Learn about Medicare Advantage costs including premiums, deductibles, copays, and out-of-pocket maximums. Get expert guidance from El-Mag Insurance.',
  keywords: 'Medicare Advantage costs, premiums, deductibles, copays, out-of-pocket maximum, Medicare expenses',
  alternates: {
    canonical: 'https://elmaginsurance.com/resources/understanding-costs',
  },
};

export default function UnderstandingCostsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: 'Understanding Medicare Costs', href: '/resources/understanding-costs' }
          ]} 
        />
        
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Medicare Advantage Costs | Budget Confidently
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Navigate the various costs associated with Medicare Advantage plans and learn how to budget for your healthcare expenses effectively.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Monthly Premium</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-4">
                  The monthly premium is what you pay each month for your Medicare Advantage plan, in addition to your Medicare Part B premium.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>$0 Premium Plans:</strong> Many Medicare Advantage plans have $0 monthly premiums</li>
                  <li><strong>Low-Premium Options:</strong> Plans with small monthly premiums often offer additional benefits</li>
                  <li><strong>Payment Methods:</strong> Premiums can be deducted from Social Security or paid directly</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deductibles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Medical Deductible</h3>
                  <p className="text-gray-700 mb-3">
                    The amount you pay for medical services before your plan starts to pay.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Ranges from $0 to several hundred dollars</li>
                    <li>Some services may be exempt from the deductible</li>
                    <li>Resets annually on January 1st</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">Drug Deductible</h3>
                  <p className="text-gray-700 mb-3">
                    The amount you pay for prescription drugs before coverage begins.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Maximum allowed: $545 in 2025</li>
                    <li>Many plans have $0 drug deductibles</li>
                    <li>Applies only to covered medications</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copayments vs. Coinsurance</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Copayments (Copays)</h3>
                    <p className="text-gray-700 mb-3">A fixed dollar amount you pay for services.</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Primary Care Visit:</span>
                        <span className="font-medium">$0-$25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Specialist Visit:</span>
                        <span className="font-medium">$35-$50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Room:</span>
                        <span className="font-medium">$90-$120</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Coinsurance</h3>
                    <p className="text-gray-700 mb-3">A percentage of the cost you pay for services.</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Hospital Stay:</span>
                        <span className="font-medium">10-20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Outpatient Surgery:</span>
                        <span className="font-medium">15-25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durable Medical Equipment:</span>
                        <span className="font-medium">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Out-of-Pocket Maximum</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Your Financial Safety Net</h3>
                <p className="text-gray-700 mb-4">
                  The most you'll pay for covered medical services in a year. Once you reach this limit, your plan pays 100% of covered costs.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800">2025 Limits:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
                      <li>In-Network: $8,850 maximum</li>
                      <li>Combined In/Out-of-Network: $13,300 maximum</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">What Counts:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
                      <li>Deductibles, copays, coinsurance</li>
                      <li>Does NOT include monthly premiums</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prescription Drug Costs</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">Drug Coverage Phases</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-300 pl-4">
                    <h4 className="font-medium text-gray-800">Initial Coverage</h4>
                    <p className="text-sm text-gray-600">You pay copays or coinsurance until total drug costs reach $5,030</p>
                  </div>
                  <div className="border-l-4 border-indigo-300 pl-4">
                    <h4 className="font-medium text-gray-800">Coverage Gap</h4>
                    <p className="text-sm text-gray-600">You pay no more than 25% for brand-name and generic drugs</p>
                  </div>
                  <div className="border-l-4 border-indigo-300 pl-4">
                    <h4 className="font-medium text-gray-800">Catastrophic Coverage</h4>
                    <p className="text-sm text-gray-600">After $8,000 in out-of-pocket costs, you pay small copays or 5% coinsurance</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cost Comparison Tips</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Compare Total Annual Costs</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Monthly premiums × 12 months</li>
                      <li>Expected medical expenses</li>
                      <li>Prescription drug costs</li>
                      <li>Potential out-of-pocket maximum</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Use Medicare Tools</h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Medicare Plan Finder on Medicare.gov</li>
                      <li>Plan comparison worksheets</li>
                      <li>Drug formulary checker</li>
                      <li>Provider directory verification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Cost Considerations</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Extra Help (Low Income Subsidy)</h3>
                  <p className="text-gray-700 text-sm">
                    If you qualify for Extra Help, you may pay $0-$4.50 for generic drugs and $0-$11.20 for brand-name drugs.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Late Enrollment Penalties</h3>
                  <p className="text-gray-700 text-sm">
                    Avoid penalties by enrolling during your Initial Enrollment Period or Annual Open Enrollment.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-blue-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Get Personalized Cost Analysis</h2>
              <p className="mb-4">
                Understanding Medicare costs can be complex. Our licensed agents can help you compare plans and estimate your annual healthcare expenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Free Cost Analysis
                </Link>
                <Link 
                  href="tel:331-343-2584" 
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Call Now: 331-343-2584
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}