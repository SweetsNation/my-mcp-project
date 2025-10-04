# Miami-Dade County Health Insurance Marketplace Analytics Implementation Guide

**Landing Page:** `/health-insurance-marketplace-miami-dade-county`
**Market Size:** 287,000+ Marketplace enrollees
**Focus:** ACA enrollment, subsidy eligibility, Open Enrollment urgency, bilingual services
**Tracking Module:** `/src/lib/analytics/miami-dade-marketplace-tracking.ts`

---

## Overview

This analytics implementation tracks user engagement with Miami-Dade County's Health Insurance Marketplace (ACA) landing page. With 287,000+ enrollees and 68% qualifying for $0 premium plans, the tracking focuses on subsidy calculator usage, enrollment urgency, plan tier comparison, and bilingual enrollment services.

---

## Key Performance Indicators (KPIs)

### Primary Conversions
| Conversion Type | Target Value | Monthly Goal | Peak Season (OEP) |
|----------------|--------------|--------------|-------------------|
| Phone Calls | $125 | 60 calls | 180 calls (Nov-Jan) |
| Subsidy Calculator | $85 | 150 uses | 450 uses (OEP) |
| Enrollment Start | $100 | 45 applications | 135 applications (OEP) |
| Plan Comparison | $65 | 200 comparisons | 600 comparisons (OEP) |

### Engagement Metrics
- **Subsidy Calculator Usage:** 450+ during Open Enrollment Period (OEP)
- **$0 Premium Plan Interest:** 68% of eligible traffic
- **Bilingual Enrollment Requests:** 45% of total traffic (Spanish/Creole)
- **SEP Qualifying Event Checks:** 80+ per month (off-season)
- **Silver Plan CSR Interest:** 55% of subsidy-eligible users

### Lead Quality Indicators
- **High-Value Leads:** Users qualifying for $0 premium plans
- **Open Enrollment Urgency:** Final 7 days before Dec 15/Jan 15 deadlines
- **SEP Eligible:** Qualified for Special Enrollment Period within 60 days
- **Family Coverage:** 4+ household members seeking coverage

---

## Custom Event Types (19 Total)

### 1. Subsidy Calculator Usage

#### `trackSubsidyCalculatorUsage(householdSize, annualIncome, estimatedSubsidy?, zeroPremiumEligible?)`

Tracks high-value subsidy calculator interactions.

**Parameters:**
- `householdSize`: Number of people in household (1-8+)
- `annualIncome`: Total household annual income
- `estimatedSubsidy`: Optional calculated monthly subsidy amount
- `zeroPremiumEligible`: Optional boolean - qualifies for $0 premium

**Example Usage:**
```typescript
trackSubsidyCalculatorUsage(4, 65000, 485, true);
// Family of 4 earning $65K/year, $485/month subsidy, $0 premium eligible

trackSubsidyCalculatorUsage(1, 28000, 320, true);
// Single person earning $28K/year, $320/month subsidy, $0 premium eligible
```

**FPL Calculation (2025):**
- Individual: $15,060
- Each additional person: +$5,380
- 100-150% FPL: $0 premium Bronze/Silver plans
- 150-400% FPL: Premium tax credits available

**Value Calculation:**
- $0 premium eligible: $85 (high-value lead)
- Subsidy eligible: $60 (standard lead)

---

### 2. $0 Premium Plan Interest

#### `trackZeroPremiumPlanInterest(planTier, monthlyPremium, subsidyAmount)`

Tracks interest in zero-premium coverage after subsidies.

**Parameters:**
- `planTier`: 'bronze' | 'silver'
- `monthlyPremium`: Plan premium before subsidies
- `subsidyAmount`: Monthly subsidy amount

**Example Usage:**
```typescript
trackZeroPremiumPlanInterest('silver', 450, 450);
// Silver plan at $450/month, $450 subsidy = $0 premium

trackZeroPremiumPlanInterest('bronze', 350, 380);
// Bronze plan at $350/month, $380 subsidy = $0 premium
```

