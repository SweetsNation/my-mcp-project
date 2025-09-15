import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lee County Florida Medicare Advantage 2025 - Southwest Florida Medicare Plans',
  description: 'Find the best Medicare Advantage plans in Lee County, Florida. Compare plans, providers, and benefits for Fort Myers, Cape Coral, Bonita Springs, and surrounding areas with access to Lee Health System, NCH Healthcare, and premier Florida providers.',
  keywords: 'Lee County Florida Medicare, Medicare Advantage Lee County, Fort Myers Medicare plans, Cape Coral Medicare coverage, Florida Medicare 2025, Lee Health Medicare'
};

export default function LeeCountyFloridaMedicare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-8 text-center">
          Lee County Florida Medicare Advantage Plans 2025
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Discover comprehensive Medicare Advantage plans in Lee County, Florida.
            Compare coverage options for Fort Myers, Cape Coral, Bonita Springs, Estero, and surrounding Southwest Florida communities
            with access to Lee Health System, NCH Healthcare, and premier Florida healthcare providers.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Top Medicare Plans in Lee County
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-medium text-orange-700 mb-4">Humana Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive Medicare Advantage plans serving Southwest Florida with
                extensive provider networks and competitive benefits for Lee County residents.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• $0 premium options available</li>
                <li>• Large Southwest Florida network</li>
                <li>• Part B give back benefits</li>
                <li>• Extra benefits package</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-medium text-blue-700 mb-4">UnitedHealthcare AARP</h3>
              <p className="text-gray-700 mb-4">
                Medicare Advantage plans designed for AARP members with special
                considerations for Florida retirees and snowbird populations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• AARP member benefits</li>
                <li>• Snowbird-friendly coverage</li>
                <li>• Access to Lee Health System</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-2xl font-medium text-red-700 mb-4">Florida Blue Medicare</h3>
              <p className="text-gray-700 mb-4">
                Local Florida Medicare Advantage plans with deep understanding of
                Southwest Florida healthcare needs and provider relationships.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Local Florida focus</li>
                <li>• Hurricane/disaster coverage</li>
                <li>• Lee Health network access</li>
                <li>• Prescription drug coverage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-orange-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6">
            Lee County Coverage Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">Central Lee County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fort Myers</li>
                <li>• Cape Coral</li>
                <li>• Lehigh Acres</li>
                <li>• North Fort Myers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">South Lee County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bonita Springs</li>
                <li>• Estero</li>
                <li>• San Carlos Park</li>
                <li>• Three Oaks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">East Lee County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Alva</li>
                <li>• Buckingham</li>
                <li>• Tice</li>
                <li>• Olga</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-orange-700 mb-2">Coastal Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fort Myers Beach</li>
                <li>• Sanibel</li>
                <li>• Captiva</li>
                <li>• Pine Island</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Major Healthcare Providers in Lee County
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-orange-700 mb-4">Premier Health Systems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lee Health System
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  NCH Healthcare System
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gulf Coast Medical Center
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  HealthPark Medical Center
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-medium text-blue-700 mb-4">Specialized Florida Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hurricane preparedness coverage
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Snowbird coordination services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cancer treatment centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Senior wellness programs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-8 text-center">
            Medicare Advantage Benefits in Lee County
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
                <h3 className="text-xl font-medium text-orange-700 mb-4">Enhanced Florida Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hurricane and disaster coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Snowbird seasonal coordination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Beach community coverage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Part B premium give back options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Special Considerations for Lee County Residents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Snowbird Population</h3>
              <p className="text-sm text-orange-700">
                Many Medicare plans offer special coordination for seasonal residents
                who split time between Florida and northern states during winter months.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Hurricane Preparedness</h3>
              <p className="text-sm text-blue-700">
                Southwest Florida Medicare plans include coverage for hurricane evacuation,
                emergency treatment, and temporary out-of-area care during disasters.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Retiree Community</h3>
              <p className="text-sm text-red-700">
                Lee County's large retiree population benefits from enhanced wellness programs,
                preventive care, and senior-focused healthcare services.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Resources for Lee County Residents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Florida SHIP Program</h3>
              <p className="text-gray-600 mb-4">Free Medicare counseling services for Lee County residents</p>
              <Link href="/medicare-advantage" className="text-orange-600 hover:text-orange-800 underline">
                Find Local Counselors →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Plan Comparison</h3>
              <p className="text-gray-600 mb-4">Compare Medicare plans with Florida-specific benefits</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                Compare Plans →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-red-700 mb-3">Hurricane Coverage Info</h3>
              <p className="text-gray-600 mb-4">Learn about disaster preparedness and coverage</p>
              <Link href="/contact" className="text-red-600 hover:text-red-800 underline">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-orange-800 mb-6 text-center">
            Medicare Savings Opportunities
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-orange-700 mb-4">
                Part B Premium Give Back Plans
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Many Lee County Medicare Advantage plans offer Part B premium give back benefits,
                reducing your monthly Medicare costs. Florida retirees can save up to $148.50 monthly with{' '}
                <Link href="/part-b-premium-give-back" className="text-orange-600 hover:text-orange-800 underline">
                  Part B give back plans
                </Link>{' '}
                available throughout Southwest Florida.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-orange-700 mb-4">
                Zero Premium Options
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Multiple $0 premium Medicare Advantage plans serve Lee County, offering
                comprehensive coverage without monthly plan premiums while including
                prescription drug coverage and additional benefits.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-orange-700 mb-4">
                Migration Path Benefits
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Retirees moving from high-cost areas can compare benefits. Northern retirees from areas like{' '}
                <Link href="/medicare-advantage-enrollment-guide-research-triangle" className="text-orange-600 hover:text-orange-800 underline">
                  Research Triangle NC
                </Link>{' '}
                often find enhanced benefits and lower costs in Southwest Florida Medicare plans.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-6">
            Find Your Perfect Lee County Medicare Plan
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Compare Medicare Advantage plans available in Lee County, Florida.
            Access premier Southwest Florida healthcare providers
            with comprehensive coverage and snowbird-friendly benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare Lee County Plans
            </Link>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call 331-E-HEALTH
            </a>
          </div>
        </section>

        {/* Cross-reference other locations */}
        <section className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold text-orange-800 mb-6">
            Compare Lee County with Other Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">
                Moving from Research Triangle?
              </h3>
              <p className="text-gray-600 mb-4">
                Compare NC to Florida Medicare benefits and find enhanced coverage in Lee County.
              </p>
              <Link href="/medicare-advantage-enrollment-guide-research-triangle" className="text-orange-600 hover:text-orange-800 font-medium">
                NC Comparison →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                Dual Eligible Benefits
              </h3>
              <p className="text-gray-600 mb-4">
                If you qualify for Medicare and Medicaid, compare D-SNP options with standard plans.
              </p>
              <Link href="/d-snp-plans-davidson-county-dual-eligible-benefits" className="text-blue-600 hover:text-blue-800 font-medium">
                D-SNP Options →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-red-700 mb-3">
                Premium Savings Focus
              </h3>
              <p className="text-gray-600 mb-4">
                Maximize your Medicare savings with Part B give back and zero premium combinations.
              </p>
              <Link href="/part-b-premium-give-back" className="text-red-600 hover:text-red-800 font-medium">
                Savings Guide →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}