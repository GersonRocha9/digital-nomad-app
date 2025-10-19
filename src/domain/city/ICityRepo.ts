import type { Category } from '../category/Category'
// eslint-disable-next-line import/order
import type { City, CityPreview } from './City'

export interface CityFindAllFilters {
  name?: string
  categoryId?: string | null
}

export interface CityToggleFavoriteParams {
  cityId: string
  isFavorite: boolean
}

export interface CitiesGroupedByCategory {
  category: Category
  cities: CityPreview[]
}

export interface ICityRepo {
  findAll(filters: CityFindAllFilters): Promise<CityPreview[]>
  findById(id: string): Promise<City>
  findGroupedByCategory(): Promise<CitiesGroupedByCategory[]>
  getRelatedCities(cityId: string): Promise<CityPreview[]>
  toggleFavorite(params: CityToggleFavoriteParams): Promise<void>
  findAllFavorites(): Promise<CityPreview[]>
}
