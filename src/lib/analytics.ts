export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, parameters);
  }
};

// Form submission tracking
export const trackFormSubmission = (formType: 'contact' | 'quote', success: boolean) => {
  event('form_submit', {
    form_type: formType,
    success: success ? 'true' : 'false',
    event_category: 'engagement',
    event_label: `${formType}_form`,
  });
};

// Page engagement tracking  
export const trackButtonClick = (buttonName: string, location: string) => {
  event('click', {
    event_category: 'engagement',
    event_label: `${buttonName}_${location}`,
    button_name: buttonName,
    page_location: location,
  });
};

// Phone call tracking
export const trackPhoneCall = (phoneNumber: string) => {
  event('phone_call', {
    event_category: 'conversion',
    event_label: 'phone_click',
    phone_number: phoneNumber,
  });
};

// Resource engagement
export const trackResourceView = (resourceName: string, category: string) => {
  event('view_item', {
    event_category: 'content',
    event_label: `resource_${category}`,
    item_name: resourceName,
    item_category: category,
  });
};