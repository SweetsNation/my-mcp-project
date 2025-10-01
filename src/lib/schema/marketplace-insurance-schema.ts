// Health Insurance Marketplace Schema Markup Utilities
// Generates structured data for ACA/Obamacare marketplace pages

interface MarketplacePageSchema {
  pagePath: string;
  pageTitle: string;
  pageDescription: string;
  pageType: 'main' | 'plans' | 'subsidies' | 'enrollment';
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generate comprehensive schema markup for Marketplace Insurance pages
 */
export function generateMarketplaceSchema(config: MarketplacePageSchema) {
  const baseUrl = 'https://elmaginsurance.com';
  const fullUrl = `${baseUrl}${config.pagePath}`;

  const schemaGraph: any[] = [
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': fullUrl,
      url: fullUrl,
      name: config.pageTitle,
      description: config.pageDescription,
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${baseUrl}/#website`
      },
      breadcrumb: {
        '@id': `${fullUrl}#breadcrumb`
      }
    },
    // BreadcrumbList Schema
    generateBreadcrumbs(config.pagePath, config.pageTitle, config.pageType),
    // Service Schema
    {
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: 'Health Insurance Marketplace Services',
      description: config.pageDescription,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl
      },
      serviceType: 'Health Insurance Marketplace (ACA)',
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Marketplace Health Insurance Plans',
        itemListElement: generateOfferCatalog(config.pageType)
      }
    }
  ];

  // Add FAQPage schema if FAQs provided
  if (config.faqs && config.faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': `${fullUrl}#faq`,
      mainEntity: config.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  };
}

/**
 * Generate breadcrumb navigation schema
 */
function generateBreadcrumbs(pagePath: string, pageTitle: string, pageType: string) {
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://elmaginsurance.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Health Insurance Marketplace',
      item: 'https://elmaginsurance.com/health-insurance-marketplace'
    }
  ];

  // Add specific page breadcrumb if not main page
  if (pageType !== 'main') {
    const displayName = pageTitle.split('|')[0].trim();
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: displayName,
      item: `https://elmaginsurance.com${pagePath}`
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `https://elmaginsurance.com${pagePath}#breadcrumb`,
    itemListElement: breadcrumbItems
  };
}

/**
 * Generate offer catalog based on page type
 */
function generateOfferCatalog(pageType: string) {
  const baseOffers = [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bronze Health Plans',
        description: 'Lowest premium marketplace plans with 60% actuarial value, ideal for healthy individuals'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Silver Health Plans',
        description: 'Mid-level marketplace plans with 70% actuarial value and Cost-Sharing Reduction eligibility'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Gold Health Plans',
        description: 'Comprehensive marketplace plans with 80% actuarial value and lower out-of-pocket costs'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Platinum Health Plans',
        description: 'Highest coverage marketplace plans with 90% actuarial value and minimal cost-sharing'
      }
    }
  ];

  if (pageType === 'subsidies') {
    return [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Tax Credits',
          description: 'Advance premium tax credits to reduce monthly health insurance premiums based on income'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cost-Sharing Reductions',
          description: 'Lower deductibles, copayments, and out-of-pocket maximums for Silver plan enrollees'
        }
      }
    ];
  }

  return baseOffers;
}

/**
 * Common Marketplace Insurance FAQs (reusable across pages)
 */
export const commonMarketplaceFAQs = [
  {
    question: 'What is the Health Insurance Marketplace?',
    answer: 'The Health Insurance Marketplace, also called the Exchange, is where you can compare and buy health insurance plans under the Affordable Care Act (ACA/Obamacare). Plans are offered in four metal tiers: Bronze, Silver, Gold, and Platinum. You may qualify for premium tax credits and cost-sharing reductions based on your income. Open Enrollment typically runs from November 1 to January 15 each year, though Special Enrollment Periods are available for qualifying life events.'
  },
  {
    question: 'How much does Marketplace health insurance cost?',
    answer: 'Marketplace health insurance costs vary based on your age, location, household size, income, and the metal tier you choose. Bronze plans have the lowest premiums but highest out-of-pocket costs, while Platinum plans have the highest premiums but lowest cost-sharing. Most enrollees qualify for premium tax credits that significantly reduce monthly costs. In 2024, the average premium after subsidies is around $150/month, though many pay less or even $0 depending on income level.'
  },
  {
    question: 'Do I qualify for Marketplace subsidies?',
    answer: 'You may qualify for Marketplace subsidies if your household income is between 100% and 400% of the Federal Poverty Level (roughly $15,000-$60,000 for individuals or $31,000-$120,000 for a family of four in 2024). Premium tax credits reduce your monthly premiums, while Cost-Sharing Reductions (available only with Silver plans) lower your deductibles and copayments. Most Marketplace enrollees qualify for some level of financial assistance. Use the Marketplace calculator to estimate your subsidy amount.'
  },
  {
    question: 'When can I enroll in Marketplace health insurance?',
    answer: 'You can enroll in Marketplace health insurance during the annual Open Enrollment Period (typically November 1 - January 15) or during a Special Enrollment Period if you experience a qualifying life event such as losing other coverage, getting married or divorced, having or adopting a baby, moving to a new coverage area, or experiencing changes in income that affect subsidy eligibility. Special Enrollment Periods typically last 60 days from the qualifying event.'
  }
];

