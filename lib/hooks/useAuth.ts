import { useMutation } from '@tanstack/react-query'
import api from '@/lib/api'
import { useAuthStore } from '@/lib/store/authStore'
import {
  LoginRequestDTO,
  RegisterDTO,
  TokenVO,
  UserProfileVO,
} from '@/types/auth'

export function useLogin() {
  const { setAuth, setUser } = useAuthStore()

  return useMutation({
    mutationFn: async (credentials: LoginRequestDTO) => {
      const response = await api.post<TokenVO>('/auth/login', credentials)
      return response.data
    },
    onSuccess: (token) => {
      setAuth(token)
      // Fetch user profile após login
      api
        .get<UserProfileVO>('/auth/me')
        .then((res) => setUser(res.data))
        .catch((err) => console.error('Failed to fetch user profile:', err))
    },
  })
}

export function useRegister() {
  const { setAuth, setUser } = useAuthStore()

  return useMutation({
    mutationFn: async (data: RegisterDTO) => {
      const response = await api.post<TokenVO>('/auth/register', data)
      return response.data
    },
    onSuccess: (token) => {
      setAuth(token)
      api
        .get<UserProfileVO>('/auth/me')
        .then((res) => setUser(res.data))
        .catch((err) => console.error('Failed to fetch user profile:', err))
    },
  })
}

export function useLogout() {
  const { logout } = useAuthStore()

  return useMutation({
    mutationFn: async () => {
      await api.post('/auth/logout')
    },
    onSuccess: () => {
      logout()
    },
  })
}
