// Schema markup generator for County Medicare pages (Supplement, Part D, Medicare Advantage, Marketplace)

export interface CountyMedicareSchemaConfig {
  pagePath: string
  pageTitle: string
  pageDescription: string
  county: string
  state: string
  productType: 'medicare-supplement' | 'medicare-part-d' | 'medicare-advantage' | 'health-insurance-marketplace'
  totalBeneficiaries?: number
  averagePremium?: number
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateCountyMedicareSchema(config: CountyMedicareSchemaConfig) {
  const baseUrl = 'https://elmaginsurance.com'
  const fullUrl = `${baseUrl}${config.pagePath}`

  // Determine product name based on type
  const productNames = {
    'medicare-supplement': 'Medicare Supplement Insurance (Medigap)',
    'medicare-part-d': 'Medicare Part D Prescription Drug Coverage',
    'medicare-advantage': 'Medicare Advantage Plans (Part C)',
    'health-insurance-marketplace': 'Health Insurance Marketplace Plans (ACA)'
  }

  const productName = productNames[config.productType]

  const schemaGraph: any[] = [
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': fullUrl,
      url: fullUrl,
      name: config.pageTitle,
      description: config.pageDescription,
      inLanguage: 'en-US',
      breadcrumb: {
        '@id': `${fullUrl}#breadcrumb`
      },
      about: {
        '@type': 'FinancialProduct',
        name: productName,
        category: 'Health Insurance',
        provider: {
          '@type': 'Organization',
          name: 'El-Mag Insurance',
          url: baseUrl
        }
      },
      geo: {
        '@type': 'AdministrativeArea',
        name: `${config.county}, ${config.state}`,
        containedInPlace: {
          '@type': 'State',
          name: config.state
        }
      }
    },

    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      '@id': `${fullUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: config.productType === 'medicare-supplement' ? 'Medicare Supplement' :
                config.productType === 'medicare-part-d' ? 'Medicare Part D' :
                config.productType === 'medicare-advantage' ? 'Medicare Advantage' :
                'Health Insurance Marketplace',
          item: `${baseUrl}/${config.productType === 'medicare-supplement' ? 'medicare-supplement' :
                                  config.productType === 'medicare-part-d' ? 'medicare-part-d' :
                                  config.productType === 'medicare-advantage' ? 'medicare-advantage/plans' :
                                  'health-insurance-marketplace/plans'}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${config.county}`,
          item: fullUrl
        }
      ]
    },

    // FinancialProduct Schema
    {
      '@type': 'FinancialProduct',
      '@id': `${fullUrl}#product`,
      name: productName,
      description: config.pageDescription,
      category: 'Health Insurance',
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl,
        address: {
          '@type': 'PostalAddress',
          addressLocality: config.county,
          addressRegion: config.state,
          addressCountry: 'US'
        }
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${config.county}, ${config.state}`
      },
      ...(config.averagePremium && {
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: config.productType === 'health-insurance-marketplace' ? 0 :
                    config.productType === 'medicare-advantage' ? 0 :
                    Math.round(config.averagePremium * 0.7),
          highPrice: config.productType === 'medicare-supplement' ? Math.round(config.averagePremium * 1.5) :
                     config.productType === 'medicare-part-d' ? Math.round(config.averagePremium * 2) :
                     config.averagePremium * 2,
          pricingExplanation: config.productType === 'medicare-supplement' ? 'Premiums vary by age, gender, and plan type' :
                             config.productType === 'medicare-part-d' ? 'Premiums vary by plan and formulary coverage' :
                             config.productType === 'medicare-advantage' ? 'Many $0 premium plans available' :
                             'Many plans available with $0 premiums after subsidies'
        }
      })
    },

    // Service Schema
    {
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: `${productName} - ${config.county}`,
      serviceType: productName,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${config.county}, ${config.state}`
      },
      audience: {
        '@type': 'Audience',
        audienceType: config.productType.includes('medicare') ? 'Medicare beneficiaries' : 'Individuals seeking health insurance',
        geographicArea: {
          '@type': 'AdministrativeArea',
          name: `${config.county}, ${config.state}`
        }
      }
    }
  ]

  // Add LocalBusiness Schema for county-specific services
  schemaGraph.push({
    '@type': 'LocalBusiness',
    '@id': `${fullUrl}#localbusiness`,
    name: `El-Mag Insurance - ${config.county}`,
    description: `${productName} services for ${config.county}, ${config.state}`,
    url: fullUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: config.county,
      addressRegion: config.state,
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${config.county}, ${config.state}`
    },
    knowsAbout: [
      productName,
      `${config.county} healthcare`,
      'Medicare enrollment',
      'Health insurance guidance'
    ]
  })

  // Add FAQPage Schema if FAQs provided
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
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemaGraph
  }
}

// Pre-defined FAQs for different product types
export const getMedicareSupplementFAQs = (county: string, state: string, avgPremium: number) => [
  {
    question: `What are the best Medicare Supplement plans in ${county}, ${state}?`,
    answer: `The best Medicare Supplement (Medigap) plans in ${county} are Plan G and Plan N. Plan G offers comprehensive coverage with predictable out-of-pocket costs averaging $${avgPremium}/month. Plan N provides similar benefits at lower premiums but requires small copays for doctor visits. Both plans are guaranteed renewable and provide nationwide coverage.`
  },
  {
    question: `How much does Medicare Supplement cost in ${county}?`,
    answer: `Medicare Supplement premiums in ${county}, ${state} average $${avgPremium}/month for Plan G. Costs vary by age, gender, tobacco use, and insurance carrier. High-Deductible Plan G starts around $${Math.round(avgPremium * 0.3)}/month with a $2,800 annual deductible. Plan N averages $${Math.round(avgPremium * 0.85)}/month with small copays.`
  },
  {
    question: `When can I enroll in Medicare Supplement in ${county}?`,
    answer: `You can enroll in Medicare Supplement in ${county} anytime, but the best time is during your 6-month Medigap Open Enrollment Period starting when you turn 65 and enroll in Medicare Part B. During this period, you cannot be denied coverage or charged higher premiums due to pre-existing conditions. You can also enroll year-round, but may face medical underwriting outside this window.`
  },
  {
    question: `What's the difference between Medicare Advantage and Medicare Supplement in ${county}?`,
    answer: `In ${county}, Medicare Supplement (Medigap) works with Original Medicare to cover gaps like copays and deductibles, offers nationwide coverage, and requires a separate Part D plan. Medicare Advantage replaces Original Medicare, typically includes Part D, may have network restrictions, but often includes extra benefits like dental and vision. Medigap provides more flexibility; Medicare Advantage may have lower premiums.`
  },
  {
    question: `Do I need Medicare Part D if I have Medicare Supplement in ${county}?`,
    answer: `Yes, Medicare Supplement plans in ${county} do not include prescription drug coverage. You need to enroll in a standalone Medicare Part D plan for prescription coverage. Failing to enroll when first eligible can result in lifetime late enrollment penalties. Compare Part D plans based on your specific medications and preferred pharmacies in ${county}.`
  }
]

