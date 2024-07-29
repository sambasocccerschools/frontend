import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  ISessionPlanResponse,
  ISessionPlanCreateUpdateItem,
  ITermEditItem,
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

  private createFormData = (data: ISessionPlanCreateUpdateItem) => {
    let formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('ability_group_id', data.ability_group_id as any)
    formData.append('banner', data.banner as any)
    formData.append('video', data.video as any)
    data.exercises.forEach((x, index) => {
      formData.append(`exercises[${index}][title]`, x.title)
      formData.append(`exercises[${index}][subtitle]`, x.subtitle)
      formData.append(`exercises[${index}][description]`, x.description)
      formData.append(`exercises[${index}][title_duration]`, x.title_duration)
      formData.append(`exercises[${index}][banner]`, x.banner as any)
      formData.append(`exercises[${index}][video]`, x.video as any)
    })
    return formData
  }

  async create(data: ISessionPlanCreateUpdateItem) {
    let formData = this.createFormData(data)

    const fetchOptions: FetchOptions<'json'> = {}

    return this.call<ISessionPlanResponse>(
      'POST',
      `${this.RESOURCE}`,
      formData,
      fetchOptions,
    )
  }

  async update(id: number, data: ISessionPlanCreateUpdateItem) {
    let formData = this.createFormData(data)
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
}

export default SessionPlansModule
