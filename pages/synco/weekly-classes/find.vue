<script setup lang="ts">
// import type { IGetAllWeeklyClassesInput } from '~/types'
// const { $api } = useNuxtApp()

// const input = reactive<IGetAllWeeklyClassesInput>({})

// const { data: weeklyClasses } = await $api.weeklyClasses.getAllWeeklyClasses(
//   input,
//   {
//     watch: [input],
//   },
// )
// const { data: venues } = await $api.datasets.getVenue('weekly-classes')

// const handleFiltered = (filteredItems: {
//   venue?: string
//   postcode?: string
//   venues?: string[]
//   days?: string[]
//   ages?: string[]
// }) => {
//   input.venue_ids = filteredItems.venues?.find((venue) => venue === 'all')
//     ? undefined
//     : filteredItems.venues?.join(',')
//   input.venue = filteredItems.venue
//   input.postcode = filteredItems.postcode
// }
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import { generalStore } from '~/stores'
import type {
  IFindAClassItem,
  IWeeklyClassesFindAClassFilterObject,
} from '~/types/synco/index'
const blockButtons = ref(false)
const store = generalStore()
const { $api } = useNuxtApp()
const toast = useToast()

const venues = store.availableVenues

let weeklyClasses = ref<IFindAClassItem[]>([])
let filter = ref<IWeeklyClassesFindAClassFilterObject>({
  limit: 25,
  class_name: null,
  days: null,
  postcode: null,
  venue: null,
  venue_id: null,
})

const getData = async () => {
  try {
    blockButtons.value = true
    const response = await $api.wcFindAClass.getByFilter(filter.value)
    weeklyClasses.value = response?.data
  } catch (error: any) {
    weeklyClasses.value = []
    console.log(error)
    toast.error(error?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
  }
}

onMounted(async () => {
  console.log('pages/synco/weekly-classes/find.vue')
  if (!store.availableVenues.length) {
    await store.getAvailableVenues('weekly-classes')
  }
  await getData()
})

const handleFiltered = async (filteredItems: {
  venue?: string
  class_name?: string
  venues?: string[]
  days?: string[]
}) => {
  if (!!filteredItems.venue) {
    filter.value.venue = filteredItems.venue
  }
  if (!!filteredItems.class_name) {
    filter.value.class_name = filteredItems.class_name
  }
  if (!!filteredItems.venues && filteredItems.venues.length > 0) {
    filter.value.venue_id = filteredItems.venues.join(',')
  } else {
    filter.value.venue_id = null
  }
  if (!!filteredItems.days && filteredItems.days.length > 0) {
    filter.value.days = filteredItems.days.join(',')
  } else {
    filter.value.days = null
  }
  // if (
  //   (!!filteredItems.venue && filteredItems.venue.length > 2) ||
  //   (!!filteredItems.class_name && filteredItems.class_name.length > 2) ||
  //   (!!filteredItems.venues && filteredItems.venues.length > 0) ||
  //   (!!filteredItems.days && filteredItems.days.length > 0)
  // ) {
  // }
  console.log(filteredItems)
  await getData()
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Weekly Classes">
    <div class="card bg-success bg-gradient text-bg-dark">
      <div class="card-body">
        <span class="h3">
          <Icon name="ic:baseline-search" /> Find a Class
        </span>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-sm-3">
        <SyncoWeeklyClassesFormsFindClass
          :venues="venues"
          @filtered="handleFiltered"
          :block-buttons="blockButtons"
        />
      </div>
      <div class="col">
        <SyncoBookingListItem
          v-for="(item, index) in weeklyClasses"
          :key="item.id"
          activity="weekly-class"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