**Value Calculation:**
- Zero premium achieved: $75 (high conversion likelihood)
- Reduced premium: $50 (moderate interest)

---

### 3. Open Enrollment Urgency

#### `trackOpenEnrollmentUrgency(daysRemaining, deadlineType, userEngagement)`

Tracks deadline-driven enrollment urgency.

**Parameters:**
- `daysRemaining`: Days until deadline (0-76)
- `deadlineType`: 'dec_15_jan_1_coverage' | 'jan_15_final_deadline'
- `userEngagement`: 'viewed' | 'clicked_cta' | 'started_enrollment'

**Example Usage:**
```typescript
trackOpenEnrollmentUrgency(5, 'dec_15_jan_1_coverage', 'started_enrollment');
// 5 days before Dec 15 deadline, user started enrollment (critical urgency)

trackOpenEnrollmentUrgency(25, 'jan_15_final_deadline', 'clicked_cta');
// 25 days before Jan 15, user clicked enrollment CTA
```

**Urgency Levels:**
- Critical: ≤7 days remaining
- High: 8-30 days remaining
- Moderate: 31+ days remaining

**Value Calculation:**
- Started enrollment: $90 (highest value)
- Clicked CTA: $60 (moderate intent)
- Viewed alert: $30 (awareness)

---

### 4. Special Enrollment Period (SEP) Check

#### `trackSEPQualifyingEventCheck(eventType, withinSixtyDays, documentationReady?)`

Tracks SEP qualifying life event verification.

**Parameters:**
- `eventType`: 'job_loss' | 'marriage' | 'birth_adoption' | 'moved' | 'medicaid_loss' | 'citizenship' | 'incarceration_release' | 'income_change' | 'other'
- `withinSixtyDays`: Boolean - event occurred within 60-day window
- `documentationReady`: Optional - has required documentation

**Example Usage:**
```typescript
trackSEPQualifyingEventCheck('job_loss', true, true);
// Lost job-based coverage within 60 days, documentation ready

trackSEPQualifyingEventCheck('birth_adoption', true, false);
// New baby/adoption within 60 days, needs documentation help
```

**Qualifying Event Values:**
- Job loss: $80 (high urgency)
- Medicaid loss: $75
- Birth/adoption: $70
- Citizenship: $70
- Marriage: $65
- Moved to Miami-Dade: $60
- Income change: $60

---

### 5. Income Verification

#### `trackIncomeVerification(verificationType, incomeRange, householdSize)`

Tracks income documentation process.

**Parameters:**
- `verificationType`: 'paystubs' | 'tax_return' | 'employer_letter' | 'self_employed_1099' | 'social_security'
- `incomeRange`: 'under_15k' | '15k_36k' | '36k_50k' | '50k_75k' | 'over_75k'
- `householdSize`: Number of household members

**Example Usage:**
```typescript
trackIncomeVerification('self_employed_1099', '15k_36k', 2);
// Self-employed couple earning $15K-$36K, using 1099 forms

trackIncomeVerification('paystubs', '36k_50k', 4);
// Family of 4 earning $36K-$50K, using paystubs
```

**Value:** $55 (documentation engagement)

---

### 6. Bilingual Enrollment Request

#### `trackBilingualEnrollmentRequest(language, serviceType, community?)`

Tracks multilingual enrollment assistance requests.

**Parameters:**
- `language`: 'spanish' | 'haitian_creole' | 'portuguese' | 'other'
- `serviceType`: 'phone_enrollment' | 'in_person_appointment' | 'document_translation' | 'plan_explanation'
- `community`: Optional neighborhood/community name

**Example Usage:**
```typescript
trackBilingualEnrollmentRequest('spanish', 'phone_enrollment', 'Little Havana');
// Spanish-speaking enrollment by phone in Little Havana

trackBilingualEnrollmentRequest('haitian_creole', 'in_person_appointment', 'Little Haiti');
// Haitian Creole in-person enrollment in Little Haiti
```

