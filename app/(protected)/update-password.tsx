import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthUpdatePassword } from '@/src/domain/auth/operations/useAuthUpdatePassword'
import { Header } from '@/src/ui/components/header'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { UpdatePasswordForm } from '@/src/ui/containers/update-password-form/update-password-form'
import type { UpdatePasswordSchema } from '@/src/ui/containers/update-password-form/update-password-schema'

export default function UpdatePasswordScreen() {
  const { mutate: updatePassword } = useAuthUpdatePassword({
    onSuccess: () => {
      router.back()
    },
  })

  function handleUpdatePassword(data: UpdatePasswordSchema) {
    updatePassword({
      currentPassword: data.password,
      newPassword: data.newPassword,
    })
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar senha" />

        <Text mb="s16">
          Recomendamos usar uma combinação de letras, números e símbolos para
          maior proteção.
        </Text>

        <UpdatePasswordForm onSubmit={handleUpdatePassword} />
      </SafeAreaView>
    </Screen>
  )
}
