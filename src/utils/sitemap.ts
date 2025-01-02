import { router } from '@/routes'
import type { RouteObject } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_SITE_URL || 'https://yoursite.com'

interface SitemapPage {
  url: string
  changefreq: string
  priority: number
}

const flattenRoutes = (routes: RouteObject[]): string[] => {
  return routes
    .reduce<string[]>((paths, route) => {
      const path = route.path || ''
      const childPaths = route.children ? flattenRoutes(route.children) : []
      return [...paths, path, ...childPaths]
    }, [])
    .filter(Boolean)
}

export const generateSitemap = () => {
  const paths = flattenRoutes(router.routes)
  const pages: SitemapPage[] = paths.map((path) => ({
    url: `${baseUrl}${path}`,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.8,
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `
    )
    .join('')}
</urlset>`

  return xml
}