**Language Values:**
- Spanish (Little Havana, Hialeah): $70
- Haitian Creole (Little Haiti): $65
- Portuguese (Brazilian community): $60
- Other languages: $55

---

### 7. Silver Plan CSR Interest

#### `trackSilverPlanCSRInterest(fplPercentage, csrLevel, estimatedSavings?)`

Tracks Cost-Sharing Reduction (CSR) interest for Silver plans.

**Parameters:**
- `fplPercentage`: Federal Poverty Level percentage (e.g., 175 for 175% FPL)
- `csrLevel`: '94av' | '87av' | '73av' | 'none'
- `estimatedSavings`: Optional annual savings from CSR

**Example Usage:**
```typescript
trackSilverPlanCSRInterest(140, '94av', 3500);
// 140% FPL, 94% actuarial value CSR, $3,500 annual savings

trackSilverPlanCSRInterest(180, '87av', 2200);
// 180% FPL, 87% actuarial value CSR, $2,200 annual savings
```

**CSR Levels:**
- 94% AV (100-150% FPL): Lowest out-of-pocket costs - $80 value
- 87% AV (150-200% FPL): Reduced costs - $75 value
- 73% AV (200-250% FPL): Moderate reduction - $70 value
- No CSR (250%+ FPL): Standard Silver plan - $50 value

---

### 8. Hospital Network Comparison

#### `trackHospitalNetworkComparison(hospitalsCompared, networkType, priorityHospital?)`

Tracks hospital network access comparison.

**Parameters:**
- `hospitalsCompared`: Array of hospital system names
- `networkType`: 'hmo' | 'ppo' | 'epo'
- `priorityHospital`: Optional primary hospital preference

**Example Usage:**
```typescript
trackHospitalNetworkComparison(
  ['Jackson Health', 'Baptist Health', 'UM Health'],
  'hmo',
  'Jackson Health'
);
// Comparing 3 hospital systems in HMO network, prefers Jackson
```

**Major Hospital Values:**
- Cleveland Clinic: $80
- Baptist Health: $75
- UM Health: $75
- Jackson Health: $70
- Mount Sinai: $65

**Value:** $60 (network comparison engagement)

---

### 9. Essential Health Benefits View

#### `trackEssentialHealthBenefitsView(benefitCategory, timeSpent?)`

Tracks education on ACA-mandated benefits.

**Parameters:**
- `benefitCategory`: 'medical_services' | 'pharmacy_specialty' | 'family_services' | 'preventive_care' | 'all'
- `timeSpent`: Optional seconds spent viewing

**Example Usage:**
```typescript
trackEssentialHealthBenefitsView('all', 120);
// Viewed all essential health benefits for 2 minutes
```

**Value:** $35 (educational engagement)

---

### 10. Preventive Care Education

#### `trackPreventiveCareEducation(serviceType, zeroCopayUnderstanding?)`

Tracks $0 copay preventive care education.

**Parameters:**
- `serviceType`: 'annual_checkup' | 'cancer_screening' | 'immunizations' | 'well_woman' | 'blood_pressure' | 'diabetes_screening'
- `zeroCopayUnderstanding`: Optional - understands $0 copay benefit

**Example Usage:**
```typescript
trackPreventiveCareEducation('annual_checkup', true);
// Understands annual checkup is $0 copay
```

**Value:** $40 (preventive care awareness)

---

### 11. Family Coverage Inquiry

#### `trackFamilyCoverageInquiry(familySize, childrenCount, adultsCount, estimatedPremium?)`

Tracks family plan coverage requests.

**Parameters:**
- `familySize`: Total family members (1-8+)
- `childrenCount`: Number of children
- `adultsCount`: Number of adults
- `estimatedPremium`: Optional total family premium

**Example Usage:**
```typescript
trackFamilyCoverageInquiry(5, 3, 2, 850);
// Family of 5 (3 kids, 2 adults), $850/month estimated premium
```

**Value Calculation:**
- Large family (5+ members): $85
- Standard family (2-4 members): $65

---

### 12. Medicaid Eligibility Check

