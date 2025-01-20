import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesCapacitiesResponse,
  IWeeklyClassesCapacitiesReportingResponse,
} from '~/types/synco'

class WeeklyClassesCapacitiesModule extends FetchFactory {
  private RESOURCE = '/weeklyClassesCapacities'
  private token = useCookie('token')
  private fetchOptions: FetchOptions<'json'> = {
    headers: {
      Authorization: `${this.token.value}`,
    },
  }

  async getAll() {
    return this.call<IWeeklyClassesCapacitiesResponse>(
      'GET',
      `${this.RESOURCE}/get_capacities`,
      undefined,
      this.fetchOptions,
    )
  }

  async exportExcel() {
    return this.call<any>(
      'GET',
      `${this.RESOURCE}/exportExcel`,
      undefined,
      undefined,
    )
  }

  async getReporting() {
    return this.call<IWeeklyClassesCapacitiesReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }
}

export default WeeklyClassesCapacitiesModule
