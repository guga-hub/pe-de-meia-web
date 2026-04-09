import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pé de Meia - Gestão de Finanças Pessoais',
  description:
    'Aplicativo para gestão inteligente de finanças pessoais. Controle suas despesas, defina metas e alcance liberdade financeira.',
  keywords: ['finanças', 'orçamento', 'investimentos', 'gestão', 'pessoal'],
  authors: [{ name: 'Pé de Meia' }],
  openGraph: {
    title: 'Pé de Meia - Gestão de Finanças Pessoais',
    description: 'Aplicativo para gestão inteligente de finanças pessoais',
    type: 'website',
    url: 'https://pedemeia.vercel.app',
    images: [
      {
        url: 'https://pedemeia.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pé de Meia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pé de Meia - Gestão de Finanças Pessoais',
    description: 'Aplicativo para gestão inteligente de finanças pessoais',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
