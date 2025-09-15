import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kauai County Hawaii Medicare Advantage 2025 - Garden Isle Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Kauai County, Hawaii. Compare plans, providers, and benefits for Lihue, Kapaa, Waimea, and surrounding areas with access to Wilcox Medical Center, Kaiser Permanente, and island-specific healthcare.',
  keywords: 'Kauai County Hawaii Medicare, Medicare Advantage Kauai County, Kauai Medicare plans, Lihue Medicare coverage, Hawaii Medicare 2025, Wilcox Medical Center Medicare'
};

export default function KauaiCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-8 text-center">
          Kauai County Hawaii Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Kauai County, Hawaii.
            Compare coverage options for Lihue, Kapaa, Waimea, Hanalei, and surrounding Garden Isle communities
            with access to Wilcox Medical Center, Kaiser Permanente Hawaii, and specialized island healthcare providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Top Medicare Plans in Kauai County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Kaiser Permanente Hawaii</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                specifically designed for Hawaii residents with Kauai island coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Integrated Hawaii healthcare system</li>
                <li>• Inter-island coverage included</li>
                <li>• Coordinated care model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
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

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                island healthcare access and cultural competency in Kauai County.
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

        <section className="mb-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            Kauai County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">East Kauai</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lihue</li>
                <li>• Kapaa</li>
                <li>• Wailua</li>
                <li>• Anahola</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">North Shore</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hanalei</li>
                <li>• Princeville</li>
                <li>• Kilauea</li>
                <li>• Haena</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">South Shore</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Poipu</li>
                <li>• Koloa</li>
                <li>• Kalaheo</li>
                <li>• Lawai</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">West Kauai</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Waimea</li>
                <li>• Hanapepe</li>
                <li>• Eleele</li>
                <li>• Kekaha</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Healthcare Providers in Kauai County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Major Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wilcox Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Kauai Clinic
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  West Kauai Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kauai Veterans Memorial Hospital
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
                  Native Hawaiian health programs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Telemedicine services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rural health clinics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Medicare Advantage Benefits in Kauai County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-green-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-green-700 mb-4">Enhanced Hawaii Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Inter-island medical transportation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cultural competency programs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Natural disaster coverage
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
          <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
            Special Considerations for Kauai County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Remote Island Healthcare</h3>
              <p className="text-sm text-green-700">
                Kauai's remote location requires Medicare plans that understand
                island healthcare needs including limited local specialists and inter-island transport.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Cultural Healthcare</h3>
              <p className="text-sm text-blue-700">
                Medicare plans that respect and integrate Native Hawaiian and
                Pacific Islander cultural practices into modern healthcare delivery.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Natural Disaster Preparedness</h3>
              <p className="text-sm text-teal-700">
                Special coverage for tsunamis, hurricanes, and flooding
                including emergency evacuation and mainland treatment options.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
            Resources for Kauai County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Hawaii SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services for Kauai County residents</p>
              <Link href="/medicare-advantage" className="text-green-600 hover:text-green-800 underline">
                Find Island Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare Medicare plans with Hawaii-specific benefits</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Cultural Healthcare Info</h3>
              <p className="text-gray-600 mb-4">Learn about culturally integrated healthcare options</p>
              <Link href="/contact" className="text-teal-600 hover:text-teal-800 underline">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-green-600 to-teal-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Kauai County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Kauai County, Hawaii.
            Access quality healthcare providers throughout the Garden Isle
            with inter-island coverage and culturally competent care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Kauai Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-green-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}