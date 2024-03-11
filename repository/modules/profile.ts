import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { IProfileResponse } from '~/types'

class ProfileModule extends FetchFactory {
  private RESOURCE = '/v1/profile'

  async getProfile() {
    const fetchOptions: FetchOptions<'json'> = {}
    return this.call<IProfileResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }
}

export default ProfileModule
