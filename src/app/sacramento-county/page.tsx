import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sacramento County California Medicare Advantage 2025 - Best Medicare Plans & Coverage',
  description: 'Find the best Medicare Advantage plans in Sacramento County, California. Compare plans, providers, and benefits for Sacramento, Elk Grove, and surrounding areas with access to UC Davis, Sutter Health, and Kaiser Permanente.',
  keywords: 'Sacramento County California Medicare, Medicare Advantage Sacramento County, Sacramento Medicare plans, Elk Grove Medicare coverage, California Medicare 2025',
};

export default function SacramentoCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-8 text-center">
          Sacramento County Medicare Advantage Plans 2025
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Sacramento County Medicare Advantage Coverage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover comprehensive Medicare Advantage plans designed specifically for Sacramento County residents. 
              Our plans provide access to California's leading healthcare providers including UC Davis Health, 
              Sutter Health, and Kaiser Permanente throughout Sacramento, Elk Grove, and surrounding communities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Sacramento Area Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• UC Davis Health network access</li>
                  <li>• Sutter Health providers</li>
                  <li>• Kaiser Permanente facilities</li>
                  <li>• Mercy General Hospital access</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Elk Grove & Surrounding Areas</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Elk Grove medical facilities</li>
                  <li>• Folsom healthcare providers</li>
                  <li>• Citrus Heights coverage</li>
                  <li>• Rancho Cordova medical access</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              Why Choose Medicare Advantage in Sacramento County?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Top Healthcare Systems</h3>
                <p className="text-gray-600 text-sm">
                  Access to world-class healthcare systems including UC Davis, Sutter Health, and Kaiser Permanente.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-600 text-sm">
                  Many plans include prescription drugs, dental, vision, and wellness programs with $0 premiums.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Local Medicare specialists who understand Sacramento County's unique healthcare landscape and needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Your Sacramento County Medicare Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

