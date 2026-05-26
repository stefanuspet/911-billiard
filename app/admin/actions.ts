'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { adminClient } from '@/sanity/lib/adminClient'

async function requireAuth() {
  const store = await cookies()
  if (!store.get('admin_session')) throw new Error('Unauthorized')
}

export async function createDoc(docType: string, data: Record<string, unknown>) {
  await requireAuth()
  const doc = await adminClient.create({ _type: docType, ...data })
  revalidatePath('/admin', 'layout')
  return doc._id
}

export async function updateDoc(id: string, data: Record<string, unknown>) {
  await requireAuth()
  await adminClient.patch(id).set(data).commit()
  revalidatePath('/admin', 'layout')
}

export async function deleteDoc(id: string) {
  await requireAuth()
  const publishedId = id.replace(/^drafts\./, '')
  const draftId = `drafts.${publishedId}`
  await adminClient.delete({ query: `*[_id in [$pub, $draft]]`, params: { pub: publishedId, draft: draftId } })
  // No revalidatePath here — client calls router.refresh() after optimistic update
}

export async function uploadImageAction(formData: FormData) {
  await requireAuth()
  const file = formData.get('file') as File
  if (!file || file.size === 0) throw new Error('No file provided')
  const buffer = Buffer.from(await file.arrayBuffer())
  const asset = await adminClient.assets.upload('image', buffer, {
    filename: file.name,
    contentType: file.type,
  })
  return { _type: 'image' as const, asset: { _type: 'reference' as const, _ref: asset._id } }
}
