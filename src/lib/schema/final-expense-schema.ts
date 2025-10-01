// Schema markup generator for Final Expense Insurance pages

export interface FinalExpensePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateFinalExpenseSchema(config: FinalExpensePageSchema) {
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
          name: 'Final Expense Insurance',
          item: fullUrl
        }
      ]
    },

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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Final Expense Insurance Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Basic Final Expense Coverage',
              description: '$5,000 funeral cost coverage with guaranteed acceptance and no medical exam'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '10.00',
              priceCurrency: 'USD',
              billingIncrement: 'Monthly'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Standard Final Expense Coverage',
              description: '$15,000 complete burial insurance protection package'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '35.00',
              priceCurrency: 'USD',
              billingIncrement: 'Monthly'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Premium Final Expense Coverage',
              description: '$25,000-$50,000 comprehensive funeral and estate settlement coverage'
            }
          }
        ]
      }
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

// Common FAQ library for Final Expense Insurance
export const finalExpenseFAQs = [
  {
    question: 'What is final expense insurance and how does it work?',
    answer: 'Final expense insurance, also called burial insurance or funeral insurance, is a type of whole life insurance designed specifically to cover end-of-life expenses. It provides a death benefit typically ranging from $5,000 to $50,000 to pay for funeral services, burial or cremation costs, outstanding medical bills, and other final expenses. Unlike traditional life insurance, final expense policies have smaller coverage amounts, simplified underwriting (often with no medical exam required), and guaranteed acceptance for applicants aged 50-85. Premiums remain fixed for life and never increase. When the insured person passes away, beneficiaries receive the death benefit as a tax-free lump sum payment, usually within days, to cover immediate funeral costs and other expenses. The average funeral costs over $9,000-$12,000, making final expense insurance an essential tool to prevent your family from bearing this financial burden during their time of grief.'
  },
  {
    question: 'How much does final expense insurance cost per month?',
    answer: 'Final expense insurance costs vary based on age, coverage amount, health status, and the insurance carrier. On average, premiums range from $10 to $150 per month. A healthy 50-year-old might pay $15-$30/month for $10,000 in coverage, while a 70-year-old could pay $50-$100/month for the same amount. Basic coverage of $5,000 typically starts around $10-$20/month for younger applicants. Standard coverage of $15,000 (the most popular amount) averages $30-$60/month depending on age. Premium coverage of $25,000-$50,000 can cost $75-$150/month or more for seniors. Guaranteed issue policies (no health questions) cost 20-40% more than simplified issue policies (basic health questions). Women typically pay 10-15% less than men of the same age. Tobacco users pay 50-100% higher premiums. Premiums are locked in at the rate you pay when you enroll and never increase, even as you age. Most policies offer monthly payment options with no additional fees.'
  },
  {
    question: 'What does final expense insurance cover?',
    answer: 'Final expense insurance provides a death benefit that can be used for any purpose, but it\'s specifically designed to cover end-of-life expenses. Common uses include: Funeral service costs ($2,000-$5,000 for viewing, ceremony, and memorial service), burial expenses ($1,000-$4,000 for casket, vault, plot, and headstone) or cremation costs ($1,000-$3,000), outstanding medical bills and hospital expenses not covered by health insurance, credit card debt and personal loans, probate and estate settlement fees, travel expenses for family members attending the funeral, and other immediate financial needs. The death benefit is paid as a tax-free lump sum directly to the beneficiary you designate - typically a spouse, adult child, or family member. Unlike pre-need funeral insurance that pays the funeral home directly, final expense insurance gives beneficiaries flexibility to use funds as needed. There are no restrictions on how the money is spent, though it\'s intended to relieve the family of financial stress during a difficult time.'
  },
  {
    question: 'Can I get final expense insurance with no medical exam?',
    answer: 'Yes, most final expense insurance policies require no medical exam and use simplified or guaranteed issue underwriting. Simplified issue policies ask 5-10 basic health questions (such as recent hospitalizations, current medications, or serious conditions like cancer or heart disease) but do not require blood tests, physicals, or medical records. You can get approved immediately, often within minutes. Guaranteed issue (guaranteed acceptance) policies have no health questions at all - everyone is automatically approved regardless of health conditions, though they typically have a 2-3 year waiting period (graded death benefit) where only premiums plus interest are paid if death occurs from illness during this period. Accidents are covered immediately. These no-exam policies make final expense insurance accessible to seniors with pre-existing conditions, those who cannot qualify for traditional life insurance, and anyone who wants quick, hassle-free coverage. The trade-off is slightly higher premiums compared to fully underwritten policies that require medical exams.'
  },
  {
    question: 'What is the difference between final expense insurance and life insurance?',
    answer: 'Final expense insurance is a type of life insurance, but there are key differences. Final expense insurance (burial insurance) has smaller coverage amounts ($5,000-$50,000) specifically designed for end-of-life costs, while traditional life insurance offers larger amounts ($100,000-$1,000,000+) for income replacement and long-term financial security. Final expense uses simplified or guaranteed issue underwriting with no medical exam, making it easier to qualify, while traditional life insurance requires full underwriting with medical exams, blood tests, and extensive health questions. Final expense is permanent whole life coverage that builds small cash value and lasts your entire life with fixed premiums, while traditional term life insurance is temporary (10-30 years) with no cash value and lower initial premiums that may increase. Final expense premiums are higher per $1,000 of coverage but easier to qualify for at older ages (50-85), while traditional life insurance has lower per-unit costs but becomes expensive or unavailable for seniors. Final expense pays out quickly (often within days) to cover immediate funeral costs, while traditional life insurance may take weeks for claims processing. For seniors who need guaranteed acceptance coverage for funeral expenses, final expense is the better choice. For younger, healthy individuals needing large amounts of coverage, traditional term life is more cost-effective.'
  },
  {
    question: 'Who should buy final expense insurance?',
    answer: 'Final expense insurance is ideal for several groups: Seniors aged 50-85 who want to ensure funeral costs don\'t burden their family - the average funeral costs $9,000-$12,000, which can be a significant hardship. People with pre-existing health conditions who cannot qualify for traditional life insurance due to diabetes, heart disease, cancer history, or other conditions - guaranteed issue policies accept everyone. Individuals on fixed incomes (Social Security, pensions) who cannot afford large life insurance premiums but want basic coverage - final expense starts at just $10-$30/month. Those with limited savings or assets who don\'t have $10,000+ set aside for end-of-life expenses. Parents or grandparents who want to leave a small inheritance while primarily covering their own final costs. Anyone who wants quick, guaranteed coverage without medical exams, blood tests, or waiting for underwriting approval. People who prefer permanent coverage that never expires and builds small cash value. Final expense insurance provides peace of mind that your funeral will be paid for and your loved ones won\'t face financial stress during an already difficult time. If you\'re concerned about burdening your family with funeral costs, final expense insurance is worth considering.'
  },
  {
    question: 'How quickly does final expense insurance pay out after death?',
    answer: 'Final expense insurance typically pays death benefits very quickly - often within 3-10 business days after the claim is filed and approved. The fast payout process works as follows: Upon death, the beneficiary contacts the insurance company and submits a death certificate (usually available from the funeral home within 1-3 days). The insurance company reviews the claim, which for final expense policies is usually straightforward since there\'s minimal underwriting. If the policy is past any waiting period and the claim is approved, the insurance company issues payment via check or direct deposit within days. Many carriers offer expedited processing for final expense claims since they understand families need money immediately for funeral expenses. Some insurers can approve and pay simple claims within 24-48 hours. This is much faster than traditional life insurance, which can take 2-4 weeks or longer due to more complex underwriting review. Important note: Guaranteed issue policies with graded death benefits have a 2-3 year waiting period where only premiums plus interest (not the full death benefit) are paid if death occurs from illness. However, accidental death is covered immediately from day one. After the waiting period ends, full death benefits are paid regardless of cause of death. The quick payout structure makes final expense insurance particularly valuable for covering immediate funeral costs.'
  }
]
