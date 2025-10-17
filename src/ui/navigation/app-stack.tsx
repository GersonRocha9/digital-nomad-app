import { Stack } from 'expo-router'

import theme from '../components/theme/theme'

export const AppStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen name="(protected)" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
