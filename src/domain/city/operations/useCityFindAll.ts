import { useQuery } from '@tanstack/react-query'

import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

import type { CityFindAllFilters } from '../ICityRepo'

export function useCityFindAll(filters: CityFindAllFilters) {
  const { city } = useRepository()

  const { data, isLoading, error } = useQuery({
    queryKey: ['cities', filters.name, filters.categoryId],
    queryFn: () => city.findAll(filters),
  })

  return { data, isLoading, error }
  // return useAppQuery(
  //   () => city.findAll(filters),
  //   [filters.name, filters.categoryId],
  // )
}
