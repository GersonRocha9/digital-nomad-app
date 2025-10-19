import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthUpdateProfile } from '@/src/domain/auth/operations/useAuthUpdateProfile'
import { Header } from '@/src/ui/components/header'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { UpdateProfileForm } from '@/src/ui/containers/update-profile-form/update-profile-form'
import type { UpdateProfileSchema } from '@/src/ui/containers/update-profile-form/update-profile-schema'

export default function UpdateProfileScreen() {
  const { fullname, email } = useLocalSearchParams<{
    fullname: string
    email: string
  }>()

  const { mutate: updateProfile } = useAuthUpdateProfile({
    onSuccess: () => {
      router.back()
    },
  })

  function handleUpdateProfile(data: UpdateProfileSchema) {
    updateProfile({
      email: data.email,
      fullname: data.fullname,
    })
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar dados" />

        <Text mb="s16">
          Mantenha suas informações atualizadas para uma melhor experiência
        </Text>

        <UpdateProfileForm
          onSubmit={handleUpdateProfile}
          defaultValues={{ fullname, email }}
        />
      </SafeAreaView>
    </Screen>
  )
}
