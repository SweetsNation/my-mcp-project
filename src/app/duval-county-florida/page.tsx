import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Duval County Florida Medicare Advantage 2025 - Jacksonville Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Duval County, Florida. Compare plans, providers, and benefits for Jacksonville and surrounding areas with access to Mayo Clinic, Baptist Health, and UF Health Jacksonville.',
  keywords: 'Duval County Florida Medicare, Medicare Advantage Jacksonville, Jacksonville Medicare plans, Mayo Clinic Medicare, Florida Medicare 2025, UF Health Medicare'
};

export default function DuvalCountyFloridaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-8 text-center">
          Duval County Florida Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Duval County, Florida.
            Compare coverage options for Jacksonville, Neptune Beach, Atlantic Beach, and surrounding areas
            with access to Mayo Clinic Jacksonville, Baptist Health, UF Health Jacksonville, and other premier Florida providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">
            Top Medicare Plans in Duval County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Duval County with
                extensive Jacksonville provider networks and competitive benefits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Large Jacksonville provider network</li>
                <li>• Prescription drug coverage included</li>
                <li>• Extra benefits package</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to Mayo Clinic Jacksonville and other premier healthcare systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Access to Mayo Clinic</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">WellCare by Allwell</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with focus on
                Florida community health and affordable care in Duval County.
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

        <section className="mb-16 bg-teal-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6">
            Duval County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-teal-700 mb-2">Jacksonville Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Jacksonville</li>
                <li>• Riverside</li>
                <li>• Avondale</li>
                <li>• San Marco</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-teal-700 mb-2">Beaches</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Neptune Beach</li>
                <li>• Atlantic Beach</li>
                <li>• Jacksonville Beach</li>
                <li>• Fernandina Beach</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-teal-700 mb-2">Westside</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Orange Park</li>
                <li>• Green Cove Springs</li>
                <li>• Oakleaf</li>
                <li>• Argyle</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-teal-700 mb-2">Northside</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fernandina Beach</li>
                <li>• Yulee</li>
                <li>• Callahan</li>
                <li>• Hilliard</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">
            Premier Healthcare Providers in Duval County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-teal-700 mb-4">World-Class Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mayo Clinic Jacksonville
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Baptist Health Jacksonville
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UF Health Jacksonville
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memorial Hospital Jacksonville
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Centers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mayo Clinic Cancer Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UF Health Heart & Vascular Hospital
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Baptist Neurological Institute
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transplant and specialty centers
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-800 mb-8 text-center">
            Medicare Advantage Benefits in Duval County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-teal-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-teal-700 mb-4">Enhanced Florida Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to Mayo Clinic excellence
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hurricane season emergency coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth and virtual care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            Special Considerations for Duval County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Mayo Clinic Access</h3>
              <p className="text-sm text-teal-700">
                Unique access to world-renowned Mayo Clinic Jacksonville,
                offering cutting-edge treatments and specialized care.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Hurricane Preparedness</h3>
              <p className="text-sm text-blue-700">
                Special hurricane season benefits including emergency prescriptions,
                temporary out-of-area coverage, and evacuation support.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Beach Community Living</h3>
              <p className="text-sm text-orange-700">
                Medicare plans designed for coastal living with coverage
                for beach communities and seasonal resident considerations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-teal-800 mb-6 text-center">
            Resources for Duval County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Florida SHINE Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Duval County</p>
              <Link href="/medicare-advantage" className="text-teal-600 hover:text-teal-800 underline">
                Find Jacksonville Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Duval County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Mayo Clinic Information</h3>
              <p className="text-gray-600 mb-4">Learn about Medicare coverage at Mayo Clinic Jacksonville</p>
              <Link href="/contact" className="text-orange-600 hover:text-orange-800 underline">
                Mayo Clinic Medicare →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Duval County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Duval County, Florida.
            Access world-class healthcare providers throughout Jacksonville and surrounding communities
            including Mayo Clinic and other premier medical centers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Jacksonville Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-teal-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}