import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { ILoginInput, ILoginResponse, ILogoutResponse } from '~/types'

class AuthModule extends FetchFactory {
  private RESOURCE = '/v1/auth'

  async login(
    credentials: ILoginInput,
    asyncDataOptions?: AsyncDataOptions<ILoginResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {}
      return this.call<ILoginResponse>(
        'POST',
        `${this.RESOURCE}/login`,
        credentials,
        fetchOptions,
      )
    }, asyncDataOptions)
  }

  async logout(asyncDataOptions?: AsyncDataOptions<ILogoutResponse>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {}
      return this.call<ILogoutResponse>(
        'POST',
        `${this.RESOURCE}/logout`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
}

export default AuthModule
