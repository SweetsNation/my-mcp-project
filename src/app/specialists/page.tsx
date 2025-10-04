import type { Metadata } from 'next';
import TeamMemberLinking from '@/components/TeamMemberLinking';
import ToolLinking from '@/components/ToolLinking';
import ResourceLinking from '@/components/ResourceLinking';
import { generateSpecialistsPageSchema } from '@/lib/schema/team-schema';

// Structured Data for SEO
const structuredData = generateSpecialistsPageSchema({
  pagePath: '/specialists',
  pageTitle: 'Insurance Specialists & Licensed Agents | Expert Medicare & Health Insurance Advisors',
  pageDescription: 'Connect with our team of licensed insurance specialists. Expert Medicare advisors, ACA Marketplace specialists, and multi-line insurance agents.'
});

export const metadata: Metadata = {
  title: 'Insurance Specialists & Licensed Agents | Expert Medicare & Health Insurance Advisors | El-Mag Insurance',
  description: 'Connect with our team of licensed insurance specialists. Expert Medicare advisors, ACA Marketplace specialists, and multi-line insurance agents. Free consultations - call 331-343-2584.',
  keywords: 'insurance specialists, licensed insurance agents, Medicare specialists, ACA experts, health insurance advisors, insurance consultants, free insurance consultation',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/specialists',
  },
};

export default function SpecialistsPage() {
  return (
    <div className="bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">👥</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Insurance Specialists</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Connect with licensed experts who specialize in your specific insurance needs. 
              Get personalized guidance from our team of experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Member Showcase */}
      <TeamMemberLinking 
        userContext="general"
        showAvailability={true}
        maxMembers={6}
        showRatings={true}
        showResponseTime={true}
        layout="grid"
        showSpecializations={true}
        showLanguages={true}
        showStates={true}
      />

      {/* Specialist Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialist Categories</h2>
            <p className="text-lg text-gray-600">
              Find the right specialist for your insurance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medicare Specialists</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Services:</strong> Medicare Advantage, Medicare Supplement, Part D</div>
                <div><strong>Expertise:</strong> Plan comparison, enrollment guidance</div>
                <div><strong>Experience:</strong> 10+ years average</div>
                <div><strong>Languages:</strong> English & Spanish available</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ACA Marketplace Experts</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Services:</strong> Health Insurance Marketplace, subsidies</div>
                <div><strong>Expertise:</strong> Subsidy optimization, plan selection</div>
                <div><strong>Experience:</strong> 2-15 years</div>
                <div><strong>Languages:</strong> English & Spanish available</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Security Advisors</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Services:</strong> Social Security benefits, optimization</div>
                <div><strong>Expertise:</strong> Benefit maximization, timing strategies</div>
                <div><strong>Experience:</strong> 11+ years</div>
                <div><strong>Languages:</strong> English & Spanish available</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life Insurance Specialists</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Services:</strong> Life insurance, final expense</div>
                <div><strong>Expertise:</strong> Policy comparison, underwriting</div>
                <div><strong>Experience:</strong> 1-11 years</div>
                <div><strong>Languages:</strong> English & Spanish available</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Health Experts</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Services:</strong> International health insurance</div>
                <div><strong>Expertise:</strong> Global coverage, evacuation services</div>
                <div><strong>Experience:</strong> 15+ years</div>
                <div><strong>Languages:</strong> English & Spanish available</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Benefits Specialists</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Services:</strong> Group benefits, employer plans</div>
                <div><strong>Expertise:</strong> Benefit design, cost optimization</div>
                <div><strong>Experience:</strong> 11+ years</div>
                <div><strong>Languages:</strong> English available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Specialists */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Specialists?</h2>
            <p className="text-lg text-gray-600">
              What makes our team different from other insurance agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
              <p className="text-sm text-gray-600">
                All specialists are fully licensed and certified in their respective states and insurance types.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-sm text-gray-600">
                Combined experience of 50+ years serving thousands of satisfied clients across multiple states.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-State Coverage</h3>
              <p className="text-sm text-gray-600">
                Licensed across multiple states to serve clients regardless of their location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bilingual Service</h3>
              <p className="text-sm text-gray-600">
                Spanish-speaking specialists available to serve the Hispanic community effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Consultation Process Works</h2>
            <p className="text-lg text-gray-600">
              Simple steps to get the expert guidance you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Contact</h3>
              <p className="text-sm text-gray-600">
                Reach out via phone, contact form, or schedule a consultation with your preferred specialist.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Needs Assessment</h3>
              <p className="text-sm text-gray-600">
                Your specialist will assess your specific needs, budget, and preferences to understand your situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan Comparison</h3>
              <p className="text-sm text-gray-600">
                Receive personalized plan comparisons and recommendations based on your specific needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enrollment Support</h3>
              <p className="text-sm text-gray-600">
                Get expert guidance through the enrollment process and ongoing support after your plan is active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools for Specialist Selection */}
      <ToolLinking 
        currentTool=""
        userContext="general"
        showRelatedTools={true}
        maxTools={4}
        showFeatures={true}
        layout="grid"
      />

      {/* Resources for Understanding Insurance */}
      <ResourceLinking 
        currentResource=""
        currentCategory=""
        userContext="general"
        showTools={true}
        maxResources={4}
        maxTools={3}
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect with a Specialist?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our licensed experts are here to help you find the perfect insurance coverage. 
            Get personalized guidance and support throughout your insurance journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors text-center inline-block"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:331-343-2584"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center inline-block"
            >
              Call 331-343-2584
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
