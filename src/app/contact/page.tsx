import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us - El-Mag Insurance',
  description: 'Get in touch with our Medicare Advantage experts. Call, email, or schedule a consultation to find the perfect plan for your needs.',
  keywords: 'contact El-Mag Insurance, Medicare consultation, insurance agents, get help',
};

export default function ContactPage() {
  return <ContactPageClient />;
}