import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  ISessionPlanResponse,
  ISessionPlanCreateUpdateItem,
  ISingleSessionPlanResponse,
  ITermsSuccessfulResponse,
} from '~/types/synco'

class SessionPlansModule extends FetchFactory {
  private RESOURCE = '/sessionPlans'

  async getByAbilityGroup(ability_group_id: number) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {
        ability_group_id,
      },
    }
    return this.call<ISessionPlanResponse>(
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
    return this.call<ISingleSessionPlanResponse>(
      'GET',
      `${this.RESOURCE}/get?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  // private createFormData = (data: ISessionPlanCreateUpdateItem) => {
  //   let formData = new FormData()
  //   formData.append('title', data.title)
  //   formData.append('description', data.description)
  //   formData.append('player', data.description)
  //   if (data.banner) {
  //     formData.append('banner', data.banner)
  //   }
  //   if (data.video) {
  //     formData.append('video', data.video)
  //   }
  //   data.exercises.forEach((exercise, index) => {
  //     formData.append(`exercises[${index}][title]`, exercise.title)
  //     formData.append(`exercises[${index}][subtitle]`, exercise.subtitle)
  //     formData.append(`exercises[${index}][description]`, exercise.description)
  //     formData.append(
  //       `exercises[${index}][title_duration]`,
  //       exercise.title_duration,
  //     )
  //     if (exercise.banner) {
  //       formData.append(`exercises[${index}][banner][]`, exercise.banner)
  //     }
  //     if (exercise.video) {
  //       formData.append(`exercises[${index}][video][]`, exercise.video)
  //     }
  //   })

  //   return formData
  // }

  async create(data: ISessionPlanCreateUpdateItem) {
    // const token = useCookie('token')
    // const fetchOptions: FetchOptions<'json'> = {
    //   headers: {
    //     'X-Requested-With': 'XMLHttpRequest',
    //     Authorization: `${token.value}`,
    //   },
    // }
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
      params: {},
    }
    // const formData = this.createFormData(data)
    // formData.append('ability_group_id', data.ability_group_id.toString())

    console.log('data', data)
    return this.call<ISessionPlanResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      data,
      fetchOptions,
    )
  }

  async update(id: number, data: ISessionPlanCreateUpdateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    // let formData = await this.createFormData(data)
    // formData.append('_method', 'PUT')

    return this.call<ISessionPlanResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      data,
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
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.callBlobs<Blob>('GET', `${url}`, undefined, fetchOptions)
  }
}

export default SessionPlansModule
