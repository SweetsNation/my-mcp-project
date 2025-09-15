import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medicare Advantage Plans Tarrant County Texas 2025 - Fort Worth Healthcare Coverage',
  description: 'Find the best Medicare Advantage plans in Tarrant County, Texas. JPS Health Network, Texas Health Resources coverage with zero premium options in Fort Worth DFW area.',
  keywords: 'Medicare Advantage Tarrant County Texas, Fort Worth Medicare plans, JPS Health Medicare, Texas Health Resources Medicare, Tarrant County healthcare'
};

export default function MedicareAdvantageTarrantCountyTexas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-8 text-center">
          Medicare Advantage Plans Tarrant County Texas 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Tarrant County with access to
            JPS Health Network, Texas Health Resources, and premier healthcare systems
            throughout Fort Worth and the DFW metroplex.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">
            Top Medicare Plans in Tarrant County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">JPS Health Network</h3>
              <p className="text-gray-700 mb-4">
                Tarrant County's safety net health system with JPS Hospital and extensive
                community health centers throughout Fort Worth and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Community-focused care</li>
                <li>• Comprehensive services</li>
                <li>• Multiple clinic locations</li>
                <li>• Bilingual services available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">Texas Health Resources</h3>
              <p className="text-gray-700 mb-4">
                One of Texas's largest faith-based health systems with multiple hospitals
                and medical centers across Tarrant County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Multiple hospital locations</li>
                <li>• Comprehensive network</li>
                <li>• Advanced medical technology</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-purple-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-purple-800 mb-6">
            Tarrant County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">Fort Worth</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Fort Worth</li>
                <li>• North Fort Worth</li>
                <li>• South Fort Worth</li>
                <li>• West Fort Worth</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">Northeast County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Arlington</li>
                <li>• Grand Prairie</li>
                <li>• Euless</li>
                <li>• Bedford</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-2">Other Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mansfield</li>
                <li>• Grapevine</li>
                <li>• Keller</li>
                <li>• Southlake</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Tarrant County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans in Tarrant County, Texas with access to
            leading healthcare networks throughout Fort Worth and the DFW area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Tarrant County Plans
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