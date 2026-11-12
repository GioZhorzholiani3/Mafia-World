import { MafiaDialog, type MafiaModalProps } from '@/shared/ui'
import Walkthrough from './components/Walkthrough'

export default function HowToPlayModal({ open, onClose }: MafiaModalProps) {
  return (
    <MafiaDialog open={open} onClose={onClose} size="large">
      <Walkthrough onFinish={onClose} />
    </MafiaDialog>
  )
}
