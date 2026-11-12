import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import MafiaHeading from './MafiaHeading'

export interface MafiaSectionProps {
  /** Anchor id (`#roles`). The heading gets `${id}-heading`. */
  id: string
  eyebrow: string
  title: string
  /** Full-width band with the paper background and top/bottom borders. */
  band?: boolean
  children: ReactNode
}

export default function MafiaSection({ id, eyebrow, title, band = false, children }: MafiaSectionProps) {
  const headingId = `${id}-heading`

  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={headingId}
      sx={band ? { bgcolor: 'background.paper', borderBlock: 1, borderColor: 'divider' } : undefined}
    >
      <Container sx={{ py: { xs: 9, md: 14 }, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <MafiaHeading id={headingId} eyebrow={eyebrow} title={title} sx={{ maxWidth: 640 }} />
        {children}
      </Container>
    </Box>
  )
}
