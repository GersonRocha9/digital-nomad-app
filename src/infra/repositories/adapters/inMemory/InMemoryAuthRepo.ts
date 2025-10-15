import type { AuthUser } from '@/src/domain/auth/AuthUser'
import type { IAuthRepo } from '@/src/domain/auth/IAuthRepo'

import { authUsers } from './data/authUsers'

export class InMemoryAuthUserRepo implements IAuthRepo {
  async signIn(email: string, password: string): Promise<AuthUser> {
    const user = authUsers.find((user) => user.email === email)

    if (user) {
      return user
    }

    throw new Error('User not found')
  }

  async signOut(): Promise<void> {}
}
