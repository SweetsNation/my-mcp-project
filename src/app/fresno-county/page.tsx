import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fresno County California Medicare Advantage 2025 - Central Valley Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Fresno County, California. Compare plans, providers, and benefits for Fresno, Clovis, Selma, and surrounding areas with access to Saint Agnes Medical Center, Community Medical Centers, and Kaiser Permanente.',
  keywords: 'Fresno County California Medicare, Medicare Advantage Fresno County, Fresno Medicare plans, Central Valley Medicare coverage, California Medicare 2025, Saint Agnes Medicare'
};

export default function FresnoCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-8 text-center">
          Fresno County California Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Fresno County, California.
            Compare coverage options for Fresno, Clovis, Selma, Reedley, and surrounding Central Valley areas
            with access to Saint Agnes Medical Center, Community Medical Centers, Kaiser Permanente, and other premier California providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">
            Top Medicare Plans in Fresno County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-medium text-yellow-700 mb-4">Kaiser Permanente Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                through Kaiser Permanente's Fresno and Central Valley network.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Integrated healthcare system</li>
                <li>• Prescription drug coverage included</li>
                <li>• Coordinated care model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to Fresno County's major healthcare providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Access to Saint Agnes Medical Center</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Anthem Blue Cross</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with flexible
                provider networks throughout Fresno County and Central Valley.
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

        <section className="mb-16 bg-yellow-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-6">
            Fresno County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-2">Central Fresno County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fresno</li>
                <li>• Clovis</li>
                <li>• Herndon</li>
                <li>• Friant</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-2">West Fresno County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coalinga</li>
                <li>• Huron</li>
                <li>• San Joaquin</li>
                <li>• Tranquillity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-2">East Fresno County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Selma</li>
                <li>• Reedley</li>
                <li>• Dinuba</li>
                <li>• Sanger</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-yellow-700 mb-2">South Fresno County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fowler</li>
                <li>• Caruthers</li>
                <li>• Laton</li>
                <li>• Riverdale</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">
            Major Healthcare Providers in Fresno County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-yellow-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Saint Agnes Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community Medical Centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Fresno
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UCSF Fresno
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Care Centers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cancer treatment centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cardiac care specialists
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rural health clinics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Agricultural health programs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">
            Medicare Advantage Benefits in Fresno County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-yellow-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-yellow-700 mb-4">Enhanced Central Valley Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rural healthcare access programs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bilingual services (Spanish/English)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Agricultural worker health programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">
            Special Considerations for Fresno County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Rural Healthcare Access</h3>
              <p className="text-sm text-yellow-700">
                Medicare plans designed to serve Fresno County's rural communities
                with extended networks and transportation benefits.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Bilingual Services</h3>
              <p className="text-sm text-blue-700">
                Many Medicare plans in Fresno County offer bilingual customer service
                and materials in Spanish to serve the diverse community.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Agricultural Health Focus</h3>
              <p className="text-sm text-green-700">
                Special programs addressing the health needs of agricultural workers
                and rural residents in the Central Valley.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">
            Resources for Fresno County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-yellow-700 mb-3">California HICAP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Fresno County</p>
              <Link href="/medicare-advantage" className="text-yellow-600 hover:text-yellow-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Fresno County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Bilingual Assistance</h3>
              <p className="text-gray-600 mb-4">Get help in Spanish with Medicare enrollment</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Ayuda en Español →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-yellow-600 to-green-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Fresno County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-yellow-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Fresno County, California.
            Access quality healthcare providers throughout the Central Valley
            with rural-friendly coverage and bilingual support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-yellow-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Fresno County Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-yellow-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}