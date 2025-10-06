import { supabase } from './supabase'

import type { CategoryCode, CityPreview, ICategory } from '../types'

const storageUrl = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

export interface ICityFilters {
  name?: string
  categoryId?: string | null
}

async function findAll(filters: ICityFilters): Promise<CityPreview[]> {
  try {
    const fields = 'id, name, country, cover_image'

    if (filters.categoryId) {
      const { data } = await supabase
        .from('cities_with_categories')
        .select(fields)
        .eq('category_id', filters.categoryId)
        .ilike('name', `%${filters.name}%`)

      if (!data) {
        throw new Error('No data found')
      }

      return (data.map((row) => ({
        id: row.id || '',
        name: row.name,
        country: row.country,
        coverImage: `${storageUrl}/${row.cover_image}`,
      })) || []) as CityPreview[]
    }

    const { data } = await supabase
      .from('cities')
      .select(fields)
      .ilike('name', `%${filters.name}%`)

    return (
      data?.map((row) => ({
        id: row.id,
        name: row.name,
        country: row.country,
        coverImage: `${storageUrl}/${row.cover_image}`,
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

export const supabaseService = {
  findAll,
  listCategories,
}
