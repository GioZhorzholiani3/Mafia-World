import type { ReactNode } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

export interface MafiaHeadingProps {
  title: ReactNode
  /** Small red all-caps line above the title. */
  eyebrow?: string
  /** id for the title element, so a section or dialog can point `aria-labelledby` at it. */
  id?: string
  /** Visual size. Default `h2`. */
  variant?: 'h2' | 'h3'
  /** Rendered element. Default `h2`. */
  component?: 'h1' | 'h2' | 'h3'
  /** Extra content under the title, e.g. a MafiaMetaList. */
  children?: ReactNode
  sx?: SxProps<Theme>
}

export default function MafiaHeading({ title, eyebrow, id, variant = 'h2', component = 'h2', children, sx }: MafiaHeadingProps) {
  return (
    <Stack spacing={1.5} sx={sx}>
      {eyebrow && <Typography variant="eyebrow">{eyebrow}</Typography>}
      <Typography id={id} variant={variant} component={component}>{title}</Typography>
      {children}
    </Stack>
  )
}