#### `trackMedicaidEligibilityCheck(annualIncome, householdSize, category)`

Tracks Medicaid/CHIP eligibility verification.

**Parameters:**
- `annualIncome`: Total household annual income
- `householdSize`: Number of household members
- `category`: 'adult_expansion' | 'pregnant_women' | 'children_chip' | 'disabled' | 'elderly'

**Example Usage:**
```typescript
trackMedicaidEligibilityCheck(18000, 3, 'children_chip');
// Family of 3 earning $18K/year, checking CHIP for children

trackMedicaidEligibilityCheck(20000, 1, 'adult_expansion');
// Single adult earning $20K/year, checking Medicaid expansion
```

**Medicaid Threshold:** ≤138% FPL (Florida Medicaid expansion)

**Value Calculation:**
- Medicaid eligible: $70 (qualifies for free coverage)
- Not eligible: $45 (Marketplace referral)

---

### 13. Plan Tier Comparison

#### `trackPlanTierComparison(tiersCompared, primaryConsideration, timeSpent?)`

Tracks multi-tier plan comparison.

**Parameters:**
- `tiersCompared`: Array of plan tiers compared
- `primaryConsideration`: 'premium' | 'deductible' | 'out_of_pocket_max' | 'network' | 'subsidies'
- `timeSpent`: Optional seconds spent comparing

**Example Usage:**
```typescript
trackPlanTierComparison(
  ['bronze', 'silver', 'gold'],
  'subsidies',
  180
);
// Comparing Bronze, Silver, Gold with focus on subsidies for 3 minutes
```

**Value Calculation:**
- Comprehensive comparison (3+ tiers): $70
- Basic comparison (1-2 tiers): $50

---

### 14. Enrollment Application Start

#### `trackEnrollmentApplicationStart(enrollmentType, assistanceNeeded?, planSelected?)`

Tracks enrollment application initiation.

**Parameters:**
- `enrollmentType`: 'open_enrollment' | 'special_enrollment'
- `assistanceNeeded`: Optional - needs agent help
- `planSelected`: Optional - selected plan name

**Example Usage:**
```typescript
trackEnrollmentApplicationStart('open_enrollment', true, 'Silver CSR 94');
// Open Enrollment application with assistance, selected Silver CSR plan
```

**Value:** $100 (highest-value conversion event)

---

### 15. Deadline Urgency Interaction

#### `trackDeadlineUrgencyInteraction(deadline, action)`

Tracks Open Enrollment deadline alert engagement.

**Parameters:**
- `deadline`: 'december_15' | 'january_15'
- `action`: 'viewed_alert' | 'clicked_enroll' | 'set_reminder' | 'shared'

**Example Usage:**
```typescript
trackDeadlineUrgencyInteraction('december_15', 'clicked_enroll');
// Dec 15 deadline alert, user clicked enroll now
```

**Action Values:**
- Clicked enroll: $75 (high intent)
- Set reminder: $45 (planning)
- Shared: $35 (awareness)
- Viewed alert: $25 (passive)

---

### 16. Bronze Plan Interest

#### `trackBronzePlanInterest(monthlyPremium, deductible, afterSubsidy?)`

Tracks low-premium Bronze plan interest.

**Parameters:**
- `monthlyPremium`: Premium before subsidies
- `deductible`: Annual deductible amount
- `afterSubsidy`: Optional premium after subsidy

**Example Usage:**
```typescript
trackBronzePlanInterest(350, 8500, 0);
// Bronze at $350/month, $8,500 deductible, $0 after subsidy
```

**Value:** $55 (budget-conscious shoppers)

---

### 17. Gold/Platinum Plan Interest

#### `trackGoldPlatinumPlanInterest(planTier, monthlyPremium, outOfPocketMax, chronicCondition?)`

Tracks comprehensive coverage plan interest.

**Parameters:**
- `planTier`: 'gold' | 'platinum'
- `monthlyPremium`: Monthly premium cost
- `outOfPocketMax`: Annual out-of-pocket maximum
- `chronicCondition`: Optional - has chronic condition

