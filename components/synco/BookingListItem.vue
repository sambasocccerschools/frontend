<script setup lang="ts">
import type { IFindAClassItemNew } from '~/types/synco/index'
const props = defineProps<{
  activity: string
  item: IFindAClassItemNew
  index: number
}>()

const activeCard = ref<string | null>(null)

const toggleCard = (card: string) => {
  activeCard.value = activeCard.value === card ? null : card
}
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
        <button
          class="btn btn-light rounded-circle btn-sm"
          :class="{ 'bg-success text-light': activeCard === 'subscription' }"
          @click="toggleCard('subscription')"
        >
          <Icon name="mingcute:currency-pound-2-fill" />
        </button>
        <button
          class="btn btn-light rounded-circle btn-sm"
          :class="{ 'bg-success text-light': activeCard === 'teamDates' }"
          @click="toggleCard('teamDates')"
        >
          <Icon name="material-symbols:calendar-month" />
        </button>
        <button
          class="btn btn-light rounded-circle btn-sm"
          :class="{ 'bg-success text-light': activeCard === 'locationMap' }"
          @click="toggleCard('locationMap')"
        >
          <Icon name="material-symbols:location-on" />
        </button>
        <button
          class="btn btn-light rounded-circle btn-sm"
          :class="{ 'bg-success text-light': activeCard === 'congestion' }"
          @click="toggleCard('congestion')"
        >
          <Icon name="tdesign:letters-c" />
        </button>
        <button
          class="btn btn-light rounded-circle btn-sm"
          :class="{ 'bg-success text-light': activeCard === 'parking' }"
          @click="toggleCard('parking')"
        >
          <Icon name="material-symbols:local-parking" />
        </button>
      </div>
    </div>
    <div
      class="card-body bg-muted rounded-4 d-flex align-items-center text-muted mt-3 px-4"
      style="background: #f6f6f7"
    >
      <!-- Subscription Plan Card -->
      <template v-if="activeCard === 'subscription'">
        <SyncoWeeklyClassesComponentsSubscriptionPlanCard
          @toggle-subscription-card="toggleCard('subscription')"
        />
      </template>

      <!-- Team Dates Card -->
      <template v-if="activeCard === 'teamDates'">
        <SyncoWeeklyClassesComponentsTeamDatesCardContainer
          :item="item"
          @toggle-team-dates-card="toggleCard('teamDates')"
        />
      </template>

      <!-- Congestion Card -->
      <template v-if="activeCard === 'congestion'">
        <SyncoWeeklyClassesComponentsInformationCard
          :item="item"
          :has-feature="!!item.has_congestion"
          type="congestion"
          title="Congestion Information"
          @toggle-congestion-card="toggleCard('congestion')"
        />
      </template>

      <!-- Parking Card -->
      <template v-if="activeCard === 'parking'">
        <SyncoWeeklyClassesComponentsInformationCard
          :item="item"
          :has-feature="!!item.has_parking"
          type="parking"
          title="Parking Information"
          @toggle-parking-card="toggleCard('parking')"
        />
      </template>

      <div class="border-end border-muted border-1 d-flex flex-column pe-4">
        <span class="h4">{{ item.name }}</span>
        <!-- <small>{{ item.distance }}</small> -->
      </div>
      <!-- These depend on the classes per venue -->
      <!--  -->
      <div class="d-flex flex-column">
        <div
          v-for="y in item.classes"
          :key="y.year"
          class="d-flex alig flex-row"
        >
          <div
            class="order-end border-1 d-flex flex-column justify-content-center px-4"
          >
            <span class="h5">{{ y.year }}</span>
          </div>
          <div class="d-flex flex-column w-100">
            <div
              v-for="(c, idx) in y.classes"
              :key="c.id"
              :index="idx"
              class="border-1 border-muted d-flex justify-content-between align-items-center pb-3 pt-3"
              style="min-height: 50px; gap: 0.7rem"
            >
              <div
                class="d-flex align-items-center justify-content-center gap-3"
              >
                <span class="h6 text-semibold m-0">{{ c.name }}</span>
                <span class="h6 text-semibold m-0">{{ c.days }}</span>
                <span>{{
                  `${$dayjs(c.start_time, 'HH:mm:ss').format('HH:mm a')} - ${$dayjs(c.end_time, 'HH:mm:ss').format('HH:mm a')}`
                }}</span>
                <span class="h6 text-semibold m-0">{{
                  c.indoor_outdoor_options
                }}</span>
                <span
                  class="d-flex align-items-center rounded-3 px-2"
                  :class="{
                    'bg-danger-subtle text-danger': c.capacity_spaces === 0,
                    'bg-success-subtitle text-success': c.capacity_spaces !== 0,
                  }"
                  >{{
                    c.capacity_spaces === 0
                      ? 'Fully Booked'
                      : `+${c.capacity_spaces} ${c.capacity_spaces > 2 ? 'spaces' : 'space'}`
                  }}</span
                >
              </div>
              <div class="d-flex flex-row">
                <!-- v-if="c.capacity_spaces === 0" -->
                <NuxtLink
                  :to="`/synco/weekly-classes/create/waiting-list?class_id=${c.id}&venue_id=${item.id}`"
                  class="btn btn-primary btn-sm text-light me-3"
                  ><strong>Add to Waiting List</strong></NuxtLink
                >
                <NuxtLink
                  :to="`/synco/weekly-classes/create/membership?class_id=${c.id}&venue_id=${item.id}`"
                  class="btn btn-outline-primary btn-sm me-3"
                >
                  <strong>Book a Membership</strong>
                </NuxtLink>
                <NuxtLink
                  v-if="c.is_free_trail_dates"
                  :to="`/synco/weekly-classes/create/free-trial?class_id=${c.id}&venue_id=${item.id}`"
                  class="btn btn-primary btn-sm text-light"
                  ><strong>Book a Free Trial</strong></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Location Map -->
  <template v-if="activeCard === 'locationMap'">
    <div>
      <SyncoWeeklyClassesComponentsLocationMap
        :latitude="Number(item.latitude)"
        :longitude="Number(item.longitude)"
      />
    </div>
  </template>
</template>
