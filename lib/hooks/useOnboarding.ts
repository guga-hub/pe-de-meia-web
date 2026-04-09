import { useMutation, useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { useOnboardingStore } from '@/lib/store/onboardingStore'
import { SalaryInputDTO, OnboardingSessionVO } from '@/types/onboarding'

export function useStartOnboarding() {
  const { setSessionToken, setGuide, setError, setLoading } =
    useOnboardingStore()

  return useMutation({
    mutationFn: async (data: SalaryInputDTO) => {
      const response = await api.post<OnboardingSessionVO>(
        '/onboarding/start',
        data
      )
      return response.data
    },
    onSuccess: (data) => {
      setSessionToken(data.sessionToken)
      if (data.guide) {
        setGuide(data.guide)
      }
    },
    onError: (error: Error) => {
      setError(error.message)
    },
  })
}

export function useOnboardingSession(sessionToken: string | null) {
  const { setGuide, setError } = useOnboardingStore()

  return useQuery({
    queryKey: ['onboarding', sessionToken],
    queryFn: async () => {
      if (!sessionToken) return null
      const response = await api.get<OnboardingSessionVO>(
        `/onboarding/session/${sessionToken}`
      )
      return response.data
    },
    enabled: !!sessionToken,
    onSuccess: (data) => {
      if (data?.guide) {
        setGuide(data.guide)
      }
    },
    onError: (error: Error) => {
      setError(error.message)
    },
  })
}
