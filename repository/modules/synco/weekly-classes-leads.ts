import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IWeeklyClassesLeadResponse,
  IWeeklyClassesLeadCreateResponse,
  IWeeklyClassesLeadCreate,
  ISendMessageLeadObject,
  IMessageResponseObject,
  IExcelResponse,
  IWeeklyClassesShowLeadResponse,
  IWeeklyClassesLeadsReportingResponse,
  IWeeklyClassesLeadFilterObject,
  ICreateGuardian,
  ICreateStudent,
  ICreateEmergencyContact,
} from '~/types/synco'

class WeeklyClassesLeadsModule extends FetchFactory {
  private RESOURCE = '/weeklyClassesLeads'

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
    return this.call<IWeeklyClassesLeadResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async getByReferralSource(source: number, limit: number = 25) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
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
    filter: IWeeklyClassesLeadFilterObject,
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

    fetchOptions.params = {}
    fetchOptions.params.limit = limit
    if (fetchOptions.params) {
      if (filter.student) fetchOptions.params.student = filter.student
      if (!!filter.venue_id && filter.venue_id != '0')
        fetchOptions.params.venue_id = filter.venue_id
      if (!!filter.referral_source_id && filter.referral_source_id != '0')
        fetchOptions.params.referral_source_id = filter.referral_source_id
      if (!!filter.lead_status_id && filter.lead_status_id != '0')
        fetchOptions.params.lead_status_id = filter.lead_status_id
      if (filter.end_date) fetchOptions.params.end_date = filter.end_date
      if (filter.start_date) fetchOptions.params.start_date = filter.start_date
    }

    return this.call<IWeeklyClassesLeadResponse>(
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

  async create(term: IWeeklyClassesLeadCreate) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const guardians: ICreateGuardian[] = []
    term.guardians.forEach((x) => {
      guardians.push({
        first_name: x.first_name,
        last_name: x.last_name,
        email: x.email,
        phone_number: x.phone_number,
        relationship_code: x.relationship_code,
        referral_source_code: x.referral_source_code,
      })
    })
    const students: ICreateStudent[] = []
    term.students.forEach((x) => {
      students.push({
        first_name: x.first_name,
        last_name: x.last_name,
        dob: x.dob,
        age: x.age,
        gender_id: x.gender_id,
        medical_information: x.medical_information,
      })
    })
    const emergency_contacts: ICreateEmergencyContact[] = []
    term.emergency_contacts.forEach((x) => {
      emergency_contacts.push({
        first_name: x.first_name,
        last_name: x.last_name,
        phone_number: x.phone_number,
        relationship_id: x.relationship_id,
      })
    })
    const comments: string[] = []
    term.comments.forEach((x) => {
      comments.push(x)
    })

    const body = {
      weekly_class_id: term.weekly_class_id,
      guardians: guardians,
      students: students,
      emergency_contacts: emergency_contacts,
      comments: comments,
    }
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      body,
      fetchOptions,
    )
  }

  async update(id: number, term: IWeeklyClassesLeadCreate) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IWeeklyClassesLeadCreateResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      term,
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
    return this.call<IExcelResponse>(
      'GET',
      `${this.RESOURCE}/exportExcel`,
      undefined,
      undefined,
    )
  }

  async sendText(body: ISendMessageLeadObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendText`,
      body,
      undefined,
    )
  }
  async sendEmail(body: ISendMessageLeadObject) {
    return this.call<IMessageResponseObject>(
      'POST',
      `${this.RESOURCE}/sendEmail`,
      body,
      undefined,
    )
  }

  async assignAgent(id: number, agentId: string) {
    const body = {
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
    const body = {
      weekly_classes_lead_id: [Number(id)],
      lead_status_code: statusId,
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

export default WeeklyClassesLeadsModule
