import { Pressable } from 'react-native'

import { useAuthGetUser } from '@/src/domain/auth/operations/useAuthGetUser'
import { useAuthSignOut } from '@/src/domain/auth/operations/useAuthSignOut'
import { Box } from '@/src/ui/components/box'
import { Icon } from '@/src/ui/components/icon'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { FavoriteCityList } from '@/src/ui/containers/profile/favorites-city-list'
import { ProfileHeader } from '@/src/ui/containers/profile/profile-header'

export default function ProfileScreen() {
  const { mutate: signOut } = useAuthSignOut()
  const { data: authUser } = useAuthGetUser()

  return (
    <Screen>
      <FavoriteCityList
        ListHeaderComponent={authUser && <ProfileHeader authUser={authUser} />}
        ListFooterComponent={
          <Pressable testID="sign-out-button" onPress={signOut}>
            <Box
              mt="s24"
              flexDirection="row"
              alignItems="center"
              alignSelf="center"
            >
              <Icon name="Logout" color="fbErrorSurface" />
              <Text color="fbErrorSurface">Sair</Text>
            </Box>
          </Pressable>
        }
      />
    </Screen>
  )
}
