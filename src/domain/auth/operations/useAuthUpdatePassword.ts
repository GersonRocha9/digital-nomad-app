import { useFeedbackService } from '@/src/infra/feedbackService/FeedbackProvider'
import {
  useAppMutation,
  type UseAppMutationOptions,
} from '@/src/infra/operations/useAppMutation'
import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

import type { AuthUpdatePasswordParams } from '../IAuthRepo'

export function useAuthUpdatePassword(options?: UseAppMutationOptions<void>) {
  const { auth } = useRepository()
  const feedbackService = useFeedbackService()

  return useAppMutation<void, AuthUpdatePasswordParams>({
    mutationFn: (params) => auth.updatePassword(params),
    onSuccess: () => {
      options?.onSuccess?.()
      feedbackService.send({
        type: 'success',
        message: `senha atualizada com sucesso`,
      })
    },
    onError: (error) => {
      console.log({ error })
      options?.onError?.(error)
      feedbackService.send({
        type: 'error',
        message: 'error ao atualizar senha',
      })
    },
  })
}
