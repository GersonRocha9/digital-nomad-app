import { z } from 'zod'

export const signUpSchema = z
  .object({
    fullname: z
      .string({ error: 'campo obrigatório' })
      .min(5, 'nome muito curto'),
    email: z.email({ error: 'email inválido' }),
    password: z
      .string({ error: 'campo obrigatório' })
      .min(6, 'no mínimo 6 caracteres'),
    confirmPassword: z
      .string({ error: 'campo obrigatório' })
      .min(6, 'no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'senhas devem ser iguais',
    path: ['confirmPassword'],
  })

export type SignUpSchema = z.infer<typeof signUpSchema>
