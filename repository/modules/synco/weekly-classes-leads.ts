import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesLeadResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
  ISendMessageObject,
  IMessageResponseObject,
  IExcelResponse,
} from '~/types/synco'

class WeekltClassesLeadsModule extends FetchFactory {
  private RESOURCE = '/v1/weeklyClassesLeads'

  async getAll(limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
      },
    }
    return this.call<IWeeklyClassesLeadResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getByReferralSource(source: number, limit: number = 25) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
        referral_source_id: source,
      },
    }
    return this.call<IWeeklyClassesLeadResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async create(term: IWeeklyClassesLeadCreate) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}`,
      term,
      undefined,
    )
  }

  async update(id: number, term: IWeeklyClassesLeadCreate) {
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'PUT',
      `${this.RESOURCE}/${id}`,
      term,
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

  async assignAgent(id: number, agentId: string) {
    let body = {
      weekly_classes_lead_id: [id],
      agent_id: agentId,
    }
    return this.call<IMessageResponseObject>(
      'PUT',
      `${this.RESOURCE}/assignAgent`,
      body,
      undefined,
    )
  }

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
}

export default WeekltClassesLeadsModule
