import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Monroe County Florida Medicare Advantage 2025 - Florida Keys Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Monroe County, Florida (Florida Keys). Compare plans, providers, and benefits for Key Largo, Islamorada, Marathon, and Key West residents.',
  keywords: 'Monroe County Florida Medicare, Medicare Advantage Monroe County, Florida Keys Medicare plans, Key West Medicare coverage, Marathon Key Medicare, Key Largo Medicare 2025',
};

export default function MonroeCountyFloridaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-8 text-center">
          Monroe County Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">
              Florida Keys Medicare Advantage Coverage
          </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover comprehensive Medicare Advantage plans designed specifically for Monroe County residents 
              throughout the Florida Keys. Our island plans provide access to quality healthcare providers 
              from Key Largo to Key West with specialized coastal healthcare services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Upper Keys Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Key Largo healthcare providers</li>
                  <li>• Islamorada medical services</li>
                  <li>• Tavernier area coverage</li>
                  <li>• Emergency and urgent care</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Lower Keys Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Marathon Key medical facilities</li>
                  <li>• Key West healthcare providers</li>
                  <li>• Lower Keys specialist access</li>
                  <li>• Telemedicine options</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">
              Why Choose Medicare Advantage in Monroe County?
          </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏝️</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">Island Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Specialized healthcare services designed for Florida Keys residents with island-specific medical needs.
              </p>
            </div>

              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚁</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">Emergency Access</h3>
                <p className="text-gray-600 text-sm">
                  Emergency medical transportation and access to mainland facilities when needed for specialized care.
              </p>
            </div>

              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">Prescription Coverage</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive prescription drug coverage with mail-order options perfect for island living.
              </p>
            </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Your Monroe County Medicare Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

