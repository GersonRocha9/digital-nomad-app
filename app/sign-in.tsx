import { useState } from 'react'

import { Button, StyleSheet, TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthSignIn } from '@/src/domain/auth/operations/useAuthSignIn'
import { Screen } from '@/src/ui/components/screen'

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
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="E-mail"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="Senha"
          style={styles.input}
        />

        <Button title="Entrar" onPress={handleSignIn} />
      </SafeAreaView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#FFF',
    borderWidth: 1,
    height: 60,
    color: '#FFF',
    fontSize: 20,
    marginVertical: 16,
  },
})
