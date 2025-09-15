import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hernando County Florida Medicare Advantage 2025 - Medicare Plans & Coverage',
  description: 'Find the best Medicare Advantage plans in Hernando County, Florida. Compare plans, providers, and benefits for Spring Hill, Brooksville, and Weeki Wachee residents.',
  keywords: 'Hernando County Florida Medicare, Medicare Advantage Hernando County, Spring Hill Medicare plans, Brooksville Medicare coverage, Florida Medicare 2025'
};

export default function HernandoCountyFloridaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-8 text-center">
          Hernando County Florida Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Hernando County, Florida.
            Compare coverage options for Spring Hill, Brooksville, Weeki Wachee, and surrounding areas
            with access to local healthcare providers and Florida Medicare benefits.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Medicare Plans in Hernando County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Hernando County with extensive
                provider networks, prescription drug coverage, and additional benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Prescription drug coverage included</li>
                <li>• Dental and vision benefits</li>
                <li>• Local provider networks</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to Hernando County healthcare providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Nationwide coverage</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Aetna Better Health</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                preventive care and community health services in Hernando County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Preventive care focus</li>
                <li>• Community health programs</li>
                <li>• Transportation benefits</li>
                <li>• Care coordination</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-orange-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6">
            Hernando County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">Spring Hill</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Central Spring Hill</li>
                <li>• North Spring Hill</li>
                <li>• West Spring Hill</li>
                <li>• Surrounding communities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">Brooksville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Brooksville</li>
                <li>• East Brooksville</li>
                <li>• South Brooksville</li>
                <li>• Rural Brooksville</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">Other Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Weeki Wachee</li>
                <li>• Masaryktown</li>
                <li>• Ridge Manor</li>
                <li>• Istachatta</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Hernando County Healthcare Providers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-orange-700 mb-4">Major Hospitals</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Oak Hill Hospital (Spring Hill)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Brooksville Regional Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spring Hill Regional Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Regional hospitals in surrounding areas
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Primary Care & Specialists</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family medicine practices
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Internal medicine physicians
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cardiology and specialty care
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Urgent care centers
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Medicare Advantage Benefits in Hernando County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-orange-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-orange-700 mb-4">Enhanced Florida Benefits</h3>
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
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Medicare Enrollment Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Begins</h3>
              <p className="text-sm text-gray-600">Start reviewing Hernando County plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-2">DEC 7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Deadline</h3>
              <p className="text-sm text-gray-600">Final day to enroll or change plans</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">JAN 1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Coverage Starts</h3>
              <p className="text-sm text-gray-600">New 2025 benefits begin</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">MAR 31</div>
              <h3 className="font-semibold text-gray-900 mb-2">MA OEP Ends</h3>
              <p className="text-sm text-gray-600">Last chance to switch MA plans</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Resources for Hernando County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Florida SHINE Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Hernando County</p>
              <Link href="/medicare-advantage" className="text-orange-600 hover:text-orange-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Hernando County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Hernando County Medicare plans</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-orange-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Hernando County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Hernando County, Florida.
            Access quality healthcare providers throughout Spring Hill, Brooksville, and surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Hernando County Plans
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