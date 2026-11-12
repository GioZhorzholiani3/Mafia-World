import { createContext, useContext } from 'react'

export type ModalId = 'login' | 'howToPlay'

export interface ModalsApi {
  open: (id: ModalId) => void
  close: () => void
}

export const ModalsContext = createContext<ModalsApi | null>(null)

export function useModals(): ModalsApi {
  const ctx = useContext(ModalsContext)
  if (!ctx) throw new Error('useModals must be used inside <ModalsProvider>')
  return ctx
}
