import Link from 'next/link'
import LogoutButton from '@/components/admin/LogoutButton'
import type { ReactNode } from 'react'

function IconGrid() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}
function IconPencil() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}
function IconMapPin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconTag() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}
function IconTrophy() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 17 12 21 16 17" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
    </svg>
  )
}
function IconShoppingBag() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
function IconBriefcase() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}
function IconUtensils() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  )
}
function IconSettings() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  )
}
function IconExternalLink() {
  return (
    <svg className="ml-auto opacity-30 shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const contentItems: { label: string; href: string; icon: ReactNode }[] = [
  { label: 'Blog', href: '/admin/blog', icon: <IconPencil /> },
  { label: 'Cabang', href: '/admin/cabang', icon: <IconMapPin /> },
  { label: 'Promo', href: '/admin/promo', icon: <IconTag /> },
  { label: 'Tournament', href: '/admin/tournament', icon: <IconTrophy /> },
  { label: 'Merchandise', href: '/admin/merchandise', icon: <IconShoppingBag /> },
  { label: 'Paket Franchise', href: '/admin/franchise', icon: <IconBriefcase /> },
  { label: 'Menu', href: '/admin/menu', icon: <IconUtensils /> },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg flex">
      {/* Sidebar */}
      <aside className="w-60 bg-bg-2 border-r border-white/8 flex flex-col shrink-0">
        {/* Brand */}
        <div className="px-5 py-5 border-b border-white/8">
          <div className="font-condensed font-black text-[20px] text-orange tracking-wider leading-none">
            911 BILLIARD
          </div>
          <div className="font-body text-[11px] text-text-3 mt-0.5">Admin Panel</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 rounded-lg font-body text-[13px] text-text-2 hover:text-text hover:bg-white/5 transition-colors"
          >
            <IconGrid />
            Overview
          </Link>

          <div className="pt-4 pb-1">
            <div className="px-3 font-body text-[10px] text-text-3 uppercase tracking-[1.5px] mb-2">
              Kelola Konten
            </div>
            {contentItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg font-body text-[13px] text-text-2 hover:text-text hover:bg-white/5 transition-colors"
              >
                <span className="text-text-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/studio"
              target="_blank"
              className="flex items-center gap-3 px-3 py-2 rounded-lg font-body text-[13px] text-text-3 hover:text-text hover:bg-white/5 transition-colors"
            >
              <IconSettings />
              Buka Sanity Studio
              <IconExternalLink />
            </Link>
          </div>
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/8">
          <LogoutButton />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Top bar */}
        <header className="h-12 border-b border-white/8 flex items-center justify-end px-6 shrink-0">
          <LogoutButton compact />
        </header>
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  )
}
