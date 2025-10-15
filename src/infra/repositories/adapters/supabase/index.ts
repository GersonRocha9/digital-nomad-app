import type { Repositories } from '@/src/domain/Repositories'

import { InMemoryAuthUserRepo } from '../inMemory/InMemoryAuthRepo'

import { supabaseCategoryRepo } from './supabaseCategoryRepo'
import { supabaseCityRepo } from './supabaseCityRepo'

export const SupabaseRepository: Repositories = {
  auth: new InMemoryAuthUserRepo(), // TODO: replace for supabase implementation
  city: supabaseCityRepo,
  category: supabaseCategoryRepo,
}
