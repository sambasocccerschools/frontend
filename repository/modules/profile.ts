import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { IProfileResponse } from '~/types'

class ProfileModule extends FetchFactory {
  private RESOURCE = '/v1/profile'

  async getProfile(asyncDataOptions?: AsyncDataOptions<IProfileResponse>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {}
      return this.call<IProfileResponse>(
        'GET',
        `${this.RESOURCE}`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
}

export default ProfileModule
