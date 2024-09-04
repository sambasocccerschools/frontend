import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'
import type {
  IVenuesResponse,
  IVenueCreateItem,
  IVenueSuccessfulResponse,
  IAvailableVenueResponse,
} from '~/types/synco'

class VenuesModule extends FetchFactory {
  private RESOURCE = '/v1/venues'

  async getAll(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club'
      | 'pathway',
    limit: number = 25,
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        limit,
        service,
      },
    }
    return this.call<IVenuesResponse>(
      'GET',
      `${this.RESOURCE}`,
      undefined,
      fetchOptions,
    )
  }

  async create(venue: IVenueCreateItem) {
    return this.call<IVenueSuccessfulResponse>(
      'POST',
      `${this.RESOURCE}`,
      venue,
      undefined,
    )
  }

  async update(id: string, venue: IVenueCreateItem) {
    return this.call<IVenueSuccessfulResponse>(
      'PUT',
      `${this.RESOURCE}/${id}`,
      venue,
      undefined,
    )
  }

  async delete(id: string) {
    return this.call<IVenueSuccessfulResponse>(
      'DELETE',
      `${this.RESOURCE}/${id}`,
      undefined,
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

  async availableVenues(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club'
      | 'pathway',
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        service,
        include_classes: false,
      },
    }
    return this.call<IAvailableVenueResponse>(
      'GET',
      `/v1/datasets/venue`,
      undefined,
      fetchOptions,
    )
  }
}

export default VenuesModule
