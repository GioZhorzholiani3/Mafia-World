import { http } from '@/shared/api/http'
import type { AuthResponse, LoginRequest, SignupRequest } from './auth.types'

export const authApi = {
  login: (body: LoginRequest) => http.post<AuthResponse>('/auth/login', body),
  signup: (body: SignupRequest) => http.post<AuthResponse>('/auth/signup', body),
}
