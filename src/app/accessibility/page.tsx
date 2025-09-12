import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, generateMedicareBreadcrumbs, generateBreadcrumbStructuredData } from '@/components/Breadcrumbs';
import LandingPageAnalytics from '@/components/LandingPageAnalytics';

export const metadata: Metadata = {
  title: 'Accessible Medicare & Health Insurance Services | El-Mag Insurance',
  description: 'Accessible Medicare and health insurance services for people with disabilities. WCAG 2.1 AA compliant. Screen reader friendly. Multi-language support available.',
  keywords: 'accessible medicare, disability health insurance, screen reader medicare, ADA compliant insurance, accessible healthcare coverage, disability medicare plans',
  openGraph: {
    title: 'Accessible Medicare & Health Insurance Services',
    description: 'Fully accessible Medicare and health insurance services designed for people with disabilities and accessibility needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessible Medicare & Health Insurance Services',
    description: 'WCAG 2.1 AA compliant Medicare services with screen reader support and multi-language options.',
  },
  alternates: {
    canonical: 'https://elmag-insurance.com/accessibility',
  },
};

const accessibilityData = {
  features: [
    'Full WCAG 2.1 AA compliance',
    'Screen reader optimization',
    'High contrast color schemes',
    'Large text and button options',
    'Keyboard navigation support',
    'Multi-language accessibility',
    'Audio plan descriptions',
    'Video with closed captions',
  ],
  assistiveTechnology: [
    'NVDA Screen Reader',
    'JAWS Screen Reader',
    'VoiceOver (Mac/iOS)',
    'TalkBack (Android)',
    'Dragon NaturallySpeaking',
    'ZoomText Screen Magnifier',
  ],
  specialServices: [
    {
      title: 'Telephone Consultation',
      description: 'Dedicated phone lines with extended consultation times for detailed plan explanations',
      phone: '331-343-2584',
    },
    {
      title: 'In-Home Visits',
      description: 'Licensed agents available for home visits to accommodate mobility limitations',
      contact: 'Schedule through phone consultation',
    },
    {
      title: 'Document Translation',
      description: 'Plan materials available in multiple languages and formats',
      formats: ['Large Print', 'Braille', 'Audio', 'Digital Text'],
    },
    {
      title: 'Caregiver Support',
      description: 'Specialized assistance for caregivers helping Medicare beneficiaries',
      note: 'HIPAA-compliant authorization processes available',
    },
  ],
  accessibilityStatement: `El-Mag Insurance is committed to providing accessible Medicare and health insurance services to all individuals, 
  regardless of their abilities or disabilities. Our website and services comply with WCAG 2.1 AA standards and are regularly tested 
  with assistive technologies.`,
};

