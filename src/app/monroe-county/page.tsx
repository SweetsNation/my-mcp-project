import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Monroe County 2025 - Rochester NY Healthcare Coverage',
  description: 'Find the best Medicare Advantage plans in Monroe County, NY. University of Rochester, Rochester Regional coverage with zero premium options in Rochester area.',
  keywords: 'Medicare Advantage Monroe County NY, Rochester Medicare plans, University of Rochester Medicare, Rochester Regional Medicare, Monroe County healthcare'
};

export default function MedicareAdvantageMonroeCounty() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Medicare Advantage Plans Monroe County NY 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Monroe County with access to
            University of Rochester Medical Center, Rochester Regional Health,
            and extensive healthcare networks throughout the Rochester area.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Top Medicare Plans in Monroe County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">University of Rochester</h3>
              <p className="text-gray-700 mb-4">
                Access to UR Medicine including Strong Memorial Hospital, Highland Hospital,
                and the extensive University of Rochester physician network.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Academic medical center</li>
                <li>• Comprehensive specialty care</li>
                <li>• Research hospital network</li>
                <li>• Multiple Rochester locations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-medium text-green-700 mb-4">Rochester Regional Health</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive healthcare system with multiple hospitals and medical centers
                throughout Monroe County and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Multiple hospital locations</li>
                <li>• Integrated care model</li>
                <li>• Community-focused care</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Monroe County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">City of Rochester</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Rochester</li>
                <li>• East Rochester</li>
                <li>• Northwest Rochester</li>
                <li>• Southwest Rochester</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Brighton</li>
                <li>• Irondequoit</li>
                <li>• Greece</li>
                <li>• Henrietta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-blue-700 mb-2">Outer Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Webster</li>
                <li>• Penfield</li>
                <li>• Pittsford</li>
                <li>• Fairport</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-green-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Monroe County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans in Monroe County, NY with access to
            premier healthcare networks throughout the Rochester area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Monroe County Plans
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