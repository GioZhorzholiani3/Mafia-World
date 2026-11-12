import hat from './hat'
import crown from './crown'
import search from './search'
import medic from './medic'
import home from './home'
import help from './help'
import user from './user'
import users from './users'
import clock from './clock'
import shield from './shield'
import moon from './moon'
import sun from './sun'
import ballot from './ballot'
import close from './close'

export const ICON_PATHS = {
  hat,
  crown,
  search,
  medic,
  home,
  help,
  user,
  users,
  clock,
  shield,
  moon,
  sun,
  ballot,
  close,
}

export type IconName = keyof typeof ICON_PATHS
