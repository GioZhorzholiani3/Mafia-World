import { useModals } from '@/app/modals/modals.context'
import { GAME_FACTS } from '@/shared/constants/game'

export function useHeroController() {
  const modals = useModals()
  return {
    facts: GAME_FACTS,
    openHowToPlay: () => modals.open('howToPlay'),
  }
}
