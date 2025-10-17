import { Pressable, Text, View } from 'react-native'

import { render, screen } from '@testing-library/react-native'

function Component({ label, loading }: { label: string; loading: boolean }) {
  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
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
})
