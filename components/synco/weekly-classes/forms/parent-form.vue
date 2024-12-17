<script setup lang="ts">
import { ref } from 'vue'
import type { IGuardianCreate } from '~/types/synco/index'
const props = defineProps<{
  parent: IGuardianCreate
  noBorder?: boolean | null
}>()
import { generalStore } from '~/stores'
const store = generalStore()

const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

const parent = ref<IGuardianCreate>(props.parent)
const noBorder = ref<boolean>(props.noBorder ?? false)

const relationships = store.relationships
const referralSources = store.referralSources

onMounted(async () => {
  console.log('components/synco/weekly-classes/forms/parent-form.vue')
  await store.fetchAllData()
})
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
            v-model="parent.first_name"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
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
            v-model="parent.last_name"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter last name"
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
            v-model="parent.email"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter email address"
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
            v-model="parent.phone_number"
            type="phone"
            class="form-control form-control-lg"
            placeholder="+44"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div v-if="relationships.length" class="form-group w-100 mb-3">
          <label for="parentRelation" class="form-labelform-label-light"
            >Relation to child</label
          >
          <select
            id="parentRelation"
            v-model="parent.relationship_code"
            class="form-control form-control-lg"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(relation, index) in relationships"
              :key="index"
              :value="relation.code"
            >
              {{ relation.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div v-if="referralSources.length" class="form-group w-100 mb-3">
          <label for="parentMarketingChannel" class="form-labelform-label-light"
            >How did you hear about us?</label
          >
          <select
            id="parentMarketingChannel"
            v-model="parent.referral_source_code"
            class="form-control form-control-lg"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(channel, index) in referralSources"
              :key="index"
              :value="channel.code"
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
