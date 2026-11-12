import { createTheme, type PaletteColor, type Theme } from '@mui/material/styles'
import { colors, opacityScale } from './colors'
import { components } from './components'
import { typography } from './typography'

const withOpacity = (c: PaletteColor) => ({ ...c, opacity: opacityScale(c.main) })

const base = createTheme({
  palette: {
    mode: 'dark',
    primary: colors.primary,
    secondary: colors.secondary,
    neutral: colors.neutral,
    background: colors.background,
    text: colors.text,
    divider: colors.line.divider,
    surface: colors.surface,
    line: colors.line,
    team: colors.team,
  },
  shape: { borderRadius: 6 },
  typography,
  components,
})

// MUI's built-in status colors get the same opacity scale as the brand colors.
export const theme = createTheme(base, {
  palette: {
    error: withOpacity(base.palette.error),
    warning: withOpacity(base.palette.warning),
    info: withOpacity(base.palette.info),
    success: withOpacity(base.palette.success),
  },
})

/** Resolves a palette path (`'primary.main'`, `'primary.opacity.16'`) or returns a raw CSS color unchanged. */
export function resolveColor(t: Theme, value: string): string {
  const found = value
    .split('.')
    .reduce<unknown>((node, key) => (node as Record<string, unknown> | undefined)?.[key], t.palette)
  return typeof found === 'string' ? found : value
}
