import { createContext, useContext, useId, type ReactNode } from 'react'
import Box from '@mui/material/Box'
import Dialog, { type DialogProps } from '@mui/material/Dialog'
import { colors } from '@/shared/theme/colors'
import { radius, shadows } from '@/shared/theme/tokens'
import type { MafiaSize } from '@/shared/theme/theme.types'
import MafiaCloseButton from './MafiaCloseButton'

/** Props every modal rendered by the modal system receives. */
export interface MafiaModalProps {
  open: boolean
  onClose: () => void
}

export interface MafiaDialogProps extends Omit<DialogProps, 'onClose' | 'maxWidth' | 'children'> {
  onClose: () => void
  /** small 460px · medium 600px · large 720px. Default `medium`. */
  size?: MafiaSize
  children: ReactNode
}

const WIDTHS: Record<MafiaSize, number> = { small: 460, medium: 600, large: 720 }

const TitleIdContext = createContext<string | undefined>(undefined)

/** id to put on the dialog's title element; the dialog is labelled by it automatically. */
export function useMafiaDialogTitleId(): string | undefined {
  return useContext(TitleIdContext)
}

export default function MafiaDialog({ onClose, size = 'medium', children, slotProps, ...rest }: MafiaDialogProps) {
  const titleId = useId()

  return (
    <Dialog
      scroll="body"
      maxWidth={false}
      onClose={onClose}
      aria-labelledby={titleId}
      slotProps={{
        ...slotProps,
        paper: {
          sx: {
            width: 'calc(100% - 32px)',
            maxWidth: WIDTHS[size],
            m: { xs: '16px', sm: '64px 16px' },
            border: 1,
            borderColor: 'divider',
            borderRadius: radius.panel,
            boxShadow: shadows.modal,
          },
        },
        backdrop: { sx: { bgcolor: colors.overlay, backdropFilter: 'blur(4px)' } },
      }}
      {...rest}
    >
      <Box sx={{ position: 'relative', p: { xs: 3, sm: 5 } }}>
        <MafiaCloseButton onClick={onClose} sx={{ position: 'absolute', top: 14, right: 14 }}/>
        <TitleIdContext.Provider value={titleId}>{children}</TitleIdContext.Provider>
      </Box>
    </Dialog>
  )
}
