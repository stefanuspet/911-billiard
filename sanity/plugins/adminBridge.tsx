import { definePlugin, useCurrentUser } from 'sanity'
import { DashboardIcon } from '@sanity/icons'
import { useEffect, useState } from 'react'
import { Card, Flex, Spinner, Text, Button, Stack } from '@sanity/ui'

function AdminBridgeTool() {
  const currentUser = useCurrentUser()
  const [status, setStatus] = useState<'loading' | 'redirecting' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')

  async function bridge() {
    setStatus('loading')

    // Wait briefly for Studio to finish auth
    if (!currentUser) {
      setStatus('error')
      setErrorMsg('Kamu belum login di Sanity Studio. Silakan login terlebih dahulu.')
      return
    }

    const bridgeKey = process.env.NEXT_PUBLIC_ADMIN_BRIDGE_KEY
    if (!bridgeKey) {
      setStatus('error')
      setErrorMsg('NEXT_PUBLIC_ADMIN_BRIDGE_KEY belum dikonfigurasi di .env.local')
      return
    }

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bridgeKey }),
    })

    if (res.ok) {
      setStatus('redirecting')
      window.location.href = '/admin'
    } else {
      const data = await res.json().catch(() => ({}))
      setStatus('error')
      setErrorMsg(data.error ?? 'Gagal membuka Admin Panel.')
    }
  }

  useEffect(() => {
    // Give currentUser a moment to resolve
    const t = setTimeout(bridge, 500)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  if (status === 'loading' || status === 'redirecting') {
    return (
      <Card height="fill">
        <Flex height="fill" align="center" justify="center" direction="column" gap={4}>
          <Spinner muted />
          <Text muted size={1}>
            {status === 'redirecting' ? 'Membuka Admin Panel...' : 'Memverifikasi sesi...'}
          </Text>
        </Flex>
      </Card>
    )
  }

  return (
    <Card height="fill">
      <Flex height="fill" align="center" justify="center">
        <Stack space={4} style={{ textAlign: 'center', maxWidth: 360 }}>
          <Text size={2} weight="semibold">Gagal membuka Admin Panel</Text>
          <Text muted size={1}>{errorMsg}</Text>
          <Button text="Coba Lagi" tone="primary" onClick={bridge} />
        </Stack>
      </Flex>
    </Card>
  )
}

export const adminBridgePlugin = definePlugin({
  name: 'admin-bridge',
  tools: [
    {
      name: 'admin-panel',
      title: 'Admin Panel',
      icon: DashboardIcon,
      component: AdminBridgeTool,
    },
  ],
})
