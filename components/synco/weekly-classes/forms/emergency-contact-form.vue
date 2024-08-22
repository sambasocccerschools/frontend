<script setup lang="ts">
import { ref } from 'vue'
import type { IEmregencyContactCreate } from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const props = defineProps<{
  emergencyContact: IEmregencyContactCreate
  noBorder?: boolean | null
}>()

let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

let emergencyContact = ref<IEmregencyContactCreate>(props.emergencyContact)
let noBorder = ref<boolean>(props.noBorder ?? false)

const relationships = store.relationships

onMounted(async () => {
  console.log(
    'components/synco/weekly-classes/forms/emergency-contact-form.vue',
  )

  if (store.relationships.length == 0) await store.getRelationships()
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
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
            v-model="emergencyContact.first_name"
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
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter last name"
            v-model="emergencyContact.last_name"
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
            type="phone"
            class="form-control form-control-lg"
            placeholder="+44"
            v-model="emergencyContact.phone_number"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3" v-if="relationships.length > 0">
          <label
            for="emergencyContactRelation"
            class="form-labelform-label-light"
            >Relation to child</label
          >
          <select
            id="emergencyContactRelation"
            class="form-control form-control-lg"
            v-model="emergencyContact.relationship_id"
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
    </div>
    <slot name="additional_rows"></slot>
  </div>
  <slot name="footer"></slot>
</template>
