<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

import type { IVenue } from '~/types/index'
const props = defineProps<{
  venues?: IVenue[]
}>()
const days = ref([
  { name: 'Monday', value: 'Monday' },
  { name: 'Tuesday', value: 'Tuesday' },
  { name: 'Wednesday', value: 'Wednesday' },
  { name: 'Thursday', value: 'Thursday' },
  { name: 'Friday', value: 'Friday' },
  { name: 'Saturday', value: 'Saturday' },
  { name: 'Sunday', value: 'Sunday' },
])
const searchVenue = ref('')
const searchPostcode = ref('')
const selectedVenues = ref<string[]>([])
const selectedDays = ref([])
const selectedAges = ref([])
const emit = defineEmits(['filtered'])

const filteredItems = computed(() => {
  return {
    venue: searchVenue.value,
    postcode: searchPostcode.value,
    venues: selectedVenues.value,
    days: selectedDays.value,
    ages: selectedAges.value,
  }
})

const toggleAll = (isChecked: boolean) => {
  if (isChecked) {
    selectedVenues.value = (props.venues || []).map((venue) => venue.id)
    selectedVenues.value.push('all')
  } else {
    selectedVenues.value = []
  }
}

watchEffect(() => {
  emit('filtered', filteredItems.value)
})
</script>

<template>
  <!-- Filter By Date  -->
  <div class="card">
    <div class="card-header d-flex flex-column">
      <h5 class="card-title h4 mb-4">Search by filter</h5>
      <!-- <button class="btn btn-primary btn-sm text-light shadow-sm">Apply Filter</button> -->
      <div class="input-group mb-3">
        <span id="search-addon" class="input-group-text">
          <Icon name="ic:baseline-search" />
        </span>
        <input
          v-model="searchVenue"
          type="text"
          class="form-control"
          placeholder="Search Venue"
          aria-label="Search Venue"
          aria-describedby="search-addon"
        />
      </div>
      <div class="input-group mb-3">
        <span id="postcode-addon" class="input-group-text">
          <Icon name="ic:baseline-search" />
        </span>
        <input
          v-model="searchPostcode"
          type="text"
          class="form-control"
          placeholder="Search by postcode"
          aria-label="Search by postcode"
          aria-describedby="postcode-addon"
        />
      </div>
    </div>
    <div class="card-body">
      <!-- Venues  -->
      <div class="form-group mb-4">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Venues</label
        >
        <div class="form-check mb-3">
          <input
            id="all_venues"
            v-model="selectedVenues"
            type="checkbox"
            class="form-check-input"
            value="all"
            @change="toggleAll($event.target?.checked)"
          />
          <label class="form-check-label" for="all_venues">All venues</label>
        </div>
        <div v-for="venue in venues" :key="venue.id" class="form-check mb-3">
          <input
            :id="venue.id"
            v-model="selectedVenues"
            type="checkbox"
            class="form-check-input"
            :value="venue.id"
          />
          <label class="form-check-label" :for="venue.id">{{
            venue.name
          }}</label>
        </div>
        <!-- <button class="btn btn-link px-0">Show more</button> -->
      </div>

      <!-- Days -->
      <div class="form-group mb-4">
        <label
          for="days"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Days</label
        >
        <div v-for="day in days" :key="day.value" class="form-check mb-3">
          <input
            :id="day.value"
            v-model="selectedDays"
            :value="day.value"
            type="checkbox"
            class="form-check-input"
          />
          <label class="form-check-label" :for="day.value">{{
            day.name
          }}</label>
        </div>
      </div>

      <!-- Students Years -->
      <div class="form-group mb-3">
        <label
          for="venue"
          class="form-label border-bottom border-1 d-flex border-secondary-subtle mb-3 pb-2"
          >Student Age</label
        >
        <div v-for="age in ['4-7', '8-12']" :key="age" class="form-check mb-3">
          <input
            :id="age"
            v-model="selectedAges"
            type="checkbox"
            class="form-check-input"
          />
          <label class="form-check-label" :for="age">{{ age }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
