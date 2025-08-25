'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setIsClient(true);
    } catch (err) {
      console.error('ClientOnly error:', err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  }, []);

  if (error) {
    console.error('ClientOnly component error:', error);
    return <div>Error loading component</div>;
  }

  if (!isClient) {
    return <>{fallback}</>;
  }

  try {
    return <>{children}</>;
  } catch (err) {
    console.error('ClientOnly render error:', err);
    return <div>Error rendering component</div>;
  }
}
