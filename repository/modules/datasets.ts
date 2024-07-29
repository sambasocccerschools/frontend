import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { IGetUniqueWeeklyClassResponse, IGetVenueResponse } from '~/types'
import type { ISeasonResponse } from '~/types/synco'

class DatasetsModule extends FetchFactory {
  private RESOURCE = '/v1/datasets'

  async getVenue(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
    asyncDataOptions?: AsyncDataOptions<IGetVenueResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        params: {
          service,
        },
      }
      return this.call<IGetVenueResponse>(
        'GET',
        `${this.RESOURCE}/venue`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
  async getUniqueWeeklyClass(
    asyncDataOptions?: AsyncDataOptions<IGetUniqueWeeklyClassResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {}
      return this.call<IGetUniqueWeeklyClassResponse>(
        'GET',
        `${this.RESOURCE}/uniqueWeeklyClass`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }

  async getSeasons() {
    return this.call<ISeasonResponse>(
      'GET',
      `${this.RESOURCE}/season`,
      undefined,
      undefined,
    )
  }
}

export default DatasetsModule
