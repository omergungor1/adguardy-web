/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel deployment optimizasyonları
  poweredByHeader: false,

  // Image optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compression
  compress: true,

  // React strict mode
  reactStrictMode: true,

  // Output standalone için optimizasyon
  output: 'standalone',

  // Experimental optimizasyonlar
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // Headers - CDN ve güvenlik için
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
      // Statik dosyalar için agresif cache
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // tracker.js için özel cache stratejisi
      {
        source: '/js/tracker.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
          },
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, OPTIONS',
          },
          {
            key: 'Timing-Allow-Origin',
            value: '*',
          },
        ],
      },
      // Tüm JS dosyaları için cache
      {
        source: '/js/:path*.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // İkon ve görseller için cache
      {
        source: '/:path*\\.(ico|jpg|jpeg|png|gif|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Font dosyaları için cache
      {
        source: '/:path*\\.(woff|woff2|ttf|otf|eot)',
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

export default nextConfig;
