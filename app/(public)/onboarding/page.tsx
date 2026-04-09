'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [salary, setSalary] = useState('')

  const steps = [
    {
      title: 'Bem-vindo ao Pé de Meia',
      description: 'Sua jornada para liberdade financeira começa aqui',
    },
    {
      title: 'Qual é seu salário mensal?',
      description: 'Isso nos ajuda a personalizar seu guia financeiro',
    },
  ]

  const handleContinue = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else if (salary) {
      // Aqui você pode chamar a API de onboarding
      router.push('/guia')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <motion.h2
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-4 text-center"
          >
            {steps[step].title}
          </motion.h2>

          <motion.p
            key={`desc-${step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-center mb-8"
          >
            {steps[step].description}
          </motion.p>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="R$ 0,00"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </motion.div>
          )}

          <Button
            onClick={handleContinue}
            disabled={step === 1 && !salary}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
          >
            {step === steps.length - 1 ? 'Ver Guia' : 'Continuar'}
          </Button>

          <div className="mt-6 flex justify-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i <= step ? 'bg-blue-500 w-6' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
