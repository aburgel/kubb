import type { Pet } from '../Pet'

/**
 * @description successful operation
 */
export type FindPetsByStatus200 = Pet[]

/**
 * @description Invalid status value
 */
export type FindPetsByStatus400 = any

export const FindPetsByStatusQueryParamsStatus = {
  'available': 'available',
  'pending': 'pending',
  'sold': 'sold',
} as const
export type FindPetsByStatusQueryParamsStatus = (typeof FindPetsByStatusQueryParamsStatus)[keyof typeof FindPetsByStatusQueryParamsStatus]
export type FindPetsByStatusQueryParams = {
  /**
   * @description Status values that need to be considered for filter
   * @default "available"
   * @type string | undefined
   */
  status?: FindPetsByStatusQueryParamsStatus
}

/**
 * @description successful operation
 */
export type FindPetsByStatusQueryResponse = Pet[]
export type FindPetsByStatusQuery = {
  Response: FindPetsByStatusQueryResponse
  QueryParams: FindPetsByStatusQueryParams
  Errors: FindPetsByStatus400
}
