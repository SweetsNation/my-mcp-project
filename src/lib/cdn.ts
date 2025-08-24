/**
 * CDN and asset optimization utilities
 */

// Get CDN base URL from environment
export const CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_URL || '';

/**
 * Generates a CDN URL for static assets
 */
export function getCDNUrl(assetPath: string): string {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // Return CDN URL if available, otherwise use relative path
  return CDN_BASE_URL ? `${CDN_BASE_URL}/${cleanPath}` : `/${cleanPath}`;
}

/**
 * Generates optimized image URLs with query parameters
 */
export function getOptimizedImageUrl(
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  } = {}
): string {
  // If it's already a full URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const baseUrl = getCDNUrl(src);
  const params = new URLSearchParams();

  if (options.width) params.append('w', options.width.toString());
  if (options.height) params.append('h', options.height.toString());
  if (options.quality) params.append('q', options.quality.toString());
  if (options.format) params.append('f', options.format);
  if (options.fit) params.append('fit', options.fit);

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
}

/**
 * Preload critical images for better performance
 */
export function preloadImage(src: string, options?: { priority?: boolean }): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = options?.priority ? 'preload' : 'prefetch';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Generate responsive image srcSet for different screen sizes
 */
export function generateSrcSet(
  src: string,
  widths: number[] = [640, 768, 1024, 1280, 1536],
  format: 'webp' | 'avif' | 'jpeg' | 'png' = 'webp'
): string {
  return widths
    .map(width => {
      const url = getOptimizedImageUrl(src, { width, format, quality: 85 });
      return `${url} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate responsive sizes attribute for images
 */
export function generateSizes(breakpoints: { [key: string]: string } = {}): string {
  const defaultBreakpoints = {
    '(max-width: 640px)': '100vw',
    '(max-width: 768px)': '75vw',
    '(max-width: 1024px)': '50vw',
    '(max-width: 1280px)': '33vw',
    default: '25vw'
  };

  const merged = { ...defaultBreakpoints, ...breakpoints };
  const sizes = Object.entries(merged)
    .filter(([key]) => key !== 'default')
    .map(([query, size]) => `${query} ${size}`)
    .join(', ');

  return `${sizes}, ${merged.default}`;
}

/**
 * Image quality settings based on use case
 */
export const IMAGE_QUALITY = {
  thumbnail: 70,
  card: 80,
  hero: 90,
  print: 95
} as const;

/**
 * Common responsive breakpoints
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536
} as const;

/**
 * Supported image formats in order of preference
 */
export const SUPPORTED_FORMATS = ['avif', 'webp', 'jpeg'] as const;

/**
 * Default sizes for common image types
 */
export const DEFAULT_SIZES = {
  hero: '100vw',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  thumbnail: '(max-width: 768px) 25vw, 150px',
  avatar: '(max-width: 768px) 10vw, 64px',
  full: '100vw'
} as const;