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
  private token = useCookie('token')
  private fetchOptions: FetchOptions<'json'> = {
    headers: {
      Authorization: `${this.token.value}`,
    },
    params: {},
  }

  async getAll() {
    return this.call<IVenuesResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      this.fetchOptions,
    )
  }

  async create(venue: IVenueCreateItem) {
    return this.call<IVenueSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}/add`,
      venue,
      this.fetchOptions,
    )
  }

  async update(id: string, venue: IVenueCreateItem) {
    return this.call<IVenueSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/edit?id=${id}`,
      venue,
      this.fetchOptions,
    )
  }

  async delete(id: string) {
    return this.call<IVenueSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/delete?id=${id}`,
      undefined,
      this.fetchOptions,
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
    return this.call<IAvailableVenueResponse>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      this.fetchOptions,
    )
  }
}

export default VenuesModule
