import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native'

import {
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
  type BackgroundColorProps,
  type BorderProps,
  type LayoutProps,
  type SpacingProps,
  type SpacingShorthandProps,
} from '@shopify/restyle'

import type { Theme } from './theme/theme'

export const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>

type RestyleStyle = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleStyle

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  RNTouchableOpacity,
)
