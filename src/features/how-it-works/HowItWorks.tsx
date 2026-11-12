import { MafiaCardGrid, MafiaSection } from '@/shared/ui'
import { useHowItWorksController } from './how-it-works.controller'
import PhaseCard from './components/PhaseCard'

export default function HowItWorks() {
  const { phases } = useHowItWorksController()

  return (
    <MafiaSection id="how" band eyebrow="How a round works" title="Night falls. Day breaks. Someone hangs.">
      <MafiaCardGrid minItemWidth={300} spacing={3}>
        {phases.map(p => <PhaseCard key={p.title} phase={p} />)}
      </MafiaCardGrid>
    </MafiaSection>
  )
}
