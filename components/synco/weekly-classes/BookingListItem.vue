<script setup lang="ts">
import type { IWeeklyClassesVenueObject } from '~/types/synco'

const props = defineProps<{
  item: IWeeklyClassesVenueObject
}>()

const item = ref<IWeeklyClassesVenueObject>(props.item)

onMounted(async () => {
  console.log('components/synco/weekly-classes/BookingListItem.vue')
  console.log(item.value)
  // if (store.leadStatus.length == 0) await store.getLeadStatus()
})
</script>

<template>
  <!-- Weekly Class -->
  <div class="card rounded-4 mb-3 border p-2">
    <div
      class="rounded-4 bg-secondary text-light d-flex align-items-center justify-content-between px-4 py-3"
    >
      <div>
        <Icon name="material-symbols:location-on" class="h1" />{{
          item.address
        }}
      </div>
      <div class="d-flex gap-3">
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="mingcute:currency-pound-2-fill" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="material-symbols:calendar-month" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="material-symbols:location-on" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="tdesign:letters-c" />
        </button>
        <button class="btn btn-light rounded-circle btn-sm">
          <Icon name="material-symbols:local-parking" />
        </button>
      </div>
    </div>
    <div
      class="card-body bg-muted rounded-4 d-flex align-items-start text-muted mt-3 px-4"
      style="background: #f6f6f7"
    >
      <div class="border-end border-muted border-1 d-flex flex-column pe-4">
        <span class="h4">{{ item.name }}</span>
        <small>{{ item.distance }}</small>
      </div>
      <!-- <div class="order-end border-muted border-1 d-flex flex-column px-4">
        <span class="h5">{{item.days}}</span>
        <small>{{item.}}</small>
      </div> -->
      <div class="w-100">
        <div
          v-for="(c, idx) in item.classesByYear"
          :key="c.year"
          :index="idx"
          class="border-bottom border-1 border-muted d-flex justify-content-between align-items-center pb-2"
        >
          <div class="order-end border-muted border-1 d-flex flex-column px-4">
            <span class="h5">{{ c.year }}</span>
          </div>
          <div class="d-flex flex-column">
            <template v-for="(classes, idex) in c.classes" :key="idex">
              <div
                class="d-flex align-items-center justify-content-center gap-3"
              >
                <span class="h6 text-semibold m-0">{{ classes.name }}</span>
                <!-- <span class="">{{ classes.indoor_outdoor_options }}</span> -->
                <span>
                  <Icon name="ph:clock-fill" />
                  {{ $dayjs(classes.start_time, 'HH:mm:ss').format('hh:mm a') }}
                  -
                  {{ $dayjs(classes.end_time, 'HH:mm:ss').format('hh:mm a') }}
                </span>
                <span
                  class="d-flex align-items-center rounded-3 px-2"
                  :class="{
                    'bg-danger-subtle text-danger': classes.capacity === 0,
                    'bg-success-subtitle text-success': classes.capacity !== 0,
                  }"
                  >{{
                    classes.capacity === 0
                      ? 'Fully Booked'
                      : `+${classes.capacity} ${classes.capacity > 2 ? 'spaces' : 'space'}`
                  }}</span
                >
              </div>
              <div class="">
                <template v-if="classes.capacity === 0">
                  <NuxtLink
                    to="/synco/weekly-classes/create/waiting-list"
                    class="btn btn-primary btn-sm text-light me-3"
                    ><strong>Add to Waiting List</strong></NuxtLink
                  >
                </template>
                <template v-if="classes.capacity > 0">
                  <NuxtLink
                    to="/synco/weekly-classes/create/membership"
                    class="btn btn-outline-primary btn-sm me-3"
                  >
                    <strong>Book a Membership</strong>
                  </NuxtLink>
                  <NuxtLink
                    to="/synco/weekly-classes/create/free-trial"
                    class="btn btn-primary btn-sm text-light"
                    ><strong>Book a Free Trial</strong></NuxtLink
                  >
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
