import { Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthGetUser } from '@/src/domain/auth/operations/useAuthGetUser'
import { useAuthSignOut } from '@/src/domain/auth/operations/useAuthSignOut'
import { useCityFindAllFavorites } from '@/src/domain/city/operations/useCityFindAllFavorites'
import { Box } from '@/src/ui/components/box'
import { FavoriteCityCard } from '@/src/ui/components/favorite-city-card'
import { Icon } from '@/src/ui/components/icon'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { ProfileHeader } from '@/src/ui/containers/profile/profile-header'

export default function ProfileScreen() {
  const { mutate: signOut } = useAuthSignOut()
  const { data: authUser } = useAuthGetUser()
  const { data: favoritesCities } = useCityFindAllFavorites()

  return (
    <Screen>
      <SafeAreaView>
        {authUser && <ProfileHeader authUser={authUser} />}

        <Box rowGap="s16" mt="s16">
          {favoritesCities?.map((cityPreview) => (
            <FavoriteCityCard key={cityPreview.id} cityPreview={cityPreview} />
          ))}
        </Box>

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
      </SafeAreaView>
    </Screen>
  )
}
