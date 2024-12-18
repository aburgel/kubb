import client from '../client.ts'
import type { RequestConfig } from '../client.ts'
import type { UpdatePetMutationRequest, UpdatePetMutationResponse, UpdatePet400, UpdatePet404, UpdatePet405 } from './models.ts'

/**
 * @description Update an existing pet by Id
 * @summary Update an existing pet
 * @link /pet
 */
export async function updatePet(data: UpdatePetMutationRequest, config: Partial<RequestConfig<UpdatePetMutationRequest>> = {}) {
  const res = await client<UpdatePetMutationResponse, UpdatePet400 | UpdatePet404 | UpdatePet405, UpdatePetMutationRequest>({
    method: 'PUT',
    url: '/pet',
    data,
    ...config,
  })
  return res.data
}
