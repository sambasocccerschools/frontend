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
    const fetchOptions: FetchOptions<'json'> = {
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
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      term,
      undefined,
    )
  }

  async update(id: number, term: ITermEditItem) {
    let sessions = []
    term.sessions?.forEach((session) => {
      if (session.id <= 0) {
        let plans = []
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
    let body = {
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
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<ITermsSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<ITermsSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }
}

export default TermsModule
