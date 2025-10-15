import { supabaseService } from '../infra/repositories/adapters/supabase/supabaseService'

import { useFetchData } from './useFetchData'

export function useRelatedCities(cityId: string) {
  return useFetchData(() => supabaseService.getRelatedCities(cityId))
}
