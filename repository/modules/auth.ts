import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type {
  ILoginInput,
  ILoginResponse,
  ILogoutResponse,
  IResetPassword,
} from '~/types'

class AuthModule extends FetchFactory {
  private RESOURCE = '/auth'

  async login(credentials: ILoginInput) {
    return this.call<ILoginResponse>(
      'POST',
      `${this.RESOURCE}/login`,
      credentials,
    )
  }

  async logout(asyncDataOptions?: AsyncDataOptions<ILogoutResponse>) {
    const token = useCookie('token')
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          Authorization: `${token.value}`,
        },
      }
      return this.call<ILogoutResponse>(
        'POST',
        `${this.RESOURCE}/logout`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }

  async refreshToken(token: string) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        token,
      },
    }
    return this.call<ILoginResponse>(
      'POST',
      `${this.RESOURCE}/refresh`,
      undefined,
      fetchOptions,
    )
  }

  async forgetPassword(email: string) {
    const body = {
      email,
    }
    return this.call<ILoginResponse>(
      'POST',
      `${this.RESOURCE}/forgetPassword`,
      body,
      undefined,
    )
  }

  async resetPassword(body: IResetPassword) {
    return this.call<ILoginResponse>(
      'POST',
      `${this.RESOURCE}/resetPassword`,
      body,
      undefined,
    )
  }
}

export default AuthModule
