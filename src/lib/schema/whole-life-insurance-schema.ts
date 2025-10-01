// Schema markup generator for Whole Life Insurance pages

export interface WholeLifeInsurancePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateWholeLifeInsuranceSchema(config: WholeLifeInsurancePageSchema) {
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
          name: 'Whole Life Insurance',
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
        name: 'Whole Life Insurance Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Permanent Whole Life Insurance',
              description: 'Lifetime coverage with fixed premiums and guaranteed cash value growth'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Participating Whole Life Insurance',
              description: 'Whole life insurance from mutual companies with potential dividend payments'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Limited Payment Whole Life',
              description: 'Whole life insurance paid up in a specific period (10-20 years) with lifetime coverage'
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

// Common FAQ library for Whole Life Insurance
export const wholeLifeInsuranceFAQs = [
  {
    question: 'What is whole life insurance and how does it differ from term life insurance?',
    answer: 'Whole life insurance is a type of permanent life insurance that provides coverage for your entire lifetime, as long as premiums are paid. Unlike term life insurance which only covers you for a specific period (10-30 years), whole life never expires. The key differences: Whole life has fixed premiums that never increase, builds guaranteed cash value that grows tax-deferred at 2-4% annually, and provides permanent protection. Term life has lower initial premiums but no cash value, expires after the term ends (requiring expensive renewal if you want to continue coverage), and offers only temporary protection. Whole life premiums are typically 5-15 times higher than term life for the same death benefit amount, but you\'re paying for permanent coverage and the cash value component. For example, a healthy 40-year-old might pay $50/month for $250,000 of 20-year term life, but $120/month for $250,000 of whole life. Term life is better for temporary needs like mortgage protection or income replacement during working years, while whole life is ideal for permanent needs like estate planning, final expenses, or leaving a legacy.'
  },
  {
    question: 'How does cash value work in whole life insurance?',
    answer: 'Cash value is the savings component of whole life insurance that builds over time as you pay premiums. Here\'s how it works: Part of each premium payment (typically 40-60% in early years) goes into the cash value account, which grows at a guaranteed minimum rate (usually 2-4% annually) set by the insurance company. The growth is tax-deferred, meaning you don\'t pay taxes on gains unless you withdraw them. In participating whole life policies from mutual insurance companies, you may also receive annual dividends that can be used to purchase paid-up additional insurance, further increasing your cash value. You can access your cash value through policy loans (borrowing against the value at competitive rates, typically 5-8%, with no credit check required) or partial withdrawals (though withdrawals reduce your death benefit). Cash value can be used for any purpose - emergency funds, retirement income supplement, college tuition, or business opportunities. However, if you surrender the policy entirely, you\'ll receive the cash surrender value (cash value minus any surrender charges) and lose the death benefit protection. It typically takes 10-15 years for cash value to equal the total premiums you\'ve paid, so whole life is a long-term commitment.'
  },
  {
    question: 'What are the main benefits of whole life insurance?',
    answer: 'Whole life insurance offers several unique benefits that make it valuable for the right situations: 1) Permanent coverage - Your policy never expires as long as premiums are paid, guaranteeing a death benefit for your beneficiaries regardless of when you pass away. 2) Fixed premiums - Your premium is locked in at the rate when you purchase the policy and never increases, making budgeting predictable. 3) Guaranteed cash value growth - Your cash value grows at a guaranteed minimum rate regardless of stock market performance, providing stable, tax-deferred accumulation. 4) Tax advantages - Cash value grows tax-deferred, policy loans are not taxable events, and death benefits are generally income tax-free to beneficiaries. 5) Dividend potential - Participating policies from mutual companies may pay annual dividends that can increase your coverage or cash value. 6) Living benefits - You can access cash value through loans or withdrawals for emergencies, opportunities, or retirement income without qualification or credit checks. 7) Estate planning tool - Provides liquidity to pay estate taxes, equalize inheritances among heirs, or leave a legacy to charity. 8) Forced savings - The structured premium payment creates disciplined savings that many people struggle to achieve otherwise. 9) Creditor protection - In many states, cash value and death benefits have some protection from creditors. 10) No re-qualification needed - Unlike term life which requires re-underwriting to renew, whole life coverage continues regardless of health changes.'
  },
  {
    question: 'How much does whole life insurance cost?',
    answer: 'Whole life insurance costs significantly more than term life insurance due to its permanent nature and cash value component. Costs vary based on age, gender, health, coverage amount, and insurance company. Here are typical monthly premiums for $250,000 of whole life coverage for non-smoking, healthy individuals: A 30-year-old male pays $180-$250/month ($2,160-$3,000/year), while a 30-year-old female pays $155-$215/month. A 40-year-old male pays $290-$400/month, while a 40-year-old female pays $250-$340/month. A 50-year-old male pays $475-$650/month, while a 50-year-old female pays $405-$555/month. A 60-year-old male pays $800-$1,100/month, while a 60-year-old female pays $670-$920/month. For comparison, term life at the same $250,000 coverage level would cost a 40-year-old male only $35-$50/month - but that coverage expires after 20-30 years and has no cash value. Factors that increase whole life premiums: tobacco use (50-100% higher), poor health conditions, dangerous occupations or hobbies, higher coverage amounts (premiums scale proportionally), and riders like guaranteed insurability or accelerated death benefits. Whole life is most cost-effective when purchased young, as premiums increase dramatically with age. The high initial cost is why financial advisors often recommend "buying term and investing the difference" for pure death benefit needs, reserving whole life for specific purposes like estate planning, business succession, or guaranteed legacy creation.'
  },
  {
    question: 'Can I borrow money from my whole life insurance policy?',
    answer: 'Yes, one of the major benefits of whole life insurance is the ability to borrow against your accumulated cash value. Here\'s how policy loans work: You can borrow up to 90-95% of your current cash value (typically after 2-3 years when sufficient value has accumulated) with no credit check, qualification process, or stated purpose required. The insurance company sets the loan interest rate, typically 5-8% annually, which is often competitive with personal loans or HELOCs. You\'re not required to make payments - you can let interest accumulate and be deducted from the death benefit, though most people make at least interest payments to prevent the loan balance from growing too large. If total loans plus interest exceed the cash value, the policy may lapse (though most companies provide warnings before this happens). When you die, any outstanding loan balance plus accrued interest is deducted from the death benefit paid to beneficiaries. Policy loans are not taxable events since you\'re borrowing your own money, unlike withdrawals which can trigger taxes on gains. The borrowed cash value continues to earn the guaranteed interest rate and may continue to receive dividends, though some companies pay reduced dividends on borrowed amounts. Common uses for policy loans: emergency funds, business opportunities, college tuition, down payments, debt consolidation, or retirement income supplement. The key advantage is accessing cash without surrendering the policy or reducing the death benefit (until death), maintaining your permanent coverage while using funds during your lifetime.'
  },
  {
    question: 'Is whole life insurance a good investment?',
    answer: 'Whether whole life insurance is a "good investment" depends on your goals - it\'s better viewed as a financial tool than a pure investment. From a pure return perspective: Whole life typically returns 2-4% guaranteed growth on cash value, plus potential dividends that may bring total returns to 4-6% over decades. This underperforms stock market historical averages of 10% and even bond returns of 5-7%. Additionally, early years have minimal cash value growth due to commissions and fees. However, whole life offers benefits beyond investment returns: 1) Tax advantages - Cash value grows tax-deferred, loans are tax-free, and death benefits avoid income tax. These tax benefits can effectively increase your after-tax return. 2) Forced savings discipline - Automatic premium payments create savings that many people fail to achieve voluntarily. 3) Protection from market volatility - Guaranteed growth provides stability in retirement planning. 4) Living benefits combined with death benefit - You get both wealth accumulation and insurance protection in one product. 5) Creditor protection in many states. 6) Estate planning certainty - Guaranteed death benefit for heirs. Financial advisors typically don\'t recommend whole life as a primary investment vehicle. The common advice is "buy term and invest the difference" - purchase cheaper term life insurance for protection needs and invest premium savings in tax-advantaged accounts (401k, IRA, HSA) or taxable brokerage accounts for better long-term growth. However, whole life may be appropriate for: high-net-worth individuals who\'ve maxed out other tax-advantaged savings, business owners needing permanent coverage for succession planning, people who lack savings discipline and need forced accumulation, estate planning when you want to leave a guaranteed legacy, or those seeking stable, conservative growth without market risk. The key is understanding whole life insurance is insurance first, with a savings component as a secondary benefit.'
  },
  {
    question: 'What happens if I stop paying premiums on my whole life insurance?',
    answer: 'If you stop paying premiums on whole life insurance, you have several options depending on how long you\'ve held the policy and how much cash value has accumulated: 1) Grace period - Most policies have a 30-31 day grace period during which coverage continues even if you miss a premium payment. If you pay during this time, the policy remains in force. 2) Automatic premium loan - If you\'ve accumulated sufficient cash value, many policies will automatically borrow from your cash value to pay premiums, keeping the policy active. Interest accrues on these loans and eventually reduces the death benefit if not repaid. 3) Reduced paid-up insurance - You can use your accumulated cash value to purchase a smaller amount of permanent coverage with no further premiums required. For example, a $250,000 policy with $30,000 cash value might convert to $75,000 of permanent, paid-up coverage. 4) Extended term insurance - Your cash value can be used to purchase term insurance for the original death benefit amount for a specific period (often 10-20 years depending on cash value). This maintains the full death benefit temporarily but coverage eventually expires. 5) Cash surrender - You can surrender the policy entirely and receive the cash surrender value (accumulated cash value minus any surrender charges, which typically apply in the first 10-15 years). You\'ll owe income taxes on gains (amount received above total premiums paid), and you lose all future death benefit protection. 6) Policy lapse - If you take no action and have insufficient cash value for automatic loans, the policy lapses and you lose all coverage and benefits. You may owe taxes on any cash value used to pay premiums in prior years. The best option depends on your situation. If you need cash now, surrendering or taking a loan might work. If you want to maintain some coverage but can\'t afford premiums, reduced paid-up or extended term preserves benefits. Many people regret surrendering whole life policies early because they lose valuable coverage and the years of premium payments that built cash value.'
  }
]
