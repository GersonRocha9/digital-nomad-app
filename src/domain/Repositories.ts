import type { IAuthRepo } from './auth/IAuthRepo'
import type { ICategoryRepo } from './category/ICategoryRepo'
import type { ICityRepo } from './city/ICityRepo'

export interface Repositories {
  auth: IAuthRepo
  city: ICityRepo
  category: ICategoryRepo
}
