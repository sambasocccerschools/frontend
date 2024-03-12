<script setup lang="ts">
import type { IGetAllWeeklyClassesInput } from '~/types'
const { $api } = useNuxtApp()

const input = reactive<IGetAllWeeklyClassesInput>({})

const { data: weeklyClasses } = await $api.weeklyClasses.getAllWeeklyClasses(
  input,
  {
    watch: [input],
  },
)
const { data: venues } = await $api.datasets.getVenue('weekly-classes')

const handleFiltered = (filteredItems: {
  venue?: string
  postcode?: string
  venues?: string[]
  days?: string[]
  ages?: string[]
}) => {
  input.venue_ids = filteredItems.venues?.find((venue) => venue === 'all')
    ? undefined
    : filteredItems.venues?.join(',')
  input.venue = filteredItems.venue
  input.postcode = filteredItems.postcode
}
</script>
import { SyncoFiltersFilterWeeklyClassesForm } from '.nuxt/components';

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
          :venues="venues?.data"
          @filtered="handleFiltered"
        />
      </div>
      <div class="col">
        <SyncoBookingListItem
          v-for="(item, index) in weeklyClasses?.data"
          :key="item.id"
          activity="weekly-class"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
