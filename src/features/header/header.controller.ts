import { useModals } from '@/app/modals/modals.context'

export function useHeaderController() {
  const modals = useModals()
  return {
    openLogin: () => modals.open('login'),
    openHowToPlay: () => modals.open('howToPlay'),
  }
}
