import Button, { type ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { omitProps } from '@/shared/theme/sx'
import { resolveColor } from '@/shared/theme/theme'
import { radius } from '@/shared/theme/tokens'
import type { MafiaColor, MafiaSize } from '@/shared/theme/theme.types'
import MafiaIcon, { type IconName } from './MafiaIcon'

export type MafiaButtonVariant = 'contained' | 'outlined' | 'soft' | 'text'

export interface MafiaButtonProps extends Omit<ButtonProps, 'variant' | 'size' | 'color'> {
  /** contained = solid fill · outlined = border · soft = translucent fill · text = no fill. Default `contained`. */
  variant?: MafiaButtonVariant
  /** Default `medium`. */
  size?: MafiaSize
  /** Default `primary`. */
  color?: MafiaColor
  /** Background override: palette path (`'secondary.opacity.24'`) or any CSS color. */
  bgColor?: string
  /** Text/icon color override: palette path or any CSS color. */
  textColor?: string
  /** Leading icon, sized to match the button. */
  icon?: IconName
}

const SIZES: Record<MafiaSize, { height: number; px: number; fontSize: number; icon: number }> = {
  small: { height: 44, px: 20, fontSize: 15, icon: 16 },
  medium: { height: 48, px: 24, fontSize: 15, icon: 18 },
  large: { height: 52, px: 28, fontSize: 16, icon: 20 },
}

interface StyleProps {
  mVariant: MafiaButtonVariant
  mSize: MafiaSize
  mColor: MafiaColor
  bg?: string
  fg?: string
}

const Root = styled(Button, { shouldForwardProp: omitProps('mVariant', 'mSize', 'mColor', 'bg', 'fg') })<StyleProps>(
  ({ theme, mVariant, mSize, mColor, bg, fg }) => {
    const c = theme.palette[mColor]
    const s = SIZES[mSize]

    const looks = {
      contained: { idle: { backgroundColor: c.main, color: c.contrastText }, hover: { backgroundColor: c.dark } },
      outlined: {
        idle: { backgroundColor: 'transparent', color: c.main, borderColor: c.opacity[40] },
        hover: { backgroundColor: c.opacity[8], borderColor: c.main },
      },
      soft: { idle: { backgroundColor: c.opacity[16], color: c.main }, hover: { backgroundColor: c.opacity[24] } },
      text: { idle: { backgroundColor: 'transparent', color: c.main }, hover: { backgroundColor: c.opacity[8] } },
    }[mVariant]

    const idle = {
      ...looks.idle,
      ...(bg && { backgroundColor: resolveColor(theme, bg) }),
      ...(fg && { color: resolveColor(theme, fg) }),
    }
    const hover = bg ? { filter: 'brightness(0.9)' } : looks.hover

    return {
      minHeight: s.height,
      padding: `0 ${s.px}px`,
      gap: 8,
      fontSize: s.fontSize,
      fontWeight: 600,
      lineHeight: 1.2,
      textTransform: 'none',
      borderRadius: radius.md,
      border: '1px solid transparent',
      transition: theme.transitions.create(['background-color', 'border-color', 'color', 'filter'], { duration: 150 }),
      ...idle,
      '&:hover': hover,
      '&.Mui-disabled': { ...idle, opacity: 0.4 },
    }
  }
)

export default function MafiaButton({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  bgColor,
  textColor,
  icon,
  children,
  ...rest
}: MafiaButtonProps) {
  return (
    <Root
      disableElevation
      variant="text"
      color="inherit"
      mVariant={variant}
      mSize={size}
      mColor={color}
      bg={bgColor}
      fg={textColor}
      {...rest}
    >
      {icon && <MafiaIcon name={icon} size={SIZES[size].icon} strokeWidth={1.8} />}
      {children}
    </Root>
  )
}
