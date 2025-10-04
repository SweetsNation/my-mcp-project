# Miami-Dade County Medicare Part D Analytics Implementation Guide

**Landing Page:** `/medicare-part-d-miami-dade-county`
**Market Size:** 340,000+ Part D enrollees
**Focus:** Prescription drug coverage, pharmacy network engagement, formulary lookup, Extra Help applications
**Tracking Module:** `/src/lib/analytics/miami-dade-part-d-tracking.ts`

---

## Overview

This analytics implementation tracks user engagement with Miami-Dade County's Medicare Part D prescription drug coverage landing page. With 340,000+ enrollees and 850+ pharmacy locations, the tracking focuses on pharmacy network access, medication coverage verification, and low-income subsidy applications.

---

## Key Performance Indicators (KPIs)

### Primary Conversions
| Conversion Type | Target Value | Monthly Goal |
|----------------|--------------|--------------|
| Phone Calls | $80 | 45 calls |
| Formulary Lookups | $60 | 120 searches |
| Plan Comparisons | $45 | 85 comparisons |
| Extra Help Applications | $75 | 25 applications |

### Engagement Metrics
- **Pharmacy Network Views:** 200+ per month
- **Bilingual Service Interest:** 35% of total traffic
- **Chronic Condition Coverage Views:** 150+ per month
- **Mail Order Pharmacy Interest:** 40+ inquiries per month

### Lead Quality Indicators
- **High-Value Leads:** Users checking 5+ medications
- **Extra Help Qualified:** Income-eligible application starts
- **Specialty Drug Inquiries:** High-cost medication coverage
- **Deep Comparison:** 3+ Part D plans compared

---

## Custom Event Types (19 Total)

### 1. Pharmacy Network Tracking

#### `trackPharmacyNetworkInterest(pharmacyChain, interactionType, timeSpent?)`

Tracks user interest in specific pharmacy chains.

**Parameters:**
- `pharmacyChain`: 'cvs' | 'walgreens' | 'publix' | 'walmart' | 'navarro' | 'sedanos' | 'other'
- `interactionType`: 'view' | 'location_search' | 'hours_check' | 'services_inquiry'
- `timeSpent`: Optional seconds spent on pharmacy section

**Example Usage:**
```typescript
trackPharmacyNetworkInterest('cvs', 'location_search', 45);
// User searched for CVS locations for 45 seconds

trackPharmacyNetworkInterest('navarro', 'services_inquiry', 60);
// User inquired about Navarro's bilingual services
```

**Pharmacy Network Data:**
- **CVS:** 200+ locations, $35 event value
- **Walgreens:** 180+ locations, $30 event value
- **Publix:** 120+ locations, $40 event value (convenience)
- **Navarro:** 30+ locations, $45 event value (Cuban-American community)
- **Sedano's:** 15+ locations, $40 event value (Hispanic supermarket)

---

### 2. Formulary Lookup Tool

#### `trackFormularyLookupUsage(drugName, drugCategory, resultsFound, planCount?)`

Tracks high-value drug coverage searches.

**Parameters:**
- `drugName`: Medication name (lowercase)
- `drugCategory`: 'diabetes' | 'cardiac' | 'respiratory' | 'cholesterol' | 'blood_pressure' | 'specialty' | 'other'
- `resultsFound`: Boolean - did search return results
- `planCount`: Optional number of plans covering the drug

**Example Usage:**
```typescript
trackFormularyLookupUsage('metformin', 'diabetes', true, 12);
// User found metformin covered by 12 plans

trackFormularyLookupUsage('eliquis', 'cardiac', true, 8);
// Blood thinner search with 8 plan options
```

**Category Values:**
- Specialty drugs: $60
- Diabetes medications: $50
- Cardiac medications: $45
- Respiratory medications: $40
- Cholesterol/BP medications: $35

---

### 3. Drug Coverage Verification

#### `trackDrugCoverageCheck(medicationCount, coverageType, totalMonthlyCost?)`

Tracks comprehensive medication list coverage checks.

**Parameters:**
- `medicationCount`: Number of medications being verified
- `coverageType`: 'generic' | 'brand' | 'specialty' | 'mixed'
- `totalMonthlyCost`: Optional estimated monthly cost

