'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuthStore } from '@/lib/store/authStore'
import { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

export function Providers({ children }: { children: ReactNode }) {
  const checkAuth = useAuthStore((state) => state.checkAuth)
  const setLoading = useAuthStore((state) => state.setLoading)

  useEffect(() => {
    checkAuth()
    setLoading(false)
  }, [checkAuth, setLoading])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
