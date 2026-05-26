import { client } from '@/sanity/lib/client'
import { ADMIN_STATS_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'

type Stats = {
  branches: number
  promos: number
  tournaments: number
  merchandise: number
  franchisePackages: number
  posts: number
  recentPosts: Array<{
    _id: string
    title: string | null
    slug: string | null
    publishedAt: string | null
  }>
}

const statCards = [
  { key: 'posts', label: 'Artikel Blog', href: '/admin/blog', color: 'text-blue' },
  { key: 'branches', label: 'Cabang', href: '/admin/cabang', color: 'text-teal' },
  { key: 'promos', label: 'Promo Aktif', href: '/admin/promo', color: 'text-orange' },
  { key: 'tournaments', label: 'Event / Tournament', href: '/admin/tournament', color: 'text-orange-2' },
  { key: 'merchandise', label: 'Merchandise', href: '/admin/merchandise', color: 'text-teal-2' },
  { key: 'franchisePackages', label: 'Paket Franchise', href: '/admin/franchise', color: 'text-orange' },
] as const

export default async function AdminPage() {
  const stats: Stats = await client.fetch(ADMIN_STATS_QUERY)

  return (
    <div className="p-8 max-w-[1000px]">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-condensed font-black text-[32px] leading-none">Dashboard</h1>
        <p className="font-body text-text-2 text-[13px] mt-1">
          Kelola seluruh konten website 911 Billiard
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {statCards.map(({ key, label, href, color }) => (
          <Link
            key={key}
            href={href}
            className="bg-bg-2 border border-white/8 rounded-xl p-5 hover:border-orange/30 transition-colors group"
          >
            <div className={`font-condensed font-black text-[40px] leading-none ${color} mb-1`}>
              {stats[key]}
            </div>
            <div className="font-body text-[12px] text-text-2 group-hover:text-text transition-colors">
              {label}
            </div>
            <div className="font-body text-[11px] text-text-3 mt-3">
              Kelola →
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-bg-2 border border-white/8 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
          <h2 className="font-condensed font-bold text-[16px] tracking-wide">Artikel Terbaru</h2>
          <Link
            href="/studio/structure/post"
            target="_blank"
            className="font-body text-[12px] text-orange hover:text-orange-2 transition-colors flex items-center gap-1"
          >
            Kelola Blog
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </div>

        {stats.recentPosts.length === 0 ? (
          <div className="px-6 py-10 text-center font-body text-[13px] text-text-3">
            Belum ada artikel. Mulai buat di Sanity Studio.
          </div>
        ) : (
          <ul className="divide-y divide-white/5">
            {stats.recentPosts.map((post) => (
              <li key={post._id} className="flex items-center gap-4 px-6 py-4 hover:bg-white/3 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="font-body text-[13px] text-text truncate">{post.title ?? '—'}</div>
                  <div className="font-body text-[11px] text-text-3 mt-0.5">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('id-ID', {
                          day: 'numeric', month: 'long', year: 'numeric',
                        })
                      : 'Draft'}
                  </div>
                </div>
                {post.slug && (
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="font-body text-[11px] text-text-3 hover:text-orange transition-colors shrink-0"
                  >
                    Lihat →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Quick Links */}
      <div className="mt-6 p-5 bg-bg-2 border border-white/8 rounded-xl">
        <h3 className="font-condensed font-bold text-[14px] tracking-wide mb-3 text-text-2">
          Link Cepat
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Lihat Website', href: '/' },
            { label: 'Blog Publik', href: '/blog' },
            { label: 'Halaman Cabang', href: '/cabang' },
            { label: 'Sanity Studio', href: '/studio' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              className="font-body text-[12px] px-3 py-1.5 rounded-lg border border-white/8 text-text-2 hover:text-text hover:border-orange/30 transition-colors"
            >
              {label} ↗
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
