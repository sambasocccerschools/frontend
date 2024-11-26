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
    return this.call<IWeeklyClassesFreeTrialsResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      this.fetchOptions,
    )
  }

  async getByFilter(
    filter: IWeeklyClassesFreeTrialsFilterObject,
    limit: number = 25,
  ) {
    this.fetchOptions.params = {}
    this.fetchOptions.params.limit = limit
    if (this.fetchOptions.params) {
      if (filter.student) this.fetchOptions.params.student = filter.student
      if (!!filter.venue_id && filter.venue_id != '0')
        this.fetchOptions.params.venue_id = filter.venue_id
      if (!!filter.free_trial_status_id && filter.free_trial_status_id != '0')
        this.fetchOptions.params.free_trial_status_id = filter.free_trial_status_id
      if (filter.end_date) this.fetchOptions.params.end_date = filter.end_date
      if (filter.start_date)
        this.fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesFreeTrialsResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      this.fetchOptions,
    )
  }

  async getById(id: number) {
    return this.call<IWeeklyClassesShowLeadResponse>(
      'GET',
      `${this.RESOURCE}/edit?id=${id}`,
      undefined,
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}/restore?id=${id}`,
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

  async sendText(body: ISendMessageFreeTrialObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      undefined,
    )
  }
  async sendEmail(body: ISendMessageFreeTrialObject) {
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
    return this.call<IWeeklyClassesFreeTrialReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }

  async create(data: IWeeklyClassesFreeTrialCreate) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}`,
      data,
      undefined,
    )
  }
}

export default WeeklyClassesFreeTrialsModule
