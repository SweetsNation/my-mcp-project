import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Honolulu County Hawaii Medicare Advantage 2025 - Oahu Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Honolulu County, Hawaii (Oahu). Compare plans, providers, and benefits for Honolulu, Pearl City, Kailua, and surrounding areas with access to Queen\'s Medical Center, Kaiser Permanente, and Straub Medical Center.',
  keywords: 'Honolulu County Hawaii Medicare, Medicare Advantage Honolulu County, Oahu Medicare plans, Honolulu Medicare coverage, Hawaii Medicare 2025, Queens Medical Center Medicare'
};

export default function HonoluluCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Honolulu County Hawaii Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Honolulu County (Oahu), Hawaii.
            Compare coverage options for Honolulu, Pearl City, Kailua, Kaneohe, and surrounding areas
            with access to The Queen's Medical Center, Kaiser Permanente Hawaii, Straub Medical Center, and other leading island providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Top Medicare Plans in Honolulu County (Oahu)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Kaiser Permanente Hawaii</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                specifically designed for Hawaii residents with full Oahu coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Integrated Hawaii healthcare system</li>
                <li>• Inter-island coverage included</li>
                <li>• Coordinated care model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with special
                considerations for Hawaii island residents and travel benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Nationwide emergency coverage</li>
                <li>• Inter-island travel benefits</li>
                <li>• Telehealth services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                island healthcare access and cultural competency in Honolulu County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Island-specific networks</li>
                <li>• Cultural competency programs</li>
                <li>• Transportation benefits</li>
                <li>• Wellness programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Oahu Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Honolulu Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Honolulu</li>
                <li>• Waikiki</li>
                <li>• Downtown</li>
                <li>• Chinatown</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Central Oahu</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pearl City</li>
                <li>• Aiea</li>
                <li>• Mililani</li>
                <li>• Wahiawa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Windward Oahu</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kailua</li>
                <li>• Kaneohe</li>
                <li>• Kaaawa</li>
                <li>• Laie</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">West & North Shore</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kapolei</li>
                <li>• Waipahu</li>
                <li>• Haleiwa</li>
                <li>• Waianae</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Major Healthcare Providers in Honolulu County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  The Queen's Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Moanalua Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Straub Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Castle Medical Center
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-teal-700 mb-4">Specialized Island Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inter-island medical transport
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Native Hawaiian health programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Telemedicine services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multi-cultural care teams
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Medicare Advantage Benefits in Honolulu County
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
                <h3 className="text-xl font-medium text-blue-700 mb-4">Enhanced Hawaii Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Inter-island medical transportation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cultural competency programs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Natural disaster coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Traditional healing integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Special Considerations for Oahu Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Island Healthcare Access</h3>
              <p className="text-sm text-blue-700">
                Oahu offers the most comprehensive healthcare infrastructure in Hawaii
                with multiple hospitals and specialty centers serving the entire state.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Cultural Healthcare</h3>
              <p className="text-sm text-teal-700">
                Medicare plans that respect and integrate Native Hawaiian and
                Pacific Islander cultural practices into modern healthcare delivery.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Natural Disaster Preparedness</h3>
              <p className="text-sm text-green-700">
                Special coverage for tsunamis, hurricanes, and volcanic activity
                including emergency evacuation and mainland treatment options.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Resources for Honolulu County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Hawaii SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services for Oahu residents</p>
              <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 underline">
                Find Island Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare Medicare plans with Hawaii-specific benefits</p>
              <Link href="/contact" className="text-teal-600 hover:text-teal-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Cultural Healthcare Info</h3>
              <p className="text-gray-600 mb-4">Learn about culturally integrated healthcare options</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-teal-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Oahu Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Honolulu County (Oahu), Hawaii.
            Access premier healthcare providers throughout Honolulu, Pearl City, Kailua, and surrounding communities
            with inter-island coverage and culturally competent care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Oahu Plans
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