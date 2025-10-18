import type { DateISO8601 } from '../types'

export interface AuthUser {
  id: string
  email: string
  fullname: string
  createdAt: DateISO8601
}
