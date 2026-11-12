import type { ElementType, ReactNode } from 'react'
import Box from '@mui/material/Box'

export interface MafiaCardGridProps {
  children: ReactNode
  /** Columns shrink to fit but never below this width. Default 260. */
  minItemWidth?: number
  /** Gap in theme spacing units. Default 2.5. */
  spacing?: number
  /** Use `'ul'` when the children are `<li>` cards. Default `'div'`. */
  component?: ElementType
}

export default function MafiaCardGrid({ children, minItemWidth = 260, spacing = 2.5, component = 'div' }: MafiaCardGridProps) {
  return (
    <Box
      component={component}
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minItemWidth}px, 100%), 1fr))`,
        gap: spacing,
        m: 0,
        p: 0,
        listStyle: 'none',
      }}
    >
      {children}
    </Box>
  )
}
