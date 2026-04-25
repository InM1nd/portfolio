const isProduction = process.env.NODE_ENV === 'production'
const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL
const useBasePath = (process.env.USE_BASE_PATH === 'true' || isProduction) && !isVercel

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

