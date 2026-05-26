'use client'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type MenuItem = {
  _id: string
  name: string | null
  price: number | null
  description: string | null
  photo: unknown
  category: string | null
  available: boolean | null
}

function formatPrice(price: number | null) {
  if (price === null || price === undefined) return ''
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price)
}

export default function MenuSection({ items }: { items: MenuItem[] }) {
  const food = items.filter((i) => i.category === 'food')
  const drink = items.filter((i) => i.category === 'drink')
  const hasBoth = food.length > 0 && drink.length > 0

  const [tab, setTab] = useState<'food' | 'drink'>(food.length > 0 ? 'food' : 'drink')

  const displayed = hasBoth ? (tab === 'food' ? food : drink) : items

  if (items.length === 0) return null

  return (
    <section>
      {/* Section header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="font-condensed font-black text-[clamp(24px,3vw,36px)] leading-none">
          MENU <span className="text-orange">CAFE</span>
        </h2>

        {hasBoth && (
          <div className="flex gap-1 bg-bg-2 border border-white/8 rounded-xl p-1">
            <button
              onClick={() => setTab('food')}
              className={`font-body text-[12px] px-4 py-1.5 rounded-lg transition-colors ${
                tab === 'food'
                  ? 'bg-orange text-black font-semibold'
                  : 'text-text-2 hover:text-text'
              }`}
            >
              Makanan ({food.length})
            </button>
            <button
              onClick={() => setTab('drink')}
              className={`font-body text-[12px] px-4 py-1.5 rounded-lg transition-colors ${
                tab === 'drink'
                  ? 'bg-orange text-black font-semibold'
                  : 'text-text-2 hover:text-text'
              }`}
            >
              Minuman ({drink.length})
            </button>
          </div>
        )}
      </div>

      {!hasBoth && (food.length > 0 || drink.length > 0) && (
        <div className="mb-4">
          <span className="font-body text-[11px] tracking-[1.5px] uppercase text-text-3">
            {food.length > 0 ? 'Makanan' : 'Minuman'}
          </span>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayed.map((item) => {
          const photoUrl = item.photo
            ? urlFor(item.photo as Parameters<typeof urlFor>[0]).width(400).height(300).fit('crop').url()
            : null
          return (
            <div
              key={item._id}
              className="bg-bg-2 border border-white/8 rounded-2xl overflow-hidden group"
            >
              {/* Photo */}
              <div className="relative h-[120px] bg-bg-3">
                {photoUrl ? (
                  <Image
                    src={photoUrl}
                    alt={item.name ?? ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/10">
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                      <path d="M7 2v20" />
                      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <div className="font-condensed font-bold text-[15px] leading-tight mb-1">
                  {item.name}
                </div>
                {item.description && (
                  <p className="font-body text-[11px] text-text-3 leading-relaxed mb-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="font-condensed font-bold text-[14px] text-orange">
                  {formatPrice(item.price)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
