'use client'
import { useState, useTransition, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createDoc, updateDoc, uploadImageAction } from '@/app/admin/actions'
import { urlFor } from '@/sanity/lib/image'
import type { SectionDef, FieldDef } from '@/lib/adminSections'

interface Props {
  section: string
  def: SectionDef
  initialData?: Record<string, unknown>
  docId?: string
}

type ImageValue = { _type: 'image'; asset: { _type: 'reference'; _ref: string }; _key?: string }

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

async function compressImage(file: File): Promise<File> {
  const MAX_PX = 1920
  const QUALITY = 0.85
  return new Promise((resolve) => {
    const img = new window.Image()
    const url = URL.createObjectURL(file)
    img.onload = () => {
      URL.revokeObjectURL(url)
      let { width, height } = img
      if (width > MAX_PX || height > MAX_PX) {
        if (width >= height) {
          height = Math.round((height * MAX_PX) / width)
          width = MAX_PX
        } else {
          width = Math.round((width * MAX_PX) / height)
          height = MAX_PX
        }
      }
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d')!.drawImage(img, 0, 0, width, height)
      canvas.toBlob(
        (blob) => {
          if (!blob || blob.size >= file.size) { resolve(file); return }
          resolve(new File([blob], file.name.replace(/\.[^.]+$/, '.webp'), { type: 'image/webp' }))
        },
        'image/webp',
        QUALITY,
      )
    }
    img.onerror = () => { URL.revokeObjectURL(url); resolve(file) }
    img.src = url
  })
}

export default function AdminForm({ section, def, initialData, docId }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const initialValues = initialData ?? {}
  const [values, setValues] = useState<Record<string, unknown>>(initialValues)
  const [error, setError] = useState('')
  const [uploadingField, setUploadingField] = useState<string | null>(null)
  const valuesRef = useRef<Record<string, unknown>>(initialValues)

  function set(name: string, value: unknown) {
    setValues((prev) => {
      const next = { ...prev, [name]: value }
      // Auto-fill slug when source field changes and slug is currently empty
      const slugField = def.fields.find((f) => f.type === 'slug' && f.source === name)
      if (slugField && typeof value === 'string' && !prev[slugField.name]) {
        next[slugField.name] = slugify(value)
      }
      valuesRef.current = next
      return next
    })
  }

  async function handleImageUpload(fieldName: string, file: File) {
    setUploadingField(fieldName)
    setError('')
    try {
      const compressed = await compressImage(file)
      const fd = new FormData()
      fd.append('file', compressed)
      const ref = await uploadImageAction(fd)
      set(fieldName, ref)
    } catch (err) {
      setError(`Upload gambar gagal: ${err instanceof Error ? err.message : 'Coba lagi.'}`)
    } finally {
      setUploadingField(null)
    }
  }

  async function handleGalleryUpload(fieldName: string, files: File[]) {
    setUploadingField(fieldName)
    setError('')
    try {
      const current = Array.isArray(values[fieldName]) ? (values[fieldName] as ImageValue[]) : []
      const newRefs: ImageValue[] = []
      for (const file of files) {
        const compressed = await compressImage(file)
        const fd = new FormData()
        fd.append('file', compressed)
        const ref = await uploadImageAction(fd)
        newRefs.push({ ...ref, _key: `img_${Date.now()}_${Math.random().toString(36).slice(2, 7)}` })
      }
      set(fieldName, [...current, ...newRefs])
    } catch (err) {
      setError(`Upload gambar gagal: ${err instanceof Error ? err.message : 'Coba lagi.'}`)
    } finally {
      setUploadingField(null)
    }
  }

  function handleRemoveGalleryImage(fieldName: string, index: number) {
    const current = Array.isArray(values[fieldName]) ? (values[fieldName] as ImageValue[]) : []
    set(fieldName, current.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const processed: Record<string, unknown> = {}
    for (const field of def.fields) {
      let val = values[field.name]

      if (field.type === 'slug') {
        if (val && typeof val === 'string') {
          processed['slug'] = { _type: 'slug', current: val }
        }
        continue
      }
      if (field.type === 'array' && typeof val === 'string') {
        val = val.split('\n').map((s) => s.trim()).filter(Boolean)
      }
      if (field.type === 'number' && val !== '' && val !== undefined && val !== null) {
        val = Number(val)
      }
      if (field.type === 'select' && val === '') {
        val = null
      }
      if (val !== undefined && val !== '') {
        processed[field.name] = val
      }
    }

    startTransition(async () => {
      try {
        if (docId) {
          await updateDoc(docId, processed)
        } else {
          await createDoc(def.docType, processed)
        }
        router.push(`/admin/${section}`)
        router.refresh()
      } catch {
        setError('Gagal menyimpan. Periksa koneksi dan coba lagi.')
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-[600px]">
      {def.studioBodyNote && (
        <div className="p-4 bg-orange/5 border border-orange/20 rounded-xl space-y-2">
          <div className="font-body text-[12px] text-text-2 leading-relaxed">
            <strong className="text-text">Form ini untuk metadata</strong> — judul, tanggal, gambar cover, dan slug URL.
          </div>
          <div className="font-body text-[12px] text-text-3 leading-relaxed">
            Untuk menulis <strong className="text-text">isi / body artikel</strong>, gunakan tombol{' '}
            <span className="text-orange font-semibold">Edit Isi Artikel di Studio</span> di pojok kanan atas,
            atau buka{' '}
            <a href="/studio/structure/post" target="_blank" className="text-orange hover:underline">
              Sanity Studio →
            </a>
          </div>
        </div>
      )}
      {def.studioGalleryNote && (
        <div className="p-4 bg-bg-3 border border-white/8 rounded-xl font-body text-[12px] text-text-2 leading-relaxed">
          <strong className="text-text">Gallery Foto:</strong> Untuk menambah dan mengatur multiple foto cabang,
          gunakan{' '}
          <a href="/studio/structure/branch" target="_blank" className="text-orange hover:underline">
            Sanity Studio →
          </a>{' '}
          (drag-and-drop, reorder, crop).
        </div>
      )}

      {def.fields.map((field) => (
        <div key={field.name}>
          <label className="block font-body text-[12px] text-text-2 mb-1.5 uppercase tracking-wider">
            {field.label}
            {field.required && <span className="text-orange ml-1">*</span>}
          </label>
          {field.hint && (
            <p className="font-body text-[11px] text-text-3 mb-2">{field.hint}</p>
          )}
          <FieldInput
            field={field}
            value={values[field.name]}
            valuesRef={valuesRef}
            onChange={(v) => set(field.name, v)}
            onImageUpload={(file) => handleImageUpload(field.name, file)}
            onGalleryUpload={(files) => handleGalleryUpload(field.name, files)}
            onRemoveGalleryImage={(i) => handleRemoveGalleryImage(field.name, i)}
            uploadingThisField={uploadingField === field.name}
            onRemoveImage={() => set(field.name, undefined)}
            onSetSlug={(slug) => set(field.name, slug)}
          />
        </div>
      ))}

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 font-body text-[12px] text-red-400">
          {error}
        </div>
      )}

      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <button
          type="submit"
          disabled={isPending || uploadingField !== null}
          className="inline-flex items-center gap-2 bg-orange text-black font-condensed font-bold text-[14px] tracking-wider uppercase px-6 py-2.5 rounded-lg hover:bg-orange-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending && (
            <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
            </svg>
          )}
          {isPending ? (docId ? 'Menyimpan...' : 'Menambahkan...') : docId ? 'Simpan Perubahan' : 'Simpan'}
        </button>
        <button
          type="button"
          onClick={() => router.push(`/admin/${section}`)}
          disabled={isPending}
          className="font-body text-[13px] text-text-2 hover:text-text transition-colors px-4 py-2.5 rounded-lg border border-white/8 hover:border-white/20 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Batal
        </button>
      </div>
    </form>
  )
}

