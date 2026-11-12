import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MafiaCard, MafiaIcon } from '@/shared/ui'
import type { RoleCardModel } from '../roles.controller'

export default function RoleCard({ role }: { role: RoleCardModel }) {
  return (
    <MafiaCard component="li" color={role.cardColor} spacing={1.75}>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', color: `team.${role.team}` }}>
        <MafiaIcon name={role.icon} size={36} />
        <Typography variant="label">{role.teamLabel}</Typography>
      </Stack>
      <Typography variant="h4" component="h3">{role.name}</Typography>
      <Typography variant="body2" color="text.secondary">{role.text}</Typography>
    </MafiaCard>
  )
}
