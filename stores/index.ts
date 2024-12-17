// stores/index.ts
import type {
  IFreeTrialStatus,
  IGenderNew,
  IMemberCancelStatus,
  IMemberCancelType,
  IMemberStatus,
  ISaleStatus,
  IUser,
} from '~/types'
import genders from '~/utils/genders.json'
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
  IFeedbackStatus,
  IFeedbackCategory,
  IFeedbackType,
} from '~/types/index'
import type {
  IAvailableVenueObject,
  ISeasonItem,
  IAbilityGroupObject,
  ISubscriptionPlan,
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
    gender: [] as IGenderNew[],
    medicalInformation: [] as IMedicalInformation[],
    agents: [] as IAgentObject[],
    freeTrialStatus: [] as IFreeTrialStatus[],
    memberCancelStatus: [] as IMemberCancelStatus[],
    memberCancelType: [] as IMemberCancelType[],
    memberStatus: [] as IMemberStatus[],
    saleStatus: [] as ISaleStatus[],
    subscriptionPlans: [] as any[],
    feedbackStatus: [] as IFeedbackStatus[],
    feedbackCategory: [] as IFeedbackCategory[],
    feedbackType: [] as IFeedbackType[],
  }),
  getters: {},
  actions: {
    updateAuthenticated(authenticated: boolean) {
      this.authenticated = authenticated
    },
    setUser(user?: IUser) {
      this.user = user
    },

    async fetchAllData() {
      try {
        const response = await useNuxtApp().$api.datasets.fetchAllData()
        const data = response?.data || []

        this.regions = data.filter((item: any) => item.type === 'REGIONS')
        this.seasons = data.filter((item: any) => item.type === 'SEASONS')
        this.services = data.filter((item: any) => item.type === 'SERVICES')
        this.relationships = data.filter(
          (item: any) => item.type === 'RELATIONSHIP_TYPES',
        )
        this.referralSources = data.filter(
          (item: any) => item.type === 'REFERRAL_SOURCES',
        )
        this.leadStatus = data.filter(
          (item: any) => item.type === 'LEAD_STATUS',
        )
        this.medicalInformation = data.filter(
          (item: any) => item.type === 'MEDICAL_INFORMATION',
        )
        this.agents = data.filter((item: any) => item.type === 'AGENTS')
        this.freeTrialStatus = data.filter(
          (item: any) => item.type === 'FREE_TRIAL_STATUS',
        )
        this.memberCancelStatus = data.filter(
          (item: any) => item.type === 'MEMBER_CANCEL_STATUS',
        )
        this.memberCancelType = data.filter(
          (item: any) => item.type === 'MEMBER_CANCEL_TYPES',
        )
        this.memberStatus = data.filter(
          (item: any) => item.type === 'MEMBER_STATUS',
        )
        this.saleStatus = data.filter(
          (item: any) => item.type === 'SALE_STATUS',
        )
        this.feedbackStatus = data.filter(
          (item: any) => item.type === 'FEEDBACK_STATUS',
        )
        this.feedbackCategory = data.filter(
          (item: any) => item.type === 'FEEDBACK_CATEGORIES',
        )
        this.feedbackType = data.filter(
          (item: any) => item.type === 'FEEDBACK_TYPES',
        )
      } catch (error) {
        console.error('Error fetching data:', error)
        useToast().error('Failed to load data.')
      }
    },

    async fetchDatasetDataByType(type: string) {
      try {
        const response =
          await useNuxtApp().$api.datasets.fetchDatasetByType(type)
        return response?.data
      } catch (error: any) {
        console.log(error)
        useToast().error(error?.messages ?? `Error fetching dataset: ${type}`)
        return []
      }
    },

    async getAvailableVenues() {
      try {
        const response = await useNuxtApp().$api.venues.availableVenues()
        console.log('response!!!!!!!!!!!!!', response)
        this.availableVenues = response?.data
      } catch (error: any) {
        this.availableVenues = []
        console.log(error)
        useToast().error(error?.messages ?? 'getAvailableVenues Error')
      }
    },

    async getAbilityGroups() {
      try {
        const response = await useNuxtApp().$api.abilityGroups.getAll()
        this.abilityGroups = response?.data
      } catch (error: any) {
        this.abilityGroups = []
        console.log(error)
        useToast().error(error?.messages ?? 'getAbilityGroups Error')
      }
    },

    async downloadExcelFile(url: string, name: string) {
      const a = document.createElement('a')
      a.href = url
      a.download = name
      a.target = '_blank'
      a.click()
    },

    async getGenders() {
      try {
        this.gender = genders
      } catch (error) {
        console.error('Error fetching genders:', error)
        useToast().error('Failed to load genders data.')
        return []
      }
    },

    async getSubsciptionPlans() {
      try {
        const response = await useNuxtApp().$api.subscriptionPlans.getAll()
        console.log('response', response)
        this.subscriptionPlans = response?.data
      } catch (error: any) {
        this.subscriptionPlans = []
        console.log(error)
        useToast().error(error?.messages ?? 'getSubsciptionPlans Error')
      }
    },
  },
  persist: true,
})
