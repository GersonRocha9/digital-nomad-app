import { supabaseService } from '../infra/repositories/adapters/supabase/supabaseService'

import { useFetchData } from './useFetchData'

export function useCategories() {
  return useFetchData(() => supabaseService.listCategories())
}
