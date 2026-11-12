export const OPACITY_STEPS = [4, 8, 12, 16, 24, 32, 40, 48, 64, 80] as const
export type OpacityStep = (typeof OPACITY_STEPS)[number]
export type OpacityScale = Record<OpacityStep, string>

/** `#C8102E` → `{ 4: 'rgba(200, 16, 46, 0.04)', 8: …, 80: … }` */
export function opacityScale(hex: string): OpacityScale {
  const n = Number.parseInt(hex.replace('#', ''), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return Object.fromEntries(
    OPACITY_STEPS.map(step => [step, `rgba(${r}, ${g}, ${b}, ${step / 100})`])
  ) as OpacityScale
}

function paletteColor(main: string, light: string, dark: string, contrastText: string) {
  return { main, light, dark, contrastText, opacity: opacityScale(main) }
}

// Change these to re-skin the whole app.
export const colors = {
  primary: paletteColor('#C8102E', '#E23A54', '#A50D26', '#FFFFFF'),
  secondary: paletteColor('#FF6B6B', '#FF8F8F', '#E04F4F', '#0E0D0C'),
  neutral: paletteColor('#F2EDE6', '#FFFFFF', '#D6CFC7', '#0E0D0C'),

  background: { default: '#0E0D0C', paper: '#151311' },
  surface: { raised: '#1A1816' },
  text: { primary: '#F2EDE6', secondary: '#B8B0A7', soft: '#D6CFC7' },
  line: { divider: '#2A2724', card: '#3A3531', strong: '#4A4540', input: '#6B645D' },
  team: { mafia: '#FF6B6B', town: '#7FB2FF', host: '#E8C77A' },
  overlay: 'rgb(8 7 6 / 0.78)',
}
