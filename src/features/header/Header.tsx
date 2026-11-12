import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MafiaButton, MafiaIcon } from '@/shared/ui'
import { useHeaderController } from './header.controller'

export default function Header() {
  const { openLogin, openHowToPlay } = useHeaderController()

  return (
    <Box component="header" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container
        component="nav"
        aria-label="Main"
        sx={{ py: 2.5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}
      >
        <Link
          href="#top"
          underline="none"
          sx={{ display: 'flex', alignItems: 'center', gap: 1.25, '&:hover': { color: 'text.primary' } }}
        >
          <MafiaIcon name="hat" size={34} sx={{ color: 'primary.main' }} />
          <Typography component="span" variant="h4" sx={{ fontSize: 28, letterSpacing: '0.08em' }}>
            MAFIA
          </Typography>
        </Link>

        <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center', columnGap: 1.5, rowGap: 1 }}>
          <MafiaButton variant="text" color="neutral" size="small" onClick={openHowToPlay}>How to play</MafiaButton>
          <MafiaButton variant="text" color="neutral" size="small" href="#roles">Roles</MafiaButton>
          <MafiaButton size="small" icon="user" onClick={openLogin}>Log in</MafiaButton>
        </Stack>
      </Container>
    </Box>
  )
}