**Example Usage:**
```typescript
trackDrugCoverageCheck(8, 'mixed', 245);
// User checking 8 medications costing $245/month

trackDrugCoverageCheck(3, 'generic', 35);
// Simple generic medication check
```

**Value Calculation:**
- 5+ medications: $55 (high-value lead)
- 1-4 medications: $40 (standard lead)

---

### 4. Part D Plan Comparison

#### `trackPartDPlanComparison(plansCompared, comparisonFactors, timeSpent?)`

Tracks detailed plan comparison engagement.

**Parameters:**
- `plansCompared`: Array of plan names (e.g., ['Aetna Premier', 'SilverScript', 'Humana'])
- `comparisonFactors`: Array of comparison criteria (e.g., ['premium', 'deductible', 'formulary'])
- `timeSpent`: Optional seconds spent comparing

**Example Usage:**
```typescript
trackPartDPlanComparison(
  ['Aetna Premier Part D', 'SilverScript Choice', 'Humana Preferred Rx'],
  ['monthly_premium', 'deductible', 'pharmacy_network', 'drug_coverage'],
  180
);
// Deep comparison of 3 plans for 3 minutes
```

**Value Calculation:**
- 3+ plans compared: $50 (deep comparison)
- 1-2 plans compared: $35 (initial research)

---

### 5. Extra Help (Low-Income Subsidy) Application

#### `trackExtraHelpInterest(incomeQualified, applicationStage, assistanceRequested?)`

Tracks Extra Help/LIS application funnel.

**Parameters:**
- `incomeQualified`: Boolean - meets income requirements
- `applicationStage`: 'information' | 'eligibility_check' | 'application_start' | 'application_submit'
- `assistanceRequested`: Optional - needs help with application

**Example Usage:**
```typescript
trackExtraHelpInterest(true, 'application_submit', true);
// Qualified user submitted Extra Help application with assistance

trackExtraHelpInterest(false, 'eligibility_check', false);
// User checked eligibility but doesn't qualify
```

**Stage Values:**
- Application submitted: $85 (highest value)
- Application started: $60
- Eligibility check: $40
- Information view: $25

---

### 6. Bilingual Pharmacy Services

#### `trackBilingualPharmacyInterest(language, serviceType)`

Tracks multilingual pharmacy service requests.

**Parameters:**
- `language`: 'spanish' | 'haitian_creole' | 'portuguese' | 'other'
- `serviceType`: 'pharmacist_consultation' | 'prescription_translation' | 'medication_instructions' | 'insurance_assistance'

**Example Usage:**
```typescript
trackBilingualPharmacyInterest('spanish', 'pharmacist_consultation');
// Spanish-speaking pharmacist requested

trackBilingualPharmacyInterest('haitian_creole', 'medication_instructions');
// Haitian Creole medication instructions needed
```

**Language Values:**
- Spanish (Little Havana, Hialeah): $45
- Haitian Creole (Little Haiti): $40
- Portuguese (Brazilian community): $35

---

### 7. Chronic Condition Coverage

#### `trackChronicConditionCoverage(condition, medicationCount, monthlySuppliesInterest?)`

Tracks chronic disease medication coverage interest.

**Parameters:**
- `condition`: 'diabetes' | 'heart_disease' | 'copd' | 'asthma' | 'hypertension' | 'high_cholesterol'
- `medicationCount`: Number of medications for condition
- `monthlySuppliesInterest`: Optional - interested in supplies (e.g., test strips)

**Example Usage:**
```typescript
trackChronicConditionCoverage('diabetes', 4, true);
// Diabetes patient with 4 medications + supplies interest

trackChronicConditionCoverage('heart_disease', 3, false);
// Cardiac patient with 3 medications
```

**Condition Values:**
- Diabetes: $50 (very high prevalence in Miami-Dade)
- Heart disease: $45
- Hypertension: $40
- COPD: $40

---

### 8. Cost Tier Analysis

#### `trackCostTierAnalysis(tier, drugType, monthlyCost)`

Tracks medication cost tier education engagement.

