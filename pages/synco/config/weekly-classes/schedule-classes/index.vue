<script setup lang="ts">
import { ref } from 'vue'
import type { IClassItem } from '~/types/index'

let classItem = ref<IClassItem>({
  Name: '1',
  Capacity: 24,
  Day: 'Saturday',
  StartTime: '2:00 pm',
  EndTime: '3:00 pm',
  AutumnTerm: 'Term 1 autumn',
  SpringTerm: 'Term 1 spring',
  SummerTerm: 'Term 1 summer',
  AutumnFacility: 'indoor',
  SpringFacility: 'indoor',
  SummerFacility: 'indoor',
  FreeTrialDates: 'off',
}).value
let emptyClassItem = ref<IClassItem>({
  Name: '',
  Capacity: 1,
  Day: '',
  StartTime: '',
  EndTime: '',
  AutumnTerm: '',
  SpringTerm: '',
  SummerTerm: '',
  AutumnFacility: '',
  SpringFacility: '',
  SummerFacility: '',
  FreeTrialDates: '',
})
let newEditClassItem = ref<IClassItem>()
let showModal = ref<boolean>(false)

let title = ref<string>('Create new').value

const toggleCreateEdit = (selected: string) => {
  showModal.value = !showModal.value
  title = selected
  if (selected == 'Edit') {
    newEditClassItem.value = classItem
  } else {
    newEditClassItem = emptyClassItem
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
          @click="toggleCreateEdit('Create new')"
        >
          Create new class
        </button>
      </div>
    </div>
    <div class="card rounded-4 p-3">
      <template v-for="num in 10">
        <div class="rounded-3 my-2 p-2" style="border: 1px solid lightgray">
          <SyncoConfigScheduleClassesClassListItem
            :class-item="classItem"
            @toggle-edit="toggleCreateEdit"
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
              @toggle-edit="toggleCreateEdit"
            ></SyncoConfigScheduleClassesCreateEditCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
