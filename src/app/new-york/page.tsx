import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New York Medicare Plans 2025 - Empire State Medicare Advantage & Supplement Coverage',
  description: 'Find the best Medicare plans in New York State. Compare Medicare Advantage and supplement options with access to NYC hospitals, upstate health systems, and rural coverage.',
  keywords: 'New York Medicare plans, NYC Medicare Advantage, New York State Medicare supplement, Albany Medicare, Buffalo Medicare, Rochester Medicare, Syracuse Medicare coverage'
};

export default function NewYorkMedicarePlans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center">
          New York Medicare Plans 2025: Empire State Coverage
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage and supplement plans throughout New York State.
            From world-class NYC medical centers to upstate health networks and rural coverage,
            find the perfect Medicare plan for your Empire State healthcare needs.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            New York Medicare Coverage Regions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">New York City Metro</h3>
              <p className="text-gray-700 mb-4">
                Premier Medicare coverage for Manhattan, Brooklyn, Queens, Bronx, and Staten Island
                with access to NYU Langone, Mount Sinai, NewYork-Presbyterian, and Memorial Sloan Kettering.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• World-renowned medical centers</li>
                <li>• Extensive specialist networks</li>
                <li>• Multiple $0 premium options</li>
                <li>• Comprehensive urban coverage</li>
              </ul>
              <Link href="/monroe-county" className="text-blue-600 hover:text-blue-800 underline">
                NYC Area Medicare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Capital Region & Hudson Valley</h3>
              <p className="text-gray-700 mb-4">
                Medicare coverage for Albany, Schenectady, Troy, and Hudson Valley communities
                with Albany Medical Center and regional health system access.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Albany Medical Center network</li>
                <li>• Regional hospital coverage</li>
                <li>• Rural and suburban options</li>
                <li>• Government employee benefits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Western New York</h3>
              <p className="text-gray-700 mb-4">
                Buffalo, Rochester, and Western NY Medicare plans featuring University of Rochester,
                Buffalo General, and regional health systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• University medical centers</li>
                <li>• Great Lakes region coverage</li>
                <li>• Academic hospital networks</li>
                <li>• Rural healthcare access</li>
              </ul>
              <Link href="/monroe-county" className="text-purple-600 hover:text-purple-800 underline">
                Monroe County Rochester Plans →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
            New York Medicare Advantage Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-indigo-700 mb-4">Empire State Standards</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Zero premium Medicare Advantage plans available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive prescription drug coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Annual out-of-pocket limits for financial protection
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emergency care coverage nationwide
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Access to leading NYC medical centers
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-indigo-700 mb-4">Enhanced NY Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive dental, vision, and hearing coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transportation benefits for medical appointments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wellness programs and gym memberships
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mental health and substance abuse services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Chronic care management programs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Major New York Healthcare Networks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">NYC Premier Systems</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• NewYork-Presbyterian Hospital</li>
                <li>• NYU Langone Health</li>
                <li>• Mount Sinai Health System</li>
                <li>• Memorial Sloan Kettering</li>
                <li>• Montefiore Health System</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Upstate Networks</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• University of Rochester Medical Center</li>
                <li>• Albany Medical Center</li>
                <li>• Buffalo General Medical Center</li>
                <li>• Syracuse University Hospital</li>
                <li>• Bassett Healthcare Network</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Regional Health Systems</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rochester Regional Health</li>
                <li>• St. Peter's Health Partners</li>
                <li>• Ellis Medicine</li>
                <li>• United Health Services</li>
                <li>• Excellus BlueCross BlueShield</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            New York Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">NYC Boroughs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Manhattan</li>
                <li>• Brooklyn</li>
                <li>• Queens</li>
                <li>• Bronx</li>
                <li>• Staten Island</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Long Island</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nassau County</li>
                <li>• Suffolk County</li>
                <li>• Westchester County</li>
                <li>• Rockland County</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Capital Region</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Albany</li>
                <li>• Schenectady</li>
                <li>• Troy</li>
                <li>• Saratoga Springs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Western NY</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Buffalo</li>
                <li>• Rochester</li>
                <li>• Syracuse</li>
                <li>• Binghamton</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            New York Medicare Enrollment Calendar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Begins</h3>
              <p className="text-sm text-gray-600">Start reviewing NY Medicare plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">DEC 7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Deadline</h3>
              <p className="text-sm text-gray-600">Final day to enroll or change plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">JAN 1</div>
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
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            New York Medicare Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">NY SHIP Counseling</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling through New York SHIP program</p>
              <Link href="/medicare-advantage" className="text-indigo-600 hover:text-indigo-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your New York zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in New York Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Ideal New York Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Compare Medicare Advantage and supplement plans across New York State.
            Access premier healthcare networks from NYC to upstate communities with coverage designed for Empire State residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare New York Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}