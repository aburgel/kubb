import { z } from 'zod'

import { categorySchema as categorySchema3 } from './categorySchema'
import { tagSchema } from './tagSchema'

export const addPetRequestSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  category: z.lazy(() => categorySchema3).optional(),
  photoUrls: z.array(z.string()),
  tags: z.array(z.lazy(() => tagSchema)).optional(),
  status: z.enum([`available`, `pending`, `sold`]).describe(`pet status in the store`).optional(),
})
