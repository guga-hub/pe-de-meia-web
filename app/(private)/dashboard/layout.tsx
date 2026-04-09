import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - Pé de Meia',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
