import { supabase } from './supabase'

async function findAll() {
  const cities = await supabase.from('cities').select('*')
  console.log(cities)

  return cities
}

export const supabaseService = {
  findAll,
}
