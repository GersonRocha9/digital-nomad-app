import { fireEvent, screen, waitFor } from '@testing-library/react-native'

import { renderComponent } from '@/src/test-utils/render-component'

import theme from '../../components/theme/theme'

import { SignUpForm } from './sign-up-form'

describe('<SignUpForm />', () => {
  it('should submit the form when all fields are filled and correctly', async () => {
    const onSubmitMock = jest.fn()
    renderComponent(<SignUpForm onSubmit={onSubmitMock} />)

    fireEvent.changeText(screen.getByTestId('fullname-input'), 'Gerson Rocha')
    fireEvent.changeText(
      screen.getByTestId('email-input'),
      'gerson@thegrouployalty.com.br',
    )
    fireEvent.changeText(screen.getByTestId('password-input'), '12345678')
    fireEvent.changeText(
      screen.getByTestId('confirm-password-input'),
      '12345678',
    )

    fireEvent.press(screen.getByTestId('submit-button'))

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          fullname: 'Gerson Rocha',
          email: 'gerson@thegrouployalty.com.br',
          password: '12345678',
        }),
        undefined, // onInvalid do React Hook Form callback
      )
    })
  })

  describe('show NOT submit the form', () => {
    it('when the fullname is less than 5 characters', async () => {
      const onSubmitMock = jest.fn()
      renderComponent(<SignUpForm onSubmit={onSubmitMock} />)

      fireEvent.changeText(screen.getByTestId('fullname-input'), 'Ai')
      fireEvent.changeText(
        screen.getByTestId('email-input'),
        'gersonrocha@gmail.com',
      )
      fireEvent.changeText(screen.getByTestId('password-input'), '12345678')
      fireEvent.changeText(
        screen.getByTestId('confirm-password-input'),
        '12345678',
      )

      fireEvent.press(screen.getByTestId('submit-button'))

      expect(await screen.findByText('nome muito curto'))

      expect(onSubmitMock).not.toHaveBeenCalled()
    })

    it('when the email value is invalid', async () => {
      const onSubmitMock = jest.fn()
      renderComponent(<SignUpForm onSubmit={onSubmitMock} />)

      fireEvent.changeText(screen.getByTestId('fullname-input'), 'Gerson Rocha')
      fireEvent.changeText(screen.getByTestId('email-input'), 'gersonrocha')
      fireEvent.changeText(screen.getByTestId('password-input'), '12345678')
      fireEvent.changeText(
        screen.getByTestId('confirm-password-input'),
        '12345678',
      )

      fireEvent.press(screen.getByTestId('submit-button'))

      expect(await screen.findByText('email inválido'))

      expect(onSubmitMock).not.toHaveBeenCalled()
    })

    it('when the password and confirm password did not match', async () => {
      const onSubmitMock = jest.fn()
      renderComponent(<SignUpForm onSubmit={onSubmitMock} />)

      fireEvent.changeText(screen.getByTestId('fullname-input'), 'Gerson Rocha')
      fireEvent.changeText(
        screen.getByTestId('email-input'),
        'gerson@thegrouployalty.com.br',
      )
      fireEvent.changeText(screen.getByTestId('password-input'), '12345678')
      fireEvent.changeText(
        screen.getByTestId('confirm-password-input'),
        '123456',
      )

      fireEvent.press(screen.getByTestId('submit-button'))

      expect(await screen.findByText('senhas devem ser iguais'))

      const element = screen.getByTestId('confirm-password-input-container')

      expect(element).toHaveStyle({
        borderColor: theme.colors.fbErrorSurface,
      })

      expect(onSubmitMock).not.toHaveBeenCalled()
    })
  })
})
