import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { BRANCH_BY_SLUG_QUERY, MENU_BY_BRANCH_QUERY, ALL_BRANCH_SLUGS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import MenuSection from '@/components/branches/MenuSection'
import GalleryLightbox from '@/components/branches/GalleryLightbox'

interface Props {
  params: Promise<{ slug: string }>
}

type SanityImage = { asset?: { _ref?: string } | null; hotspot?: unknown }

type Branch = {
  _id: string
  zone: string | null
  name: string | null
  city: string | null
  province: string | null
  address: string | null
  tables: number | null
  tags: (string | null)[] | null
  openHour: string | null
  closeHour: string | null
  mapsUrl: string | null
  photo: SanityImage | null
  gallery: (SanityImage & { _key?: string })[] | null
}

type MenuItem = {
  _id: string
  name: string | null
  price: number | null
  description: string | null
  photo: unknown
  category: string | null
  available: boolean | null
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({ query: ALL_BRANCH_SLUGS_QUERY }) as { data: { slug: string | null }[] }
  return data.filter((s) => s.slug).map((s) => ({ slug: s.slug! }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data: branch } = await sanityFetch({ query: BRANCH_BY_SLUG_QUERY, params: { slug } }) as { data: Branch | null }
  if (!branch) return {}
  const title = `911 Billiard ${branch.name} — ${branch.city}`
  const description = `Kunjungi 911 Billiard ${branch.name} di ${branch.address ?? branch.city}. ${branch.tables ? `${branch.tables} meja billiard.` : ''}`
  const image = branch.photo
    ? urlFor(branch.photo as Parameters<typeof urlFor>[0]).width(1200).height(630).fit('crop').url()
    : '/images/og-image.jpg'
  return {
    title,
    description,
    openGraph: { title, description, images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

export default async function BranchDetailPage({ params }: Props) {
  const { slug } = await params
  const [{ data: branch }, { data: menuItems }] = await Promise.all([
    sanityFetch({ query: BRANCH_BY_SLUG_QUERY, params: { slug } }) as Promise<{ data: Branch | null }>,
    sanityFetch({ query: MENU_BY_BRANCH_QUERY, params: { slug } }) as Promise<{ data: MenuItem[] }>,
  ])

  if (!branch) notFound()

  const heroUrl = branch.photo
    ? urlFor(branch.photo as Parameters<typeof urlFor>[0]).width(1400).height(700).fit('crop').url()
    : null

  const gallery = (branch.gallery ?? []).filter(Boolean)

  return (
    <main>
      {/* Hero */}
      <div className="relative h-[340px] sm:h-[440px] overflow-hidden">
        {heroUrl ? (
          <Image
            src={heroUrl}
            alt={`Suasana 911 Billiard ${branch.name}`}
            fill
            priority
            className="object-cover brightness-50"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-bg-2" />
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.95) 100%)' }}
        />

        {/* Back link */}
        <div className="absolute top-6 left-5 sm:left-10 z-10">
          <Link
            href="/cabang"
            className="inline-flex items-center gap-2 font-body text-[12px] text-white/70 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Semua Cabang
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-10 pb-8 z-10">
          <div className="max-w-[1140px] mx-auto">
            <div className="inline-block bg-bg/75 backdrop-blur-sm border border-orange/30 text-orange font-body text-[10px] tracking-[1.5px] uppercase px-2.5 py-[4px] rounded-full mb-3">
              {branch.city}
            </div>
            <h1 className="font-condensed font-black text-[clamp(32px,5vw,64px)] leading-none mb-2">
              911 BILLIARD <span className="text-orange">{branch.name?.toUpperCase()}</span>
            </h1>
            <p className="font-body text-[13px] text-text-2">
              {branch.city}{branch.province ? `, ${branch.province}` : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-5 sm:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Info card */}
            <div className="bg-bg-2 border border-white/8 rounded-2xl p-6 space-y-4">
              {/* Address */}
              {branch.address && (
                <div className="flex gap-3">
                  <div className="mt-0.5 shrink-0 text-orange">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-text-3 uppercase tracking-[1px] mb-0.5">Alamat</div>
                    <p className="font-body text-[13px] text-text-2 leading-relaxed">{branch.address}</p>
                  </div>
                </div>
              )}

              {/* Hours */}
              {(branch.openHour || branch.closeHour) && (
                <div className="flex gap-3">
                  <div className="mt-0.5 shrink-0 text-orange">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-text-3 uppercase tracking-[1px] mb-0.5">Jam Operasional</div>
                    <p className="font-body text-[13px] text-text-2">
                      {branch.openHour} – {branch.closeHour}
                    </p>
                  </div>
                </div>
              )}

              {/* Tables */}
              {branch.tables && (
                <div className="flex gap-3">
                  <div className="mt-0.5 shrink-0 text-orange">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="3" y1="15" x2="21" y2="15" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                      <line x1="15" y1="3" x2="15" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-text-3 uppercase tracking-[1px] mb-0.5">Meja Billiard</div>
                    <p className="font-body text-[13px] text-text-2">{branch.tables} meja</p>
                  </div>
                </div>
              )}

              {/* Tags */}
              {(branch.tags ?? []).length > 0 && (
                <div className="flex gap-3">
                  <div className="mt-0.5 shrink-0 text-orange">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body text-[10px] text-text-3 uppercase tracking-[1px] mb-2">Fasilitas</div>
                    <div className="flex flex-wrap gap-1.5">
                      {(branch.tags ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[10px] px-2 py-[3px] rounded-full border border-white/12 text-text-3"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Maps button */}
            {branch.mapsUrl && (
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-bg-2 hover:bg-bg-3 border border-white/8 hover:border-orange/30 text-text-2 hover:text-orange font-body text-[13px] py-3 rounded-xl transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Buka Google Maps
              </a>
            )}

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281990819911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-orange hover:bg-orange-2 text-black font-condensed font-bold text-[13px] tracking-wider uppercase py-3 rounded-xl transition-colors"
            >
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Right: Gallery + Menu */}
          <div className="lg:col-span-2 space-y-10">
            {/* Gallery */}
            {gallery.length > 0 && (
              <section>
                <h2 className="font-condensed font-black text-[clamp(24px,3vw,36px)] leading-none mb-6">
                  GALERI <span className="text-orange">FOTO</span>
                </h2>
                <GalleryLightbox
                  images={gallery.map((img, i) => ({
                    thumbUrl: urlFor(img as Parameters<typeof urlFor>[0]).width(600).height(400).fit('crop').url(),
                    fullUrl: urlFor(img as Parameters<typeof urlFor>[0]).width(1400).height(900).fit('max').url(),
                    alt: `Gallery ${branch.name} foto ${i + 1}`,
                  }))}
                />
              </section>
            )}

            {/* Menu */}
            <MenuSection items={menuItems} />
          </div>
        </div>
      </div>
    </main>
  )
}
