import { supabase } from './supabase'

import type { AuthUser } from '@supabase/supabase-js'

async function getUserSession(): Promise<AuthUser> {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) {
    throw new Error('invalid session')
  }

  return data.session.user
}

export const supabaseHelpers = {
  getUserSession,
}
