import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Monroe County Florida Medicare Advantage 2025 - Florida Keys Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Monroe County, Florida (Florida Keys). Compare plans, providers, and benefits for Key Largo, Islamorada, Marathon, and Key West residents.',
  keywords: 'Monroe County Florida Medicare, Medicare Advantage Monroe County, Florida Keys Medicare plans, Key West Medicare coverage, Marathon Key Medicare, Key Largo Medicare 2025'
};

export default function MonroeCountyFloridaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-8 text-center">
          Monroe County Florida Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Monroe County, Florida (Florida Keys).
            Compare coverage options for Key West, Marathon, Islamorada, Key Largo, and surrounding Keys
            with access to specialized island healthcare providers and mainland networks.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-8 text-center">
            Medicare Plans in the Florida Keys
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
              <h3 className="text-2xl font-medium text-cyan-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving the Florida Keys with
                specialized island coverage and mainland provider access.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" $0 premium options available</li>
                <li>" Island-specific provider networks</li>
                <li>" Emergency transportation coverage</li>
                <li>" Mainland hospital access</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with special
                considerations for Florida Keys residents and travel coverage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" AARP member benefits</li>
                <li>" Nationwide emergency coverage</li>
                <li>" Telehealth services</li>
                <li>" Transportation benefits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">WellCare by Allwell</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                rural and island healthcare access in Monroe County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>" Rural healthcare focus</li>
                <li>" Island medical coverage</li>
                <li>" Emergency transport services</li>
                <li>" Chronic care management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-cyan-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-6">
            Florida Keys Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">Upper Keys</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Key Largo</li>
                <li>" Tavernier</li>
                <li>" Plantation Key</li>
                <li>" Windley Key</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">Middle Keys</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Islamorada</li>
                <li>" Duck Key</li>
                <li>" Marathon</li>
                <li>" Grassy Key</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">Lower Keys</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Big Pine Key</li>
                <li>" Summerland Key</li>
                <li>" Sugarloaf Key</li>
                <li>" Cudjoe Key</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">Key West</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>" Key West</li>
                <li>" Stock Island</li>
                <li>" Fleming Key</li>
                <li>" Dry Tortugas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-8 text-center">
            Healthcare Providers in Monroe County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-cyan-700 mb-4">Key Hospitals & Medical Centers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lower Keys Medical Center (Key West)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fishermen's Hospital (Marathon)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mariners Hospital (Tavernier)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mainland Miami-Dade hospitals
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Island Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emergency medical transport
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Helicopter medical evacuation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Telemedicine services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Island clinic networks
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-8 text-center">
            Special Medicare Benefits for Florida Keys Residents
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-cyan-700 mb-4">Island-Specific Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency medical transportation to mainland
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Helicopter ambulance coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Inter-island transportation for care
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Specialized island pharmacy services
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-cyan-700 mb-4">Enhanced Florida Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth for specialist consultations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hurricane and disaster coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mainland hospital network access
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency evacuation benefits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">
            Unique Considerations for Keys Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">Emergency Transportation</h3>
              <p className="text-sm text-cyan-700">
                Medicare plans in the Keys often include enhanced emergency transportation
                benefits due to the remote island location and need for mainland hospital access.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Hurricane Preparedness</h3>
              <p className="text-sm text-blue-700">
                Special provisions for hurricane season including temporary mainland
                coverage and emergency evacuation benefits for Medicare recipients.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Specialist Access</h3>
              <p className="text-sm text-teal-700">
                Enhanced telehealth services and travel coverage for specialist
                appointments on the mainland due to limited local specialist availability.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">
            Resources for Monroe County Medicare Recipients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-cyan-700 mb-3">Florida SHINE Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services for Florida Keys residents</p>
              <Link href="/medicare-advantage" className="text-cyan-600 hover:text-cyan-800 underline">
                Find Local Counselors ’
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Island Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare Medicare plans with Keys-specific benefits</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Island Plans ’
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Emergency Coverage Info</h3>
              <p className="text-gray-600 mb-4">Understand emergency transportation and mainland access</p>
              <Link href="/contact" className="text-teal-600 hover:text-teal-800 underline">
                Learn More ’
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Medicare Coverage Designed for Island Living
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
            Find Medicare Advantage plans specifically designed for Florida Keys residents.
            Get comprehensive coverage with enhanced emergency transportation, specialist access,
            and hurricane preparedness benefits throughout Monroe County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Keys Medicare Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}