import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Security Analysis | El-Mag Insurance',
  description: 'Get expert analysis to maximize your Social Security benefits. Learn about claiming strategies and retirement planning.',
  keywords: 'Social Security, retirement planning, benefits analysis, claiming strategies',
};

export default function SocialSecurityAnalysisPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Social Security Analysis
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Maximize your Social Security benefits with expert analysis and strategic claiming strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Analysis
            </Link>
            <Link
              href="/resources"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Social Security Analysis Matters</h2>
            <p className="text-gray-600 mb-4">
              Social Security benefits can vary significantly based on when you claim them. Our analysis helps you understand 
              the optimal claiming strategy for your unique situation.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Maximize lifetime benefits</li>
              <li>Coordinate with Medicare timing</li>
              <li>Consider spousal benefits</li>
              <li>Plan for tax implications</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Analysis Factors</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Claiming Age</h3>
                <p className="text-sm text-gray-600">Early (62), Full Retirement Age, or Delayed (70)</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Life Expectancy</h3>
                <p className="text-sm text-gray-600">Family history and health factors</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Other Income</h3>
                <p className="text-sm text-gray-600">Pensions, investments, and part-time work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Analysis Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefit Calculation</h3>
              <p className="text-gray-600">Accurate estimates based on your earnings history</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Claiming Strategy</h3>
              <p className="text-gray-600">Optimal timing recommendations for your situation</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Retirement Planning</h3>
              <p className="text-gray-600">Integration with overall retirement strategy</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Analysis?</h2>
          <p className="text-gray-600 mb-6">
            Our retirement planning specialists can provide a comprehensive Social Security analysis 
            to help you make informed decisions about your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Download Guide
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
