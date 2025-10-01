// Schema markup generator for Resources pages

export function generateResourcesPageSchema() {
  const baseUrl = 'https://elmaginsurance.com'
  const resourcesUrl = `${baseUrl}/resources`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': resourcesUrl,
        url: resourcesUrl,
        name: 'Medicare Resources & Education - El-Mag Insurance',
        description: 'Learn about Medicare Advantage plans, enrollment periods, benefits, and more with our comprehensive educational resources.',
        inLanguage: 'en-US',
        breadcrumb: {
          '@id': `${resourcesUrl}#breadcrumb`
        }
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${resourcesUrl}#breadcrumb`,
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
            name: 'Resources',
            item: resourcesUrl
          }
        ]
      },
      // CollectionPage Schema
      {
        '@type': 'CollectionPage',
        '@id': `${resourcesUrl}#collectionpage`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'Medicare Educational Resources',
          description: 'Comprehensive guides and articles about Medicare Advantage, enrollment, costs, and benefits',
          itemListElement: [
            {
              '@type': 'Article',
              position: 1,
              name: 'Medicare Advantage vs Original Medicare: Which Is Right for You?',
              description: 'Understand the key differences between Medicare Advantage and Original Medicare to make an informed decision about your healthcare coverage.',
              url: `${resourcesUrl}/medicare-advantage-vs-original`,
              datePublished: '2024-03-15',
              articleSection: 'Comparison',
              wordCount: 1200
            },
            {
              '@type': 'Article',
              position: 2,
              name: 'Medicare Enrollment Periods Explained',
              description: 'Navigate Medicare enrollment periods including Annual Open Enrollment, Special Enrollment Periods, and more.',
              url: `${resourcesUrl}/enrollment-periods-explained`,
              datePublished: '2024-03-10',
              articleSection: 'Enrollment',
              wordCount: 900
            },
            {
              '@type': 'Article',
              position: 3,
              name: 'Understanding Medicare Advantage Costs: Premiums, Deductibles, and More',
              description: 'Break down the various costs associated with Medicare Advantage plans and how to budget for your healthcare expenses.',
              url: `${resourcesUrl}/understanding-costs`,
              datePublished: '2024-03-05',
              articleSection: 'Costs',
              wordCount: 1050
            },
            {
              '@type': 'Article',
              position: 4,
              name: 'Medicare Star Ratings: What They Mean and Why They Matter',
              description: 'Learn how Medicare rates plans and what star ratings tell you about plan quality and performance.',
              url: `${resourcesUrl}/star-ratings-guide`,
              datePublished: '2024-02-28',
              articleSection: 'Quality',
              wordCount: 750
            },
            {
              '@type': 'Article',
              position: 5,
              name: 'Prescription Drug Coverage in Medicare Advantage Plans',
              description: 'Everything you need to know about Part D coverage, formularies, and pharmacy networks.',
              url: `${resourcesUrl}/prescription-drug-coverage`,
              datePublished: '2024-02-20',
              articleSection: 'Benefits',
              wordCount: 1350
            },
            {
              '@type': 'Article',
              position: 6,
              name: 'Extra Benefits: Dental, Vision, and Hearing Coverage',
              description: 'Explore the additional benefits that many Medicare Advantage plans offer beyond basic medical coverage.',
              url: `${resourcesUrl}/dental-vision-benefits`,
              datePublished: '2024-02-15',
              articleSection: 'Benefits',
              wordCount: 900
            }
          ]
        }
      },
      // FAQPage Schema for common Medicare questions
      {
        '@type': 'FAQPage',
        '@id': `${resourcesUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Medicare Advantage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Advantage (Part C) is an alternative to Original Medicare (Parts A and B) offered by private insurance companies approved by Medicare. These plans provide all the benefits of Original Medicare plus additional coverage like prescription drugs, dental, vision, and hearing. Many Medicare Advantage plans have $0 monthly premiums and include extra benefits like fitness memberships, over-the-counter allowances, and transportation to medical appointments.'
            }
          },
          {
            '@type': 'Question',
            name: 'When can I enroll in Medicare Advantage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can enroll in Medicare Advantage during several enrollment periods: Initial Enrollment Period (7 months around your 65th birthday), Annual Enrollment Period (October 15 - December 7 each year), Medicare Advantage Open Enrollment Period (January 1 - March 31 for current MA members), and Special Enrollment Periods for qualifying life events like moving, losing coverage, or qualifying for Extra Help.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does Medicare Advantage cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Advantage costs vary by plan but many have $0 monthly premiums. You still pay your Medicare Part B premium (around $174.70 in 2024). Additional costs include deductibles, copayments for services, and out-of-pocket maximums. Many plans offer additional benefits at no extra cost. Total annual costs depend on the plan you choose and how much healthcare you use, but Medicare Advantage plans have annual out-of-pocket maximums that protect you from catastrophic costs.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Medicare Advantage and Medicare Supplement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Medicare Advantage (Part C) replaces Original Medicare and is offered by private insurance companies. It includes all Medicare Part A and B benefits plus additional coverage like prescription drugs, dental, and vision. Medicare Supplement (Medigap) works alongside Original Medicare to help cover copays, coinsurance, and deductibles. Medicare Advantage often has lower premiums but uses provider networks, while Medicare Supplement typically has higher premiums but allows you to see any Medicare-accepting provider nationwide.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Medicare Advantage cover prescription drugs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most Medicare Advantage plans include prescription drug coverage (Part D) at no additional cost beyond the plan premium. These Medicare Advantage Prescription Drug (MAPD) plans cover generic and brand-name medications with different cost tiers. Each plan has a formulary (list of covered drugs) and preferred pharmacy networks. If you choose a Medicare Advantage plan without drug coverage, you can add a standalone Part D plan, but it\'s usually more convenient to choose an MAPD plan with integrated drug coverage.'
            }
          }
        ]
      }
    ]
  }
}
