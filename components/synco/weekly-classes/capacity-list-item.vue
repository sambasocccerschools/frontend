<template>
  <div class="card rounded-4 mb-4 border">
    <div class="card-body d-flex justify-content-between p-2" style="gap: 24px">
      <!-- Venue  -->
      <div
        class="card rounded-4 bg-secondary text-bg-dark d-flex align-items-center justify-content-center"
        style="width: 10%; padding: 20px"
      >
        <strong
          class="h4"
          style="
            text-align: center;
            margin: 0;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          "
          >{{ capacities?.name }}</strong
        >
      </div>
      <!-- Classes  -->
      <div class="w-100 d-flex justify-content-start py-3" style="gap: 24px">
        <template
          v-for="(classess, index) in capacities?.weekly_classes"
          :key="index"
        >
          <div
            class="d-flex flex-column justify-content-between align-items-center px-3"
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
          <div class="border-end" style="width: 1px"></div>
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

const capacities = ref<IWeeklyClassesCapacities>(props.capacities).value

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
