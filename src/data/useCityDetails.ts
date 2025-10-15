import { supabaseService } from '../infra/repositories/adapters/supabase/supabaseService'

import { useFetchData } from './useFetchData'

export function useCityDetails(id: string) {
  return useFetchData(() => supabaseService.findById(id))
}
