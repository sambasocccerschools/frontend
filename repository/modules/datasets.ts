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
} from '~/types'
import type { ISeasonResponse } from '~/types/synco'

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
}

export default DatasetsModule
