import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IAbilityGroupsObjectResponse,
  IAbilityGroupCreateItem,
  IAbilityGroupUpdateItem,
  IAbilityGroupObjectResponse,
} from '~/types/synco'

class AbilityGroupsModule extends FetchFactory {
  private RESOURCE = '/abilityGroups'

  async getAll() {
    // service_package_id: number | null = null, //   | 'club', //   | 'birthday-parties' //   | 'holiday-camps' //   | 'one-to-one' //   | 'weekly-classes' // service:
    // if (service_package_id != null && fetchOptions.params != undefined) {
    //   fetchOptions.params.service_package_id = service_package_id
    // }
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IAbilityGroupsObjectResponse>(
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
    return this.call<IAbilityGroupObjectResponse>(
      'GET',
      `${this.RESOURCE}/get_all?id=${id}`,
      undefined,
      fetchOptions,
    )
  }

  async create(data: IAbilityGroupCreateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('min_age', data.min_age as any)
    formData.append('max_age', data.max_age as any)
    formData.append('service', data.service)
    formData.append('service_package_id', data.service_package_id as any)
    formData.append('icon', data.icon as any)
    return this.call<IAbilityGroupObjectResponse>(
      'POST',
      `${this.RESOURCE}`,
      formData,
      fetchOptions,
    )
  }

  async update(id: number, data: IAbilityGroupUpdateItem) {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('min_age', data.min_age as any)
    formData.append('max_age', data.max_age as any)
    formData.append('icon', data.icon as any)
    formData.append('_method', 'PUT')
    return this.call<IAbilityGroupObjectResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      formData,
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
    return this.call<IAbilityGroupObjectResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id${id}`,
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
    return this.call<IAbilityGroupObjectResponse>(
      'POST',
      `${this.RESOURCE}/restore?id=${id}`,
      undefined,
      fetchOptions,
    )
  }
}

export default AbilityGroupsModule
