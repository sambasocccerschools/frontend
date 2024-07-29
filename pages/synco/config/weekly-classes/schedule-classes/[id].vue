<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  IWeeklyClassesItem,
  IWeeklyClassesCreateItem,
  ISeasonItem,
} from '~/types/synco/index'

const updateKey = ref<number>(0)
const { $api } = useNuxtApp()
const router = useRouter()
const blockButtons = ref(false)
const toast = useToast()
let classes = ref<IWeeklyClassesItem[]>([])
let selectedClassId = ref<number | null>(null)

let seasons = ref<ISeasonItem[]>([])
let emptyClassItem = ref<IWeeklyClassesCreateItem>({
  venue_id: '',
  name: '',
  capacity: 0,
  days: '',
  start_time: '',
  end_time: '',
  autumn_term_id: 0,
  is_autumn_indoor: false,
  spring_term_id: 0,
  is_spring_indoor: false,
  summer_term_id: 0,
  is_summer_indoor: false,
  is_free_trail_dates: false,
})
let newEditClassItem = ref<IWeeklyClassesCreateItem>({
  venue_id: '',
  name: '',
  capacity: 0,
  days: '',
  start_time: '',
  end_time: '',
  autumn_term_id: 0,
  is_autumn_indoor: false,
  spring_term_id: 0,
  is_spring_indoor: false,
  summer_term_id: 0,
  is_summer_indoor: false,
  is_free_trail_dates: false,
})
let showModal = ref<boolean>(false)

let title = ref<string>('Create new').value

let classId = ref<string>('')

const toggleCreateEdit = async (item: IWeeklyClassesItem | null | boolean) => {
  console.log(item)
  showModal.value = !showModal.value
  if (!!item) {
    title = 'Edit'
    selectedClassId.value = item.id
    newEditClassItem = JSON.parse(
      JSON.stringify({
        venue_id: item.venue?.id,
        name: item.name,
        capacity: item.capacity,
        days: item.days,
        start_time: item.start_time,
        end_time: item.end_time,
        autumn_term_id: item.autumn_term?.id,
        is_autumn_indoor: item.is_autumn_indoor,
        spring_term_id: item.spring_term?.id,
        is_spring_indoor: item.is_spring_indoor,
        summer_term_id: item.summer_term_id?.id,
        is_summer_indoor: item.is_summer_indoor,
        is_free_trail_dates: item.is_free_trail_dates,
      }),
    )
  } else {
    title = 'Create new'
    selectedClassId.value = null
    newEditClassItem = JSON.parse(JSON.stringify(emptyClassItem.value))
  }
  if (item == true) {
    updateKey.value++
    await getWeeklyClasses()
  }
}

onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/schedule-classes/[id].vue')
  let currentRoute = router.currentRoute.value.path.split('/')
  let id = currentRoute[currentRoute.length - 1]
  console.log(id)
  classId.value = id
  emptyClassItem.value.venue_id = id
  newEditClassItem.value.venue_id = id
  await getWeeklyClasses()
  await getSeasons()
})

const getWeeklyClasses = async (limit: number = 25) => {
  try {
    const weeklyClassesResponse = await $api.classes.getAll(
      classId.value,
      limit,
    )
    classes.value = weeklyClassesResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
    updateKey.value++
  }
}

const deleteClass = async (id: number) => {
  try {
    blockButtons.value = true
    const deleteResponse = await $api.classes.delete(id)
    toast.success(deleteResponse?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    await getWeeklyClasses()
    blockButtons.value = false
  }
}
const restoreClass = async (id: number) => {
  try {
    blockButtons.value = true
    const restoreResponse = await $api.classes.restore(id)
    toast.success(restoreResponse?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    await getWeeklyClasses()
    blockButtons.value = false
  }
}
const getSeasons = async () => {
  try {
    const seasonsResponse = await $api.datasets.getSeasons()
    console.log(seasonsResponse)
    seasons.value = seasonsResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
    updateKey.value++
  }
}
</script>
<template>
  <NuxtLayout name="syncolayout">
    <div class="d-flex justify-content-between my-4 flex-row">
      <NuxtLink class="h4 m-0" to="/synco/config/weekly-classes/venues">
        <Icon name="material-symbols:arrow-back" class="me-2" />Edit Schedule
      </NuxtLink>
      <div>
        <button
          class="btn btn-primary text-light w-100"
          @click="toggleCreateEdit(null)"
        >
          Create new class
        </button>
      </div>
    </div>
    <div class="card rounded-4 p-3">
      <template v-for="item in classes" :key="updateKey">
        <div class="rounded-3 my-2 p-2" style="border: 1px solid lightgray">
          <SyncoConfigScheduleClassesClassListItem
            :class-item="item"
            :block-buttons="blockButtons"
            @toggle-edit="toggleCreateEdit"
            @delete-class="deleteClass"
            @restore-class="restoreClass"
          ></SyncoConfigScheduleClassesClassListItem>
        </div>
      </template>
    </div>
    <template v-if="showModal">
      <div class="modal-backdrop fade show"></div>
      <div
        class="modal fade show centered d-block"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <SyncoConfigScheduleClassesCreateEditCard
              :class-item="newEditClassItem"
              :title="title"
              :classId="selectedClassId"
              @toggle-edit="toggleCreateEdit"
            ></SyncoConfigScheduleClassesCreateEditCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
