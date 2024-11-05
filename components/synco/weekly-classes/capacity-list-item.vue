<template>
  <div class="card rounded-4 mb-4 border">
    <div class="card-body d-flex justify-content-between p-2">
      <!-- Venue  -->
      <div
        class="card rounded-4 bg-secondary text-bg-dark d-flex align-items-center justify-content-center"
        style="min-width: 7rem"
      >
        <strong class="h4">{{ capacities?.name }}</strong>
      </div>
      <!-- Classes  -->
      <div class="w-100 d-flex justify-content-center py-3">
        <!--  -->
        <template v-for="classess in capacities?.weekly_classes">
          <div
            class="d-flex flex-column justify-content-between align-items-center border-end px-3"
          >
            <span class="h5">{{ classess.name }}</span>
            <div class="d-flex">
              <span
                class="indicator-square indicator-square-lg bg-light border"
                >{{ classess?.total_capacity }}</span
              >
              <span
                class="indicator-square indicator-square-lg bg-primary text-light"
                >{{ classess?.member_capacity }}</span
              >
              <span
                class="indicator-square indicator-square-lg bg-warning text-light"
                >{{ classess?.free_trial_capacity }}</span
              >
              <span
                class="indicator-square indicator-square-lg bg-success text-light"
                >{{ classess?.remaining_capacity }}</span
              >
            </div>
          </div>
        </template>
      </div>

      <!-- Total  -->
      <div class="card bg-light rounded-4 col-auto border">
        <div class="card-body d-flex p-4">
          <div class="d-flex flex-column">
            <span class="h4">Total</span>
            <span
              >{{ capacities?.booked_capacity }} Booked <br />
              of {{ capacities?.total_capacity }} Spaces</span
            >
          </div>
          <div>CHART</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IWeeklyClassesCapacities } from '~/types/synco/index'

const props = defineProps<{
  capacities: IWeeklyClassesCapacities
}>()

let capacities = ref<IWeeklyClassesCapacities>(props.capacities).value

onMounted(async () => {
  console.log('components/synco/weekly-classes/capacity-list-item.vue')
})
</script>

<style lang="scss" scoped>
.indicator-square-lg {
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  margin: 0 0.2rem;
}
</style>
