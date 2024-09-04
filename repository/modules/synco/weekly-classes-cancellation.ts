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
  private RESOURCE = '/v1/weeklyClassesCancellations'

  async getAll(limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    return this.call<IWeeklyClassesCancellationResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesCancellationFilterObject,
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
      if (
        !!filter.member_cancel_status_id &&
        filter.member_cancel_status_id != '0'
      )
        fetchOptions.params.member_cancel_status_id =
          filter.member_cancel_status_id
      if (!!filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (!!filter.start_date)
        fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesCancellationResponse>(
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
    return this.call<IWeeklyClassesCancellationReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }
}

export default WeeklyClassesCancellationModule
