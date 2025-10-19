import type { AuthUser } from '@/src/domain/auth/AuthUser'
import type {
  AuthSignUpParams,
  AuthUpdatePasswordParams,
  AuthUpdateProfileParams,
  IAuthRepo,
} from '@/src/domain/auth/IAuthRepo'

import { authUsers } from './data/authUsers'

export class InMemoryAuthUserRepo implements IAuthRepo {
  async signIn(email: string, password: string): Promise<AuthUser> {
    const user = authUsers.find((user) => user.email === email)

    if (user) {
      return user
    }

    throw new Error('Usuário não encontrado')
  }

  async signOut(): Promise<void> {}

  async signUp(params: AuthSignUpParams): Promise<void> {
    const userAlreadyExists = authUsers.find(
      (user) => user.email === params.email,
    )

    if (userAlreadyExists) {
      throw new Error('user already exists')
    }

    return
  }

  async sendResetPasswordEmail(email: string): Promise<void> {
    console.log('the reset password has been sent:', email)
  }

  getUser = async (): Promise<AuthUser> => {
    return authUsers[0]
  }

  updateProfile = async (params: AuthUpdateProfileParams): Promise<void> => {
    console.log({ params })
  }

  updatePassword = async (params: AuthUpdatePasswordParams): Promise<void> => {
    console.log({ params })
  }
}
