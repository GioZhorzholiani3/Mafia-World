import { MafiaCardGrid, MafiaSection } from '@/shared/ui'
import { useRolesController } from './roles.controller'
import RoleCard from './components/RoleCard'

export default function Roles() {
  const { roles } = useRolesController()

  return (
    <MafiaSection id="roles" eyebrow="Meet the cast" title="Who can you trust?">
      <MafiaCardGrid component="ul">
        {roles.map(r => <RoleCard key={r.name} role={r} />)}
      </MafiaCardGrid>
    </MafiaSection>
  )
}
