import type { Category } from '../category/Category'

export interface TouristAttraction {
  id: string
  name: string
  description: string
  cityId: string
}

export interface City {
  id: string
  name: string
  country: string
  coverImage: string
  description: string
  touristAttractions: TouristAttraction[]
  location: {
    latitude: number
    longitude: number
  }
  categories: Category[]
  isFavorite: boolean
}

export type CityPreview = Pick<
  City,
  'id' | 'name' | 'country' | 'coverImage' | 'isFavorite'
>
