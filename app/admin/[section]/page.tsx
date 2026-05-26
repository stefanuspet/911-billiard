import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { ADMIN_SECTIONS } from '@/lib/adminSections'
import AdminTable from '@/components/admin/AdminTable'
import AddButton from '@/components/admin/AddButton'

interface Props {
  params: Promise<{ section: string }>
}

export default async function SectionListPage({ params }: Props) {
  const { section } = await params
  const def = ADMIN_SECTIONS[section]
  if (!def) notFound()

  const data: Record<string, unknown>[] = await client.fetch(
    `*[_type == $docType] | order(coalesce(order, _createdAt) desc)`,
    { docType: def.docType },
    { next: { revalidate: 0 } }
  )

  return (
    <div className="p-8 max-w-[900px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin" className="font-body text-[12px] text-text-3 hover:text-text transition-colors">
              Dashboard
            </Link>
            <span className="text-text-3">/</span>
            <span className="font-body text-[12px] text-text-2">{def.label}</span>
          </div>
          <h1 className="font-condensed font-black text-[28px] leading-none">{def.label}</h1>
          <p className="font-body text-text-2 text-[12px] mt-1">{data.length} item tersimpan</p>
        </div>
        <AddButton href={`/admin/${section}/new`} />
      </div>

      <AdminTable section={section} def={def} data={data} />
    </div>
  )
}
