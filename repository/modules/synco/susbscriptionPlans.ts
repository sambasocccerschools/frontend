import type { FetchOptions } from 'ofetch'
import FetchFactory from '../../factory'

class SubscriptionPlansModule extends FetchFactory {
  private RESOURCE = '/subscriptionPlans'

  async getAll() {
    const token = useCookie('token')
    const fetchOptions: FetchOptions<'json'> = {
      headers: {
        Authorization: `${token.value}`,
      },
    }
    return this.call<any>(
      'GET',
      `${this.RESOURCE}/get_all`,
      undefined,
      fetchOptions,
    )
  }

  //   async create(venue: IVenueCreateItem) {
  //     const token = useCookie('token')
  //     const fetchOptions: FetchOptions<'json'> = {
  //       headers: {
  //         Authorization: `${token.value}`,
  //       },
  //     }
  //     return this.call<IVenueSuccessfulResponse>(
  //       'POST',
  //       `${this.RESOURCE}/add`,
  //       venue,
  //       fetchOptions,
  //     )
  //   }

  //   async update(id: string, venue: IVenueCreateItem) {
  //     const token = useCookie('token')
  //     const fetchOptions: FetchOptions<'json'> = {
  //       headers: {
  //         Authorization: `${token.value}`,
  //       },
  //     }
  //     return this.call<IVenueSuccessfulResponse>(
  //       'PUT',
  //       `${this.RESOURCE}/edit?id=${id}`,
  //       venue,
  //       fetchOptions,
  //     )
  //   }

  //   async delete(id: string) {
  //     const token = useCookie('token')
  //     const fetchOptions: FetchOptions<'json'> = {
  //       headers: {
  //         Authorization: `${token.value}`,
  //       },
  //     }
  //     return this.call<IVenueSuccessfulResponse>(
  //       'DELETE',
  //       `${this.RESOURCE}/delete?id=${id}`,
  //       undefined,
  //       fetchOptions,
  //     )
  //   }

  //   async restore(id: string) {
  //     return this.call<IVenueSuccessfulResponse>(
  //       'POST',
  //       `${this.RESOURCE}/${id}`,
  //       undefined,
  //       undefined,
  //     )
  //   }

  //   async availableVenues() {
  //     const token = useCookie('token')
  //     const fetchOptions: FetchOptions<'json'> = {
  //       headers: {
  //         Authorization: `${token.value}`,
  //       },
  //     }
  //     return this.call<IAvailableVenueResponse>(
  //       'GET',
  //       `${this.RESOURCE}/get_all`,
  //       undefined,
  //       fetchOptions,
  //     )
  //   }
}

export default SubscriptionPlansModule
