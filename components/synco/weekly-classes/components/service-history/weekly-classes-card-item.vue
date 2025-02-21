<template>
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Membership Plan</span>
    <span>{{ dataInfo.accountInfo.membership }}</span>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Students</span>
    <span>{{ dataInfo.accountInfo.students }}</span>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Venue</span>
    <span class="btn btn-primary text-light" style="width: fit-content">
      {{ dataInfo.accountInfo.venue }}
    </span>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">KGoCardless ID **</span>
    <span>XHDJDHL3314</span>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Monthly price</span>
    <span>£{{ dataInfo.accountInfo.monthlyPrice }}</span>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Date of booking</span>
    <span>{{ cleanDate(dataInfo.accountInfo.dateOfBooking) }}</span>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Progress **</span>
    <span>6/12 months</span>
    <div class="progress">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        style="width: 50%"
      ></div>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <span class="h5 text-semibold m-0">Booking Source</span>
    <span>{{ dataInfo.accountInfo.bookingSource }}</span>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  data: any
}>()

const dataInfo = ref<any>(props.data).value

const cleanDate = (date: any) => {
  if (!date) return ''

  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) return date

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(parsedDate)
}
</script>
