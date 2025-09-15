import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Raleigh Tech Innovation Medicare Advantage 2025 - Digital Health & Telemedicine Plans',
  description: 'Discover Raleigh\'s most innovative Medicare Advantage plans featuring cutting-edge technology, telemedicine, and digital health benefits. Compare tech-forward Medicare plans serving Research Triangle Park and Wake County.',
  keywords: 'Raleigh tech innovation Medicare, digital health Medicare Advantage Raleigh, telemedicine Medicare plans North Carolina, innovative Medicare Advantage RTP, tech-forward Medicare Raleigh 2025',
};

export default function RaleighTechInnovationMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center">
          Raleigh Tech Innovation Medicare Advantage Plans 2025
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Research Triangle Park Medicare Advantage Coverage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Discover cutting-edge Medicare Advantage plans designed specifically for Raleigh's tech-savvy community. 
              Our innovative plans feature digital health tools, telemedicine services, and technology-enhanced 
              healthcare benefits perfect for Research Triangle Park residents.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Digital Health Features</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Telemedicine consultations</li>
                  <li>• Mobile health apps</li>
                  <li>• Digital prescription management</li>
                  <li>• Virtual specialist visits</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Tech-Forward Benefits</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Wearable device integration</li>
                  <li>• AI-powered health insights</li>
                  <li>• Online health portals</li>
                  <li>• Digital wellness programs</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Why Choose Tech Innovation Medicare Advantage in Raleigh?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Digital Integration</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly integrate with your digital lifestyle with mobile apps and online health management tools.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Innovation Focus</h3>
                <p className="text-gray-600 text-sm">
                  Access to the latest medical technologies and innovative healthcare solutions from leading providers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">Convenience</h3>
                <p className="text-gray-600 text-sm">
                  Manage your healthcare from anywhere with telemedicine, digital prescriptions, and virtual consultations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Your Raleigh Tech Innovation Medicare Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

