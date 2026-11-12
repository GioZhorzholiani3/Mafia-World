import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { radius } from '@/shared/theme/tokens'

export interface SegmentOption<T extends string> {
  value: T
  label: string
}

export interface MafiaSegmentedControlProps<T extends string> {
  options: SegmentOption<T>[]
  value: T
  onChange: (value: T) => void
  'aria-label': string
}

export default function MafiaSegmentedControl<T extends string>({ options, value, onChange, ...aria }: MafiaSegmentedControlProps<T>) {
  return (
    <ToggleButtonGroup
      exclusive
      fullWidth
      value={value}
      onChange={(_, next: T | null) => next && onChange(next)}
      {...aria}
      sx={{
        p: 0.5,
        gap: 0.5,
        bgcolor: 'background.default',
        border: 1,
        borderColor: 'divider',
        borderRadius: radius.lg,
        '& .MuiToggleButton-root': {
          minHeight: 44,
          border: 'none',
          borderRadius: `${radius.md} !important`,
          textTransform: 'none',
          fontSize: 15,
          fontWeight: 600,
          color: 'text.secondary',
          '&.Mui-selected, &.Mui-selected:hover': { bgcolor: 'divider', color: 'text.primary' },
        },
      }}
    >
      {options.map(o => <ToggleButton key={o.value} value={o.value}>{o.label}</ToggleButton>)}
    </ToggleButtonGroup>
  )
}
