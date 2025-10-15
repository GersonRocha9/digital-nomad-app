import type { Repositories } from '@/src/domain/Repositories'

import { InMemoryAuthUserRepo } from './InMemoryAuthRepo'
import { InMemoryCategoryRepo } from './InMemoryCategoryRepo'
import { InMemoryCityRepo } from './InMemoryCityRepo'

export const InMemoryRepository: Repositories = {
  auth: new InMemoryAuthUserRepo(),
  city: new InMemoryCityRepo(),
  category: new InMemoryCategoryRepo(),
}
