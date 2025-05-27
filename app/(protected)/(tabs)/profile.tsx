import { Box } from '@/src/components/box'
import { Screen } from '@/src/components/screen'
import { Text } from '@/src/components/text'

export default function ProfileScreen() {
  return (
    <Screen>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Text>Perfil</Text>
      </Box>
    </Screen>
  )
}
