/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesFindAClassResponse,
  IWeeklyClassesFindAClassFilterObject,
} from '~/types/synco'

class WeeklyClassesFindAClassModule extends FetchFactory {
  private RESOURCE = '/allWeeklyClasses'

  async getByFilter(filter: IWeeklyClassesFindAClassFilterObject) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    fetchOptions.params = {}
    if (fetchOptions.params) {
      fetchOptions.params.limit = filter.limit ? filter.limit : 25
      if (filter.venue) fetchOptions.params.venue = filter.venue
      if (filter.venue_id) fetchOptions.params.venue_id = filter.venue_id
      if (filter.postcode) fetchOptions.params.postcode = filter.postcode
      if (filter.days) fetchOptions.params.days = filter.days
      if (filter.class_name) fetchOptions.params.class_name = filter.class_name
    }

    return this.call<IWeeklyClassesFindAClassResponse>(
      'GET',
      `${this.RESOURCE}/find_a_class`,
      undefined,
      fetchOptions,
    )
  }
}

export default WeeklyClassesFindAClassModule
