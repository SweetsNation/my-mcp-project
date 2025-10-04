import { Metadata } from 'next';

interface OpenGraphMetadataParams {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

/**
 * Generates complete Open Graph and Twitter Card metadata for pages
 * Ensures all required OG tags are present for proper social media sharing
 */
export function generatePageMetadata({
  title,
  description,
  url,
  image = '/images/og-default.jpg', // Default OG image
  imageAlt = 'El-Mag Insurance - Medicare and Health Insurance Solutions',
  type = 'website',
  keywords,
}: OpenGraphMetadataParams): Metadata {
  const baseUrl = 'https://www.elmaginsurance.com';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'El-Mag Insurance',
      locale: 'en_US',
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generates metadata specifically for Medicare Advantage location pages
 */
export function generateMedicareAdvantageMetadata({
  location,
  stateName,
  planCount,
  customDescription,
}: {
  location: string;
  stateName: string;
  planCount?: number;
  customDescription?: string;
}): Metadata {
  const title = `Medicare Advantage Plans ${location} ${new Date().getFullYear()} | Best MA Plans ${stateName}`;
  const description =
    customDescription ||
    `Find the best Medicare Advantage plans in ${location}, ${stateName}. Compare ${planCount ? `${planCount} ` : ''}plans with $0 premiums, dental, vision & prescription coverage. Licensed agents ready to help.`;

  return generatePageMetadata({
    title,
    description,
    url: `/medicare-advantage/${location.toLowerCase().replace(/\s+/g, '-')}`,
    image: '/images/og-medicare-advantage.jpg',
    imageAlt: `Medicare Advantage Plans in ${location}, ${stateName}`,
    keywords: `Medicare Advantage ${location}, Medicare plans ${stateName}, ${location} health insurance, Medicare ${stateName}, senior health coverage ${location}`,
  });
}

/**
 * Generates metadata for blog posts
 */
export function generateBlogPostMetadata({
  title,
  description,
  slug,
  image,
  publishedDate,
  author = 'El-Mag Insurance',
}: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedDate?: string;
  author?: string;
}): Metadata {
  const metadata = generatePageMetadata({
    title: `${title} | El-Mag Insurance Blog`,
    description,
    url: `/blog/${slug}`,
    image: image || '/images/og-blog.jpg',
    imageAlt: title,
    type: 'article',
  });

  // Add article-specific Open Graph properties
  if (metadata.openGraph && publishedDate) {
    metadata.openGraph.publishedTime = publishedDate;
    metadata.openGraph.authors = [author];
  }

  return metadata;
}

