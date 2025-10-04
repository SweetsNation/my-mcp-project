# Open Graph Images Guide

## Overview

Open Graph (OG) images are displayed when your pages are shared on social media platforms like Facebook, Twitter, LinkedIn, and messaging apps. They are critical for:
- **Increasing click-through rates** from social shares
- **Professional appearance** when links are shared
- **Brand recognition** and credibility

## Required Images

You need to create the following OG images at **1200x630 pixels** (1.91:1 aspect ratio):

### 1. **og-home.jpg** - Homepage
- **Purpose**: Main landing page
- **Content Suggestions**:
  - El-Mag Insurance logo prominently displayed
  - "Medicare Advantage Plans 2025"
  - Key benefits: "$0 Premium Plans" or "Expert Help Available"
  - Call-to-action phone number: 331-E-HEALTH
  - Professional healthcare imagery (seniors, families)

### 2. **og-default.jpg** - Default/Fallback
- **Purpose**: Generic pages without specific images
- **Content Suggestions**:
  - El-Mag Insurance branding
  - "Medicare & Health Insurance Solutions"
  - Company tagline or value proposition
  - Contact information

### 3. **og-medicare-advantage.jpg** - Medicare Advantage Pages
- **Purpose**: All Medicare Advantage location and plan pages
- **Content Suggestions**:
  - "Medicare Advantage Plans 2025"
  - Key benefits icons: dental, vision, prescription, $0 premium
  - "Compare Plans in Your Area"
  - Medicare card or healthcare imagery

### 4. **og-medicare-supplement.jpg** - Medigap Pages
- **Purpose**: Medicare Supplement plan pages
- **Content Suggestions**:
  - "Medicare Supplement Plans"
  - "Plan G | Plan N | Plan F"
  - "Fill the Gaps in Medicare Coverage"
  - Trust indicators (licensed agents, expert guidance)

### 5. **og-medicare-part-d.jpg** - Prescription Drug Plans
- **Purpose**: Part D plan pages
- **Content Suggestions**:
  - "Medicare Part D Prescription Coverage"
  - Pharmacy/medication imagery
  - "Find Plans in Your Area"
  - Cost savings messaging

### 6. **og-marketplace.jpg** - ACA Marketplace Pages
- **Purpose**: Health Insurance Marketplace pages
- **Content Suggestions**:
  - "Health Insurance Marketplace"
  - "ACA Plans | Affordable Coverage"
  - "Subsidy Eligible"
  - Family healthcare imagery

### 7. **og-blog.jpg** - Blog Articles
- **Purpose**: Blog listing and article pages
- **Content Suggestions**:
  - "El-Mag Insurance Blog"
  - "Medicare Education & Resources"
  - Book/education imagery
  - "Expert Insurance Insights"

### 8. **og-contact.jpg** - Contact Page
- **Purpose**: Contact and consultation pages
- **Content Suggestions**:
  - "Contact Our Medicare Experts"
  - "Free Consultation Available"
  - Phone number prominently displayed
  - Agent imagery or office photo

### 9. **og-plan-finder.jpg** - Plan Comparison Tool
- **Purpose**: Interactive plan finder page
- **Content Suggestions**:
  - "Medicare Plan Finder Tool"
  - "Compare Plans Side by Side"
  - Computer/tool imagery
  - "Find Your Perfect Plan"

## Design Specifications

### Technical Requirements
- **Size**: 1200 x 630 pixels (exactly)
- **Format**: JPG (preferred) or PNG
- **File Size**: Keep under 1MB for fast loading
- **Resolution**: 72 DPI minimum

### Design Best Practices
1. **Safe Zone**: Keep important text/logos within center 1200x600px area
2. **Text Size**: Minimum 60px font for readability
3. **High Contrast**: Dark text on light background or vice versa
4. **Brand Colors**: Use El-Mag Insurance brand colors consistently
5. **Logo Placement**: Top-left or top-center for recognition
6. **Mobile Preview**: Text should be readable when scaled to 400px wide

