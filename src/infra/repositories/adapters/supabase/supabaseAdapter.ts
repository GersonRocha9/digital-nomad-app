import type { AuthUser } from '@/src/domain/auth/AuthUser'
import type { Category, CategoryCode } from '@/src/domain/category/Category'
import type {
  City,
  CityPreview,
  TouristAttraction,
} from '@/src/domain/city/City'

import type { AuthUser as SupabaseAuthUser } from '@supabase/supabase-js'
// eslint-disable-next-line import/order
import type { Database } from './types'

export const storageURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

type CityWithFullInfo =
  Database['public']['Views']['cities_with_full_info']['Row'] & {
    favorite_cities: {
      user_id: string
    }[]
  }

type CategoryRow = Database['public']['Tables']['categories']['Row']
type TouristAttractionRow =
  Database['public']['Tables']['tourist_attractions']['Row']

interface CityPreviewRow {
  id: string | null
  name: string | null
  country: string | null
  cover_image: string | null
  favorite_cities?: {
    user_id: string
  }[]
}

function toCity(data: CityWithFullInfo): City {
  const categories = data.categories as CategoryRow[]
  const tourist_attractions = data.tourist_attractions as TouristAttractionRow[]

  return {
    id: data.id as string,
    name: data.name as string,
    country: data.country as string,
    description: data.description as string,
    coverImage: `${storageURL}/${data.cover_image}`,
    location: {
      latitude: data.latitude as number,
      longitude: data.longitude as number,
    },
    categories: categories.map(toCategory),
    touristAttractions: tourist_attractions.map(toTouristAttractions),
    isFavorite: data.favorite_cities.length > 0,
  }
}

function toTouristAttractions(row: TouristAttractionRow): TouristAttraction {
  return {
    id: row.id,
    description: row.description,
    name: row.name,
    cityId: row.city_id as string,
  }
}

function toCategory(row: CategoryRow): Category {
  return {
    id: row.id,
    description: row.description,
    name: row.name,
    code: row.code as CategoryCode,
  }
}

function toAuthUser(supabaseUser: SupabaseAuthUser): AuthUser {
  if (!supabaseUser.email) {
    throw new Error('email not found')
  }

  return {
    id: supabaseUser.id,
    email: supabaseUser.email,
    fullname: supabaseUser.user_metadata.fullname,
    createdAt: supabaseUser.created_at,
  }
}

function toCityPreview(row: CityPreviewRow, isFavorite?: boolean): CityPreview {
  return {
    id: row.id as string,
    country: row.country as string,
    name: row.name as string,
    coverImage: `${storageURL}/${row.cover_image}` as string,
    isFavorite:
      isFavorite ??
      (row.favorite_cities && row.favorite_cities?.length > 0) ??
      false,
  }
}

export const supabaseAdapter = {
  toCity,
  toCityPreview,
  toAuthUser,
}
