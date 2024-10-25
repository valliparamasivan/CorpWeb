/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['corpfield.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    scrollRestoration: true,
  },

  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  },

  async headers() {
    return [
      {
        source: '/public/images',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          ...config.resolve.fallback,
        };
      }
      config.devtool = 'source-map';
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          cacheGroups: {
            default: false,
            vendors: false,
          },
          chunks: 'all',
          maxInitialRequests: 5, 
        },
        runtimeChunk: {
          name: 'runtime',
        },
      };
    }
    return config;
  },
};

export default nextConfig;
