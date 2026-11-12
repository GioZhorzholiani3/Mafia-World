import type { AuthMode } from '../api/auth.types'

export const AUTH_MODES: AuthMode[] = ['login', 'signup']

export const AUTH_COPY: Record<AuthMode, { tab: string; title: string; subtitle: string; submit: string }> = {
  login: { tab: 'Log in', title: 'Welcome back', subtitle: 'Log in to join tonight’s table.', submit: 'Log in' },
  signup: { tab: 'Sign up', title: 'Join the family', subtitle: 'Create an account to host and join games.', submit: 'Create account' },
}

export const PASSWORD_MIN_LENGTH = 8
