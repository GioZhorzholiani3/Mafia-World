import { useState } from 'react'
import { GAME_FACTS } from '@/shared/constants/game'
import type { MetaItem } from '@/shared/ui'
import { STEPS } from './constants/how-to-play.constants'

const LAST = STEPS.length - 1
const FACTS: MetaItem[] = [{ label: `${GAME_FACTS[0].label} + a host` }, ...GAME_FACTS.slice(1).map(f => ({ label: f.label }))]

export function useHowToPlayController({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0)
  const isFirst = index === 0
  const isLast = index === LAST

  return {
    facts: FACTS,
    total: STEPS.length,
    stepNumber: index + 1,
    step: STEPS[index],
    progress: STEPS.map((_, k) => k <= index),
    isFirst,
    nextLabel: isLast ? 'Start playing' : 'Next',
    back: () => setIndex(i => Math.max(0, i - 1)),
    next: () => (isLast ? onFinish() : setIndex(i => i + 1)),
  }
}
