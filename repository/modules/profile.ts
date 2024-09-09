import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { IProfileResponse } from '~/types'

class ProfileModule extends FetchFactory {
  private RESOURCE = '/v1/profile'

  async getProfile(access_token: string | null) {
    let fetchOptions: FetchOptions<'json'> | undefined = undefined
    if (!!access_token) {
      fetchOptions = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    }
    return this.call<IProfileResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }
}

export default ProfileModule
