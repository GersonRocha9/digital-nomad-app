import type { City, CityPreview } from '@/src/domain/city/City'
import type {
  CityToggleFavoriteParams,
  ICityRepo,
} from '@/src/domain/city/ICityRepo'

import { supabase } from './supabase'
import { storageURL, supabaseAdapter } from './supabaseAdapter'

export interface CityFilters {
  name?: string
  categoryId?: string | null
}

async function findAll(filters: CityFilters): Promise<CityPreview[]> {
  try {
    const fields = 'id, name, country, cover_image'

    if (filters.categoryId) {
      const { data: cities } = await supabase
        .from('cities_with_categories')
        .select(fields)
        .eq('category_id', filters.categoryId)
        .ilike('name', `%${filters.name}%`)

      if (!cities) {
        throw new Error('No data found')
      }

      return cities?.map(supabaseAdapter.toCityPreview)
    }

    const { data: cities } = await supabase
      .from('cities')
      .select(fields)
      .ilike('name', `%${filters.name}%`)

    return (
      cities?.map((row) => ({
        id: row.id,
        name: row.name,
        country: row.country,
        coverImage: `${storageURL}/${row.cover_image}`,
      })) || []
    )
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch cities')
  }
}

async function findById(id: string): Promise<City> {
  const { data, error } = await supabase
    .from('cities_with_full_info')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw new Error('city not found')
  }

  return supabaseAdapter.toCity(data)
}

async function getRelatedCities(cityId: string): Promise<CityPreview[]> {
  const { data } = await supabase
    .from('related_cities')
    .select('*')
    .eq('source_city_id', cityId)
    .throwOnError()

  return data.map(supabaseAdapter.toCityPreview)
}

async function toggleFavorite(params: CityToggleFavoriteParams): Promise<void> {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    throw new Error('invalid session')
  }

  if (params.isFavorite) {
    await supabase
      .from('favorite_cities')
      .delete()
      .eq('user_id', data.session?.user.id)
      .eq('city_id', params.cityId)
  } else {
    await supabase
      .from('favorite_cities')
      .insert({ city_id: params.cityId, user_id: data.session.user.id })
  }
}

export const supabaseCityRepo: ICityRepo = {
  findAll,
  findById,
  getRelatedCities,
  toggleFavorite,
}
