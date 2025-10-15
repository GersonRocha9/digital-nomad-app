import { supabaseService, type CityFilters } from '../supabase/supabaseService'

import { useFetchData } from './useFetchData'

export function useCities(filters: CityFilters) {
  return useFetchData(() => supabaseService.findAll(filters), [filters])
}
