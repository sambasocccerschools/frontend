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

  async createUser(data: ICreateUserParams) {
    const formData = new FormData()
    formData.append('first_name', data.first_name)
    formData.append('last_name', data.last_name)
    formData.append('phone_number', data.phone_number)
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('password_confirmation', data.password_confirmation)
    formData.append('avatar_image', data.avatar_image as any)

    const fetchOptions: FetchOptions<'json'> = {}
    return this.call<ICreateUserResponse>(
      'POST',
      `${this.RESOURCE}`,
      formData,
      fetchOptions,
    )
  }
}

export default UsersModule
