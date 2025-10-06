import { useEffect, useState } from 'react'

import { supabaseService } from '../supabase/supabaseService'

import type { CityPreview } from '../types'

interface ICityFilter {
  cityName?: string
  categoryId?: string | null
}

interface IUseCitiesReturn {
  cities?: CityPreview[]
  isLoading: boolean
  error: unknown
}

export function useCities({
  cityName,
  categoryId,
}: ICityFilter): IUseCitiesReturn {
  const [cities, setCities] = useState<CityPreview[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  async function fetchCities() {
    try {
      setIsLoading(true)
      const cities = await supabaseService.findAll()
      setCities(cities)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCities()
  }, [])

  return { cities, isLoading, error }
}
