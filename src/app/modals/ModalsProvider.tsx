import { lazy, Suspense, type ReactNode } from 'react'
import { ModalsContext } from './modals.context'
import { useModalsController } from './modals.controller'

const LoginModal = lazy(() => import('@/features/auth/LoginModal'))
const HowToPlayModal = lazy(() => import('@/features/how-to-play/HowToPlayModal'))

export default function ModalsProvider({ children }: { children: ReactNode }) {
  const { api, isLoaded, isOpen } = useModalsController()

  return (
    <ModalsContext.Provider value={api}>
      {children}
      <Suspense fallback={null}>
        {isLoaded('login') && <LoginModal open={isOpen('login')} onClose={api.close} />}
        {isLoaded('howToPlay') && <HowToPlayModal open={isOpen('howToPlay')} onClose={api.close} />}
      </Suspense>
    </ModalsContext.Provider>
  )
}
