import { Metadata } from 'next';
import Link from 'next/link';
import SocialSecurityAnalytics from '@/components/SocialSecurityAnalytics';
import SEOMarketingEnhancement from '@/components/SEOMarketingEnhancement';
import MarketingAutomation from '@/components/MarketingAutomation';

export const metadata: Metadata = {
  title: 'Social Security Benefits Analysis 2025 | Maximize Your Retirement Income | Free Consultation',
  description: 'Expert Social Security claiming strategies to maximize your lifetime benefits. Get free analysis of optimal timing, spousal benefits, and retirement planning. Call 331-E-HEALTH for personalized consultation.',
  keywords: 'Social Security benefits analysis, Social Security claiming strategies, retirement planning, Social Security optimization, when to claim Social Security, Social Security calculator, spousal benefits, delayed retirement credits, Social Security consultation, maximize Social Security benefits, retirement income planning, Social Security timing, full retirement age, early retirement Social Security',
};

export default function SocialSecurityAnalysisPage() {
  return (
    <main className="min-h-screen">
      {/* Analytics Component */}
      <SocialSecurityAnalytics 
        pageType="main"
        userAge={62}
        retirementYear={2025}
        maritalStatus="married"
        location="United States"
      />
      
      {/* SEO & Marketing Enhancement */}
      <SEOMarketingEnhancement 
        pageType="social-security"
        targetKeywords={['social security benefits analysis', 'social security claiming strategies', 'retirement planning']}
        localTarget="United States"
      />
      
      {/* Marketing Automation */}
      <MarketingAutomation 
        pageType="social-security"
        userSegment="new_visitor"
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Social Security Benefits Analysis 2025
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Maximize your Social Security benefits with expert claiming strategies. Get personalized analysis to optimize retirement timing and increase lifetime income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors"
            >
              Get Free Analysis
            </Link>
            <Link
              href="/resources"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Social Security Analysis Matters</h2>
            <p className="text-gray-600 mb-4">
              Social Security benefits can vary significantly based on when you claim them. Our analysis helps you understand 
              the optimal claiming strategy for your unique situation.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Maximize lifetime benefits with optimal claiming strategies</li>
              <li>Coordinate with <Link href="/medicare-enrollment-timeline" className="text-blue-600 hover:text-blue-800 underline">Medicare timing</Link> and <Link href="/medicare-advantage" className="text-blue-600 hover:text-blue-800 underline">Medicare plans</Link></li>
              <li>Consider spousal benefits and survivor planning</li>
              <li>Plan for tax implications and retirement income</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Analysis Factors</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-claiming-age="analysis">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Claiming Age Strategy</h3>
                <p className="text-sm text-gray-600">Early (62), Full Retirement Age, or Delayed (70)</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-retirement-factor="life_expectancy">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Life Expectancy Analysis</h3>
                <p className="text-sm text-gray-600">Family history and health factors</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-retirement-factor="other_income">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Other Income Sources</h3>
                <p className="text-sm text-gray-600">Pensions, investments, and part-time work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Analysis Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-strategy-type="benefit_calculation">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Benefit Calculation</h3>
              <p className="text-gray-600">Accurate estimates based on your earnings history</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-strategy-type="claiming_strategy">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Claiming Strategy</h3>
              <p className="text-gray-600">Optimal timing recommendations for your situation</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" data-strategy-type="retirement_planning">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Retirement Planning</h3>
              <p className="text-gray-600">Integration with overall retirement strategy</p>
            </div>
          </div>
        </div>

        {/* Medicare Coordination Section */}
        <section className="mb-12">
          <div className="bg-blue-50 border-2 border-blue-300 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Coordinate Social Security with Medicare</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Your Social Security claiming decision impacts Medicare enrollment. Get expert guidance on timing both benefits optimally.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Medicare Enrollment Timeline</h3>
                <p className="text-gray-600 mb-4">
                  Understand when you must enroll in Medicare and how it relates to your Social Security timing.
                </p>
                <Link 
                  href="/medicare-enrollment-timeline"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  View Timeline →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Medicare Advantage Plans</h3>
                <p className="text-gray-600 mb-4">
                  Compare Medicare Advantage options available when you become Medicare eligible.
                </p>
                <Link 
                  href="/medicare-advantage"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Explore Plans →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Medicare Supplement</h3>
                <p className="text-gray-600 mb-4">
                  Learn about Medigap policies to complement your Social Security and Medicare strategy.
                </p>
                <Link 
                  href="/medicare-supplement"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Your Retirement Planning</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Insurance</h3>
              <p className="text-gray-600 mb-4">Bridge coverage until Medicare eligibility with marketplace plans.</p>
              <Link 
                href="/health-insurance-marketplace"
                className="text-green-600 hover:text-green-800 font-semibold underline"
              >
                Explore Options →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supplemental Coverage</h3>
              <p className="text-gray-600 mb-4">Protect against unexpected medical costs with gap insurance.</p>
              <Link 
                href="/supplemental-insurance"
                className="text-teal-600 hover:text-teal-800 font-semibold underline"
              >
                Get Quotes →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility Check</h3>
              <p className="text-gray-600 mb-4">Verify your eligibility for various benefits and programs.</p>
              <Link 
                href="/eligibility"
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
              >
                Check Eligibility →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Calculators</h3>
              <p className="text-gray-600 mb-4">Estimate costs for Medicare and health insurance options.</p>
              <Link 
                href="/tools"
                className="text-orange-600 hover:text-orange-800 font-semibold underline"
              >
                Use Tools →
              </Link>
            </div>
          </div>
        </section>

        {/* Expert Team Section */}
        <section className="mb-12">
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Meet Our Social Security Experts</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our licensed specialists have years of experience helping clients optimize their Social Security benefits and coordinate retirement planning.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Magdalena Salinas</h3>
                  <p className="text-purple-600 font-semibold mb-3">Senior Retirement Planning Specialist</p>
                  <p className="text-gray-600 mb-4">15+ years helping clients maximize Social Security and coordinate Medicare benefits.</p>
                  <Link 
                    href="/team/magdalena-salinas"
                    className="text-purple-600 hover:text-purple-800 font-semibold underline"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Specialist Team</h3>
                  <p className="text-purple-600 font-semibold mb-3">Licensed Insurance & Benefits Advisors</p>
                  <p className="text-gray-600 mb-4">Comprehensive expertise in Social Security, Medicare, and retirement planning.</p>
                  <Link 
                    href="/team"
                    className="text-purple-600 hover:text-purple-800 font-semibold underline"
                  >
                    Meet the Team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Social Security & Retirement Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Educational Guides</h3>
              <p className="text-gray-600 mb-4">In-depth guides on Social Security rules, Medicare coordination, and retirement planning strategies.</p>
              <Link 
                href="/resources"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                Browse Resources →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Planning Tools</h3>
              <p className="text-gray-600 mb-4">Interactive calculators and tools to help you plan your Social Security and retirement strategy.</p>
              <Link 
                href="/tools"
                className="text-green-600 hover:text-green-800 font-semibold underline"
              >
                Access Tools →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📝 Latest Updates</h3>
              <p className="text-gray-600 mb-4">Stay informed about Social Security changes, Medicare updates, and retirement planning news.</p>
              <Link 
                href="/blog"
                className="text-purple-600 hover:text-purple-800 font-semibold underline"
              >
                Read Blog →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Social Security Analysis?</h2>
          <p className="text-gray-600 mb-6">
            Our retirement planning specialists can provide a comprehensive Social Security analysis 
            to help you make informed decisions about your future. Get started with a <Link href="/contact" className="text-purple-600 hover:text-purple-800 underline font-semibold">free consultation</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Download Planning Guide
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Already have Medicare? Learn about <Link href="/medicare-2025-changes" className="text-purple-600 hover:text-purple-800 underline">2025 Medicare changes</Link> or explore <Link href="/medicare-supplement-plan-g" className="text-purple-600 hover:text-purple-800 underline">Medicare Supplement Plan G</Link>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
