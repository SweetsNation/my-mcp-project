import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Westchester County New York Medicare Advantage 2025 - NY Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Westchester County, New York. Compare plans, providers, and benefits for White Plains, Yonkers, New Rochelle, and surrounding areas with access to NewYork-Presbyterian, Montefiore, and other premier NY providers.',
  keywords: 'Westchester County New York Medicare, Medicare Advantage Westchester County, White Plains Medicare plans, Yonkers Medicare coverage, New York Medicare 2025, NewYork-Presbyterian Medicare'
};

export default function WestchesterCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center">
          Westchester County New York Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Westchester County, New York.
            Compare coverage options for White Plains, Yonkers, New Rochelle, Mount Vernon, and surrounding areas
            with access to NewYork-Presbyterian, Montefiore Health System, and other premier New York healthcare providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Top Medicare Plans in Westchester County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-medium text-indigo-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to major Westchester County healthcare systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Access to NewYork-Presbyterian</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Westchester County with
                extensive New York Metro provider networks and competitive benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Large NY Metro provider network</li>
                <li>• Prescription drug coverage included</li>
                <li>• Extra benefits package</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Anthem Blue Cross Blue Shield</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with flexible
                provider networks throughout Westchester County and NYC metro area.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Flexible provider networks</li>
                <li>• NYC metro area coverage</li>
                <li>• Extra benefits included</li>
                <li>• Local customer service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
            Westchester County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Central Westchester</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• White Plains</li>
                <li>• Tarrytown</li>
                <li>• Elmsford</li>
                <li>• Ardsley</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">South Westchester</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Yonkers</li>
                <li>• New Rochelle</li>
                <li>• Mount Vernon</li>
                <li>• Eastchester</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">North Westchester</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Peekskill</li>
                <li>• Yorktown</li>
                <li>• Ossining</li>
                <li>• Croton-on-Hudson</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">East Westchester</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Scarsdale</li>
                <li>• Rye</li>
                <li>• Mamaroneck</li>
                <li>• Larchmont</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Major Healthcare Providers in Westchester County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  NewYork-Presbyterian/Lawrence Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Montefiore New Rochelle Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  White Plains Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Northern Westchester Hospital
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Services</h3>
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
                  NYC specialty center access
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced imaging centers
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Medicare Advantage Benefits in Westchester County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-indigo-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-700 mb-4">Enhanced New York Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to NYC specialty centers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth and virtual care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            Special Considerations for Westchester County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">NYC Metro Access</h3>
              <p className="text-sm text-indigo-700">
                Convenient access to Manhattan's world-class medical centers while
                maintaining strong local healthcare networks in Westchester County.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Premium Healthcare</h3>
              <p className="text-sm text-blue-700">
                Westchester County offers access to some of the nation's top hospitals
                and medical specialists through NewYork-Presbyterian and other systems.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Transportation Benefits</h3>
              <p className="text-sm text-purple-700">
                Many Medicare plans include transportation benefits to help access
                both local Westchester providers and NYC specialty centers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            Resources for Westchester County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">New York SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Westchester County</p>
              <Link href="/medicare-advantage" className="text-indigo-600 hover:text-indigo-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Westchester County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Westchester County Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Westchester County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Westchester County, New York.
            Access world-class healthcare providers throughout the NYC metro area
            with comprehensive coverage and premium benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Westchester Plans
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