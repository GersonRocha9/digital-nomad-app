import { Box } from '@/src/components/box'
import { Text } from '@/src/components/text'
import { useAppTheme } from '@/src/components/theme/useAppTheme'

export default function HomeScreen() {
  const { colors } = useAppTheme()

  return (
    <Box flex={1} alignItems="center" justifyContent="center" backgroundColor="cardPrimaryBackground">
      <Text marginTop="xl" color="text">
        HomeScreen {colors.mainBackground}
      </Text>
    </Box>
  )
}
