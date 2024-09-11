<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { generalStore } from '~/stores'
const store = generalStore()
const { $api } = useNuxtApp()

onMounted(async () => {
  console.log('pages/synco/dashboard/index.vue')
  if (!store.user)
    await $api.profile.getProfile(null).then(async (response) => {
      console.log('response', response)
      store.setUser(response?.data)
      store.updateAuthenticated(true)
      setTimeout(() => {
        if (store.regions.length == 0) store.getRegions()
        if (store.availableVenues.length == 0)
          store.getAvailableVenues('weekly-classes')
        if (store.abilityGroups.length == 0)
          store.getAbilityGroups('weekly-classes')
        if (store.seasons.length == 0) store.getSeasons()
        if (store.relationships.length == 0) store.getRelationships()
        if (store.referralSources.length == 0) store.getReferralSource()
        if (store.leadStatus.length == 0) store.getLeadStatus()
        if (store.gender.length == 0) store.getGender()
        // if (store.medicalInformation.length == 0) store.getMedicalInformation()
        if (store.agents.length == 0) store.getAgents()
        if (store.freeTrialStatus.length == 0) store.getFreeTrialStatus()
        if (store.memberCancelStatus.length == 0) store.getMemberCancelStatus()
        if (store.memberCancelType.length == 0) store.getMemberCancelType()
        if (store.memberStatus.length == 0) store.getMemberStatus()
        // if (store.saleStatus.length == 0) store.getSaleStatus()
        if (store.subscriptionPlans.length == 0) store.getSubscriptionPlan()
      }, 200)
    })
})

defineProps<{
  pageTitle: string
}>()

const userFullName = computed(() => {
  return store.user ? `${store.user.first_name} ${store.user.last_name}` : ''
})
</script>

<template>
  <div class="d-flex bg-light">
    <SyncoNavigation />
    <div class="col vh-100 overflow-y-scroll px-3 py-5">
      <div class="container-fluid">
        <div class="row mb-4">
          <div class="col">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex flex-column">
                <h4>Hi Nilio!</h4>
                <h2>{{ pageTitle || 'Welcome back 👋' }}</h2>
              </div>

              <div class="d-flex align-items-center">
                <div class="d-flex gap-3">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Search"
                  />
                  <button class="btn btn-light rounded-5 border bg-white">
                    <Icon
                      name="ic:outline-notifications-none"
                      class="h4 text-muuted m-0"
                    />
                  </button>
                </div>
                <div
                  class="border-end border-1 border-muted d-flex flex-column align-items-end px-4 text-end"
                >
                  <span class="h5 m-0">January</span>
                  <small class="text-muted">8 Monday, 2023</small>
                </div>
                <div class="d-flex align-items-center px-4">
                  <img
                    src="@/src/assets/img-avatar-small.png"
                    alt="Avatar"
                    class="me-3"
                  />
                  <h5>
                    {{ userFullName }}
                    <Icon name="bi:chevron-down" />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/styles/synco/synco.scss" />
