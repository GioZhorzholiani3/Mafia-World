import type { CSSProperties } from 'react'
import type { Team } from '@/shared/types/game'
import type { OpacityScale } from './colors'

/** Palette colors the Mafia* components accept through their `color` prop. */
export type MafiaColor = 'primary' | 'secondary' | 'neutral'
export type MafiaSize = 'small' | 'medium' | 'large'

declare module '@mui/material/styles' {
  interface PaletteColor {
    opacity: OpacityScale
  }
  interface SimplePaletteColorOptions {
    opacity?: OpacityScale
  }
  interface Palette {
    neutral: PaletteColor
    surface: { raised: string }
    line: { card: string; strong: string; input: string }
    team: Record<Team, string>
  }
  interface PaletteOptions {
    neutral?: SimplePaletteColorOptions
    surface?: { raised: string }
    line?: { card: string; strong: string; input: string }
    team?: Record<Team, string>
  }
  interface TypeText {
    soft: string
  }
  interface TypographyVariants {
    eyebrow: CSSProperties
    label: CSSProperties
  }
  interface TypographyVariantsOptions {
    eyebrow?: CSSProperties
    label?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    eyebrow: true
    label: true
  }
}
