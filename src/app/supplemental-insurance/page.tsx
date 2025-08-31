import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supplemental Insurance | El-Mag Insurance',
  description: 'Get additional coverage for specific needs with supplemental insurance plans. Protect yourself from unexpected medical costs.',
  keywords: 'Supplemental Insurance, additional coverage, medical insurance, accident insurance, critical illness',
};

export default function SupplementalInsurancePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Supplemental Insurance
          </h1>
          <p className="text-xl text-green-100 mb-6">
            Additional coverage for specific needs and unexpected medical expenses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Quote
            </Link>
              <Link
              href="/resources"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Supplemental Insurance?</h2>
            <p className="text-gray-600 mb-4">
              Supplemental insurance provides additional coverage beyond your primary health insurance plan. 
              It helps cover costs that your main insurance doesn't, such as deductibles, copayments, and specific medical events.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fill coverage gaps</li>
              <li>Protect against high out-of-pocket costs</li>
              <li>Cover specific medical conditions</li>
              <li>Provide cash benefits for qualifying events</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Supplemental Plans</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Accident Insurance</h3>
                <p className="text-sm text-gray-600">Coverage for accidental injuries and related expenses</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Critical Illness</h3>
                <p className="text-sm text-gray-600">Lump-sum benefits for serious medical conditions</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900">Hospital Indemnity</h3>
                <p className="text-sm text-gray-600">Daily benefits during hospital stays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Types Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Types of Supplemental Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospital Coverage</h3>
              <p className="text-gray-600">Daily benefits and lump-sum payments for hospital stays</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prescription Coverage</h3>
              <p className="text-gray-600">Help with medication costs and pharmacy expenses</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dental & Vision</h3>
              <p className="text-gray-600">Coverage for routine dental and vision care</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Supplemental Insurance?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Financial Protection</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Reduce out-of-pocket medical expenses</li>
                <li>• Protect your savings from unexpected costs</li>
                <li>• Provide cash benefits for qualifying events</li>
                <li>• Help cover deductibles and copayments</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Peace of Mind</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Know you're protected against major expenses</li>
                <li>• Focus on recovery, not medical bills</li>
                <li>• Maintain your standard of living</li>
                <li>• Protect your family's financial security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Protected?</h2>
          <p className="text-gray-600 mb-6">
            Our insurance specialists can help you find the right supplemental coverage 
            to protect you and your family from unexpected medical expenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/resources"
              className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              Download Guide
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
