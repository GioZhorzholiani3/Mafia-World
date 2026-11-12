import type { IconName } from '@/shared/ui/MafiaIcon'
import type { Team } from '@/shared/types/game'

export interface Role {
  name: string
  team: Team
  icon: IconName
  text: string
}

export const TEAM_LABELS: Record<Team, string> = {
  mafia: 'Mafia',
  town: 'Town',
  host: 'Moderator',
}

export const ROLES: Role[] = [
  { name: 'Mafioso', team: 'mafia', icon: 'hat', text: 'Knows the other gangsters. Kills by night, lies by day.' },
  { name: 'The Don', team: 'mafia', icon: 'crown', text: 'Leads the family and has the final word on each night’s target.' },
  { name: 'Detective', team: 'town', icon: 'search', text: 'Checks one player each night to learn whose side they’re on.' },
  { name: 'Doctor', team: 'town', icon: 'medic', text: 'Protects one player each night from the Mafia’s attack.' },
  { name: 'Civilian', team: 'town', icon: 'home', text: 'No powers — just instinct, a sharp tongue and a vote.' },
  { name: 'The Host', team: 'host', icon: 'help', text: 'Runs the night, narrates the deaths and keeps every secret.' },
]
