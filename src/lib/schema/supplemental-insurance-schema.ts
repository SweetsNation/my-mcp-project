// Schema markup generator for Supplemental Insurance pages

export interface SupplementalInsurancePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  pageType?: 'main' | 'hospital-indemnity' | 'critical-illness' | 'accident' | 'cancer' | 'dental-vision'
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateSupplementalInsuranceSchema(config: SupplementalInsurancePageSchema) {
  const baseUrl = 'https://elmaginsurance.com'
  const fullUrl = `${baseUrl}${config.pagePath}`

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
      }
    },

    // BreadcrumbList Schema
    ...generateBreadcrumbs(config.pagePath, config.pageTitle),

    // Service Schema
    {
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: config.pageTitle,
      description: config.pageDescription,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
        url: baseUrl
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      hasOfferCatalog: generateOfferCatalog(config.pageType || 'main')
    }
  ]

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

function generateBreadcrumbs(pagePath: string, pageTitle: string) {
  const breadcrumbs = [
    { position: 1, name: 'Home', item: 'https://elmaginsurance.com' },
    { position: 2, name: 'Supplemental Insurance', item: `https://elmaginsurance.com${pagePath}` }
  ]

  return [
    {
      '@type': 'BreadcrumbList',
      '@id': `https://elmaginsurance.com${pagePath}#breadcrumb`,
      itemListElement: breadcrumbs.map(crumb => ({
        '@type': 'ListItem',
        position: crumb.position,
        name: crumb.name,
        item: crumb.item
      }))
    }
  ]
}

function generateOfferCatalog(pageType: string) {
  const offers = []

  if (pageType === 'main') {
    offers.push(
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hospital Indemnity Insurance',
          description: 'Daily cash benefits for hospital stays and ICU coverage'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Critical Illness Insurance',
          description: 'Lump-sum benefits for cancer, heart attack, stroke, and other serious conditions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Accident Insurance',
          description: 'Coverage for accidental injuries, emergency room visits, and ambulance services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cancer Insurance',
          description: 'Specialized coverage for cancer diagnosis, treatment, and recovery expenses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dental and Vision Insurance',
          description: 'Coverage for routine dental cleanings, exams, eye care, and glasses'
        }
      }
    )
  }

  return {
    '@type': 'OfferCatalog',
    name: 'Supplemental Insurance Plans',
    itemListElement: offers
  }
}

