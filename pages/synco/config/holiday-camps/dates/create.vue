<script setup lang="ts">
import { ref } from 'vue'
import type { IHolidayCampSessionPlanItem } from '~/types/index'

let camp = ref<IHolidayCampSessionPlanItem>({
  CampName: '',
  Camp: '',
  StartDate: '',
  EndDate: '',
  Days: [''],
}).value
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="card rounded-4">
      <div class="row my-2">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="card rounded-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Config</li>
                <li class="breadcrumb-item">Holiday camp</li>
                <li class="breadcrumb-item">
                  <NuxtLink
                    to="/synco/config/holiday-camps/dates"
                    class="text-dark"
                  >
                    Dates
                  </NuxtLink>
                </li>
                <li
                  class="breadcrumb-item active text-semibold"
                  aria-current="page"
                >
                  Create date
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 pb-4" style="border-bottom: 1px solid lightgray">
          <NuxtLink class="h4 m-0" to="/synco/config/holiday-camps/dates">
            <Icon name="material-symbols:arrow-back" class="me-2" />Create date
          </NuxtLink>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row my-4">
        <div class="col-3"></div>
        <div class="col-6">
          <div class="d-flex flex-column">
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
            <label> Camp days </label>
            <div class="card rounded-4 bg-gray w-100 p-4">
              <template v-for="(day, index) in camp.Days">
                <div class="card rounded-4 w-100 my-2 border px-4 py-2">
                  <div class="form-group w-100 mb-3">
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
        <div class="col-3"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-3"></div>
        <div class="col-3">
          <button class="btn btn-outline-secondaru w-100 border">Cancel</button>
        </div>
        <div class="col-3">
          <button class="btn btn-primary text-light w-100">Save</button>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
</style>
