import Stack, { type StackProps } from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { omitProps } from '@/shared/theme/sx'
import { resolveColor } from '@/shared/theme/theme'
import { radius } from '@/shared/theme/tokens'
import type { MafiaColor, MafiaSize } from '@/shared/theme/theme.types'

export type MafiaCardVariant = 'outlined' | 'soft' | 'filled'

export interface MafiaCardProps extends Omit<StackProps, 'color'> {
  /** outlined = border (tinted for non-neutral colors) · soft = translucent fill · filled = solid. Default `outlined`. */
  variant?: MafiaCardVariant
  /** Default `neutral`. */
  color?: MafiaColor
  /** Inner padding. Default `medium`. */
  padding?: MafiaSize
  /** Background override: palette path (`'background.default'`) or any CSS color. */
  bgColor?: string
  /** Border override: palette path or any CSS color. */
  borderColor?: string
}

const PADDING: Record<MafiaSize, number> = { small: 16, medium: 32, large: 36 }

interface StyleProps {
  mVariant: MafiaCardVariant
  mColor: MafiaColor
  mPadding: MafiaSize
  bg?: string
  border?: string
}

const Root = styled(Stack, { shouldForwardProp: omitProps('mVariant', 'mColor', 'mPadding', 'bg', 'border') })<StyleProps>(
  ({ theme, mVariant, mColor, mPadding, bg, border }) => {
    const { palette } = theme
    const c = palette[mColor]
    const neutral = mColor === 'neutral'

    const look = {
      outlined: {
        backgroundColor: neutral ? palette.background.paper : c.opacity[8],
        borderColor: neutral ? palette.divider : c.main,
        color: palette.text.primary,
      },
      soft: { backgroundColor: neutral ? palette.surface.raised : c.opacity[12], borderColor: 'transparent', color: palette.text.primary },
      filled: { backgroundColor: c.main, borderColor: 'transparent', color: c.contrastText },
    }[mVariant]

    return {
      padding: PADDING[mPadding],
      borderRadius: radius.card,
      border: '1px solid',
      ...look,
      ...(bg && { backgroundColor: resolveColor(theme, bg) }),
      ...(border && { borderColor: resolveColor(theme, border) }),
    }
  }
)

export default function MafiaCard({
  variant = 'outlined',
  color = 'neutral',
  padding = 'medium',
  bgColor,
  borderColor,
  ...rest
}: MafiaCardProps) {
  return <Root mVariant={variant} mColor={color} mPadding={padding} bg={bgColor} border={borderColor} {...rest} />
}
