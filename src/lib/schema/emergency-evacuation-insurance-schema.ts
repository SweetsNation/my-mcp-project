// Schema markup generator for Emergency Evacuation Insurance pages

export interface EmergencyEvacuationInsurancePageSchema {
  pagePath: string
  pageTitle: string
  pageDescription: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function generateEmergencyEvacuationInsuranceSchema(config: EmergencyEvacuationInsurancePageSchema) {
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
          name: 'Emergency Evacuation Insurance',
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
        name: 'Emergency Evacuation Insurance Plans',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medical Evacuation Coverage',
              description: 'Emergency air ambulance and ground transport for medical emergencies up to $100,000'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Natural Disaster Evacuation',
              description: 'Emergency evacuation and transport during natural disasters, hurricanes, earthquakes, and severe weather'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Political Evacuation Coverage',
              description: 'Evacuation protection for political unrest, civil disturbances, and embassy-advised evacuations'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Repatriation Services',
              description: 'Return of remains and repatriation coverage up to $50,000'
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

// Common FAQ library for Emergency Evacuation Insurance
export const emergencyEvacuationInsuranceFAQs = [
  {
    question: 'What is emergency evacuation insurance and what does it cover?',
    answer: 'Emergency evacuation insurance, also called medical evacuation or medevac insurance, provides coverage for emergency transportation when you experience a medical emergency or other crisis while traveling and need to be transported to adequate medical facilities or back home. Emergency evacuation insurance covers: Medical evacuation - Emergency air ambulance or ground transport to the nearest adequate medical facility when local facilities cannot provide necessary care (coverage typically $100,000-$500,000). This includes helicopter rescue, fixed-wing air ambulance, and specialized medical flights with trained medical personnel. Repatriation of remains - Return of your body to your home country if you die while traveling (coverage typically $25,000-$50,000), including preparation, transport, and necessary documentation. Medical repatriation - Transport back to your home country or home hospital after initial treatment abroad once you\'re medically stable for transport. Political evacuation - Emergency evacuation due to political unrest, civil disturbances, terrorism, or war when government authorities advise departure. Natural disaster evacuation - Transport to safety during hurricanes, earthquakes, floods, volcanic eruptions, or other natural disasters that make your location unsafe. Security evacuation - Evacuation due to kidnapping threats, civil unrest, or other security concerns in your travel destination. What\'s typically NOT covered: Evacuation for convenience or non-emergency situations, pre-existing medical conditions (unless waived), routine medical transport that could wait, evacuation against medical advice, and travel to destinations with pre-existing government "do not travel" warnings. Emergency evacuation insurance is typically included as part of comprehensive travel insurance policies but can also be purchased as standalone coverage. It\'s especially important for international travelers, adventure travel, cruise passengers, and anyone traveling to remote areas or countries with limited medical facilities. Coverage amounts typically range from $100,000 to $1,000,000 depending on the policy.'
  },
  {
    question: 'How much does emergency evacuation insurance cost?',
    answer: 'Emergency evacuation insurance costs vary widely depending on whether it\'s standalone coverage or part of a comprehensive travel plan, your destination, trip duration, age, and coverage limits. Standalone emergency evacuation insurance: Annual coverage costs $200-$500/year for individuals and $400-$800/year for families, providing unlimited emergency evacuations worldwide with coverage limits of $100,000-$500,000 per evacuation. Single-trip standalone evacuation coverage costs $50-$150 per trip for short trips (1-2 weeks) or $100-$300 for longer trips (3-4 weeks). As part of comprehensive travel insurance: Emergency evacuation is included in most comprehensive travel insurance policies at no additional cost. Comprehensive travel insurance costs 4-8% of total trip cost, so a $5,000 trip would cost $200-$400 and include evacuation coverage of $100,000-$250,000. Premium comprehensive plans with higher evacuation limits ($500,000-$1,000,000) cost 6-10% of trip cost. Factors affecting cost: Age - Travelers over 60-70 pay 50-100% more due to increased medical risks. Seniors ages 70+ may pay $300-$600 for standalone annual coverage vs. $200-$400 for younger travelers. Destination - Travel to remote areas, developing countries, or high-risk regions costs 25-50% more. Trips to Africa, South America, or Asia often cost more than European destinations. Trip duration - Longer trips cost proportionally more. A 3-month trip might cost $400-$800 for evacuation coverage vs. $100-$200 for a 2-week trip. Coverage limits - Higher limits increase costs. $500,000 coverage costs 30-50% more than $100,000 coverage. Activity coverage - Adventure activities (skiing, scuba diving, mountaineering) add 25-50% to premiums for hazardous activity coverage. Pre-existing condition waivers add 10-20% to costs. Cost comparison: A 35-year-old on a 2-week European vacation pays $150-$250 for comprehensive travel insurance including $100,000 evacuation coverage. The same traveler going to Southeast Asia for 1 month pays $250-$400 for comprehensive coverage with $250,000 evacuation. A 70-year-old couple on a 3-week cruise pays $600-$1,000 for comprehensive coverage including $250,000 evacuation per person. Annual plans make sense for frequent travelers taking 3+ international trips per year, saving money compared to per-trip coverage. Emergency evacuation insurance provides excellent value considering medical evacuation costs: helicopter rescue from a remote area can cost $25,000-$50,000, air ambulance from Caribbean to US costs $30,000-$75,000, and medical repatriation from Asia to US can exceed $100,000-$200,000. The relatively low insurance cost ($200-$500 annually) provides substantial protection against catastrophic evacuation expenses.'
  },
  {
    question: 'Does regular health insurance cover emergency medical evacuation?',
    answer: 'No, most regular health insurance plans, including employer-sponsored health insurance, Medicare, and Marketplace plans, do NOT cover emergency medical evacuation, especially international evacuation. Here\'s what different insurance types cover: Regular Health Insurance (employer plans, Marketplace plans): Generally does NOT cover medical evacuation or air ambulance transport. May cover ground ambulance transport to the nearest hospital within the US (subject to copays/deductibles of $500-$2,000+). Does NOT cover international medical evacuation or repatriation of remains. Some plans exclude air ambulance entirely or cover only a small percentage, leaving you with bills of $25,000-$100,000. Medicare: Original Medicare Part B covers ambulance transport only when other transportation endangers your health, and only to the nearest facility. Medicare does NOT cover any medical care or evacuation outside the United States (except very limited situations in Canada/Mexico). Medicare Advantage plans may include limited emergency coverage abroad but rarely cover full medical evacuation. Medicare Supplement (Medigap) plans may include limited foreign travel emergency coverage (up to $50,000 lifetime) but this is for medical care, not evacuation transport. Medicare beneficiaries need separate travel medical and evacuation insurance for international travel. Medicaid: Does NOT cover any medical care or evacuation outside your home state, with very limited exceptions. Travel Health Insurance: Includes emergency medical coverage abroad but may have limited or no evacuation coverage unless specifically stated. Check policy details carefully - many travel medical plans cap evacuation at $25,000-$50,000, which may be insufficient for long-distance evacuations. Emergency Evacuation Insurance: Specifically designed to cover emergency medical transport with limits of $100,000-$1,000,000. This is the only insurance specifically designed for evacuation scenarios. Credit Card Coverage: Premium travel credit cards (Chase Sapphire Reserve, AmEx Platinum) may include emergency evacuation coverage of $100,000-$500,000 when you book travel with the card, but coverage details vary - always verify what\'s included. Real-world evacuation costs without insurance: Medical helicopter rescue in remote area: $20,000-$50,000. Air ambulance from Caribbean to Miami: $30,000-$75,000. Medical evacuation from Europe to US: $50,000-$125,000. Evacuation from Asia/Africa to US: $100,000-$200,000+. Repatriation of remains from abroad: $15,000-$50,000. Without emergency evacuation insurance, you or your family would be responsible for these costs out-of-pocket, which can be financially devastating. If you travel internationally, to remote areas, on cruises, or to destinations with limited medical facilities, emergency evacuation insurance is essential coverage that your regular health insurance almost certainly does not provide.'
  },
  {
    question: 'When do I need emergency evacuation insurance?',
    answer: 'Emergency evacuation insurance is essential for specific travel scenarios where medical evacuation risks are elevated and costs would be catastrophic. You need emergency evacuation insurance when: International travel - Any trip outside your home country, as Medicare and most US health insurance don\'t cover medical care or evacuation abroad. A medical emergency in Europe, Asia, Caribbean, or South America could require evacuation costing $50,000-$200,000. Remote destinations - Travel to areas far from major medical facilities including rural areas, islands, mountains, or developing countries. If the nearest hospital with adequate care is hundreds of miles away, ground transport isn\'t feasible and air evacuation is necessary. Cruise vacations - Ships have limited medical facilities and serious conditions require evacuation to shore hospitals via helicopter or boat, often costing $25,000-$75,000. Medical evacuation from a ship in the middle of the ocean is one of the most expensive scenarios. Adventure travel - Activities like mountain climbing, trekking, skiing, scuba diving, safari tours, or remote camping increase injury risk and likelihood of needing evacuation from difficult-to-access locations. Helicopter rescue from mountains can cost $25,000-$50,000. Elderly travelers - Seniors over 65 have higher risk of medical emergencies like heart attacks, strokes, or falls requiring emergency transport. Those with pre-existing conditions (heart disease, diabetes, COPD) face elevated risks. Long trips abroad - Extended international stays (3+ months) or sabbaticals abroad increase exposure to medical emergencies and evacuation needs. Annual evacuation coverage makes sense for extended travel. Travel to countries with limited medical care - Destinations in Africa, Central America, Southeast Asia, or other regions where local hospitals may not provide adequate care for serious conditions, requiring evacuation to major medical centers. Business travel - Frequent international business travelers should carry annual evacuation coverage. Corporate travel insurance may include this, but verify coverage limits and scenarios. Living abroad - Expatriates, digital nomads, and long-term overseas residents need annual emergency evacuation insurance as part of their international health insurance. Travel during natural disaster season - Trips during hurricane season (Caribbean, Gulf Coast, June-November), typhoon season (Asia), earthquake zones, or volcano-prone areas where natural disasters could necessitate emergency evacuation. You may NOT need evacuation insurance for: Domestic travel within the US (ground ambulance is usually covered by regular health insurance, though air ambulance may not be). Short trips to developed countries with excellent medical facilities (though coverage still provides peace of mind). Travel to destinations easily accessible to major hospitals. Travelers with premium credit cards that include evacuation coverage (verify limits and exclusions first). Best practice: Purchase emergency evacuation insurance ($100-$500 annually) or comprehensive travel insurance including evacuation coverage (4-8% of trip cost) for any international travel, remote destinations, cruises, or adventure activities. The relatively small premium cost is worthwhile protection against evacuation costs that could exceed $100,000-$200,000 and potentially cause financial devastation.'
  },
  {
    question: 'What is the difference between emergency evacuation and medical repatriation?',
    answer: 'Emergency evacuation and medical repatriation are related but distinct services covered by travel insurance, each serving different purposes in emergency medical situations abroad. Emergency Medical Evacuation: Definition: Emergency transport from your current location to the nearest adequate medical facility when local facilities cannot provide necessary care. When it occurs: During an active medical emergency requiring immediate specialized care not available locally. Transport options: Air ambulance (fixed-wing aircraft or helicopter), ground ambulance with medical equipment and staff, or combination transport. Medical personnel: Staffed by emergency medical technicians, paramedics, flight nurses, or physicians depending on patient condition. Distance: Usually transport to the nearest facility capable of treating your condition - could be 50 miles or 500 miles depending on location and medical needs. Timeline: Happens quickly during acute medical crisis, often within hours of the emergency. Coverage limits: Typically $100,000-$500,000 per evacuation. Example: You have a heart attack while trekking in a remote area of Nepal. Emergency evacuation transports you via helicopter to Kathmandu, then by air ambulance to a cardiac center in Bangkok, Thailand (cost: $75,000-$125,000). Medical Repatriation: Definition: Non-emergency medical transport back to your home country or preferred hospital after you\'re medically stable following treatment abroad. When it occurs: After initial emergency treatment and stabilization, when doctors determine you can safely travel but still require ongoing medical care or recovery at home. Transport options: Commercial airline with medical escort, air ambulance with medical staff, or specialized medical transport aircraft depending on medical needs. Medical personnel: Medical escorts (nurses, physicians) accompany commercial flights, or full medical staff on dedicated medical flights. Distance: Usually long-distance international transport back to your home country. Timeline: Happens days or weeks after initial emergency, once you\'re stable enough for transport. Coverage limits: Often included in evacuation coverage up to the policy maximum, or separately listed as $25,000-$100,000. Example: After the heart attack in Nepal and treatment in Bangkok, you\'re stable but need cardiac rehabilitation. Medical repatriation arranges transport back to a hospital near your home in the US with a medical escort on a commercial flight (cost: $15,000-$50,000) or via dedicated medical flight ($75,000-$150,000 if required). Key Differences Summary: Timing: Evacuation is immediate during emergency; repatriation is planned after stabilization. Urgency: Evacuation is urgent/life-threatening; repatriation is medically necessary but not emergency. Destination: Evacuation goes to nearest adequate facility; repatriation goes home. Medical condition: Evacuation for acute, unstable patients; repatriation for stable patients requiring continued care. Most comprehensive travel insurance and emergency evacuation insurance policies cover BOTH emergency evacuation and medical repatriation under the same benefit limit (typically $100,000-$500,000 combined). Some policies list them separately with different limits. Real-world scenario combining both: You\'re seriously injured in a car accident in rural Thailand. Emergency evacuation transports you 200 miles to Bangkok for surgery ($25,000). After 2 weeks of treatment and recovery, medical repatriation flies you home to the US with a medical escort for ongoing rehabilitation ($50,000). Total cost: $75,000 - fully covered under your $100,000 evacuation insurance policy. Without this coverage, you or your family would be responsible for the full $75,000 out-of-pocket, which is why emergency evacuation insurance is essential for international travelers.'
  },
  {
    question: 'Does emergency evacuation insurance cover natural disasters and political unrest?',
    answer: 'Yes, comprehensive emergency evacuation insurance typically covers evacuations due to natural disasters and political unrest, but coverage has important limitations and requirements you should understand. Natural Disaster Coverage: What IS covered: Evacuation when natural disasters make your location unsafe or prevent you from leaving normally. Covered disasters include hurricanes, typhoons, earthquakes, tsunamis, volcanic eruptions, floods, wildfires, and severe storms. Transport to safety when airports close, roads are blocked, or normal transportation is unavailable. Emergency evacuation from hotels, resorts, or homes to safe locations or back home. Additional accommodation if you\'re evacuated to a safe area but cannot return home immediately. What is NOT covered: Evacuations from areas with pre-existing natural disaster warnings in effect when you purchased insurance or departed on your trip. For example, if you travel to a hurricane zone during hurricane season when a storm is already forecast, evacuation may not be covered. Evacuations that could have been avoided by leaving earlier when warnings were issued. Routine travel disruptions or inconveniences that don\'t rise to emergency evacuation level. Important considerations: Purchase insurance before natural disaster warnings are issued for your destination. Some policies require government evacuation orders to trigger coverage. Keep documentation of government warnings, evacuation orders, and expenses. Political Evacuation Coverage: What IS covered: Emergency evacuation due to political unrest, civil disturbances, riots, civil war, or terrorism at your destination. Evacuation when your government (US State Department) issues "do not travel" warnings or advises citizens to leave. Security-related evacuations including threats of kidnapping, violence, or war. Embassy-ordered or embassy-assisted evacuations. Transport to nearest safe location or back to your home country. What is NOT covered: Travel to destinations with pre-existing "do not travel" warnings when you purchased insurance or began your trip. Evacuations from war zones or areas of known conflict when you knowingly traveled there despite warnings. Voluntary departure for personal concern (not official government advisories). Evacuations due to illegal activities or intentional risk-taking. Important requirements: Political evacuation coverage often requires official government advisories or evacuation orders to trigger. Must purchase insurance before political unrest begins or warnings are issued. Keep documentation of State Department warnings, embassy communications, and official evacuation notices. Coverage Limits and Coordination: Natural disaster and political evacuations typically share the same benefit limit as medical evacuation ($100,000-$500,000). Some comprehensive policies have separate limits for non-medical evacuations ($10,000-$50,000). Evacuation coverage coordinates with trip cancellation/interruption coverage - you may receive both benefits in some scenarios. Real-world examples of covered evacuations: Hurricane evacuation from Caribbean resort when airport closes and you need private boat transport to nearest operating airport ($5,000-$15,000). Earthquake evacuation from Japan when infrastructure is damaged and commercial flights are unavailable, requiring chartered transport ($25,000-$75,000). Political unrest evacuation from Middle East when US Embassy advises citizens to leave immediately and arranges charter flights ($10,000-$50,000). Volcano evacuation from Iceland when ash clouds close airports and you need ground transport to another country ($5,000-$10,000). Best practices for natural disaster and political evacuation coverage: Purchase comprehensive travel insurance with evacuation coverage immediately after booking your trip. Monitor State Department travel advisories and weather forecasts before and during travel. Register with the US Embassy\'s Smart Traveler Enrollment Program (STEP) for emergency notifications. Keep copies of insurance policy, emergency contact numbers, and policy numbers accessible while traveling. Don\'t wait until the last minute to evacuate - insurance may not cover evacuations that could have been prevented. Follow government evacuation orders promptly. Emergency evacuation insurance provides essential protection for natural disasters and political unrest, which are unpredictable events that can occur even in popular, safe destinations, making this coverage valuable for all international travelers.'
  },
  {
    question: 'How do I file an emergency evacuation insurance claim?',
    answer: 'Filing an emergency evacuation insurance claim involves specific steps during the emergency and after you\'re safe. The claims process differs from typical insurance claims because evacuations are urgent, life-threatening situations requiring immediate action. Here\'s the complete process: DURING THE EMERGENCY (Time-Sensitive Steps): Step 1: Call emergency assistance immediately (do NOT try to arrange evacuation yourself). Every evacuation insurance policy includes 24/7 emergency assistance phone numbers. Call this number as soon as you experience a medical emergency, natural disaster, or other evacuation-triggering event. The insurance company\'s emergency response team will: Verify your coverage and benefits, coordinate with local medical facilities or emergency services, arrange and pay for evacuation directly (no upfront payment required in most cases), handle logistics including transport, medical staff, and destination facility, and communicate with family members. Step 2: Provide necessary information to the assistance coordinator: Policy number and confirmation of coverage. Current location (be as specific as possible - hotel name, address, GPS coordinates). Nature of emergency (medical condition, natural disaster, political situation). Contact phone number and alternate contact (family member). Any immediate medical needs or medications. Step 3: Follow instructions from the emergency assistance coordinator. They will direct the evacuation process and tell you exactly what to do. Do NOT make your own evacuation arrangements without approval, as unauthorized evacuations may not be covered. Step 4: Keep all documentation during the emergency. Save any receipts if you must pay for anything upfront (medications, initial transport, communication costs). Take photos/videos of the emergency situation if safely possible. Get names and contact information of medical providers, emergency responders, and anyone involved in your care. AFTER THE EVACUATION (Formal Claims Process): Step 5: Contact the insurance company\'s claims department (different from emergency assistance). Most insurers require formal written claim submission within 20-90 days of the incident. Get claim forms from the insurer\'s website or request them by phone. Step 6: Gather required documentation for your claim: Completed claim form with detailed description of the emergency. Copy of your insurance policy and proof of coverage. Medical records from initial treatment and evacuation (hospital reports, physician notes, diagnosis, treatment summary). Proof of evacuation (transport records, air ambulance invoices, medical escort documentation). All receipts and invoices for expenses you paid out-of-pocket. Government warnings, evacuation orders, or embassy communications (for natural disaster/political evacuations). Travel documents (flight itinerary, hotel reservations, trip dates). Proof of trip cost if combined with trip interruption claim. Step 7: Submit your claim package. Send via methods specified by the insurer (online portal, email, mail). Keep copies of everything you submit. Request confirmation of receipt. Step 8: Follow up regularly. Claims processing typically takes 15-45 days depending on complexity. Contact the claims adjuster if you don\'t hear back within 2-3 weeks. Respond promptly to any requests for additional information or documentation. Important claim tips: The insurance company usually pays evacuation providers directly - you shouldn\'t need to pay $50,000+ upfront and seek reimbursement. If you must pay upfront in an emergency, get detailed receipts and documentation for full reimbursement. Medical evacuations require physician certification that local facilities were inadequate and evacuation was medically necessary. Pre-existing conditions may not be covered unless you purchased coverage within 10-21 days of initial trip deposit with pre-existing condition waiver. Keep your insurance card, policy number, and emergency phone numbers accessible while traveling (in your phone, wallet, and luggage). Common claim issues to avoid: Not calling the emergency assistance number before arranging evacuation (self-arranged evacuations may be denied). Insufficient medical documentation proving evacuation was necessary. Missing receipts or incomplete documentation. Filing claim after the deadline (know your policy\'s time limits). Traveling to destinations with pre-existing warnings without disclosing this. Best practice: When you purchase emergency evacuation insurance, immediately save the 24/7 emergency assistance phone number in your phone under "Emergency Evacuation" and share it with traveling companions. Make sure family members at home also have this number in case they need to coordinate on your behalf if you\'re unable to call yourself. The faster you contact the insurance company during an emergency, the more smoothly the evacuation and claims process will proceed.'
  }
]
