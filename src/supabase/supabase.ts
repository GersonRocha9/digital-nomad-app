import { createClient } from '@supabase/supabase-js'

// eslint-disable-next-line import/no-unresolved
import 'expo-sqlite/localStorage/install'
import type { Database } from './types'

function getSupabaseEnvs(): { supabaseUrl: string; supabaseAnonKey: string } {
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase URL or Anon Key')
  }

  return { supabaseUrl, supabaseAnonKey }
}

const { supabaseUrl, supabaseAnonKey } = getSupabaseEnvs()

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
