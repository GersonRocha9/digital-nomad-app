import { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@/src/ui/components/button'
import { Header } from '@/src/ui/components/header'
import { Logo } from '@/src/ui/components/logo'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { TextInput } from '@/src/ui/components/text-input'
import { TextLink } from '@/src/ui/components/text-link'

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('')
  function handleResetPassword() {
    //
  }
  return (
    <Screen>
      <SafeAreaView>
        <Header title="Recuperar Senha" />

        <Text mb="s16">
          Digite o endereço de e-mail associado à sua conta e enviaremos
          instruções para redefinir sua senha
        </Text>

        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          placeholder="voce@exemplo.com"
        />

        <Button title="Enviar link" onPress={handleResetPassword} />

        <TextLink
          text="Lembrou sua senha?"
          ctaText="Voltar para o login"
          goBackOnPress
        />

        <Logo />
      </SafeAreaView>
    </Screen>
  )
}
