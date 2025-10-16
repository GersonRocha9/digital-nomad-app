import { useState } from 'react'

import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthSignIn } from '@/src/domain/auth/operations/useAuthSignIn'
import { Button } from '@/src/ui/components/button'
import { Logo } from '@/src/ui/components/logo'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
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
        <Logo />

        <Text variant="title22" alignSelf="center" marginBottom="s16">
          Bem-vindo
        </Text>

        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="E-mail"
        />

        <TextInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="Senha"
          secureTextEntry
        />

        <Link href="/reset-password" asChild>
          <Text mb="s16" alignSelf="flex-end" variant="text14" color="primary">
            Esqueceu sua senha
          </Text>
        </Link>

        <Button title="Entrar" onPress={handleSignIn} />

        <Link href="/sign-up" asChild>
          <Text
            marginTop="s16"
            alignSelf="center"
            variant="text14"
            color="gray2"
          >
            Ainda não tem sua conta?{' '}
            <Text color="primary" variant="title14">
              Criar
            </Text>
          </Text>
        </Link>
      </SafeAreaView>
    </Screen>
  )
}