export const getMedicarePartDFAQs = (county: string, state: string, pharmacyCount: number) => [
  {
    question: `How do I choose a Medicare Part D plan in ${county}, ${state}?`,
    answer: `To choose the best Medicare Part D plan in ${county}, use the Medicare Plan Finder at medicare.gov and enter your current prescriptions. Compare plans based on: (1) Total annual cost including premiums, deductibles, and drug copays, (2) Formulary coverage for your medications, (3) Preferred pharmacy network (${county} has ${pharmacyCount}+ pharmacies), (4) Coverage gap protection, and (5) Star ratings for quality.`
  },
  {
    question: `What pharmacies accept Medicare Part D in ${county}?`,
    answer: `Medicare Part D plans in ${county}, ${state} are accepted at ${pharmacyCount}+ pharmacies including CVS, Walgreens, Publix, Walmart, Winn-Dixie, and local independent pharmacies. Most plans offer preferred pharmacy pricing at select locations with lower copays. Mail-order pharmacies provide 90-day supplies at reduced costs. Always verify your specific plan's pharmacy network.`
  },
  {
    question: `What is the Medicare Part D coverage gap (donut hole) in ${county}?`,
    answer: `The Medicare Part D coverage gap in ${county} begins after you and your plan spend $5,030 on covered drugs (2025). In the gap, you pay 25% for brand-name and generic drugs until reaching $8,000 out-of-pocket, when catastrophic coverage begins. Many Part D plans in ${county} offer gap coverage to reduce costs during this phase.`
  },
  {
    question: `Can I switch Medicare Part D plans in ${county}?`,
    answer: `Yes, you can switch Medicare Part D plans in ${county} during the Annual Enrollment Period (October 15 - December 7) with coverage starting January 1. You can also switch during the Medicare Advantage Open Enrollment Period (January 1 - March 31) if moving from Medicare Advantage to Original Medicare plus Part D. Special Enrollment Periods apply for certain life events.`
  },
  {
    question: `What is Extra Help for Medicare Part D in ${county}?`,
    answer: `Extra Help (Low-Income Subsidy) in ${county}, ${state} assists with Medicare Part D costs for beneficiaries with limited income and resources. Benefits include: $0 or low monthly premiums, no coverage gap, $0-$4.50 drug copays, and no late enrollment penalty. Income limits: $23,120/year (individual) or $31,320/year (married). Apply through Social Security or your state Medicaid office.`
  }
]

