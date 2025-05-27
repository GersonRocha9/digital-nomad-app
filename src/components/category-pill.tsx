import { Pill, type IPillProps } from './pill'

import type { CategoryCode, ICategory } from '../types'
import type { IconName } from './icon'

type ICategoryPillProps = {
  category: ICategory
} & Pick<IPillProps, 'active' | 'onPress'>

export function CategoryPill({ category, ...pillProps }: ICategoryPillProps) {
  return (
    <Pill
      iconName={categoryIconMap[category.code]}
      label={category.name}
      {...pillProps}
    />
  )
}

const categoryIconMap: Record<CategoryCode, IconName> = {
  ADVENTURE: 'Adventure',
  BEACH: 'Beach',
  CULTURE: 'Culture',
  FAVORITE: 'Star',
  GASTRONOMY: 'Gastronomy',
  HISTORY: 'History',
  LUXURY: 'Luxury',
  NATURE: 'Nature',
  SHOPPING: 'Shopping',
  URBAN: 'Urban',
}
