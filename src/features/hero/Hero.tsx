import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MafiaButton, MafiaMetaList } from '@/shared/ui'
import { useHeroController } from './hero.controller'
import CardFan from './components/CardFan'

export default function Hero() {
  const { facts, openHowToPlay } = useHeroController()

  return (
    <Container
      component="section"
      id="top"
      aria-labelledby="hero-title"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
        pt: { xs: 7, md: 12 },
        pb: { xs: 8, md: 14 },
      }}
    >
      <Stack spacing={3.5} sx={{ flex: '1 1 480px', minWidth: 0 }}>
        <Typography variant="eyebrow">The party game of lies &amp; deduction</Typography>
        <Typography id="hero-title" variant="h1">
          The town sleeps.
          <br />
          <Box component="em" sx={{ color: 'secondary.main' }}>The Mafia wakes.</Box>
        </Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: 520 }}>
          Every night, a hidden few choose a victim. Every day, the town argues, accuses and votes.
          Bluff your way to the end — or catch the liars before they catch you.
        </Typography>

        <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 1.75, pt: 1 }}>
          <MafiaButton size="large" onClick={openHowToPlay}>Learn how to play</MafiaButton>
          <MafiaButton size="large" variant="outlined" color="neutral" href="#roles">Meet the roles</MafiaButton>
        </Stack>

        <MafiaMetaList items={facts} spacing={3.5} sx={{ pt: 2 }} />
      </Stack>

      <CardFan />
    </Container>
  )
}
