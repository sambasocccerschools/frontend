import type { FetchOptions } from 'ofetch'
import { $fetch } from 'ofetch'
import AuthModule from '~/repository/modules/auth'
import DatasetsModule from '~/repository/modules/datasets'
import ProfileModule from '~/repository/modules/profile'
import UsersModule from '~/repository/modules/users'

import WeeklyClassesModule from '~/repository/modules/weekly-classes'
import VenuesModule from '~/repository/modules/synco/venues'

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthModule
  weeklyClasses: WeeklyClassesModule
  datasets: DatasetsModule
  profile: ProfileModule
  users: UsersModule
  venues: VenuesModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token')
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string,
  }

  if (token) {
    fetchOptions.headers = {
      Authorization: `Bearer ${token.value}`,
    }
  }

  // create a new instance of $fetcher with custom options
  const apiFetcher = $fetch.create(fetchOptions)

  // an object containing all repositories we need to expose
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    weeklyClasses: new WeeklyClassesModule(apiFetcher),
    datasets: new DatasetsModule(apiFetcher),
    profile: new ProfileModule(apiFetcher),
    users: new UsersModule(apiFetcher),
    venues: new VenuesModule(apiFetcher),
  }
  return {
    provide: {
      api: modules,
    },
  }
})
