import { useEffect, useState } from 'react'

import { supabaseService, type ICityFilters } from '../supabase/supabaseService'

import type { CityPreview } from '../types'

interface IUseCitiesReturn {
  cities?: CityPreview[]
  isLoading: boolean
  error: unknown
}

export function useCities(filters: ICityFilters): IUseCitiesReturn {
  const [cities, setCities] = useState<CityPreview[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  async function fetchCities() {
    try {
      setIsLoading(true)
      const cities = await supabaseService.findAll(filters)
      setCities(cities)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categoryId, filters.name])

  return { cities, isLoading, error }
}
