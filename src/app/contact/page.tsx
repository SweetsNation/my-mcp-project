import ContactPageClient from '@/components/ContactPageClient';
import { generateContactPageSchema } from '@/lib/schema/organization-schema';
import { generatePageMetadata } from '@/lib/metadata';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Structured Data for SEO
const structuredData = generateContactPageSchema();

export const metadata = generatePageMetadata({
  title: 'Contact Us - El-Mag Insurance | Medicare Experts Ready to Help',
  description: 'Get in touch with our Medicare Advantage experts. Call, email, or schedule a consultation to find the perfect plan for your needs. Licensed agents available now.',
  url: '/contact',
  image: '/images/og-contact.jpg',
  imageAlt: 'Contact El-Mag Insurance - Medicare and Health Insurance Experts',
  keywords: 'contact El-Mag Insurance, Medicare consultation, insurance agents, get help, Medicare experts',
});

export default function ContactPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPageClient />
    </>
  );
}