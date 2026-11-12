export type AuthMode = 'login' | 'signup'

export interface LoginRequest {
  email: string
  password: string
  remember: boolean
}

export interface SignupRequest {
  nickname: string
  email: string
  password: string
}

export interface AuthUser {
  id: string
  nickname: string
  email: string
}

export interface AuthResponse {
  token: string
  user: AuthUser
}
