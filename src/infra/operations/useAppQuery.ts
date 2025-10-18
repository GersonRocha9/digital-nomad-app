import { useQuery, type QueryKey } from '@tanstack/react-query'

interface IUseAppQueryReturn<DataT> {
  data?: DataT
  isLoading: boolean
  isPending: boolean
  isFetching: boolean
  error: unknown
}

interface UseAppQueryParams<DataT> {
  queryKey: QueryKey
  queryFn: () => Promise<DataT>
}

export function useAppQuery<DataT>({
  queryKey,
  queryFn,
}: UseAppQueryParams<DataT>): IUseAppQueryReturn<DataT> {
  const { data, isLoading, error, isPending, isFetching } = useQuery({
    queryKey,
    queryFn,
  })

  return {
    data,
    isLoading,
    error,
    isPending,
    isFetching,
  }
}
