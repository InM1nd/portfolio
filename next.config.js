/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const useBasePath = process.env.USE_BASE_PATH === 'true' || isProduction

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(useBasePath && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
  }),
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    }
    return config
  },
  turbopack: {
    // Turbopack config - пустой, так как используем webpack для алиасов
  },
}

module.exports = nextConfig

