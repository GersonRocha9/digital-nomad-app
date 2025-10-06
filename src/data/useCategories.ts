import { useEffect, useState } from 'react'

import { supabaseService } from '../supabase/supabaseService'

import type { ICategory } from '../types'

interface IUseCategoriesReturn {
  categories?: ICategory[]
  isLoading: boolean
  error: unknown
}

export function useCategories(): IUseCategoriesReturn {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  async function fetchCategories() {
    try {
      setIsLoading(true)
      const categories = await supabaseService.listCategories()
      setCategories(categories)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return { categories, isLoading, error }
}
