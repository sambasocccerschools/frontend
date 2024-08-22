import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesLeadResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
  ISendMessageObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesLeadsReportingResponse,
  IWeekltClassesLeadFilterObject,
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

  async getByFilter(
    filter: IWeekltClassesLeadFilterObject,
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
      if (!!filter.referral_source_id && filter.referral_source_id != '0')
        fetchOptions.params.referral_source_id = filter.referral_source_id
      if (!!filter.lead_status_id && filter.lead_status_id != '0')
        fetchOptions.params.lead_status_id = filter.lead_status_id
      if (!!filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (!!filter.start_date)
        fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesLeadResponse>(
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

  async create(term: IWeeklyClassesLeadCreate) {
    let guardians = []
    term.guardians.forEach((x) => {
      guardians.push({
        first_name: x.first_name,
        last_name: x.last_name,
        email: x.email,
        phone_number: x.phone_number,
        relationship_id: x.relationship_id,
        referral_source_id: x.referral_source_id,
      })
    })
    let students = []
    term.students.forEach((x) => {
      students.push({
        first_name: x.first_name,
        last_name: x.last_name,
        dob: x.dob,
        age: x.age,
        gender_id: x.gender_id,
        medical_information_id: x.medical_information_id,
      })
    })
    let emergency_contacts = []
    term.emergency_contacts.forEach((x) => {
      emergency_contacts.push({
        first_name: x.first_name,
        last_name: x.last_name,
        phone_number: x.phone_number,
        relationship_id: x.relationship_id,
      })
    })
    let comments = []
    term.comments.forEach((x) => {
      comments.push(x)
    })

    let body = {
      weekly_class_id: term.weekly_class_id,
      guardians: guardians,
      students: students,
      emergency_contacts: emergency_contacts,
      comments: comments,
    }
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}`,
      body,
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

  async getReporting() {
    return this.call<IWeeklyClassesLeadsReportingResponse>(
      'GET',
      `${this.RESOURCE}/reporting`,
      undefined,
      undefined,
    )
  }
}

export default WeekltClassesLeadsModule
