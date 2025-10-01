// Schema markup generator for Social Security Analysis pages

export interface SocialSecurityPageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateSocialSecuritySchema(config: SocialSecurityPageSchema) {
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
          name: 'Social Security Analysis',
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
        name: 'Social Security Analysis Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Security Benefit Calculation',
              description: 'Accurate benefit estimates based on your earnings history and claiming age'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Claiming Strategy Analysis',
              description: 'Personalized recommendations for optimal Social Security claiming timing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Spousal Benefits Optimization',
              description: 'Coordinated claiming strategies to maximize household Social Security income'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medicare Coordination Planning',
              description: 'Integrated Social Security and Medicare enrollment timeline guidance'
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

// Common FAQ library for Social Security Analysis
export const socialSecurityFAQs = [
  {
    question: 'When should I claim Social Security benefits?',
    answer: 'The optimal time to claim Social Security depends on your unique financial situation, health, life expectancy, and retirement goals. You can claim as early as age 62, but you\'ll receive a permanently reduced benefit (approximately 25-30% less than your full retirement age benefit). Claiming at your full retirement age (67 for those born in 1960 or later) gives you 100% of your calculated benefit. Delaying beyond full retirement age until age 70 earns you delayed retirement credits worth 8% per year, increasing your benefit to 124-132% of your full retirement age amount. Most financial advisors recommend delaying if you\'re in good health, have other income sources, and expect to live into your 80s or beyond. However, claiming early may make sense if you have health issues, need income immediately, or have a shorter life expectancy. The break-even analysis typically shows that delaying pays off if you live past age 78-80.'
  },
  {
    question: 'How do spousal Social Security benefits work?',
    answer: 'Spousal benefits allow a spouse to receive Social Security based on their partner\'s work record, even if they never worked or had low earnings. A spouse can receive up to 50% of the higher-earning spouse\'s full retirement age benefit amount. To qualify, you must be at least 62 years old and married for at least one year (or caring for a child under 16). If you claim spousal benefits before your full retirement age, the amount is permanently reduced. For example, claiming at 62 gives you only 32.5% instead of 50%. You cannot claim spousal benefits and delay your own benefits simultaneously - Social Security automatically pays the higher of the two amounts. Divorced spouses can also claim spousal benefits if the marriage lasted at least 10 years and they remain unmarried. Coordinating claiming strategies between spouses - such as having the lower earner claim early while the higher earner delays - can maximize lifetime household benefits and provide better survivor protection.'
  },
  {
    question: 'What are delayed retirement credits and how much do they increase my benefits?',
    answer: 'Delayed retirement credits (DRCs) are the incentive Social Security provides for delaying your claim beyond full retirement age. For every month you delay claiming between your full retirement age (66-67, depending on birth year) and age 70, your benefit increases by approximately 0.67% per month, or 8% per year. This means if your full retirement age is 67 and you wait until 70, your benefit increases by 24% (3 years × 8%). Someone entitled to $2,000/month at full retirement age would receive $2,480/month at age 70 - an extra $5,760 per year. These credits stop accruing at age 70, so there\'s no financial benefit to delaying past 70. Delayed retirement credits also increase survivor benefits, providing higher income protection for your spouse after your death. The decision to delay should consider your health, life expectancy, financial needs, and whether you have other retirement income sources to bridge the gap until age 70.'
  },
  {
    question: 'How does claiming Social Security early at 62 affect my benefits?',
    answer: 'Claiming Social Security at age 62, the earliest possible age, results in a permanent reduction to your monthly benefit. The exact reduction depends on your full retirement age. If your full retirement age is 67 (born 1960 or later), claiming at 62 reduces your benefit by 30%, meaning you receive only 70% of your full benefit amount. For someone entitled to $2,000/month at full retirement age, claiming at 62 would provide only $1,400/month - a $600 monthly reduction that continues for life. Additionally, if you claim early and continue working, the earnings test may further reduce benefits if you earn more than $22,320 annually (2024 limit). You lose $1 in benefits for every $2 earned above this threshold. The reduction is permanent even after you reach full retirement age. However, claiming early may be appropriate if you have immediate financial needs, health concerns that may shorten your life expectancy, or if you need to stop working due to disability or job loss. The breakeven point where delayed claiming surpasses early claiming benefits is typically around age 78-80.'
  },
  {
    question: 'Can I receive Social Security and Medicare at different ages?',
    answer: 'Yes, Social Security and Medicare eligibility operate on different timelines, and you can enroll in them independently. Medicare eligibility begins at age 65 for most people, regardless of when you claim Social Security benefits. Social Security can be claimed as early as age 62 or delayed until age 70. If you claim Social Security before age 65, you must still actively enroll in Medicare at 65 during your Initial Enrollment Period (7-month window around your 65th birthday) to avoid late enrollment penalties for Part B and Part D. If you delay Social Security past 65, you should still enroll in Medicare at 65 unless you have creditable employer coverage - delaying Medicare without creditable coverage results in permanent late enrollment penalties. If you\'re already receiving Social Security benefits when you turn 65, you\'ll be automatically enrolled in Medicare Parts A and B. The key strategy is coordinating both programs: you might delay Social Security to age 70 for maximum benefits while enrolling in Medicare at 65 to avoid penalties and ensure health coverage during early retirement years.'
  },
  {
    question: 'What is the Social Security earnings test and how does it affect my benefits?',
    answer: 'The Social Security earnings test reduces benefits for people who claim before full retirement age and continue working with earned income above certain limits. In 2024, if you\'re under full retirement age for the entire year, you lose $1 in benefits for every $2 you earn above $22,320. In the year you reach full retirement age, the limit is $59,520, and you lose $1 for every $3 earned above that threshold, but only counting earnings before the month you reach full retirement age. Once you reach full retirement age, there is no earnings test - you can earn unlimited income without benefit reduction. It\'s important to note that benefits withheld due to the earnings test aren\'t permanently lost. When you reach full retirement age, Social Security recalculates your benefit to give you credit for the months when benefits were withheld, resulting in a higher monthly benefit going forward. The earnings test only applies to earned income from wages or self-employment - it does not apply to investment income, pensions, annuities, or other unearned income. If you plan to work while receiving early Social Security benefits, carefully calculate whether the earnings test makes early claiming disadvantageous.'
  },
  {
    question: 'How do I maximize Social Security benefits as a married couple?',
    answer: 'Married couples can maximize Social Security benefits through strategic coordinated claiming. The most common optimization strategy is for the lower-earning spouse to claim early (often at 62-65) while the higher-earning spouse delays until age 70. This provides immediate household income while allowing the higher earner\'s benefit to grow by 8% per year through delayed retirement credits. This strategy is particularly valuable because the survivor benefit equals the higher of the two spouses\' benefits - so maximizing the higher earner\'s benefit provides the best protection for the surviving spouse. Another consideration is spousal benefits: a spouse can receive up to 50% of the other spouse\'s full retirement age benefit if it\'s higher than their own benefit. File-and-suspend and restricted application strategies were mostly eliminated by the 2015 Bipartisan Budget Act, but some people born before January 2, 1954 may still have access to restricted application options. The optimal strategy depends on the age difference between spouses, earnings history ratio, health status, life expectancy, and whether you have other retirement income. A comprehensive analysis should also consider survivor benefits - the surviving spouse receives the higher of the two benefits, so maximizing the higher earner\'s benefit provides long-term protection.'
  }
]
