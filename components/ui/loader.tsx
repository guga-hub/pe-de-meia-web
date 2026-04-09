'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="inline-block"
    >
      <Loader2 className="text-blue-500" size={24} />
    </motion.div>
  )
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        <LoadingSpinner />
        <p className="text-slate-400 mt-4">Carregando...</p>
      </div>
    </div>
  )
}
