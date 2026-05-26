import { createClient } from '@sanity/client'

export const adminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2026-05-24',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})
