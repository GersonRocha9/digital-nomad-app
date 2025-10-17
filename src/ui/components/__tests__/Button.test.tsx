import { fireEvent, screen } from '@testing-library/react-native'

import { renderComponent } from '@/src/test-utils/render-component'

import { Button } from '../button'

describe('<Button />', () => {
  it('should call the onPress function when it is pressed', () => {
    const onPressFn = jest.fn()
    renderComponent(<Button title="Hello World" onPress={onPressFn} />)
    fireEvent.press(screen.getByText('Hello World'))
    expect(onPressFn).toHaveBeenCalled()
  })

  it('should NOT call the onPress function when it is disabled', () => {
    const onPressFn = jest.fn()

    renderComponent(
      <Button title="Hello World" onPress={onPressFn} disabled={true} />,
    )

    fireEvent.press(screen.getByText('Hello World'))
    expect(onPressFn).not.toHaveBeenCalled()
  })
})