**Example Usage:**
```typescript
trackGoldPlatinumPlanInterest('gold', 550, 2500, true);
// Gold plan at $550/month, $2,500 OOP max, chronic condition
```

**Value Calculation:**
- Chronic condition: $75 (medical necessity)
- General interest: $60

---

### 18. Catastrophic Plan Inquiry

#### `trackCatastrophicPlanInquiry(age, hardshipExemption?, reasonForInterest)`

Tracks catastrophic plan eligibility check.

**Parameters:**
- `age`: User's age
- `hardshipExemption`: Optional - has hardship exemption
- `reasonForInterest`: 'low_premium' | 'young_healthy' | 'hardship' | 'other'

**Example Usage:**
```typescript
trackCatastrophicPlanInquiry(26, false, 'young_healthy');
// 26-year-old, no hardship, interested due to being young/healthy
```

**Eligibility:** Under 30 OR hardship exemption

**Value:** $45 (niche plan type)

---

### 19. Regional Marketplace Engagement

#### `trackRegionalMarketplaceEngagement(region, uninsuredRate, averageSubsidy)`

Tracks engagement by Miami-Dade region.

**Parameters:**
- `region`: 'downtown_miami' | 'hialeah_north' | 'kendall_south' | 'west_doral' | 'homestead' | 'little_haiti_havana'
- `uninsuredRate`: Regional uninsured percentage
- `averageSubsidy`: Regional average monthly subsidy

**Example Usage:**
```typescript
trackRegionalMarketplaceEngagement('hialeah_north', 19.8, 495);
// Hialeah/North Miami-Dade region, 19.8% uninsured, $495 avg subsidy
```

**Regional Data:**
- Hialeah/North: 620K population, 19.8% uninsured
- Downtown/Miami Beach: 485K population, 14.5% uninsured
- Kendall/South: 550K population, 15.2% uninsured
- Homestead: 285K population, 22.4% uninsured (highest)

**Value:** $45 (regional targeting)

---

## Google Analytics 4 Custom Dimensions

### Event-scoped Dimensions

Configure these in GA4 Admin > Custom Definitions:

| Dimension Name | Event Parameter | Description |
|---------------|----------------|-------------|
| household_size | household_size | Number in household (1-8+) |
| annual_income | annual_income | Total household income |
| fpl_percentage | fpl_percentage | Federal Poverty Level % |
| plan_tier | plan_tier | Bronze, Silver, Gold, Platinum, Catastrophic |
| enrollment_type | enrollment_type | Open Enrollment vs SEP |
| language | language | Spanish, Creole, Portuguese |
| qualifying_event_type | qualifying_event_type | SEP qualifying event |
| csr_level | csr_level | 94av, 87av, 73av, none |
| network_type | network_type | HMO, PPO, EPO |
| deadline_type | deadline_type | Dec 15 vs Jan 15 |

### User-scoped Dimensions

| Dimension Name | Event Parameter | Description |
|---------------|----------------|-------------|
| zero_premium_eligible | zero_premium_eligible | Qualifies for $0 premium |
| subsidy_eligible | subsidy_eligible | Qualifies for premium tax credits |
| sep_eligible | sep_eligible | Qualifies for SEP |
| bilingual_service | bilingual_service | Requested language assistance |

---

## Audience Segments (20 Total)

Configure these in GA4 Admin > Audiences:

### High-Value Segments

1. **Miami-Dade Marketplace Shoppers**
   - Visited Marketplace landing page
   - Location: Miami-Dade County, FL

2. **Subsidy Eligible Residents**
   - Household income 100-400% FPL
   - Used subsidy calculator

3. **$0 Premium Qualified**
   - Household income 100-150% FPL
   - Zero premium eligible flag = true

4. **Open Enrollment Period Shoppers**
   - Visited during Nov 1 - Jan 15
   - High urgency engagement

5. **Special Enrollment Qualified**
   - SEP qualifying event within 60 days
   - SEP eligible flag = true

### Language & Cultural Segments

