import { cities } from './cities'

import type { CityPreview } from '../types'

interface ICityFilter {
  cityName?: string
  categoryId?: string | null
}

export function useCities({ cityName, categoryId }: ICityFilter): {
  cityPreviewList: CityPreview[]
} {
  let cityPreviewList = [...cities]

  if (cityName) {
    cityPreviewList = cityPreviewList.filter((city) => {
      return city.name.toLowerCase().includes(cityName.toLowerCase())
    })
  }

  if (categoryId) {
    cityPreviewList = cityPreviewList.filter((city) => {
      return city.categories.some((category) => category.id === categoryId)
    })
  }

  return { cityPreviewList }
}
