import type { ICategoryRepo } from '@/src/domain/category/ICategoryRepo'
import type { Category } from '@/src/types'

import { categories } from './categories'

export class InMemoryCategoryRepo implements ICategoryRepo {
  async findAll(): Promise<Category[]> {
    return categories
  }
}
