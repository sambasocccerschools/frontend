import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'

class DatasetsModule extends FetchFactory {
  private RESOURCE = '/udc'

  async fetchAllData() {
    const token = useCookie('token').value
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token}`,
      },
    }

    return this.call<any>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async fetchDatasetByType(type: string) {
    const token = useCookie('token').value
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token}`,
      },
    }

    return this.call<any>(
      'GET',
      `${this.RESOURCE}/get_all?type=${type}`,
      { type },
      fetchOptions,
    )
  }
}

export default DatasetsModule
