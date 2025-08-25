import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import RootLayoutClient from '../components/RootLayoutClient';
import GoogleAnalytics from '../components/GoogleAnalytics';
import ClientOnly from '../components/ClientOnly';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'El-Mag Insurance - Medicare Advantage Plans',
  description: 'Find the best Medicare Advantage plans with comprehensive coverage. Compare plans, calculate costs, and get expert guidance from licensed agents.',
  keywords: 'Medicare Advantage, Medicare plans, health insurance, dental coverage, vision coverage, prescription drug coverage',
  authors: [{ name: 'El-Mag Insurance' }],
  openGraph: {
    title: 'El-Mag Insurance - Medicare Advantage Plans',
    description: 'Find the best Medicare Advantage plans with comprehensive coverage.',
    url: 'https://elmaginsurance.com',
    siteName: 'El-Mag Insurance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El-Mag Insurance - Medicare Advantage Plans',
    description: 'Find the best Medicare Advantage plans with comprehensive coverage.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://elmaginsurance.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="El-Mag Insurance" />
        <meta name="twitter:card" content="summary_large_image" />
        <ClientOnly>
          <GoogleAnalytics />
        </ClientOnly>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'El-Mag Insurance',
              url: 'https://elmaginsurance.com',
              description: 'Licensed insurance agency specializing in Medicare Advantage plans',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-331-343-2584',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </Suspense>
      </body>
    </html>
  );
}