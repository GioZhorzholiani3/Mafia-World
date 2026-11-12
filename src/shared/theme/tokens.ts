// Non-color design tokens. Radii are px strings on purpose: a bare number in `sx`
// is multiplied by theme.shape.borderRadius (6), so `borderRadius: 2` would render 12px.

export const radius = {
  bar: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  card: '10px',
  badge: '12px',
  panel: '14px',
} as const

export const shadows = {
  card: '0 30px 60px rgb(0 0 0 / 0.55)',
  raised: '0 40px 80px rgb(0 0 0 / 0.7)',
  modal: '0 40px 100px rgb(0 0 0 / 0.7)',
} as const
