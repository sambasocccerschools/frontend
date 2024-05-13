<script setup lang="ts">
import { ref } from 'vue'
import type { ITermCard } from '~/types/index'

const props = defineProps<{
  term: ITermCard
}>()

let showSessionPlans = ref<boolean>(false)
let term = ref<ITermCard>(props.term).value

const toggleSessionPlans = () => {
  showSessionPlans.value = !showSessionPlans.value
}
</script>
<template>
  <div class="card rounded-4 m-2 border">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-auto">
          <strong>{{ term.Header.Name }}</strong>
        </div>
        <div class="d-flex col-auto flex-row">
          <div class="me-2">
            <Icon name="ph:leaf" style="height: 38px; width: 38px" />
          </div>
          <div class="d-flex flex-column">
            <span>Term seasons</span>
            <span class="text-muted">{{ term.Header.Seasson }}</span>
          </div>
        </div>
        <div class="d-flex flex-column col-auto">
          <span>Start and end date</span>
          <span class="text-muted"
            >{{ term.Header.StartDate }} - {{ term.Header.EndDate }}</span
          >
        </div>
        <div class="d-flex flex-column col-auto">
          <span>Half-Term Exclusion Date(s)</span>
          <span>
            <span
              class="text-muted"
              v-for="(exclusionDate, index) in term.Header.ExclusionDates"
            >
              {{ exclusionDate
              }}{{ index + 1 == term.Header.ExclusionDates.length ? '' : ', ' }}
            </span>
          </span>
        </div>
      </div>
    </div>
    <div class="card-body bg-gray border-0" v-if="showSessionPlans">
      <template v-for="item in term.Items">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="text-sm">Session {{ item.SessionNumber }}</span>
          </div>
          <div class="col-auto">
            <span class="text-sm"
              ><span class="text-muted">Beginners</span>
              {{ item.Beginner }}</span
            >
          </div>
          <div class="col-auto">
            <span class="text-sm"
              ><span class="text-muted">Intermediate</span>
              {{ item.Intermediate }}</span
            >
          </div>
          <div class="col-auto">
            <span class="text-sm"
              ><span class="text-muted">Advanced</span>
              {{ item.Advanced }}</span
            >
          </div>
          <div class="col-auto">
            <span class="text-sm"
              ><span class="text-muted">Pro</span> {{ item.Pro }}</span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="card-footer bg-gray border-0">
      <div class="d-flex justify-content-center flex-row">
        <a
          type="button"
          class="btn btn-sm btn-outline-primary border-0"
          @click="toggleSessionPlans"
        >
          Hide all session plans
          <Icon :name="showSessionPlans ? 'ph:caret-up' : 'ph:caret-down'" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
.text-sm {
  font-size: 0.6rem;
}
</style>
