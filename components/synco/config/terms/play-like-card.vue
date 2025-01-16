<template>
  <div
    class="card rounded-2 border p-3"
    style="background-color: #e2e1e5; position: relative"
  >
    <div class="d-flex justify-content-between flex-row">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <span class="text-muted"> Title </span>
          <span>{{ sessionPlan.title }}</span>
        </div>
        <div class="d-flex flex-column mt-2">
          <span class="text-muted"> Description </span>
          <span>{{ sessionPlan.description }}</span>
        </div>
      </div>
      <div>
        <div class="card rounded-3 bg-stadium border-0">
          <div class="row h-100 w-100">
            <div class="card-title">
              <h5>PLAY LIKE</h5>
              <h5 class="h5">{{ sessionPlan.description }}</h5>
            </div>
            <div class="d-flex justify-content-center card-img flex-row">
              <img src="@/src/assets/img-pele.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span class="text-muted">Exercises</span>
      </div>
      <div class="col-12">
        <div class="d-flex flex-row" style="overflow-y: scroll; height: 25px">
          <span class="badge badge-blue mx-1">Small-side games</span>
          <span class="badge badge-blue mx-1">Introduction (Head coach)</span>
          <span class="badge badge-blue mx-1">Warm up activity</span>
          <span class="badge badge-blue mx-1">Technical exercise</span>
          <span class="badge badge-blue mx-1">Lesson debrief</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ISessionPlanObject } from '~/types/synco/index'

const props = defineProps<{
  sessionPlan: ISessionPlanObject
}>()

const sessionPlan = ref<ISessionPlanObject>(props.sessionPlan).value
onMounted(() => {
  console.log('components/synco/config/terms/play-like-card.vue')
})
</script>

<style scoped lang="scss">
.badge.badge-blue {
  background-color: #c5d8f3;
  color: #414243;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-stadium {
  background: url('@/src/assets/bg-stadium.png') no-repeat center center;
  background-size: cover;
  width: 360px;
  height: 120px;
}
.card-title {
  position: absolute;
  padding: 15px 20px;
  z-index: 10
}
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
.card-title {
  background: rgba($color: #000000, $alpha: 0.3);
  font-family: 'Luckiest Guy', cursive;
  font-weight: 400;
  font-style: normal;
  color: white;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
}
.card-img {
  position: absolute;
  bottom: 5px;
}
</style>
