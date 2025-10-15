import {
  type CityFilters,
  supabaseService,
} from '../infra/repositories/adapters/supabase/supabaseService'

import { useFetchData } from './useFetchData'

export function useCities(filters: CityFilters) {
  return useFetchData(() => supabaseService.findAll(filters), [filters])
}
