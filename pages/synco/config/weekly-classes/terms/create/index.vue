<script setup lang="ts">
import { ref } from 'vue'
import type { ITermCard, ITermItem, ITermHeader } from '~/types/index'

let header = ref<ITermHeader>({
  Name: '',
  Seasson: '',
  StartDate: '',
  EndDate: '',
  ExclusionDates: [''],
})
let item = ref<ITermItem>({
  SessionNumber: 1,
  Beginner: '',
  Intermediate: '',
  Advanced: '',
  Pro: '',
})
let term = ref<ITermCard>({
  Header: header.value,
  Items: [],
}).value

let showAssignSessionCard = ref<boolean>(false)

const toggleAssignSessionCard = (selected: string) => {
  showAssignSessionCard.value = !showAssignSessionCard.value
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <div class="card rounded-4">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="card rounded-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">Config</li>
                <li class="breadcrumb-item">Weekly classes</li>
                <li class="breadcrumb-item">
                  <NuxtLink
                    to="/synco/config/weekly-classes/terms"
                    class="text-dark"
                  >
                    Terms
                  </NuxtLink>
                </li>
                <li
                  class="breadcrumb-item active text-semibold"
                  aria-current="page"
                >
                  Add new term
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
          <NuxtLink class="h4 m-0" to="/synco/config/weekly-classes/terms">
            <Icon name="material-symbols:arrow-back" class="me-2" />Add new term
          </NuxtLink>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <SyncoConfigTermsTermCard
            :term="term"
            @toggle-assign-session-card="toggleAssignSessionCard"
          ></SyncoConfigTermsTermCard>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-3"></div>
        <div class="col-3">
          <button class="btn btn-outline-secondary w-100">Cancel</button>
        </div>
        <div class="col-3">
          <button class="btn btn-primary text-light w-100">Add term</button>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
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
