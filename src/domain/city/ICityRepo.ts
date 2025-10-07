import type { City, CityPreview } from './City'

export interface CityFindAllFilters {
  name?: string
  categoryId?: string | null
}

export interface ICityRepo {
  findAll(filters: CityFindAllFilters): Promise<CityPreview[]>
  findById(id: string): Promise<City>
  getRelatedCities(cityId: string): Promise<CityPreview[]>
}