export const getMedicareAdvantageFAQs = (county: string, state: string, planCount: number, zeroPremiumCount: number) => [
  {
    question: `How many Medicare Advantage plans are available in ${county}, ${state}?`,
    answer: `${county}, ${state} offers ${planCount}+ Medicare Advantage plans for 2025, including ${zeroPremiumCount}+ plans with $0 monthly premiums. Plans include HMO, PPO, and HMO-POS options from carriers like Humana, UnitedHealthcare, Aetna, and others. Most plans include Part D prescription coverage and extra benefits like dental, vision, and hearing.`
  },
  {
    question: `What are the best Medicare Advantage plans in ${county}?`,
    answer: `The best Medicare Advantage plans in ${county} are those with 4.5-5 star ratings offering comprehensive benefits. Top-rated plans typically include: $0 premiums, low maximum out-of-pocket limits ($3,000-$5,000), broad hospital and doctor networks, Part D prescription coverage, dental/vision/hearing benefits, fitness programs (SilverSneakers), and OTC allowances. Compare plans based on your specific healthcare needs and preferred providers.`
  },
  {
    question: `Can I keep my doctor with Medicare Advantage in ${county}?`,
    answer: `Whether you can keep your doctor with Medicare Advantage in ${county} depends on the plan's network. HMO plans require your doctor to be in-network. PPO plans allow out-of-network care at higher costs. Before enrolling, verify your doctors, specialists, and preferred hospitals accept the specific Medicare Advantage plan. Provider networks can change annually, so review during each Annual Enrollment Period.`
  },
  {
    question: `What's the difference between Medicare Advantage HMO and PPO in ${county}?`,
    answer: `In ${county}, Medicare Advantage HMO plans require you to use in-network providers and get referrals from your primary care physician, but typically have $0 premiums and lower copays. PPO plans offer flexibility to see any doctor without referrals, including out-of-network providers at higher costs, but may have monthly premiums. Choose HMO for lower costs and local care; choose PPO for flexibility and out-of-state coverage.`
  },
  {
    question: `When can I enroll in Medicare Advantage in ${county}?`,
    answer: `You can enroll in Medicare Advantage in ${county} during: (1) Annual Enrollment Period (October 15 - December 7) for coverage starting January 1, (2) Initial Enrollment Period when first eligible for Medicare, (3) Medicare Advantage Open Enrollment Period (January 1 - March 31) to switch plans, and (4) Special Enrollment Periods for qualifying life events like moving to ${county}, losing other coverage, or qualifying for Extra Help.`
  }
]

export const getMarketplaceFAQs = (county: string, state: string, subsidyPercentage: number, avgSubsidy: number) => [
  {
    question: `How much does Health Insurance Marketplace cost in ${county}, ${state}?`,
    answer: `Health Insurance Marketplace costs in ${county} vary based on income and household size. ${subsidyPercentage}% of ${county} residents qualify for premium subsidies. Average subsidies are $${avgSubsidy}/month, with many qualifying for $0 premium plans. Without subsidies, Bronze plans start around $300/month, Silver plans $400-$500/month, and Gold plans $500-$700/month for individuals.`
  },
  {
    question: `Who qualifies for $0 premium Marketplace plans in ${county}?`,
    answer: `In ${county}, ${state}, individuals earning under $43,000/year or families of 4 earning under $88,000/year often qualify for $0 premium Marketplace plans. Enhanced subsidies make Silver plans free or very low-cost for those earning 100-150% of federal poverty level. Use the subsidy calculator at healthcare.gov to check eligibility based on your income and household size.`
  },
  {
    question: `When is Open Enrollment for Health Insurance Marketplace in ${county}?`,
    answer: `Open Enrollment for Health Insurance Marketplace in ${county}, ${state} runs November 1, 2025 - January 15, 2026, with coverage starting January 1, 2026. Enroll by December 15 for January 1 coverage. Outside Open Enrollment, you can enroll during a Special Enrollment Period if you experience qualifying life events like job loss, marriage, birth of a child, or moving to ${county}.`
  },
  {
    question: `What's the difference between Bronze, Silver, and Gold Marketplace plans in ${county}?`,
    answer: `In ${county}, Bronze plans have the lowest premiums but highest deductibles ($8,500+), covering 60% of costs. Silver plans balance premiums and out-of-pocket costs ($6,000 deductible), cover 70% of costs, and qualify for cost-sharing reductions with subsidies. Gold plans have higher premiums but lower deductibles ($2,500), covering 80% of costs. Choose based on expected healthcare usage and subsidy eligibility.`
  },
  {
    question: `Do Marketplace plans in ${county} cover pre-existing conditions?`,
    answer: `Yes, all Health Insurance Marketplace plans in ${county}, ${state} must cover pre-existing conditions with no exclusions, waiting periods, or higher premiums based on health status. This includes chronic conditions like diabetes, heart disease, cancer, and mental health conditions. Coverage begins on your plan's effective date. You cannot be denied coverage based on health history during Open Enrollment or Special Enrollment Periods.`
  }
]
