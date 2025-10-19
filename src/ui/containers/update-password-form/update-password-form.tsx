import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Box } from '../../components/box'
import { Button } from '../../components/button'
import { TextInput } from '../../components/text-input'

import {
  updatePasswordSchema,
  type UpdatePasswordSchema,
} from './update-password-schema'

interface SignUpFormProps {
  onSubmit: (data: UpdatePasswordSchema) => void
}

export function UpdatePasswordForm({ onSubmit }: SignUpFormProps) {
  const { control, handleSubmit } = useForm<UpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
  })

  return (
    <Box>
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <TextInput
            testID="password-input"
            label="Senha atual"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            placeholder="sua senha"
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="newPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="password-input"
            label="Nova senha"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            placeholder="sua senha"
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmNewPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="confirm-password-input"
            label="Confirmar nova senha"
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
            placeholder="confirme sua senha"
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button
        testID="submit-button"
        mt="s16"
        title="Atualizar"
        onPress={handleSubmit(onSubmit)}
      />
    </Box>
  )
}
