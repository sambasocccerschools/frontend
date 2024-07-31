import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  ITermsResponse,
  ITermCreateItem,
  ITermEditItem,
  ITermsSuccessfulResponse,
} from '~/types/synco'

class WeekltClassesWaitingListModule extends FetchFactory {
  private RESOURCE = '/v1/weeklyClassesLeads'

  async getAll(limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    return this.call<ITermsResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async create(term: ITermCreateItem) {
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}`,
      term,
      undefined,
    )
  }

  async update(id: number, term: ITermEditItem) {
    return this.call<ITermsSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/${id}`,
      term,
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<ITermsSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }
}

export default WeekltClassesWaitingListModule
