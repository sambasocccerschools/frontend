<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesCreateItem,
  ITermItem,
  ISeasonItem,
} from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const props = defineProps<{
  classItem: IWeeklyClassesCreateItem
  title: string
  classId: number | null
}>()

const { $api } = useNuxtApp()
const toast = useToast()
const classItem = ref<IWeeklyClassesCreateItem>(props.classItem).value
const title = ref<string>(props.title).value
const classId = ref<number | null>(props.classId).value
const showModalTerm = ref<boolean>(false)

const days = ref<string[]>([
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]).value

const terms = ref<ITermItem[]>([])
const seasons = store.seasons

const selectedTerm = ref<number>(-1)
const selectedSeasonId = ref<number>(-1)
const selectedSeason = ref<string>('')

const emit = defineEmits(['toggleEdit'])

const close = () => {
  emit('toggleEdit', null)
}
const changeSelectedTerm = (index: number) => {
  selectedTerm.value = index
}

const assignTerm = () => {
  if (selectedSeason.value == 'Autumn')
    classItem.autumn_term_id = Number(selectedTerm.value)
  else if (selectedSeason.value == 'Spring')
    classItem.spring_term_id = Number(selectedTerm.value)
  else if (selectedSeason.value == 'Summer')
    classItem.summer_term_id = Number(selectedTerm.value)
  else selectedSeason.value = ''

  showModalTerm.value = !showModalTerm.value
}

const toggleModalTerm = (id: number, season: string) => {
  showModalTerm.value = !showModalTerm.value
  selectedTerm.value = id
  selectedSeason.value = season
  const seasonObj = seasons.find((x) => x.title == season)
  selectedSeasonId.value = seasonObj != null ? seasonObj.id : -1
}

const save = async () => {
  if (!classId) {
    classItem.start_time = `${classItem.start_time}:00`
    classItem.end_time = `${classItem.end_time}:00`
    const addResponse = await $api.classes.create(classItem).finally(() => {
      emit('toggleEdit', true)
    })
    toast.success(addResponse?.message)
  } else {
    const updateResponse = await $api.classes
      .update(classId, classItem)
      .finally(() => {
        emit('toggleEdit', true)
      })
    toast.success(updateResponse?.message)
  }
}

onMounted(async () => {
  console.log('components/synco/config/schedule-classes/create-edit-card.vue')
  await getTerms()
  if (!store.seasons.length) {
    await store.fetchDatasetDataByType('SEASONS')
  }
})
const getTerms = async (limit: number = 25) => {
  try {
    const termResponse = await $api.terms.getAll(limit)
    console.log(termResponse)
    terms.value = termResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    // blockButtons.value = false
    // updateKey.value++
  }
}

const getTermName = (seasonId: number) => {
  const term = terms.value.find((x) => x.id == seasonId)
  return term ? term.name : seasonId
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
              v-model="classItem.name"
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter class name"
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
              v-model="classItem.capacity"
              type="number"
              min="1"
              class="form-control form-control-lg"
              placeholder="Enter capacity"
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
              v-model="classItem.days"
              class="form-control form-control-lg"
            >
              <option v-for="(day, index) in days" :key="index" :value="day">
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
              v-model="classItem.start_time"
              type="time"
              class="form-control form-control-lg"
              placeholder="Enter capacity"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="form-group w-100 mb-3">
            <label for="end" class="form-labelform-label-light">End Time</label>
            <input
              id="end"
              v-model="classItem.end_time"
              type="time"
              class="form-control form-control-lg"
              placeholder="Enter capacity"
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
              {{ getTermName(classItem.autumn_term_id) }}
              <span
                class="btn text-primary mx-1 p-0"
                @click="toggleModalTerm(classItem.autumn_term_id, 'Autumn')"
              >
                {{ classItem.autumn_term_id ? 'Change ' : 'Assign ' }}term
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
                  id="autumn-indoor"
                  v-model="classItem.is_autumn_indoor"
                  class="form-check-input"
                  type="radio"
                  name="autumn"
                  :value="true"
                />
                <label class="form-check-label" for="autumn-indoor">
                  Indoor
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  id="autumn-outdoor"
                  v-model="classItem.is_autumn_indoor"
                  class="form-check-input"
                  type="radio"
                  name="autumn"
                  :value="false"
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
              {{ getTermName(classItem.spring_term_id) }}
              <span
                class="btn text-primary mx-1 p-0"
                @click="toggleModalTerm(classItem.spring_term_id, 'Spring')"
              >
                {{ classItem.spring_term_id ? 'Change ' : 'Assign ' }}term
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
                  id="spring-indoor"
                  v-model="classItem.is_spring_indoor"
                  class="form-check-input"
                  type="radio"
                  name="spring"
                  :value="true"
                />
                <label class="form-check-label" for="spring-indoor">
                  Indoor
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  id="spring-outdoor"
                  v-model="classItem.is_spring_indoor"
                  class="form-check-input"
                  type="radio"
                  name="spring"
                  :value="false"
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
              {{ getTermName(classItem.summer_term_id) }}
              <span
                class="btn text-primary mx-1 p-0"
                @click="toggleModalTerm(classItem.summer_term_id, 'Summer')"
              >
                {{ classItem.summer_term_id ? 'Change ' : 'Assign ' }}term
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
                  id="summer-indoor"
                  v-model="classItem.is_summer_indoor"
                  class="form-check-input"
                  type="radio"
                  name="summer"
                  :value="true"
                />
                <label class="form-check-label" for="summer-indoor">
                  Indoor
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  id="summer-outdoor"
                  v-model="classItem.is_summer_indoor"
                  class="form-check-input"
                  type="radio"
                  name="summer"
                  :value="false"
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
                  id="free-trial-on"
                  v-model="classItem.is_free_trail_dates"
                  class="form-check-input"
                  type="radio"
                  name="free-trial"
                  :value="true"
                />
                <label class="form-check-label" for="free-trial-on"> On </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  id="free-trial-off"
                  v-model="classItem.is_free_trail_dates"
                  class="form-check-input"
                  type="radio"
                  name="free-trial"
                  :value="false"
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
              @click="toggleModalTerm(-1, '')"
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
                v-if="term.season.id == selectedSeasonId"
                class="rounded-4"
                :style="selectedTerm == term.id ? 'border:1px solid red' : ''"
                @click="changeSelectedTerm(term.id)"
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
                @click="toggleModalTerm(-1, '')"
              >
                Cancel
              </button>
            </div>
            <div class="col-6">
              <button
                class="btn btn-primary text-light w-100"
                @click="assignTerm"
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
