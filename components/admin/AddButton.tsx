'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddButton({ href }: { href: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)
    router.push(href)
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-orange text-black font-condensed font-bold text-[13px] tracking-wider uppercase px-5 py-2.5 rounded-lg hover:bg-orange-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
          </svg>
          Loading...
        </>
      ) : (
        '+ Tambah Baru'
      )}
    </button>
  )
}
