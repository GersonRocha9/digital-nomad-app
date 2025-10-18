import { useFeedbackService } from '@/src/infra/feedbackService/FeedbackProvider'
import {
  useAppMutation,
  type UseAppMutationOptions,
} from '@/src/infra/operations/useAppMutation'
import { useRepository } from '@/src/infra/repositories/RepositoryProvider'

import type { AuthSignUpParams } from '../IAuthRepo'

export function useAuthSignUp(options?: UseAppMutationOptions<void>) {
  const { auth } = useRepository()
  const feedbackService = useFeedbackService()

  return useAppMutation<void, AuthSignUpParams>({
    mutationFn: (params) => auth.signUp(params),
    onSuccess: () => {
      options?.onSuccess?.()
      feedbackService.send({
        type: 'success',
        message: `cadastro feito com sucesso`,
      })
    },
    onError: (error) => {
      options?.onError?.(error)
      feedbackService.send({ type: 'error', message: 'error on sign up' })
    },
  })
}
