'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GA_TRACKING_ID, pageview } from '@/lib/analytics';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const [gtagLoaded, setGtagLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setIsClient(true);
    } catch (err) {
      console.error('GoogleAnalytics client error:', err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  }, []);

  useEffect(() => {
    if (!GA_TRACKING_ID || !isClient) return;

    try {
      // Wait for gtag to be available
      const checkGtag = () => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          setGtagLoaded(true);
          const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
          pageview(url);
        } else {
          // Retry after a short delay
          setTimeout(checkGtag, 100);
        }
      };

      checkGtag();
    } catch (err) {
      console.error('GoogleAnalytics gtag error:', err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  }, [pathname, searchParams, isClient, GA_TRACKING_ID]);

  // Don't render anything until client-side hydration is complete
  if (!isClient || !GA_TRACKING_ID) {
    return null;
  }

  if (error) {
    console.error('GoogleAnalytics component error:', error);
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        onLoad={() => {
          try {
            // Initialize gtag after script loads
            if (typeof window !== 'undefined') {
              (window as any).dataLayer = (window as any).dataLayer || [];
              (window as any).gtag = function() {
                (window as any).dataLayer.push(arguments);
              };
              (window as any).gtag('js', new Date());
              (window as any).gtag('config', GA_TRACKING_ID, {
                page_title: document.title,
                page_location: window.location.href,
                cookie_flags: 'secure;samesite=lax',
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
              setGtagLoaded(true);
            }
          } catch (err) {
            console.error('GoogleAnalytics script load error:', err);
            setError(err instanceof Error ? err : new Error('Unknown error'));
          }
        }}
        onError={(err) => {
          console.error('GoogleAnalytics script error:', err);
          setError(new Error('Failed to load Google Analytics script'));
        }}
      />
    </>
  );
}