import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - El-Mag Insurance',
  description: 'Learn how El-Mag Insurance protects your personal information and privacy when you use our Medicare Advantage services.',
  keywords: 'privacy policy, data protection, HIPAA compliance, personal information security',
  alternates: {
    canonical: 'https://www.elmaginsurance.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-300">Last updated: January 1, 2024</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              El-Mag Insurance ("we," "our," or "us") is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Name and contact information (address, phone number, email)</li>
              <li>Date of birth and Social Security number</li>
              <li>Medicare number and eligibility information</li>
              <li>Health insurance history and preferences</li>
              <li>Financial information relevant to insurance eligibility</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referral sources and search terms used</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Provide insurance quotes and recommendations</li>
              <li>Process insurance applications and enrollments</li>
              <li>Communicate with you about your insurance needs</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Send you relevant information about Medicare and insurance updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li><strong>Insurance Carriers:</strong> To obtain quotes and process applications</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist with our operations</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Partners:</strong> With your explicit consent for specific services</li>
            </ul>
            <p className="text-gray-700">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Compliance</h2>
            <p className="text-gray-700 mb-4">
              As a licensed insurance agency, we are committed to protecting your health information in accordance 
              with the Health Insurance Portability and Accountability Act (HIPAA). We:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Maintain physical, electronic, and procedural safeguards</li>
              <li>Limit access to your information to authorized personnel only</li>
              <li>Provide training to our staff on privacy protection</li>
              <li>Have a designated Privacy Officer to oversee compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee background checks and confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>File a complaint about our privacy practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar technologies to enhance your browsing experience. 
              We use both session cookies (temporary) and persistent cookies (stored on your device). 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to review their privacy policies before 
              providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under 18 years of age. We do not knowingly 
              collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. 
              We will notify you of any material changes by posting the updated policy on our website and updating 
              the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>El-Mag Insurance</strong></p>
              <p className="text-gray-700 mb-2">Privacy Officer</p>
              <p className="text-gray-700 mb-2">1234 Peachtree St NE, Suite 500</p>
              <p className="text-gray-700 mb-2">Atlanta, GA 30309</p>
              <p className="text-gray-700 mb-2">Phone: 331-343-2584</p>
              <p className="text-gray-700">Email: privacy@elmag-insurance.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}