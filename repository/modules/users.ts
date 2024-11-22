import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type {
  IGetUsersParams,
  IGetUsersResponse,
  ICreateUserParams,
  ICreateUserResponse,
  IGetUserResponse,
} from '~/types'

class UsersModule extends FetchFactory {
  private RESOURCE = '/user/get'

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

  async getUser(id: string) {
    return this.call<IGetUserResponse>('GET', `${this.RESOURCE}/${id}`)
  }

  async deactivateUser(id: string) {
    return this.call<{ message: string }>('DELETE', `${this.RESOURCE}/${id}`)
  }

  async restoreUser(id: string) {
    return this.call<{ message: string }>('POST', `${this.RESOURCE}/${id}`)
  }
}

export default UsersModule
