import { MedicarePlan } from '@/types/medicare';

export interface LocationData {
  zipCode: string;
  city: string;
  state: string;
  county: string;
  population?: number;
}

export interface ContentTemplate {
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  introText: string;
  benefitsText: string;
  enrollmentText: string;
  localizedContent: string;
}

export function generatePageContent(
  keyword: string,
  location: LocationData,
  plans: MedicarePlan[]
): ContentTemplate {
  const { city, state, county } = location;
  const planCount = plans.length;
  const zeroPremiumPlans = plans.filter(p => p.premium === 0).length;
  const avgRating = plans.reduce((sum, plan) => sum + plan.rating, 0) / plans.length;
  
  // Generate dynamic title based on keyword and location
  const title = generateTitle(keyword, city, state);
  
  // Generate meta description
  const metaDescription = generateMetaDescription(keyword, city, state, planCount, zeroPremiumPlans);
  
  // Generate hero content
  const heroHeadline = generateHeroHeadline(keyword, city, state);
  const heroSubtitle = generateHeroSubtitle(planCount, zeroPremiumPlans, city);
  
  // Generate intro text
  const introText = generateIntroText(keyword, city, state, county, planCount);
  
  // Generate benefits text
  const benefitsText = generateBenefitsText(plans, city);
  
  // Generate enrollment text
  const enrollmentText = generateEnrollmentText(city, state);
  
  // Generate localized content
  const localizedContent = generateLocalizedContent(location, plans);
  
  return {
    title,
    metaDescription,
    heroHeadline,
    heroSubtitle,
    introText,
    benefitsText,
    enrollmentText,
    localizedContent,
  };
}

