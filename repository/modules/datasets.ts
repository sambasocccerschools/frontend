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
  // ISubscriptionPlanResponse,
  ICampTypeResponse,
  IHolidayCampDateResponse,
  IUniqueWeeklyClassResponse,
  IMembershipCancelReasonResponse,
  IRoleResponse,
  IWaitingListStatusResponse,
  IAgentObjectResponse,
  IFreeTrialStatusResponse,
  IGuardianAndStudentResponse,
  IMemberCancelStatusResponse,
  IMemberStatusResponse,
  IMemberCancelTypeResponse,
  IReferralSourceFilterResponse,
  ISaleStatusResponse,
  IDatasetEnrolledWeeklyClassesResponse,
  IFeedbackTypeResponse,
  IFeedbackCategoryResponse,
  IFeedbackStatusResponse,
} from '~/types'
import type {
  ISeasonResponse,
  IAbilityGroupDatasetResponse,
  ITermDatasetResponse,
  ITermsResponse,
  ISessionPlanResponse,
  IVenuesResponse,
  ISubscriptionPlanResponse,
} from '~/types/synco'

class DatasetsModule extends FetchFactory {
  private RESOURCE = '/v1/datasets'

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

  async getAllAgents() {
    return this.call<IAgentObjectResponse>(
      'GET',
      `${this.RESOURCE}/agent`,
      undefined,
      undefined,
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

  async getCountries() {
    return this.call<ICountryResponse>(
      'GET',
      `${this.RESOURCE}/country`,
      undefined,
      undefined,
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

  async getFamily(id: string) {
    return this.call<IEmregencyContactByNameResponse>(
      'GET',
      `${this.RESOURCE}/family/${id}`,
      undefined,
      undefined,
    )
  }

  async getFreeTrialStatus() {
    return this.call<IFreeTrialStatusResponse>(
      'GET',
      `${this.RESOURCE}/freeTrialStatus`,
      undefined,
      undefined,
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

  async getGuardianAndStudent() {
    return this.call<IGuardianAndStudentResponse>(
      'GET',
      `${this.RESOURCE}/guardianAndStudent`,
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

  async getHolidayCampDates() {
    return this.call<IHolidayCampDateResponse>(
      'GET',
      `${this.RESOURCE}/holidayCampDates`,
      undefined,
      undefined,
    )
  }

  async getHolidayCampDatesSessionPlanById(id: string) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        id,
      },
    }
    return this.call<any>(
      'GET',
      `${this.RESOURCE}/holidayCampDateSessionPlanByID`,
      undefined,
      fetchOptions,
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

  async getMedicalInformation() {
    return this.call<IMedicalInformationResponse>(
      'GET',
      `${this.RESOURCE}/medicalInformation`,
      undefined,
      undefined,
    )
  }

  async getMemberCancelStatus() {
    return this.call<IMemberCancelStatusResponse>(
      'GET',
      `${this.RESOURCE}/memberCancelStatus`,
      undefined,
      undefined,
    )
  }

  async getMemberCancelType() {
    return this.call<IMemberCancelTypeResponse>(
      'GET',
      `${this.RESOURCE}/membershipCancelType`,
      undefined,
      undefined,
    )
  }

  async getMemberStatus() {
    return this.call<IMemberStatusResponse>(
      'GET',
      `${this.RESOURCE}/memberStatus`,
      undefined,
      undefined,
    )
  }

  async getMembershipCancelReasons() {
    return this.call<IMembershipCancelReasonResponse>(
      'GET',
      `${this.RESOURCE}/uniqueWeeklyClass`,
      undefined,
      undefined,
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

  async getReferralSource() {
    return this.call<IReferralSourceResponse>(
      'GET',
      `${this.RESOURCE}/referralSource`,
      undefined,
      undefined,
    )
  }

  async getReferralSourceFilter() {
    return this.call<IReferralSourceFilterResponse>(
      'GET',
      `${this.RESOURCE}/referralSourceFilter`,
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

  async getRelationship() {
    return this.call<IRelationshipResponse>(
      'GET',
      `${this.RESOURCE}/relationship`,
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

  async getSaleStatus() {
    return this.call<ISaleStatusResponse>(
      'GET',
      `${this.RESOURCE}/saleStatus`,
      undefined,
      undefined,
    )
  }

  async getSeasons() {
    return this.call<ISeasonResponse>(
      'GET',
      `${this.RESOURCE}/season`,
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

  async getSubscriptionPlan(
    service:
      | 'weekly-classes'
      | 'one-to-one'
      | 'holiday-camps'
      | 'birthday-parties'
      | 'club',
    venue_id: string | null,
  ) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        service,
      },
    }
    if (!!venue_id && !!fetchOptions.params) {
      fetchOptions.params.venue_id = venue_id
    }
    return this.call<ISubscriptionPlanResponse>(
      'GET',
      `${this.RESOURCE}/subscriptionPlan`,
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

  async getStudentCoverage() {
    return this.call<IStudentCoverageResponse>(
      'GET',
      `${this.RESOURCE}/studentCoverage`,
      undefined,
      undefined,
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
          include_classes: true,
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

  async getAllVenue() {
    return this.call<IVenuesResponse>(
      'GET',
      `${this.RESOURCE}/venue`,
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

  async getFeedbackStatus() {
    return this.call<IFeedbackStatusResponse>(
      'GET',
      `${this.RESOURCE}/feedbackStatus`,
      undefined,
      undefined,
    )
  }

  async getFeedbackCategory() {
    return this.call<IFeedbackCategoryResponse>(
      'GET',
      `${this.RESOURCE}/feedbackCategory`,
      undefined,
      undefined,
    )
  }

  async getFeedbackType() {
    return this.call<IFeedbackTypeResponse>(
      'GET',
      `${this.RESOURCE}/feedbackType`,
      undefined,
      undefined,
    )
  }

  async getEnrolledWeeklyClass(familyId: number, withCapacity: boolean) {
    const fetchOptions: FetchOptions<'json'> = {
      params: {
        family_id: familyId,
        with_capacity: withCapacity,
      },
    }
    return this.call<IDatasetEnrolledWeeklyClassesResponse>(
      'GET',
      `${this.RESOURCE}/enrolledWeeklyClass`,
      undefined,
      fetchOptions,
    )
  }
}

export default DatasetsModule
