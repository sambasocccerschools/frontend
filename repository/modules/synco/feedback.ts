import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type { IMessageResponseObject, ICreateFeedbackItem } from '~/types/synco'

class FeedbackModule extends FetchFactory {
  private RESOURCE = '/feedback'

  async resolve(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }

    return this.call<IMessageResponseObject>(
      'PUT',
      `${this.RESOURCE}/${id}/resolve`,
      undefined,
      fetchOptions,
    )
  }

  async create(feedback: ICreateFeedbackItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }

    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/add`,
      feedback,
      fetchOptions,
    )
  }
}

export default FeedbackModule
