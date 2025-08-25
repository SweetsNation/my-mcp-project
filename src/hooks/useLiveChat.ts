'use client';

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
  if (typeof window === 'undefined') return false;
  return !!(window as any).Tawk_API && !!(window as any).Tawk_API.getStatus;
};
