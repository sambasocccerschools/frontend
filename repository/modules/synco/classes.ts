import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesResponse,
  IWeeklyClassesCreateItem,
  IWeeklyClassesSuccessfulResponse,
} from '~/types/synco'

class ClassesModule extends FetchFactory {
  private RESOURCE = '/v1/weeklyClasses'

  async getAll(venue_id: string, limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
        venue_id,
      },
    }
    return this.call<IWeeklyClassesResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async create(classes: IWeeklyClassesCreateItem) {
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}`,
      classes,
      undefined,
    )
  }

  async update(id: number, classes: IWeeklyClassesCreateItem) {
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/${id}`,
      classes,
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }
}

export default ClassesModule
