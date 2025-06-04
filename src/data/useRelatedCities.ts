import { cities } from './cities'

import type { CityPreview } from '../types'

export function useRelatedCities(relatedCitiesId: string[]): CityPreview[] {
  return cities.filter((city) => relatedCitiesId.includes(city.id))
}
