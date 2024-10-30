import client from '../../../../swr-client.ts'
import useSWR from 'swr'
import type { RequestConfig } from '../../../../swr-client.ts'
import type {
  GetUserByNameQueryResponse,
  GetUserByNamePathParams,
  GetUserByName400,
  GetUserByName404,
} from '../../../models/ts/userController/GetUserByName.ts'
import { getUserByNameQueryResponseSchema } from '../../../zod/userController/getUserByNameSchema.ts'

export const getUserByNameQueryKeySWR = ({
  username,
}: {
  username: GetUserByNamePathParams['username']
}) => [{ url: '/user/:username', params: { username: username } }] as const

export type GetUserByNameQueryKeySWR = ReturnType<typeof getUserByNameQueryKeySWR>

/**
 * @summary Get user by user name
 * @link /user/:username
 */
async function getUserByName(
  {
    username,
  }: {
    username: GetUserByNamePathParams['username']
  },
  config: Partial<RequestConfig> = {},
) {
  const res = await client<GetUserByNameQueryResponse, GetUserByName400 | GetUserByName404, unknown>({
    method: 'GET',
    url: `/user/${username}`,
    baseURL: 'https://petstore3.swagger.io/api/v3',
    ...config,
  })
  return getUserByNameQueryResponseSchema.parse(res.data)
}

export function getUserByNameQueryOptionsSWR(
  {
    username,
  }: {
    username: GetUserByNamePathParams['username']
  },
  config: Partial<RequestConfig> = {},
) {
  return {
    fetcher: async () => {
      return getUserByName({ username }, config)
    },
  }
}

/**
 * @summary Get user by user name
 * @link /user/:username
 */
export function useGetUserByNameSWR(
  {
    username,
  }: {
    username: GetUserByNamePathParams['username']
  },
  options: {
    query?: Parameters<typeof useSWR<GetUserByNameQueryResponse, GetUserByName400 | GetUserByName404, GetUserByNameQueryKeySWR | null, any>>[2]
    client?: Partial<RequestConfig>
    shouldFetch?: boolean
  } = {},
) {
  const { query: queryOptions, client: config = {}, shouldFetch = true } = options ?? {}
  const queryKey = getUserByNameQueryKeySWR({ username })
  return useSWR<GetUserByNameQueryResponse, GetUserByName400 | GetUserByName404, GetUserByNameQueryKeySWR | null>(shouldFetch ? queryKey : null, {
    ...getUserByNameQueryOptionsSWR({ username }, config),
    ...queryOptions,
  })
}