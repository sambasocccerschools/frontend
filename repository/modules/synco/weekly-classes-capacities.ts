import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesCapacitiesResponse,
  IWeeklyClassesCapacitiesReportingResponse,
} from '~/types/synco'

class WeeklyClassesCapacitiesModule extends FetchFactory {
  private RESOURCE = '/weeklyClassesCapacities'

  async getAll() {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IWeeklyClassesCapacitiesResponse>(
      'GET',
      `${this.RESOURCE}/get_capacities`,
      undefined,
      fetchOptions,
    )
  }

  async exportExcel() {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<any>(
      'GET',
      `${this.RESOURCE}/exportExcel`,
      undefined,
      fetchOptions,
    )
  }

  async getReporting() {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IWeeklyClassesCapacitiesReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      fetchOptions,
    )
  }
}

export default WeeklyClassesCapacitiesModule
