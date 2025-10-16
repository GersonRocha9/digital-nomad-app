import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthSignUp } from '@/src/domain/auth/operations/useAuthSignUp'
import { Header } from '@/src/ui/components/header'
import { Logo } from '@/src/ui/components/logo'
import { Screen } from '@/src/ui/components/screen'
import { SignUpForm } from '@/src/ui/containers/sign-up-form/sign-up-form'
import type { SignUpSchema } from '@/src/ui/containers/sign-up-form/sign-up-schema'

export default function SignUpScreen() {
  const { mutate: signUp } = useAuthSignUp({
    onSuccess: router.back,
  })

  function handleSignUp(formValues: SignUpSchema) {
    signUp({
      email: formValues.email,
      password: formValues.password,
      fullname: formValues.fullname,
    })
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
