import type { ICategoryRepo } from './category/ICategoryRepo'
import type { ICityRepo } from './city/ICityRepo'

export interface Repositories {
  city: ICityRepo
  category: ICategoryRepo
}
