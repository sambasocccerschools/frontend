import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { IProfileResponse } from '~/types'

class ProfileModule extends FetchFactory {
  private RESOURCE = '/user/get'

  async getProfile(accessToken: string) {
    const token = accessToken || useCookie('token').value
    const { $decodeToken } = useNuxtApp()
    const decodedUser = token
      ? ($decodeToken as (token: string) => any)(token)
      : null
    const userId = decodedUser?.id

    if (!token) {
      throw new Error('Undefined token value or token not found')
    }

    if (!userId) {
      throw new Error('User ID not found in token')
    }

    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token}`,
      },
    }

    try {
      return await this.call<IProfileResponse>(
        'GET',
        `${this.RESOURCE}?id=${userId}`,
        undefined,
        fetchOptions,
      )
    } catch (error) {
      console.error('Error in getProfile:', error)
      throw error
    }
  }
}

export default ProfileModule
