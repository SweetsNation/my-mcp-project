import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Francisco County California Medicare Advantage 2025 - Best Medicare Plans',
  description: 'Find the best Medicare Advantage plans in San Francisco County, California. Compare plans, providers, and benefits for San Francisco, Daly City, and surrounding areas with access to UCSF Health, Kaiser Permanente, and Sutter Health.',
  keywords: 'San Francisco County California Medicare, Medicare Advantage San Francisco, San Francisco Medicare plans, UCSF Health Medicare, California Medicare 2025, Bay Area Medicare'
};

export default function SanFranciscoCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          San Francisco County California Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in San Francisco County, California.
            Compare coverage options for San Francisco, Daly City, and surrounding Bay Area communities
            with access to UCSF Health, Kaiser Permanente, Sutter Health, and other world-class healthcare providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Top Medicare Plans in San Francisco County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Kaiser Permanente Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                through Kaiser Permanente's extensive San Francisco Bay Area network.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Integrated healthcare system</li>
                <li>• Prescription drug coverage included</li>
                <li>• Coordinated care model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to San Francisco's premier healthcare institutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Access to UCSF Health</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Anthem Blue Cross</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with flexible
                provider networks throughout San Francisco County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Flexible provider networks</li>
                <li>• Competitive premiums</li>
                <li>• Extra benefits included</li>
                <li>• Local customer service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            San Francisco County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">San Francisco City</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown San Francisco</li>
                <li>• Mission District</li>
                <li>• Pacific Heights</li>
                <li>• Castro District</li>
                <li>• Richmond District</li>
                <li>• Sunset District</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Northern SF County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Marina District</li>
                <li>• Russian Hill</li>
                <li>• North Beach</li>
                <li>• Financial District</li>
                <li>• Chinatown</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Southern SF County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Daly City</li>
                <li>• South San Francisco</li>
                <li>• Brisbane</li>
                <li>• Colma</li>
                <li>• Pacifica</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            World-Class Healthcare Providers in San Francisco County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UCSF Health System
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente San Francisco
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sutter Health Bay Area
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  California Pacific Medical Center
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-purple-700 mb-4">Specialized Centers of Excellence</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UCSF Comprehensive Cancer Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UCSF Heart and Vascular Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UCSF Neurological Institute
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced research hospitals
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Medicare Advantage Benefits in San Francisco County
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
                <h3 className="text-xl font-medium text-blue-700 mb-4">Enhanced Bay Area Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to world-class research hospitals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation benefits for SF transit
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telemedicine and digital health
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and fitness benefits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Special Considerations for San Francisco Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">World-Class Medical Access</h3>
              <p className="text-sm text-blue-700">
                San Francisco offers unparalleled access to cutting-edge medical research,
                clinical trials, and specialized treatments through UCSF and other premier institutions.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Urban Healthcare Navigation</h3>
              <p className="text-sm text-purple-700">
                Medicare plans designed for city living with transportation benefits,
                telehealth options, and convenient urban clinic locations.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Innovation in Healthcare</h3>
              <p className="text-sm text-green-700">
                Access to the latest medical technologies, digital health platforms,
                and innovative treatment approaches in the heart of Silicon Valley medicine.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Resources for San Francisco County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">California HICAP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in San Francisco County</p>
              <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your San Francisco zip code</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in San Francisco Medicare plans</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect San Francisco Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in San Francisco County, California.
            Access world-class healthcare providers throughout the Bay Area
            with comprehensive coverage and innovative benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare San Francisco Plans
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