6. **Bilingual Spanish Enrollees**
   - Spanish language service requested
   - Little Havana/Hialeah/Westchester

7. **Haitian Creole Community**
   - Haitian Creole service requested
   - Little Haiti/North Miami

8. **Hialeah Marketplace Residents**
   - Hialeah/North Miami-Dade region
   - 19.8% uninsured area

9. **Miami Beach ACA Shoppers**
   - Downtown Miami/Miami Beach region
   - 14.5% uninsured area

10. **Little Havana Enrollees**
    - Little Havana community
    - Spanish bilingual services

11. **Little Haiti Marketplace**
    - Little Haiti community
    - Haitian Creole services

### Coverage Type Segments

12. **Uninsured Miami-Dade Residents**
    - Currently uninsured
    - Marketplace-eligible income

13. **Silver Plan CSR Eligible**
    - Income 100-250% FPL
    - Cost-sharing reduction qualified

14. **Family Coverage Seekers**
    - Household size 4+ members
    - Family coverage inquiry

15. **Young Adults Under 26**
    - Age 18-25
    - Parent plan vs Marketplace comparison

### Employment & Income Segments

16. **Self-Employed Entrepreneurs**
    - Self-employed income verification
    - 1099 documentation

17. **Gig Economy Workers**
    - Variable income
    - Multiple income sources

18. **Recent Job Loss SEP**
    - Job loss qualifying event
    - COBRA vs Marketplace

19. **Income Change SEP Eligible**
    - Income change event
    - Subsidy recalculation needed

20. **Medicaid Expansion Eligible**
    - Income ≤138% FPL
    - Adult expansion category

---

## Implementation Checklist

### Phase 1: Configuration (Completed)
- [x] Add analytics configuration to `landing-page-analytics-config.ts`
- [x] Create tracking module `/src/lib/analytics/miami-dade-marketplace-tracking.ts`
- [x] Set conversion values (phone: $125, subsidy calc: $85, enrollment: $100, comparison: $65)

### Phase 2: Testing

- [ ] Test subsidy calculator tracking (various income levels)
- [ ] Test $0 premium plan interest
- [ ] Test Open Enrollment deadline urgency (final 7 days)
- [ ] Test SEP qualifying event checks (8 event types)
- [ ] Test income verification flow
- [ ] Test bilingual enrollment requests (Spanish, Creole)
- [ ] Test Silver plan CSR interest (94%, 87%, 73% AV)
- [ ] Test hospital network comparison
- [ ] Test Essential Health Benefits education
- [ ] Test preventive care $0 copay awareness
- [ ] Test family coverage inquiries (4+ members)
- [ ] Test Medicaid eligibility checks
- [ ] Test plan tier comparison (Bronze/Silver/Gold)
- [ ] Test enrollment application start
- [ ] Test deadline urgency interactions
- [ ] Test Bronze/Gold/Platinum/Catastrophic plan interest
- [ ] Test regional engagement (6 Miami-Dade zones)
- [ ] Verify all 19 event types in GA4 DebugView

### Phase 3: GA4 Configuration

- [ ] Create 10 event-scoped custom dimensions
- [ ] Create 4 user-scoped custom dimensions
- [ ] Build 20 audience segments
- [ ] Set up conversion events:
  - `landing_page_phone_call` ($125)
  - `subsidy_calculator_usage` ($85)
  - `enrollment_application_start` ($100)
  - `plan_tier_comparison` ($65)
  - `zero_premium_plan_interest` ($75)

### Phase 4: Reporting

- [ ] Create "Marketplace Subsidy Calculator Funnel" report
- [ ] Create "Open Enrollment Urgency Performance" report
- [ ] Create "SEP Qualifying Events Pipeline" report
- [ ] Create "Bilingual Enrollment Services" report
- [ ] Create "Silver Plan CSR Interest" report
- [ ] Create "Regional Marketplace Engagement" report (6 zones)
- [ ] Set up automated weekly OEP reports (Nov-Jan)

---

## Success Metrics

### Monthly Targets (Off-Season: Feb-Oct)

