import { Box } from '@/src/components/box'
import { Screen } from '@/src/components/screen'
import { Text } from '@/src/components/text'

export default function ExploreScreen() {
  return (
    <Screen>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Text>Explore</Text>
      </Box>
    </Screen>
  )
}
