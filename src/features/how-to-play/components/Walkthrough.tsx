import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { radius } from '@/shared/theme/tokens'
import { MafiaButton, MafiaCard, MafiaHeading, MafiaMetaList, useMafiaDialogTitleId } from '@/shared/ui'
import { useHowToPlayController } from '../how-to-play.controller'

export default function Walkthrough({ onFinish }: { onFinish: () => void }) {
  const { facts, total, stepNumber, step, progress, isFirst, nextLabel, back, next } = useHowToPlayController({ onFinish })
  const titleId = useMafiaDialogTitleId()

  return (
    <Stack spacing={3.5}>
      <MafiaHeading id={titleId} eyebrow="How to play" title={`Learn Mafia in ${total} steps`} variant="h3" sx={{ pr: 5 }}>
        <MafiaMetaList items={facts} spacing={2.5} />
      </MafiaHeading>

      <Stack direction="row" spacing={1} aria-hidden="true">
        {progress.map((done, k) => (
          <Box
            key={k}
            sx={{ flex: 1, height: 4, borderRadius: radius.bar, bgcolor: done ? 'primary.main' : 'divider', transition: 'background-color .2s' }}
          />
        ))}
      </Stack>

      <Stack direction="row" useFlexGap aria-live="polite" sx={{ flexWrap: 'wrap', alignItems: 'flex-start', gap: 3.5, minHeight: 240 }}>
        <MafiaCard
          variant="filled"
          color="primary"
          padding="small"
          spacing={0.25}
          sx={{ flex: '0 0 auto', width: 120, height: 120, borderRadius: radius.badge, alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography variant="label">Step</Typography>
          <Typography component="span" variant="h4" sx={{ fontSize: 56, lineHeight: 1 }}>{stepNumber}</Typography>
        </MafiaCard>

        <Stack spacing={1.75} sx={{ flex: '1 1 300px', minWidth: 0 }}>
          <Typography variant="h4" component="h3" sx={{ fontSize: 32 }}>{step.title}</Typography>
          <Typography sx={{ fontSize: 17, lineHeight: 1.65, color: 'text.soft' }}>{step.body}</Typography>
          <MafiaCard padding="small" bgColor="background.default" sx={{ display: 'block', fontSize: 14, lineHeight: 1.55, color: 'text.secondary' }}>
            <Box component="strong" sx={{ color: 'text.primary' }}>Tip: </Box>
            {step.tip}
          </MafiaCard>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 1.5, pt: 3, borderTop: 1, borderColor: 'divider' }}
      >
        <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>Step {stepNumber} of {total}</Typography>
        <Stack direction="row" spacing={1.25}>
          <MafiaButton variant="outlined" color="neutral" disabled={isFirst} onClick={back}>Back</MafiaButton>
          <MafiaButton onClick={next}>{nextLabel}</MafiaButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
