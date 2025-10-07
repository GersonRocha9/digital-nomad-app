import type { Repositories } from '@/src/domain/Repositories'

import { InMemoryCityRepo } from './InMemoryCityRepo'

export const InMemoryRepository: Repositories = {
  city: new InMemoryCityRepo(),
}
