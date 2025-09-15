import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Los Angeles County California Medicare Advantage 2025 - Best Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Los Angeles County, California. Compare plans, providers, and benefits for LA County residents with access to UCLA Health, Cedars-Sinai, and Kaiser Permanente.',
  keywords: 'Los Angeles County California Medicare, Medicare Advantage LA County, Los Angeles Medicare plans, California Medicare 2025, UCLA Health Medicare, Cedars-Sinai Medicare',
};

export default function LosAngelesCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Los Angeles County Medicare Advantage Plans 2025
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Los Angeles County Medicare Advantage Coverage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover comprehensive Medicare Advantage plans designed specifically for Los Angeles County residents. 
              Our plans provide access to California's premier healthcare providers including UCLA Health, 
              Cedars-Sinai, and Kaiser Permanente throughout LA County.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Major Healthcare Systems</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• UCLA Health network access</li>
                  <li>• Cedars-Sinai providers</li>
                  <li>• Kaiser Permanente facilities</li>
                  <li>• USC Keck Medicine access</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">LA County Coverage Areas</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Downtown Los Angeles</li>
                  <li>• Westside coverage</li>
                  <li>• San Fernando Valley</li>
                  <li>• South Bay area</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Why Choose Medicare Advantage in Los Angeles County?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">World-Class Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Access to internationally renowned medical centers and world-class specialists throughout LA County.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Comprehensive Benefits</h3>
                <p className="text-gray-600 text-sm">
                  Many plans include prescription drugs, dental, vision, and wellness programs with affordable premiums.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Diverse Options</h3>
                <p className="text-gray-600 text-sm">
                  Choose from a wide variety of plans designed to meet the diverse needs of LA County's multicultural population.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Your Los Angeles County Medicare Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

