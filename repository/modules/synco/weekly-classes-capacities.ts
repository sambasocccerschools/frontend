import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesCapacitiesResponse,
  IWeeklyClassesCapacitiesReportingResponse,
} from '~/types/synco'

class WeeklyClassesCapacitiesModule extends FetchFactory {
  private RESOURCE = '/v1/weeklyClassesCapacities'

  async getAll() {
    return this.call<IWeeklyClassesCapacitiesResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      undefined,
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
