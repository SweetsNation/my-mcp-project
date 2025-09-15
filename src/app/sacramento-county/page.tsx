import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sacramento County California Medicare Advantage 2025 - Best Medicare Plans & Coverage',
  description: 'Find the best Medicare Advantage plans in Sacramento County, California. Compare plans, providers, and benefits for Sacramento, Elk Grove, and surrounding areas with access to UC Davis, Sutter Health, and Kaiser Permanente.',
  keywords: 'Sacramento County California Medicare, Medicare Advantage Sacramento County, Sacramento Medicare plans, Elk Grove Medicare coverage, California Medicare 2025'
};

export default function SacramentoCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Sacramento County California Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Sacramento County, California.
            Compare coverage options for Sacramento, Elk Grove, Folsom, and surrounding areas
            with access to UC Davis Health, Sutter Health, and Kaiser Permanente networks.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Top Medicare Plans in Sacramento County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Kaiser Permanente Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                through Kaiser Permanente's extensive Sacramento County network.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" $0 premium options available</li>
                <li>" Integrated healthcare system</li>
                <li>" Prescription drug coverage included</li>
                <li>" Coordinated care model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to Sacramento County healthcare providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" AARP member benefits</li>
                <li>" Nationwide coverage</li>
                <li>" Telehealth services</li>
                <li>" Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Anthem Blue Cross</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with flexible
                provider networks throughout Sacramento County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" Flexible provider networks</li>
                <li>" Competitive premiums</li>
                <li>" Extra benefits included</li>
                <li>" Local customer service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Sacramento County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Sacramento Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Downtown Sacramento</li>
                <li>" Midtown Sacramento</li>
                <li>" North Sacramento</li>
                <li>" South Sacramento</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Elk Grove Area</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Elk Grove</li>
                <li>" Laguna Creek</li>
                <li>" Franklin</li>
                <li>" Wilton</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Other Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Folsom</li>
                <li>" Rancho Cordova</li>
                <li>" Citrus Heights</li>
                <li>" Fair Oaks</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Sacramento County Healthcare Providers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Major Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UC Davis Health System
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sutter Health Sacramento
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Sacramento
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mercy General Hospital
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Primary Care & Specialists</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family medicine practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Internal medicine physicians
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cardiology and specialty care
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Urgent care centers
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Medicare Advantage Benefits in Sacramento County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Enhanced California Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and gym memberships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth and virtual care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Medicare Enrollment Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Begins</h3>
              <p className="text-sm text-gray-600">Start reviewing Sacramento County plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">DEC 7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Deadline</h3>
              <p className="text-sm text-gray-600">Final day to enroll or change plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">JAN 1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Coverage Starts</h3>
              <p className="text-sm text-gray-600">New 2025 benefits begin</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">MAR 31</div>
              <h3 className="font-semibold text-gray-900 mb-2">MA OEP Ends</h3>
              <p className="text-sm text-gray-600">Last chance to switch MA plans</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Resources for Sacramento County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">California HICAP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Sacramento County</p>
              <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 underline">
                Find Local Counselors ’
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Sacramento County zip code</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Compare Plans ’
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Sacramento County Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help ’
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Sacramento County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Sacramento County, California.
            Access quality healthcare providers throughout Sacramento, Elk Grove, and surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Sacramento County Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}