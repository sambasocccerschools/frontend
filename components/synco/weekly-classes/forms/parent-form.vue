<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

import type { IRelationship, IReferralSource } from '~/types/index'
import type { IGuardianCreate } from '~/types/synco/index'
const props = defineProps<{
  parent: IGuardianCreate
  noBorder?: boolean | null
}>()

const { $api } = useNuxtApp()
const toast = useToast()
let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

let parent = ref<IGuardianCreate>(props.parent)
let noBorder = ref<boolean>(props.noBorder ?? false)

const relationships = ref<IRelationship[]>()

const referralSources = ref<IReferralSource[]>()

onMounted(async () => {
  console.log('components/synco/weekly-classes/forms/parent-form.vue')
  await getRelationships()
  await getReferralSource()
})
const getRelationships = async () => {
  try {
    changeLoadingState(true)
    const response = await $api.datasets.getRelationship()
    console.log(response)
    relationships.value = response?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
    relationships.value = []
  } finally {
    changeLoadingState(false)
  }
}
const getReferralSource = async () => {
  try {
    changeLoadingState(true)
    const response = await $api.datasets.getReferralSource()
    console.log(response)
    referralSources.value = response?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
    referralSources.value = []
  } finally {
    changeLoadingState(false)
  }
}
</script>

<template>
  <slot name="external_title"></slot>
  <div class="card rounded-4 mt-4 px-3" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentFirstName" class="form-labelform-label-light"
            >First name</label
          >
          <input
            id="parentFirstName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
            v-model="parent.first_name"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentLastName" class="form-labelform-label-light"
            >Last name</label
          >
          <input
            id="parentLastName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter last name"
            v-model="parent.last_name"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentEmail" class="form-labelform-label-light"
            >Email</label
          >
          <input
            id="parentEmail"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter email address"
            v-model="parent.email"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentPhoneNumber" class="form-labelform-label-light"
            >Phone number</label
          >
          <input
            id="parentPhoneNumber"
            type="phone"
            class="form-control form-control-lg"
            placeholder="+44"
            v-model="parent.phone_number"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentRelation" class="form-labelform-label-light"
            >Relation to child</label
          >
          <select
            id="parentRelation"
            class="form-control form-control-lg"
            v-model="parent.relationship_id"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(relation, index) in relationships"
              :value="relation.id"
              :key="index"
            >
              {{ relation.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="parentMarketingChannel" class="form-labelform-label-light"
            >How did you hear about us?</label
          >
          <select
            id="parentMarketingChannel"
            class="form-control form-control-lg"
            v-model="parent.referral_source_id"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(channel, index) in referralSources"
              :value="channel.id"
              :key="index"
            >
              {{ channel.title }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
