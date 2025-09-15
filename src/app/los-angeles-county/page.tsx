import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Los Angeles County 2025 - LA Healthcare Coverage',
  description: 'Find the best Medicare Advantage plans in Los Angeles County. UCLA Health, Cedars-Sinai, Kaiser coverage with zero premium options. Compare LA Medicare plans for 2025.',
  keywords: 'Medicare Advantage Los Angeles County, LA Medicare plans, UCLA Health Medicare, Cedars-Sinai Medicare, Kaiser LA, Los Angeles healthcare coverage, Medicare LA County'
};

export default function MedicareAdvantageLosAngelesCounty() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Medicare Advantage Plans Los Angeles County 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Los Angeles County with access to
            world-class healthcare networks including UCLA Health, Cedars-Sinai, and Kaiser Permanente.
            Find the perfect plan for your healthcare needs across all LA communities.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Top Medicare Plans in Los Angeles County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Kaiser Permanente</h3>
              <p className="text-gray-700 mb-4">
                Integrated healthcare system with multiple $0 premium plans, comprehensive coverage,
                and convenient locations throughout Los Angeles County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Prescription drug coverage included</li>
                <li>• 30+ medical centers in LA County</li>
                <li>• Dental and vision benefits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">UCLA Health Network</h3>
              <p className="text-gray-700 mb-4">
                Access to UCLA Medical Center, Ronald Reagan UCLA Medical Center,
                and UCLA's renowned specialty care throughout LA County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• World-class academic medicine</li>
                <li>• Specialty care and research</li>
                <li>• Cancer treatment centers</li>
                <li>• Westwood and Santa Monica locations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Cedars-Sinai Plans</h3>
              <p className="text-gray-700 mb-4">
                Premium Medicare Advantage plans featuring Cedars-Sinai Medical Center
                and affiliated physicians across Beverly Hills, West Hollywood, and LA.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Premium hospital network</li>
                <li>• Concierge-level service</li>
                <li>• Advanced medical technology</li>
                <li>• Multiple LA locations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Los Angeles County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Central LA</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Los Angeles</li>
                <li>• Hollywood</li>
                <li>• Mid-City</li>
                <li>• Koreatown</li>
                <li>• Silver Lake</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">West LA</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Beverly Hills</li>
                <li>• Santa Monica</li>
                <li>• Westwood</li>
                <li>• Brentwood</li>
                <li>• Venice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">San Fernando Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Burbank</li>
                <li>• Glendale</li>
                <li>• Van Nuys</li>
                <li>• Woodland Hills</li>
                <li>• North Hollywood</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">South Bay</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Long Beach</li>
                <li>• Torrance</li>
                <li>• Carson</li>
                <li>• Redondo Beach</li>
                <li>• Manhattan Beach</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Medicare Advantage Benefits in LA County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    $0 premium plans widely available
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D) included
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
                <h3 className="text-xl font-medium text-blue-700 mb-4">Enhanced LA Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing aids
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Gym memberships and wellness programs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Major Healthcare Networks in LA County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Academic Medical Centers</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• UCLA Medical Center</li>
                <li>• USC Keck Medicine</li>
                <li>• Cedars-Sinai Medical Center</li>
                <li>• Children's Hospital Los Angeles</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Health System Networks</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Kaiser Permanente</li>
                <li>• Dignity Health</li>
                <li>• PIH Health</li>
                <li>• MemorialCare</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Specialty Care Centers</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• City of Hope (Cancer)</li>
                <li>• Huntington Hospital</li>
                <li>• Providence Health</li>
                <li>• Community hospitals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Medicare Enrollment Deadlines Los Angeles County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Starts</h3>
              <p className="text-sm text-gray-600">Begin comparing 2025 LA County plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">DEC 7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Deadline</h3>
              <p className="text-sm text-gray-600">Last day to enroll or change plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">JAN 1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Coverage Begins</h3>
              <p className="text-sm text-gray-600">New 2025 benefits start</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">MAR 31</div>
              <h3 className="font-semibold text-gray-900 mb-2">MA Open Enrollment Ends</h3>
              <p className="text-sm text-gray-600">Final opportunity to switch</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
            Resources for LA County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Medicare Education</h3>
              <p className="text-gray-600 mb-4">Free Medicare education seminars throughout LA County</p>
              <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 underline">
                Find Local Seminars →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans available in your LA zip code</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Help</h3>
              <p className="text-gray-600 mb-4">Get personalized assistance with Medicare enrollment</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help Now →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect LA County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans from top-rated insurers in Los Angeles County.
            Access world-class healthcare networks and find coverage that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare LA County Plans
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