import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'West Coast Medicare Plans 2025 | CA, OR, WA Coverage | Medicare Advantage Pacific',
  description: 'Find the best Medicare plans on the West Coast. Comprehensive Medicare Advantage and supplement coverage for California, Oregon, and Washington with major health system networks.',
  keywords: 'West Coast Medicare plans, California Medicare Advantage, Oregon Medicare coverage, Washington Medicare, Pacific coast health insurance, Kaiser Medicare, West Coast regional coverage'
};

export default function WestCoastMedicarePlans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-8 text-center">
          West Coast Medicare Plans 2025: Pacific Region Coverage
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Explore comprehensive Medicare Advantage and supplement plans along the Pacific Coast.
            Premium coverage options for California, Oregon, and Washington residents with access
            to world-class healthcare networks and innovative wellness programs.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">
            West Coast States Medicare Coverage
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">California</h3>
              <p className="text-gray-700 mb-4">
                Golden State Medicare featuring extensive networks across LA, San Francisco, San Diego,
                Sacramento, and Central Valley with Kaiser Permanente and major health systems.
              </p>
              <div className="space-y-2">
                <Link href="/medicare-supplement-california" className="block text-blue-600 hover:text-blue-800 underline">
                  California Medicare Supplement →
                </Link>
                <Link href="/los-angeles-county" className="block text-blue-600 hover:text-blue-800 underline">
                  Los Angeles County Medicare →
                </Link>
                <Link href="/medicare-advantage/san-francisco-county" className="block text-blue-600 hover:text-blue-800 underline">
                  San Francisco County Plans →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Oregon</h3>
              <p className="text-gray-700 mb-4">
                Beaver State coverage including Portland, Salem, Eugene, and rural Oregon
                with Providence Health and OHSU network access.
              </p>
              <Link href="/medicare-advantage" className="text-green-600 hover:text-green-800 underline">
                Explore Oregon Medicare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Washington</h3>
              <p className="text-gray-700 mb-4">
                Evergreen State Medicare with Seattle, Spokane, Tacoma, and rural Washington
                coverage featuring Swedish Medical Center and UW Medicine networks.
              </p>
              <Link href="/medicare-advantage" className="text-purple-600 hover:text-purple-800 underline">
                Find Washington Medicare Options →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-teal-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6">
            West Coast Medicare Advantage Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-teal-700 mb-4">Premium Health Networks</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente integrated health system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sutter Health and Dignity Health networks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Providence Health & Services coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Academic medical centers (UCSF, UCLA, UW Medicine)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Specialty care and research hospitals
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-teal-700 mb-4">Enhanced Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  $0 premium Medicare Advantage plans available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive prescription drug coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dental, vision, and hearing aid benefits
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wellness programs and gym memberships
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mental health and addiction services
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">
            West Coast Lifestyle Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-green-700 mb-2">Wellness Focus</h3>
              <p className="text-gray-600">Comprehensive wellness programs emphasizing preventive care and healthy living</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-blue-700 mb-2">Technology Integration</h3>
              <p className="text-gray-600">Advanced telehealth services and digital health tools for convenient care</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-purple-700 mb-2">Urban & Rural Access</h3>
              <p className="text-gray-600">Comprehensive coverage from coastal cities to mountain and rural communities</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            Major Health System Networks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Kaiser Permanente</h4>
              <p className="text-sm text-gray-600">Integrated care model across California, Oregon, and Washington</p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Sutter Health</h4>
              <p className="text-sm text-gray-600">Northern California's largest healthcare network</p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Providence</h4>
              <p className="text-sm text-gray-600">Pacific Northwest and California regional coverage</p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">UCLA Health</h4>
              <p className="text-sm text-gray-600">World-renowned academic medical center network</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            2025 Medicare Enrollment Calendar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-teal-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Begins</h3>
              <p className="text-sm text-gray-600">Start comparing 2025 Medicare plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">DEC 7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Deadline</h3>
              <p className="text-sm text-gray-600">Final day to enroll or make changes</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">JAN 1</div>
              <h3 className="font-semibold text-gray-900 mb-2">New Coverage Starts</h3>
              <p className="text-sm text-gray-600">2025 Medicare benefits begin</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">MAR 31</div>
              <h3 className="font-semibold text-gray-900 mb-2">MA OEP Ends</h3>
              <p className="text-sm text-gray-600">Last chance to switch MA plans</p>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Ideal West Coast Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Compare premium Medicare Advantage and supplement plans across California, Oregon, and Washington.
            Access world-class healthcare networks and innovative wellness programs designed for West Coast living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare West Coast Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}