<template>
  <div class="card rounded-4 mb-4 border">
    <div class="card-body d-flex justify-content-between p-2" style="gap: 24px">
      <!-- Venue  -->
      <div
        class="card rounded-4 bg-secondary text-bg-dark d-flex align-items-center justify-content-center"
        style="min-width: 12%; padding: 20px"
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
            class="d-flex flex-column justify-content-center align-items-center px-3"
          >
            <span class="h5" style="margin-bottom: 20px">{{ classess.name }}</span>
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
        <div class="card-body total-card d-flex p-2">
          <div class="d-flex flex-column">
            <span class="h4 total-title">Total</span>
            <span class="total-details"
              >{{ capacities?.total_booked_capacity }} Booked <br />
              of {{ capacities?.total_capacity }} Spaces</span
            >
          </div>
          <div>
            <!-- SVG Chart -->
            <svg
              width="50"
              height="50"
              viewBox="0 0 36 36"
              class="circular-chart"
            >
              <path
                class="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle"
                :style="{ strokeDasharray: `${percentage}, 100` }"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" class="percentage">{{ percentage }}%</text>
            </svg>
          </div>
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

const percentage = (
  (capacities.total_booked_capacity / capacities.total_capacity) *
  100
).toFixed(0)
</script>

<style lang="scss" scoped>
.total-card {
  gap: 35px;
  justify-content: space-between;
  align-items: center;
}
.tota-title {
  color: #282829;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.total-details {
  color: #717073;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.indicator-square-lg {
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(35, 127, 234, 0.16);
  border-radius: 0.5rem;
  margin: 0 0.2rem;
}
.circular-chart {
  display: block;
  margin: 10px auto;
  width: 92px;
  height: 92px;
}
.circle-bg {
  fill: none;
  stroke: rgba(35, 127, 234, 0.16);
  stroke-width: 3.8;
}
.circle {
  fill: none;
  stroke-width: 3.8;
  stroke: #237fea;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  transform-origin: center;
}
.percentage {
  fill: #282829;
  font-size: 0.6em;
  font-weight: 600;
  text-anchor: middle;
}
@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
