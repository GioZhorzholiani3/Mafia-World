import type { Components, Theme } from '@mui/material/styles'
import { colors } from './colors'

// Global MUI defaults only. Look-and-feel of buttons, cards, inputs and dialogs lives in shared/ui/Mafia*.
export const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      html: { scrollBehavior: 'smooth' },
      '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } },
      a: { color: colors.text.primary, '&:hover': { color: colors.secondary.main } },
      ':focus-visible': { outline: `2px solid ${colors.secondary.main}`, outlineOffset: 3 },
    },
  },
  MuiTypography: {
    defaultProps: { variantMapping: { eyebrow: 'p', label: 'span' } },
  },
  MuiContainer: {
    defaultProps: { maxWidth: false, disableGutters: true },
    styleOverrides: { root: { maxWidth: 1288, paddingInline: 24 } },
  },
  MuiPaper: {
    styleOverrides: { root: { backgroundImage: 'none' } },
  },
}
