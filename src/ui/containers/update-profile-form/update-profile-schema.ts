import { z } from 'zod'

export const updateProfileSchema = z.object({
  fullname: z.string({ error: 'campo obrigatório' }).min(5, 'nome muito curto'),
  email: z.email({ error: 'email inválido' }),
})

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>
