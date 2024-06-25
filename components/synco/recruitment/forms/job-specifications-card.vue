<script setup lang="ts">
import { ref } from 'vue'
import type { IKeyValuePair } from '~/types'
const props = defineProps<{
  noBorder?: boolean | null
}>()
let noBorder = ref<boolean>(props.noBorder ?? false).value
let ageGroupsExperience = ref<IKeyValuePair[]>([
  { Key: '4-6', Value: '4-6' },
  { Key: '7-9', Value: '7-9' },
  { Key: '10-12', Value: '10-12' },
])
let vehicleAccess = ref<IKeyValuePair[]>([
  { Key: 'Yes', Value: 'yes' },
  { Key: 'No', Value: 'no' },
])
let qualifications = ref<IKeyValuePair[]>([
  { Key: 'NVQ 1', Value: 'NVQ 1' },
  { Key: 'NVQ 2', Value: 'NVQ 2' },
  { Key: 'NVQ 3', Value: 'NVQ 3' },
  { Key: 'NVQ 4', Value: 'NVQ 4' },
  { Key: 'NVQ 5', Value: 'NVQ 5' },
  { Key: 'NVQ 6', Value: 'NVQ 6' },
  { Key: 'NVQ 7', Value: 'NVQ 7' },
  { Key: 'NVQ 8', Value: 'NVQ 8' },
])
let yearsExperience = ref<IKeyValuePair[]>([
  { Key: '1 year', Value: '1' },
  { Key: '2 years', Value: '2' },
  { Key: '3 years', Value: '3' },
  { Key: 'More than 3 years', Value: '4+' },
  { Key: 'None', Value: 'none' },
])
let venues = ref<IKeyValuePair[]>([
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
  { Key: 'London Bridge', Value: 'London Bridge' },
])
</script>
<template>
  <div class="card rounded-4 p-4" :class="noBorder ? 'border-0' : ''">
    <slot name="internal_title"></slot>
    <div class="row my-2">
      <div class="col-6">
        <div class="d-flex flex-column">
          <label for="ageGroupsExperience" class="form-labelform-label-light">
            <strong>Age groups experience</strong>
          </label>

          <div class="d-flex flex-column">
            <div
              class="form-check form-check-inline"
              v-for="ageGroupExperience in ageGroupsExperience"
            >
              <input
                class="form-check-input"
                type="radio"
                name="ageGroupsExperience"
                :id="`ageGroupsExperience-${ageGroupExperience.Value}`"
                :value="ageGroupExperience.Value"
              />
              <label
                class="form-check-label"
                :for="`ageGroupsExperience-${ageGroupExperience.Value}`"
              >
                {{ ageGroupExperience.Key }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex flex-column">
          <label for="vehicleAccess" class="form-labelform-label-light">
            <strong>Access to your own vehicle?</strong>
          </label>

          <div class="d-flex flex-column">
            <div
              class="form-check form-check-inline"
              v-for="va in vehicleAccess"
            >
              <input
                class="form-check-input"
                type="radio"
                name="vehicleAccess"
                :id="`vehicleAccess-${va.Value}`"
                :value="va.Value"
              />
              <label
                class="form-check-label"
                :for="`vehicleAccess-${va.Value}`"
              >
                {{ va.Key }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-6">
        <div class="d-flex flex-column">
          <label for="qualifications" class="form-labelform-label-light">
            <strong>Which qualification do you have?</strong>
          </label>

          <div class="d-flex flex-column">
            <div
              class="form-check form-check-inline"
              v-for="qualification in qualifications"
            >
              <input
                class="form-check-input"
                type="radio"
                name="qualifications"
                :id="`qualifications-${qualification.Value}`"
                :value="qualification.Value"
              />
              <label
                class="form-check-label"
                :for="`qualifications-${qualification.Value}`"
              >
                {{ qualification.Key }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex flex-column">
          <label for="yearsExperience" class="form-labelform-label-light">
            <strong
              >How many years football coaching experience do you have?</strong
            >
          </label>

          <div class="d-flex flex-column">
            <div
              class="form-check form-check-inline"
              v-for="va in yearsExperience"
            >
              <input
                class="form-check-input"
                type="radio"
                name="yearsExperience"
                :id="`yearsExperience-${va.Value}`"
                :value="va.Value"
              />
              <label
                class="form-check-label"
                :for="`yearsExperience-${va.Value}`"
              >
                {{ va.Key }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row my-2">
      <div class="col-12">
        <div class="d-flex flex-column">
          <label for="venues" class="form-labelform-label-light">
            <strong>Which venues you are available for work?</strong>
          </label>

          <div class="form-group">
            <select class="form-select" aria-label="choose-venue" multiple>
              <!-- <option selected value="" disabled>Select venue</option> -->
              <option v-for="venue in venues" :value="venue.Value">
                {{ venue.Value }}
              </option>
            </select>
          </div>
          <!-- <div class="d-flex flex-column">
            <div class="form-check form-check-inline" v-for="venue in venues">
              <input
                class="form-check-input"
                type="checkbox"
                name="venues"
                :id="`venues-${venue.Value}`"
                :value="venue.Value"
              />
              <label class="form-check-label" :for="`venues-${venue.Value}`">
                {{ venue.Key }}
              </label>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <slot name="additional_rows"></slot>
  </div>
</template>
