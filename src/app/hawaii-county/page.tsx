import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hawaii County Hawaii Medicare Advantage 2025 - Big Island Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Hawaii County, Hawaii (Big Island). Compare plans, providers, and benefits for Hilo, Kona, and Big Island residents with specialized island healthcare coverage.',
  keywords: 'Hawaii County Hawaii Medicare, Medicare Advantage Hawaii County, Big Island Medicare plans, Hilo Medicare coverage, Kona Medicare plans, Hawaii Medicare 2025',
};

export default function HawaiiCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Hawaii County Medicare Advantage Plans 2025
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Big Island Medicare Advantage Coverage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover comprehensive Medicare Advantage plans designed specifically for Hawaii County residents. 
              Our Big Island plans provide access to quality healthcare providers in Hilo, Kona, and throughout 
              Hawaii County with specialized island healthcare services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Hilo Area Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hilo Medical Center network access</li>
                  <li>• Local primary care physicians</li>
                  <li>• Specialized island healthcare services</li>
                  <li>• Telemedicine options</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Kona Area Coverage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Kona Community Hospital access</li>
                  <li>• West Hawaii healthcare providers</li>
                  <li>• Emergency and urgent care</li>
                  <li>• Prescription drug coverage</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Why Choose Medicare Advantage in Hawaii County?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏝️</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Island Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Specialized healthcare services designed for Hawaii's unique island environment and population needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Quality Providers</h3>
                <p className="text-gray-600 text-sm">
                  Access to Hawaii's leading healthcare providers and medical facilities across the Big Island.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Cost Savings</h3>
                <p className="text-gray-600 text-sm">
                  Many plans offer $0 premiums with comprehensive coverage including prescription drugs and dental.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Your Hawaii County Medicare Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

