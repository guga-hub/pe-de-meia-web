import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onboarding - Pé de Meia',
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
