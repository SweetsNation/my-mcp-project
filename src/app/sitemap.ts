import { MetadataRoute } from 'next';

const baseUrl = 'https://elmag-insurance.com';

// Medicare Advantage county pages
const locations = [
  { slug: 'fairfax-county-virginia', lastModified: '2025-01-22' },
  { slug: 'wake-county-north-carolina', lastModified: '2025-01-22' },
  { slug: 'davidson-county-tennessee', lastModified: '2025-01-22' },
  { slug: 'fulton-county-georgia', lastModified: '2025-01-22' },
  { slug: 'jefferson-county-alabama', lastModified: '2025-01-22' },
];

const keywords = [
  'medicare-advantage-plans',
  'medicare-advantage-enrollment', 
  'medicare-advantage-vs-original-medicare',
  'medicare-advantage-dental-coverage',
  'medicare-advantage-vision-coverage',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/medicare-advantage`,
      lastModified: '2025-01-22', 
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/medicare-supplement-plan-g`,
      lastModified: '2025-01-22',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/medicare-supplement-plan-g/comparison`,
      lastModified: '2025-01-22',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/medicare-supplement-plan-g/quote`,
      lastModified: '2025-01-22',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/market-intelligence`,
      lastModified: '2025-01-22',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/portal`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // Resource pages
  const resourcePages = [
    {
      url: `${baseUrl}/resources/medicare-advantage-vs-original`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/dental-vision-benefits`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/understanding-costs`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/prescription-drug-coverage`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/enrollment-periods-explained`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/star-ratings-guide`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Generate location-based Medicare Advantage pages
  const locationPages = locations.map(location => ({
    url: `${baseUrl}/medicare-advantage/${location.slug}`,
    lastModified: location.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Generate keyword variation pages for each location
  const keywordVariationPages = locations.flatMap(location => 
    keywords.map(keyword => ({
      url: `${baseUrl}/medicare-advantage/${location.slug}?keyword=${encodeURIComponent(keyword.replace(/-/g, ' '))}`,
      lastModified: location.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  return [
    ...staticPages,
    ...resourcePages,
    ...locationPages,
    ...keywordVariationPages,
  ];
}