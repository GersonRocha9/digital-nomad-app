import type { Repositories } from '@/src/domain/Repositories'

import { SupabaseAuthRepo } from './SupabaseAuthRepo'
import { supabaseCategoryRepo } from './supabaseCategoryRepo'
import { supabaseCityRepo } from './supabaseCityRepo'

export const SupabaseRepository: Repositories = {
  auth: new SupabaseAuthRepo(),
  city: supabaseCityRepo,
  category: supabaseCategoryRepo,
}
