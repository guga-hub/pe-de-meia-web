import { create } from 'zustand'
import { UserProfileVO, TokenVO } from '@/types/auth'

interface AuthState {
  user: UserProfileVO | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  setUser: (user: UserProfileVO | null) => void
  setAuth: (token: TokenVO) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  checkAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setAuth: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', token.accessToken)
      localStorage.setItem('refreshToken', token.refreshToken)
    }
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('sessionToken')
    }
    set({
      user: null,
      isAuthenticated: false,
      error: null,
    })
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),

  checkAuth: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken')
      set({ isAuthenticated: !!token })
    }
  },
}))
