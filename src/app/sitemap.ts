import type { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/lib/case-studies'

export const dynamic = 'force-static'

const SITE_URL = 'https://inm1nd.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/projects', ...CASE_STUDIES.map((study) => `/projects/${study.slug}`), '/about', '/applications', '/contact']
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: path === '' ? 1 : 0.8,
  }))
}
