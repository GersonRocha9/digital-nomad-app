import { useEffect, useState } from 'react'

import { supabaseService } from '../supabase/supabaseService'

import type { ICity } from '../types'

interface IUseCityDetailsReturn {
  city?: ICity
  isLoading: boolean
  error: unknown
}

export function useCityDetails(id: string): IUseCityDetailsReturn {
  const [city, setCity] = useState<ICity>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  async function fetchData() {
    try {
      setIsLoading(true)
      const cities = await supabaseService.findById(id)

      setCity(cities)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    city,
    isLoading,
    error,
  }
}
