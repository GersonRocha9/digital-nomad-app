import { supabaseService, type ICityFilters } from '../supabase/supabaseService'

import { useFetchData } from './useFetchData'

export function useCities(filters: ICityFilters) {
  return useFetchData(() => supabaseService.findAll(filters), [filters])
}
