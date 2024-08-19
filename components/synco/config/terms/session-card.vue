<script setup lang="ts">
import { ref } from 'vue'
import type { ITermItem } from '~/types/synco/index'

const props = defineProps<{
  term: ITermItem
}>()

let showSessionPlans = ref<boolean>(false)
let term = ref<ITermItem>(props.term).value

const toggleSessionPlans = () => {
  showSessionPlans.value = !showSessionPlans.value
}

const emit = defineEmits([
  'toggleAssignSessionCard',
  'toggleShowCard',
  'deleteTerm',
  'restoreTerm',
])

const toggleAssignSessionCard = (selected: any) => {
  emit('toggleAssignSessionCard', selected)
}
const toggleShowCard = (newEditText: string, selected: number) => {
  emit('toggleShowCard', { newEditText, selected })
}
const deleteRestoreTerm = (id: number, action: string) => {
  if (action == 'delete') emit('deleteTerm', id)
  else if (action == 'restore') emit('restoreTerm', id)
}
onMounted(() => {
  console.log('components/synco/config/terms/session-card.vue')
})
const cleanDate = (date: string) => {
  if (!Number.isInteger(date)) return date
  let cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
  // let cleanedDate = date
  // if (date?.includes('T')) {
  //   cleanedDate = date.split('T')[0]
  // }
  // return cleanedDate
}
</script>
<template>
  <div class="card rounded-4 m-2 border">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col-1">
          <strong>{{ term.name }}</strong>
        </div>
        <div class="col-3 d-flex flex-row">
          <div class="me-2">
            <Icon name="ph:leaf" style="height: 38px; width: 38px" />
          </div>
          <div class="d-flex flex-column">
            <span>Term seasons</span>
            <span class="text-muted">{{ term.season.title }}</span>
          </div>
        </div>
        <div class="col-4 d-flex flex-column">
          <span>Start and end date</span>
          <span class="text-muted"
            >{{ cleanDate(term.start_date) }} to
            {{ cleanDate(term.end_date) }}</span
          >
        </div>
        <div class="col-3 d-flex flex-column">
          <span>Half-Term Exclusion Date(s)</span>
          <span>
            <span class="text-muted">
              {{ cleanDate(term.half_term_date) }}
            </span>
          </span>
        </div>
        <div class="col-1 d-flex justify-content-end flex-row">
          <button
            type="button"
            class="btn btn-outline-secondary me-2 border-0 bg-white"
            @click="toggleShowCard('Edit', term.id)"
          >
            <Icon
              name="ph:pencil-line"
              style="color: black !important; height: 24px; width: 24px"
            />
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary border-0 bg-white"
            @click="
              deleteRestoreTerm(
                term.id,
                !!term.deleted_at ? 'restore' : 'delete',
              )
            "
          >
            <Icon
              :name="!!term.deleted_at ? 'ph:recycle' : 'ph:trash'"
              style="color: black !important; height: 24px; width: 24px"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="card-body bg-gray border-0" v-if="showSessionPlans">
      <template v-for="session in term.sessions">
        <SyncoConfigTermsSessionListItem
          :session-id="session.id"
          :session="session"
          @toggle-assign-session-card="toggleAssignSessionCard"
        ></SyncoConfigTermsSessionListItem>
      </template>
    </div>
    <div class="card-footer bg-gray border-0">
      <div class="d-flex justify-content-center flex-row">
        <a
          type="button"
          class="btn btn-sm btn-outline-primary border-0"
          @click="toggleSessionPlans"
        >
          {{ showSessionPlans ? 'Hide' : 'Show' }} all session plans
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
</style>