**Parameters:**
- `tier`: 1 | 2 | 3 | 4 | 5
- `drugType`: 'generic' | 'preferred_brand' | 'non_preferred_brand' | 'specialty'
- `monthlyCost`: Monthly cost for medication

**Example Usage:**
```typescript
trackCostTierAnalysis(5, 'specialty', 350);
// Tier 5 specialty drug costing $350/month

trackCostTierAnalysis(1, 'generic', 8);
// Tier 1 preferred generic at $8/month
```

**Tier Labels:**
- Tier 1: Preferred Generic
- Tier 2: Generic
- Tier 3: Preferred Brand
- Tier 4: Non-Preferred Brand
- Tier 5: Specialty

**Value Calculation:**
- $100+ monthly cost: $45 (high-cost medication)
- <$100 monthly cost: $30 (standard)

---

### 9. Mail Order Pharmacy Interest

#### `trackMailOrderPharmacyInterest(provider, savingsEstimate?, chronicMedication?)`

Tracks 90-day mail order pharmacy interest.

**Parameters:**
- `provider`: 'cvs_caremark' | 'express_scripts' | 'optum_rx' | 'other'
- `savingsEstimate`: Optional estimated monthly savings
- `chronicMedication`: Optional - for chronic condition

**Example Usage:**
```typescript
trackMailOrderPharmacyInterest('cvs_caremark', 45, true);
// CVS Caremark mail order saving $45/month on chronic meds

trackMailOrderPharmacyInterest('express_scripts', 30, false);
// Express Scripts inquiry
```

**Provider Values:**
- CVS Caremark: $40
- Express Scripts: $35
- OptumRx: $35

---

### 10. CVS Network Engagement

#### `trackCVSNetworkEngagement(location, serviceType)`

Tracks CVS-specific pharmacy services.

**Parameters:**
- `location`: CVS location (city/neighborhood)
- `serviceType`: 'prescription_pickup' | 'immunizations' | 'health_screening' | 'minuteclinic' | 'photo_services'

**Example Usage:**
```typescript
trackCVSNetworkEngagement('Hialeah Gardens', 'immunizations');
// CVS flu shot in Hialeah Gardens

trackCVSNetworkEngagement('Downtown Miami', 'minuteclinic');
// MinuteClinic visit interest
```

---

### 11. Walgreens Pharmacy Engagement

#### `trackWalgreensEngagement(location, serviceType)`

Tracks Walgreens-specific services.

**Parameters:**
- `location`: Walgreens location
- `serviceType`: 'prescription_pickup' | 'immunizations' | 'health_testing' | '24_hour_pharmacy'

**Example Usage:**
```typescript
trackWalgreensEngagement('Miami Beach', '24_hour_pharmacy');
// 24-hour Walgreens access in Miami Beach
```

---

### 12. Publix Pharmacy Interest

#### `trackPublixPharmacyInterest(location, freeAntibiotics?)`

Tracks Publix pharmacy convenience.

**Parameters:**
- `location`: Publix location
- `freeAntibiotics`: Optional - interest in free antibiotic program

**Example Usage:**
```typescript
trackPublixPharmacyInterest('Coral Gables', true);
// Publix free antibiotics program interest
```

---

### 13. Navarro/Sedano's Community Pharmacy

#### `trackCommunityPharmacyInterest(pharmacy, community, bilingualServices?)`

Tracks Hispanic/Cuban-American community pharmacy engagement.

**Parameters:**
- `pharmacy`: 'navarro' | 'sedanos'
- `community`: Neighborhood/community name
- `bilingualServices`: Optional - bilingual service interest

**Example Usage:**
```typescript
trackCommunityPharmacyInterest('navarro', 'Little Havana', true);
// Navarro pharmacy with Spanish services in Little Havana

trackCommunityPharmacyInterest('sedanos', 'Westchester', true);
// Sedano's supermarket pharmacy
```

**Pharmacy Values:**
- Navarro (Cuban-American): $45
- Sedano's (Hispanic supermarket): $40

---

### 14. Spanish-Speaking Pharmacist Request

#### `trackSpanishPharmacistRequest(requestType)`

Tracks Spanish-language pharmacist service requests.

