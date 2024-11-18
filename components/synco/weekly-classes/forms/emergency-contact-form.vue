<script setup lang="ts">
import { ref } from 'vue'
import type { IEmregencyContactCreate } from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const props = defineProps<{
  emergencyContact: IEmregencyContactCreate
  noBorder?: boolean | null
}>()

const isLoading = ref<boolean>(false)
const blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

const emergencyContact = ref<IEmregencyContactCreate>(props.emergencyContact)
const noBorder = ref<boolean>(props.noBorder ?? false)

const relationships = store.relationships

onMounted(async () => {
  console.log(
    'components/synco/weekly-classes/forms/emergency-contact-form.vue',
  )
  if (!store.relationships.length) {
    await store.fetchDatasetDataByType('RELATIONSHIP_TYPES')
  }
})
</script>

<template>
  <slot name="external_title"></slot>
  <div class="card rounded-4 mt-4 px-3" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label
            for="emergencyContactFirstName"
            class="form-labelform-label-light"
            >First name</label
          >
          <input
            id="emergencyContactFirstName"
            v-model="emergencyContact.first_name"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label
            for="emergencyContactLastName"
            class="form-labelform-label-light"
            >Last name</label
          >
          <input
            id="emergencyContactLastName"
            v-model="emergencyContact.last_name"
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
          <label
            for="emergencyContactPhoneNumber"
            class="form-labelform-label-light"
            >Phone number</label
          >
          <input
            id="emergencyContactPhoneNumber"
            v-model="emergencyContact.phone_number"
            type="phone"
            class="form-control form-control-lg"
            placeholder="+44"
          />
        </div>
      </div>
      <div class="col-6">
        <div v-if="relationships.length > 0" class="form-group w-100 mb-3">
          <label
            for="emergencyContactRelation"
            class="form-labelform-label-light"
            >Relation to child</label
          >
          <select
            id="emergencyContactRelation"
            v-model="emergencyContact.relationship_id"
            class="form-control form-control-lg"
          >
            <option :value="0">Select option</option>
            <option
              v-for="(relation, index) in relationships"
              :key="index"
              :value="relation.id"
            >
              {{ relation.title }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
