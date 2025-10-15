export type FeedbackType = 'success' | 'error'

interface Feedback {
  type: FeedbackType
  message: string
  description?: string
}

export interface IFeedbackService {
  send: (feedback: Feedback) => void
}
