export interface TokenVO {
  accessToken: string
  refreshToken: string
  expiresIn: number
  tokenType: string
}

export interface UserProfileVO {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt?: string
}

export interface RegisterDTO {
  name: string
  email: string
  password: string
  sessionToken?: string
}

export interface LoginRequestDTO {
  email: string
  password: string
}

export interface RefreshTokenDTO {
  refreshToken: string
}
