import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - El-Mag Insurance',
  description: 'Terms and conditions for using El-Mag Insurance services and website for Medicare Advantage plan assistance.',
  keywords: 'terms of service, terms and conditions, user agreement, service terms',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-300">Last updated: January 1, 2024</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the El-Mag Insurance website and services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Services</h2>
            <p className="text-gray-700 mb-4">El-Mag Insurance provides:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Medicare Advantage plan comparison and enrollment assistance</li>
              <li>Educational resources about Medicare and healthcare coverage</li>
              <li>Licensed insurance agent consultation services</li>
              <li>Online tools and calculators for plan comparison</li>
              <li>Customer support for existing policyholders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and Registration</h2>
            <p className="text-gray-700 mb-4">To use our services, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Be at least 18 years of age</li>
              <li>Be eligible for Medicare benefits</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Provide truthful and accurate information</li>
              <li>Update your information when changes occur</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with the proper functioning of our website</li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
            <p className="text-gray-700 mb-4">
              We do not offer every Medicare plan available in your area. The plans we present are limited to 
              those offered by insurance carriers with whom we have contracts.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Guarantee of Coverage</h3>
            <p className="text-gray-700 mb-4">
              We cannot guarantee that you will be accepted for any particular plan. Final approval is subject 
              to the insurance carrier's underwriting process and eligibility requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Accuracy</h3>
            <p className="text-gray-700 mb-4">
              While we strive to provide accurate information, plan details, costs, and availability may change. 
              We recommend verifying all information directly with the insurance carrier or Medicare.gov.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
            <p className="text-gray-700 mb-4">You may not use our services to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Violate any local, state, or federal laws</li>
              <li>Submit false or misleading information</li>
              <li>Impersonate another person or entity</li>
              <li>Transmit harmful or malicious code</li>
              <li>Collect information about other users</li>
              <li>Use automated systems to access our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property 
              of El-Mag Insurance or its licensors and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-700">
              You may not reproduce, distribute, modify, or create derivative works from our content without 
              express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
              use, and protect your personal information. By using our services, you consent to our privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compensation and Commissions</h2>
            <p className="text-gray-700">
              El-Mag Insurance may receive compensation from insurance carriers for plans sold through our services. 
              This compensation does not affect the cost of your insurance plan or influence our recommendations, 
              which are based on your individual needs and preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, El-Mag Insurance shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
            <p className="text-gray-700">
              Our total liability for any claim related to our services shall not exceed the amount of 
              compensation we received from your insurance enrollment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless El-Mag Insurance from any claims, damages, or expenses 
              arising from your use of our services or violation of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to our services at any time, with or without cause, 
              with or without notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Your right to use our services ceases immediately</li>
              <li>We may delete your account and information</li>
              <li>Existing insurance policies remain in effect with the carriers</li>
              <li>These Terms continue to apply to past use of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These Terms of Service are governed by the laws of the State of Georgia, without regard to 
              conflict of law principles. Any disputes shall be resolved in the courts of Fulton County, Georgia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on 
              our website with an updated effective date. Your continued use of our services constitutes 
              acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>El-Mag Insurance</strong></p>
              <p className="text-gray-700 mb-2">Legal Department</p>
              <p className="text-gray-700 mb-2">1234 Peachtree St NE, Suite 500</p>
              <p className="text-gray-700 mb-2">Atlanta, GA 30309</p>
              <p className="text-gray-700 mb-2">Phone: 331-343-2584</p>
              <p className="text-gray-700">Email: legal@elmag-insurance.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be unenforceable, the remaining provisions 
              shall continue in full force and effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}