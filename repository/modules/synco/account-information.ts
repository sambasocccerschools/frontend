import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  // ISendMessageWaitingListObject,
  // IMessageResponseObject,
  IAccountInformationResponse,
} from '~/types/synco'

class AccountInformationModule extends FetchFactory {
  private RESOURCE = '/v1/accountInformation'

  async getById(id: number) {
    return this.call<IAccountInformationResponse>(
      'GET',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
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
