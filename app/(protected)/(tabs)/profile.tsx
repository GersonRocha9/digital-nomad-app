import { Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthSignOut } from '@/src/domain/auth/operations/useAuthSignOut'
import { Box } from '@/src/ui/components/box'
import { Icon } from '@/src/ui/components/icon'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'

export default function ProfileScreen() {
  const { mutate: signOut } = useAuthSignOut()

  return (
    <Screen>
      <SafeAreaView>
        <Text>Profile</Text>

        <Box flexDirection="row" alignItems="center">
          <Pressable onPress={signOut}>
            <Text>Sair</Text>
            <Icon name="Logout" color="primary" />
          </Pressable>
        </Box>
      </SafeAreaView>
    </Screen>
  )
}
