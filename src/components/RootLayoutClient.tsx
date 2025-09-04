'use client';

import Navigation from './Navigation';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import LiveChat from './LiveChat';
import ClientOnly from './ClientOnly';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  return (
    <ErrorBoundary>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <ClientOnly>
        <LiveChat />
      </ClientOnly>
    </ErrorBoundary>
  );
}