import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Pé de Meia',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
