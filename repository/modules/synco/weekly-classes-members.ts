import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesMembersResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesMemberCreate,
  ISendMessageMemberObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesMembersReportingResponse,
  IWeeklyClassesMembersFilterObject,
} from '~/types/synco'

class WeeklyClassesMembersModule extends FetchFactory {
  private RESOURCE = '/weeklyClassesMembers'

  async getAll(limit: number = 25) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {
        limit: limit,
      },
    }
    return this.call<IWeeklyClassesMembersResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesMembersFilterObject,
    limit: number = 25,
  ) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {
        limit: limit,
      },
    }
    if (fetchOptions.params) {
      if (filter.student) fetchOptions.params.student = filter.student
      if (!!filter.venue_id && filter.venue_id != '0')
        fetchOptions.params.venue_id = filter.venue_id
      if (!!filter.member_status_id && filter.member_status_id != '0')
        fetchOptions.params.member_status_id = filter.member_status_id
      if (filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (filter.start_date) fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesMembersResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async getById(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IWeeklyClassesShowLeadResponse>(
      'GET',
      `${this.RESOURCE}/get_all?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  async delete(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  async restore(id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}/restore?id=${id}`,
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
    return this.call<IExcelResponse>(
      'GET',
      `${this.RESOURCE}/exportExcel`,
      undefined,
      fetchOptions,
    )
  }

  async sendText(body: ISendMessageMemberObject) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      fetchOptions,
    )
  }
  async sendEmail(body: ISendMessageMemberObject) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendEmail`,
      body,
      fetchOptions,
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
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const body = {
      weekly_classes_member_id: [id],
      member_status_code: statusId,
    }
    return this.call<IMessageResponseObject>(
      'PUT',
      `${this.RESOURCE}/changeStatus`,
      body,
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
    return this.call<IWeeklyClassesMembersReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      fetchOptions,
    )
  }

  async create(data: IWeeklyClassesMemberCreate) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/add`,
      data,
      fetchOptions,
    )
  }

  async createFromFindAClass(data: IWeeklyClassesMemberCreate) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/add_front`,
      data,
      fetchOptions,
    )
  }
}

export default WeeklyClassesMembersModule
