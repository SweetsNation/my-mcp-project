import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'San Diego County Medicare Advantage 2025 - Medicare Plans & Coverage California',
  description: 'Find the best Medicare Advantage plans in San Diego County, California. Compare plans for San Diego, Chula Vista, Oceanside, and Escondido with top healthcare networks.',
  keywords: 'San Diego County Medicare, Medicare Advantage San Diego, San Diego Medicare plans 2025, California Medicare coverage, San Diego healthcare'
};

export default function SanDiegoCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-coastal-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-coastal-900 mb-8 text-center">
          San Diego County Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in San Diego County, California.
            Compare coverage options for San Diego, Chula Vista, Oceanside, Escondido, and surrounding areas
            with access to leading healthcare networks including UC San Diego Health and Sharp HealthCare.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-coastal-800 mb-8 text-center">
            Top Medicare Plans in San Diego County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-coastal-500">
              <h3 className="text-2xl font-medium text-coastal-700 mb-4">Kaiser Permanente</h3>
              <p className="text-gray-700 mb-4">
                Integrated healthcare system with multiple Medicare Advantage options in San Diego County,
                featuring comprehensive coverage and coordinated care through Kaiser facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Integrated care model</li>
                <li>• Multiple San Diego locations</li>
                <li>• Prescription drug coverage included</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Sharp Health Plan</h3>
              <p className="text-gray-700 mb-4">
                Local Medicare Advantage plans with access to Sharp HealthCare network,
                offering comprehensive coverage throughout San Diego County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Sharp HealthCare network access</li>
                <li>• Local San Diego focus</li>
                <li>• Comprehensive benefits</li>
                <li>• Community-based care</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving San Diego County with extensive
                provider networks and enhanced benefits for active seniors.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Wide provider network</li>
                <li>• Enhanced benefits package</li>
                <li>• Wellness programs</li>
                <li>• Telehealth services</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-coastal-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-coastal-800 mb-6">
            San Diego County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-coastal-700 mb-2">Central San Diego</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown San Diego</li>
                <li>• Balboa Park area</li>
                <li>• Mission Valley</li>
                <li>• Hillcrest</li>
                <li>• University Heights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-coastal-700 mb-2">North County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Oceanside</li>
                <li>• Carlsbad</li>
                <li>• Encinitas</li>
                <li>• Vista</li>
                <li>• Escondido</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-coastal-700 mb-2">South Bay</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chula Vista</li>
                <li>• National City</li>
                <li>• Imperial Beach</li>
                <li>• Bonita</li>
                <li>• San Ysidro</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-coastal-700 mb-2">East County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• El Cajon</li>
                <li>• La Mesa</li>
                <li>• Santee</li>
                <li>• Poway</li>
                <li>• Alpine</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-coastal-800 mb-8 text-center">
            Major Healthcare Networks in San Diego County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-coastal-700 mb-4">UC San Diego Health</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UC San Diego Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Jacobs Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Moores Cancer Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Academic medical center excellence
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Sharp HealthCare</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sharp Memorial Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sharp Grossmont Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sharp Chula Vista Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community-focused healthcare
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-coastal-800 mb-8 text-center">
            Medicare Advantage Benefits in San Diego County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-coastal-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-coastal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-coastal-700 mb-4">Enhanced California Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive dental, vision, and hearing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fitness center memberships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and health coaching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-coastal-800 mb-8 text-center">
            Specialty Care Centers in San Diego
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-coastal-50 to-coastal-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-coastal-800 mb-3">Cancer Care</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• UC San Diego Moores Cancer Center</li>
                <li>• Sharp Memorial Hospital Cancer Center</li>
                <li>• Scripps MD Anderson Cancer Center</li>
                <li>• Comprehensive oncology services</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Heart & Vascular</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Scripps Prebys Cardiovascular Institute</li>
                <li>• Sharp Memorial Hospital Heart Center</li>
                <li>• UC San Diego Sulpizio Cardiovascular Center</li>
                <li>• Advanced cardiac procedures</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Neurological Care</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• UC San Diego Neurosciences Institute</li>
                <li>• Sharp Memorial Neuroscience Institute</li>
                <li>• Scripps Neuroscience Institute</li>
                <li>• Comprehensive brain and spine care</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-coastal-800 mb-6 text-center">
            Medicare Enrollment Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-coastal-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Begins</h3>
              <p className="text-sm text-gray-600">Start reviewing San Diego County plans</p>
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
          <h2 className="text-3xl font-semibold text-coastal-800 mb-6 text-center">
            Resources for San Diego County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-coastal-700 mb-3">California HICAP</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in San Diego County</p>
              <Link href="/medicare-advantage" className="text-coastal-600 hover:text-coastal-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your San Diego zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in San Diego County Medicare plans</p>
              <Link href="/contact" className="text-green-600 hover:text-green-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-coastal-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect San Diego County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-coastal-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in San Diego County, California.
            Access world-class healthcare networks throughout San Diego, from the coast to the mountains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-coastal-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare San Diego Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-coastal-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}