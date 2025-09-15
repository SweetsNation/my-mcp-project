import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hawaii County Hawaii Medicare Advantage 2025 - Big Island Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Hawaii County, Hawaii (Big Island). Compare plans, providers, and benefits for Hilo, Kona, and Big Island residents with specialized island healthcare coverage.',
  keywords: 'Hawaii County Hawaii Medicare, Medicare Advantage Hawaii County, Big Island Medicare plans, Hilo Medicare coverage, Kona Medicare plans, Hawaii Medicare 2025'
};

export default function HawaiiCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8 text-center">
          Hawaii County Hawaii Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Hawaii County (Big Island).
            Compare coverage options for Hilo, Kona, Waimea, and surrounding areas
            with access to specialized island healthcare providers and inter-island coverage.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Medicare Plans for Hawaii County (Big Island)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-medium text-emerald-700 mb-4">Kaiser Permanente Hawaii</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                specifically designed for Hawaii residents across all islands.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" $0 premium options available</li>
                <li>" Integrated Hawaii healthcare system</li>
                <li>" Inter-island coverage included</li>
                <li>" Local provider networks</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with special
                considerations for Hawaii island residents and travel benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" AARP member benefits</li>
                <li>" Nationwide emergency coverage</li>
                <li>" Inter-island travel benefits</li>
                <li>" Telehealth services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                island healthcare access and mainland connections when needed.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" Island-specific networks</li>
                <li>" Emergency transportation coverage</li>
                <li>" Prescription drug coverage</li>
                <li>" Wellness programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-emerald-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-6">
            Big Island Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-emerald-700 mb-2">East Hawaii (Hilo)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Hilo</li>
                <li>" Pahoa</li>
                <li>" Mountain View</li>
                <li>" Volcano</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-700 mb-2">West Hawaii (Kona)</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Kailua-Kona</li>
                <li>" Captain Cook</li>
                <li>" Ocean View</li>
                <li>" Kealakehe</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-emerald-700 mb-2">North Hawaii</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Waimea</li>
                <li>" Waikoloa</li>
                <li>" Puako</li>
                <li>" Kohala</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Healthcare Providers in Hawaii County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-emerald-700 mb-4">Major Hospitals & Medical Centers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hilo Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kona Community Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  North Hawaii Community Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Moanalua (Oahu)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Island Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inter-island medical transport
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Helicopter emergency services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Telemedicine connections
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rural health clinics
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Special Medicare Benefits for Hawaii County Residents
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-4">Island-Specific Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Inter-island medical transportation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency helicopter transport
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mainland specialist referrals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rural area coverage enhancement
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-4">Enhanced Hawaii Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cultural competency in healthcare
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Natural disaster coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Volcanic activity health services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Traditional healing integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">
            Unique Considerations for Big Island Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">Geographic Challenges</h3>
              <p className="text-sm text-emerald-700">
                The Big Island's large size and diverse terrain require Medicare plans
                with enhanced transportation benefits and rural healthcare access.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Natural Disaster Preparedness</h3>
              <p className="text-sm text-blue-700">
                Special coverage for volcanic activity, tsunamis, and other natural
                disasters unique to Hawaii, including emergency evacuation benefits.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Cultural Healthcare</h3>
              <p className="text-sm text-teal-700">
                Medicare plans that respect and integrate Native Hawaiian cultural
                practices and traditional healing methods into modern healthcare.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">
            Resources for Hawaii County Medicare Recipients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">Hawaii SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services for Big Island residents</p>
              <Link href="/medicare-advantage" className="text-emerald-600 hover:text-emerald-800 underline">
                Find Island Counselors ’
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Island Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare Medicare plans with Hawaii-specific benefits</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Island Plans ’
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Cultural Healthcare Info</h3>
              <p className="text-gray-600 mb-4">Learn about culturally integrated healthcare options</p>
              <Link href="/contact" className="text-teal-600 hover:text-teal-800 underline">
                Learn More ’
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Medicare Coverage for Paradise Living
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Find Medicare Advantage plans designed for Hawaii County's unique island lifestyle.
            Get comprehensive coverage with inter-island transportation, emergency services,
            and culturally competent care throughout the Big Island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Big Island Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}