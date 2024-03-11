import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type {
  IGetUsersParams,
  IGetUsersResponse,
  ICreateUserParams,
  ICreateUserResponse,
} from '~/types'

class UsersModule extends FetchFactory {
  private RESOURCE = '/v1/users'

  async getUsers(
    params: IGetUsersParams,
    asyncDataOptions?: AsyncDataOptions<IGetUsersResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        params,
      }
      return this.call<IGetUsersResponse>(
        'GET',
        `${this.RESOURCE}`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }

  async createUser(
    data: ICreateUserParams,
    asyncDataOptions?: AsyncDataOptions<ICreateUserResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {}
      return this.call<ICreateUserResponse>(
        'POST',
        `${this.RESOURCE}`,
        data,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
}

export default UsersModule
