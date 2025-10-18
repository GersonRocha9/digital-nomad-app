import { useAppQuery } from '@/src/infra/operations/useAppQuery'
import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

export function useCityFindById(cityId: string) {
  const { city } = useRepository()

  return useAppQuery({
    queryKey: ['city', cityId],
    queryFn: () => city.findById(cityId),
  })
}
