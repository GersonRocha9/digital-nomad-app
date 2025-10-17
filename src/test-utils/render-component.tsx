import type { PropsWithChildren, ReactElement } from 'react'

import { ThemeProvider } from '@shopify/restyle'
import { render, type RenderOptions } from '@testing-library/react-native'

import theme from '../ui/components/theme/theme'

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const renderComponent = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(component, { wrapper: AllTheProviders, ...options })
