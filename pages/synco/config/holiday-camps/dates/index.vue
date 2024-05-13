<script setup lang="ts">
import { ref } from 'vue'
import type { IHolidayCampSessionPlanItem } from '~/types/index'

let exampleHolidayCamp = ref<IHolidayCampSessionPlanItem>({
  CampName: 'Summer camp 1',
  Camp: 'October Half Term',
  StartDate: 'Wednesday 12th september',
  EndDate: 'Saturday 15th september',
  Days: [
    'Wednesday 12th September',
    'Thursday 13th September',
    'Friday 14th September',
    'Saturday 15th September',
  ],
}).value
let holidayCamps = ref<IHolidayCampSessionPlanItem[]>([
  exampleHolidayCamp,
  exampleHolidayCamp,
  exampleHolidayCamp,
  exampleHolidayCamp,
  exampleHolidayCamp,
])

let showEditCard = ref<boolean>(false)

const toggleShowEditCard = () => {
  showEditCard.value = !showEditCard.value
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="container-fluid">
      <div class="d-flex justify-content-between mb-4 flex-row">
        <h4 class="">Dates & Mapping Session Plans</h4>
        <NuxtLink
          to="/synco/config/holiday-camps/dates/create"
          class="btn btn-primary text-light"
        >
          Create new camp
        </NuxtLink>
      </div>
      <div class="card rounded-4 p-4">
        <template v-for="camp in holidayCamps">
          <div class="my-2">
            <SyncoConfigHolidayCampsHolidayCampListItem
              :camp="camp"
              @toggleEdit="toggleShowEditCard"
            ></SyncoConfigHolidayCampsHolidayCampListItem>
          </div>
        </template>
      </div>
    </div>

    <template v-if="showEditCard">
      <div class="modal-backdrop fade show"></div>
      <div
        class="modal fade show centered d-block"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <SyncoConfigHolidayCampsEditCampCard
              :camp="exampleHolidayCamp"
              @toggleEdit="toggleShowEditCard"
            ></SyncoConfigHolidayCampsEditCampCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
.text-sm {
  font-size: 0.6rem;
}
</style>
