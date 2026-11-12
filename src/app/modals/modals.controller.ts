import { useMemo, useState } from 'react'
import type { ModalId, ModalsApi } from './modals.context'

export function useModalsController() {
  const [active, setActive] = useState<ModalId | null>(null)
  // A modal's chunk is fetched on first open; after that it stays mounted so its close transition plays.
  const [loaded, setLoaded] = useState<Partial<Record<ModalId, true>>>({})

  const api = useMemo<ModalsApi>(
    () => ({
      open: id => {
        setLoaded(l => (l[id] ? l : { ...l, [id]: true }))
        setActive(id)
      },
      close: () => setActive(null),
    }),
    []
  )

  return {
    api,
    isLoaded: (id: ModalId) => Boolean(loaded[id]),
    isOpen: (id: ModalId) => active === id,
  }
}
