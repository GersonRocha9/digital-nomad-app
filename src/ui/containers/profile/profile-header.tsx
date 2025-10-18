import type { AuthUser } from '@/src/domain/auth/AuthUser'

import { Box } from '../../components/box'
import { Button } from '../../components/button'
import { Text } from '../../components/text'

interface ProfileHeaderProps {
  authUser: AuthUser
}

export function ProfileHeader({ authUser }: ProfileHeaderProps) {
  return (
    <Box>
      <Text variant="title16" alignSelf="center" mb="s40">
        Perfil
      </Text>

      <Text variant="title16" mb="s16">
        Informações da conta
      </Text>

      <Box rowGap="s4">
        <LineItem label="E-mail" value={authUser.email} />
        <LineItem label="Nome" value={authUser.fullname} />
        <LineItem label="Membro desde" value={authUser.createdAt} />
      </Box>

      <Box flexDirection="row" columnGap="s16" mt="s16">
        <Box flex={1}>
          <Button title="Editar" variant="secondary" onPress={() => {}} />
        </Box>

        <Box flex={1}>
          <Button
            title="Alterar senha"
            variant="secondary"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  )
}

function LineItem({ label, value }: { label: string; value: string }) {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text variant="text14" color="gray2">
        {label}
      </Text>
      <Text variant="text14" color="text">
        {value}
      </Text>
    </Box>
  )
}