interface FieldInputProps {
  field: FieldDef
  value: unknown
  valuesRef: React.RefObject<Record<string, unknown>>
  onChange: (v: unknown) => void
  onImageUpload: (file: File) => void
  onGalleryUpload: (files: File[]) => void
  onRemoveGalleryImage: (index: number) => void
  uploadingThisField: boolean
  onRemoveImage: () => void
  onSetSlug: (slug: string) => void
}

const inputCls =
  'w-full bg-bg-3 border border-white/8 rounded-lg px-4 py-2.5 font-body text-[13px] text-text placeholder:text-text-3 focus:outline-none focus:border-orange/50 transition-colors'

function FieldInput({
  field,
  value,
  valuesRef,
  onChange,
  onImageUpload,
  onGalleryUpload,
  onRemoveGalleryImage,
  uploadingThisField,
  onRemoveImage,
  onSetSlug,
}: FieldInputProps) {
  const str = typeof value === 'string' ? value : ''
  const num = (value !== undefined && value !== null && value !== '') ? (value as string | number) : ''
  const bool = typeof value === 'boolean' ? value : false
  const img = value as ImageValue | undefined

  switch (field.type) {
    case 'text':
      return (
        <input
          type="text"
          value={str}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          required={field.required}
          className={inputCls}
        />
      )

    case 'url':
      return (
        <input
          type="url"
          value={str}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? 'https://...'}
          className={inputCls}
        />
      )

    case 'textarea':
      return (
        <textarea
          value={str}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={`${inputCls} resize-y`}
        />
      )

    case 'array':
      return (
        <textarea
          value={Array.isArray(value) ? (value as string[]).join('\n') : str}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder ?? 'Satu item per baris'}
          rows={5}
          className={`${inputCls} resize-y`}
        />
      )

    case 'number':
      return (
        <input
          type="number"
          value={num}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={inputCls}
        />
      )

    case 'date':
      return (
        <input
          type="date"
          value={str ? str.slice(0, 10) : ''}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
      )

    case 'boolean':
      return (
        <button
          type="button"
          onClick={() => onChange(!bool)}
          className="flex items-center gap-3 group"
        >
          <div
            className={`relative w-10 h-5 rounded-full transition-colors ${bool ? 'bg-orange' : 'bg-bg-4'}`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${bool ? 'translate-x-5' : 'translate-x-0.5'}`}
            />
          </div>
          <span className="font-body text-[13px] text-text-2 group-hover:text-text transition-colors">
            {bool ? 'Ya' : 'Tidak'}
          </span>
        </button>
      )

    case 'select':
      return (
        <select
          value={str}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputCls} cursor-pointer`}
        >
          {field.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )

    case 'tags':
      return (
        <div className="flex flex-wrap gap-2">
          {field.options?.map((opt) => {
            const selected = Array.isArray(value) && (value as string[]).includes(opt.value)
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  const current = Array.isArray(value) ? (value as string[]) : []
                  onChange(
                    selected
                      ? current.filter((v) => v !== opt.value)
                      : [...current, opt.value]
                  )
                }}
                className={`px-3 py-1.5 rounded-lg font-body text-[12px] border transition-colors ${
                  selected
                    ? 'bg-orange/15 border-orange/40 text-orange'
                    : 'bg-bg-3 border-white/8 text-text-2 hover:border-white/20'
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      )

    case 'slug':
      return (
        <div className="flex gap-2">
          <input
            type="text"
            value={str}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`${inputCls} flex-1`}
          />
          <button
            type="button"
            onClick={() => {
              const src = field.source ?? 'title'
              const latest = valuesRef.current
              const srcVal = typeof latest[src] === 'string' ? (latest[src] as string) : ''
              onSetSlug(slugify(srcVal))
            }}
            className="shrink-0 px-3 py-2 font-body text-[12px] text-text-2 hover:text-text bg-bg-3 border border-white/8 hover:border-orange/30 rounded-lg transition-colors"
          >
            Generate
          </button>
        </div>
      )

    case 'image': {
      const imageUrl = img?.asset?._ref
        ? urlFor(img).width(200).height(140).fit('crop').url()
        : null
      return (
        <div className="space-y-3">
          {imageUrl && (
            <div className="relative w-48 h-32 rounded-xl overflow-hidden border border-white/8">
              <Image src={imageUrl} alt="Preview" fill className="object-cover" />
            </div>
          )}
          <div className="flex items-center gap-3">
            <label className={`cursor-pointer ${uploadingThisField ? 'opacity-50 pointer-events-none' : ''}`}>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) onImageUpload(file)
                }}
              />
              <span className="inline-flex items-center gap-2 font-body text-[12px] px-4 py-2 rounded-lg border border-white/8 hover:border-orange/30 text-text-2 hover:text-text transition-colors">
                {uploadingThisField
                  ? 'Mengupload...'
                  : imageUrl
                  ? 'Ganti Gambar'
                  : 'Pilih Gambar'}
              </span>
            </label>
            {imageUrl && (
              <button
                type="button"
                onClick={onRemoveImage}
                className="font-body text-[12px] text-text-3 hover:text-red-400 transition-colors"
              >
                Hapus
              </button>
            )}
          </div>
        </div>
      )
    }

    case 'gallery': {
      const images = Array.isArray(value) ? (value as ImageValue[]) : []
      return (
        <div className="space-y-3">
          {images.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {images.map((img, i) => {
                const url = img?.asset?._ref
                  ? urlFor(img).width(240).height(180).fit('crop').url()
                  : null
                return (
                  <div
                    key={img._key ?? img.asset._ref ?? i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group/img border border-white/8"
                  >
                    {url && (
                      <Image src={url} alt={`Gallery ${i + 1}`} fill className="object-cover" sizes="200px" />
                    )}
                    <button
                      type="button"
                      onClick={() => onRemoveGalleryImage(i)}
                      className="absolute top-1 right-1 w-5 h-5 bg-black/70 hover:bg-red-500/80 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold"
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-1 left-1 bg-black/50 text-white font-body text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover/img:opacity-100 transition-opacity">
                      {i + 1}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <label className={`inline-flex items-center gap-2 cursor-pointer ${uploadingThisField ? 'opacity-50 pointer-events-none' : ''}`}>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files ?? [])
                if (files.length > 0) onGalleryUpload(files)
                e.target.value = ''
              }}
            />
            <span className="inline-flex items-center gap-2 font-body text-[12px] px-4 py-2 rounded-lg border border-white/8 hover:border-orange/30 text-text-2 hover:text-text transition-colors">
              {uploadingThisField ? 'Mengupload...' : images.length > 0 ? `+ Tambah Foto (${images.length} foto)` : '+ Pilih Foto'}
            </span>
          </label>
        </div>
      )
    }

    default:
      return null
  }
}
