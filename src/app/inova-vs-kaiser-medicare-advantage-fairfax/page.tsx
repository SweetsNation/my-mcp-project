import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inova vs Kaiser Medicare Advantage Fairfax VA 2025 - Network Comparison Guide',
  description: 'Compare Inova Health System vs Kaiser Permanente Medicare Advantage plans in Fairfax County, Virginia. Compare networks, benefits, and coverage for Northern Virginia seniors.',
  keywords: 'Inova vs Kaiser Medicare Advantage Fairfax, Northern Virginia Medicare plans, Fairfax County Medicare comparison, Inova Health System Medicare, Kaiser Permanente Fairfax VA'
};

export default function InovaVsKaiserFairfaxMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8 text-center">
          Inova vs Kaiser Medicare Advantage Fairfax VA 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Compare Inova Health System vs Kaiser Permanente Medicare Advantage plans in Fairfax County.
            Understand network differences, benefits, and coverage options for Northern Virginia seniors
            choosing between these two major healthcare systems.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Inova Health System vs Kaiser Permanente Comparison
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-emerald-500">
              <h3 className="text-2xl font-medium text-emerald-700 mb-4">Inova Health System</h3>
              <p className="text-gray-700 mb-4">
                Northern Virginia's largest healthcare provider with extensive network
                throughout Fairfax County and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• 5 hospitals in Fairfax area</li>
                <li>• Local provider network</li>
                <li>• Emergency services coverage</li>
                <li>• Community-based care</li>
              </ul>
              <div className="bg-emerald-50 p-3 rounded">
                <h4 className="font-semibold text-emerald-800 mb-2">Key Advantages:</h4>
                <ul className="text-xs text-emerald-700">
                  <li>• Deep Northern Virginia roots</li>
                  <li>• Extensive local specialist network</li>
                  <li>• Multiple hospital locations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Kaiser Permanente</h3>
              <p className="text-gray-700 mb-4">
                Integrated healthcare delivery system with coordinated care model
                and comprehensive medical centers in Northern Virginia.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Integrated care model</li>
                <li>• Coordinated services</li>
                <li>• Electronic health records</li>
                <li>• Preventive care focus</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Key Advantages:</h4>
                <ul className="text-xs text-blue-700">
                  <li>• Coordinated care approach</li>
                  <li>• Integrated technology systems</li>
                  <li>• Strong preventive care focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-emerald-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-6">
            Medicare Plan Network Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-emerald-700 mb-4">Inova Network Plans</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Anthem Blue Cross Blue Shield (Inova network)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UnitedHealthcare AARP (includes Inova)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Humana Honor Choice (Inova preferred)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  WellCare by Allwell (Inova access)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-blue-700 mb-4">Kaiser Permanente Plans</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Medicare Advantage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Senior Advantage (HMO)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Senior Advantage (PPO)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Medicare Plus (enhanced benefits)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Hospital and Facility Comparison
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-emerald-700 mb-4">Inova Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inova Fairfax Hospital (flagship facility)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inova Fair Oaks Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inova Alexandria Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inova Mount Vernon Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multiple urgent care centers
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Kaiser Permanente Facilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Tysons Corner Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Springfield Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Capitol Hill Medical Center (DC)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multiple outpatient specialty centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integrated pharmacy services
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-8 text-center">
            Medicare Advantage Benefits Comparison
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-emerald-700 mb-4">Inova Network Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to Inova's 5 hospitals
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Large network of local specialists
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency services coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Flexible provider choice
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Kaiser Permanente Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Integrated care coordination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Electronic health records system
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive preventive care
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    On-site pharmacy services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">
            Which System is Right for You?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">Choose Inova if you prefer:</h3>
              <ul className="text-sm text-emerald-700 space-y-2">
                <li>• Extensive local provider network</li>
                <li>• Multiple hospital options</li>
                <li>• Established Northern Virginia presence</li>
                <li>• Flexible provider choices</li>
                <li>• Strong emergency services</li>
                <li>• Community-based care approach</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Choose Kaiser if you prefer:</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Integrated healthcare delivery</li>
                <li>• Coordinated care management</li>
                <li>• Electronic health records</li>
                <li>• Preventive care focus</li>
                <li>• One-stop healthcare centers</li>
                <li>• Technology-driven care</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-6 text-center">
            Resources for Fairfax County Medicare Recipients
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">Virginia SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Fairfax County</p>
              <Link href="/medicare-advantage" className="text-emerald-600 hover:text-emerald-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Network Comparison</h3>
              <p className="text-gray-600 mb-4">Compare Inova vs Kaiser network coverage</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Networks →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help choosing between Inova and Kaiser plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Choose the Right Healthcare Network for Your Needs
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Whether you prefer Inova's extensive local network or Kaiser's integrated care model,
            find the Medicare Advantage plan that best fits your healthcare preferences in Fairfax County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Inova vs Kaiser Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}