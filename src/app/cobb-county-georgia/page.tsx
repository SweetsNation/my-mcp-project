import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cobb County Georgia Medicare Advantage 2025 - Atlanta Metro Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Cobb County, Georgia. Compare plans, providers, and benefits for Marietta, Smyrna, Kennesaw, and surrounding areas with access to WellStar Health System, Emory Healthcare, and Northside Hospital.',
  keywords: 'Cobb County Georgia Medicare, Medicare Advantage Cobb County, Marietta Medicare plans, Smyrna Medicare coverage, Georgia Medicare 2025, WellStar Medicare'
};

export default function CobbCountyGeorgiaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">
          Cobb County Georgia Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Cobb County, Georgia.
            Compare coverage options for Marietta, Smyrna, Kennesaw, Acworth, and surrounding areas
            with access to WellStar Health System, Emory Healthcare, Northside Hospital, and other premier Georgia providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">
            Top Medicare Plans in Cobb County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Cobb County with
                extensive Atlanta Metro provider networks and competitive benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Large Atlanta Metro provider network</li>
                <li>• Prescription drug coverage included</li>
                <li>• Extra benefits package</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to major Cobb County healthcare systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Access to WellStar Health System</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">WellCare by Allwell</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                Georgia community health and affordable care in Cobb County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Community-focused care</li>
                <li>• Transportation benefits</li>
                <li>• Chronic care management</li>
                <li>• Pharmacy services</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            Cobb County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">Central Cobb</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Marietta</li>
                <li>• Smyrna</li>
                <li>• Vinings</li>
                <li>• Mableton</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">North Cobb</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kennesaw</li>
                <li>• Acworth</li>
                <li>• Woodstock</li>
                <li>• Dallas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">East Cobb</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Roswell (partial)</li>
                <li>• Sandy Springs (partial)</li>
                <li>• East Marietta</li>
                <li>• East Cobb area</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">West Cobb</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Powder Springs</li>
                <li>• Austell</li>
                <li>• Hiram</li>
                <li>• Lost Mountain</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">
            Major Healthcare Providers in Cobb County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-purple-700 mb-4">Major Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  WellStar Kennestone Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  WellStar Cobb Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emory Healthcare Cobb</li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Northside Hospital Cherokee
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
                  Orthopedic surgery centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Urgent care networks
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">
            Medicare Advantage Benefits in Cobb County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-purple-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-purple-700 mb-4">Enhanced Georgia Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and gym memberships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth and virtual care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">
            Special Considerations for Cobb County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Atlanta Metro Access</h3>
              <p className="text-sm text-purple-700">
                Convenient access to Atlanta's premier medical centers while
                maintaining strong local healthcare networks in Cobb County.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">WellStar Health System</h3>
              <p className="text-sm text-blue-700">
                Cobb County is home to major WellStar hospitals providing
                comprehensive healthcare services throughout the region.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Growing Healthcare Network</h3>
              <p className="text-sm text-green-700">
                Rapidly expanding healthcare infrastructure with new facilities
                and services to meet the needs of Cobb's growing population.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">
            Resources for Cobb County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Georgia SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Cobb County</p>
              <Link href="/medicare-advantage" className="text-purple-600 hover:text-purple-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Cobb County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Cobb County Medicare plans</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Cobb County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Cobb County, Georgia.
            Access quality healthcare providers throughout Marietta, Smyrna, and surrounding communities
            with comprehensive coverage and competitive benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Cobb County Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}