'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div
        className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Pé de Meia
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Gestão inteligente de finanças pessoais. Controle suas despesas,
            defina metas e alcance liberdade financeira.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 flex-wrap justify-center">
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Começar Agora <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-800"
            >
              Fazer Login
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 mt-20 w-full"
        >
          {[
            {
              title: 'Simples',
              description: 'Interface intuitiva e fácil de usar',
            },
            {
              title: 'Seguro',
              description: 'Seus dados protegidos com criptografia',
            },
            {
              title: 'Poderoso',
              description: 'Análises detalhadas e relatórios completos',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-slate-600"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