| Metric | Target | Stretch Goal |
|--------|--------|--------------|
| Phone Calls | 60 | 85 |
| Subsidy Calculator Usage | 150 | 220 |
| Enrollment Applications | 45 | 70 |
| Plan Comparisons (3+ tiers) | 200 | 300 |
| Bilingual Requests | 80 | 120 |
| SEP Qualifying Event Checks | 80 | 110 |
| Hospital Network Comparisons | 100 | 150 |

### Open Enrollment Period Targets (Nov 1 - Jan 15)

| Metric | OEP Target | Critical Period (Final 7 days) |
|--------|-----------|-------------------------------|
| Phone Calls | 180 | 60/week |
| Subsidy Calculator Usage | 450 | 150/week |
| Enrollment Applications | 135 | 45/week |
| Plan Comparisons | 600 | 200/week |
| Deadline Urgency CTAs | 300 | 100/week |
| $0 Premium Plan Interest | 380 | 130/week |

### Lead Quality Indicators

- **$0 Premium Qualified:** 68% of subsidy calculator users
- **Silver Plan CSR Eligible:** 55% of 100-250% FPL users
- **SEP Qualified (60-day window):** 75% conversion from check to application
- **Family Coverage (4+ members):** 30% of total inquiries
- **Bilingual Services:** 45% of total engagement (Spanish 30%, Creole 15%)

### Conversion Rate Targets

- **Subsidy Calculator → Phone Call:** 20%
- **$0 Premium Interest → Enrollment:** 35%
- **Open Enrollment Alert → Enroll CTA:** 18%
- **SEP Check → Application Start:** 25%
- **Hospital Network Comparison → Phone Call:** 15%
- **Silver CSR Interest → Enrollment:** 30%

---

## Key Insights to Monitor

1. **Subsidy Awareness**: Do users understand they may qualify for $0 premium plans?
2. **Open Enrollment Urgency**: Spike in last 7 days before Dec 15/Jan 15 deadlines?
3. **SEP Conversion**: Which qualifying events lead to highest enrollment rates?
4. **Bilingual Service Demand**: Spanish vs Creole enrollment assistance requests
5. **Plan Tier Preference**: Bronze (low premium) vs Silver (CSR) vs Gold (comprehensive)
6. **Regional Variations**: Which Miami-Dade zones have highest engagement?
7. **Family vs Individual**: Household size impact on plan selection
8. **Income Verification Friction**: Where do users drop off in documentation process?

---

## Seasonal Tracking Adjustments

### Open Enrollment Period (Nov 1 - Jan 15)
- **Enable:** Deadline countdown tracking
- **Enable:** Dec 15 urgency alerts (Jan 1 coverage)
- **Enable:** Jan 15 final deadline alerts
- **Increase:** Phone call value to $150 (peak demand)
- **Track:** Daily enrollment application starts

### Special Enrollment Period (Year-Round)
- **Track:** SEP qualifying event types
- **Track:** 60-day window compliance
- **Track:** Documentation readiness
- **Value:** SEP enrollments at $110 (higher complexity)

### Medicaid Unwinding (State-Specific)
- **Track:** Medicaid loss qualifying events
- **Track:** Marketplace transition from Medicaid
- **Alert:** Medicaid ineligible → Marketplace enrollment

---

## Contact for Support

For questions about Miami-Dade Marketplace analytics implementation:
- **Analytics Configuration**: `/src/lib/landing-page-analytics-config.ts` (lines 392-441)
- **Tracking Module**: `/src/lib/analytics/miami-dade-marketplace-tracking.ts`
- **Landing Page**: `/src/app/health-insurance-marketplace-miami-dade-county/page.tsx`

---

**Last Updated:** 2025-10-02
**Market:** Miami-Dade County, Florida
**Focus:** Health Insurance Marketplace (ACA)
**Primary Markets:** Hialeah, Miami Beach, Little Havana, Little Haiti, Kendall, Homestead
**Open Enrollment:** November 1, 2024 - January 15, 2025
