import { MetadataRoute } from 'next';

const baseUrl = 'https://elmaginsurance.com';
const today = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  // Core landing pages (highest priority)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/medicare-advantage`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/medicare-supplement-plan-g`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/health-insurance-marketplace`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.95,
    },
  ];

  // Main product/service pages
  const productPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/medicare`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/medicare-supplement`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/medicare-part-d`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/part-b-premium-give-back`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/social-security-analysis`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/supplemental-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/long-term-care-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/health-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/term-life-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/whole-life-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/final-expense`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/disability-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/short-term-health-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cobra-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cobra-alternatives`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/emergency-evacuation-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/trip-cancellation-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/annuities`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/retirement-planning`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Medicare Supplement Plan pages
  const medicareSupplementPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/medicare-supplement-plan-g/comparison`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-supplement-plan-g/quote`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-supplement-plan-n`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-supplement-plan-f`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
  ];

  // Health Insurance Marketplace pages
  const marketplacePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/health-insurance-marketplace/enrollment`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/health-insurance-marketplace/plans`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/health-insurance-marketplace/subsidies`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
  ];

  // Medicare Advantage regional pages
  const maRegionalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/medicare-advantage/mid-atlantic`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-advantage/southwest`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-advantage/west-coast`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
  ];

  // Medicare Advantage county pages (grouped by state)
  const maCountyPages: MetadataRoute.Sitemap = [
    // Virginia
    { url: `${baseUrl}/medicare-advantage/fairfax-county-virginia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/loudoun-county-virginia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/prince-william-county-virginia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // North Carolina
    { url: `${baseUrl}/medicare-advantage/wake-county-north-carolina`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/mecklenburg-county-north-carolina`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/guilford-county-north-carolina`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Tennessee
    { url: `${baseUrl}/medicare-advantage/davidson-county-tennessee`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/hamilton-county-tennessee`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/knox-county-tennessee`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Georgia
    { url: `${baseUrl}/medicare-advantage/fulton-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/dekalb-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/gwinnett-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/cobb-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Alabama
    { url: `${baseUrl}/medicare-advantage/jefferson-county-alabama`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/madison-county-alabama`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/mobile-county-alabama`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Florida
    { url: `${baseUrl}/medicare-advantage/miami-dade-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/broward-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/duval-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/orange-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/hernando-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/monroe-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Texas
    { url: `${baseUrl}/medicare-advantage/dallas-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/tarrant-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/bexar-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // California
    { url: `${baseUrl}/medicare-advantage/los-angeles-county-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/orange-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/san-diego-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/san-francisco-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/fresno-county-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/sacramento-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Hawaii
    { url: `${baseUrl}/medicare-advantage/honolulu-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/maui-county-hawaii`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/hawaii-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // New York
    { url: `${baseUrl}/medicare-advantage/new-york`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/monroe-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-advantage/plans`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Regional county landing pages (non-Medicare Advantage specific)
  const regionalCountyPages: MetadataRoute.Sitemap = [
    // Regional pages
    { url: `${baseUrl}/mid-atlantic`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/southwest`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/west-coast`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/regions/mid-atlantic`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/regions/southeast`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/regions/southwest`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/regions/west-coast`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    // County pages
    { url: `${baseUrl}/miami-dade-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/broward-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/orange-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/duval-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/hernando-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/lee-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/monroe-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/monroe-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/dallas-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/tarrant-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/bexar-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/gwinnett-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/cobb-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/los-angeles-county-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/los-angeles-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/orange-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/san-diego-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/san-francisco-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/fresno-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/sacramento-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/honolulu-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/maui-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/hawaii-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/kauai-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/new-york`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/westchester-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
  ];

  // Medicare Supplement regional/county pages
  const medicareSupplementRegionalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/medicare-supplement-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-new-york`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-hawaii`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-guide-hawaii`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-maui-county-hawaii`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-los-angeles-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-orange-county-california`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-nassau-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-dallas-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-harris-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-supplement-hispanic-latino-community`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
  ];

  // Health Insurance county pages
  const healthInsuranceCountyPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/health-insurance-miami-dade-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/health-insurance-harris-county-texas`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/health-insurance-fulton-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/health-insurance-clark-county-nevada`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/health-insurance-oklahoma-county-oklahoma`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
  ];

  // Specialized Medicare Advantage landing pages
  const specializedMAPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/medicare-advantage-broward-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-cobb-county-georgia`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-fresno-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-lee-county-florida`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-maui-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/zero-premium-medicare-advantage-kauai-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/zero-premium-medicare-advantage-jefferson-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/zero-premium-medicare-advantage-plans-jefferson-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/zero-premium-medicare-advantage-westchester-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/2025-medicare-advantage-changes-fairfax`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-diverse-communities-atlanta`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-enrollment-guide-research-triangle`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/medicare-advantage-transportation-benefits-nashville`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/hidden-medicare-advantage-benefits-northern-virginia`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/d-snp-plans-davidson-county-dual-eligible-benefits`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
  ];

  // Hospital comparison landing pages
  const hospitalComparisonPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/uab-vs-st-vincents-medicare-advantage-birmingham`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/vanderbilt-vs-hca-medicare-advantage-nashville`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/emory-vs-piedmont-medicare-advantage-atlanta`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/inova-vs-kaiser-medicare-advantage-fairfax`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/duke-vs-unc-rex-medicare-advantage-wake-county`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/community-health-centers-medicare-advantage-birmingham`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/grady-health-system-medicare-advantage-atlanta`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/raleigh-tech-innovation-medicare-advantage`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Tools and calculators
  const toolPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/tools`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-cost-calculator`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/health-insurance-cost-calculator`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/cost-calculator`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-comparison-tool`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-plan-comparison-tool`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/medicare-plan-finder`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/benefits-analysis`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/coverage`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/eligibility`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/how-will-medicare-benefit-you`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-extra-help-qualification-quiz`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/ai-medicare-assistant`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/ask-ai-medicare-questions`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Medicare Part D pages
  const medicarePartDPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/medicare-part-d/costs`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-part-d/costs/comparison`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-part-d-formulary-lookup`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-extra-help`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-lis-program`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Medicare enrollment & timeline pages
  const enrollmentPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/enrollment-timeline`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-enrollment-timeline`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-open-enrollment-2025`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-open-enrollment-checklist`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-deadline-december-7`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-2025-changes`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/medicare-disability-insurance`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
  ];

  // Team pages
  const teamPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/team`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/specialists`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/team/elsa-galicia-lona`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team/magdalena-salinas`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team/eric-salinas`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team/junior-goulbourne`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team/yaissa-acosta`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team/marcia-cordero`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/resources`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/resources/medicare-advantage-vs-original`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/dental-vision-benefits`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/understanding-costs`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/prescription-drug-coverage`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/enrollment-periods-explained`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources/star-ratings-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/blog/miami-dade-health-insurance-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/health-insurance-harris-county-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Informational pages
  const infoPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/accessibility`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [
    ...corePages,
    ...productPages,
    ...medicareSupplementPages,
    ...marketplacePages,
    ...maRegionalPages,
    ...maCountyPages,
    ...regionalCountyPages,
    ...medicareSupplementRegionalPages,
    ...healthInsuranceCountyPages,
    ...specializedMAPages,
    ...hospitalComparisonPages,
    ...toolPages,
    ...medicarePartDPages,
    ...enrollmentPages,
    ...teamPages,
    ...resourcePages,
    ...blogPages,
    ...infoPages,
  ];
}
