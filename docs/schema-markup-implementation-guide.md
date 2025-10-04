# Schema Markup Implementation Guide for South Florida Medicare Pages

## Overview
This document provides comprehensive schema markup to be added to all South Florida county Medicare and Marketplace pages using the `generateCountyMedicareSchema` function from `/src/lib/schema/county-medicare-schema.ts`.

## Implementation Status

### ✅ Completed
1. **Blog Post**: `/blog/inova-vs-kaiser-medicare-advantage-fairfax` - Already has comprehensive BlogPosting schema via `generateBlogPostSchema`
2. **Schema Generator**: Created `/src/lib/schema/county-medicare-schema.ts` with FAQ support

### 📝 To Implement

All pages below should import and use the schema generator:

```typescript
import { generateCountyMedicareSchema, getMedicareSupplementFAQs, getMedicarePartDFAQs, getMedicareAdvantageFAQs, getMarketplaceFAQs } from '@/lib/schema/county-medicare-schema'
```

---

## 1. Monroe County Medicare Supplement

**File**: `/src/app/medicare-supplement-monroe-county/page.tsx`

**Replace existing `monroeStructuredData` with**:

```typescript
const monroeStructuredData = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-monroe-county',
  pageTitle: 'Monroe County Medicare Supplement Plans 2025 - Florida Keys Medigap Coverage',
  pageDescription: 'Monroe County Medicare Supplement guide: Navigate Florida Keys\' unique island healthcare with specialized Medigap plans for 22,500+ beneficiaries. Hurricane preparedness and mainland access coverage.',
  county: 'Monroe County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 22500,
  averagePremium: 165,
  faqs: getMedicareSupplementFAQs('Monroe County', 'Florida', 165)
})
```

---

## 2. Miami-Dade County Medicare Supplement

**File**: `/src/app/medicare-supplement-miami-dade-county/page.tsx`

```typescript
const miamiDadeMedigapSchema = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-miami-dade-county',
  pageTitle: 'Miami-Dade County Medicare Supplement Plans 2025 - Medigap Coverage Guide',
  pageDescription: 'Miami-Dade County Medicare Supplement guide: Compare Medigap plans for 500,000+ beneficiaries with access to Jackson Health System, Baptist Health, and top Miami hospitals.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 500000,
  averagePremium: 170,
  faqs: getMedicareSupplementFAQs('Miami-Dade County', 'Florida', 170)
})
```

---

## 3. Miami-Dade County Medicare Part D

**File**: `/src/app/medicare-part-d-miami-dade-county/page.tsx`

```typescript
const miamiDadePartDSchema = generateCountyMedicareSchema({
  pagePath: '/medicare-part-d-miami-dade-county',
  pageTitle: 'Miami-Dade County Medicare Part D Plans 2025 - Prescription Drug Coverage',
  pageDescription: 'Miami-Dade County Medicare Part D guide: Compare prescription drug plans for 380,000+ enrollees with 1,200+ pharmacies including CVS, Walgreens, Publix, and Navarro.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-part-d',
  totalBeneficiaries: 380000,
  averagePremium: 45,
  faqs: getMedicarePartDFAQs('Miami-Dade County', 'Florida', 1200)
})
```

---

## 4. Miami-Dade County Medicare Advantage

**File**: Create new or update existing Medicare Advantage page

```typescript
const miamiDadeMASchema = generateCountyMedicareSchema({
  pagePath: '/medicare-advantage-miami-dade-county',
  pageTitle: 'Miami-Dade County Medicare Advantage Plans 2025 - MA Plans & Star Ratings',
  pageDescription: 'Miami-Dade County Medicare Advantage guide: Compare 90+ MA plans for 240,000+ enrollees with $0 premiums, dental/vision coverage, and Part B giveback options.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'medicare-advantage',
  totalBeneficiaries: 240000,
  averagePremium: 0,
  faqs: getMedicareAdvantageFAQs('Miami-Dade County', 'Florida', 90, 35)
})
```

---

## 5. Miami-Dade County Health Insurance Marketplace

**File**: `/src/app/health-insurance-marketplace-miami-dade-county/page.tsx`

```typescript
const miamiDadeMarketplaceSchema = generateCountyMedicareSchema({
  pagePath: '/health-insurance-marketplace-miami-dade-county',
  pageTitle: 'Miami-Dade County Health Insurance Marketplace 2025 - ACA Plans & Subsidies',
  pageDescription: 'Miami-Dade County Marketplace guide: Compare ACA plans for 420,000+ residents with 70% eligible for $0 premiums. Average subsidies $475/month.',
  county: 'Miami-Dade County',
  state: 'Florida',
  productType: 'health-insurance-marketplace',
  totalBeneficiaries: 420000,
  averagePremium: 385,
  faqs: getMarketplaceFAQs('Miami-Dade County', 'Florida', 70, 475)
})
```

