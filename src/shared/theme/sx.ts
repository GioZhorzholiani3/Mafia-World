import type { SxProps, Theme } from '@mui/material/styles'

type SxPart = SxProps<Theme> | false | null | undefined

export function mergeSx(...parts: SxPart[]): SxProps<Theme> {
  return parts.flatMap(p => (!p ? [] : Array.isArray(p) ? p : [p])) as SxProps<Theme>
}

export function omitProps(...names: string[]) {
  const blocked = new Set<PropertyKey>(names)
  return (prop: PropertyKey) => !blocked.has(prop)
}
