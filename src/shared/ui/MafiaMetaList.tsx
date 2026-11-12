import Stack from '@mui/material/Stack'
import type { SxProps, Theme } from '@mui/material/styles'
import { mergeSx } from '@/shared/theme/sx'
import MafiaIcon, { type IconName } from './MafiaIcon'

export interface MetaItem {
  label: string
  icon?: IconName
}

export interface MafiaMetaListProps {
  items: MetaItem[]
  /** Gap between items, in theme spacing units. Default 3. */
  spacing?: number
  sx?: SxProps<Theme>
}

/** Inline row of small muted facts, e.g. "7–12 players · 45 min · Ages 13+". */
export default function MafiaMetaList({ items, spacing = 3, sx }: MafiaMetaListProps) {
  return (
    <Stack
      component="ul"
      direction="row"
      useFlexGap
      sx={mergeSx({ flexWrap: 'wrap', gap: spacing, m: 0, p: 0, listStyle: 'none', fontSize: 14, color: 'text.secondary' }, sx)}
    >
      {items.map(item => (
        <Stack component="li" key={item.label} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          {item.icon && <MafiaIcon name={item.icon} size={18} strokeWidth={1.8} />}
          <span>{item.label}</span>
        </Stack>
      ))}
    </Stack>
  )
}
