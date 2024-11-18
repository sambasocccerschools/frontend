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
import WeeklyClassesLeadsModule from '~/repository/modules/synco/weekly-classes-leads'
import WeeklyClassesWaitingListModule from '~/repository/modules/synco/weekly-classes-waiting-list'
import WeeklyClassesMembersModule from '~/repository/modules/synco/weekly-classes-members'
import WeeklyClassesSalesModule from '~/repository/modules/synco/weekly-classes-sales'
import WeeklyClassesFreeTrialsModule from '~/repository/modules/synco/weekly-classes-free-trials'
import WeeklyClassesCancellationModule from '~/repository/modules/synco/weekly-classes-cancellation'
import WeeklyClassesFindAClassModule from '~/repository/modules/synco/weekly-classes-find-a-class'
import AccountInformationModule from '~/repository/modules/synco/account-information'
import FeedbackModule from '~/repository/modules/synco/feedback'
import WeeklyClassesCapacitiesModule from '~/repository/modules/synco/weekly-classes-capacities'

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
  wcLeads: WeeklyClassesLeadsModule
  wcWaitingList: WeeklyClassesWaitingListModule
  wcMembers: WeeklyClassesMembersModule
  wcSales: WeeklyClassesSalesModule
  wcFreeTrials: WeeklyClassesFreeTrialsModule
  wcCancellation: WeeklyClassesCancellationModule
  wcFindAClass: WeeklyClassesFindAClassModule
  accountInformation: AccountInformationModule
  feedback: FeedbackModule
  wcCapacities: WeeklyClassesCapacitiesModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token')
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.API_BASE_URL as string,
  }

  if (token) {
    fetchOptions.headers = {
      Authorization: `${token.value}`,
      'X-Requested-With': 'XMLHttpRequest',
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
    wcLeads: new WeeklyClassesLeadsModule(apiFetcher),
    wcWaitingList: new WeeklyClassesWaitingListModule(apiFetcher),
    wcMembers: new WeeklyClassesMembersModule(apiFetcher),
    wcSales: new WeeklyClassesSalesModule(apiFetcher),
    wcFreeTrials: new WeeklyClassesFreeTrialsModule(apiFetcher),
    wcCancellation: new WeeklyClassesCancellationModule(apiFetcher),
    wcFindAClass: new WeeklyClassesFindAClassModule(apiFetcher),
    accountInformation: new AccountInformationModule(apiFetcher),
    feedback: new FeedbackModule(apiFetcher),
    wcCapacities: new WeeklyClassesCapacitiesModule(apiFetcher),
  }
  return {
    provide: {
      api: modules,
    },
  }
})
