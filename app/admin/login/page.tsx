'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [showManual, setShowManual] = useState(false)
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleManualSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })

    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      const data = await res.json()
      setError(data.error ?? 'Login gagal')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="font-condensed font-black text-[28px] text-orange tracking-wider mb-1">
            911 BILLIARD
          </div>
          <div className="font-body text-text-2 text-[13px]">Admin Panel</div>
        </div>

        <div className="bg-bg-2 border border-white/8 rounded-2xl p-8">
          <h1 className="font-condensed font-bold text-[18px] tracking-wide mb-2">
            Masuk ke Dashboard
          </h1>
          <p className="font-body text-[12px] text-text-3 mb-6 leading-relaxed">
            Login menggunakan akun Sanity Studio kamu.
          </p>

          {/* Primary: via Studio */}
          <Link
            href="/studio/admin-panel"
            className="flex items-center justify-center gap-2 w-full bg-orange text-black font-condensed font-bold text-[14px] tracking-wider uppercase py-3 rounded-lg hover:bg-orange-2 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            Login via Sanity Studio
          </Link>

          <p className="font-body text-[11px] text-text-3 text-center mt-3 leading-relaxed">
            Kamu akan diarahkan ke Studio untuk login,<br />
            lalu otomatis masuk ke Admin Panel.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="font-body text-[11px] text-text-3">atau</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Secondary: manual token */}
          {!showManual ? (
            <button
              onClick={() => setShowManual(true)}
              className="w-full font-body text-[12px] text-text-3 hover:text-text-2 transition-colors py-2"
            >
              Masukkan API Token manual →
            </button>
          ) : (
            <form onSubmit={handleManualSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-[12px] text-text-2 mb-2 uppercase tracking-wider">
                  Sanity API Token
                </label>
                <input
                  type="password"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="sk-..."
                  required
                  autoComplete="off"
                  className="w-full bg-bg-3 border border-white/8 rounded-lg px-4 py-2.5 font-body text-[13px] text-text placeholder:text-text-3 focus:outline-none focus:border-orange/50 transition-colors"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 font-body text-[12px] text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !token}
                className="w-full bg-bg-3 border border-white/8 text-text-2 font-condensed font-bold text-[13px] tracking-wider uppercase py-2.5 rounded-lg hover:border-orange/30 hover:text-text transition-colors disabled:opacity-50"
              >
                {loading ? 'Memverifikasi...' : 'Masuk dengan Token'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
