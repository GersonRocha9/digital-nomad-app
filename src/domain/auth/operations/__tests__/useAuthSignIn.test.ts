import { renderHook } from '@testing-library/react-native'

import { useAuthSignIn } from '../useAuthSignIn'

describe('useAuthSignIn()', () => {
  it('should return the hook', () => {
    const { result } = renderHook(() => useAuthSignIn())
    expect(result.current.isLoading).toBe(false)
  })
})
