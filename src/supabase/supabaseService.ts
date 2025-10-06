import { supabase } from './supabase'
import { storageURL, supabaseAdapter } from './supabaseAdapter'

import type { CategoryCode, CityPreview, ICategory, ICity } from '../types'

export interface ICityFilters {
  name?: string
  categoryId?: string | null
}

async function findAll(filters: ICityFilters): Promise<CityPreview[]> {
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

async function listCategories(): Promise<ICategory[]> {
  const { data, error } = await supabase.from('categories').select('*')

  if (error) {
    throw new Error('Failed to fetch categories')
  }

  return data.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    code: row.code as CategoryCode,
  }))
}

async function findById(id: string): Promise<ICity> {
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

export const supabaseService = {
  findAll,
  listCategories,
  findById,
  getRelatedCities,
}
