import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
} from '~/types/synco'

class WeekltClassesLeadsModule extends FetchFactory {
  private RESOURCE = '/v1/weeklyClassesLeads'

  async getAll(limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async create(term: IWeeklyClassesLeadCreate) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}`,
      term,
      undefined,
    )
  }

  async update(id: number, term: IWeeklyClassesLeadCreate) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'PUT',
      `${this.RESOURCE}/${id}`,
      term,
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'DELETE',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }
}

export default WeekltClassesLeadsModule
