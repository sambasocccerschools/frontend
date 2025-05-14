import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesFreeTrialsResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesFreeTrialCreate,
  ISendMessageFreeTrialObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesFreeTrialReportingResponse,
  IWeeklyClassesFreeTrialsFilterObject,
} from '~/types/synco'

class WeeklyClassesFreeTrialsModule extends FetchFactory {
  private RESOURCE = '/weeklyClassesFreeTrials'

  async getAll(limit: number = 25) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {
        limit,
      },
    }
    return this.call<IWeeklyClassesFreeTrialsResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesFreeTrialsFilterObject,
    limit: number = 25,
  ) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {
        limit,
      },
    }
    if (fetchOptions.params) {
      if (filter.student) fetchOptions.params.student = filter.student
      if (!!filter.venue_id && filter.venue_id != '0')
        fetchOptions.params.venue_id = filter.venue_id
      if (!!filter.free_trial_status_id && filter.free_trial_status_id != '0')
        fetchOptions.params.free_trial_status_id = filter.free_trial_status_id
      if (filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (filter.start_date) fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesFreeTrialsResponse>(
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
      params: {},
    }
    return this.call<IWeeklyClassesShowLeadResponse>(
      'GET',
      `${this.RESOURCE}/edit?id=${id}`,
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
      params: {},
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
      params: {},
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
      params: {},
    }
    return this.call<IExcelResponse>(
      'GET',
      `${this.RESOURCE}/exportExcel`,
      undefined,
      fetchOptions,
    )
  }

  async sendText(body: ISendMessageFreeTrialObject) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      fetchOptions,
    )
  }
  async sendEmail(body: ISendMessageFreeTrialObject) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
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

  async assignStatus(id: number, code: string) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const body = {
      weekly_classes_free_trial_id: [id],
      free_trial_status_code: code,
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
      params: {},
    }
    return this.call<IWeeklyClassesFreeTrialReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      fetchOptions,
    )
  }

  async create(data: IWeeklyClassesFreeTrialCreate) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/add`,
      data,
      fetchOptions,
    )
  }

  async createFromFindAClass(data: IWeeklyClassesFreeTrialCreate) {
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

export default WeeklyClassesFreeTrialsModule