**Parameters:**
- `requestType`: 'consultation' | 'medication_counseling' | 'insurance_help' | 'prescription_translation'

**Example Usage:**
```typescript
trackSpanishPharmacistRequest('medication_counseling');
// Spanish medication counseling requested
```

**Value:** $45 (high-value bilingual service)

---

### 15. Specialty Drug Coverage Inquiry

#### `trackSpecialtyDrugInquiry(drugCategory, monthlyCost?)`

Tracks high-cost specialty medication coverage.

**Parameters:**
- `drugCategory`: 'oncology' | 'rheumatoid_arthritis' | 'multiple_sclerosis' | 'hepatitis_c' | 'other'
- `monthlyCost`: Optional monthly cost

**Example Usage:**
```typescript
trackSpecialtyDrugInquiry('rheumatoid_arthritis', 1200);
// RA biologic medication at $1,200/month
```

**Value:** $60 (highest-value drug inquiry)

---

### 16. Part D Enrollment Start

#### `trackPartDEnrollmentStart(enrollmentPeriod, assistanceNeeded?)`

Tracks enrollment application initiation.

**Parameters:**
- `enrollmentPeriod`: 'aep' | 'iep' | 'oep' | 'sep'
- `assistanceNeeded`: Optional - needs enrollment help

**Example Usage:**
```typescript
trackPartDEnrollmentStart('aep', true);
// AEP enrollment with assistance requested
```

**Enrollment Periods:**
- AEP: Annual Enrollment (Oct 15 - Dec 7)
- IEP: Initial Enrollment
- OEP: Open Enrollment (Jan 1 - Mar 31)
- SEP: Special Enrollment

**Value:** $75 (high-value conversion)

---

### 17. Donut Hole / Coverage Gap Education

#### `trackDonutHoleEducation(currentSpending, gapCoverageInterest?)`

Tracks coverage gap education engagement.

**Parameters:**
- `currentSpending`: Current annual drug spending
- `gapCoverageInterest`: Optional - interested in gap coverage

**Example Usage:**
```typescript
trackDonutHoleEducation(5200, true);
// User in donut hole ($5,030-$8,000) interested in gap coverage

trackDonutHoleEducation(3800, false);
// User approaching donut hole
```

**Donut Hole Thresholds:**
- In gap: $5,030 - $8,000 (value: $50)
- Approaching: $3,500 - $5,030 (value: $35)

---

### 18. Preferred Pharmacy Network

#### `trackPreferredPharmacyNetwork(pharmacyName, costSavings?)`

Tracks preferred pharmacy lower cost tier interest.

**Parameters:**
- `pharmacyName`: Pharmacy name
- `costSavings`: Optional estimated savings

**Example Usage:**
```typescript
trackPreferredPharmacyNetwork('Publix Pharmacy', 25);
// Preferred pharmacy savings of $25/month
```

**Value:** $35

---

### 19. Medication Therapy Management (MTM)

#### `trackMTMInterest(qualifies, chronicConditions, medicationCount)`

Tracks MTM program qualification interest.

**Parameters:**
- `qualifies`: Boolean - qualifies for MTM
- `chronicConditions`: Number of chronic conditions
- `medicationCount`: Total medications

**Example Usage:**
```typescript
trackMTMInterest(true, 3, 10);
// Qualifies for MTM with 3 conditions and 10 medications
```

**MTM Qualification:**
- 3+ chronic conditions
- 8+ medications
- $4,000+ annual drug costs

**Value:** $45 (qualified) | $30 (non-qualified)

---

### 20. Regional Pharmacy Access

#### `trackRegionalPharmacyAccess(region, pharmacyDensity)`

Tracks pharmacy access by Miami-Dade region.

**Parameters:**
- `region`: 'downtown_miami' | 'north_miami_dade' | 'south_miami_dade' | 'west_miami_dade' | 'central_miami_dade' | 'beaches'
- `pharmacyDensity`: 'high' | 'medium' | 'low'

**Example Usage:**
```typescript
trackRegionalPharmacyAccess('north_miami_dade', 'high');
// North Miami-Dade has 240 pharmacies (high density)
```

