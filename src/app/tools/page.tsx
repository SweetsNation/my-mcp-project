import type { Metadata } from 'next';
import Link from 'next/link';
import ToolLinking from '@/components/ToolLinking';

export const metadata: Metadata = {
  title: 'Medicare & Health Insurance Tools | Calculators, Comparisons & More | El-Mag Insurance',
  description: 'Free Medicare and health insurance tools including cost calculators, plan comparison tools, enrollment timelines, and more. Make informed decisions about your healthcare coverage.',
  keywords: 'Medicare tools, health insurance calculators, Medicare comparison tools, cost calculators, enrollment tools, plan finders',
};

export default function ToolsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Insurance Tools & Calculators</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Make informed decisions about your healthcare coverage with our comprehensive collection of interactive tools and calculators.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Tools</h2>
            <p className="text-lg text-gray-600">Start with these essential tools to understand your healthcare costs and options</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Medicare Cost Calculator */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">🧮</div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Calculator</span>
                </div>
                <h3 className="text-xl font-bold mt-4">Medicare Cost Calculator</h3>
                <p className="text-blue-100 mt-2">Estimate your total Medicare costs including premiums, deductibles, and out-of-pocket expenses</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ 3-5 minutes</span>
                  <span className="text-sm text-gray-500">🎯 High Priority</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Premium calculation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Deductible analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Out-of-pocket projections
                  </li>
                </ul>
                <Link 
                  href="/medicare-cost-calculator"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                >
                  Calculate Medicare Costs
                </Link>
              </div>
            </div>

            {/* Health Insurance Cost Calculator */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-green-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">🏥</div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Calculator</span>
                </div>
                <h3 className="text-xl font-bold mt-4">Health Insurance Cost Calculator</h3>
                <p className="text-green-100 mt-2">Calculate ACA Marketplace costs including subsidies, tax credits, and out-of-pocket expenses</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ 5-7 minutes</span>
                  <span className="text-sm text-gray-500">🎯 High Priority</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Subsidy calculation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Tax credit estimation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Plan type comparison
                  </li>
                </ul>
                <Link 
                  href="/health-insurance-cost-calculator"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors text-center block"
                >
                  Calculate Marketplace Costs
                </Link>
              </div>
            </div>

            {/* Medicare Comparison Tool */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">⚖️</div>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Comparison</span>
                </div>
                <h3 className="text-xl font-bold mt-4">Medicare Plan Comparison Tool</h3>
                <p className="text-purple-100 mt-2">Compare Medicare Advantage vs Medicare Supplement plans with personalized recommendations</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">⏱️ 7-10 minutes</span>
                  <span className="text-sm text-gray-500">🎯 High Priority</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Side-by-side comparison
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Personalized recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Expert guidance
                  </li>
                </ul>
                <Link 
                  href="/medicare-comparison-tool"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center block"
                >
                  Compare Medicare Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tool Categories</h2>
            <p className="text-lg text-gray-600">Find the right tool for your specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calculators */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Calculators</h3>
              <p className="text-gray-600 mb-4">Estimate costs, calculate savings, and understand your financial obligations</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Medicare Cost Calculator</li>
                <li>• Health Insurance Cost Calculator</li>
                <li>• Subsidy Calculator</li>
              </ul>
              <Link href="#calculators" className="text-blue-600 font-medium hover:text-blue-800">
                View All Calculators →
              </Link>
            </div>

            {/* Comparison Tools */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comparison Tools</h3>
              <p className="text-gray-600 mb-4">Compare different plans, benefits, and options side-by-side</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Medicare Plan Comparison</li>
                <li>• Advantage vs Supplement</li>
                <li>• Plan Feature Analysis</li>
              </ul>
              <Link href="#comparison" className="text-purple-600 font-medium hover:text-purple-800">
                View All Comparisons →
              </Link>
            </div>

            {/* Timeline Tools */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timeline Tools</h3>
              <p className="text-gray-600 mb-4">Track important dates, deadlines, and enrollment periods</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Medicare Enrollment Timeline</li>
                <li>• Open Enrollment Checklist</li>
                <li>• Deadline Tracker</li>
              </ul>
              <Link href="#timeline" className="text-orange-600 font-medium hover:text-orange-800">
                View All Timelines →
              </Link>
            </div>

            {/* Finders */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plan Finders</h3>
              <p className="text-gray-600 mb-4">Discover available plans in your area and check eligibility</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Medicare Advantage Finder</li>
                <li>• Marketplace Plan Finder</li>
                <li>• Network Search</li>
              </ul>
              <Link href="#finders" className="text-indigo-600 font-medium hover:text-indigo-800">
                View All Finders →
              </Link>
            </div>

            {/* Quizzes */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quizzes & Assessments</h3>
              <p className="text-gray-600 mb-4">Test your knowledge and get personalized recommendations</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Extra Help Qualification Quiz</li>
                <li>• AI Medicare Assistant</li>
                <li>• Plan Selection Quiz</li>
              </ul>
              <Link href="#quizzes" className="text-yellow-600 font-medium hover:text-yellow-800">
                View All Quizzes →
              </Link>
            </div>

            {/* Lookup Tools */}
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lookup Tools</h3>
              <p className="text-gray-600 mb-4">Search databases and find specific information</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Part D Formulary Lookup</li>
                <li>• Drug Coverage Search</li>
                <li>• Provider Directory</li>
              </ul>
              <Link href="#lookup" className="text-red-600 font-medium hover:text-red-800">
                View All Lookups →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Tool Linking */}
      <ToolLinking 
        currentTool=""
        userContext="general"
        showRelatedTools={false}
        maxTools={12}
        showFeatures={true}
        layout="grid"
      />

      {/* How to Use Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use Our Tools</h2>
            <p className="text-lg text-gray-600">Get the most out of our interactive tools and calculators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Tool</h3>
              <p className="text-gray-600">Select the tool that matches your needs - cost calculation, plan comparison, or enrollment assistance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter Your Information</h3>
              <p className="text-gray-600">Provide accurate details about your situation to get the most relevant results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Expert Help</h3>
              <p className="text-gray-600">Use your results to make informed decisions, then connect with our agents for enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Using These Tools?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our licensed insurance experts can help you interpret your results and find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Get Expert Guidance
            </Link>
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
