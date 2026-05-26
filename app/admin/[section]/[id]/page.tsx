import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { ADMIN_SECTIONS } from '@/lib/adminSections'
import AdminForm from '@/components/admin/AdminForm'
import type { SectionDef } from '@/lib/adminSections'

interface Props {
  params: Promise<{ section: string; id: string }>
}

export default async function EditDocPage({ params }: Props) {
  const { section, id } = await params
  const baseDef = ADMIN_SECTIONS[section]
  if (!baseDef) notFound()

  const doc: Record<string, unknown> | null = await client.fetch(
    `*[_type == $docType && _id == $id][0]`,
    { docType: baseDef.docType, id },
    { next: { revalidate: 0 } }
  )
  if (!doc) notFound()

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

  // Flatten slug for form
  const initialData: Record<string, unknown> = { ...doc }
  if (doc.slug && typeof (doc.slug as Record<string, unknown>).current === 'string') {
    initialData.slug = (doc.slug as Record<string, unknown>).current
  }

  const displayName =
    typeof doc.title === 'string' ? doc.title :
    typeof doc.name === 'string' ? doc.name : null

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
          <span className="font-body text-[12px] text-text-2">Edit</span>
        </div>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-condensed font-black text-[28px] leading-none">
              Edit {def.label}
            </h1>
            {displayName && (
              <p className="font-body text-text-2 text-[13px] mt-1 truncate">{displayName}</p>
            )}
          </div>
          {section === 'blog' && (
            <a
              href={`/studio/structure/post;${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 bg-orange/10 hover:bg-orange/20 border border-orange/30 hover:border-orange/50 text-orange font-body text-[12px] font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit Isi Artikel di Studio
            </a>
          )}
        </div>
      </div>

      <AdminForm section={section} def={def} initialData={initialData} docId={id} />
    </div>
  )
}
