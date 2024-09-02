import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesSalesResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
  ISendMessageObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesSalesReportingResponse,
  IWeeklyClassesSalesFilterObject,
} from '~/types/synco'

class WeeklyClassesSalesModule extends FetchFactory {
  private RESOURCE = '/v1/WeeklyClassesSales'

  async getAll(limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    return this.call<IWeeklyClassesSalesResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesSalesFilterObject,
    limit: number = 25,
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    if (!!fetchOptions.params) {
      if (!!filter.student) fetchOptions.params.student = filter.student
      if (!!filter.venue_id && filter.venue_id != '0')
        fetchOptions.params.venue_id = filter.venue_id
      if (!!filter.sale_status_id && filter.sale_status_id != '0')
        fetchOptions.params.sale_status_id = filter.sale_status_id
      if (!!filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (!!filter.start_date)
        fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesSalesResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getById(id: number) {
    return this.call<IWeeklyClassesShowLeadResponse>(
      'GET',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'DELETE',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async exportExcel() {
    return this.call<IExcelResponse>(
      'GET',
      `${this.RESOURCE}/exportExcel`,
      undefined,
      undefined,
    )
  }

  async sendText(body: ISendMessageObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      undefined,
    )
  }
  async sendEmail(body: ISendMessageObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendEmail`,
      body,
      undefined,
    )
  }

  // async assignAgent(id: number, agentId: string) {
  //   let body = {
  //     weekly_classes_lead_id: [id],
  //     agent_id: agentId,
  //   }
  //   return this.call<IMessageResponseObject>(
  //     'PUT',
  //     `${this.RESOURCE}/assignAgent`,
  //     body,
  //     undefined,
  //   )
  // }

  async assignStatus(id: number, statusId: number) {
    let body = {
      weekly_classes_lead_id: [id],
      lead_status_id: statusId,
    }
    return this.call<IMessageResponseObject>(
      'PUT',
      `${this.RESOURCE}/changeStatus`,
      body,
      undefined,
    )
  }

  async getReporting() {
    return this.call<IWeeklyClassesSalesReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }
}

export default WeeklyClassesSalesModule
