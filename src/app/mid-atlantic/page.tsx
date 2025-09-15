import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mid-Atlantic Medicare Plans 2025 | Coverage for NY, NJ, PA, DE, MD, VA, WV | Health Insurance Guide',
  description: 'Find the best Medicare Advantage and supplement plans across the Mid-Atlantic region. Compare coverage options in New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, and West Virginia.',
  keywords: 'Mid-Atlantic Medicare plans, Medicare Advantage Mid-Atlantic, Medicare supplement Northeast, New York Medicare, New Jersey Medicare plans, Pennsylvania Medicare coverage, Delaware Medicare, Maryland Medicare, Virginia Medicare, West Virginia Medicare plans'
};

export default function MidAtlanticMedicarePlans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Mid-Atlantic Medicare Plans 2025: Comprehensive Regional Coverage
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover Medicare Advantage and supplement plans across the Mid-Atlantic region.
            Compare comprehensive coverage options tailored for residents of New York, New Jersey,
            Pennsylvania, Delaware, Maryland, Virginia, and West Virginia.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Mid-Atlantic States Medicare Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">New York</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare coverage for New York residents with access to world-class
                healthcare networks including NYC Health + Hospitals and major upstate systems.
              </p>
              <Link href="/medicare-supplement-new-york" className="text-blue-600 hover:text-blue-800 underline">
                View New York Medicare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">New Jersey</h3>
              <p className="text-gray-700 mb-4">
                Garden State Medicare options with extensive provider networks covering North Jersey,
                Central Jersey, and South Jersey regions.
              </p>
              <Link href="/medicare-advantage" className="text-green-600 hover:text-green-800 underline">
                Explore NJ Medicare Options →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Pennsylvania</h3>
              <p className="text-gray-700 mb-4">
                Keystone State coverage including Philadelphia, Pittsburgh, and rural Pennsylvania
                with specialized plans for diverse healthcare needs.
              </p>
              <Link href="/medicare-advantage" className="text-purple-600 hover:text-purple-800 underline">
                Find PA Medicare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-2xl font-medium text-red-700 mb-4">Delaware</h3>
              <p className="text-gray-700 mb-4">
                First State Medicare solutions with access to Christiana Care and other regional
                healthcare systems serving Delaware residents.
              </p>
              <Link href="/medicare-advantage" className="text-red-600 hover:text-red-800 underline">
                View DE Medicare Coverage →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-medium text-yellow-700 mb-4">Maryland</h3>
              <p className="text-gray-700 mb-4">
                Old Line State coverage featuring Johns Hopkins, University of Maryland,
                and MedStar networks across Baltimore, DC metro, and Eastern Shore.
              </p>
              <Link href="/medicare-advantage" className="text-yellow-600 hover:text-yellow-800 underline">
                Explore MD Medicare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-medium text-indigo-700 mb-4">Virginia</h3>
              <p className="text-gray-700 mb-4">
                Commonwealth coverage including Northern Virginia, Richmond, Norfolk,
                and rural areas with specialized Tricare supplement options.
              </p>
              <Link href="/medicare-advantage" className="text-indigo-600 hover:text-indigo-800 underline">
                Find VA Medicare Options →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Regional Medicare Advantage Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-blue-700 mb-4">Enhanced Coverage Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Zero premium Medicare Advantage plans available across most Mid-Atlantic states
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prescription drug coverage (Part D) included in most plans
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dental, vision, and hearing aid benefits
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Wellness programs and gym memberships
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-blue-700 mb-4">Regional Specialties</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Major academic medical centers coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Urban and rural healthcare network access
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Transportation benefits for medical appointments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Telehealth services expansion
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Mid-Atlantic Medicare Enrollment Deadlines 2025
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">DEC</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Enrollment</h3>
                <p className="text-gray-600">October 15 - December 7, 2024</p>
                <p className="text-sm text-gray-500 mt-2">Annual opportunity to change plans</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">JAN</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Coverage Begins</h3>
                <p className="text-gray-600">January 1, 2025</p>
                <p className="text-sm text-gray-500 mt-2">New plan benefits start</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">MAR</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medicare Advantage Open Enrollment</h3>
                <p className="text-gray-600">January 1 - March 31, 2025</p>
                <p className="text-sm text-gray-500 mt-2">Switch back to Original Medicare</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Mid-Atlantic Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare Medicare Advantage and supplement plans across the Mid-Atlantic region.
            Get personalized recommendations based on your location, health needs, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Plans Now
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}