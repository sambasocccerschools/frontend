import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IVenuesResponse,
  IVenueCreateItem,
  IVenueSuccessfulResponse,
  IAvailableVenueResponse,
} from '~/types/synco'

class VenuesModule extends FetchFactory {
  private RESOURCE = '/venue'

  async getAll() {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IVenuesResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  async create(venue: IVenueCreateItem) {
    return this.call<IVenueSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      venue,
    )
  }

  async update(id: string, venue: IVenueCreateItem) {
    return this.call<IVenueSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      venue,
    )
  }

  async delete(id: string) {
    return this.call<IVenueSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
    )
  }

  async restore(id: string) {
    return this.call<IVenueSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/${id}`,
      undefined,
      undefined,
    )
  }

  async availableVenues() {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<IAvailableVenueResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }
}

export default VenuesModule
