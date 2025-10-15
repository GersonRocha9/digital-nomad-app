import { Box } from '@/src/ui/components/box'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'

export default function ExploreScreen() {
  return (
    <Screen>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Text>Explore</Text>
      </Box>
    </Screen>
  )
}
