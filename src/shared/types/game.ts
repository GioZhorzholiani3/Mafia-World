import type { IconName } from '@/shared/ui/MafiaIcon'

export type Team = 'mafia' | 'town' | 'host'

export interface GameFact {
  icon: IconName
  label: string
}
