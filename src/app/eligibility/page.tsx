import type { Metadata } from 'next';
import EligibilityAssessment from '@/components/EligibilityAssessment';
import ServiceRecommendations from '@/components/ServiceRecommendations';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';

export const metadata: Metadata = {
  title: 'Medicare & Health Insurance Eligibility Assessment | Check Your Coverage Options | El-Mag Insurance',
  description: 'Complete eligibility assessment for Medicare and health insurance services. Check your qualification for Medicare Advantage, Medicare Supplement, Health Marketplace, and other programs based on age, income, and circumstances.',
  keywords: 'Medicare eligibility, health insurance eligibility, Medicare qualification, eligibility assessment, Medicare Advantage eligibility, Medicare Supplement eligibility, Health Marketplace eligibility',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/eligibility',
  },
};

export default function EligibilityPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Eligibility Assessment</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover which Medicare and health insurance services you're eligible for based on your age, 
              income, location, and special circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Assessment Component */}
      <EligibilityAssessment 
        showForm={true}
        showResults={true}
        userContext="general"
        maxRecommendations={8}
      />

      {/* Service Recommendations */}
      <ServiceRecommendations 
        userContext="general"
        showEligibilityCheck={false}
        maxRecommendations={6}
        showMatchScores={true}
        showAlternatives={true}
      />

      {/* Eligibility Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📋 Eligibility Programs Overview</h2>
            <p className="text-lg text-gray-600">
              Understanding the different eligibility criteria for various Medicare and health insurance programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medicare Advantage</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Age:</strong> 65+ or disability</div>
                <div><strong>Income:</strong> No limit</div>
                <div><strong>Enrollment:</strong> IEP, AEP, SEP</div>
                <div><strong>Cost:</strong> $0 - $150/month</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medicare Supplement</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Age:</strong> 65+ or disability</div>
                <div><strong>Income:</strong> No limit</div>
                <div><strong>Enrollment:</strong> Medigap OEP</div>
                <div><strong>Cost:</strong> $100 - $400/month</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Marketplace</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Age:</strong> Under 65</div>
                <div><strong>Income:</strong> 100-400% FPL</div>
                <div><strong>Enrollment:</strong> OEP, SEP</div>
                <div><strong>Cost:</strong> Subsidized</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medicare Extra Help</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Age:</strong> Medicare eligible</div>
                <div><strong>Income:</strong> ≤150% FPL</div>
                <div><strong>Enrollment:</strong> Year-round</div>
                <div><strong>Cost:</strong> $0 - $10/month</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medicaid</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Age:</strong> Any age</div>
                <div><strong>Income:</strong> ≤138% FPL</div>
                <div><strong>Enrollment:</strong> Year-round</div>
                <div><strong>Cost:</strong> Low/no cost</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">VA Health Benefits</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Age:</strong> Any age</div>
                <div><strong>Income:</strong> Varies by priority</div>
                <div><strong>Enrollment:</strong> Year-round</div>
                <div><strong>Cost:</strong> Varies by group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Factors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Key Eligibility Factors</h2>
            <p className="text-lg text-gray-600">
              Understanding what determines your eligibility for different programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Factors</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Age</h4>
                    <p className="text-gray-600 text-sm">Most Medicare programs require age 65+, but disability can provide early eligibility.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Income</h4>
                    <p className="text-gray-600 text-sm">Federal Poverty Level (FPL) determines eligibility for subsidies and assistance programs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600 text-sm">State and county determine available plans and program variations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Special Circumstances</h4>
                    <p className="text-gray-600 text-sm">Disability, veteran status, tribal membership, and other factors can provide eligibility.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Periods</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Initial Enrollment Period (IEP)</h4>
                  <p className="text-blue-700 text-sm">7 months around your 65th birthday or disability onset.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Annual Enrollment Period (AEP)</h4>
                  <p className="text-green-700 text-sm">October 15 - December 7 each year for Medicare changes.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Open Enrollment (Marketplace)</h4>
                  <p className="text-purple-700 text-sm">November 1 - January 15 for ACA plans.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Special Enrollment Periods (SEP)</h4>
                  <p className="text-yellow-700 text-sm">Available for qualifying life events throughout the year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools for Eligibility Research */}
      <ToolLinking 
        currentTool=""
        userContext="general"
        showRelatedTools={true}
        maxTools={6}
        showFeatures={true}
        layout="grid"
      />

      {/* Resources for Eligibility Understanding */}
      <ResourceLinking 
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={6}
        maxTools={4}
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Check Your Eligibility?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized guidance and discover the best Medicare and health insurance options for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#eligibility-assessment"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Start Eligibility Assessment
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
