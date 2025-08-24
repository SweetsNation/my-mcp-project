import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayoutClient from '../components/RootLayoutClient';
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'El-Mag Insurance - Medicare Advantage Plans',
  description: 'Find the best Medicare Advantage plans with comprehensive coverage. Compare plans, calculate costs, and get expert guidance from licensed agents.',
  keywords: 'Medicare Advantage, Medicare plans, health insurance, dental coverage, vision coverage',
  authors: [{ name: 'El-Mag Insurance' }],
  robots: 'index, follow',
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
        <GoogleAnalytics />
        
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
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}