import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  ISessionPlanResponse,
  ISessionPlanCreateUpdateItem,
  ISingleSessionPlanResponse,
  ITermsSuccessfulResponse,
} from '~/types/synco'

class SessionPlansModule extends FetchFactory {
  private RESOURCE = '/v1/sessionPlans'

  async getByAbilityGroup(ability_group_id: number) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        ability_group_id,
      },
    }
    return this.call<ISessionPlanResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getById(id: number) {
    return this.call<ISingleSessionPlanResponse>(
      'GET',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  private createFormData = (data: ISessionPlanCreateUpdateItem) => {
    let formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('player', data.description)
    if (data.banner) {
      formData.append('banner', data.banner)
    }
    if (data.video) {
      formData.append('video', data.video)
    }
    data.exercises.forEach((exercise, index) => {
      formData.append(`exercises[${index}][title]`, exercise.title)
      formData.append(`exercises[${index}][subtitle]`, exercise.subtitle)
      formData.append(`exercises[${index}][description]`, exercise.description)
      formData.append(
        `exercises[${index}][title_duration]`,
        exercise.title_duration,
      )
      if (exercise.banner) {
        formData.append(`exercises[${index}][banner][]`, exercise.banner)
      }
      if (exercise.video) {
        formData.append(`exercises[${index}][video][]`, exercise.video)
      }
    })

    return formData
  }

  async create(data: ISessionPlanCreateUpdateItem) {
    const formData = this.createFormData(data)
    formData.append('ability_group_id', data.ability_group_id.toString())
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }

    return this.call<ISessionPlanResponse>(
      'POST',
      `${this.RESOURCE}`,
      formData,
      fetchOptions,
    )
  }

  async update(id: number, data: ISessionPlanCreateUpdateItem) {
    let formData = await this.createFormData(data)
    formData.append('_method', 'PUT')

    const fetchOptions: FetchOptions<'json'> = {}
    return this.call<ISessionPlanResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      formData,
      fetchOptions,
    )
  }

  // async delete(id: number) {
  //   return this.call<ITermsSuccessfulResponse>(
  //     'DELETE',
  //     `${this.RESOURCE}/${id}`,
  //     undefined,
  //     undefined,
  //   )
  // }

  // async restore(id: number) {
  //   return this.call<ITermsSuccessfulResponse>(
  //     'POST',
  //     `${this.RESOURCE}/${id}`,
  //     undefined,
  //     undefined,
  //   )
  // }

  async getBlobs(url: string) {
    return this.callBlobs<Blob>('GET', `${url}`, undefined, undefined)
  }
}

export default SessionPlansModule
