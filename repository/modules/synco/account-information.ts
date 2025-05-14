import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  // ISendMessageWaitingListObject,
  // IMessageResponseObject,
  IAccountInformationResponse,
} from '~/types/synco'

class AccountInformationModule extends FetchFactory {
  private RESOURCE = '/accountInformation'

  async getById(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IAccountInformationResponse>(
      'GET',
      `${this.RESOURCE}/get?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  // async sendText(body: ISendMessageWaitingListObject) {
  //   return this.call<IMessageResponseObject>(
  //     'POST',
  //     `${this.RESOURCE}/sendText`,
  //     body,
  //     undefined,
  //   )
  // }
  // async sendEmail(body: ISendMessageWaitingListObject) {
  //   return this.call<IMessageResponseObject>(
  //     'POST',
  //     `${this.RESOURCE}/sendEmail`,
  //     body,
  //     undefined,
  //   )
  // }
}

export default AccountInformationModule
