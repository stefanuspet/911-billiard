import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { ADMIN_SECTIONS } from '@/lib/adminSections'
import AdminForm from '@/components/admin/AdminForm'
import type { SectionDef } from '@/lib/adminSections'

interface Props {
  params: Promise<{ section: string }>
}

export default async function NewDocPage({ params }: Props) {
  const { section } = await params
  const baseDef = ADMIN_SECTIONS[section]
  if (!baseDef) notFound()

  let def: SectionDef = baseDef

  if (section === 'menu') {
    const branches: { _id: string; name: string | null; city: string | null; slug: string | null }[] =
      await client.fetch(
        `*[_type == "branch" && defined(slug.current)] | order(order asc) { _id, name, city, "slug": slug.current }`,
        {},
        { next: { revalidate: 0 } }
      )
    const branchOptions = [
      { value: '', label: '-- Pilih Cabang --' },
      ...branches.map((b) => ({ value: b.slug ?? b._id, label: `${b.name ?? '?'} — ${b.city ?? '?'}` })),
    ]
    def = {
      ...baseDef,
      fields: baseDef.fields.map((f) =>
        f.name === 'branchSlug' ? { ...f, options: branchOptions } : f
      ),
    }
  }

  return (
    <div className="p-8 max-w-[720px]">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Link href="/admin" className="font-body text-[12px] text-text-3 hover:text-text transition-colors">
            Dashboard
          </Link>
          <span className="text-text-3">/</span>
          <Link href={`/admin/${section}`} className="font-body text-[12px] text-text-3 hover:text-text transition-colors">
            {def.label}
          </Link>
          <span className="text-text-3">/</span>
          <span className="font-body text-[12px] text-text-2">Baru</span>
        </div>
        <h1 className="font-condensed font-black text-[28px] leading-none">
          Tambah {def.label}
        </h1>
      </div>

      <AdminForm section={section} def={def} />
    </div>
  )
}
