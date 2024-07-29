import type { FetchOptions } from 'ofetch'
import { $fetch } from 'ofetch'
import AuthModule from '~/repository/modules/auth'
import DatasetsModule from '~/repository/modules/datasets'
import ProfileModule from '~/repository/modules/profile'
import UsersModule from '~/repository/modules/users'

import WeeklyClassesModule from '~/repository/modules/weekly-classes'
import VenuesModule from '~/repository/modules/synco/venues'
import ClassesModule from '~/repository/modules/synco/classes'
import TermsModule from '~/repository/modules/synco/terms'
import SessionPlansModule from '~/repository/modules/synco/session-plans'
import AbilityGroupsModule from '~/repository/modules/synco/ability-groups'

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthModule
  weeklyClasses: WeeklyClassesModule
  datasets: DatasetsModule
  profile: ProfileModule
  users: UsersModule
  venues: VenuesModule
  classes: ClassesModule
  terms: TermsModule
  sessionPlans: SessionPlansModule
  abilityGroups: AbilityGroupsModule
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
    classes: new ClassesModule(apiFetcher),
    terms: new TermsModule(apiFetcher),
    sessionPlans: new SessionPlansModule(apiFetcher),
    abilityGroups: new AbilityGroupsModule(apiFetcher),
  }
  return {
    provide: {
      api: modules,
    },
  }
})
