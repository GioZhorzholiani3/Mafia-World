import IconButton, { type IconButtonProps } from '@mui/material/IconButton'
import { mergeSx } from '@/shared/theme/sx'
import { radius } from '@/shared/theme/tokens'
import type { MafiaSize } from '@/shared/theme/theme.types'
import MafiaIcon from './MafiaIcon'

export interface MafiaCloseButtonProps extends Omit<IconButtonProps, 'size' | 'children'> {
  label?: string
  size?: MafiaSize
}

const SIZES: Record<MafiaSize, { box: number; icon: number }> = {
  small: { box: 36, icon: 16 },
  medium: { box: 44, icon: 20 },
  large: { box: 52, icon: 24 },
}

export default function MafiaCloseButton({ label = 'Close', size = 'medium', sx, ...rest }: MafiaCloseButtonProps) {
  const s = SIZES[size]
  return (
    <IconButton
      aria-label={label}
      sx={mergeSx(
        {
          width: s.box,
          height: s.box,
          borderRadius: radius.lg,
          color: 'text.secondary',
          '&:hover': { bgcolor: 'neutral.opacity.8', color: 'text.primary' },
        },
        sx
      )}
      {...rest}
    >
      <MafiaIcon name="close" size={s.icon} strokeWidth={2} />
    </IconButton>
  )
}
