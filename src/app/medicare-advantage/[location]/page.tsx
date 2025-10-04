import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocationData, generatePageContent } from '@/lib/content-generator';
import { getPlansByZipCode } from '@/lib/medicare-data';
import { MedicareAdvantageTemplate } from '@/components/MedicareAdvantageTemplate';

// This would typically come from a database
const validLocations: Record<string, LocationData> = {
  'spring-tx': {
    zipCode: '77379',
    city: 'Spring',
    state: 'TX',
    county: 'Harris County',
  },
  'conway-sc': {
    zipCode: '29526',
    city: 'Conway',
    state: 'SC', 
    county: 'Horry County',
  },
  'miami-fl': {
    zipCode: '33101',
    city: 'Miami',
    state: 'FL',
    county: 'Miami-Dade County',
  },
  'atlanta-ga': {
    zipCode: '30331',
    city: 'Atlanta',
    state: 'GA',
    county: 'Fulton County',
  },
  'wake-forest-nc': {
    zipCode: '27587',
    city: 'Wake Forest',
    state: 'NC',
    county: 'Wake County',
  },
};

interface Props {
  params: {
    location: string;
  };
  searchParams: {
    keyword?: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(validLocations).map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const locationData = validLocations[params.location];
  
  if (!locationData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const keyword = searchParams.keyword || 'Medicare Advantage plans';
  const plans = getPlansByZipCode(locationData.zipCode);
  const content = generatePageContent(keyword, locationData, plans);

  return {
    title: content.title,
    description: content.metaDescription,
    keywords: `${keyword}, Medicare Advantage, ${locationData.city}, ${locationData.state}, Medicare plans, health insurance`,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: 'website',
      locale: 'en_US',
      siteName: 'El-Mag Insurance',
    ,
      images: [
        {
          url: 'https://www.elmaginsurance.com/images/og-medicare-advantage.jpg',
          width: 1200,
          height: 630,
          alt: 'Medicare Advantage Plans - El-Mag Insurance',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription,
    },
    alternates: {
      canonical: `https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app/medicare-advantage/${params.location}${searchParams.keyword ? `?keyword=${encodeURIComponent(searchParams.keyword)}` : ''}`,
    },
  };
}

export default function LocationMedicareAdvantagePage({ params, searchParams }: Props) {
  const locationData = validLocations[params.location];
  
  if (!locationData) {
    notFound();
  }

  const keyword = searchParams.keyword || 'Medicare Advantage plans';
  const plans = getPlansByZipCode(locationData.zipCode);
  const content = generatePageContent(keyword, locationData, plans);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.title,
    description: content.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'El-Mag Insurance',
      url: 'https://my-mcp-project-q7w8myfvu-eric-salinas-projects-46bb41ca.vercel.app',
      address: {
        '@type': 'PostalAddress',
        addressLocality: locationData.city,
        addressRegion: locationData.state,
        addressCountry: 'US',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      name: `${locationData.city}, ${locationData.state}`,
    },
    mainEntity: {
      '@type': 'Service',
      name: `${keyword} in ${locationData.city}`,
      description: content.metaDescription,
      provider: {
        '@type': 'Organization',
        name: 'El-Mag Insurance',
      },
      areaServed: {
        '@type': 'City',
        name: locationData.city,
        containedInPlace: {
          '@type': 'State',
          name: locationData.state,
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <MedicareAdvantageTemplate 
        locationData={locationData}
        content={content}
        plans={plans}
      />
    </>
  );
}