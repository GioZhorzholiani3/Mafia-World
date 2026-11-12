import Alert from '@mui/material/Alert'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MafiaButton, MafiaIcon, MafiaInput, MafiaSegmentedControl, useMafiaDialogTitleId } from '@/shared/ui'
import { useAuthController } from '../auth.controller'
import { PASSWORD_MIN_LENGTH } from '../constants/auth.constants'

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const { modeOptions, mode, isLogin, copy, isSubmitting, error, changeMode, submit } = useAuthController({ onSuccess })
  const titleId = useMafiaDialogTitleId()

  return (
    <Stack spacing={3}>
      <Stack spacing={1.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <MafiaIcon name="hat" size={44} strokeWidth={1.5} sx={{ color: 'secondary.main' }} />
        <Typography id={titleId} variant="h3" component="h2" sx={{ fontSize: 36 }}>{copy.title}</Typography>
        <Typography variant="body2" color="text.secondary">{copy.subtitle}</Typography>
      </Stack>

      <MafiaSegmentedControl aria-label="Account" options={modeOptions} value={mode} onChange={changeMode} />

      <Stack component="form" spacing={2} onSubmit={submit}>
        {error && <Alert severity="error" variant="outlined">{error}</Alert>}

        {!isLogin && (
          <MafiaInput label="Nickname at the table" name="nickname" placeholder="e.g. Don Vito" required autoComplete="nickname" />
        )}

        <MafiaInput label="Email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />

        <MafiaInput
          label="Password"
          labelAside={isLogin && <Link href="#forgot" sx={{ fontSize: 14, color: 'secondary.main' }}>Forgot password?</Link>}
          name="password"
          type="password"
          placeholder="••••••••"
          required
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          slotProps={{ input: { minLength: PASSWORD_MIN_LENGTH } }}
        />

        {isLogin && (
          <FormControlLabel
            control={<Checkbox name="remember" size="small" />}
            label="Keep me logged in"
            slotProps={{ typography: { sx: { fontSize: 14, color: 'text.secondary' } } }}
          />
        )}

        <MafiaButton type="submit" size="large" fullWidth loading={isSubmitting} sx={{ mt: 1 }}>
          {copy.submit}
        </MafiaButton>
      </Stack>
    </Stack>
  )
}
