'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 py-8 ${className || ''}`}>
      {children}
    </div>
  )
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 flex items-center justify-between"
    >
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-slate-400 mt-2">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </motion.div>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6
        ${hover ? 'hover:bg-slate-700/50 transition-colors cursor-pointer' : ''}
        ${className || ''}
      `}
    >
      {children}
    </motion.div>
  )
}
