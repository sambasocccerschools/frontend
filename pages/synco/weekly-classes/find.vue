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

import search from '~/assets/styles/synco/Search.svg'

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
    await getData()
    filterWeeklyClassesByVenue(filteredItems.venue)
  } else if (filteredItems.class_name) {
    await getData()
    filterWeeklyClassesByClass(filteredItems.class_name)
  } else {
    filter.value = {
      ...filter.value,
      venue_id: filteredItems.venues?.length
        ? filteredItems.venues.join(',')
        : null,
      days: filteredItems.days?.length
        ? toRaw(filteredItems.days).join(',')
        : null,
    }

    await getData()
  }
}

const filterWeeklyClassesByVenue = (value: string) => {
  const filtered = weeklyClasses.value.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  )
  console.log(filtered)
  weeklyClasses.value = filtered
}

const filterWeeklyClassesByClass = (value: string) => {
  const filtered = weeklyClasses.value.filter((item) => {
    const classes = item?.classes[0]?.classes
    return (
      classes &&
      classes.some((classItem: any) =>
        classItem.name.toLowerCase().includes(value.toLowerCase()),
      )
    )
  })
  weeklyClasses.value = filtered
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Weekly Classes">
    <div class="card">
      <!-- <img :src="titleBackground" :alt="`find a class title background`" /> -->
      <div class="card-body title-container">
        <span class="h3 title text-white">
          <img :src="search" alt="search icon" class="me-2" height="28px" />
          Find a Class
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

<style scoped>
.title-container {
  position: relative;
  background: url('~/assets/styles/synco/Section-Title.png') no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 25px;
}
.title {
  display: flex;
  gap: 5px;
  font-size: 28px;
  margin: 0;
}
</style>
