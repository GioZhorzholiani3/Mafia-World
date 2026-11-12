import { MafiaDialog, type MafiaModalProps } from '@/shared/ui'
import LoginForm from './components/LoginForm'

export default function LoginModal({ open, onClose }: MafiaModalProps) {
  return (
    <MafiaDialog open={open} onClose={onClose} size="small">
      <LoginForm onSuccess={onClose} />
    </MafiaDialog>
  )
}
