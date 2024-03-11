import type { AsyncDataOptions } from '#app'
import type {
  IGetWeeklyClassesResponse,
  IGetAllWeeklyClassesInput,
} from '~/types'
import FetchFactory from '../factory'
import type { FetchOptions } from 'ofetch'

class WeeklyClassesModule extends FetchFactory {
  private RESOURCE_1 = '/v1/weeklyClasses'
  private RESOURCE_2 = '/v1/allWeeklyClasses'

  async getAllWeeklyClasses(
    params: IGetAllWeeklyClassesInput,
    asyncDataOptions?: AsyncDataOptions<IGetWeeklyClassesResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        params,
      }
      return this.call<IGetWeeklyClassesResponse>(
        'GET',
        `${this.RESOURCE_2}/findAClass`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
}

export default WeeklyClassesModule
