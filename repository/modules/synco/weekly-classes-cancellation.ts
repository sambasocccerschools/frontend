import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesCancellationResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
  ISendMessageCancellationObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesCancellationReportingResponse,
  IWeeklyClassesCancellationFilterObject,
} from '~/types/synco'

class WeeklyClassesCancellationModule extends FetchFactory {
  private RESOURCE = '/weeklyClassesCancellations'
  private token = useCookie('token')
  private fetchOptions: FetchOptions<'json'> = {
    headers: {
      Authorization: `${this.token.value}`,
    },
    params: {},
  }

  async getAll(limit: number = 25) {
    this.fetchOptions.params = {}
    this.fetchOptions.params.limit = limit
    return this.call<IWeeklyClassesCancellationResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      this.fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesCancellationFilterObject,
    limit: number = 25,
  ) {
    this.fetchOptions.params = {}
    this.fetchOptions.params.limit = limit
    if (this.fetchOptions.params) {
      if (filter.student) this.fetchOptions.params.student = filter.student
      if (!!filter.venue_id && filter.venue_id != '0')
        this.fetchOptions.params.venue_id = filter.venue_id
      if (
        !!filter.member_cancel_status_id &&
        filter.member_cancel_status_id != '0'
      )
        this.fetchOptions.params.member_cancel_status_id =
          filter.member_cancel_status_id
      if (filter.end_date) this.fetchOptions.params.end_date = filter.end_date
      if (filter.start_date)
        this.fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesCancellationResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      this.fetchOptions,
    )
  }

  async getById(id: number) {
    return this.call<IWeeklyClassesShowLeadResponse>(
      'GET',
      `${this.RESOURCE}/get_all?id=${id}`,
      undefined,
      this.fetchOptions,
    )
  }

  async delete(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      this.fetchOptions,
    )
  }

  async restore(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}/restore?id=${id}`,
      undefined,
      this.fetchOptions,
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

  async sendText(body: ISendMessageCancellationObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      undefined,
    )
  }
  async sendEmail(body: ISendMessageCancellationObject) {
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
    const body = {
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
    return this.call<IWeeklyClassesCancellationReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }
}

export default WeeklyClassesCancellationModule
