<script setup lang="ts">
import { ref } from 'vue'

const regions = ref([
  { label: 'Select from drop down', value: '' },
  { label: 'North London', value: 1 },
  { label: 'East London', value: 2 },
  { label: 'South London', value: 3 },
  { label: 'West London', value: 4 },
])
</script>

<template>
  <div class="btn-group w-100">
    <button
      type="button"
      class="btn btn-lg dropdown-toggle d-flex align-items-center justify-content-between border bg-white"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
    >
      Search Venue
    </button>
    <div class="dropdown-menu w-100 border-0 shadow-lg">
      <li>
        <h6 class="dropdown-header text-dark">Choose Venue</h6>
      </li>

      <form class="px-4 py-3">
        <div class="form-group w-100 mb-3">
          <label for="Region" class="form-labelform-label-light">Region</label>
          <select id="Region" class="form-control form-control-lg">
            <option
              v-for="(channel, index) in regions"
              :value="channel.value"
              :key="index"
            >
              {{ channel.label }}
            </option>
          </select>
        </div>
        <!-- <div class="form-check d-flex align-items-center mb-2">
          <input id="region-1" type="checkbox" class="form-check-input me-2" />
          <label class="form-check-label" for="region-1"> Region One </label>
        </div>
        <div class="form-check d-flex align-items-center mb-2">
          <input id="region-2" type="checkbox" class="form-check-input me-2" />
          <label class="form-check-label" for="region-2"> Region Two </label>
        </div>
        <div class="form-check d-flex align-items-center mb-2">
          <input id="region-3" type="checkbox" class="form-check-input me-2" />
          <label class="form-check-label" for="region-3"> Region Three </label>
        </div> -->
        <div class="form-check d-flex align-items-center mb-2">
          <input
            id="marylebone"
            type="checkbox"
            class="form-check-input me-2"
          />
          <label class="form-check-label" for="marylebone"> Marylebone </label>
        </div>
        <div class="form-check d-flex align-items-center mb-2">
          <input id="chelsea" type="checkbox" class="form-check-input me-2" />
          <label class="form-check-label" for="chelsea"> Chelsea </label>
        </div>
        <div class="form-check d-flex align-items-center mb-2">
          <input
            id="kings-cross"
            type="checkbox"
            class="form-check-input me-2"
          />
          <label class="form-check-label" for="kings-cross">
            Kings Cross
          </label>
        </div>
        <!-- <button type="submit" class="btn btn-primary w-100 text-light">Next</button> -->
      </form>
    </div>
  </div>
</template>
