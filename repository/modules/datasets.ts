import type { AsyncDataOptions } from '#app'
import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type {
  IGetUniqueWeeklyClassResponse,
  IGetVenueResponse,
  IGenderResponse,
  IMedicalInformationResponse,
  IRelationshipResponse,
  IReferralSourceResponse,
  ILeadStatusResponse,
  IStudentByNameResponse,
  IGuardianByNameResponse,
  IEmregencyContactByNameResponse,
  IServiceResponse,
  IRegionResponse,
  IServicePackageResponse,
  ICountryResponse,
  ICitiesResponse,
  IPaymenTypeResponse,
  IStudentCoverageResponse,
  ISubscriptionPlanResponse,
  ICampTypeResponse,
  IHolidayCampDateResponse,
  IUniqueWeeklyClassResponse,
  IMembershipCancelReasonResponse,
  IRoleResponse,
  IWaitingListStatusResponse,
  IAgentObjectResponse,
} from '~/types'
import type {
  ISeasonResponse,
  IAbilityGroupDatasetResponse,
  ITermDatasetResponse,
  ITermsResponse,
  ISessionPlanResponse,
  IVenuesResponse,
} from '~/types/synco'

class DatasetsModule extends FetchFactory {
  private RESOURCE = '/v1/datasets'

  async getVenue(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
    asyncDataOptions?: AsyncDataOptions<IGetVenueResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        params: {
          service,
        },
      }
      return this.call<IGetVenueResponse>(
        'GET',
        `${this.RESOURCE}/venue`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }
  async getUniqueWeeklyClass(
    asyncDataOptions?: AsyncDataOptions<IGetUniqueWeeklyClassResponse>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {}
      return this.call<IGetUniqueWeeklyClassResponse>(
        'GET',
        `${this.RESOURCE}/uniqueWeeklyClass`,
        undefined,
        fetchOptions,
      )
    }, asyncDataOptions)
  }

  async getSeasons() {
    return this.call<ISeasonResponse>(
      'GET',
      `${this.RESOURCE}/season`,
      undefined,
      undefined,
    )
  }

  async getGuardianByName(name: string) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        name,
      },
    }
    return this.call<IGuardianByNameResponse>(
      'GET',
      `${this.RESOURCE}/guardianByName`,
      undefined,
      fetchOptions,
    )
  }

  async getStudentByName(name: string) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        name,
      },
    }
    return this.call<IStudentByNameResponse>(
      'GET',
      `${this.RESOURCE}/studentByName`,
      undefined,
      fetchOptions,
    )
  }

  async getEmergencyContactByName(name: string) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        name,
      },
    }
    return this.call<IEmregencyContactByNameResponse>(
      'GET',
      `${this.RESOURCE}/emergencyContactByName`,
      undefined,
      fetchOptions,
    )
  }

  async getGender() {
    return this.call<IGenderResponse>(
      'GET',
      `${this.RESOURCE}/gender`,
      undefined,
      undefined,
    )
  }

  async getMedicalInformation() {
    return this.call<IMedicalInformationResponse>(
      'GET',
      `${this.RESOURCE}/medicalInformation`,
      undefined,
      undefined,
    )
  }

  async getReferralSource() {
    return this.call<IReferralSourceResponse>(
      'GET',
      `${this.RESOURCE}/referralSource`,
      undefined,
      undefined,
    )
  }

  async getLeadStatus() {
    return this.call<ILeadStatusResponse>(
      'GET',
      `${this.RESOURCE}/leadStatus`,
      undefined,
      undefined,
    )
  }

  async getRelationship() {
    return this.call<IRelationshipResponse>(
      'GET',
      `${this.RESOURCE}/relationship`,
      undefined,
      undefined,
    )
  }

  async getServices() {
    return this.call<IServiceResponse>(
      'GET',
      `${this.RESOURCE}/service`,
      undefined,
      undefined,
    )
  }

  async getRegions() {
    return this.call<IRegionResponse>(
      'GET',
      `${this.RESOURCE}/region`,
      undefined,
      undefined,
    )
  }

  async getServicePackage(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        service,
      },
    }
    return this.call<IServicePackageResponse>(
      'GET',
      `${this.RESOURCE}/servicePackage`,
      undefined,
      fetchOptions,
    )
  }

  async getCountries() {
    return this.call<ICountryResponse>(
      'GET',
      `${this.RESOURCE}/country`,
      undefined,
      undefined,
    )
  }

  async getCities(country_id: number) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        country_id,
      },
    }
    return this.call<ICitiesResponse>(
      'GET',
      `${this.RESOURCE}/city`,
      undefined,
      fetchOptions,
    )
  }

  async getPaymentTypes() {
    return this.call<IPaymenTypeResponse>(
      'GET',
      `${this.RESOURCE}/paymentType`,
      undefined,
      undefined,
    )
  }

  async getStudentCoverage() {
    return this.call<IStudentCoverageResponse>(
      'GET',
      `${this.RESOURCE}/studentCoverage`,
      undefined,
      undefined,
    )
  }

  async getSubscriptionPlan(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        service,
      },
    }
    return this.call<ISubscriptionPlanResponse>(
      'GET',
      `${this.RESOURCE}/subscriptionPlan`,
      undefined,
      fetchOptions,
    )
  }

  async getAbilityGroup(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        service,
      },
    }
    return this.call<IAbilityGroupDatasetResponse>(
      'GET',
      `${this.RESOURCE}/abilityGroup`,
      undefined,
      fetchOptions,
    )
  }

  async getTermBySeason(season: 'spring' | 'summer' | 'autumn') {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        season,
      },
    }
    return this.call<ITermDatasetResponse>(
      'GET',
      `${this.RESOURCE}/termBySeason`,
      undefined,
      fetchOptions,
    )
  }

  async getTermSessionPlanByIds(ids: string[]) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        id: ids.join(','),
      },
    }
    return this.call<ITermsResponse>(
      'GET',
      `${this.RESOURCE}/termSessionPlanByIDs`,
      undefined,
      fetchOptions,
    )
  }

  async getSessionPlanByAbilityGroup(id: number) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        id,
      },
    }
    return this.call<ISessionPlanResponse>(
      'GET',
      `${this.RESOURCE}/sessionPlanByAbilityGroup`,
      undefined,
      fetchOptions,
    )
  }

  async getCampType() {
    return this.call<ICampTypeResponse>(
      'GET',
      `${this.RESOURCE}/campType`,
      undefined,
      undefined,
    )
  }

  async getHolidayCampDates() {
    return this.call<IHolidayCampDateResponse>(
      'GET',
      `${this.RESOURCE}/holidayCampDates`,
      undefined,
      undefined,
    )
  }

  // async getUniqueWeeklyClasses() {
  //   return this.call<IUniqueWeeklyClassResponse>(
  //     'GET',
  //     `${this.RESOURCE}/uniqueWeeklyClass`,
  //     undefined,
  //     undefined,
  //   )
  // }

  async getMembershipCancelReasons() {
    return this.call<IMembershipCancelReasonResponse>(
      'GET',
      `${this.RESOURCE}/uniqueWeeklyClass`,
      undefined,
      undefined,
    )
  }

  async getRole() {
    return this.call<IRoleResponse>(
      'GET',
      `${this.RESOURCE}/role`,
      undefined,
      undefined,
    )
  }

  async getWaitingListStatus() {
    return this.call<IWaitingListStatusResponse>(
      'GET',
      `${this.RESOURCE}/waitingListStatus`,
      undefined,
      undefined,
    )
  }

  async getAllVenue() {
    return this.call<IVenuesResponse>(
      'GET',
      `${this.RESOURCE}/venue`,
      undefined,
      undefined,
    )
  }

  async getAllAgents() {
    return this.call<IAgentObjectResponse>(
      'GET',
      `${this.RESOURCE}/agent`,
      undefined,
      undefined,
    )
  }
}

export default DatasetsModule
