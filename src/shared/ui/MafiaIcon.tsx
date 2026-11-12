import SvgIcon from '@mui/material/SvgIcon'
import type { SxProps, Theme } from '@mui/material/styles'
import { ICON_PATHS, type IconName } from '@/shared/svg'
import { mergeSx } from '@/shared/theme/sx'

export type { IconName }

interface MafiaIconProps {
  name: IconName
  size?: number
  strokeWidth?: number
  sx?: SxProps<Theme>
}

export default function MafiaIcon({ name, size = 24, strokeWidth = 1.6, sx }: MafiaIconProps) {
  return (
    <SvgIcon
      sx={mergeSx(
        {
          fontSize: size,
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        },
        sx
      )}
    >
      {ICON_PATHS[name]}
    </SvgIcon>
  )
}
