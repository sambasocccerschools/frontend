<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import type {
  IClassItem,
  ITermCard,
  ITermItem,
  ITermHeader,
} from '~/types/index'

const props = defineProps<{
  classItem: IClassItem
  title: string
}>()

let classItem = ref<IClassItem>(props.classItem).value
let title = ref<string>(props.title).value
let showModalTerm = ref<boolean>(false)

let days = ref<string[]>([
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]).value

let header = ref<ITermHeader>({
  Name: 'Term 1',
  Seasson: 'Spring',
  StartDate: 'Saturday, 9/9/2023',
  EndDate: 'Saturday, 9/9/2023',
  ExclusionDates: ['Saturday 15th October', 'Saturday 15th October'],
})
let item = ref<ITermItem>({
  SessionNumber: 1,
  Beginner: 'Session Plan BCPELE3 Saturday, 9/9/2023',
  Intermediate: 'Session Plan BCPELE3 Saturday, 9/9/2023',
  Advanced: 'Session Plan BCPELE3 Saturday, 9/9/2023',
  Pro: 'Session Plan BCPELE3 Saturday, 9/9/2023',
})
let term = ref<ITermCard>({
  Header: header.value,
  Items: [item.value, item.value, item.value],
}).value

let terms = ref<ITermCard[]>([term, term, term, term, term]).value
let selectedTerm = ref<number>(-1)

const emit = defineEmits(['toggleEdit'])

const close = () => {
  emit('toggleEdit', '')
}
const changeSelectedTerm = (index: number) => {
  selectedTerm.value = index
}

const toggleModalTerm = () => {
  showModalTerm.value = !showModalTerm.value
}

