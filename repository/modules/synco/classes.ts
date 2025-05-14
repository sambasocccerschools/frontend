import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesResponse,
  IWeeklyClassesCreateItem,
  IWeeklyClassesSuccessfulResponse,
} from '~/types/synco'

class ClassesModule extends FetchFactory {
  private RESOURCE = '/weeklyClasses'

  async getAll(venue_id: string, limit: number = 25) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {
        limit,
        venue_id,
      },
    }
    return this.call<IWeeklyClassesResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async create(classes: IWeeklyClassesCreateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      classes,
      fetchOptions,
    )
  }

  async update(id: number, classes: IWeeklyClassesCreateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      classes,
      fetchOptions,
    )
  }

  async delete(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  async restore(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    return this.call<IWeeklyClassesSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/restore?id=${id}`,
      undefined,
      fetchOptions,
    )
  }
}

export default ClassesModule
