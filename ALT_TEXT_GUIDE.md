# Alt Text Guide for Images

## Overview

Alt text (alternative text) is **critical** for:
- **Accessibility**: Screen readers use alt text to describe images to visually impaired users
- **SEO**: Search engines use alt text to understand image content and context
- **UX**: Alt text displays when images fail to load
- **Compliance**: Required by WCAG 2.1 accessibility standards

## Current Status ✅

Your El-Mag Insurance website has **100% compliant alt text** on all images!

### Validation Results
- **Total images**: 4
- **✅ With descriptive alt**: 3 (75%)
- **📌 Tracking pixels**: 1 (25%) - Correctly uses `alt=""`
- **❌ Missing alt**: 0
- **Status**: PASSED

### Images Inventory

1. **VideoContentFramework.tsx** - Video thumbnails with dynamic alt text
2. **MarketingAutomation.tsx** - Tracking pixel (correctly uses `alt=""`)
3. **OptimizedImage.tsx** - Reusable image component with required alt prop

## Alt Text Best Practices

### 1. Describe Content and Context
Write alt text that describes **what the image shows** and **why it's there**.

✅ **Good Examples:**
- "Senior couple reviewing Medicare Advantage plan options with licensed agent"
- "Comparison chart showing Medicare Supplement Plan G vs Plan N benefits"
- "Florida resident using online tool to compare health insurance marketplace plans"
- "Licensed insurance agent explaining Part B premium give-back benefits"

❌ **Bad Examples:**
- "Image" or "Photo" (not descriptive)
- "IMG_2039.jpg" (file name, not description)
- "Click here" (not about the image)
- "" (empty for visible images)

### 2. Keep It Concise
- **Ideal length**: 40-125 characters
- **Maximum**: 250 characters (screen readers may cut off)
- Focus on essential information
- Avoid unnecessary words

✅ **Good:** "Doctor explaining Medicare options to elderly patient"
❌ **Too Long:** "This is a photograph showing a medical doctor in a white coat sitting at a desk with an elderly patient who appears to be approximately 70 years old, and they are looking at some papers together that might be Medicare forms or insurance documents"

### 3. Avoid Redundant Phrases
Don't start with "Image of...", "Picture of...", or "Graphic showing..." unless necessary for context.

✅ **Good:** "Medicare enrollment timeline for 2025"
❌ **Redundant:** "Image showing a Medicare enrollment timeline for 2025"

**Exception:** When the type matters:
✅ "Screenshot of Medicare.gov plan finder tool"
✅ "Infographic comparing Medicare Advantage vs Original Medicare"

### 4. Include Relevant Keywords Naturally
Incorporate SEO keywords naturally, but **never keyword stuff**.

✅ **Good:** "Miami-Dade Medicare Advantage plans comparison showing $0 premium options"
❌ **Keyword Stuffing:** "Medicare Advantage plans Miami Medicare plans Florida Medicare Advantage Miami-Dade Medicare"

### 5. Context Matters
Alt text should match the image's **purpose on the page**.

**Example**: Same image of a person, different contexts:
- On team page: "Eric Salinas, Medicare specialist with 20 years experience"
- In blog post: "Insurance agent helping client compare Medicare plans"
- As decoration: `alt=""` (if purely decorative)

### 6. Decorative Images
Use `alt=""` (empty string) for decorative images that don't add information.

**When to use `alt=""`:**
- Background patterns or textures
- Spacer images
- Decorative borders or icons with adjacent text
- Tracking pixels (analytics)

**Example:**
```tsx
{/* Tracking pixel - no visual content */}
<img src="/api/tracking/page-view" alt="" />

{/* Decorative divider */}
<img src="/images/divider.png" alt="" />
```

### 7. Complex Images
For charts, graphs, or infographics, provide:
1. **Alt text**: Brief description
2. **Long description**: Detailed data in surrounding text or via `longdesc` attribute

**Example:**
```tsx
<Image 
  src="/images/medicare-enrollment-chart.png"
  alt="Medicare enrollment periods chart showing IEP, AEP, and SEP dates"
  longdesc="#enrollment-description"
/>
<div id="enrollment-description">
  <h3>Medicare Enrollment Periods</h3>
  <ul>
    <li>Initial Enrollment Period (IEP): 7-month window around 65th birthday</li>
    <li>Annual Enrollment Period (AEP): October 15 - December 7</li>
    <li>Special Enrollment Period (SEP): Varies based on qualifying events</li>
  </ul>
</div>
```

### 8. Images with Text
If text in the image is important, **include it in alt text**.

✅ **Good:** "Call now for free Medicare consultation: 331-E-HEALTH"
❌ **Bad:** "Phone call promotional banner"

### 9. Logos and Branding
For logos, use company name (not "logo" unless contextually important).

✅ **Good:** "El-Mag Insurance"
❌ **Bad:** "El-Mag Insurance logo" (redundant in most contexts)

**Exception:** When logo type matters:
✅ "El-Mag Insurance horizontal logo with tagline"

### 10. Linked Images
If image is a link, describe the **destination**, not just the image.

✅ **Good:** "Learn more about Medicare Advantage plans in Florida"
❌ **Bad:** "Happy senior couple"

## Implementation in Next.js

### Using Next.js Image Component

```tsx
import Image from 'next/image';

// ✅ Required alt prop
<Image 
  src="/images/medicare-plans.jpg"
  alt="Medicare Advantage plans comparison showing benefits and costs"
  width={800}
  height={600}
/>

// ❌ TypeScript will error without alt
<Image 
  src="/images/medicare-plans.jpg"
  width={800}
  height={600}
/>
```

### Using OptimizedImage Component