### Content Guidelines
- **Main Headline**: 1-2 short lines, large font
- **Subheadline**: Brief supporting text
- **Logo**: Company branding always visible
- **Call-to-Action**: Phone number or "Get Quote"
- **Imagery**: Professional, high-quality healthcare photos
- **Avoid**: Too much text, clutter, low-res images

## Design Tools

### Recommended Options

1. **Canva** (Easiest - Recommended)
   - Use "Facebook Post" template (1200x630)
   - Free templates available
   - Drag-and-drop interface
   - Link: https://www.canva.com/

2. **Figma** (Professional)
   - Create 1200x630 frame
   - More design control
   - Collaboration features
   - Link: https://www.figma.com/

3. **Adobe Photoshop** (Advanced)
   - Full creative control
   - Requires design skills
   - Create new document: 1200x630px, 72 DPI

### Free Stock Image Resources
- **Unsplash**: https://unsplash.com/ (search: seniors, healthcare, family)
- **Pexels**: https://www.pexels.com/
- **Pixabay**: https://pixabay.com/

## File Placement

Save all created images to:
```
/public/images/
```

File structure:
```
public/
  images/
    og-home.jpg
    og-default.jpg
    og-medicare-advantage.jpg
    og-medicare-supplement.jpg
    og-medicare-part-d.jpg
    og-marketplace.jpg
    og-blog.jpg
    og-contact.jpg
    og-plan-finder.jpg
```

## Testing Your OG Images

After creating and uploading images, test how they appear:

1. **Facebook Sharing Debugger**
   - Link: https://developers.facebook.com/tools/debug/
   - Enter your page URL to see OG preview
   - Click "Scrape Again" to refresh cache

2. **Twitter Card Validator**
   - Link: https://cards-dev.twitter.com/validator
   - Preview how cards appear on Twitter

3. **LinkedIn Post Inspector**
   - Link: https://www.linkedin.com/post-inspector/
   - Check LinkedIn sharing preview

4. **Social Share Preview**
   - Link: https://socialsharepreview.com/
   - Test multiple platforms at once

## Brand Assets Needed

To create consistent OG images, gather:
- ✅ El-Mag Insurance logo (high-res PNG with transparent background)
- ✅ Brand colors (hex codes)
- ✅ Brand fonts (if specific fonts are used)
- ✅ Company phone number (331-E-HEALTH)
- ✅ Tagline or mission statement

## Example Template Structure

```
+------------------------------------------+
|  [LOGO]                                  |
|                                          |
|        MAIN HEADLINE TEXT                |
|                                          |
|      Supporting subheadline text         |
|                                          |
|                                          |
|  [Background Image]    Call 331-E-HEALTH |
+------------------------------------------+
```

## Priority Order

Create images in this order for maximum impact:

1. **og-home.jpg** - Most shared page
2. **og-medicare-advantage.jpg** - Core service
3. **og-default.jpg** - Fallback for all pages
4. **og-blog.jpg** - Content marketing
5. **og-medicare-supplement.jpg** - Secondary service
6. **og-marketplace.jpg** - ACA enrollment
7. **og-contact.jpg** - Conversion page
8. **og-medicare-part-d.jpg** - Part D plans
9. **og-plan-finder.jpg** - Tool page

## Next Steps

1. ✅ **Metadata Updated** - All pages now have OG image tags
2. ⏳ **Create Images** - Design 9 OG images (see above)
3. ⏳ **Upload Images** - Save to `/public/images/`
4. ⏳ **Test Sharing** - Use Facebook/Twitter validators
5. ⏳ **Deploy** - Push to GitHub and Vercel

## Questions?

If you need help:
- Design templates examples: Search "Medicare OG image templates" on Canva
- Stock healthcare images: Use Unsplash with keywords "seniors healthcare"
- Professional design: Consider hiring on Fiverr or 99designs

---

**Pro Tip**: Keep a master Canva or Figma template with your branding, then duplicate and modify the headline for each image type. This ensures consistency across all OG images.

