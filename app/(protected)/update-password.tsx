import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/src/ui/components/header'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { UpdatePasswordForm } from '@/src/ui/containers/update-password-form/update-password-form'

export default function UpdatePasswordScreen() {
  return (
    <Screen scrollable>
      <SafeAreaView>
        <Header title="Atualizar senha" />

        <Text mb="s16">
          Recomendamos usar uma combinação de letras, números e símbolos para
          maior proteção.
        </Text>

        <UpdatePasswordForm onSubmit={() => {}} />
      </SafeAreaView>
    </Screen>
  )
}
