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
  fetchData: () => Promise<DataT>
}

export function useAppQuery<DataT>({
  queryKey,
  fetchData,
}: UseAppQueryParams<DataT>): IUseAppQueryReturn<DataT> {
  const { data, isLoading, error, isPending, isFetching } = useQuery({
    queryKey,
    queryFn: fetchData,
  })

  return {
    data,
    isLoading,
    error,
    isPending,
    isFetching,
  }
}
