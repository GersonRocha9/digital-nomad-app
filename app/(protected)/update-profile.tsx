import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/src/ui/components/header'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { UpdateProfileForm } from '@/src/ui/containers/update-profile-form/update-profile-form'

export default function UpdateProfileScreen() {
  const { fullname, email } = useLocalSearchParams<{
    fullname: string
    email: string
  }>()

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar dados" />

        <Text mb="s16">
          Mantenha suas informações atualizadas para uma melhor experiência
        </Text>

        <UpdateProfileForm
          onSubmit={() => {}}
          defaultValues={{ fullname, email }}
        />
      </SafeAreaView>
    </Screen>
  )
}
