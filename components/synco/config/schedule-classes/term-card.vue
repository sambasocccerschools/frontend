<script setup lang="ts">
import { ref } from 'vue'
import type { ITermItem } from '~/types/synco/index'

const props = defineProps<{
  term: ITermItem
}>()

const showSessionPlans = ref<boolean>(false)
const term = ref<any>(props.term).value

const toggleSessionPlans = () => {
  showSessionPlans.value = !showSessionPlans.value
}
onMounted(() => {
  console.log('components/synco/config/schedule-classes/term-card.vue')
})
const cleanDate = (date: string) => {
  if (!Number.isInteger(date)) return date
  const cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
}
</script>
<template>
  <div class="card rounded-4 m-2 border">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-auto">
          <strong>{{ term.name }}</strong>
        </div>
        <div class="d-flex col-auto flex-row">
          <div class="me-2">
            <Icon name="ph:leaf" style="height: 38px; width: 38px" />
          </div>
          <div class="d-flex flex-column">
            <span>Term seasons</span>
            <span class="text-muted">{{ term.season.title }}</span>
          </div>
        </div>
        <div class="d-flex flex-column col-auto">
          <span>Start and end date</span>
          <span class="text-muted"
            >{{ cleanDate(term.start_date) }} to
            {{ cleanDate(term.end_date) }}</span
          >
        </div>
        <div class="d-flex flex-column col-auto">
          <span>Half-Term Exclusion Date(s)</span>
          <span>
            <span class="text-muted">
              {{ cleanDate(term.half_term_date) }}
            </span>
          </span>
        </div>
      </div>
    </div>
    <div v-if="showSessionPlans" class="card-body bg-gray border-0">
      <template v-for="item in term.sessions" :key="item.id">
        <div class="row align-items-center">
          <div class="col-auto">
            <span class="text-sm">Session {{ item.id }}</span>
          </div>
          <div
            v-for="plan in item.termSessionPlans"
            :key="plan.id"
            class="col-auto"
          >
            <span class="text-sm"
              ><span class="text-muted">{{ plan.ability_group.name }}</span>
              {{ plan.session_plan.title }}</span
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
