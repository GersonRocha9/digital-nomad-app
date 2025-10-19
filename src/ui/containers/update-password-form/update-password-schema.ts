import { z } from 'zod'

export const updatePasswordSchema = z
  .object({
    password: z
      .string({ error: 'campo obrigatório' })
      .min(6, 'no mínimo 6 caracteres'),
    newPassword: z
      .string({ error: 'campo obrigatório' })
      .min(6, 'no mínimo 6 caracteres'),
    confirmNewPassword: z
      .string({ error: 'campo obrigatório' })
      .min(6, 'no mínimo 6 caracteres'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    error: 'senhas devem ser iguais',
    path: ['confirmNewPassword'],
  })

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>
