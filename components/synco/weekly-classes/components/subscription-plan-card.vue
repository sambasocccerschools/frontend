<template>
  <!-- Filter By Date  -->
  <div
    class="dropdown-menu dropdown-menu-right card rounded-4 position-absolute shadow-lg"
    style="width: 840px; right: -10px; top: 45px; position: absolute"
  >
    <div class="card-header d-flex justify-content-between">
      <h5 class="card-title"><strong>Subscription Plan</strong></h5>
      <button
        class="btn btn-transparent p-0"
        @click="emit('toggleSubscriptionCard')"
      >
        <Icon name="ph:x" class="me-2" />
      </button>
    </div>
    <div class="px-3">
      <hr />
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center flex-column">
        <div class="btn-group border p-1" role="group">
          <button
            type="button"
            class="btn"
            :class="
              students == 1 ? 'btn-primary text-light' : 'btn-transparent'
            "
            @click="changeStudents(1)"
          >
            1 Student
          </button>
          <button
            type="button"
            class="btn"
            :class="
              students == 2 ? 'btn-primary text-light' : 'btn-transparent'
            "
            @click="changeStudents(2)"
          >
            2 Students
          </button>
          <button
            type="button"
            class="btn"
            :class="
              students == 3 ? 'btn-primary text-light' : 'btn-transparent'
            "
            @click="changeStudents(3)"
          >
            3 Students
          </button>
        </div>
        <div class="d-flex justify-content-between w-100 mt-4 flex-row">
          <SyncoWeeklyClassesComponentsSubscriptionCard
            plan-name="12 Month Plan"
            :plan-price="39.99"
            :benefits="[
              '36 Lessons at one venue',
              '15% off SSS Uniform',
              'FREE access to Skills Tutorial App',
            ]"
          />
          <SyncoWeeklyClassesComponentsSubscriptionCard
            plan-name="6 Month Plan"
            :plan-price="47.99"
            :benefits="[
              '36 Lessons at one venue',
              '15% off SSS Uniform',
              'FREE access to Skills Tutorial App',
            ]"
          />
          <SyncoWeeklyClassesComponentsSubscriptionCard
            plan-name="Flexi Plan"
            :plan-price="50.0"
            :benefits="[
              '36 Lessons at one venue',
              '15% off SSS Uniform',
              'FREE access to Skills Tutorial App',
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['toggleSubscriptionCard'])

const students = ref(1)
const changeStudents = (quantity: number) => {
  students.value = quantity
}
</script>
