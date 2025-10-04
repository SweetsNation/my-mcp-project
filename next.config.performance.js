/** 
 * Performance-Optimized Next.js Configuration
 * This config enhances the existing next.config.js with additional optimizations
 */

/** @type {import('next').NextConfig} */
const performanceConfig = {
  // Enable React optimizations
  reactStrictMode: true,
  
  // Enable SWC minification for faster builds and smaller bundles
  swcMinify: true,
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Optimize build output
  output: 'standalone',
  
  // PoweredByHeader - Remove for security and speed
  poweredByHeader: false,
  
  // Compress pages
  compress: true,
  
  // Optimize CSS
  optimizeCss: true,
  
  // Production browser targets for better optimization
  productionBrowserSourceMaps: false, // Disable in production for faster builds
  
  // Optimize font loading
  optimizeFonts: true,
  
  // Enable experimental features for better performance
  experimental: {
    // Use Worker Threads for faster builds
    workerThreads: true,
    cpus: 4, // Use 4 CPUs for better performance (adjust based on your system)
    
    // Optimize CSS imports
    optimizeCss: true,
    
    // Optimize package imports (tree-shaking)
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
    ],
    
    // Enable turbo mode for faster dev builds
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    
    // Optimize server components
    serverActions: true,
    serverComponentsExternalPackages: [],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Enable bundle analyzer in development
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true, // Tree shaking
        sideEffects: false, // Enable aggressive tree shaking
        minimize: true,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Vendor chunk for stable caching
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
              priority: 10,
            },
            // Separate common components
            common: {
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
            // Heavy components in separate chunks
            largeComponents: {
              test: /[\\/]src[\\/]components[\\/](ContactFormLinking|EligibilityAssessment|GeographicGrouping|ContactPageClient)\.tsx/,
              name: 'large-components',
              priority: 15,
            },
          },
        },
      };
    }
    
    // Optimize performance
    config.performance = {
      hints: dev ? false : 'warning',
      maxEntrypointSize: 512000, // 500 KB
      maxAssetSize: 512000, // 500 KB
    };
    
    return config;
  },
  
  // Image optimization settings
  images: {
    domains: [
      'localhost',
      'cdn.elmaginsurance.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos',
      'cloudinary.com',
      'res.cloudinary.com',
      'www.elmaginsurance.com',
      'elmaginsurance.com',
    ],
    formats: ['image/webp', 'image/avif'], // Modern formats first
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // Enable image optimization
    unoptimized: false,
  },
  
  // Enhanced caching headers
  async headers() {
    return [
      // Security headers (keep existing ones)
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
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
      // Aggressive caching for static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year
          },
        ],
      },
      // Moderate caching for HTML pages
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400', // 1 hour, 1 day SWR
          },
        ],
      },
      // API caching
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=120', // 1 min, 2 min SWR
          },
        ],
      },
    ];
  },
  
  // Keep existing redirects and rewrites
  async redirects() {
    return [
      // Copy existing redirects from your current next.config.js
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // ... add all other existing redirects
    ];
  },
};

module.exports = performanceConfig;

