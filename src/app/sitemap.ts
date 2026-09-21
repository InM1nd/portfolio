import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const SITE_URL = 'https://inm1nd.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/projects', '/about', '/applications', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: path === '' ? 1 : 0.8,
  }))
}
