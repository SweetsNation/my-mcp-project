// Schema markup generator for Trip Cancellation Insurance pages

export interface TripCancellationInsurancePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateTripCancellationInsuranceSchema(config: TripCancellationInsurancePageSchema) {
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
          name: 'Trip Cancellation Insurance',
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
      serviceType: 'Travel Insurance',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Trip Cancellation Insurance Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Basic Trip Cancellation Coverage',
              description: 'Trip cancellation insurance up to $2,500 with basic medical emergency and travel delay coverage'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '15.00',
              priceCurrency: 'USD',
              billingIncrement: 'Per Trip'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Standard Travel Protection',
              description: 'Complete trip cancellation and interruption coverage up to $10,000 with emergency medical and baggage protection'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '85.00',
              priceCurrency: 'USD',
              billingIncrement: 'Per Trip'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Comprehensive Travel Insurance',
              description: 'Maximum trip protection up to $100,000 including Cancel for Any Reason, emergency evacuation, and 24/7 travel assistance'
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '350.00',
              priceCurrency: 'USD',
              billingIncrement: 'Per Trip'
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

// Common FAQ library for Trip Cancellation Insurance
export const tripCancellationInsuranceFAQs = [
  {
    question: 'What is trip cancellation insurance and what does it cover?',
    answer: 'Trip cancellation insurance is a type of travel insurance that reimburses you for prepaid, non-refundable trip expenses if you need to cancel your trip for a covered reason before departure. Standard trip cancellation policies cover specific reasons including: sudden illness or injury to you or a traveling companion, death of an immediate family member, severe weather or natural disasters at your destination making travel impossible or inadvisable, airline or cruise line bankruptcy or cessation of operations, jury duty or court subpoena you cannot postpone, involuntary job loss after more than 3 years of employment, home damage requiring your presence (fire, flood, burglary), hijacking or quarantine, terrorist incident at your destination within 30 days of departure, and military deployment. Covered expenses typically include flights, hotels, tours, cruises, event tickets, and other prepaid reservations. Trip cancellation insurance usually costs 4-8% of your total trip cost. For example, insuring a $5,000 vacation would cost $200-$400. The maximum coverage amount varies by policy but can range from $2,500 for basic plans to $100,000 or more for comprehensive coverage. Most policies also include trip interruption coverage (for cutting trips short), trip delay coverage (for delayed departures), and emergency medical coverage while traveling. Some policies offer "Cancel for Any Reason" (CFAR) upgrades that allow cancellation for any reason not specifically excluded, though these typically reimburse only 50-75% of trip costs and must be purchased within 10-21 days of your initial trip deposit.'
  },
  {
    question: 'How much does trip cancellation insurance cost?',
    answer: 'Trip cancellation insurance typically costs 4-8% of your total trip cost, with the exact price depending on several factors including trip cost, traveler age, destination, trip duration, coverage level, and any optional add-ons. Here are typical costs: A $2,500 domestic trip for a couple in their 30s costs $100-$200 for basic coverage or $175-$300 for comprehensive coverage. A $5,000 international vacation for a family of four costs $200-$400 for standard coverage or $350-$600 for comprehensive plans with medical coverage. A $10,000 honeymoon or cruise costs $400-$800 for comprehensive coverage including Cancel for Any Reason. A $20,000 multi-family group trip or extended international travel costs $800-$1,600 for maximum protection. Factors that increase costs: Traveler age over 60-70 adds 20-50% to premiums due to increased health risks. Exotic destinations or countries with travel advisories cost 15-30% more. Adventure activities like scuba diving, skiing, or mountain climbing add 25-50% for hazardous activity coverage. Pre-existing medical condition waivers may add 10-20%. Cancel for Any Reason upgrades typically increase costs by 40-60% but must be purchased within 10-21 days of initial trip deposit. Ways to save: Annual travel insurance policies cost $200-$500/year and cover unlimited trips, saving money for frequent travelers (typically 3+ trips per year). Group policies for 5+ travelers can reduce per-person costs by 10-20%. Purchasing within 10-21 days of initial deposit qualifies for pre-existing condition waivers without extra cost. Basic coverage levels meet most travelers\' needs at lower premiums than comprehensive plans. Trip cancellation insurance is most cost-effective for expensive trips ($3,000+), international travel, cruises, and trips with significant non-refundable deposits.'
  },
  {
    question: 'What is the difference between trip cancellation and trip interruption insurance?',
    answer: 'Trip cancellation and trip interruption insurance are related but cover different scenarios. Trip Cancellation Insurance: Covers expenses when you cancel your entire trip before departure. Reimburses prepaid, non-refundable trip costs like flights, hotels, tours, and cruises. Must cancel for a covered reason (illness, family emergency, natural disaster, etc.). Typically covers 100% of insured trip costs up to the policy limit. Example: You cancel a $5,000 vacation due to illness before leaving - trip cancellation reimburses the full $5,000 in non-refundable expenses. Trip Interruption Insurance: Covers costs when you must cut your trip short and return home early after departure. Reimburses unused, prepaid trip costs for the portion you missed. Also covers additional transportation costs to return home early (often 150% of trip cost). May cover additional accommodation or meal expenses due to the interruption. Example: You\'re 3 days into a 10-day $5,000 cruise and must return home due to a family emergency. Trip interruption reimburses $3,500 for the 7 unused days plus $1,200 for an emergency flight home. Key Differences: Timing - Cancellation is before departure; interruption is during the trip. Coverage Amount - Interruption often covers 100-150% of trip cost to account for additional return travel expenses, while cancellation covers 100% of prepaid costs. Covered Reasons - Both cover similar reasons (illness, family death, natural disaster) but interruption also covers issues that arise during travel like missed connections, destination issues, or injuries while traveling. Most comprehensive travel insurance policies include both trip cancellation and trip interruption coverage in the same plan, providing complete protection before and during your trip. The combined coverage ensures you\'re protected from financial loss whether you cancel before leaving or need to return home early due to unforeseen circumstances.'
  },
  {
    question: 'When should I buy trip cancellation insurance?',
    answer: 'The optimal time to purchase trip cancellation insurance is within 10-21 days of making your initial trip deposit or first trip payment. This timing is critical because many important benefits and coverages are only available during this "early purchase window." Benefits of buying within 10-21 days of initial deposit: Pre-existing medical condition waiver - Most policies waive pre-existing condition exclusions if purchased within this window, meaning conditions like diabetes, heart disease, or cancer won\'t prevent coverage. Cancel for Any Reason (CFAR) eligibility - This upgrade allowing you to cancel for any reason (and receive 50-75% reimbursement) is only available when purchasing within 10-21 days. Financial default coverage - Some policies only cover supplier bankruptcy or financial default if purchased early in the booking process. Maximum coverage for time-sensitive benefits - Trip delay, missed connection, and other time-sensitive benefits have the longest coverage periods when purchased early. Financial insolvency protection - Coverage for tour operator or travel agency bankruptcy requires early purchase. You can still buy trip cancellation insurance later, but you\'ll lose: Pre-existing condition coverage (conditions diagnosed in the 60-180 days before purchase are excluded), Cancel for Any Reason option (not available after the window closes), Some supplier default protections, and potentially better rates (some insurers offer early-bird discounts). Latest you should buy: At minimum, purchase trip cancellation insurance before making final trip payment or before the policy\'s coverage effective date (usually the day after purchase). However, buying at the last minute means missing valuable coverages. Best practice timeline: Book trip and make initial deposit → Purchase trip cancellation insurance within 10-21 days → Continue making trip payments knowing you\'re protected. For spontaneous trips booked close to departure, purchase insurance immediately after booking, even if you miss the early purchase window - having basic trip cancellation coverage is better than having none, especially for expensive trips where financial loss would be significant.'
  },
  {
    question: 'Does trip cancellation insurance cover COVID-19?',
    answer: 'Yes, most modern trip cancellation insurance policies now include COVID-19 coverage, but the extent and type of coverage varies significantly between policies. Here\'s what trip cancellation insurance typically covers for COVID-19: Covered COVID-19 Scenarios for Trip Cancellation: If you test positive for COVID-19 before your trip and are unable to travel, or are required to quarantine by a doctor or government authority. If a traveling companion tests positive and you cannot travel without them. If a family member at home becomes seriously ill with COVID-19 and you need to cancel to care for them. If you\'re diagnosed with a serious COVID-19 complication requiring medical treatment that prevents travel. If your destination implements mandatory quarantine requirements for incoming travelers. If your airline or cruise line cancels service due to COVID-19 restrictions. What\'s NOT typically covered: Canceling because you\'re afraid of catching COVID-19 (unless you have Cancel for Any Reason coverage). Canceling due to general pandemic concerns or travel advisories without a direct impact on your trip. Border closures or entry restrictions that were in effect when you purchased the policy (known exclusions aren\'t covered). Canceling because you cannot get a COVID-19 test in time (though some comprehensive policies cover this). Enhanced COVID-19 Coverage Options: Cancel for Any Reason (CFAR) policies allow cancellation for pandemic-related concerns and reimburse 50-75% of trip costs - must be purchased within 10-21 days of initial deposit. Epidemic coverage endorsements specifically designed for pandemic-related cancellations (available from some insurers). Travel medical insurance with COVID-19 treatment coverage for infections that occur during travel. Emergency evacuation coverage if you contract COVID-19 while traveling and need medical evacuation. Important considerations: Read policy terms carefully - COVID-19 coverage varies significantly between insurers and policies. Pre-existing condition waivers may not apply if you had COVID-19 in the 60-180 days before purchasing insurance unless you buy within the early purchase window. Keep documentation - save positive COVID-19 tests, doctor\'s orders to quarantine, and proof of travel restrictions for claims. Verify coverage updates - COVID-19 coverage continues to evolve, so confirm current coverage when purchasing. For maximum COVID-19 protection, purchase comprehensive trip cancellation insurance with Cancel for Any Reason coverage within 10-21 days of initial deposit, and verify specific COVID-19 coverage terms with your insurer before finalizing the purchase.'
  },
  {
    question: 'What does Cancel for Any Reason (CFAR) trip insurance cover?',
    answer: 'Cancel for Any Reason (CFAR) is a premium upgrade to standard trip cancellation insurance that allows you to cancel your trip for literally any reason not specifically excluded, providing maximum flexibility. Unlike standard policies that only cover specific reasons (illness, family emergency, natural disaster), CFAR covers scenarios like: change of heart or simply not wanting to go, work commitments or projects you cannot leave, concerns about travel safety or destination conditions, family obligations or events that aren\'t emergencies, missed flight connections due to personal delays, pregnancy complications or discomfort (when not medically necessary to cancel), desire to avoid crowds or busy travel periods, and any other personal reason for canceling your trip. How CFAR coverage works: Reimbursement Level: CFAR typically reimburses 50-75% of your total trip cost (not the full 100% like standard cancellation). For a $10,000 trip, you\'d receive $5,000-$7,500 if you cancel for any reason. Cancellation Timing: You must cancel at least 48 hours before scheduled departure (some policies require 48-72 hours notice). Last-minute cancellations within 48 hours are not covered. Purchase Requirements: Must be purchased within 10-21 days of your initial trip deposit or first payment (the exact window varies by insurer). Must insure 100% of your total prepaid, non-refundable trip costs (cannot partially insure a trip). Cost: CFAR increases your trip insurance premium by 40-60%. If standard coverage costs $400, adding CFAR might cost $560-$640 total. Age restrictions: Some insurers limit CFAR to travelers under age 70-75. When CFAR makes sense: Expensive trips ($5,000+) where losing even 50% would be significant. International travel to destinations with potential instability or changing conditions. Group trips where someone else might cancel, causing you to cancel. Trips booked far in advance (6+ months) when circumstances might change. Travelers with demanding jobs or family situations that might require cancellation. Elderly travelers or those with health conditions that could worsen. What CFAR does NOT cover: Known circumstances existing when you purchased the policy (cannot buy CFAR after deciding you want to cancel). Cancellations within 48 hours of departure. Failure to insure the complete trip cost from the beginning. Trips to destinations with government "do not travel" warnings in effect at time of policy purchase. CFAR is the most flexible trip cancellation coverage available, providing peace of mind that you can cancel for any personal reason and recover most of your trip investment, making it valuable for expensive trips or travelers with uncertain schedules who want maximum cancellation flexibility.'
  },
  {
    question: 'Is trip cancellation insurance worth it?',
    answer: 'Whether trip cancellation insurance is worth it depends on your trip cost, financial situation, health status, and risk tolerance. Here\'s how to evaluate if it makes sense for your trip: Trip cancellation insurance IS worth it when: Trip cost is $3,000 or more - The higher your trip cost, the more you have to lose. Insuring a $10,000 trip for $400-$800 (4-8%) provides excellent value compared to losing the full $10,000. You have significant non-refundable expenses - Cruises, package tours, and advance-purchase flights/hotels often have strict cancellation policies. If you\'d lose $5,000+ from canceling, insurance for $200-$400 is worthwhile. You or a traveling companion has health concerns - Pre-existing conditions, elderly travelers, or recent health issues increase cancellation risk. Insurance protects against sudden illness preventing travel. You\'re traveling internationally - Higher trip costs, complicated logistics, and medical emergencies abroad make international trip insurance especially valuable. Foreign medical care and emergency evacuation can cost $50,000-$100,000 without insurance. Trip is booked far in advance (6+ months) - More time means more opportunities for life circumstances to change (job loss, family emergencies, health issues). Traveling during hurricane/weather season - Trips to coastal areas June-November face weather disruptions. Trip cancellation insurance covers cancellations due to severe weather or natural disasters. You cannot afford to lose the trip cost - If losing $3,000-$10,000 would be financially devastating, insurance provides essential protection. Trip cancellation insurance may NOT be worth it when: Trip cost is under $500-$1,000 - Insurance might cost $50-$100, which is a high percentage of trip cost. You might choose to self-insure small amounts. Trip is fully refundable - If your flights, hotels, and activities all offer free cancellation, trip insurance is unnecessary. Check cancellation policies before buying insurance. You have good travel credit cards - Premium credit cards like Chase Sapphire Reserve or AmEx Platinum include trip cancellation coverage when you book travel with the card, eliminating the need for separate insurance. You have excellent health and few obligations - Healthy travelers with flexible schedules and no dependents have lower cancellation risk, though unexpected events can still occur. You travel frequently - Instead of per-trip insurance, consider annual travel insurance policies ($200-$500/year) covering unlimited trips if you travel 3+ times annually. Real-world value calculation: Example: $8,000 honeymoon cruise. Trip cancellation insurance cost: $320-$640 (4-8%). Risk without insurance: Losing the full $8,000 if you need to cancel for illness, family emergency, or other covered reason. Value proposition: Paying $500 to protect against $8,000 loss is financially prudent for most travelers. Bottom line: Trip cancellation insurance is worth it for most trips costing $3,000 or more, especially international travel, cruises, or trips with elderly travelers or health concerns. For trips under $1,000 or with flexible cancellation policies, you might choose to self-insure and skip trip insurance. Consider your personal financial situation, health status, and risk tolerance when deciding if trip cancellation insurance provides sufficient value for your specific travel plans.'
  }
]
