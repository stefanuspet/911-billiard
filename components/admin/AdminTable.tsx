'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { deleteDoc } from '@/app/admin/actions'
import type { SectionDef } from '@/lib/adminSections'

interface Props {
  section: string
  def: SectionDef
  data: Record<string, unknown>[]
}

export default function AdminTable({ section, def, data }: Props) {
  const router = useRouter()
  const [rows, setRows] = useState(data)

  async function handleDelete(id: string) {
    if (!confirm('Hapus item ini? Tindakan ini tidak dapat dibatalkan.')) return
    // Optimistic: remove row instantly
    setRows((prev) => prev.filter((r) => r._id !== id))
    try {
      await deleteDoc(id)
      router.refresh()
    } catch {
      // Restore on failure
      setRows(data)
    }
  }

  if (rows.length === 0) {
    return (
      <div className="bg-bg-2 border border-white/8 rounded-xl p-12 text-center">
        <div className="font-body text-[13px] text-text-3">
          Belum ada data. Klik &quot;+ Tambah Baru&quot; untuk memulai.
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bg-2 border border-white/8 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/8">
            {def.listFields.map((f) => (
              <th
                key={f.key}
                className="px-5 py-3 text-left font-body text-[11px] text-text-3 uppercase tracking-wider"
              >
                {f.label}
              </th>
            ))}
            <th className="px-5 py-3 text-right font-body text-[11px] text-text-3 uppercase tracking-wider w-32">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((row) => {
            const id = row._id as string
            return (
              <tr key={id} className="hover:bg-white/2 transition-colors">
                {def.listFields.map((f) => (
                  <td key={f.key} className="px-5 py-3 font-body text-[13px] text-text max-w-[240px] truncate">
                    {formatCell(row[f.key])}
                  </td>
                ))}
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/${section}/${id}`}
                      className="font-body text-[12px] text-text-2 hover:text-orange transition-colors px-3 py-1 rounded-lg border border-white/8 hover:border-orange/30"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(id)}
                      className="font-body text-[12px] text-text-3 hover:text-red-400 transition-colors px-3 py-1 rounded-lg border border-white/8 hover:border-red-400/30"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'boolean') return value ? '✓ Ya' : 'Tidak'
  if (typeof value === 'string') {
    if (/^\d{4}-\d{2}-\d{2}/.test(value))
      return new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    return value.length > 60 ? value.slice(0, 60) + '…' : value
  }
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) return `${value.length} item`
  return '—'
}
