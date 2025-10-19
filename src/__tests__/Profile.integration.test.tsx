import { fireEvent, screen } from '@testing-library/react-native'

import { AuthUser } from '../domain/auth/AuthUser'
import { renderApp } from '../test-utils/render-app'

const mockedAuthUser: AuthUser = {
  id: '1',
  email: 'gersonrocha9@gmail.com',
  fullname: 'Gerson Rocha',
  createdAt: '2025-06-23T10:32:55.10671Z',
}

describe('integration: Profile', () => {
  it('should update the profile info', async () => {
    renderApp({
      isAuthenticated: true,
      repositories: {
        auth: {
          getUser: () => mockedAuthUser,
        },
      },
    })

    fireEvent.press(await screen.findByText('Perfil'))

    expect(await screen.findByText(/Informações da Conta/i)).toBeOnTheScreen()

    expect(await screen.findByText('Gerson Rocha')).toBeOnTheScreen()
    expect(await screen.findByText('gersonrocha9@gmail.com')).toBeOnTheScreen()
    expect(await screen.findByText('23 de junho de 2025')).toBeOnTheScreen()

    fireEvent.press(screen.getByText(/editar perfil/i))
    expect(await screen.findByText(/Atualizar dados/i)).toBeOnTheScreen()

    fireEvent.changeText(screen.getByTestId('fullname-input'), 'Gerson Barbosa')

    fireEvent.press(screen.getByTestId('submit-button'))

    expect(
      await screen.findByText('perfil atualizado com sucesso'),
    ).toBeOnTheScreen()

    expect(await screen.findByText(/Informações da Conta/i)).toBeOnTheScreen()
  })
})