---

## 6. Broward County Medicare Supplement

**File**: `/src/app/medicare-supplement-broward-county/page.tsx`

```typescript
const browardMedigapSchema = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-broward-county',
  pageTitle: 'Broward County Medicare Supplement Plans 2025 - Fort Lauderdale Medigap Coverage',
  pageDescription: 'Broward County Medicare Supplement guide: Compare Medigap plans for 365,000+ beneficiaries with access to Broward Health, Holy Cross, and Cleveland Clinic Florida.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 365000,
  averagePremium: 168,
  faqs: getMedicareSupplementFAQs('Broward County', 'Florida', 168)
})
```

---

## 7. Broward County Medicare Part D

**File**: `/src/app/medicare-part-d-broward-county/page.tsx`

```typescript
const browardPartDSchema = generateCountyMedicareSchema({
  pagePath: '/medicare-part-d-broward-county',
  pageTitle: 'Broward County Medicare Part D Plans 2025 - Fort Lauderdale Prescription Drug Coverage',
  pageDescription: 'Broward County Medicare Part D guide: Compare prescription drug plans for 285,000+ enrollees with 950+ pharmacies and $44 average premiums.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'medicare-part-d',
  totalBeneficiaries: 285000,
  averagePremium: 44,
  faqs: getMedicarePartDFAQs('Broward County', 'Florida', 950)
})
```

---

## 8. Broward County Medicare Advantage

**File**: Create or update `/src/app/medicare-advantage-broward-county/page.tsx`

```typescript
const browardMASchema = generateCountyMedicareSchema({
  pagePath: '/medicare-advantage-broward-county',
  pageTitle: 'Broward County Medicare Advantage Plans 2025 - Fort Lauderdale MA Plans',
  pageDescription: 'Broward County Medicare Advantage guide: Compare 85+ MA plans for 165,000+ enrollees with $0 premiums, 4.1★ average ratings, and comprehensive benefits.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'medicare-advantage',
  totalBeneficiaries: 165000,
  averagePremium: 0,
  faqs: getMedicareAdvantageFAQs('Broward County', 'Florida', 85, 32)
})
```

---

## 9. Broward County Health Insurance Marketplace

**File**: `/src/app/health-insurance-marketplace-broward-county/page.tsx`

```typescript
const browardMarketplaceSchema = generateCountyMedicareSchema({
  pagePath: '/health-insurance-marketplace-broward-county',
  pageTitle: 'Broward County Health Insurance Marketplace 2025 - Fort Lauderdale ACA Plans',
  pageDescription: 'Broward County Marketplace guide: Compare ACA plans for 195,000+ enrollees with 65% eligible for $0 premiums. Average subsidies $425/month.',
  county: 'Broward County',
  state: 'Florida',
  productType: 'health-insurance-marketplace',
  totalBeneficiaries: 195000,
  averagePremium: 380,
  faqs: getMarketplaceFAQs('Broward County', 'Florida', 65, 425)
})
```

---

## 10. Palm Beach County Medicare Supplement

**File**: `/src/app/medicare-supplement-palm-beach-county/page.tsx`

```typescript
const palmBeachMedigapSchema = generateCountyMedicareSchema({
  pagePath: '/medicare-supplement-palm-beach-county',
  pageTitle: 'Palm Beach County Medicare Supplement Plans 2025 - West Palm Beach Medigap Coverage',
  pageDescription: 'Palm Beach County Medicare Supplement guide: Compare Medigap plans for 455,000+ beneficiaries with access to Cleveland Clinic, JFK Medical, and Boca Raton Regional Hospital.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'medicare-supplement',
  totalBeneficiaries: 455000,
  averagePremium: 165,
  faqs: getMedicareSupplementFAQs('Palm Beach County', 'Florida', 165)
})
```

---

## 11. Palm Beach County Medicare Part D

**File**: `/src/app/medicare-part-d-palm-beach-county/page.tsx`

```typescript
const palmBeachPartDSchema = generateCountyMedicareSchema({
  pagePath: '/medicare-part-d-palm-beach-county',
  pageTitle: 'Palm Beach County Medicare Part D Plans 2025 - West Palm Beach Prescription Drug Coverage',
  pageDescription: 'Palm Beach County Medicare Part D guide: Compare prescription drug plans for 350,000+ enrollees with 780+ pharmacies and Extra Help for 68,000 eligible residents.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'medicare-part-d',
  totalBeneficiaries: 350000,
  averagePremium: 46,
  faqs: getMedicarePartDFAQs('Palm Beach County', 'Florida', 780)
})
```

---

