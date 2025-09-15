import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Southwest Medicare Plans 2025 | Coverage for TX, AZ, NM, NV | Medicare Advantage & Supplement',
  description: 'Find the best Medicare plans across the Southwest region. Compare Medicare Advantage and supplement options in Texas, Arizona, New Mexico, and Nevada with specialized coverage for retirees.',
  keywords: 'Southwest Medicare plans, Texas Medicare Advantage, Arizona Medicare coverage, New Mexico Medicare, Nevada Medicare plans, Southwest region health insurance, desert healthcare coverage'
};

export default function SouthwestMedicarePlans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-8 text-center">
          Southwest Medicare Plans 2025: Desert Region Coverage
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Explore comprehensive Medicare Advantage and supplement plans across the Southwest.
            Specialized coverage for active retirees in Texas, Arizona, New Mexico, and Nevada
            with networks designed for the unique healthcare needs of desert communities.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Southwest States Medicare Options
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-2xl font-medium text-red-700 mb-4">Texas</h3>
              <p className="text-gray-700 mb-4">
                Lone Star State coverage featuring extensive networks across Houston, Dallas,
                San Antonio, Austin, and rural Texas with specialized border health programs.
              </p>
              <div className="space-y-2">
                <Link href="/medicare-supplement-texas" className="block text-red-600 hover:text-red-800 underline">
                  Texas Medicare Supplement Plans →
                </Link>
                <Link href="/dallas-county-texas" className="block text-red-600 hover:text-red-800 underline">
                  Dallas County Medicare →
                </Link>
                <Link href="/tarrant-county-texas" className="block text-red-600 hover:text-red-800 underline">
                  Tarrant County Coverage →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">Arizona</h3>
              <p className="text-gray-700 mb-4">
                Grand Canyon State Medicare with networks covering Phoenix, Tucson, Flagstaff,
                and retirement communities across the Sonoran Desert.
              </p>
              <Link href="/medicare-advantage" className="text-orange-600 hover:text-orange-800 underline">
                Explore Arizona Medicare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-medium text-yellow-700 mb-4">New Mexico</h3>
              <p className="text-gray-700 mb-4">
                Land of Enchantment coverage including Albuquerque, Santa Fe, Las Cruces,
                and rural areas with Native American health service coordination.
              </p>
              <Link href="/medicare-advantage" className="text-yellow-600 hover:text-yellow-800 underline">
                Find New Mexico Medicare Options →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Nevada</h3>
              <p className="text-gray-700 mb-4">
                Silver State Medicare featuring Las Vegas, Reno, and rural Nevada coverage
                with specialized plans for active retirees and entertainment industry workers.
              </p>
              <Link href="/medicare-advantage" className="text-purple-600 hover:text-purple-800 underline">
                View Nevada Medicare Coverage →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-orange-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6">
            Southwest Medicare Advantage Specialties
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-red-700 mb-2">Desert Health</h3>
              <p className="text-gray-600">Specialized coverage for heat-related conditions and desert-specific health needs</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-orange-700 mb-2">Rural Coverage</h3>
              <p className="text-gray-600">Extensive rural and frontier area coverage with telehealth expansion</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-yellow-700 mb-2">Snowbird Plans</h3>
              <p className="text-gray-600">Flexible coverage for seasonal residents and winter visitors</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Popular Southwest Medicare Features
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-orange-700 mb-4">Enhanced Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    $0 premium Medicare Advantage plans widely available
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing benefits included
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and fitness center memberships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-orange-700 mb-4">Regional Advantages</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Major medical centers and research hospitals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Border health services and bilingual support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telemedicine for remote and rural areas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Climate-specific health and wellness programs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Seasonal resident accommodation options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-red-800 mb-6 text-center">
            Medicare Enrollment Timeline Southwest
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-red-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Starts</h3>
              <p className="text-sm text-gray-600">Begin comparing 2025 plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">DEC 7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Deadline</h3>
              <p className="text-sm text-gray-600">Last day to enroll or change plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-yellow-600 mb-2">JAN 1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Coverage Begins</h3>
              <p className="text-sm text-gray-600">New 2025 benefits start</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">MAR 31</div>
              <h3 className="font-semibold text-gray-900 mb-2">MA Open Enrollment Ends</h3>
              <p className="text-sm text-gray-600">Final opportunity to switch</p>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Discover Your Perfect Southwest Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Compare Medicare Advantage and supplement plans across Texas, Arizona, New Mexico, and Nevada.
            Get expert guidance tailored to Southwest living and healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Southwest Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}