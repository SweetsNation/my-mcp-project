'use client';

import { useEffect } from 'react';

interface LiveChatProps {
  propertyId?: string;
  widgetId?: string;
}

export default function LiveChat({ 
  propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID, 
  widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID 
}: LiveChatProps) {
  useEffect(() => {
    if (!propertyId || !widgetId) {
      console.warn('Tawk.to: Property ID or Widget ID not configured');
      return;
    }

    // Check if Tawk is already loaded
    if ((window as any).Tawk_API) {
      return;
    }

    // Load Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Initialize Tawk_API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();
    
    // Configure Tawk settings
    (window as any).Tawk_API.onLoad = function() {
      console.log('Tawk.to chat loaded successfully');
    };
    
    // Add custom styling to match website theme
    (window as any).Tawk_API.onChatMaximized = function() {
      // Track chat engagement for analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'chat_opened', {
          event_category: 'engagement',
          event_label: 'live_chat'
        });
      }
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove script and reset Tawk variables on unmount
      const existingScript = document.querySelector(`script[src*="embed.tawk.to"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      delete (window as any).Tawk_API;
      delete (window as any).Tawk_LoadStart;
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
}

// Custom hook for live chat functionality
export const useLiveChat = () => {
  const openLiveChat = () => {
    if (typeof window !== 'undefined') {
      if ((window as any).Tawk_API && (window as any).Tawk_API.maximize) {
        (window as any).Tawk_API.maximize();
        
        // Track manual chat opening
        if ((window as any).gtag) {
          (window as any).gtag('event', 'chat_button_clicked', {
            event_category: 'engagement',
            event_label: 'manual_chat_open'
          });
        }
      } else {
        // Fallback to phone if chat isn't available
        window.location.href = 'tel:331-343-2584';
      }
    }
  };

  return { openLiveChat };
};

// Utility function to check if chat is available
export const isChatAvailable = (): boolean => {
  return !!(window as any).Tawk_API && !!(window as any).Tawk_API.getStatus;
};