/**
 * Enrollment-specific FAQs
 */
export const enrollmentFAQs = [
  {
    question: 'How do I enroll in a Marketplace health plan?',
    answer: 'To enroll in a Marketplace health plan: 1) Create an account at HealthCare.gov (or your state\'s marketplace), 2) Complete the application with household and income information, 3) Review your eligibility for subsidies, 4) Compare available plans by metal tier, network, and costs, 5) Select a plan and complete enrollment, 6) Pay your first premium to activate coverage. You can also enroll with help from a licensed insurance agent or broker at no additional cost. Most people can complete enrollment in 30-60 minutes.'
  },
  {
    question: 'What documents do I need to enroll?',
    answer: 'For Marketplace enrollment, you\'ll need: Social Security numbers for all household members, income documentation (pay stubs, W-2s, tax returns, or 1099s), current health insurance policy numbers (if applicable), employer coverage information (if offered), immigration documents (for non-citizens), and information about any job-based health insurance offers. Having these documents ready speeds up the enrollment process and ensures accurate subsidy calculations.'
  }
];

/**
 * Subsidy-specific FAQs
 */
export const subsidyFAQs = [
  {
    question: 'What are Premium Tax Credits?',
    answer: 'Premium Tax Credits are federal subsidies that reduce your monthly health insurance premiums. They\'re available to households with incomes between 100% and 400% of the Federal Poverty Level who don\'t have access to affordable employer-based coverage. You can receive credits in advance to lower your monthly payments (Advanced Premium Tax Credit) or claim them when filing taxes. The credit amount is based on the cost of the second-lowest-cost Silver plan in your area minus your expected contribution (2-8.5% of household income).'
  },
  {
    question: 'What are Cost-Sharing Reductions?',
    answer: 'Cost-Sharing Reductions (CSRs) are additional savings that lower your out-of-pocket costs like deductibles, copayments, and coinsurance. CSRs are only available with Silver plans and only if your household income is between 100% and 250% of the Federal Poverty Level. With CSRs, your Silver plan provides Gold or even Platinum-level coverage at Silver plan prices. For example, a Silver plan with CSRs might have a $500 deductible instead of $3,000, making it the most valuable option for lower-income households.'
  }
];

/**
 * Plans-specific FAQs
 */
export const plansFAQs = [
  {
    question: 'What is the difference between Bronze, Silver, Gold, and Platinum plans?',
    answer: 'Marketplace plans are categorized by metal tiers based on actuarial value (how much the plan pays vs. what you pay): Bronze plans (60% coverage) have the lowest premiums but highest out-of-pocket costs, ideal for healthy individuals. Silver plans (70% coverage) are mid-level and the only tier eligible for Cost-Sharing Reductions. Gold plans (80% coverage) have higher premiums but lower cost-sharing, good for frequent healthcare users. Platinum plans (90% coverage) have the highest premiums but lowest out-of-pocket costs. All tiers cover the same essential health benefits; the difference is how costs are split.'
  },
  {
    question: 'What are HMO, PPO, and EPO marketplace plans?',
    answer: 'Marketplace plans come in different network types: HMO (Health Maintenance Organization) plans require you to choose a primary care physician and get referrals to see specialists, but have lower premiums and only cover in-network care (except emergencies). PPO (Preferred Provider Organization) plans allow you to see any provider without referrals and provide partial coverage for out-of-network care, but have higher premiums. EPO (Exclusive Provider Organization) plans are a hybrid—no referrals needed but must use in-network providers (except emergencies). Choose based on your need for provider flexibility vs. cost savings.'
  }
];
