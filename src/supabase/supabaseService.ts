import { supabase } from './supabase'

import type { CityPreview } from '../types'

const storageUrl = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

export interface ICityFilters {
  name?: string
  categoryId?: string | null
}

async function findAll(filters: ICityFilters): Promise<CityPreview[]> {
  try {
    console.log('filters', filters)
    const { data } = await supabase
      .from('cities')
      .select('*')
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

export const supabaseService = {
  findAll,
}
