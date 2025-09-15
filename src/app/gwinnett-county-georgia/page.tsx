import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gwinnett County Georgia Medicare Advantage 2025 - Atlanta Metro Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Gwinnett County, Georgia. Compare plans, providers, and benefits for Lawrenceville, Duluth, Norcross, and surrounding areas with access to Northside Hospital, Emory Healthcare, and Piedmont Healthcare.',
  keywords: 'Gwinnett County Georgia Medicare, Medicare Advantage Gwinnett County, Lawrenceville Medicare plans, Duluth Medicare coverage, Georgia Medicare 2025, Atlanta Metro Medicare'
};

export default function GwinnettCountyGeorgiaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-8 text-center">
          Gwinnett County Georgia Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Gwinnett County, Georgia.
            Compare coverage options for Lawrenceville, Duluth, Norcross, Sugar Hill, and surrounding areas
            with access to Northside Hospital, Emory Healthcare, Piedmont Healthcare, and other premier Georgia providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Top Medicare Plans in Gwinnett County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Gwinnett County with
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
                and access to major Gwinnett County healthcare systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Nationwide coverage</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">WellCare by Allwell</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                Georgia community health and affordable care in Gwinnett County.
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

        <section className="mb-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            Gwinnett County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">North Gwinnett</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Duluth</li>
                <li>• Suwanee</li>
                <li>• Sugar Hill</li>
                <li>• Buford</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">Central Gwinnett</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lawrenceville</li>
                <li>• Norcross</li>
                <li>• Berkeley Lake</li>
                <li>• Peachtree Corners</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">South Gwinnett</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Snellville</li>
                <li>• Stone Mountain</li>
                <li>• Lilburn</li>
                <li>• Grayson</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-green-700 mb-2">West Gwinnett</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Doraville</li>
                <li>• Chamblee</li>
                <li>• Tucker</li>
                <li>• Clarkston</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Major Healthcare Providers in Gwinnett County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-green-700 mb-4">Major Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Northside Hospital Gwinnett
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emory Johns Creek Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Piedmont Healthcare Gwinnett
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Northeast Georgia Health System
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
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Medicare Advantage Benefits in Gwinnett County
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
                <h3 className="text-xl font-medium text-green-700 mb-4">Enhanced Georgia Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and gym memberships
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
          <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
            Special Considerations for Gwinnett County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Atlanta Metro Access</h3>
              <p className="text-sm text-green-700">
                Convenient access to Atlanta's premier medical centers while
                maintaining strong local healthcare networks in Gwinnett County.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Diverse Communities</h3>
              <p className="text-sm text-blue-700">
                Medicare plans designed to serve Gwinnett County's diverse
                population with multilingual services and cultural competency.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Growing Healthcare Network</h3>
              <p className="text-sm text-purple-700">
                Rapidly expanding healthcare infrastructure with new facilities
                and services to meet the needs of Gwinnett's growing population.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
            Resources for Gwinnett County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Georgia SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Gwinnett County</p>
              <Link href="/medicare-advantage" className="text-green-600 hover:text-green-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Gwinnett County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Gwinnett County Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-green-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Gwinnett County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Gwinnett County, Georgia.
            Access quality healthcare providers throughout Lawrenceville, Duluth, and surrounding communities
            with comprehensive coverage and competitive benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Gwinnett County Plans
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