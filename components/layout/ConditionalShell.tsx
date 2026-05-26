'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname?.startsWith('/admin') || pathname?.startsWith('/studio')
  if (bare) return <>{children}</>
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
