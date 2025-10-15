import { useAppQuery } from '@/src/infra/operations/useAppQuery'
import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

export function useCityRelatedCities(cityId: string) {
  const { city } = useRepository()

  return useAppQuery(() => city.getRelatedCities(cityId))
}
