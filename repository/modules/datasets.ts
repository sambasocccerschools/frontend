import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'

class DatasetsModule extends FetchFactory {
  getEnrolledWeeklyClass(familiId: number, arg1: boolean) {
    throw new Error('Method not implemented.')
  }
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
