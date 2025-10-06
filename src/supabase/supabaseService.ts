import { supabase } from './supabase'

import type { CityPreview } from '../types'

const storageUrl = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL

async function findAll(): Promise<CityPreview[]> {
  try {
    const { data } = await supabase.from('cities').select('*').limit(10)

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
