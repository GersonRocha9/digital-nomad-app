import type { Category, CategoryCode } from '@/src/domain/category/Category'

import { Pill, type IPillProps } from './pill'

import type { IconName } from './icon'

type CategoryPillProps = {
  category: Category
} & Pick<IPillProps, 'active' | 'onPress'>

export function CategoryPill({ category, ...pillProps }: CategoryPillProps) {
  return (
    <Pill
      iconName={categoryIconMap[category.code]}
      label={category.name}
      {...pillProps}
    />
  )
}

export const categoryIconMap: Record<CategoryCode, IconName> = {
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
