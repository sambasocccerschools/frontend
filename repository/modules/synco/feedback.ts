import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type { IMessageResponseObject, ICreateFeedbackItem } from '~/types/synco'

class FeedbackModule extends FetchFactory {
  private RESOURCE = '/v1/feedbacks'

  async resolve(id: number) {
    return this.call<IMessageResponseObject>(
      'PUT',
      `${this.RESOURCE}/${id}/resolve`,
      undefined,
      undefined,
    )
  }

  async create(feedback: ICreateFeedbackItem) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}`,
      feedback,
      undefined,
    )
  }
}

export default FeedbackModule
