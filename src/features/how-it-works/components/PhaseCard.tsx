import Typography from '@mui/material/Typography'
import { MafiaCard, MafiaIcon } from '@/shared/ui'
import type { Phase } from '../constants/how-it-works.constants'

export default function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <MafiaCard component="article" padding="large" bgColor="background.default" spacing={2.25}>
      <MafiaIcon name={phase.icon} size={40} sx={{ color: 'secondary.main' }} />
      <Typography variant="h5" component="h3">{phase.title}</Typography>
      <Typography color="text.secondary">{phase.text}</Typography>
    </MafiaCard>
  )
}
