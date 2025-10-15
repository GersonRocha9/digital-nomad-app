import type { Category } from '@/src/domain/category/Category'
import type { ICategoryRepo } from '@/src/domain/category/ICategoryRepo'

import { categories } from './categories'

export class InMemoryCategoryRepo implements ICategoryRepo {
  async findAll(): Promise<Category[]> {
    return categories
  }
}
