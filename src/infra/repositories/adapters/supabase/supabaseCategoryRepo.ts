import type { Category, CategoryCode } from '@/src/types'

import { supabase } from './supabase'

export interface CityFilters {
  name?: string
  categoryId?: string | null
}

async function findAll(): Promise<Category[]> {
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

export const supabaseCategoryRepo = {
  findAll,
}
