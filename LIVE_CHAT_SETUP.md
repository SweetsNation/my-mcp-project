# Live Chat Integration Setup Guide

This document provides instructions for completing the live chat integration using Tawk.to.

## Current Implementation Status

✅ **Completed:**
- Live chat component created (`src/components/LiveChat.tsx`)
- Hook-based architecture for easy usage across components
- Integration with Google Analytics for tracking
- Fallback to phone number when chat is unavailable
- Environment variable configuration
- Updated contact page and FAQ section with live chat buttons
- Site-wide chat widget integration

## Required Setup Steps

### 1. Create Tawk.to Account

1. Go to [Tawk.to](https://www.tawk.to/) and create a free account
2. Follow their setup wizard to create your first property
3. Note down your **Property ID** and **Widget ID** from the Admin panel

### 2. Configure Environment Variables

Update your production environment variables:

```bash
# In your production .env or hosting platform (Vercel, Netlify, etc.)
NEXT_PUBLIC_TAWK_PROPERTY_ID="your-actual-property-id"
NEXT_PUBLIC_TAWK_WIDGET_ID="your-actual-widget-id"
```

**For local development**, update `.env.local`:
```bash
NEXT_PUBLIC_TAWK_PROPERTY_ID="your-actual-property-id"
NEXT_PUBLIC_TAWK_WIDGET_ID="your-actual-widget-id"
```

### 3. Tawk.to Configuration

In your Tawk.to dashboard:

1. **Appearance:** Customize the chat widget colors to match your brand
   - Primary color: #2563eb (blue-600)
   - Secondary color: #059669 (green-600)
   
2. **Triggers:** Set up automatic greeting messages
   - "Hello! I'm here to help you with your Medicare questions."
   - "Would you like to learn about Medicare Advantage plans?"

3. **Operating Hours:** Configure your business hours
   - Monday - Friday: 8AM - 8PM EST
   - Saturday: 9AM - 5PM EST
   - Sunday: Closed

4. **Offline Messages:** Set up email forwarding when offline

### 4. Testing

Once configured:

1. Test the live chat button on the contact page
2. Test the live chat button in the FAQ section
3. Verify the widget appears on all pages
4. Check that fallback to phone number works when chat is offline
5. Verify Google Analytics tracking for chat interactions

## Technical Implementation Details

### Components Using Live Chat

- `ContactPageClient.tsx` - Main contact page chat button
- `FAQSection.tsx` - "Live Chat Support" button
- `RootLayoutClient.tsx` - Site-wide widget integration

### Analytics Tracking

The implementation tracks these events:
- `chat_opened` - When chat widget is opened
- `chat_button_clicked` - When manual chat buttons are clicked

### Fallback Behavior

When Tawk.to is unavailable:
- Buttons redirect to `tel:331-343-2584`
- No JavaScript errors occur
- User experience remains seamless

### Custom Hook Usage

```typescript
import { useLiveChat } from '@/components/LiveChat';

function MyComponent() {
  const { openLiveChat } = useLiveChat();
  
  return (
    <button onClick={openLiveChat}>
      Start Chat
    </button>
  );
}
```

## Security and Performance

- Scripts load asynchronously to prevent blocking
- CORS-enabled for security
- Automatic cleanup on component unmount
- Environment validation prevents errors in development

## Troubleshooting

**Chat widget not appearing:**
- Verify environment variables are set correctly
- Check browser console for errors
- Ensure Tawk.to property is active

**Fallback not working:**
- Check that phone number is correct
- Verify tel: links are properly formatted

**Analytics not tracking:**
- Ensure Google Analytics is properly configured
- Check that gtag is available globally

## Next Steps

1. Create Tawk.to account and get credentials
2. Update environment variables in production
3. Configure Tawk.to dashboard settings
4. Train customer service team on the platform
5. Monitor chat metrics and optimize accordingly

---

*This integration provides professional live chat functionality with automatic fallbacks and comprehensive analytics tracking for the El-Mag Insurance Medicare Advantage website.*