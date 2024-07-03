<script setup lang="ts">
import { ref } from 'vue'
import type { ITermCard, ITermItem, ITermHeader } from '~/types/index'

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

let showTermCard = ref<boolean>(false)
let newEditState = ref<string>('')

let showAssignSessionCard = ref<boolean>(false)

const toggleShowTermCard = (newEditText: string) => {
  showTermCard.value = !showTermCard.value
  newEditState.value = newEditText
}

const toggleAssignSessionCard = (selected: string) => {
  showAssignSessionCard.value = !showAssignSessionCard.value
}
</script>

<template>
  <NuxtLayout name="syncolayout" pageTitle="Terms">
    <div class="d-flex flex-column">
      <span class="h3 my-4">Term Dates & Mapping Session Plans</span>
      <div class="d-flex justify-content-between my-4 flex-row">
        <span class="h4">Terms</span>
        <NuxtLink
          to="/synco/config/weekly-classes/terms/create"
          class="btn btn-primary text-light"
        >
          Add new term
        </NuxtLink>
      </div>
      <div class="card rounded-4">
        <div v-for="index in 5">
          <SyncoConfigTermsSessionCard
            :term="term"
            @toggle-show-card="toggleShowTermCard"
            @toggle-assign-session-card="toggleAssignSessionCard"
          ></SyncoConfigTermsSessionCard>
        </div>
      </div>
    </div>
    <template v-if="showTermCard">
      <div class="modal-backdrop fade show"></div>
      <div
        class="modal fade show centered d-block"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <SyncoConfigTermsTermCard
              :term="term"
              @toggle-assign-session-card="toggleAssignSessionCard"
            >
              <template v-slot:header>
                <div class="d-flex justify-content-between flex-row">
                  <span class="h4">Edit term</span>
                  <button
                    class="btn btn-outline-secondary border-0"
                    @click="toggleShowTermCard"
                  >
                    X
                  </button>
                </div>
              </template>
              <template v-slot:footer>
                <div class="d-flex justify-content-end flex-row">
                  <button
                    class="btn btn-outline-secondary me-2"
                    @click="toggleShowTermCard"
                  >
                    Cancel
                  </button>
                  <button class="btn btn-primary text-light">Save</button>
                </div>
              </template>
            </SyncoConfigTermsTermCard>
          </div>
        </div>
      </div>
    </template>
    <template v-if="showAssignSessionCard">
      <div class="modal-backdrop fade show"></div>
      <div
        class="modal fade show centered d-block"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <SyncoConfigTermsSessionPlanCard
              :term="term"
              @toggle-assign-session-card="toggleAssignSessionCard"
            ></SyncoConfigTermsSessionPlanCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
