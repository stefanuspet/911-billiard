import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { siteUrl } from '@/lib/metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const [branches, posts] = await Promise.all([
    client.fetch<{ slug: string }[]>(
      `*[_type == "branch" && defined(slug.current)] { "slug": slug.current }`,
      {},
      { next: { revalidate: 3600 } },
    ),
    client.fetch<{ slug: string }[]>(
      `*[_type == "post" && defined(slug.current)] { "slug": slug.current }`,
      {},
      { next: { revalidate: 3600 } },
    ),
  ])

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/cabang`,            lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${siteUrl}/franchise`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/promo`,             lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${siteUrl}/blog`,              lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${siteUrl}/merchandise`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/tentang`,           lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/kontak`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const branchPages: MetadataRoute.Sitemap = branches.map((b) => ({
    url: `${siteUrl}/cabang/${b.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...branchPages, ...blogPages]
}
