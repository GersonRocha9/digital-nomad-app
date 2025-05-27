import createIconSetFromIcoMoon from '@expo/vector-icons/createIconSetFromIcoMoon'

import { useAppTheme } from './theme/useAppTheme'

import type { ThemeColors } from './theme/theme'

const IconFromIcoMoon = createIconSetFromIcoMoon(
  require('../../assets/icons/selection.json'),
  'IcoMoon',
  'icomoon.ttf',
)

export interface IIconProps {
  name: IconName
  color?: ThemeColors
  size?: number
}

export function Icon({ name, color = 'gray2', size = 24 }: IIconProps) {
  const { colors } = useAppTheme()

  return <IconFromIcoMoon name={name} size={size} color={colors[color]} />
}

export type IconName =
  | 'Adventure'
  | 'Beach'
  | 'Chevron-down'
  | 'Chevron-left'
  | 'Chevron-right'
  | 'Chevron-up'
  | 'Close'
  | 'Culture'
  | 'Explore'
  | 'Favorite-fill'
  | 'Favorite-outline'
  | 'Gastronomy'
  | 'Group'
  | 'History'
  | 'Home-fill'
  | 'Home-outline'
  | 'Luxury'
  | 'Nature'
  | 'Search-outline'
  | 'Shopping'
  | 'Star'
  | 'Urban'
  | 'Person-fill'
  | 'Person-outline'
  | 'Logout'
