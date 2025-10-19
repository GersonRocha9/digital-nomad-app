import type { AuthUser } from './AuthUser'

export interface AuthSignUpParams {
  fullname: string
  email: string
  password: string
}

export interface AuthUpdateProfileParams {
  fullname: string
  email: string
}

export interface AuthUpdatePasswordParams {
  currentPassword: string
  newPassword: string
}

export interface IAuthRepo {
  signIn: (email: string, password: string) => Promise<AuthUser>
  signOut: () => Promise<void>
  signUp: (params: AuthSignUpParams) => Promise<void>
  sendResetPasswordEmail: (email: string) => Promise<void>
  getUser: () => Promise<AuthUser>
  updateProfile: (params: AuthUpdateProfileParams) => Promise<void>
  updatePassword: (params: AuthUpdatePasswordParams) => Promise<void>
}
