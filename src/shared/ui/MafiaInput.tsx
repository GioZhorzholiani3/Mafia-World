import { useId, type ReactNode } from 'react'
import Box from '@mui/material/Box'
import OutlinedInput, { type OutlinedInputProps } from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import { mergeSx } from '@/shared/theme/sx'
import { radius } from '@/shared/theme/tokens'

export interface MafiaInputProps extends Omit<OutlinedInputProps, 'label'> {
  label: string
  /** Rendered at the right of the label row, e.g. a "Forgot password?" link. */
  labelAside?: ReactNode
}

export default function MafiaInput({ label, labelAside, id, sx, ...rest }: MafiaInputProps) {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <Stack spacing={1}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline', gap: 1.5 }}>
        <Box component="label" htmlFor={inputId} sx={{ fontSize: 14, fontWeight: 600 }}>{label}</Box>
        {labelAside}
      </Stack>
      <OutlinedInput
        id={inputId}
        sx={mergeSx(
          {
            bgcolor: 'background.default',
            borderRadius: radius.md,
            '& .MuiOutlinedInput-input': { height: 48, p: '0 14px', boxSizing: 'border-box' },
            '& .MuiOutlinedInput-input::placeholder': { color: 'text.secondary', opacity: 0.75 },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'line.input' },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.main' },
          },
          sx
        )}
        {...rest}
      />
    </Stack>
  )
}
