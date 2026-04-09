'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, XCircle, Info } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  type?: ToastType
  title: string
  message?: string
  onClose?: () => void
}

export function Toast({ type = 'info', title, message, onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle className="text-green-500" />,
    error: <XCircle className="text-red-500" />,
    warning: <AlertCircle className="text-yellow-500" />,
    info: <Info className="text-blue-500" />,
  }

  const colors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex gap-4 p-4 rounded-lg border ${colors[type]}`}
    >
      <div>{icons[type]}</div>
      <div className="flex-1">
        <p className="font-semibold text-slate-900">{title}</p>
        {message && <p className="text-sm text-slate-600">{message}</p>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600"
        >
          ✕
        </button>
      )}
    </motion.div>
  )
}