**Regional Data:**
- North Miami-Dade/Hialeah: 240 pharmacies, 125K beneficiaries
- Downtown Miami/Miami Beach: 180 pharmacies, 95K beneficiaries
- West Miami-Dade/Doral: 170 pharmacies, 88K beneficiaries

---

## Google Analytics 4 Custom Dimensions

### Event-scoped Dimensions

Configure these in GA4 Admin > Custom Definitions:

| Dimension Name | Event Parameter | Description |
|---------------|----------------|-------------|
| pharmacy_chain | pharmacy_chain | CVS, Walgreens, Publix, etc. |
| drug_category | drug_category | Diabetes, cardiac, specialty, etc. |
| coverage_type | coverage_type | Generic, brand, specialty |
| application_stage | application_stage | Extra Help application progress |
| language | language | Spanish, Haitian Creole, Portuguese |
| condition | condition | Chronic condition type |
| cost_tier | cost_tier | Part D formulary tier (1-5) |
| enrollment_period | enrollment_period | AEP, IEP, OEP, SEP |
| pharmacy_density | pharmacy_density | High, medium, low by region |
| community_pharmacy | community_pharmacy | Navarro, Sedano's cultural connection |

### User-scoped Dimensions

| Dimension Name | Event Parameter | Description |
|---------------|----------------|-------------|
| medication_count | medication_count | Number of prescriptions |
| chronic_conditions | chronic_conditions | Number of chronic conditions |
| bilingual_service | bilingual_service | Requested bilingual services |
| high_cost_medication | high_cost_medication | $100+ monthly cost |

---

## Audience Segments (20 Total)

Configure these in GA4 Admin > Audiences:

### High-Value Segments

1. **Miami-Dade Part D Enrollees**
   - Visited Part D landing page
   - Location: Miami-Dade County, FL

2. **Chronic Condition Patients**
   - Viewed chronic condition coverage
   - 3+ medication checks

3. **Extra Help Eligible Seniors**
   - Checked Extra Help eligibility
   - Application stage: eligibility_check or higher

4. **Specialty Drug Users**
   - Specialty drug inquiry
   - $1,000+ monthly medication cost

5. **High Medication Count**
   - 5+ medications checked
   - Multiple formulary lookups

### Language & Cultural Segments

6. **Bilingual Spanish Pharmacy Users**
   - Spanish pharmacist requested
   - Little Havana/Hialeah locations

7. **Haitian Creole Pharmacy Community**
   - Haitian Creole services
   - Little Haiti/North Miami

8. **Navarro/Sedano's Community**
   - Cuban-American community pharmacy
   - Cultural pharmacy connection

### Pharmacy Network Segments

9. **CVS Pharmacy Users**
   - CVS network engagement
   - CVS Caremark mail order

10. **Walgreens Pharmacy Users**
    - Walgreens engagement
    - 24-hour pharmacy interest

11. **Publix Pharmacy Users**
    - Publix pharmacy interest
    - Free antibiotics program

12. **Mail Order Prescription Users**
    - 90-day mail order interest
    - Chronic medication management

### Geographic Segments

13. **Hialeah Pharmacy Users**
    - North Miami-Dade region
    - High pharmacy density

14. **Miami Beach Pharmacy Users**
    - Beaches/coastal region
    - 24-hour pharmacy access

15. **Little Havana Pharmacy Users**
    - Spanish-language services
    - Community pharmacy preference

16. **Little Haiti Pharmacy Users**
    - Haitian Creole services
    - Community health focus

### Engagement Segments

17. **Deep Plan Comparison**
    - 3+ plans compared
    - 2+ minutes comparison time

18. **Formulary Power Users**
    - 3+ drug lookups
    - Multiple drug categories

19. **Donut Hole/Gap Concerned**
    - $3,500+ annual spending
    - Coverage gap education viewed

20. **MTM Program Candidates**
    - 8+ medications
    - 3+ chronic conditions
    - Medication therapy management interest

---

## Implementation Checklist

### Phase 1: Configuration (Completed)
- [x] Add analytics configuration to `landing-page-analytics-config.ts`
- [x] Create tracking module `/src/lib/analytics/miami-dade-part-d-tracking.ts`
- [x] Set conversion values (phone: $80, formulary: $60, plan comparison: $45, Extra Help: $75)

