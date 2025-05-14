<template>
  <div class="card rounded-4 mb-3 p-2 px-4">
    <div class="d-flex align-items-center justify-content-start flex-row">
      <slot name="title"></slot>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentFirstName" class="form-labelform-label-light">
            First name
          </label>
          <input
            id="studentFirstName"
            v-model="data.student.firstName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter first name"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="studentLastName" class="form-labelform-label-light">
            Last name
          </label>
          <input
            id="studentLastName"
            v-model="data.student.lastName"
            type="text"
            class="form-control form-control-lg"
            placeholder="Enter last name"
          />
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center flex-row">
      <h5 class="m-0 py-4"><strong>Booking information</strong></h5>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="startDate" class="form-labelform-label-light">
            Start Date
          </label>
          <input
            id="startDate"
            v-model="data.bookingInfo.startDate"
            type="date"
            class="form-control form-control-lg"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="venue" class="form-labelform-label-light">Venue</label>
          <input
            id="venue"
            v-model="data.bookingInfo.venue"
            type="text"
            class="form-control form-control-lg"
            readonly
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="class" class="form-labelform-label-light">Class</label>
          <select id="class" class="form-control form-control-lg">
            <option value="4-7 years">4-7 years</option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group w-100 mb-3">
          <label for="time" class="form-labelform-label-light">Time</label>
          <input
            id="time"
            v-model="data.bookingInfo.time"
            type="text"
            class="form-control form-control-lg"
            placeholder="Automatic entry"
            readonly
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  data: any
}>()
const data = ref<any>(props.data).value
</script>
