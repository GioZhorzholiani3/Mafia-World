import { useState, type FormEvent } from 'react'
import { ApiError } from '@/shared/api/http'
import { authApi } from './api/auth.api'
import type { AuthMode, AuthResponse } from './api/auth.types'
import { AUTH_COPY, AUTH_MODES } from './constants/auth.constants'

interface AuthControllerOptions {
  onSuccess?: (res: AuthResponse) => void
}

const MODE_OPTIONS = AUTH_MODES.map(value => ({ value, label: AUTH_COPY[value].tab }))

function errorMessage(err: unknown): string {
  if (err instanceof ApiError) return err.message || 'Something went wrong. Please try again.'
  return 'Couldn’t reach the server. Check your connection and try again.'
}

export function useAuthController({ onSuccess }: AuthControllerOptions = {}) {
  const [mode, setMode] = useState<AuthMode>('login')
  const [isSubmitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeMode = (next: AuthMode) => {
    setMode(next)
    setError(null)
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') ?? '')
    const password = String(form.get('password') ?? '')

    setSubmitting(true)
    setError(null)
    try {
      const res =
        mode === 'login'
          ? await authApi.login({ email, password, remember: form.has('remember') })
          : await authApi.signup({ nickname: String(form.get('nickname') ?? ''), email, password })
      onSuccess?.(res)
    } catch (err) {
      setError(errorMessage(err))
    } finally {
      setSubmitting(false)
    }
  }

  return {
    modeOptions: MODE_OPTIONS,
    mode,
    isLogin: mode === 'login',
    copy: AUTH_COPY[mode],
    isSubmitting,
    error,
    changeMode,
    submit,
  }
}
