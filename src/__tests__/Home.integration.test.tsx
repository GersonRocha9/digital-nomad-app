import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native'

import { renderApp } from '../test-utils/render-app'

describe('integration: Home', () => {
  it('the user can see the city list and navigate to city details when city card is pressed', async () => {
    renderApp({ isAuthenticated: true })

    fireEvent.press(await screen.findByText('Rio de Janeiro'))

    expect(await screen.findByText('Pontos turísticos')).toBeOnTheScreen()

    fireEvent.press(await screen.getByTestId('Chevron-left'))

    expect(await screen.findByText('Barcelona')).toBeOnTheScreen()
  })

  it('the user can type to search a city and find the city', async () => {
    renderApp({ isAuthenticated: true })

    fireEvent.changeText(
      await screen.getByTestId('city-filter-search-input'),
      'Barcelona',
    )

    await waitForElementToBeRemoved(() => screen.getByText('Rio de Janeiro'))

    expect(await screen.findByText('Barcelona')).toBeOnTheScreen()
    expect(await screen.findByText('Espanha')).toBeOnTheScreen()
  })

  it('should display an error message when city list does not load', async () => {
    renderApp({
      isAuthenticated: true,
      repositories: {
        city: {
          findAll: async () => {
            return Promise.reject(new Error('server is down!'))
          },
        },
      },
    })

    expect(
      await screen.findByText(/erro ao carregar cidades/i),
    ).toBeOnTheScreen()
    expect(await screen.findByText(/server is down!/i)).toBeOnTheScreen()
  })

  it('should display an empty message when city list is empty', async () => {
    renderApp({
      isAuthenticated: true,
      repositories: {
        city: {
          findAll: async () => {
            return []
          },
        },
      },
    })

    expect(await screen.findByText(/carregando cidades/i)).toBeOnTheScreen()
    expect(
      await screen.findByText(/não há cidades no momento/i),
    ).toBeOnTheScreen()
  })
})
