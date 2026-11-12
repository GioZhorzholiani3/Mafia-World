import type { TypographyVariantsOptions } from '@mui/material/styles'
import { colors } from './colors'

export const FONT_SANS = 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif'
export const FONT_DISPLAY = '"DM Serif Display", Georgia, serif'

const display = { fontFamily: FONT_DISPLAY, fontWeight: 400 } as const

export const typography: TypographyVariantsOptions = {
  fontFamily: FONT_SANS,
  h1: { ...display, fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.01em' },
  h2: { ...display, fontSize: 'clamp(38px, 5vw, 56px)', lineHeight: 1.05 },
  h3: { ...display, fontSize: 'clamp(30px, 5vw, 40px)', lineHeight: 1.1 },
  h4: { ...display, fontSize: 30, lineHeight: 1.15 },
  h5: { fontSize: 22, fontWeight: 600, lineHeight: 1.3 },
  subtitle1: { fontSize: 19, lineHeight: 1.6, color: colors.text.secondary },
  body1: { fontSize: 16, lineHeight: 1.6 },
  body2: { fontSize: 15, lineHeight: 1.6 },
  eyebrow: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: colors.secondary.main,
  },
  /** Small all-caps tag: team names, "ROLE", "STEP". */
  label: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  },
}