export default function AccessibilityPage() {
  const breadcrumbItems = generateMedicareBreadcrumbs('index');
  breadcrumbItems.push({ label: 'Accessibility Services', current: true });
  const breadcrumbStructuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <LandingPageAnalytics
        pageType="accessibility"
        pageTitle="Accessible Medicare & Health Insurance Services"
        keyMetrics={{
          wcag_compliance: 'AA',
          languages_supported: 20,
          assistive_technologies: 6
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Skip to main content link for screen readers */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>

        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Main Content */}
        <main id="main-content">
          {/* Hero Section with H1 */}
          <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Accessible Medicare & Health Insurance Services
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 mb-8">
                  Fully accessible insurance services designed for everyone. WCAG 2.1 AA compliant with screen reader optimization and multi-language support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-colors text-center"
                    aria-label="Get accessible plan assistance"
                    onClick={() => (window as any).trackLandingPageCTA?.('contact', 'hero', '/contact')}
                  >
                    Get Accessible Assistance
                  </Link>
                  <a 
                    href="tel:331-343-2584" 
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-colors text-center"
                    aria-label="Call 3 3 1 E Health for immediate assistance"
                    onClick={() => (window as any).trackLandingPagePhoneCall?.('hero')}
                  >
                    331-E-HEALTH
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Statement */}
          <section className="py-12 bg-white" aria-labelledby="accessibility-statement">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="accessibility-statement" className="text-3xl font-bold text-center text-gray-900 mb-8">
                Our Accessibility Commitment
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {accessibilityData.accessibilityStatement}
                </p>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="py-16 bg-gray-50" aria-labelledby="accessibility-features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="accessibility-features" className="text-3xl font-bold text-center text-gray-900 mb-12">
                Accessibility Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accessibilityData.features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-primary-600 font-bold text-xl" aria-hidden="true">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Supported Assistive Technology */}
          <section className="py-16 bg-white" aria-labelledby="assistive-tech">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="assistive-tech" className="text-3xl font-bold text-center text-gray-900 mb-12">
                Supported Assistive Technologies
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accessibilityData.assistiveTechnology.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech}</h3>
                    <div className="w-8 h-8 bg-primary-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white font-bold" aria-hidden="true">✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Special Services */}
          <section className="py-16 bg-gray-50" aria-labelledby="special-services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="special-services" className="text-3xl font-bold text-center text-gray-900 mb-12">
                Specialized Accessibility Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {accessibilityData.specialServices.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    {service.phone && (
                      <p className="text-primary-600 font-semibold mb-2">
                        Phone: <a href={`tel:${service.phone}`} className="hover:underline focus:underline">{service.phone}</a>
                      </p>
                    )}
                    {service.contact && (
                      <p className="text-gray-600 mb-2">{service.contact}</p>
                    )}
                    {service.formats && (
                      <div className="mt-4">
                        <p className="text-gray-700 font-medium mb-2">Available formats:</p>
                        <ul className="list-disc list-inside text-gray-600">
                          {service.formats.map((format, formatIndex) => (
                            <li key={formatIndex}>{format}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {service.note && (
                      <p className="text-gray-600 italic mt-2">{service.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Accessibility Resources */}
          <section className="py-16 bg-white" aria-labelledby="accessibility-resources">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="accessibility-resources" className="text-3xl font-bold text-center text-gray-900 mb-12">
                Medicare Accessibility Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Medicare.gov Accessibility</h3>
                  <p className="text-gray-700 mb-4">Official Medicare website accessibility features and support options.</p>
                  <a 
                    href="https://www.medicare.gov/help" 
                    className="text-primary-600 font-medium hover:text-primary-700 focus:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Medicare.gov accessibility help (opens in new tab)"
                  >
                    Visit Medicare.gov Help →
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">State Health Insurance Programs</h3>
                  <p className="text-gray-700 mb-4">Local SHIP programs provide free, personalized Medicare counseling.</p>
                  <a 
                    href="https://www.shiphelp.org" 
                    className="text-primary-600 font-medium hover:text-primary-700 focus:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find local SHIP programs (opens in new tab)"
                  >
                    Find Local SHIP Programs →
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Disability Rights</h3>
                  <p className="text-gray-700 mb-4">Information about healthcare rights for people with disabilities.</p>
                  <a 
                    href="https://www.hhs.gov/civil-rights/for-individuals/disability" 
                    className="text-primary-600 font-medium hover:text-primary-700 focus:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Learn about disability healthcare rights (opens in new tab)"
                  >
                    Learn About Rights →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary-600 text-white" aria-labelledby="cta-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 id="cta-heading" className="text-3xl font-bold mb-6">
                Get Personalized, Accessible Medicare Assistance
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Our licensed specialists are trained in accessibility best practices and can provide 
                Medicare guidance in the format that works best for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-colors text-center"
                  aria-label="Contact us for accessible Medicare assistance"
                  onClick={() => (window as any).trackLandingPageCTA?.('contact', 'cta', '/contact')}
                >
                  Contact Us for Assistance
                </Link>
                <a 
                  href="tel:331-343-2584" 
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-colors text-center"
                  aria-label="Call 3 3 1 E Health for immediate assistance"
                  onClick={() => (window as any).trackLandingPagePhoneCall?.('cta')}
                >
                  331-E-HEALTH
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}