import { useState } from 'react'

import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAuthSignIn } from '@/src/domain/auth/operations/useAuthSignIn'
import { Button } from '@/src/ui/components/button'
import { Logo } from '@/src/ui/components/logo'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { TextInput } from '@/src/ui/components/text-input'
import { TextLink } from '@/src/ui/components/text-link'

export default function SignInScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mutate: signIn } = useAuthSignIn()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Screen scrollable>
      <SafeAreaView>
        <Logo />

        <Text variant="title22" alignSelf="center" marginBottom="s16">
          Bem-vindo
        </Text>

        <TextInput
          testID="email-input"
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="E-mail"
        />

        <TextInput
          testID="password-input"
          label="Senha"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="Senha"
          secureTextEntry
        />

        <Link testID="forgot-password-button" href="/reset-password" asChild>
          <Text mb="s16" alignSelf="flex-end" variant="text14" color="primary">
            Esqueceu sua senha
          </Text>
        </Link>

        <Button testID="sign-in-button" title="Entrar" onPress={handleSignIn} />

        <TextLink
          text="Ainda não tem uma conta?"
          ctaText="Criar"
          href="/sign-up"
        />
      </SafeAreaView>
    </Screen>
  )
}
