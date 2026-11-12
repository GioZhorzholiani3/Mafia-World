import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'
import { radius, shadows } from '@/shared/theme/tokens'
import { MafiaCard, MafiaIcon, type IconName } from '@/shared/ui'

const placement = {
  position: 'absolute',
  top: { xs: 40, sm: 60 },
  width: '52%',
  aspectRatio: '5 / 7',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: radius.panel,
  boxShadow: shadows.card,
} satisfies SxProps<Theme>

function SideCard({ icon, label, side }: { icon: IconName; label: string; side: 'left' | 'right' }) {
  return (
    <MafiaCard
      variant="soft"
      borderColor="line.card"
      spacing={2.25}
      sx={[placement, { [side]: '4%', transform: `rotate(${side === 'left' ? -14 : 14}deg)`, color: 'text.secondary' }]}
    >
      <MafiaIcon name={icon} size={64} strokeWidth={1.3} />
      <Typography variant="h4" component="span" sx={{ fontSize: { xs: 20, sm: 24 }, color: 'text.primary' }}>
        {label}
      </Typography>
    </MafiaCard>
  )
}

export default function CardFan() {
  return (
    <Box aria-hidden="true" sx={{ flex: '1 1 420px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ position: 'relative', width: 440, maxWidth: '100%', height: { xs: 360, sm: 460 } }}>
        <SideCard icon="search" label="Detective" side="left" />
        <SideCard icon="medic" label="Doctor" side="right" />
        <MafiaCard
          variant="filled"
          color="primary"
          padding="small"
          sx={[placement, { left: '24%', top: { xs: 0, sm: 10 }, justifyContent: 'space-between', py: 2.75, boxShadow: shadows.raised }]}
        >
          <Typography variant="label">Role</Typography>
          <MafiaIcon name="hat" size={96} strokeWidth={1.2} />
          <Typography variant="h4" component="span" sx={{ fontSize: 34, letterSpacing: '0.04em' }}>Mafia</Typography>
        </MafiaCard>
      </Box>
    </Box>
  )
}
