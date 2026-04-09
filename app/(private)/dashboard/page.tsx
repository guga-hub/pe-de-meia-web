'use client'

import { useAuthStore } from '@/lib/store/authStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <Button
            onClick={() => {
              logout()
              router.push('/')
            }}
            variant="outline"
            className="border-slate-400 text-slate-300"
          >
            Sair
          </Button>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <h2 className="text-xl text-white mb-4">Bem-vindo, {user.name}!</h2>
          <p className="text-slate-400">Email: {user.email}</p>
        </div>
      </motion.div>
    </div>
  )
}
