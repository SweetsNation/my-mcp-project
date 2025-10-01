// Schema markup generator for Term Life Insurance pages

export interface TermLifeInsurancePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateTermLifeInsuranceSchema(config: TermLifeInsurancePageSchema) {
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
          name: 'Term Life Insurance',
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
        url: baseUrl,
        telephone: '331-343-2584'
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      serviceType: 'Life Insurance',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Term Life Insurance Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '10-Year Term Life Insurance',
              description: 'Short-term coverage for temporary needs with the lowest premiums'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '20-Year Term Life Insurance',
              description: 'Most popular term length providing affordable coverage through key earning years'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '30-Year Term Life Insurance',
              description: 'Long-term protection ideal for young families and mortgage coverage'
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

// Common FAQ library for Term Life Insurance
export const termLifeInsuranceFAQs = [
  {
    question: 'What is term life insurance and how does it work?',
    answer: 'Term life insurance is temporary life insurance coverage that lasts for a specific period (term), typically 10, 20, or 30 years. If you die during the coverage period, your beneficiaries receive a tax-free death benefit payout. If you outlive the term, the coverage ends with no payout or cash value. Term life works by paying fixed monthly or annual premiums throughout the term in exchange for a guaranteed death benefit amount. For example, a 35-year-old healthy non-smoker might pay $30/month for a 20-year term policy with a $500,000 death benefit. Premiums are locked in for the entire term and never increase, making budgeting predictable. Term life is pure insurance protection with no cash value or investment component, which keeps costs low. It\'s designed to cover temporary needs like mortgage protection, income replacement while children are young, or business obligations. Most policies offer guaranteed renewability at the end of the term without medical exams, though premiums increase significantly based on your age at renewal. Some policies include conversion options allowing you to switch to permanent life insurance (whole life or universal life) without medical underwriting within a specified period, typically the first 10-20 years of the term.'
  },
  {
    question: 'How much does term life insurance cost?',
    answer: 'Term life insurance is the most affordable type of life insurance, with costs varying based on age, health, coverage amount, term length, and lifestyle factors. For a healthy, non-smoking individual purchasing $500,000 of coverage: A 30-year-old pays approximately $20-$30/month for a 20-year term, or $25-$40/month for a 30-year term. A 40-year-old pays $35-$50/month for a 20-year term, or $55-$80/month for a 30-year term. A 50-year-old pays $95-$140/month for a 20-year term, or $165-$240/month for a 30-year term. Women typically pay 10-20% less than men at the same age due to longer life expectancy. Factors that increase costs: Tobacco use doubles or triples premiums - a 40-year-old smoker might pay $120-$150/month vs. $40 for a non-smoker. Health conditions like diabetes, high blood pressure, or obesity can increase rates 25-200% depending on severity. Dangerous occupations (pilots, construction workers, police officers) or risky hobbies (skydiving, scuba diving, rock climbing) add 25-50% to premiums. Higher coverage amounts scale proportionally - $1 million coverage costs roughly twice as much as $500,000. Longer terms cost more - a 30-year term is typically 40-60% more expensive than a 10-year term at the same coverage amount. Term life is cheapest when purchased young and healthy, making early enrollment highly cost-effective.'
  },
  {
    question: 'How much term life insurance coverage do I need?',
    answer: 'The amount of term life insurance you need depends on your financial obligations and the lifestyle you want to maintain for your family. Common calculation methods include: 1) Income Replacement Method: Multiply your annual income by 10-15 years. For example, if you earn $75,000/year, you\'d need $750,000-$1,125,000 to replace 10-15 years of income. 2) DIME Method (Debt, Income, Mortgage, Education): Add up total debt ($50,000 credit cards/car loans), annual income multiplied by years to replace ($75,000 × 10 = $750,000), remaining mortgage balance ($250,000), and children\'s education costs ($100,000 for college) = $1,150,000 total coverage needed. 3) Expense Replacement: Calculate annual expenses ($60,000) and multiply by years needed (20 years until spouse retires) = $1,200,000. Most financial advisors recommend coverage of 10-15 times your annual income, but specific needs vary based on: number and ages of dependents (more children or younger ages require higher coverage), mortgage and debt balances (higher balances need more coverage), whether you have a working spouse (dual income may need less coverage than single earner), existing savings and investments (more assets mean less insurance needed), college education goals (private vs. public, number of children), and desired standard of living for survivors. Young families with children and large mortgages typically need $500,000-$2,000,000 in coverage. Single adults with no dependents may only need $50,000-$100,000 to cover final expenses and debts. The goal is ensuring your family can maintain their lifestyle, pay off debts, fund education, and achieve financial goals without your income.'
  },
  {
    question: 'What is the difference between term life and whole life insurance?',
    answer: 'Term life and whole life insurance differ fundamentally in coverage duration, cost, and features. Term Life Insurance: Provides temporary coverage for a specific period (10-30 years) with no cash value component. Premiums are very affordable - a healthy 35-year-old might pay $30/month for $500,000 of 20-year coverage. Coverage expires at the end of the term with no payout if you outlive it, though most policies offer renewal at much higher rates or conversion to permanent coverage. It\'s pure insurance protection designed for temporary needs like mortgage coverage, income replacement during working years, or protecting dependents until they\'re self-sufficient. Whole Life Insurance: Provides permanent coverage that lasts your entire lifetime with guaranteed cash value accumulation. Premiums are significantly higher - the same 35-year-old would pay $350-$500/month for $500,000 of whole life. Coverage never expires as long as premiums are paid, and cash value grows tax-deferred at a guaranteed rate (typically 2-4% annually). You can borrow against cash value or withdraw funds for emergencies or retirement income. It\'s designed for permanent needs like estate planning, leaving a legacy, or supplementing retirement income. Key Comparison: For $500,000 coverage, a 40-year-old pays $40/month for 20-year term vs. $400/month for whole life - 10x more expensive. Term provides maximum death benefit per dollar spent, while whole life combines insurance with forced savings. Most financial advisors recommend "buying term and investing the difference" - purchase affordable term life for protection needs and invest premium savings in retirement accounts (401k, IRA) for better long-term growth. However, whole life can be appropriate for high-net-worth individuals, estate planning needs, or those who lack investment discipline. The right choice depends on your specific financial goals, budget, and whether you need temporary or permanent coverage.'
  },
  {
    question: 'Can I convert my term life insurance to permanent coverage?',
    answer: 'Yes, most term life insurance policies include a conversion option that allows you to convert some or all of your term coverage to permanent life insurance (whole life or universal life) without medical exams or health questions. This is a valuable feature because it guarantees your ability to obtain permanent coverage even if you develop serious health conditions during the term that would otherwise make you uninsurable or result in very high premiums. How conversion works: You can typically convert during a specified "conversion period" - usually the first 10-20 years of the policy term, or up to a certain age like 65-70. You convert to a permanent policy offered by the same insurance company at standard rates for your attained age (your age when you convert, not when you bought the original term policy). No medical underwriting is required - the insurance company cannot deny conversion or charge higher rates based on health changes, even if you\'ve been diagnosed with cancer, heart disease, or other serious conditions. The conversion preserves your insurability at standard rates. What to know before converting: Premiums increase significantly - converting at age 50 might raise your $50/month term premium to $400-$600/month for the same coverage amount in whole life. You can convert the full death benefit or a partial amount (like converting $250,000 of a $500,000 policy). The conversion period is limited - if you wait too long, you may lose the conversion option entirely. Conversion makes sense if: You develop health issues making new coverage impossible to obtain, you decide you need permanent coverage for estate planning, you want to build cash value for retirement income, or you need guaranteed lifetime protection. Many people convert a portion of their term coverage to permanent insurance while keeping some term coverage for affordability. Always review conversion options when purchasing term life, as policies vary in conversion flexibility, available permanent products, and time limits.'
  },
  {
    question: 'What happens when my term life insurance expires?',
    answer: 'When your term life insurance policy reaches the end of its term (e.g., after 20 or 30 years), you have several options, though the specific choices depend on your policy terms: 1) Let it lapse - The coverage simply ends with no payout, no refund of premiums, and no further obligations. This is the most common outcome if you no longer need coverage (children are grown, mortgage is paid off, spouse is financially secure, you\'ve accumulated sufficient assets). 2) Renew the policy - Most term policies offer guaranteed renewability allowing you to continue coverage for another term period without medical exams. However, renewal premiums increase dramatically based on your current age. For example, if you paid $50/month for coverage at age 40, renewal at age 60 might cost $400-$600/month for the same death benefit - an 8-12x increase. Renewals are typically annual after the initial term expires, with premiums increasing each year. 3) Convert to permanent insurance - If your policy includes a conversion rider and you\'re still within the conversion period, you can convert some or all coverage to whole life or universal life without medical underwriting. This locks in permanent coverage at your current health status, though premiums will be much higher than your term rates. 4) Purchase new term coverage - You can apply for a new term policy, but you\'ll need to go through full underwriting including medical exams, and rates will be based on your current age and health. If you\'ve developed health issues, you may be denied coverage or face very high premiums. 5) Return of Premium policies - If you purchased a "return of premium" term policy (which costs 30-50% more than regular term), you\'ll receive a refund of all premiums paid if you outlive the term. Most people don\'t choose this option due to higher costs and better investment alternatives. Planning ahead: Review your coverage needs 2-3 years before term expiration. If you still need coverage, consider converting a portion while you\'re healthy. If coverage needs have decreased, you might convert only part of the death benefit to permanent insurance. Many people find they no longer need life insurance after 60-65 when children are independent, mortgages are paid, and retirement assets are sufficient.'
  },
  {
    question: 'Do I need term life insurance if I have life insurance through work?',
    answer: 'Yes, relying solely on employer-provided life insurance is risky for several important reasons, and most financial advisors recommend supplementing workplace coverage with your own term life policy. Limitations of employer life insurance: 1) Insufficient coverage - Most employers provide 1-2x your annual salary, typically $50,000-$150,000. This rarely covers your actual needs, which should be 10-15x your income. A person earning $75,000/year with $150,000 employer coverage has only 2 years of income replacement instead of the recommended 10-15 years ($750,000-$1,125,000). 2) Coverage ends when employment ends - If you change jobs, get laid off, or retire, you lose coverage entirely. Some policies offer portability or conversion options, but rates are typically very expensive and require action during a limited window (usually 31 days). 3) No control over policy - Your employer controls the policy terms, can change coverage amounts or eliminate the benefit, and you cannot customize coverage to your specific needs. 4) Coverage may not be portable - Converting workplace coverage to an individual policy often costs 2-3x more than purchasing your own term policy while young and healthy. 5) Age and health considerations - Waiting to purchase individual coverage until you lose employer coverage means buying insurance when you\'re older (higher premiums) or potentially less healthy (higher rates or denial). Best approach: Purchase individual term life insurance to cover the gap between employer coverage and your actual needs. For example, if you need $1 million total coverage and have $150,000 through work, buy $850,000 of individual term coverage. This strategy provides: Full protection regardless of employment status, coverage you control and can maintain throughout the term, locked-in rates at your current young age and good health, and peace of mind that job loss won\'t leave your family unprotected. The cost is reasonable - a healthy 35-year-old might pay just $60-$80/month for $850,000 of 20-year term coverage to supplement workplace insurance. Consider employer life insurance as a bonus benefit, not your primary protection strategy.'
  }
]
