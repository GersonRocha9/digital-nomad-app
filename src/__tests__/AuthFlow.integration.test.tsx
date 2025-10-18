import { fireEvent, screen } from '@testing-library/react-native'

import { renderApp } from '../test-utils/render-app'

describe('integration: Auth Flow', () => {
  it('the user can sign-in and sign-out', async () => {
    renderApp()

    expect(await screen.findByText('Bem-vindo'))

    fireEvent.changeText(
      screen.getByTestId('email-input'),
      'gersonrocha9@gmail.com',
    )

    fireEvent.changeText(screen.getByTestId('password-input'), '12345678')

    fireEvent.press(screen.getByTestId('sign-in-button'))

    expect(
      await screen.findByText('signed in: gersonrocha9@gmail.com'),
    ).toBeOnTheScreen()

    expect(await screen.findByText('Rio de Janeiro')).toBeOnTheScreen()
    expect(screen.getByText('Bangkok')).toBeOnTheScreen()

    fireEvent.press(screen.getByText('Perfil'))

    fireEvent.press(screen.getByTestId('sign-out-button'))

    expect(await screen.findByText('Bem-vindo'))
  })
})
