<script setup lang="ts">
import { ref } from 'vue'
import type { IHolidayCampSessionPlanItem } from '~/types/index'

const props = defineProps<{
  camp: IHolidayCampSessionPlanItem
}>()

let camp = ref<IHolidayCampSessionPlanItem>(props.camp).value

const emit = defineEmits(['toggleEdit'])

const toggleEdit = () => {
  emit('toggleEdit')
}
</script>

<template>
  <div class="card rounded-4">
    <div class="card-header d-flex justify-content-between flex-row py-4">
      <span class="h4"><strong>Edit camp</strong></span>
      <button class="btn btn-outline-secondary border-0" @click="toggleEdit">
        <Icon name="ph:x" />
      </button>
    </div>
    <div class="card-body">
      <div class="d-flex flex-column">
        <div class="row">
          <div class="col-6">
            <div class="form-group w-100 mb-3">
              <label for="campName" class="form-labelform-label-light">
                Camp name
              </label>
              <input
                id="campName"
                type="text"
                class="form-control form-control-lg"
                placeholder=""
                v-model="camp.CampName"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group w-100 mb-3">
              <label for="camp" class="form-labelform-label-light">
                Camp
              </label>
              <input
                id="camp"
                type="text"
                class="form-control form-control-lg"
                placeholder=""
                v-model="camp.Camp"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group w-100 mb-3">
              <label for="startDate" class="form-labelform-label-light">
                Start date
              </label>
              <input
                id="startDate"
                type="date"
                class="form-control form-control-lg"
                placeholder=""
                v-model="camp.StartDate"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group w-100 mb-3">
              <label for="endDate" class="form-labelform-label-light">
                End date
              </label>
              <input
                id="endDate"
                type="date"
                class="form-control form-control-lg"
                placeholder=""
                v-model="camp.EndDate"
              />
            </div>
          </div>
        </div>
        <label> Camp days </label>
        <div class="card rounded-4 bg-gray w-100 p-4">
          <template v-for="(day, index) in camp.Days">
            <div class="card rounded-4 w-100 my-2 border px-4 py-2">
              <div class="form-group w-100">
                <label for="day" class="form-labelform-label-light">
                  Day {{ index + 1 }}
                </label>
                <input
                  id="day"
                  type="date"
                  class="form-control form-control-lg"
                  :placeholder="day"
                  v-model="camp.Days[index]"
                />
              </div>
            </div>
          </template>
          <div
            class="card rounded-4 bg-gray w-100 mt-4 p-1"
            style="border: 1px dashed lightgray"
          >
            <div>
              <button
                type="button"
                class="btn btn-outline-primary border-0"
                @click="camp.Days.push('')"
              >
                Add new day
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-end my-2 flex-row">
      <div class="mx-2">
        <button
          class="btn btn-outline-secondaru w-100 border"
          @click="toggleEdit"
          style="width: 100px !important"
        >
          Cancel
        </button>
      </div>
      <div class="mx-2">
        <button
          class="btn btn-primary text-light w-100"
          style="width: 100px !important"
        >
          Save
        </button>
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
