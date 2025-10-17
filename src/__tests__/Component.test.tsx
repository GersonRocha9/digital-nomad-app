import { useState } from 'react'

import { Pressable, Text, View } from 'react-native'

import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react-native'

function Component({ label, loading }: { label: string; loading: boolean }) {
  const [count, setCount] = useState(0)

  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <Pressable
        testID="label-button"
        onPress={() => setCount((prev) => prev + 1)}
      >
        <Text>{label}</Text>
      </Pressable>

      <Text testID="count-test">Pressed:{count}</Text>
      <Text testID="reset-counter-button" onPress={() => setCount(0)}>
        Reset Count
      </Text>
    </View>
  )
}

describe('Component', () => {
  it('should display the label when is not loading', () => {
    render(<Component label="Hello world" loading={false} />)

    const element = screen.getByText('Hello world')
    expect(element).toBeOnTheScreen()
  })

  it('should display the loading text when loading is true', () => {
    render(<Component label="Hello world" loading={true} />)

    expect(screen.getByText('Loading...')).toBeOnTheScreen()
  })

  it('should display the correct count number', () => {
    render(<Component label="Hello world" loading={false} />)
    expect(screen.getByText(/Pressed:0/i)).toBeOnTheScreen()
    fireEvent.press(screen.getByTestId('label-button'))
    expect(screen.getByText(/Pressed:1/i)).toBeOnTheScreen()
  })

  it('should display the correct count number when press on reset button 4 times', async () => {
    jest.useFakeTimers()

    render(<Component label="Hello world" loading={false} />)
    expect(screen.getByText(/Pressed:0/i)).toBeOnTheScreen()

    const user = userEvent.setup()
    await user.press(screen.getByTestId('label-button'))
    await user.press(screen.getByTestId('label-button'))
    await user.press(screen.getByTestId('label-button'))
    await user.press(screen.getByTestId('label-button'))

    expect(screen.getByText(/Pressed:4/i)).toBeOnTheScreen()

    jest.useRealTimers()
  })
})
