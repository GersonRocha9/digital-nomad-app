import { act, renderHook } from '@testing-library/react-native'

import { useAuthSignIn } from '../useAuthSignIn'

import type { AuthUser } from '../../AuthUser'

const mockSignIn = jest.fn()
const mockSendFeedback = jest.fn()
const mockSaveAuthUser = jest.fn()

jest.mock('@/src/infra/repositories/RepositoryProvider', () => ({
  useRepository: () => ({ auth: { signIn: mockSignIn } }),
}))

jest.mock('@/src/infra/feedbackService/FeedbackProvider', () => ({
  useFeedbackService: () => ({ send: mockSendFeedback }),
}))

jest.mock('../../AuthContext', () => ({
  useAuth: () => ({ saveAuthUser: mockSaveAuthUser }),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('useAuthSignIn()', () => {
  it('calls saveAuthUser and send success feedback on success', async () => {
    const user: AuthUser = {
      id: '1',
      email: 'gersonrocha9@gmail.com',
      fullname: 'Gerson Rocha',
    }

    mockSignIn.mockReturnValueOnce(user)

    const { result } = renderHook(() => useAuthSignIn())
    expect(result.current.isPending).toBe(false)

    await act(async () => {
      await result.current.mutate({
        email: 'gersonrocha9@gmail.com',
        password: 'password',
      })
    })

    expect(mockSignIn).toHaveBeenCalledWith(
      'gersonrocha9@gmail.com',
      'password',
    )

    expect(mockSaveAuthUser).toHaveBeenCalledWith(user)
    expect(mockSendFeedback).toHaveBeenCalledWith({
      type: 'success',
      message: `signed in: ${user.email}`,
    })
  })

  it('sends an error feedback on failed sign in', async () => {
    const error = new Error('invalid credentials')
    mockSignIn.mockRejectedValueOnce(error)

    const { result } = renderHook(() => useAuthSignIn())

    await act(async () => {
      await result.current.mutate({
        email: 'lucas@coffstack.com',
        password: 'password',
      })
    })

    expect(mockSendFeedback).toHaveBeenCalledWith({
      type: 'error',
      message: 'error ao fazer login',
      description: 'invalid credentials',
    })
  })
})
