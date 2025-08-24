import { MedicarePlan } from '@/types/medicare';
import { LocationData } from '@/lib/content-generator';

interface Props {
  locationData?: LocationData;
  plans?: MedicarePlan[];
  keyword?: string;
}

export function SEOStructuredData({ locationData, plans, keyword = 'Medicare Advantage plans' }: Props) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'El-Mag Insurance',
    url: 'https://elmaginsurance.com',
    logo: 'https://elmaginsurance.com/logo.png',
    description: 'Licensed insurance agency specializing in Medicare Advantage plans and Medicare supplements.',
    telephone: '+1-331-343-2584',
    email: 'submissions@elmaginsurance.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: locationData?.city || 'United States',
      addressRegion: locationData?.state || 'US',
    },
    sameAs: [
      'https://www.facebook.com/elmaginsurance',
      'https://www.linkedin.com/company/elmag-insurance',
      'https://twitter.com/elmaginsurance',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-331-343-2584',
      contactType: 'customer service',
      availableLanguage: 'English',
      hoursAvailable: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const serviceSchema = locationData ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${keyword} in ${locationData.city}, ${locationData.state}`,
    description: `Compare and enroll in Medicare Advantage plans in ${locationData.city}, ${locationData.state}. Free consultation with licensed agents.`,
    provider: {
      '@type': 'Organization',
      name: 'El-Mag Insurance',
      url: 'https://elmaginsurance.com',
    },
    areaServed: {
      '@type': 'City',
      name: locationData.city,
      containedInPlace: {
        '@type': 'State',
        name: locationData.state,
        containedInPlace: {
          '@type': 'Country',
          name: 'United States',
        },
      },
    },
    serviceType: 'Insurance Services',
    category: 'Medicare Advantage Plans',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free consultation and plan comparison',
      availability: 'https://schema.org/InStock',
    },
  } : null;

  const productsSchema = plans && plans.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Medicare Advantage Plans${locationData ? ` in ${locationData.city}, ${locationData.state}` : ''}`,
    description: `List of available Medicare Advantage plans${locationData ? ` in ${locationData.city}, ${locationData.state}` : ''}`,
    numberOfItems: plans.length,
    itemListElement: plans.slice(0, 10).map((plan, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: plan.name,
        description: `${plan.carrier} ${plan.type} Medicare Advantage plan with ${plan.premium === 0 ? '$0' : '$' + plan.premium} monthly premium`,
        brand: {
          '@type': 'Brand',
          name: plan.carrier,
        },
        category: 'Medicare Advantage Plan',
        offers: {
          '@type': 'Offer',
          price: plan.premium.toString(),
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: plan.premium.toString(),
            priceCurrency: 'USD',
            unitText: 'monthly',
          },
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: plan.rating.toString(),
          bestRating: '5',
          worstRating: '1',
          reviewCount: 250,
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Plan Type',
            value: plan.type,
          },
          {
            '@type': 'PropertyValue',
            name: 'Medical Deductible',
            value: `$${plan.deductible}`,
          },
          {
            '@type': 'PropertyValue',
            name: 'Max Out of Pocket',
            value: `$${plan.maxOutOfPocket}`,
          },
          {
            '@type': 'PropertyValue',
            name: 'Dental Coverage',
            value: plan.dental ? 'Yes' : 'No',
          },
          {
            '@type': 'PropertyValue',
            name: 'Vision Coverage',
            value: plan.vision ? 'Yes' : 'No',
          },
        ],
      },
    })),
  } : null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Medicare Advantage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Medicare Advantage (Part C) is a private health plan that replaces Original Medicare. It includes all Medicare Part A and Part B benefits, plus often includes prescription drug coverage (Part D) and additional benefits like dental, vision, and hearing aids.',
        },
      },
      {
        '@type': 'Question',
        name: 'When can I enroll in Medicare Advantage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enroll in Medicare Advantage during the Annual Open Enrollment Period (October 15 - December 7), Medicare Advantage Open Enrollment Period (January 1 - March 31), or when you first become eligible for Medicare.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do Medicare Advantage plans cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Medicare Advantage plans have $0 monthly premiums. However, you still pay your Medicare Part B premium. Plans may have deductibles, copayments, and coinsurance that vary by plan.',
        },
      },
      {
        '@type': 'Question',
        name: locationData ? `What Medicare Advantage plans are available in ${locationData.city}, ${locationData.state}?` : 'What Medicare Advantage plans are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locationData 
            ? `Residents of ${locationData.city}, ${locationData.state} have access to ${plans?.length || 'several'} Medicare Advantage plans from top-rated carriers. Plans include $0 premium options and extra benefits like dental, vision, and fitness programs.`
            : 'Medicare Advantage plans vary by location. Enter your ZIP code to see all available plans in your area, including $0 premium options and plans with extra benefits.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      )}
      {productsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productsSchema),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}