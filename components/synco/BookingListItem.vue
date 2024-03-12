<script setup lang="ts">
import type { IWeeklyClass } from '~/types'
defineProps<{
  activity: string
  item: IWeeklyClass
  index: number
}>()
</script>

<template>
  <!-- Weekly Class -->
  <div
    v-if="activity === 'weekly-class'"
    class="card rounded-4 mb-3 border p-2"
  >
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
      <div class="order-end border-muted border-1 d-flex flex-column px-4">
        <span class="h5">Saturday</span>
        <small>Outdoor</small>
      </div>
      <div class="w-100">
        <!-- These depend on the classes per venue -->
        <!--  -->
        <div
          v-for="(c, idx) in item.classes[0]?.classes"
          :key="c.id"
          :index="idx"
          class="border-bottom border-1 border-muted d-flex justify-content-between align-items-center pb-2"
        >
          <div class="d-flex align-items-center justify-content-center gap-3">
            <span class="h6 text-semibold m-0">Class {{ idx + 1 }}</span>
            <span class="">4-7 years</span>
            <span>{{
              `${$dayjs(c.start_time, 'HH:mm:ss').format('HH:mm a')} - ${$dayjs(c.end_time, 'HH:mm:ss').format('HH:mm a')}`
            }}</span>
            <span
              class="d-flex align-items-center rounded-3 px-2"
              :class="{
                'bg-danger-subtle text-danger': c.capacity === 0,
                'bg-success-subtitle text-success': c.capacity !== 0,
              }"
              >{{
                c.capacity === 0
                  ? 'Fully Booked'
                  : `+${c.capacity} ${c.capacity > 2 ? 'spaces' : 'space'}`
              }}</span
            >
          </div>
          <div class="">
            <NuxtLink
              to="/synco/weekly-classes/create/waiting-list"
              class="btn btn-primary btn-sm text-light me-3"
              ><strong>Add to Waiting List</strong></NuxtLink
            >
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
