import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

import type { AuthUser } from './AuthUser'

interface AuthState {
  authUser: AuthUser | null
  isReady: boolean
  saveAuthUser: (authUser: AuthUser) => Promise<void>
  removeAuthUser: () => Promise<void>
}

export const AuthContext = createContext<AuthState>({
  authUser: null,
  isReady: false,
  saveAuthUser: async () => {},
  removeAuthUser: async () => {},
})

const AUTH_KEY = 'AUTH_KEY'

export function AuthProvider({ children }: PropsWithChildren) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [isReady, setIsReady] = useState<boolean>(false)

  async function saveAuthUser(user: AuthUser) {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user))
    setAuthUser(user)
    router.replace('/')
  }

  async function removeAuthUser() {
    await AsyncStorage.removeItem(AUTH_KEY)
    setAuthUser(null)
  }

  async function loadAuthUser() {
    try {
      const user = await AsyncStorage.getItem(AUTH_KEY)
      if (user) {
        setAuthUser(JSON.parse(user))
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsReady(true)
    }
  }

  useEffect(() => {
    loadAuthUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{ authUser, isReady, saveAuthUser, removeAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Auth Context should be used within a AuthProvider')
  }

  return context
}