function generateTitle(keyword: string, city: string, state: string): string {
  const templates = [
    `${keyword} in ${city}, ${state} | Compare Plans & Save`,
    `Best ${keyword} in ${city}, ${state} | El-Mag Insurance`,
    `${keyword} ${city}, ${state} | Free Quotes & Expert Guidance`,
    `Compare ${keyword} in ${city}, ${state} | Licensed Agents`,
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateMetaDescription(keyword: string, city: string, state: string, planCount: number, zeroPremiumPlans: number): string {
  const templates = [
    `Compare ${planCount} ${keyword.toLowerCase()} in ${city}, ${state}. ${zeroPremiumPlans} plans with $0 premiums. Get free quotes from licensed agents.`,
    `Find the best ${keyword.toLowerCase()} in ${city}, ${state}. ${planCount} plans available with dental, vision & prescription coverage.`,
    `${city}, ${state} ${keyword.toLowerCase()} comparison. ${zeroPremiumPlans} $0 premium plans available. Free consultation with Medicare experts.`,
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateHeroHeadline(keyword: string, city: string, state: string): string {
  const templates = [
    `${keyword} in ${city}, ${state}`,
    `Find the Best ${keyword} in ${city}`,
    `${city} ${keyword} | Compare & Save`,
    `${keyword} Plans Available in ${city}, ${state}`,
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateHeroSubtitle(planCount: number, zeroPremiumPlans: number, city: string): string {
  const templates = [
    `Compare ${planCount} plans available in ${city}. ${zeroPremiumPlans} plans with $0 monthly premiums.`,
    `${planCount} Medicare Advantage plans to choose from. Find plans with dental, vision & fitness benefits.`,
    `Get personalized plan recommendations from licensed agents. ${zeroPremiumPlans} $0 premium options available.`,
  ];
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function generateIntroText(keyword: string, city: string, state: string, county: string, planCount: number): string {
  return `If you're looking for ${keyword.toLowerCase()} in ${city}, ${state}, you have ${planCount} excellent options to choose from in ${county}. Medicare Advantage plans offer comprehensive coverage that goes beyond Original Medicare, including prescription drug coverage and extra benefits like dental, vision, and hearing aids.

Our licensed agents specialize in helping ${city} residents find the perfect Medicare Advantage plan that fits their health needs and budget. Whether you're new to Medicare or looking to switch plans, we'll guide you through the process step by step.`;
}

function generateBenefitsText(plans: MedicarePlan[], city: string): string {
  const dentalPlans = plans.filter(p => p.dental).length;
  const visionPlans = plans.filter(p => p.vision).length;
  const hearingPlans = plans.filter(p => p.hearing).length;
  const fitnessPlans = plans.filter(p => p.fitness).length;
  
  return `Medicare Advantage plans in ${city} offer significant benefits beyond what Original Medicare provides:

• **Dental Coverage**: ${dentalPlans} plans include dental benefits for cleanings, fillings, and major dental work
• **Vision Benefits**: ${visionPlans} plans cover eye exams, glasses, and contact lenses
• **Hearing Aids**: ${hearingPlans} plans provide coverage for hearing exams and hearing aids
• **Fitness Programs**: ${fitnessPlans} plans include gym memberships and fitness programs like SilverSneakers
• **Prescription Drugs**: Most plans include Part D prescription drug coverage at no additional cost
• **Annual Out-of-Pocket Maximum**: Protection from high medical costs that Original Medicare doesn't provide`;
}

function generateEnrollmentText(city: string, state: string): string {
  return `Enrolling in a Medicare Advantage plan in ${city}, ${state} is easier than you think. Our licensed agents are familiar with all the plans available in your area and can help you:

• Compare plans side by side
• Check if your doctors are in network
• Verify your prescriptions are covered
• Calculate your total annual costs
• Complete your enrollment application
• Provide ongoing support after you enroll

We're available 7 days a week to answer your questions and help you find the right coverage.`;
}

function generateLocalizedContent(location: LocationData, plans: MedicarePlan[]): string {
  const { city, state, county, zipCode } = location;
  const topCarriers = [...new Set(plans.map(p => p.carrier))].slice(0, 3);
  
  return `## Medicare Advantage Plans Available in ${city}, ${state} (ZIP ${zipCode})

Residents of ${county} have access to Medicare Advantage plans from top-rated insurance carriers including ${topCarriers.join(', ')}, and others. These plans are specifically designed to meet the healthcare needs of ${city} residents.

### Why Choose Medicare Advantage in ${city}?

${city} residents who choose Medicare Advantage enjoy:
- Lower out-of-pocket costs compared to Original Medicare
- Coordinated care through established provider networks
- Additional benefits not available with Original Medicare
- Prescription drug coverage included in most plans
- Annual out-of-pocket maximums for financial protection

### Getting Started

To find the best Medicare Advantage plan for your needs in ${city}, start by entering your ZIP code above to see all available plans in your area. Our plan comparison tool will show you detailed information about premiums, deductibles, copays, and benefits for each plan.

Remember that plan availability and benefits can vary by ZIP code, so it's important to see exactly what's available in your specific location.`;
}

// Generate dynamic content for different keyword variations
export const keywordTemplates: Record<string, Partial<ContentTemplate>> = {
  'medicare advantage plans': {
    title: 'Medicare Advantage Plans {city}, {state} | Compare & Save',
    heroHeadline: 'Medicare Advantage Plans in {city}, {state}',
  },
  'medicare advantage enrollment': {
    title: 'Medicare Advantage Enrollment in {city}, {state} | Get Help',
    heroHeadline: 'Medicare Advantage Enrollment in {city}',
  },
  'medicare advantage vs original medicare': {
    title: 'Medicare Advantage vs Original Medicare | {city}, {state}',
    heroHeadline: 'Medicare Advantage vs Original Medicare in {city}',
  },
  'medicare advantage dental coverage': {
    title: 'Medicare Advantage Dental Coverage | {city}, {state}',
    heroHeadline: 'Medicare Advantage Plans with Dental in {city}',
  },
  'medicare advantage vision coverage': {
    title: 'Medicare Advantage Vision Coverage | {city}, {state}',
    heroHeadline: 'Medicare Advantage Plans with Vision in {city}',
  },
};