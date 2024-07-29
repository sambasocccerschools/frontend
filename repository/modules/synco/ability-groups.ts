import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IAbilityGroupsObjectResponse,
  IAbilityGroupCreateItem,
  IAbilityGroupUpdateItem,
  IAbilityGroupObjectResponse,
} from '~/types/synco'

class AbilityGroupsModule extends FetchFactory {
  private RESOURCE = '/v1/abilityGroups'

  async getAll(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
    service_package_id: number | null = null,
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        service,
      },
    }
    if (service_package_id != null && fetchOptions.params != undefined) {
      fetchOptions.params.service_package_id = service_package_id
    }
    return this.call<IAbilityGroupsObjectResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async getById(id: number) {
    return this.call<IAbilityGroupObjectResponse>(
      'GET',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async create(data: IAbilityGroupCreateItem) {
    let formData = new FormData()
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
      undefined,
    )
  }

  async update(id: number, data: IAbilityGroupUpdateItem) {
    let formData = new FormData()
    formData.append('name', data.name)
    formData.append('min_age', data.min_age as any)
    formData.append('max_age', data.max_age as any)
    formData.append('icon', data.icon as any)
    formData.append('_method', 'PUT')
    return this.call<IAbilityGroupObjectResponse>(
      'PUT',
      `${this.RESOURCE}/${id}`,
      formData,
      undefined,
    )
  }

  async delete(id: number) {
    return this.call<IAbilityGroupObjectResponse>(
      'DELETE',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async restore(id: number) {
    return this.call<IAbilityGroupObjectResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }
}

export default AbilityGroupsModule