### Phase 2: Testing

- [ ] Test pharmacy network tracking (CVS, Walgreens, Publix, Navarro, Sedano's)
- [ ] Test formulary lookup events (diabetes, cardiac, specialty drugs)
- [ ] Test drug coverage verification (5+ medications)
- [ ] Test Part D plan comparison (3+ plans)
- [ ] Test Extra Help application funnel
- [ ] Test bilingual service requests (Spanish, Haitian Creole)
- [ ] Test chronic condition coverage (diabetes, heart disease)
- [ ] Test mail order pharmacy interest
- [ ] Test donut hole education engagement
- [ ] Test MTM program interest
- [ ] Verify all 19 event types in GA4 DebugView

### Phase 3: GA4 Configuration

- [ ] Create 10 event-scoped custom dimensions
- [ ] Create 4 user-scoped custom dimensions
- [ ] Build 20 audience segments
- [ ] Set up conversion events:
  - `landing_page_phone_call` ($80)
  - `formulary_lookup_start` ($60)
  - `plan_comparison_engagement` ($45)
  - `extra_help_application_interest` ($75)
  - `part_d_enrollment_start` ($75)

### Phase 4: Reporting

- [ ] Create "Part D Pharmacy Network Performance" report
- [ ] Create "Formulary Lookup Funnel" report
- [ ] Create "Extra Help Application Pipeline" report
- [ ] Create "Bilingual Services Engagement" report
- [ ] Create "Chronic Condition Coverage Interest" report
- [ ] Set up automated weekly reports for stakeholders

---

## Success Metrics

### Monthly Targets

| Metric | Target | Stretch Goal |
|--------|--------|--------------|
| Phone Calls | 45 | 60 |
| Formulary Lookups | 120 | 180 |
| Plan Comparisons (3+) | 85 | 120 |
| Extra Help Applications | 25 | 40 |
| Bilingual Service Requests | 50 | 75 |
| Chronic Condition Views | 150 | 200 |
| Pharmacy Network Engagement | 200 | 280 |

### Lead Quality Indicators

- **5+ Medication Checks:** 30% of drug coverage verifications
- **Specialty Drug Inquiries:** 15% of formulary lookups
- **Deep Plan Comparisons (3+ plans):** 40% of comparisons
- **Extra Help Application Starts:** 60% conversion from eligibility check
- **Spanish Language Services:** 35% of total engagement

### Conversion Rate Targets

- **Formulary Lookup → Phone Call:** 15%
- **Plan Comparison → Enrollment Start:** 25%
- **Extra Help Eligibility → Application:** 60%
- **Chronic Condition View → Phone Call:** 12%
- **Specialty Drug Inquiry → Phone Call:** 30%

---

## Key Insights to Monitor

1. **Pharmacy Chain Preference**: Which networks drive most engagement (CVS vs. Publix vs. Navarro)?
2. **Bilingual Service Demand**: Spanish vs. Haitian Creole pharmacy service requests
3. **Drug Category Focus**: Most searched medication categories (diabetes, cardiac, specialty)
4. **Extra Help Conversion**: Application funnel drop-off points
5. **Regional Pharmacy Access**: Which Miami-Dade zones have highest engagement?
6. **Cost Sensitivity**: Tier 5 specialty drug vs. Tier 1 generic interest
7. **Mail Order Adoption**: 90-day supply interest by chronic condition
8. **Community Pharmacy Loyalty**: Navarro/Sedano's vs. national chains

---

## Contact for Support

For questions about Miami-Dade Part D analytics implementation:
- **Analytics Configuration**: `/src/lib/landing-page-analytics-config.ts` (lines 342-390)
- **Tracking Module**: `/src/lib/analytics/miami-dade-part-d-tracking.ts`
- **Landing Page**: `/src/app/medicare-part-d-miami-dade-county/page.tsx`

---

**Last Updated:** 2025-10-02
**Market:** Miami-Dade County, Florida
**Focus:** Medicare Part D Prescription Drug Coverage
**Primary Markets:** Hialeah, Miami Beach, Little Havana, Coral Gables, Kendall
