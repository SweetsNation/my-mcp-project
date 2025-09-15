import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Contact Us - El-Mag Insurance',
  description: 'Get in touch with our Medicare Advantage experts. Call, email, or schedule a consultation to find the perfect plan for your needs.',
  keywords: 'contact El-Mag Insurance, Medicare consultation, insurance agents, get help',
  alternates: {
    canonical: 'https://elmaginsurance.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}