// stores/index.ts

import type {
  IFreeTrialStatus,
  IMemberCancelStatus,
  IMemberCancelType,
  IMemberStatus,
  ISaleStatus,
  IUser,
} from '~/types'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toast-notification'
import type {
  IRegionItem,
  IService,
  IRelationship,
  IReferralSource,
  ILeadStatus,
  IGender,
  IMedicalInformation,
  IAgentObject,
} from '~/types/index'
import type {
  IAvailableVenueObject,
  ISeasonItem,
  IAbilityGroupObject,
} from '~/types/synco/index'

export const generalStore = defineStore('store', {
  state: () => ({
    authenticated: false,
    user: undefined as IUser | undefined,
    regions: [] as IRegionItem[],
    availableVenues: [] as IAvailableVenueObject[],
    seasons: [] as ISeasonItem[],
    abilityGroups: [] as IAbilityGroupObject[],
    services: [] as IService[],
    relationships: [] as IRelationship[],
    referralSources: [] as IReferralSource[],
    leadStatus: [] as ILeadStatus[],
    gender: [] as IGender[],
    medicalInformation: [] as IMedicalInformation[],
    agents: [] as IAgentObject[],
    freeTrialStatus: [] as IFreeTrialStatus[],
    memberCancelStatus: [] as IMemberCancelStatus[],
    memberCancelType: [] as IMemberCancelType[],
    memberStatus: [] as IMemberStatus[],
    saleStatus: [] as ISaleStatus[],
  }),
  getters: {},
  actions: {
    updateAuthenticated(authenticated: boolean) {
      this.authenticated = authenticated
    },
    setUser(user?: IUser) {
      this.user = user
    },
    async getRegions() {
      try {
        const response = await useNuxtApp().$api.datasets.getRegions()
        this.regions = response?.data
      } catch (error: any) {
        console.log(error)
        this.regions = []
        useToast().error(error?.messages ?? 'getRegions Error')
      } finally {
      }
    },
    async getAvailableVenues(
      service:
        | 'weekly-classes'
        | 'one-to-one'
        | 'holiday-camps'
        | 'birthday-parties'
        | 'club'
        | 'pathway',
    ) {
      try {
        const response = await useNuxtApp().$api.venues.availableVenues(service)
        this.availableVenues = response?.data
      } catch (error: any) {
        this.availableVenues = []
        console.log(error)
        useToast().error(error?.messages ?? 'getAvailableVenues Error')
      } finally {
      }
    },
    async getSeasons() {
      try {
        const response = await useNuxtApp().$api.datasets.getSeasons()
        this.seasons = response?.data
      } catch (error: any) {
        this.seasons = []
        console.log(error)
        useToast().error(error?.messages ?? 'getSeasons Error')
      } finally {
      }
    },
    async getAbilityGroups(
      service:
        | 'weekly-classes'
        | 'one-to-one'
        | 'holiday-camps'
        | 'birthday-parties'
        | 'club',
    ) {
      try {
        const response = await useNuxtApp().$api.abilityGroups.getAll(
          service,
          null,
        )
        this.abilityGroups = response?.data
      } catch (error: any) {
        this.abilityGroups = []
        console.log(error)
        useToast().error(error?.messages ?? 'getAbilityGroups Error')
      } finally {
      }
    },
    async getServices() {
      try {
        const response = await useNuxtApp().$api.datasets.getServices()
        this.services = response?.data
      } catch (error: any) {
        this.services = []
        console.log(error)
        useToast().error(error?.messages ?? 'getServices Error')
      } finally {
      }
    },
    async getRelationships() {
      try {
        const response = await useNuxtApp().$api.datasets.getRelationship()
        this.relationships = response?.data
      } catch (error: any) {
        this.relationships = []
        console.log(error)
        useToast().error(error?.messages ?? 'getRelationships Error')
      } finally {
      }
    },
    async getReferralSource() {
      try {
        const response = await useNuxtApp().$api.datasets.getReferralSource()
        this.referralSources = response?.data
      } catch (error: any) {
        this.referralSources = []
        console.log(error)
        useToast().error(error?.messages ?? 'getReferralSource Error')
      } finally {
      }
    },
    async getLeadStatus() {
      try {
        const response = await useNuxtApp().$api.datasets.getLeadStatus()
        this.leadStatus = response?.data
      } catch (error: any) {
        this.leadStatus = []
        console.log(error)
        useToast().error(error?.messages ?? 'getLeadStatus Error')
      } finally {
      }
    },

    async getGender() {
      try {
        const response = await useNuxtApp().$api.datasets.getGender()
        this.gender = response?.data
      } catch (error: any) {
        this.gender = []
        console.log(error)
        useToast().error(error?.messages ?? 'getGender Error')
      } finally {
      }
    },
    async getMedicalInformation() {
      try {
        const response =
          await useNuxtApp().$api.datasets.getMedicalInformation()
        this.medicalInformation = response?.data
      } catch (error: any) {
        this.medicalInformation = []
        console.log(error)
        useToast().error(error?.messages ?? 'getMedicalInformation Error')
      } finally {
      }
    },
    async getAgents() {
      try {
        const response = await useNuxtApp().$api.datasets.getAllAgents()
        this.agents = response?.data
      } catch (error: any) {
        this.agents = []
        console.log(error)
        useToast().error(error?.messages ?? 'getAgents Error')
      } finally {
      }
    },
    async downloadExcelFile(url: string, name: string) {
      let a = document.createElement('a')
      a.href = url
      a.download = name
      a.click()
    },
    async getFreeTrialStatus() {
      try {
        const response = await useNuxtApp().$api.datasets.getFreeTrialStatus()
        this.freeTrialStatus = response?.data
      } catch (error: any) {
        this.freeTrialStatus = []
        console.log(error)
        useToast().error(error?.messages ?? 'getFreeTrialStatus Error')
      } finally {
      }
    },
    async getMemberCancelStatus() {
      try {
        const response =
          await useNuxtApp().$api.datasets.getMemberCancelStatus()
        this.memberCancelStatus = response?.data
      } catch (error: any) {
        this.memberCancelStatus = []
        console.log(error)
        useToast().error(error?.messages ?? 'getMemberCancelStatus Error')
      } finally {
      }
    },
    async getMemberCancelType() {
      try {
        const response = await useNuxtApp().$api.datasets.getMemberCancelType()
        this.memberCancelType = response?.data
      } catch (error: any) {
        this.memberCancelType = []
        console.log(error)
        useToast().error(error?.messages ?? 'getMemberCancelType Error')
      } finally {
      }
    },
    async getMemberStatus() {
      try {
        const response = await useNuxtApp().$api.datasets.getMemberStatus()
        this.memberStatus = response?.data
      } catch (error: any) {
        this.memberStatus = []
        console.log(error)
        useToast().error(error?.messages ?? 'getMemberStatus Error')
      } finally {
      }
    },
    async getSaleStatus() {
      try {
        const response = await useNuxtApp().$api.datasets.getSaleStatus()
        this.saleStatus = response?.data
      } catch (error: any) {
        this.saleStatus = []
        console.log(error)
        useToast().error(error?.messages ?? 'getSaleStatus Error')
      } finally {
      }
    },
  },
  persist: true,
})
