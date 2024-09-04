import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesMembersResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
  ISendMessageMemberObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesMembersReportingResponse,
  IWeeklyClassesMembersFilterObject,
} from '~/types/synco'

class WeeklyClassesMembersModule extends FetchFactory {
  private RESOURCE = '/v1/WeeklyClassesMembers'

  async getAll(limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    return this.call<IWeeklyClassesMembersResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesMembersFilterObject,
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
      if (!!filter.member_status_id && filter.member_status_id != '0')
        fetchOptions.params.member_status_id = filter.member_status_id
      if (!!filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (!!filter.start_date)
        fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesMembersResponse>(
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

  async sendText(body: ISendMessageMemberObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      undefined,
    )
  }
  async sendEmail(body: ISendMessageMemberObject) {
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
    return this.call<IWeeklyClassesMembersReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }
}

export default WeeklyClassesMembersModule