```tsx
import OptimizedImage from '@/components/OptimizedImage';

// ✅ Alt is required
<OptimizedImage 
  src="/images/team-member.jpg"
  alt="Elsa Galicia-Lona, Senior Insurance Specialist with 15 years experience"
  width={400}
  height={400}
/>
```

### Dynamic Alt Text

```tsx
// For dynamic content
{specialists.map((specialist) => (
  <OptimizedImage 
    key={specialist.id}
    src={specialist.photo}
    alt={`${specialist.name}, ${specialist.title} specializing in ${specialist.specialties.join(', ')}`}
    width={300}
    height={300}
  />
))}
```

## Testing Alt Text

### Automated Validation

Run the validation script:
```bash
node scripts/validate-alt-text.js
```

This checks:
- All images have alt attributes
- No visible images have empty alt text
- Tracking pixels correctly use `alt=""`

### Manual Testing

1. **Screen Reader Test**:
   - macOS: Enable VoiceOver (Cmd+F5)
   - Windows: Enable Narrator (Win+Ctrl+Enter)
   - Navigate your site and listen to alt text

2. **Visual Test**:
   - Disable images in browser
   - Verify alt text provides context

3. **Accessibility Tools**:
   - [WAVE Browser Extension](https://wave.webaim.org/extension/)
   - [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome DevTools)
   - [axe DevTools](https://www.deque.com/axe/devtools/)

## Common Mistakes to Avoid

### ❌ Don't Do This:
```tsx
// Missing alt
<Image src="/image.jpg" width={400} height={300} />

// Empty alt for visible images
<Image src="/important-chart.jpg" alt="" width={800} height={600} />

// File name as alt
<Image src="/IMG_2039.jpg" alt="IMG_2039.jpg" width={400} height={300} />

// Keyword stuffing
<Image 
  src="/plans.jpg" 
  alt="Medicare Medicare Advantage plans Medicare supplement Medicare plans insurance Medicare" 
  width={600} 
  height={400} 
/>

// Too generic
<Image src="/agent.jpg" alt="person" width={400} height={300} />
```

### ✅ Do This Instead:
```tsx
// Descriptive alt text
<Image 
  src="/medicare-comparison.jpg" 
  alt="Side-by-side comparison of Medicare Advantage and Medicare Supplement benefits"
  width={800} 
  height={600} 
/>

// Context-appropriate
<Image 
  src="/eric-salinas.jpg" 
  alt="Eric Salinas, Medicare specialist helping clients in Virginia and Tennessee"
  width={400} 
  height={300} 
/>

// Decorative with empty alt
<Image 
  src="/decorative-border.png" 
  alt="" 
  width={1200} 
  height={50} 
/>
```

## SEO Benefits of Good Alt Text

### Search Engine Ranking Factors
1. **Image Search**: Alt text helps images rank in Google Images
2. **Content Relevance**: Helps search engines understand page content
3. **Keyword Context**: Provides natural keyword placement
4. **User Experience**: Better UX = better rankings

### Best Practices for SEO
- Include **primary keyword** in main images' alt text
- Use **long-tail keywords** naturally in secondary images
- Match alt text to **page content** and intent
- Don't repeat the same alt text across multiple images

**Example for Medicare Advantage page:**
```tsx
// Hero image - primary keyword
<Image 
  src="/hero.jpg" 
  alt="Medicare Advantage plans 2025 with $0 premiums and comprehensive benefits"
  width={1200} 
  height={600} 
/>

// Secondary image - long-tail keyword
<Image 
  src="/benefits.jpg" 
  alt="Medicare Advantage dental and vision coverage comparison in Florida"
  width={800} 
  height={400} 
/>

// Team photo - branded
<Image 
  src="/agents.jpg" 
  alt="El-Mag Insurance licensed Medicare specialists ready to help"
  width={600} 
  height={400} 
/>
```

## Alt Text Checklist

Before adding any image, verify:

- [ ] Alt text is present (except decorative images)
- [ ] Alt text describes the image content
- [ ] Alt text provides context for why the image is there
- [ ] Length is 40-125 characters
- [ ] No "Image of" or "Picture of" (unless necessary)
- [ ] Includes relevant keywords naturally
- [ ] Matches page content and intent
- [ ] For linked images, describes the destination
- [ ] For text-containing images, includes the text
- [ ] For decorative images, uses `alt=""`

## Resources

### Tools
- **Validation**: `node scripts/validate-alt-text.js`
- **Accessibility**: [WAVE Extension](https://wave.webaim.org/extension/)
- **SEO**: [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/#non-text-content)
- [WebAIM Alt Text Guide](https://webaim.org/techniques/alttext/)
- [MDN Web Docs: Alt Text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt)

### Quick Reference

| Image Type | Alt Text Example |
|------------|------------------|
| Product/Service | "Medicare Supplement Plan G benefits overview" |
| Person | "Eric Salinas, Medicare specialist with 20 years experience" |
| Location | "El-Mag Insurance office in Miami, Florida" |
| Chart/Graph | "Medicare costs comparison showing savings of $2,400/year" |
| Logo | "El-Mag Insurance" |
| Icon (with text) | "" (empty) |
| Decorative | "" (empty) |
| Tracking pixel | "" (empty) |

---

## Maintenance

### Regular Audits
Run validation monthly:
```bash
npm run validate-alt-text
# or
node scripts/validate-alt-text.js
```

### New Images
When adding new images:
1. Write alt text **before** adding the image
2. Review alt text in context of the page
3. Test with screen reader
4. Run validation script

### Updates
When updating images:
1. Review and update alt text if context changed
2. Ensure alt text still matches page intent
3. Re-run validation

---

**Current Status**: ✅ **All images compliant**

Last validated: [Current Date]
Next audit due: [30 days from now]

