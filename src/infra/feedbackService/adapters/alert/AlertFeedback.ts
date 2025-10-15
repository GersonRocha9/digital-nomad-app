import { Alert } from 'react-native'

import type { IFeedbackService } from '../../IFeedbackService'

export const AlertFeedback: IFeedbackService = {
  send: (feedback) => {
    Alert.alert(feedback.message, feedback.description)
  },
}
