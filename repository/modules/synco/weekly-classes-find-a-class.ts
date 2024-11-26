/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesFindAClassResponse,
  IWeeklyClassesFindAClassFilterObject,
} from '~/types/synco'

class WeeklyClassesFindAClassModule extends FetchFactory {
  private RESOURCE = '/weeklyClasses'
  private token = useCookie('token')
  private fetchOptions: FetchOptions<'json'> = {
    headers: {
      Authorization: `${this.token.value}`,
    },
    params: {},
  }

  async getByFilter(filter: IWeeklyClassesFindAClassFilterObject) {
    this.fetchOptions.params = {}
    if (this.fetchOptions.params) {
      this.fetchOptions.params.limit = filter.limit ? filter.limit : 25
      if (filter.venue) this.fetchOptions.params.venue = filter.venue
      if (filter.venue_id) this.fetchOptions.params.venue_id = filter.venue_id
      if (filter.postcode) this.fetchOptions.params.postcode = filter.postcode
      if (filter.days) this.fetchOptions.params.days = filter.days
      if (filter.class_name)
        this.fetchOptions.params.class_name = filter.class_name
    }

    return this.call<IWeeklyClassesFindAClassResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      this.fetchOptions,
    )
  }
}

export default WeeklyClassesFindAClassModule
