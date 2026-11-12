import type { MafiaColor } from '@/shared/ui'
import { ROLES, TEAM_LABELS, type Role } from './constants/roles.constants'

export interface RoleCardModel extends Role {
  teamLabel: string
  cardColor: MafiaColor
}

// Derived once at module load: the list is static.
const CARDS: RoleCardModel[] = ROLES.map(r => ({
  ...r,
  teamLabel: TEAM_LABELS[r.team],
  cardColor: r.team === 'mafia' ? 'primary' : 'neutral',
}))

export function useRolesController() {
  return { roles: CARDS }
}
