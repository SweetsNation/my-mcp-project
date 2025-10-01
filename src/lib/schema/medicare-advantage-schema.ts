// Medicare Advantage Schema Markup Utilities
// Generates structured data for SEO optimization

interface MedicareAdvantagePageSchema {
  pagePath: string;
  pageTitle: string;
  pageDescription: string;
  areaServed: {
    type: 'State' | 'County' | 'City' | 'Country' | 'Region';
    name: string;
    containsPlace?: Array<{ type: string; name: string }>;
  };
  plans?: Array<{
    name: string;
    description: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generate comprehensive schema markup for Medicare Advantage pages
 */
export function generateMedicareAdvantageSchema(config: MedicareAdvantagePageSchema) {
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
    generateBreadcrumbs(config.pagePath, config.areaServed.name),
    // Service Schema
    {
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: `${config.areaServed.name} Medicare Advantage Plans`,
      description: config.pageDescription,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl
      },
      serviceType: 'Medicare Advantage Insurance',
      areaServed: {
        '@type': config.areaServed.type,
        name: config.areaServed.name,
        ...(config.areaServed.containsPlace && {
          containsPlace: config.areaServed.containsPlace
        })
      },
      ...(config.plans && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${config.areaServed.name} Medicare Advantage Plans`,
          itemListElement: config.plans.map(plan => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: plan.name,
              description: plan.description
            }
          }))
        }
      })
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
function generateBreadcrumbs(pagePath: string, areaName: string) {
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
      name: 'Medicare Advantage',
      item: 'https://elmaginsurance.com/medicare-advantage'
    }
  ];

  // Add final breadcrumb for current page
  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: areaName,
    item: `https://elmaginsurance.com${pagePath}`
  });

  return {
    '@type': 'BreadcrumbList',
    '@id': `https://elmaginsurance.com${pagePath}#breadcrumb`,
    itemListElement: breadcrumbItems
  };
}

/**
 * Generate schema for county-level Medicare Advantage pages
 */
export function generateCountyMASchema(
  county: string,
  state: string,
  countyPath: string,
  description: string,
  cities?: string[],
  plans?: Array<{ name: string; description: string }>,
  faqs?: Array<{ question: string; answer: string }>
) {
  return generateMedicareAdvantageSchema({
    pagePath: countyPath,
    pageTitle: `${county} Medicare Advantage Plans | ${state} MA`,
    pageDescription: description,
    areaServed: {
      type: 'County',
      name: `${county}, ${state}`,
      ...(cities && {
        containsPlace: cities.map(city => ({
          type: 'City',
          name: city
        }))
      })
    },
    plans,
    faqs
  });
}

/**
 * Common Medicare Advantage FAQs (reusable across pages)
 */
export const commonMAFAQs = [
  {
    question: 'What is Medicare Advantage?',
    answer: 'Medicare Advantage (Part C) is a type of Medicare health plan offered by private insurance companies that contract with Medicare. These plans provide all Part A (hospital) and Part B (medical) benefits, and often include Part D (prescription drug) coverage, plus additional benefits like dental, vision, and hearing that Original Medicare doesn\'t cover.'
  },
  {
    question: 'When can I enroll in Medicare Advantage?',
    answer: 'You can enroll in Medicare Advantage during several periods: Initial Enrollment Period (when you first become eligible for Medicare), Annual Enrollment Period (October 15 - December 7 each year), Medicare Advantage Open Enrollment Period (January 1 - March 31 for current MA members), and Special Enrollment Periods (triggered by qualifying life events like moving or losing coverage).'
  },
  {
    question: 'How much does Medicare Advantage cost?',
    answer: 'Medicare Advantage plan costs vary widely. Many plans have $0 monthly premiums (though you still pay your Part B premium to Medicare). You\'ll also pay copayments for services, and plans have annual out-of-pocket maximums (ranging from $3,000-$8,000+). Total costs depend on the plan type (HMO, PPO, etc.), your location, and your healthcare usage.'
  },
  {
    question: 'What is the difference between Medicare Advantage HMO and PPO?',
    answer: 'HMO (Health Maintenance Organization) plans typically require you to use network providers and get referrals to see specialists, but often have lower premiums. PPO (Preferred Provider Organization) plans offer more flexibility to see out-of-network providers without referrals, but usually have higher premiums and costs. HMOs are best for those who want lower costs and don\'t mind network restrictions, while PPOs suit those who want more provider choice.'
  }
];
