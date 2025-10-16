import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/src/ui/components/header'
import { Logo } from '@/src/ui/components/logo'
import { Screen } from '@/src/ui/components/screen'
import { SignUpForm } from '@/src/ui/containers/sign-up-form/sign-up-form'

export default function SignUpScreen() {
  function handleSignUp() {
    console.log('cadastrou')
  }

  return (
    <Screen>
      <SafeAreaView>
        <Header title="Criar conta" />

        <SignUpForm onSubmit={handleSignUp} />

        <Logo />
      </SafeAreaView>
    </Screen>
  )
}
