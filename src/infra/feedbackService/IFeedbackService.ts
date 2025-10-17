export type FeedbackType = 'success' | 'error' | 'warning' | 'info'

export interface Feedback {
  type: FeedbackType
  message: string
  description?: string
}

export interface IFeedbackService {
  send: (feedback: Feedback) => void
}
