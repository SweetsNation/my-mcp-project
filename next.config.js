/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Force dynamic rendering to avoid hydration issues
  output: 'standalone',
  // Disable static generation completely
  trailingSlash: false,
  experimental: {
    // Disable static optimization for problematic pages
    workerThreads: false,
    cpus: 1,
  },
  images: {
    // Allowed domains for external images
    domains: [
      'localhost',
      'cdn.elmaginsurance.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos',
      'cloudinary.com',
      'res.cloudinary.com',
    ],
    // Image formats supported
    formats: ['image/webp', 'image/avif'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable optimization
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Minimize automatic static optimization interference
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async redirects() {
    return [
      // Redirect HTTP to HTTPS in production
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://elmag-insurance.com/:path*',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.elmag-insurance.com',
          },
        ],
        destination: 'https://elmag-insurance.com/:path*',
        permanent: true,
      },
      // Legacy WordPress URL redirects
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/medicare/',
        destination: '/medicare-advantage',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/medicare-supplements/',
        destination: '/medicare-supplement-plan-g',
        permanent: true,
      },
      {
        source: '/medicare-supplements/supplement-plan-comparison/',
        destination: '/medicare-supplement-plan-g/comparison',
        permanent: true,
      },
      {
        source: '/under-65-health/marketplace-aca/',
        destination: '/health-insurance-marketplace',
        permanent: true,
      },
      {
        source: '/under-65-health/',
        destination: '/health-insurance-marketplace',
        permanent: true,
      },
      {
        source: '/medicare-advantage/',
        destination: '/medicare-advantage',
        permanent: true,
      },
      {
        source: '/medicare-advantage/chronic-special-needs-plans/',
        destination: '/medicare-advantage',
        permanent: true,
      },
      {
        source: '/medicare-advantage/dual-special-needs-plans/',
        destination: '/medicare-advantage',
        permanent: true,
      },
      {
        source: '/medicare-part-d/',
        destination: '/medicare-part-d',
        permanent: true,
      },
      {
        source: '/medicare/part-b-premium-give-back/',
        destination: '/part-b-premium-give-back',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/credit-repair/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/privacy-policy-terms-of-service/',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/thank-you/',
        destination: '/contact',
        permanent: true,
      },
      // Old blog post redirects
      {
        source: '/how-will-medicare-benefit-you/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/is-there-a-medigap-plan-that-covers-everything/',
        destination: '/medicare-supplement-plan-g',
        permanent: true,
      },
      {
        source: '/hello-world/',
        destination: '/medicare-part-d',
        permanent: true,
      },
      {
        source: '/what-to-do-during-the-medicare-aep/',
        destination: '/medicare-open-enrollment-2025',
        permanent: true,
      },
      {
        source: '/what-are-the-different-parts-of-medicare/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/how-to-preparing-for-the-annual-enrollment-period/',
        destination: '/medicare-open-enrollment-checklist',
        permanent: true,
      },
      {
        source: '/do-i-have-to-use-the-annual-enrollment-period/',
        destination: '/enrollment-timeline',
        permanent: true,
      },
      {
        source: '/looking-for-2021-health-coverage/',
        destination: '/health-insurance-marketplace',
        permanent: true,
      },
      {
        source: '/health-insurance-made-easy/',
        destination: '/health-insurance-marketplace',
        permanent: true,
      },
      // Archive and tag pages redirect to relevant sections
      {
        source: '/blog/page/:page*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/author/:author*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tag/:tag*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/category/:category*',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/medicare-advantage-plans/:path*',
        destination: '/medicare-advantage/:path*',
      },
    ];
  },
  async headers() {
    return [
      // Security headers for all routes
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache headers for static assets
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(favicon.ico|robots.txt|sitemap.xml)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      // Font caching
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // CSS and JS caching
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;