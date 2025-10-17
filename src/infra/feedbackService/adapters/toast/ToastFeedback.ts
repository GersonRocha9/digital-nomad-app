import Toast from 'react-native-toast-message'

import type { IFeedbackService } from '../../IFeedbackService'

export const ToastFeedback: IFeedbackService = {
  send: (feedback) => {
    Toast.show({ props: feedback })
  },
}
