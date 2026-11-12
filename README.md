# Mafia World

React + Vite project.

```bash
npm install
npm run dev
```

## Structure

React 18 + TypeScript + Vite, UI built with MUI. No CSS files: styling lives in the MUI theme and `sx` props.

```
src/
  main.tsx                  entry: theme + CssBaseline
  app/
    App.tsx                 page composition
    modals/                 modal context, controller and provider (lazy-loads modals)
  shared/
    api/http.ts             fetch client (base URL from VITE_API_URL), ApiError
    ui/                     Mafia* UI kit (import from '@/shared/ui')
    svg/                    icon paths, one file per icon (hat.tsx, moon.tsx…) + index.ts registry
    constants/ types/       cross-feature data and types
    theme/
      colors.ts             brand colors (primary / secondary / neutral) + opacity scales
      typography.ts         fonts and text variants (incl. custom `eyebrow`, `label`)
      tokens.ts             radius + shadow tokens
      sx.ts                 mergeSx(), omitProps() helpers for building components
      components.ts         global MUI defaults
      theme.types.ts        MUI type augmentation, MafiaColor / MafiaSize
      theme.ts              createTheme + resolveColor()
  features/<feature>/
    <Feature>.tsx           the feature's main view (e.g. HowItWorks.tsx): markup only
    <feature>.controller.ts hook with the logic; the main view and its components call it
    components/             sub-components used by the main view (e.g. PhaseCard.tsx)
    constants/              copy and static data (<feature>.constants.ts)
    api/                    requests + request/response types (only when the feature talks to a server)
```

## UI kit

Use the `Mafia*` components instead of styling MUI components one by one. Each takes
`size` (`small` | `medium` | `large`) and `color` (`primary` | `secondary` | `neutral`) where relevant, and `sx` still works for one-off overrides.

| Component | Key props (defaults first) |
| --- | --- |
| `MafiaButton` | `variant`: contained · outlined · soft · text, `size`: medium, `color`: primary, `bgColor`, `textColor`, `icon`, plus all MUI Button props (`href`, `loading`, `fullWidth`…) |
| `MafiaCard` | `variant`: outlined · soft · filled, `color`: neutral, `padding`: medium, `bgColor`, `borderColor`, plus Stack props (`spacing`, `direction`, `component`) |
| `MafiaDialog` | `size`: medium (small 460 · medium 600 · large 720), `onClose`; put `useMafiaDialogTitleId()` on the title. Modals take `MafiaModalProps` |
| `MafiaSection` | page section: `id`, `eyebrow`, `title`, `band` (paper background strip) |
| `MafiaHeading` | `eyebrow`, `title`, `variant` h2 · h3, `component`, children render under the title |
| `MafiaCardGrid` | responsive card grid: `minItemWidth`: 260, `spacing`, `component` (`'ul'` for `<li>` cards) |
| `MafiaMetaList` | inline muted facts: `items` (`{ label, icon? }`), `spacing` |
| `MafiaInput` | `label`, `labelAside`, plus OutlinedInput props |
| `MafiaCloseButton` | ✕ button: `onClick`, `size`: medium, `label`: "Close" (built into `MafiaDialog`) |
| `MafiaSegmentedControl` | `options`, `value`, `onChange` |
| `MafiaIcon` | `name`, `size`, `strokeWidth`. To add an icon: create `shared/svg/<name>.tsx` with its paths (24×24, stroke-only) and add it to `shared/svg/index.ts` |

```tsx
<MafiaButton>Play</MafiaButton>                                   // contained · primary · medium
<MafiaButton variant="outlined" color="neutral" size="large">Rules</MafiaButton>
<MafiaButton variant="soft" color="secondary" icon="user">Profile</MafiaButton>
<MafiaButton bgColor="team.town" textColor="#000">Custom</MafiaButton>
<MafiaCard color="primary" padding="large" spacing={2}>…</MafiaCard>
```

Colors: every palette color (primary, secondary, neutral, plus error/warning/info/success) has an opacity
scale — `primary.opacity.8`, `secondary.opacity.24`, … (steps 4, 8, 12, 16, 24, 32, 40, 48, 64, 80).
Use them anywhere a color is accepted: `sx={{ bgcolor: 'primary.opacity.16' }}`, `bgColor="neutral.opacity.8"`.
`bgColor` / `textColor` / `borderColor` accept a palette path or any CSS color.

Radii: use `radius` from `@/shared/theme/tokens` (`radius.card`, `radius.lg`…), never a bare number —
`sx={{ borderRadius: 2 }}` is multiplied by the theme's 6px and renders 12px. Shadows: `shadows.card | raised | modal`.
Small all-caps tags use `<Typography variant="label">`.

Rules:
- Use `Mafia*` components for buttons, cards, inputs and dialogs; add a new `Mafia*` component rather than re-styling MUI in a feature.
- Components render what their controller returns and call its handlers. State, effects, API calls and derived values go in the controller.
- Controllers call `api/`, never `fetch` directly. `api/` calls go through `shared/api/http.ts`.
- Features never import from each other; shared code goes in `shared/`. Opening a modal goes through `useModals()`.
- Import with the `@/` alias (`@/shared/...`).

Copy `.env.example` to `.env` and set `VITE_API_URL` to point at the backend.

Scripts: `npm run dev`, `npm run build` (type-checks first), `npm run typecheck`.
