import { screen } from '@testing-library/react-native'

import { renderComponent } from '@/src/test-utils/render-component'

import { Text } from '../text'

describe('<Text />', () => {
  it('should render text component', () => {
    renderComponent(<Text>Hello World</Text>)

    expect(screen.getByText('Hello World').toBeOnTheScreen)
  })
})
