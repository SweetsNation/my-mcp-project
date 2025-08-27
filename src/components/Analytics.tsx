'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'county',
              'custom_parameter_2': 'demographic',
              'custom_parameter_3': 'industry'
            }
          });
          
          // Enhanced Ecommerce - Lead Generation Tracking
          function trackLead(leadType, county, value = 0) {
            gtag('event', 'generate_lead', {
              event_category: 'Lead Generation',
              event_label: leadType,
              custom_parameter_1: county,
              value: value,
              currency: 'USD'
            });
          }
          
          // Phone Call Tracking
          function trackPhoneCall(county, source = 'website') {
            gtag('event', 'phone_call', {
              event_category: 'Contact',
              event_label: 'Phone Call',
              custom_parameter_1: county,
              custom_parameter_2: source
            });
          }
          
          // Form Submission Tracking
          function trackFormSubmission(formType, county, completed = true) {
            gtag('event', completed ? 'form_submit' : 'form_abandon', {
              event_category: 'Lead Generation',
              event_label: formType,
              custom_parameter_1: county,
              custom_parameter_2: completed ? 'completed' : 'abandoned'
            });
          }
          
          // Quote Request Tracking
          function trackQuoteRequest(county, demographic, planType = 'unknown') {
            gtag('event', 'quote_request', {
              event_category: 'High Intent Action',
              event_label: 'Quote Request',
              custom_parameter_1: county,
              custom_parameter_2: demographic,
              custom_parameter_3: planType,
              value: 25 // Estimated lead value
            });
          }
          
          // Page Engagement Tracking
          function trackPageEngagement(county, timeOnPage, scrollDepth) {
            gtag('event', 'page_engagement', {
              event_category: 'User Engagement',
              event_label: 'Deep Engagement',
              custom_parameter_1: county,
              value: Math.round(timeOnPage / 1000), // Convert to seconds
              custom_parameter_2: scrollDepth + '%'
            });
          }
          
          // Calculator Usage Tracking
          function trackCalculatorUsage(calculatorType, county, result) {
            gtag('event', 'calculator_use', {
              event_category: 'Interactive Tools',
              event_label: calculatorType,
              custom_parameter_1: county,
              custom_parameter_2: result,
              value: 15 // Tool engagement value
            });
          }
          
          // Make functions globally available
          window.trackLead = trackLead;
          window.trackPhoneCall = trackPhoneCall;
          window.trackFormSubmission = trackFormSubmission;
          window.trackQuoteRequest = trackQuoteRequest;
          window.trackPageEngagement = trackPageEngagement;
          window.trackCalculatorUsage = trackCalculatorUsage;
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          fbq('init', 'FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
          
          // Custom Facebook Events
          window.fbTrackLead = function(county, value = 0) {
            fbq('track', 'Lead', {
              content_category: 'Health Insurance',
              content_name: county + ' Health Insurance',
              value: value,
              currency: 'USD'
            });
          };
          
          window.fbTrackContact = function(method, county) {
            fbq('track', 'Contact', {
              content_category: 'Health Insurance',
              content_name: county + ' Contact',
              method: method
            });
          };
        `}
      </Script>

      {/* Hotjar Heat Mapping */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  )
}