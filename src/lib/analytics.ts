export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && (window as any).gtag && typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_location: url,
      });
    } catch (error) {
      console.warn('Failed to track pageview:', error);
    }
  }
};

export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID && (window as any).gtag && typeof (window as any).gtag === 'function') {
    try {
      (window as any).gtag('event', action, parameters);
    } catch (error) {
      console.warn('Failed to track event:', error);
    }
  }
};

// Form submission tracking
export const trackFormSubmission = (formType: 'contact' | 'quote', success: boolean) => {
  try {
    event('form_submit', {
      form_type: formType,
      success: success ? 'true' : 'false',
      event_category: 'engagement',
      event_label: `${formType}_form`,
    });
  } catch (error) {
    console.warn('Failed to track form submission:', error);
  }
};

// Page engagement tracking  
export const trackButtonClick = (buttonName: string, location: string) => {
  try {
    event('click', {
      event_category: 'engagement',
      event_label: `${buttonName}_${location}`,
      button_name: buttonName,
      page_location: location,
    });
  } catch (error) {
    console.warn('Failed to track button click:', error);
  }
};

// Phone call tracking
export const trackPhoneCall = (phoneNumber: string) => {
  try {
    event('phone_call', {
      event_category: 'conversion',
      event_label: 'phone_click',
      phone_number: phoneNumber,
    });
  } catch (error) {
    console.warn('Failed to track phone call:', error);
  }
};

// Resource engagement
export const trackResourceView = (resourceName: string, category: string) => {
  try {
    event('view_item', {
      event_category: 'content',
      event_label: `resource_${category}`,
      item_name: resourceName,
      item_category: category,
    });
  } catch (error) {
    console.warn('Failed to track resource view:', error);
  }
};