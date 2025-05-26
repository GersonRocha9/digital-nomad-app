export interface ITouristAttraction {
  id: string
  name: string
  description: string
  cityId: string
}

export type CategoryCode =
  | 'ADVENTURE'
  | 'BEACH'
  | 'CULTURE'
  | 'GASTRONOMY'
  | 'HISTORY'
  | 'LUXURY'
  | 'NATURE'
  | 'SHOPPING'
  | 'URBAN'
  | 'FAVORITE'

export interface ICategory {
  id: string
  name: string
  description: string | null
  code: CategoryCode
}

export interface ICity {
  id: string
  name: string
  country: string
  coverImage: number
  description: string
  touristAttractions: ITouristAttraction[]
  location: {
    latitude: number
    longitude: number
  }
  categories: ICategory[]
  relatedCitiesIds: string[]
}

export type CityPreview = Pick<ICity, 'id' | 'name' | 'country' | 'coverImage'>
