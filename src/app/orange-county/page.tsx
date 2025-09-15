import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Orange County California Medicare Advantage 2025 - Best Medicare Plans & Coverage',
  description: 'Find the best Medicare Advantage plans in Orange County, California. Compare plans, providers, and benefits for Anaheim, Irvine, Santa Ana, and surrounding areas with access to UC Irvine Health, Kaiser Permanente, and Hoag.',
  keywords: 'Orange County California Medicare, Medicare Advantage Orange County, Anaheim Medicare plans, Irvine Medicare coverage, Santa Ana Medicare, California Medicare 2025'
};

export default function OrangeCountyMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-8 text-center">
          Orange County California Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Orange County, California.
            Compare coverage options for Anaheim, Irvine, Santa Ana, Newport Beach, and surrounding areas
            with access to UC Irvine Health, Kaiser Permanente, Hoag, and other premier California healthcare providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Top Medicare Plans in Orange County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">Kaiser Permanente Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans with integrated healthcare delivery
                through Kaiser Permanente's extensive Orange County network.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Integrated healthcare system</li>
                <li>• Prescription drug coverage included</li>
                <li>• Coordinated care model</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with competitive benefits
                and access to Orange County's top healthcare providers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Nationwide coverage</li>
                <li>• Telehealth services</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-medium text-purple-700 mb-4">Anthem Blue Cross</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans offering comprehensive coverage with flexible
                provider networks throughout Orange County.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Flexible provider networks</li>
                <li>• Competitive premiums</li>
                <li>• Extra benefits included</li>
                <li>• Local customer service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-orange-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6">
            Orange County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">North Orange County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Anaheim</li>
                <li>• Fullerton</li>
                <li>• Buena Park</li>
                <li>• Placentia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">Central Orange County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Santa Ana</li>
                <li>• Orange</li>
                <li>• Garden Grove</li>
                <li>• Westminster</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">South Orange County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Irvine</li>
                <li>• Newport Beach</li>
                <li>• Mission Viejo</li>
                <li>• Laguna Beach</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">East Orange County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Huntington Beach</li>
                <li>• Costa Mesa</li>
                <li>• Yorba Linda</li>
                <li>• Brea</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Major Healthcare Providers in Orange County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-orange-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UC Irvine Health System
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Orange County
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hoag Memorial Hospital Presbyterian
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  St. Joseph Health Orange County
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Care Centers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cancer treatment centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cardiac care specialists
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Orthopedic surgery centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Urgent care networks
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Medicare Advantage Benefits in Orange County
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-orange-700 mb-4">Standard Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hospital and medical coverage (Parts A & B)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Prescription drug coverage (Part D)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Annual out-of-pocket maximums
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Emergency coverage nationwide
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-orange-700 mb-4">Enhanced California Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dental, vision, and hearing coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transportation to medical appointments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness programs and gym memberships
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Telehealth and virtual care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Orange County Medicare Plan Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Premium Healthcare Access</h3>
              <p className="text-sm text-orange-700">
                Access to some of California's top-rated hospitals and medical centers,
                including UC Irvine Health and Hoag Memorial Hospital Presbyterian.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Comprehensive Networks</h3>
              <p className="text-sm text-blue-700">
                Extensive provider networks covering all of Orange County with
                convenient access to specialists and primary care physicians.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Enhanced Benefits</h3>
              <p className="text-sm text-purple-700">
                Many plans include extra benefits like dental, vision, hearing aids,
                transportation, and wellness programs at no additional cost.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Resources for Orange County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">California HICAP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services in Orange County</p>
              <Link href="/medicare-advantage" className="text-orange-600 hover:text-orange-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare all Medicare plans in your Orange County zip code</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Enrollment Assistance</h3>
              <p className="text-gray-600 mb-4">Get help enrolling in Orange County Medicare plans</p>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline">
                Get Help →
              </Link>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-orange-600 to-purple-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Orange County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Orange County, California.
            Access premier healthcare providers throughout Anaheim, Irvine, Santa Ana, and surrounding communities
            with comprehensive coverage and enhanced benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Orange County Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}