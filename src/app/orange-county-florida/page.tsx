import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Orange County Florida Medicare Advantage 2025 - Orlando Medicare Plans & Coverage',
  description: 'Find the best Medicare Advantage plans in Orange County, Florida. Compare Medicare plans for Orlando, Winter Park, Apopka residents with top healthcare networks.',
  keywords: 'Orange County Florida Medicare, Orlando Medicare Advantage, Medicare plans Orange County FL, Florida Medicare 2025, Orlando healthcare coverage'
};

export default function OrangeCountyFloridaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-citrus-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-citrus-900 mb-8 text-center">
          Orange County Florida Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Orange County, Florida.
            Compare coverage options for Orlando, Winter Park, Apopka, Ocoee, and surrounding areas
            with access to leading healthcare networks including Orlando Health and AdventHealth.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-citrus-800 mb-8 text-center">
            Top Medicare Plans in Orange County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-citrus-500">
              <h3 className="text-2xl font-medium text-citrus-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Orange County with extensive
                Orlando-area provider networks, prescription drug coverage, and enhanced benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Orlando Health network access</li>
                <li>• Prescription drug coverage included</li>
                <li>• Dental, vision, and hearing benefits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and comprehensive access to Orange County healthcare providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• AdventHealth network access</li>
                <li>• Nationwide coverage</li>
                <li>• Telehealth services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Aetna Better Health</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                preventive care and wellness programs throughout Orange County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Preventive care focus</li>
                <li>• Community health programs</li>
                <li>• Transportation benefits</li>
                <li>• Chronic care management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-citrus-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-citrus-800 mb-6">
            Orange County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-citrus-700 mb-2">Orlando Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Orlando</li>
                <li>• East Orlando</li>
                <li>• West Orlando</li>
                <li>• South Orlando</li>
                <li>• Lake Nona</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-citrus-700 mb-2">North Orange County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Winter Park</li>
                <li>• Apopka</li>
                <li>• Maitland</li>
                <li>• Altamonte Springs</li>
                <li>• Mount Dora</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-citrus-700 mb-2">West & South Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ocoee</li>
                <li>• Windermere</li>
                <li>• Dr. Phillips</li>
                <li>• Bay Hill</li>
                <li>• Belle Isle</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-citrus-800 mb-8 text-center">
            Major Healthcare Networks in Orange County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-citrus-700 mb-4">Orlando Health Network</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Orlando Regional Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dr. P. Phillips Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Orlando Health South Seminole Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Health Central Hospital (Ocoee)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">AdventHealth Network</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AdventHealth Orlando
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AdventHealth Winter Park
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AdventHealth Apopka
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AdventHealth Winter Garden
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-citrus-800 mb-8 text-center">
            Medicare Advantage Benefits in Orange County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-citrus-700 mb-4">Core Medicare Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-citrus-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-citrus-700 mb-4">Enhanced Orlando Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive dental, vision, and hearing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Fitness center memberships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth and digital health tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-citrus-800 mb-8 text-center">
            Specialty Services in Orange County
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-citrus-50 to-citrus-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-citrus-800 mb-3">Cancer Care</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• UF Health Cancer Center - Orlando Health</li>
                <li>• AdventHealth Cancer Institute</li>
                <li>• Comprehensive oncology services</li>
                <li>• Radiation and chemotherapy</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Heart & Vascular</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Orlando Health Heart & Vascular Institute</li>
                <li>• AdventHealth Cardiovascular Institute</li>
                <li>• Cardiac surgery and intervention</li>
                <li>• Heart rhythm specialists</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Neurological Care</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Orlando Health Neuroscience Institute</li>
                <li>• AdventHealth Neuroscience Institute</li>
                <li>• Stroke centers</li>
                <li>• Neurosurgery and neurology</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-citrus-800 mb-6 text-center">
            Medicare Enrollment Timeline
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-citrus-600 mb-2">OCT 15</div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Enrollment Begins</h3>
              <p className="text-sm text-gray-600">Start reviewing Orange County plans</p>
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
          <h2 className="text-3xl font-semibold text-citrus-800 mb-6 text-center">
            Resources for Orange County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-citrus-700 mb-3">Florida SHINE Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Orange County</p>
              <Link href="/medicare-advantage" className="text-citrus-600 hover:text-citrus-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison Tool</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Orlando zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Orange County Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-citrus-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Orange County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-citrus-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Orange County, Florida.
            Access premier healthcare networks throughout Orlando, Winter Park, and all Orange County communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-citrus-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Orlando Area Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-citrus-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}