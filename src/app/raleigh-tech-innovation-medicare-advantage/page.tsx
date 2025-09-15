import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Raleigh Tech Innovation Medicare Advantage 2025 - Digital Health & Telemedicine Plans',
  description: 'Discover Raleigh's most innovative Medicare Advantage plans featuring cutting-edge technology, telemedicine, and digital health benefits. Compare tech-forward Medicare plans serving Research Triangle Park and Wake County.',
  keywords: 'Raleigh tech innovation Medicare, digital health Medicare Advantage Raleigh, telemedicine Medicare plans North Carolina, innovative Medicare Advantage RTP, tech-forward Medicare Raleigh 2025'
};

export default function RaleighTechInnovationMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center">
          Raleigh Tech Innovation Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Explore Raleigh's most innovative Medicare Advantage plans featuring cutting-edge technology,
            advanced telemedicine capabilities, and digital health benefits designed for tech-savvy seniors
            in the Research Triangle Park area and Wake County.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Tech-Forward Medicare Plans in Raleigh
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-medium text-indigo-700 mb-4">UnitedHealthcare AARP Digital</h3>
              <p className="text-gray-700 mb-4">
                Advanced Medicare Advantage plan with comprehensive digital health platform,
                AI-powered health insights, and integrated telemedicine services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AI health monitoring</li>
                <li>• 24/7 telehealth platform</li>
                <li>• Digital pharmacy services</li>
                <li>• Wearable device integration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Humana Honor Innovation</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plan featuring virtual care coordination,
                remote patient monitoring, and digital wellness programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Remote patient monitoring</li>
                <li>• Virtual care coordination</li>
                <li>• Digital wellness coaching</li>
                <li>• Mobile health apps</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-2xl font-medium text-teal-700 mb-4">Anthem Blue Cross Digital Health</h3>
              <p className="text-gray-700 mb-4">
                Innovative Medicare plan with digital-first approach to healthcare delivery,
                featuring advanced analytics and personalized health insights.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Predictive health analytics</li>
                <li>• Digital health coaching</li>
                <li>• Telehealth specialists</li>
                <li>• Smart medication management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
            Research Triangle Park Innovation Hub
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Digital Health Benefits</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Telemedicine consultations</li>
                <li>• Remote health monitoring</li>
                <li>• AI-powered health insights</li>
                <li>• Digital pharmacy services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Technology Integration</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wearable device connectivity</li>
                <li>• Mobile health applications</li>
                <li>• Electronic health records</li>
                <li>• Smart home health devices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-indigo-700 mb-2">Innovation Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Virtual reality therapy</li>
                <li>• Predictive health modeling</li>
                <li>• Personalized care plans</li>
                <li>• Digital wellness programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Innovative Healthcare Providers in Raleigh
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">Tech-Enabled Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Duke Health System (Digital Innovation)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UNC Health (Telemedicine Leaders)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  WakeMed Health (Digital Health Platform)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rex Healthcare (Innovative Care Models)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-purple-700 mb-4">Digital Health Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Remote patient monitoring
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Virtual specialist consultations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI-powered diagnostics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Digital therapeutic programs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-8 text-center">
            Advanced Medicare Benefits in Raleigh Tech Hub
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-indigo-700 mb-4">Digital Health Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Unlimited telemedicine visits
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wearable device coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    AI health analytics platform
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Digital medication management
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-700 mb-4">Innovation-First Care</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Virtual reality therapy sessions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Predictive health modeling
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized digital coaching
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Smart home health integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            Technology-Enhanced Medicare Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-indigo-600 mb-2">24/7</div>
              <h3 className="font-semibold text-gray-900 mb-2">Telemedicine Access</h3>
              <p className="text-sm text-gray-600">Round-the-clock virtual care</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-2">AI</div>
              <h3 className="font-semibold text-gray-900 mb-2">Health Analytics</h3>
              <p className="text-sm text-gray-600">Predictive health insights</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-teal-600 mb-2">RPM</div>
              <h3 className="font-semibold text-gray-900 mb-2">Remote Monitoring</h3>
              <p className="text-sm text-gray-600">Continuous health tracking</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-2">VR</div>
              <h3 className="font-semibold text-gray-900 mb-2">Therapy Programs</h3>
              <p className="text-sm text-gray-600">Immersive healing experiences</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
            Resources for Tech-Savvy Seniors in Raleigh
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Digital Health Training</h3>
              <p className="text-gray-600 mb-4">Learn to use innovative Medicare technology features</p>
              <Link href="/medicare-advantage" className="text-indigo-600 hover:text-indigo-800 underline">
                Digital Training →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Innovation Comparison</h3>
              <p className="text-gray-600 mb-4">Compare tech features across Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Compare Tech Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Tech Support</h3>
              <p className="text-gray-600 mb-4">Get help with Medicare technology features</p>
              <Link href="/contact" className="text-teal-600 hover:text-teal-800 underline">
                Get Tech Support →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Experience the Future of Medicare in Raleigh
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Join the healthcare innovation revolution with Raleigh's most advanced Medicare Advantage plans.
            Access cutting-edge telemedicine, AI health insights, and digital wellness programs in the heart of Research Triangle Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Tech Medicare Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}