import type { IconName } from '@/shared/ui/MafiaIcon'

export interface Phase {
  icon: IconName
  title: string
  text: string
}

export const PHASES: Phase[] = [
  {
    icon: 'moon',
    title: 'Night',
    text: 'Everyone closes their eyes. The Mafia silently pick a target, while the Detective investigates and the Doctor chooses someone to save.',
  },
  {
    icon: 'sun',
    title: 'Day',
    text: 'The town wakes to the news. Players debate, defend themselves and point fingers. The Mafia blend in and steer suspicion elsewhere.',
  },
  {
    icon: 'ballot',
    title: 'Vote',
    text: 'The town votes to eliminate one suspect. The town wins when every Mafia member is out; the Mafia win when they equal the town.',
  },
]
