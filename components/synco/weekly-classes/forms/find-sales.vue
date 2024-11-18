<template>
  <!-- Search Now  -->
  <div class="card mb-4">
    <div class="card-header d-flex flex-column">
      <h5 class="card-title h2 my-3">Search now</h5>
      <button
        class="btn btn-primary btn-sm text-light shadow-sm"
        @click="applyFilter"
      >
        <Icon name="octicon:settings" class="me-2" />Apply Filter
      </button>
    </div>
    <div class="card-body">
      <div class="form-group mb-3">
        <label for="search-student" class="form-label">Search Student</label>
        <div class="input-group mb-3">
          <span id="search-student" class="input-group-text">
            <Icon name="ic:baseline-search" />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search by student name"
            aria-label="Search by student name"
            aria-describedby="search-addon"
            v-model="student"
          />
        </div>
      </div>
      <div class="form-group mb-3">
        <label for="choose-venue" class="form-label">Venue</label>
        <select
          id="choose-venue"
          class="form-control form-control-lg"
          v-model="venue_id"
        >
          <option value="0">All</option>
          <option v-for="venue in availableVenues" :value="venue.id">
            {{ venue.name }}
          </option>
        </select>
      </div>
      <div class="form-group mb-3">
        <label for="lead_status" class="form-label">Choose status</label>
        <div class="container">
          <div class="row row-cols-2">
            <select
              id="lead_status"
              class="form-control form-control-lg"
              v-model="status_id"
            >
              <option value="0">All</option>
              <option v-for="status in saleStatus" :value="status.id">
                {{ status.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter By Date  -->
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title">Filter by date</h5>
    </div>
    <div class="card-body d-flex flex-row">
      <div class="form-group w-50 mb-3 me-2">
        <label for="start-date" class="form-label">Start date</label>
        <input type="date" class="form-control" v-model="startDate" />
      </div>
      <div class="form-group w-50 mb-3 ms-2">
        <label for="end-date" class="form-label">End date</label>
        <input type="date" class="form-control" v-model="endDate" />
      </div>
      <!-- Calendar Selector  -->
      <!-- <SyncoFilterByCalendar /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IWeeklyClassesLeadFilterObject } from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

let isLoading = ref<boolean>(false)
let blockButtons = ref<boolean>(false)
const changeLoadingState = (state: boolean) => {
  isLoading.value = state
  blockButtons.value = state
}

const saleStatus = store.saleStatus
const availableVenues = store.availableVenues

let student = ref<string>('')
let venue_id = ref<number>(0)
let status_id = ref<number>(0)
let startDate = ref<string>('')
let endDate = ref<string>('')

onMounted(async () => {
  console.log('components/synco/weekly-classes/forms/parent-form.vue')
  if (!store.saleStatus.length) {
    await store.fetchDatasetDataByType('SALE-STATUS')
  }
  if (!store.availableVenues.length) {
    await store.getAvailableVenues('weekly-classes')
  }
})

const emit = defineEmits(['applyFilter'])

const applyFilter = () => {
  emit('applyFilter', {
    student: student.value,
    venue_id: venue_id.value,
    member_status_id: status_id.value,
    start_date: startDate.value,
    end_date: endDate.value,
  })
}
</script>
