import type { AsyncDataOptions } from '#app'
import type {
  IGetWeeklyClassesResponse,
  IGetAllWeeklyClassesInput,
} from '~/types'
import FetchFactory from '../factory'
import type { FetchOptions } from 'ofetch'

class WeeklyClassesModule extends FetchFactory {
  private resource = '/weeklyClasses'
  // private RESOURCE_2 = 'allWeeklyClasses'

  async getAllWeeklyClasses(
    params: IGetAllWeeklyClassesInput,
    asyncDataOptions?: AsyncDataOptions<IGetWeeklyClassesResponse>,
  ) {
    return useAsyncData(() => {
      const token = useCookie('token')
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          Authorization: `${token.value}`,
        },
        params,
      }
      return this.call<IGetWeeklyClassesResponse>(
        'GET',
        `${this.resource}/get_all`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
}

export default WeeklyClassesModule
