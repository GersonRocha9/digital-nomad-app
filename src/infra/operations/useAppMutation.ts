import { useMutation } from '@tanstack/react-query'

interface IUseAppMutationReturn<TData, TVariables> {
  mutate: (variable: TVariables) => TData | void
  isPending: boolean
  error: unknown
}

export interface UseAppMutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (error: unknown) => void
}

type UseAppMutationParams<TData, TVariables> = {
  mutationFn: (variable: TVariables) => Promise<TData>
} & UseAppMutationOptions<TData>

export function useAppMutation<TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
}: UseAppMutationParams<TData, TVariables>): IUseAppMutationReturn<
  TData,
  TVariables
> {
  const { mutate, isPending, error } = useMutation({
    mutationFn,
    onSuccess,
    onError,
  })

  return {
    mutate,
    isPending,
    error,
  }
}
