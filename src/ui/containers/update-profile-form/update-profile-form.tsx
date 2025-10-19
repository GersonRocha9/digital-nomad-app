import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, type DefaultValues } from 'react-hook-form'

import { Box } from '../../components/box'
import { Button } from '../../components/button'
import { TextInput } from '../../components/text-input'

import {
  updateProfileSchema,
  type UpdateProfileSchema,
} from './update-profile-schema'

interface SignUpFormProps {
  onSubmit: (data: UpdateProfileSchema) => void
  defaultValues: DefaultValues<UpdateProfileSchema>
}

export function UpdateProfileForm({
  onSubmit,
  defaultValues,
}: SignUpFormProps) {
  const { control, handleSubmit } = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      fullname: defaultValues.fullname,
      email: defaultValues.email,
    },
  })

  return (
    <Box>
      <Controller
        control={control}
        name="fullname"
        render={({ field, fieldState }) => (
          <TextInput
            testID="fullname-input"
            label="Nome completo"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="seu nome completo"
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <TextInput
            testID="email-input"
            label="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            value={field.value}
            onChangeText={field.onChange}
            placeholder="seu email"
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
