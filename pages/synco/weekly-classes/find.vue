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

const weeklyClasses = ref<IFindAClassItem[]>([])
const filter = ref<IWeeklyClassesFindAClassFilterObject>({
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
    await store.getAvailableVenues()
  }
  await getData()
})

const handleFiltered = async (filteredItems: {
  venue?: string
  class_name?: string
  venues?: string[]
  days?: string[]
}) => {
  if (filteredItems.venue) {
    filterWeeklyClassesByVenue(filteredItems.venue)
  }
  if (filteredItems.class_name) {
    filterWeeklyClassesByClass(filteredItems.class_name)
  }
  if (!!filteredItems.venues && filteredItems.venues.length) {
    filter.value.venue_id = filteredItems.venues.join(',')
  } else {
    filter.value.venue_id = null
  }
  if (!!filteredItems.days && filteredItems.days.length) {
    filter.value.days = filteredItems.days.join(',')
  } else {
    filter.value.days = null
  }

  await getData()
}

const filterWeeklyClassesByVenue = (value: string) => {
  weeklyClasses.value = weeklyClasses.value.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })
}

const filterWeeklyClassesByClass = (value: string) => {
  weeklyClasses.value = weeklyClasses.value.filter((item) => {
    const classes = item?.classes[0]?.classes
    return (
      classes &&
      classes.some((classItem: any) =>
        classItem.name.toLowerCase().includes(value.toLowerCase()),
      )
    )
  })
}

console.log(weeklyClasses)
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
          :block-buttons="blockButtons"
          @filtered="handleFiltered"
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
