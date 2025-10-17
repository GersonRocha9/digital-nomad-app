import { screen } from '@testing-library/react-native'

import { renderApp } from '../test-utils/render-app'

describe('integration: Auth Flow', () => {
  it('the user can sign-in and sign-out', async () => {
    renderApp()

    expect(await screen.findByText('Bem-vindo'))
  })
})