// Common FAQ libraries for supplemental insurance
export const commonSupplementalFAQs = [
  {
    question: 'What is supplemental health insurance?',
    answer: 'Supplemental health insurance provides additional coverage beyond your primary health insurance plan. It helps cover costs that your main insurance doesn\'t pay, such as deductibles, copayments, coinsurance, and specific medical events like hospital stays or critical illness diagnoses. Supplemental insurance pays benefits directly to you (not to providers), giving you cash to use for medical bills, living expenses, or any other needs during a health crisis. Common types include hospital indemnity, critical illness, accident insurance, cancer coverage, and dental/vision plans.'
  },
  {
    question: 'How does hospital indemnity insurance work?',
    answer: 'Hospital indemnity insurance pays you a fixed daily cash benefit for each day you\'re hospitalized, typically ranging from $100 to $500 per day. If you\'re admitted to the ICU, you may receive an additional $50 to $250 per day. These benefits are paid directly to you regardless of your actual medical expenses, and you can use the money for any purpose - hospital bills, medications, lost wages, childcare, or household expenses. Most plans cover up to 365 days per hospital stay and have separate benefits for hospital admission, surgical procedures, and ambulance services. The insurance works alongside your primary health insurance to help cover out-of-pocket costs.'
  },
  {
    question: 'What does critical illness insurance cover?',
    answer: 'Critical illness insurance provides a lump-sum cash benefit when you\'re diagnosed with a covered serious medical condition. Covered conditions typically include cancer (excluding certain skin cancers), heart attack, stroke, kidney failure, major organ transplant, coronary artery bypass surgery, paralysis, and blindness. Benefit amounts range from $5,000 to $100,000 for individuals and up to $200,000 for family coverage. You receive the entire benefit amount upon diagnosis, and you can use the money however you need - to pay for experimental treatments, travel for specialized care, home modifications, mortgage payments, or any other expenses during your recovery. Children covered under family plans typically receive 25% of the adult benefit amount.'
  },
  {
    question: 'Is supplemental insurance worth it for people with high deductible health plans?',
    answer: 'Supplemental insurance is especially valuable for people with high deductible health plans (HDHPs). HDHPs have deductibles of $1,600 or more for individuals and $3,200 or more for families, meaning you pay thousands out-of-pocket before insurance coverage begins. Supplemental insurance fills this gap by providing cash benefits to help cover your deductible, copays, and other expenses. For example, if you have a $5,000 deductible and are hospitalized for 5 days, hospital indemnity insurance paying $200/day would provide $1,000 cash. Combined with critical illness or accident insurance, supplemental coverage can significantly reduce your financial risk and make HDHP plans more affordable and practical for families.'
  },
  {
    question: 'Can I have supplemental insurance with Medicare?',
    answer: 'Yes, you can have supplemental insurance with Medicare, and many seniors benefit from this combination. While Medicare Supplement (Medigap) plans help cover Medicare\'s deductibles and coinsurance, other supplemental insurance like hospital indemnity, critical illness, and cancer insurance provide additional cash benefits that work alongside Medicare. These plans pay you directly and can help cover costs Medicare doesn\'t pay, such as transportation to medical appointments, home healthcare, medical equipment, or everyday living expenses while you recover. Dental and vision supplemental insurance is particularly valuable for Medicare beneficiaries since Original Medicare doesn\'t cover routine dental care, dentures, or vision exams.'
  },
  {
    question: 'How much does supplemental insurance cost?',
    answer: 'Supplemental insurance costs vary based on the type of coverage, benefit amounts, your age, health status, and location. Hospital indemnity plans typically cost $30-$100 per month for individual coverage. Critical illness insurance premiums range from $25-$150 per month depending on the benefit amount ($10,000-$100,000) and age at enrollment. Accident insurance is usually affordable at $15-$50 per month for families. Dental insurance starts around $15-$30 per month, and vision insurance runs $10-$20 per month. Cancer insurance costs $20-$75 per month. Many employers offer group supplemental insurance at discounted rates. Since supplemental insurance is typically guaranteed issue with no medical underwriting, prices are standardized within age bands, making it accessible even for people with pre-existing conditions.'
  }
]

export const hospitalIndemnityFAQs = [
  {
    question: 'What are the daily benefit amounts for hospital indemnity insurance?',
    answer: 'Hospital indemnity insurance daily benefit amounts typically range from $100 to $500 per day for regular hospital stays. ICU (Intensive Care Unit) coverage provides additional benefits of $50 to $250 per day. You choose your benefit amount when purchasing the policy, with higher daily benefits resulting in higher premiums. Most plans also include one-time benefits for hospital admission ($500-$1,000), surgical procedures ($200-$500), and ambulance transportation ($100-$300). Benefits are paid directly to you for each day you\'re hospitalized, up to the plan\'s maximum benefit period (usually 365 days per hospital stay).'
  }
]

export const criticalIllnessFAQs = [
  {
    question: 'What conditions are covered by critical illness insurance?',
    answer: 'Critical illness insurance covers major medical conditions including cancer (excluding certain skin cancers in early stages), heart attack (myocardial infarction), stroke, end-stage kidney failure requiring dialysis, major organ transplant (heart, lung, liver, kidney, pancreas), coronary artery bypass surgery, paralysis (loss of use of two or more limbs), and blindness. Some policies also cover benign brain tumors, coma, severe burns covering 20% or more of the body, and occupational HIV. Each condition has specific medical criteria that must be met to trigger the lump-sum benefit payment. Policies may include partial benefits for less severe diagnoses like early-stage cancer or minor heart procedures.'
  }
]

export const accidentInsuranceFAQs = [
  {
    question: 'What does accident insurance cover for families?',
    answer: 'Accident insurance for families provides cash benefits for various accidental injuries and medical services. Coverage typically includes emergency room visits ($100-$500 per visit), ambulance transportation ($200-$500), fractures ($100-$5,000 depending on bone and severity), dislocations ($100-$2,000), burns ($100-$10,000 based on degree and body surface area), lacerations requiring stitches ($50-$500), dental injuries ($50-$500 per tooth), and physical therapy ($25-$50 per visit). Benefits are paid in addition to your primary health insurance. Family plans cover the policyholder, spouse, and dependent children (usually up to age 26) under one policy, making it an affordable way to protect the entire family from out-of-pocket costs related to accidents.'
  }
]
