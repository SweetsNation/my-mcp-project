// Medicare Part D Schema Markup Utilities
// Generates structured data for prescription drug coverage pages

interface MedicarePartDPageSchema {
  pagePath: string;
  pageTitle: string;
  pageDescription: string;
  pageType: 'main' | 'formulary' | 'costs' | 'resource';
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generate comprehensive schema markup for Medicare Part D pages
 */
export function generateMedicarePartDSchema(config: MedicarePartDPageSchema) {
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
    generateBreadcrumbs(config.pagePath, config.pageTitle),
    // Service Schema
    {
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: 'Medicare Part D Prescription Drug Coverage',
      description: config.pageDescription,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl
      },
      serviceType: 'Medicare Part D Insurance',
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medicare Part D Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Stand-Alone Part D Plans',
              description: 'Prescription drug coverage that works with Original Medicare or Medicare Supplement plans'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Extra Help / Low-Income Subsidy',
              description: 'Financial assistance for Medicare Part D premiums and costs for qualifying beneficiaries'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Formulary Lookup Services',
              description: 'Check if your medications are covered by specific Part D plans'
            }
          }
        ]
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
function generateBreadcrumbs(pagePath: string, pageTitle: string) {
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://elmaginsurance.com'
    }
  ];

  // Determine parent pages based on path
  if (pagePath.includes('/medicare-part-d')) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Medicare Part D',
      item: 'https://elmaginsurance.com/medicare-part-d'
    });
  }

  // Add final breadcrumb for current page
  const pathSegments = pagePath.split('/').filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const displayName = pageTitle.split('|')[0].trim();

  breadcrumbItems.push({
    '@type': 'ListItem',
    position: breadcrumbItems.length + 1,
    name: displayName,
    item: `https://elmaginsurance.com${pagePath}`
  });

  return {
    '@type': 'BreadcrumbList',
    '@id': `https://elmaginsurance.com${pagePath}#breadcrumb`,
    itemListElement: breadcrumbItems
  };
}

/**
 * Common Medicare Part D FAQs (reusable across pages)
 */
export const commonPartDFAQs = [
  {
    question: 'What is Medicare Part D?',
    answer: 'Medicare Part D is prescription drug coverage that helps pay for outpatient prescription drugs. Part D is offered through private insurance companies approved by Medicare. You can get Part D coverage through a stand-alone Prescription Drug Plan (PDP) if you have Original Medicare, or through a Medicare Advantage Plan (Part C) that includes drug coverage.'
  },
  {
    question: 'When can I enroll in Medicare Part D?',
    answer: 'You can enroll in Medicare Part D during several periods: Initial Enrollment Period (when you first become eligible for Medicare), Annual Enrollment Period (October 15 - December 7 each year), and Special Enrollment Periods (triggered by qualifying events like moving or losing creditable coverage). It\'s important to enroll when first eligible to avoid late enrollment penalties.'
  },
  {
    question: 'How much does Medicare Part D cost?',
    answer: 'Medicare Part D costs vary by plan and include: monthly premiums (ranging from $0 to $100+ depending on the plan and your income), an annual deductible (up to $545 in 2024), copayments or coinsurance for each prescription, and potentially an Income-Related Monthly Adjustment Amount (IRMAA) if your income exceeds certain thresholds. Many beneficiaries qualify for Extra Help/Low-Income Subsidy to reduce these costs.'
  },
  {
    question: 'What is a formulary in Medicare Part D?',
    answer: 'A formulary is the list of prescription drugs covered by a Part D plan. Each plan has its own formulary organized into tiers, with different cost-sharing amounts for each tier. Tier 1 typically includes low-cost generic drugs, while higher tiers include brand-name and specialty medications. It\'s important to check if your medications are on a plan\'s formulary before enrolling.'
  },
  {
    question: 'What is the Medicare Part D coverage gap (donut hole)?',
    answer: 'The coverage gap, or "donut hole," is a temporary limit on what Medicare Part D plans cover for prescription drugs. In 2024, you enter the coverage gap after your total drug costs reach $5,030. In the gap, you pay 25% of the cost for brand-name and generic drugs. Once your out-of-pocket costs reach $8,000, you exit the gap and enter catastrophic coverage, where you pay minimal amounts for the rest of the year.'
  },
  {
    question: 'Can I change my Medicare Part D plan?',
    answer: 'Yes, you can change your Part D plan during the Annual Enrollment Period (October 15 - December 7) each year, with coverage starting January 1. If you have a Medicare Advantage plan with drug coverage, you can also switch during the Medicare Advantage Open Enrollment Period (January 1 - March 31). Additionally, certain qualifying life events trigger Special Enrollment Periods that allow you to change plans mid-year.'
  }
];

/**
 * Generate schema for formulary lookup page
 */
export function generateFormularySchema(
  pagePath: string,
  pageTitle: string,
  pageDescription: string
) {
  return generateMedicarePartDSchema({
    pagePath,
    pageTitle,
    pageDescription,
    pageType: 'formulary',
    faqs: [
      {
        question: 'How do I check if my drug is covered?',
        answer: 'You can check if your medication is covered by using our Medicare Part D formulary lookup tool. Simply enter your drug name and dosage to see which plans cover it and at what cost tier. Each Part D plan maintains its own formulary (list of covered drugs), so coverage can vary significantly between plans.'
      },
      {
        question: 'What are formulary tiers?',
        answer: 'Formulary tiers are categories that determine your out-of-pocket costs for medications. Most plans use 5-6 tiers: Tier 1 (preferred generic drugs, lowest cost), Tier 2 (generic drugs), Tier 3 (preferred brand drugs), Tier 4 (non-preferred brand drugs), Tier 5 (specialty drugs, highest cost), and sometimes Tier 6 (select care drugs). Lower tiers generally have lower copayments or coinsurance.'
      },
      {
        question: 'What if my medication is not on the formulary?',
        answer: 'If your medication is not on your plan\'s formulary, you have several options: 1) Ask your doctor about covered alternatives, 2) Request a formulary exception from your plan (requires medical justification from your doctor), 3) Pay full price out-of-pocket, or 4) Switch to a different Part D plan during the next enrollment period that covers your medication. Formulary exceptions and appeals are available if your doctor determines the drug is medically necessary.'
      }
    ]
  });
}
