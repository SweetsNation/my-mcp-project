import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Broward County Florida Medicare Advantage 2025 - Fort Lauderdale Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Broward County, Florida. Compare plans, providers, and benefits for Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding areas with access to Broward Health, Holy Cross Health, and Cleveland Clinic Florida.',
  keywords: 'Broward County Florida Medicare, Medicare Advantage Broward County, Fort Lauderdale Medicare plans, Hollywood Medicare coverage, Florida Medicare 2025, Broward Health Medicare'
};

export default function BrowardCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-8 text-center">
          Broward County Florida Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Broward County, Florida.
            Compare coverage options for Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, and surrounding areas
            with access to Broward Health, Holy Cross Health, Cleveland Clinic Florida, and other premier providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-8 text-center">
            Top Medicare Plans in Broward County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
              <h3 className="text-2xl font-medium text-cyan-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Broward County with
                extensive South Florida provider networks and competitive benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Large Broward provider network</li>
                <li>• Prescription drug coverage included</li>
                <li>• Extra benefits package</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to major Broward County healthcare systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Access to Cleveland Clinic Florida</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">WellCare by Allwell</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                Florida community health and diverse populations in Broward County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Community-focused care</li>
                <li>• Cultural competency</li>
                <li>• Transportation benefits</li>
                <li>• Chronic care management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-cyan-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-6">
            Broward County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">Central Broward</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fort Lauderdale</li>
                <li>• Plantation</li>
                <li>• Lauderhill</li>
                <li>• Sunrise</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">South Broward</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hollywood</li>
                <li>• Pembroke Pines</li>
                <li>• Miramar</li>
                <li>• Hallandale Beach</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">North Broward</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coral Springs</li>
                <li>• Coconut Creek</li>
                <li>• Margate</li>
                <li>• Parkland</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-cyan-700 mb-2">East Broward</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pompano Beach</li>
                <li>• Deerfield Beach</li>
                <li>• Lighthouse Point</li>
                <li>• Lauderdale-by-the-Sea</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-8 text-center">
            Major Healthcare Providers in Broward County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-cyan-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Broward Health System
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Holy Cross Health
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cleveland Clinic Florida
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memorial Healthcare System
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
                  Trauma centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multi-lingual care teams
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-8 text-center">
            Medicare Advantage Benefits in Broward County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-cyan-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-cyan-700 mb-4">Enhanced Florida Benefits</h3>
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
                    Bilingual customer support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hurricane and disaster coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">
            Special Considerations for Broward County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-800 mb-3">Multicultural Healthcare</h3>
              <p className="text-sm text-cyan-700">
                Broward County's diverse population is served by Medicare plans offering
                multilingual services and culturally competent care.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Hurricane Preparedness</h3>
              <p className="text-sm text-blue-700">
                Special hurricane season benefits including emergency prescriptions,
                temporary out-of-area coverage, and evacuation support.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Coastal Living Benefits</h3>
              <p className="text-sm text-purple-700">
                Medicare plans designed for coastal communities with coverage
                for beach lifestyle and seasonal resident considerations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">
            Resources for Broward County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-cyan-700 mb-3">Florida SHINE Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Broward County</p>
              <Link href="/medicare-advantage" className="text-cyan-600 hover:text-cyan-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Broward County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Bilingual Assistance</h3>
              <p className="text-gray-600 mb-4">Get help in Spanish with Medicare enrollment</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Ayuda en Español →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Broward County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Broward County, Florida.
            Access premier healthcare providers throughout Fort Lauderdale, Hollywood, and surrounding communities
            with comprehensive coverage and culturally competent care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Broward County Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}