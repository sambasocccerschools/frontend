<script setup lang="ts">
import { ref } from 'vue'
import type { IHolidayCampSessionPlanItem } from '~/types/index'

const props = defineProps<{
  camp: IHolidayCampSessionPlanItem
}>()

let showDays = ref<boolean>(false)

let camp = ref<IHolidayCampSessionPlanItem>(props.camp).value

const toggleDays = () => {
  showDays.value = !showDays.value
}

const emit = defineEmits(['toggleEdit'])

const toggleEdit = () => {
  emit('toggleEdit')
}
</script>
<template>
  <div class="card rounded-4 border">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-2">
          <strong>{{ camp.CampName }}</strong>
        </div>
        <div class="col-2 d-flex flex-column">
          <span>Camp</span>
          <span class="text-muted">{{ camp.Camp }}</span>
        </div>
        <div class="col-2 d-flex flex-column">
          <span>Start date</span>
          <span class="text-muted">{{ camp.StartDate }}</span>
        </div>
        <div class="col-2 d-flex flex-column">
          <span>End date</span>
          <span class="text-muted">{{ camp.EndDate }}</span>
        </div>
        <div class="col-2"></div>
        <div class="col-2 d-flex justify-content-end flex-row">
          <button
            type="button"
            class="btn btn-outline-secondary me-2 border-0 bg-white"
            @click="toggleEdit"
          >
            <Icon
              name="ph:pencil-line"
              style="color: black !important; height: 24px; width: 24px"
            />
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary border-0 bg-white"
          >
            <Icon
              name="ph:trash"
              style="color: black !important; height: 24px; width: 24px"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="card-body bg-gray border-0" v-if="showDays">
      <div class="d-flex flex-row">
        <template v-for="(day, index) in camp.Days">
          <div class="m-2 text-sm">
            <span class="text-sm">
              <span class="text-muted">Day {{ index + 1 }}</span> {{ day }}
              <a type="button" class="btn btn-outline-primary border-0 text-sm">
                Change
              </a>
            </span>
          </div>
        </template>
      </div>
    </div>
    <div class="card-footer bg-gray border-0">
      <div class="d-flex justify-content-center flex-row">
        <a
          type="button"
          class="btn btn-sm btn-outline-primary border-0"
          @click="toggleDays"
        >
          {{ showDays ? 'Hide' : 'Show' }} all days
          <Icon :name="showDays ? 'ph:caret-up' : 'ph:caret-down'" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
.text-sm {
  font-size: 0.6rem;
}
</style>
