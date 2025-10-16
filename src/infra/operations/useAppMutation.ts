import { useState } from 'react'

interface IUseAppMutationReturn<TData, TVariables> {
  mutate: (variable: TVariables) => Promise<TData | void>
  isLoading: boolean
  error: unknown
}

export interface UseAppMutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (error: unknown) => void
}

type UseAppMutationParams<TData, TVariables> = {
  mutateFn: (variable: TVariables) => Promise<TData>
} & UseAppMutationOptions<TData>

export function useAppMutation<TData, TVariables>({
  mutateFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TData, TVariables>): IUseAppMutationReturn<
  TData,
  TVariables
> {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true)
      setError(null)
      const data = await mutateFn(variables)
      onSuccess?.(data)
    } catch (error) {
      onError?.(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    mutate,
    isLoading,
    error,
  }
}
