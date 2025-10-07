import type { Repositories } from '@/src/domain/Repositories'
import { supabaseCityRepo } from '@/src/supabase/supabaseService'

export const SupabaseRepository: Repositories = {
  city: supabaseCityRepo,
}