## 12. Palm Beach County Medicare Advantage

**File**: `/src/app/medicare-advantage-palm-beach-county/page.tsx`

```typescript
const palmBeachMASchema = generateCountyMedicareSchema({
  pagePath: '/medicare-advantage-palm-beach-county',
  pageTitle: 'Palm Beach County Medicare Advantage Plans 2025 - West Palm Beach MA Plans & Star Ratings',
  pageDescription: 'Palm Beach County Medicare Advantage guide: Compare 85+ $0 premium MA plans for 218,000+ enrollees with 4.2★ average ratings and 42 Part B giveback plans.',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'medicare-advantage',
  totalBeneficiaries: 218000,
  averagePremium: 0,
  faqs: getMedicareAdvantageFAQs('Palm Beach County', 'Florida', 85, 42)
})
```

---

## 13. Palm Beach County Health Insurance Marketplace

**File**: `/src/app/health-insurance-marketplace-palm-beach-county/page.tsx`

```typescript
const palmBeachMarketplaceSchema = generateCountyMedicareSchema({
  pagePath: '/health-insurance-marketplace-palm-beach-county',
  pageTitle: 'Palm Beach County Health Insurance Marketplace 2025 - West Palm Beach ACA Plans & Subsidies',
  pageDescription: 'Palm Beach County Marketplace guide: Compare ACA plans for 240,000+ enrollees with 68% eligible for $0 premiums. Average subsidies $485/month (highest in Florida).',
  county: 'Palm Beach County',
  state: 'Florida',
  productType: 'health-insurance-marketplace',
  totalBeneficiaries: 240000,
  averagePremium: 385,
  faqs: getMarketplaceFAQs('Palm Beach County', 'Florida', 68, 485)
})
```

---

## Schema Features Included

Each schema implementation provides:

### ✅ Core Schema Types
- **WebPage** - Page metadata and description
- **BreadcrumbList** - Navigation hierarchy
- **FinancialProduct** - Product information with pricing
- **Service** - Healthcare services offered
- **LocalBusiness** - County-specific business information

### ✅ Geographic Targeting
- County and state information
- Area served specifications
- Local business address

### ✅ Product-Specific Data
- Medicare Supplement: Plan types, premiums, coverage details
- Medicare Part D: Pharmacy count, prescription coverage
- Medicare Advantage: Plan count, star ratings, $0 premiums
- Marketplace: Subsidy rates, zero premium eligibility

### ✅ FAQPage Schema (5 FAQs per page)
Pre-configured FAQs for each product type:

**Medicare Supplement FAQs:**
1. Best plans in county
2. Cost analysis
3. Enrollment periods
4. MA vs. Medigap comparison
5. Part D requirements

**Medicare Part D FAQs:**
1. Plan selection guide
2. Pharmacy network
3. Coverage gap (donut hole)
4. Plan switching
5. Extra Help program

**Medicare Advantage FAQs:**
1. Available plans count
2. Best plans criteria
3. Doctor network retention
4. HMO vs. PPO comparison
5. Enrollment periods

**Marketplace FAQs:**
1. Cost and subsidies
2. $0 premium eligibility
3. Open Enrollment periods
4. Plan tier comparison
5. Pre-existing condition coverage

---

## Implementation Instructions

### For Each Page:

1. **Import the schema generator** at the top of the file:
```typescript
import { generateCountyMedicareSchema, getMedicareSupplementFAQs } from '@/lib/schema/county-medicare-schema'
```

2. **Replace or create the schema constant** using the appropriate configuration from this guide

3. **Add the schema script tag** in the component return (if not already present):
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schemaDataConstant)
  }}
/>
```

4. **Verify in Google's Rich Results Test**: https://search.google.com/test/rich-results

---

## SEO Benefits

This comprehensive schema markup provides:

✅ **Enhanced Search Results** - Rich snippets with star ratings, pricing, FAQs
✅ **Local SEO Boost** - Geographic targeting for county-specific searches
✅ **Product Information** - Detailed healthcare product metadata
✅ **FAQ Rich Results** - Expandable FAQ sections in Google search
✅ **Breadcrumb Navigation** - Search result breadcrumbs
✅ **Knowledge Graph Eligibility** - Structured data for Google Knowledge Graph
✅ **Voice Search Optimization** - FAQ content for voice assistants

---

## Testing & Validation

After implementation, test each page:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org
3. **Google Search Console** - Monitor rich result performance
4. **Bing Webmaster Tools** - Verify structured data

---

## Maintenance

- Update `dateModified` in schemas when content changes
- Review FAQ answers quarterly for accuracy
- Monitor Google Search Console for schema errors
- Update premium amounts annually during AEP/OEP

---

Last Updated: January 2025
