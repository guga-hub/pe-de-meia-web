import { create } from 'zustand'
import { GuideVO } from '@/types/onboarding'

interface OnboardingState {
  sessionToken: string | null
  guide: GuideVO | null
  isLoading: boolean
  error: string | null

  setSessionToken: (token: string) => void
  setGuide: (guide: GuideVO) => void
  clearOnboarding: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  sessionToken: null,
  guide: null,
  isLoading: false,
  error: null,

  setSessionToken: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sessionToken', token)
    }
    set({ sessionToken: token })
  },

  setGuide: (guide) => set({ guide }),

  clearOnboarding: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sessionToken')
    }
    set({
      sessionToken: null,
      guide: null,
      error: null,
    })
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),
}))
