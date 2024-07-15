<script setup lang="ts">
import type { IParentBookingListItem } from '~/types/index'

const layout = 'parentlayout'

let selectedBooking = ref<string>('Upcoming')
let bookingList = ref<IParentBookingListItem[]>([
  {
    Date: '2024/06/10',
    Venue: 'Acton',
    Time: '10:00 - 11:00',
    Address: 'The King Fahad Academy, East Acton Lane, London W3 7HD',
    Class: '4-7 years',
    Coach: 'Ethan',
    Status: 'Pending',
  },
  {
    Date: '2024/06/15',
    Venue: 'Acton',
    Time: '10:00 - 11:00',
    Address: 'The King Fahad Academy, East Acton Lane, London W3 7HD',
    Class: '4-7 years',
    Coach: 'Ethan',
    Status: 'Success',
  },
  {
    Date: '2024/06/20',
    Venue: 'Acton',
    Time: '10:00 - 11:00',
    Address: 'The King Fahad Academy, East Acton Lane, London W3 7HD',
    Class: '4-7 years',
    Coach: 'Ethan',
    Status: 'Success',
  },
  {
    Date: '2024/07/01',
    Venue: 'Acton',
    Time: '10:00 - 11:00',
    Address: 'The King Fahad Academy, East Acton Lane, London W3 7HD',
    Class: '4-7 years',
    Coach: 'Ethan',
    Status: 'Success',
  },
  {
    Date: '2024/07/05',
    Venue: 'Acton',
    Time: '10:00 - 11:00',
    Address: 'The King Fahad Academy, East Acton Lane, London W3 7HD',
    Class: '4-7 years',
    Coach: 'Ethan',
    Status: 'Success',
  },
  {
    Date: '2024/07/10',
    Venue: 'Acton',
    Time: '10:00 - 11:00',
    Address: 'The King Fahad Academy, East Acton Lane, London W3 7HD',
    Class: '4-7 years',
    Coach: 'Ethan',
    Status: 'Success',
  },
])

let firstMonthChangeDate = '2024/07/01'

const getDayName = (date: string): string => {
  let selectedDate = new Date(date)
  return selectedDate.toLocaleDateString('en-uk', { weekday: 'short' })
}
const getDay = (date: string): string => {
  let selectedDate = new Date(date)
  return selectedDate.toLocaleDateString('en-uk', { day: 'numeric' })
}
const getNextMonth = (date: string): string => {
  let selectedDate = new Date(date)
  return date == firstMonthChangeDate
    ? selectedDate.toLocaleDateString('en-uk', { month: 'long' })
    : ''
}
</script>
<template>
  <NuxtLayout :name="layout" page-title="My Bookings">
    <div class="my-4">
      <div class="card rounded-4 border-0">
        <div class="p-3">
          <div
            class="d-flex align-items-center justify-content-between flex-row"
          >
            <div class="bg-light rounded-3 d-flex flex-row border-0 p-1">
              <button
                type="button"
                class="btn mx-2"
                :class="
                  selectedBooking == 'Upcoming' ? 'btn-primary text-light' : ''
                "
                @click="selectedBooking = 'Upcoming'"
              >
                Upcoming
              </button>
              <button
                type="button"
                class="btn mx-2"
                :class="
                  selectedBooking == 'Past' ? 'btn-primary text-light' : ''
                "
                @click="selectedBooking = 'Past'"
              >
                Past
              </button>
              <button
                type="button"
                class="btn mx-2"
                :class="
                  selectedBooking == 'Cancelled' ? 'btn-primary text-light' : ''
                "
                @click="selectedBooking = 'Cancelled'"
              >
                Cancelled
              </button>
            </div>
          </div>
        </div>
        <div class="p-3">
          <template v-for="(item, index) in bookingList">
            <div
              class="row rounded-3 mx-1 my-3"
              style="background-color: #eaf0ff"
              v-if="item.Date == firstMonthChangeDate"
            >
              <div class="col-2 p-2">
                <span
                  class="text-primary h5 d-flex align-items-center justify-content-start m-0 flex-row ps-4"
                >
                  <span class="me-2"><Icon name="ph:calendar-blank" /></span>
                  <span>{{ getNextMonth(item.Date).toUpperCase() }}</span>
                </span>
              </div>
              <div class="col-11"></div>
            </div>
            <div
              class="row rounded-4 mx-1 my-3"
              style="background-color: #f8f8f8"
            >
              <div v-if="index == 0" style="position: relative; top: -25px">
                <span
                  class="rounded-4 text-light px-3 py-1"
                  style="font-size: 0.6rem; background-color: #0dd180"
                >
                  Coming Up
                </span>
              </div>
              <div class="col-1 text-muted p-2">
                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                  style="border-right: 1px solid #e2e1e5"
                >
                  <span class="h5"
                    ><strong>{{ getDayName(item.Date) }}</strong></span
                  >
                  <span class="h3"
                    ><strong>{{ getDay(item.Date) }}</strong></span
                  >
                </div>
              </div>
              <div class="col-1 p-2">
                <div class="d-flex flex-column">
                  <span class="text-muted mb-2">Venue</span>
                  <span>{{ item.Venue }}</span>
                </div>
              </div>
              <div class="col-2 p-2">
                <div class="d-flex flex-column">
                  <span class="text-muted mb-2">Hour</span>
                  <span>{{ item.Time }}</span>
                </div>
              </div>
              <div class="col-3 p-2">
                <div class="d-flex flex-column">
                  <span class="text-muted mb-2">Address</span>
                  <span>{{ item.Address }}</span>
                </div>
              </div>
              <!-- <div class="col-1 p-2">
                <div class="d-flex flex-column">
                  <span class="text-muted mb-2">Class</span>
                  <span>{{ item.Class }}</span>
                </div>
              </div> -->
              <div class="col-2 p-2">
                <div class="d-flex flex-column">
                  <span class="text-muted mb-2">Coach</span>
                  <span
                    ><img
                      src="@/src/assets/img-avatar-jaffar.png"
                      class="me-2"
                    />
                    {{ item.Coach }}</span
                  >
                </div>
              </div>
              <div class="col-2 p-2" v-if="selectedBooking == 'Past'">
                <template v-if="item.Status == 'Pending'">
                  <button
                    type="button"
                    class="btn btn-primary text-light w-100 my-4"
                  >
                    Give Feedback
                  </button>
                </template>
                <template v-else-if="item.Status == 'Success'">
                  <button
                    type="button"
                    class="btn btn-success text-light w-100 my-4"
                  >
                    <Icon name="ph:check" />
                  </button>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.badge-warning {
  background-color: #eda60010;
  color: #eda600;
}
.badge-success {
  background-color: #43be4f20;
  color: #43be4f;
}
</style>