const save = () => {
  console.log('Save')
  close()
}
</script>
<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between flex-row">
        <span class="h4">
          <strong> {{ title }} class</strong>
        </span>
        <button class="btn btn-outline-secondary border-0" @click="close">
          <Icon name="ph:x" />
        </button>
      </div>
    </div>
    <div class="card-body" style="overflow: scroll; max-height: 80vh">
      <div class="row">
        <div class="col-6">
          <div class="form-group w-100 mb-3">
            <label for="name" class="form-labelform-label-light"
              >Class name</label
            >
            <input
              id="name"
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter class name"
              v-model="classItem.Name"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group w-100 mb-3">
            <label for="capacity" class="form-labelform-label-light"
              >Capacity</label
            >
            <input
              id="capacity"
              type="number"
              min="1"
              class="form-control form-control-lg"
              placeholder="Enter capacity"
              v-model="classItem.Capacity"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="form-group w-100 mb-3">
            <label for="day" class="form-labelform-label-light">Day</label>
            <select
              id="day"
              class="form-control form-control-lg"
              v-model="classItem.Day"
            >
              <option v-for="(day, index) in days" :value="day" :key="index">
                {{ day }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group w-100 mb-3">
            <label for="start" class="form-labelform-label-light"
              >Start Time</label
            >
            <input
              id="start"
              type="time"
              class="form-control form-control-lg"
              placeholder="Enter capacity"
              v-model="classItem.StartTime"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="form-group w-100 mb-3">
            <label for="end" class="form-labelform-label-light">End Time</label>
            <input
              id="end"
              type="time"
              class="form-control form-control-lg"
              placeholder="Enter capacity"
              v-model="classItem.EndTime"
            />
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-6">
          <div class="d-flex flex-column">
            <label class="form-labelform-label-light">
              Autumn Term Dates
            </label>
            <span>
              {{ classItem.AutumnTerm }}
              <span class="btn text-primary mx-1 p-0" @click="toggleModalTerm">
                {{ classItem.AutumnTerm ? 'Change ' : 'Assign ' }}term
              </span></span
            >
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex flex-column">
            <label for="autumn" class="form-labelform-label-light">
              Facility
            </label>

            <div class="d-flex flex-row">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="autumn"
                  id="autumn-indoor"
                  value="indoor"
                  v-model="classItem.AutumnFacility"
                />
                <label class="form-check-label" for="autumn-indoor">
                  Indoor
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="autumn"
                  id="autumn-outdoor"
                  value="outdoor"
                  v-model="classItem.AutumnFacility"
                />
                <label class="form-check-label" for="autumn-outdoor">
                  Outdoor
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-6">
          <div class="d-flex flex-column">
            <label class="form-labelform-label-light">
              Spring Term Dates
            </label>
            <span>
              {{ classItem.SpringTerm }}
              <span class="btn text-primary mx-1 p-0" @click="toggleModalTerm">
                {{ classItem.SpringTerm ? 'Change ' : 'Assign ' }}term
              </span></span
            >
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex flex-column">
            <label for="spring" class="form-labelform-label-light">
              Facility
            </label>

            <div class="d-flex flex-row">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spring"
                  id="spring-indoor"
                  value="indoor"
                  v-model="classItem.SpringFacility"
                />
                <label class="form-check-label" for="spring-indoor">
                  Indoor
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="spring"
                  id="spring-outdoor"
                  value="outdoor"
                  v-model="classItem.SpringFacility"
                />
                <label class="form-check-label" for="spring-outdoor">
                  Outdoor
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-6">
          <div class="d-flex flex-column">
            <label class="form-labelform-label-light">
              Summer Term Dates
            </label>
            <span>
              {{ classItem.SummerTerm }}
              <span class="btn text-primary mx-1 p-0" @click="toggleModalTerm">
                {{ classItem.SummerTerm ? 'Change ' : 'Assign ' }}term
              </span></span
            >
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex flex-column">
            <label for="summer" class="form-labelform-label-light">
              Facility
            </label>

            <div class="d-flex flex-row">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="summer"
                  id="summer-indoor"
                  value="indoor"
                  v-model="classItem.SummerFacility"
                />
                <label class="form-check-label" for="summer-indoor">
                  Indoor
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="summer"
                  id="summer-outdoor"
                  value="outdoor"
                  v-model="classItem.SummerFacility"
                />
                <label class="form-check-label" for="summer-outdoor">
                  Outdoor
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12">
          <div class="d-flex flex-column">
            <label for="free-trial" class="form-labelform-label-light">
              Free Trial Dates
            </label>

            <div class="d-flex flex-row">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="free-trial"
                  id="free-trial-on"
                  value="on"
                  v-model="classItem.FreeTrialDates"
                />
                <label class="form-check-label" for="free-trial-on"> On </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="free-trial"
                  id="free-trial-off"
                  value="off"
                  v-model="classItem.FreeTrialDates"
                />
                <label class="form-check-label" for="free-trial-off">
                  Off
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-6">
          <button class="btn btn-outline-secondary w-100" @click="close">
            Cancel
          </button>
        </div>
        <div class="col-6">
          <button class="btn btn-primary text-light w-100" @click="save">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  <template v-if="showModalTerm">
    <div class="modal-backdrop fade show"></div>
    <div
      class="modal fade show centered d-block"
      aria-modal="true"
      role="dialog"
      tabindex="-1"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div
            class="d-flex justify-content-between flex-row p-2"
            style="border-bottom: 1px solid lightgray"
          >
            <button
              class="btn btn-outline-secondary border-0"
              @click="toggleModalTerm"
            >
              <Icon name="ph:x" />
            </button>
            <span class="h4">
              <strong> Assign term</strong>
            </span>
            <NuxtLink
              class="btn text-primary"
              to="/synco/config/weekly-classes/terms/create"
            >
              Create new term
            </NuxtLink>
          </div>
          <div class="p-2">
            <template v-for="(term, index) in terms" :key="index">
              <div
                class="rounded-4"
                @click="changeSelectedTerm(index)"
                :style="selectedTerm == index ? 'border:1px solid red' : ''"
              >
                <SyncoConfigScheduleClassesTermCard
                  :term="term"
                ></SyncoConfigScheduleClassesTermCard>
              </div>
            </template>
          </div>
          <div class="row p-2">
            <div class="col-6">
              <button
                class="btn btn-outline-secondary w-100"
                @click="toggleModalTerm"
              >
                Cancel
              </button>
            </div>
            <div class="col-6">
              <button
                class="btn btn-primary text-light w-100"
                @click="toggleModalTerm"
              >
                Assign term
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
