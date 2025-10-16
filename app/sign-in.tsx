import { useState } from 'react'

import { Button } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthSignIn } from '@/src/domain/auth/operations/useAuthSignIn'
import { Screen } from '@/src/ui/components/screen'
import { TextInput } from '@/src/ui/components/text-input'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mutate: signIn } = useAuthSignIn()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Screen>
      <SafeAreaView>
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="E-mail"
        />

        <TextInput
          errorMessage="Senha incorreta"
          label="Senha"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="Senha"
          secureTextEntry
        />

        <Button title="Entrar" onPress={handleSignIn} />
      </SafeAreaView>
    </Screen>
  )
}
