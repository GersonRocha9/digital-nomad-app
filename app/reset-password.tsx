import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@/src/ui/components/button'
import { Header } from '@/src/ui/components/header'
import { Logo } from '@/src/ui/components/logo'
import { Screen } from '@/src/ui/components/screen'

export default function ResetPasswordScreen() {
  function handleResetPassword() {
    //
  }
  return (
    <Screen>
      <SafeAreaView>
        <Header title="Recuperar Senha" />
        <Button title="Enviar link" onPress={handleResetPassword} />
        <Logo />
      </SafeAreaView>
    </Screen>
  )
}
