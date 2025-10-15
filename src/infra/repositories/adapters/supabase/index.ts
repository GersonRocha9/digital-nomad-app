import type { Repositories } from '@/src/domain/Repositories'

import { supabaseCategoryRepo } from './supabaseCategoryRepo'
import { supabaseCityRepo } from './supabaseCityRepo'

export const SupabaseRepository: Repositories = {
  city: supabaseCityRepo,
  category: supabaseCategoryRepo,
}
