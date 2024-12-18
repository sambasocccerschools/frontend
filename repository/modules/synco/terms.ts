import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  ITermsResponse,
  ITermCreateItem,
  ITermEditItem,
  ITermsSuccessfulResponse,
} from '~/types/synco'

class TermsModule extends FetchFactory {
  private RESOURCE = '/terms'

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
    return this.call<ITermsResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async create(term: ITermCreateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      term,
      fetchOptions,
    )
  }

  async createNew(term: ITermCreateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/add_front`,
      term,
      fetchOptions,
    )
  }

  async update(id: number, term: ITermEditItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const sessions = []
    term.sessions?.forEach((session) => {
      if (session.id <= 0) {
        const plans = []
        session.plans?.forEach((plan) => {
          plans.push({
            ability_group_id: plan.ability_group_id,
            session_plan_id: plan.session_plan_id,
          })
        })
        sessions.push({
          plans: plans,
        })
      } else {
        sessions.push(session)
      }
    })
    const body = {
      season_id: term.season_id,
      name: term.name,
      end_date: term.end_date,
      start_date: term.start_date,
      half_term_date: term.half_term_date,
      sessions: sessions,
    }
    return this.call<ITermsSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      body,
      fetchOptions,
    )
  }

  async updateNew(id: number, term: any) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }

    console.log(term.sessions)

    const sessions: any[] = []
    term.sessions?.forEach((session: any) => {
      if (session.id <= 0) {
        const plans: any[] = []
        session.plans?.forEach((plan: any) => {
          plans.push({
            ability_group: Number(plan.ability_group),
            session_plan: Number(plan.session_plan),
          })
        })
        sessions.push({
          id: Number(session.id),
          plans: plans,
        })
      } else {
        sessions.push(session)
      }
    })

    console.log('sessions')
    console.log(sessions)
    const body = {
      season_code: term.season_code,
      name: term.name,
      end_date: term.end_date,
      start_date: term.start_date,
      half_term_date: term.half_term_date,
      sessions: sessions,
    }
    return this.call<ITermsSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/edit_front?id=${id}`,
      body,
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
    return this.call<ITermsSuccessfulResponse>(
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
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/restore?id=${id}`,
      undefined,
      fetchOptions,
    )
  }
}

export default TermsModule
