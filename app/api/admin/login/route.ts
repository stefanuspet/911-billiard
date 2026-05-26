import { NextResponse } from 'next/server'

const COOKIE_OPTS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
  secure: process.env.NODE_ENV === 'production',
}

export async function POST(request: Request) {
  const body = await request.json()

  // Path 1: Studio bridge — verify the bridge key matches env
  if (body.bridgeKey) {
    if (body.bridgeKey !== process.env.ADMIN_BRIDGE_KEY) {
      return NextResponse.json({ error: 'Bridge key tidak valid' }, { status: 401 })
    }
    const res = NextResponse.json({ ok: true })
    res.cookies.set('admin_session', 'authenticated', COOKIE_OPTS)
    return res
  }

  // Path 2: Manual Sanity API token (fallback)
  if (body.token) {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
    const sanityRes = await fetch(
      `https://${projectId}.api.sanity.io/v2021-10-21/users/me`,
      { headers: { Authorization: `Bearer ${body.token}` } }
    )
    if (!sanityRes.ok) {
      return NextResponse.json({ error: 'Token tidak valid' }, { status: 401 })
    }
    const res = NextResponse.json({ ok: true })
    res.cookies.set('admin_session', 'authenticated', COOKIE_OPTS)
    return res
  }

  return NextResponse.json({ error: 'Request tidak valid' }, { status: 400 })
}
