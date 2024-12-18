<template>
  <div :key="updateKey" class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <div v-if="term != null" class="row">
        <div class="col-12 my-1">
          <label for="term-name">Term name</label>
          <input
            id="term-name"
            v-model="term.name"
            type="text"
            class="form-control mt-2"
            placeholder="Autumn 23 Saturdays"
            name="term-name"
          />
        </div>
        <div class="col-12 my-1">
          <div class="form-group w-100 mb-3">
            <label for="seasons" class="form-labelform-label-light"
              >Season</label
            >
            <select
              id="seasons"
              v-model="term.season.id"
              class="form-control form-control-lg"
              @change="seasonChange"
            >
              <option
                v-for="(season, index) in seasons"
                :key="index"
                :value="season.id"
              >
                {{ season.title }}
              </option>
            </select>
          </div>
          <!-- <label for="term">Term</label>
          <input
            id="term"
            type="text"
            class="form-control mt-2"
            placeholder="Autumn"
            name="term"
            v-model="term.season.title"
          /> -->
        </div>
        <div v-if="!Number.isInteger(term.start_date)" class="col-6 my-1">
          <label for="start-date">Start date</label>
          <input
            id="start-date"
            v-model="term.start_date"
            type="date"
            class="form-control mt-2"
            name="start-date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div v-if="!Number.isInteger(term.end_date)" class="col-6 my-1">
          <label for="end-date">End date</label>
          <input
            id="end-date"
            v-model="term.end_date"
            type="date"
            class="form-control mt-2"
            name="end-date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div v-if="!Number.isInteger(term.half_term_date)" class="col-6 my-1">
          <label for="half-term-exclusion-date">
            Half-Term Exclusion Date(s)
          </label>
          <input
            id="half-term-exclusion-date"
            v-model="term.half_term_date"
            type="date"
            class="form-control mt-2"
            name="half-term-exclusion-date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div class="col-6 my-1"></div>
      </div>
      <div class="row mt-2">
        <div class="col-12 my-3">
          <span class="h5"><strong>Map Session Plans</strong></span>
        </div>
        <div class="col-12">
          <div class="card bg-gray">
            <div class="card-header bg-gray border-0">
              <span>
                <strong>
                  {{ term?.name ? term?.name : '{Term name}' }} |
                  {{ term?.season.title ? term?.season.title : '{Seasson}' }}
                  Term |
                  {{
                    sessions != null
                      ? 'Session'
                      : term != null
                        ? term.sessions.length > 1
                          ? `${term.sessions.length + 1} Sessions`
                          : `${term.sessions.length + 1} Session`
                        : ''
                  }}
                </strong>
              </span>
            </div>
            <div
              class="card-body bg-gray border-0"
              style="overflow: scroll; max-height: 35vh"
            >
              <template v-for="item in term?.sessions" :key="item.id">
                <SyncoConfigTermsMapSessionCard
                  :item="null"
                  :session-item="item"
                  :session-id="Number(item.id)"
                  @toggle-assign-session-card="assignSelectedSession"
                  @remove-session="removeSession"
                ></SyncoConfigTermsMapSessionCard>
              </template>
            </div>
            <div class="card-footer bg-gray border-0">
              <a
                type="button"
                class="btn btn-sm btn-outline-primary border-0"
                @click="addNewSession"
              >
                Add new session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type {
  ITermItem,
  ITermCreateItem,
  ITermEditItem,
  IAbilityGroupItem,
  IPlanItem,
} from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const props = defineProps<{
  term: ITermItem | null
  sessions: ITermCreateItem | ITermEditItem | null
}>()

const updateKey = ref<number>(0)

const term = ref<ITermItem | null>(props.term).value
const sessions = ref<ITermCreateItem | ITermEditItem | null>(
  props.sessions,
).value

const seasons = store.seasons
const abilityGroups = store.abilityGroups

const emit = defineEmits([
  'toggleAssignSessionCard',
  'assignSelectedSession',
  'assignPlan',
])

const assignSelectedSession = (selected: any) => {
  emit('assignSelectedSession', selected)
  // emit('toggleAssignSessionCard')
}
// const toggleAssignSessionCard = (selected: any) => {
//   emit('toggleAssignSessionCard', selected)
// }

const assignPlan = (selected: any) => {
  emit('assignPlan', selected)
}
onMounted(async () => {
  console.log('components/synco/config/terms/term-card.vue')
  if (!store.seasons.length) {
    await store.fetchDatasetDataByType('SEASONS')
  }

  if (term) {
    term.start_date = cleanDate(term?.start_date)
    term.end_date = cleanDate(term?.end_date)
    term.half_term_date = cleanDate(term?.half_term_date)
  }

  await store.abilityGroups.filter((i) => i.name == 'Weekly Classes')
})
const cleanDate = (date: any) => {
  if (!Number.isInteger(date)) return date
  const cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
}

const addNewSession = () => {
  const groups: IAbilityGroupItem[] = []
  abilityGroups.forEach((x) => {
    groups.push({
      id: x.id,
      name: x.name,
    })
  })
  const plans: IPlanItem[] = []
  groups?.forEach((x) => {
    plans.push({
      id: 0,
      session_plan: {
        id: 0,
        title: '',
      },
      ability_group: x,
    })
  })
  term?.sessions?.push({
    created_at: null,
    deleted_at: null,
    id: updateKey.value,
    plans: plans,
  })
  updateKey.value--
}

const removeSession = (sessionId: number) => {
  const sessionToRemove = term?.sessions.find((x) => x.id == sessionId)
  if (!!sessionToRemove && !!term) {
    const session = term?.sessions?.filter(
      (x) => JSON.stringify(x) != JSON.stringify(sessionToRemove),
    )
    term.sessions = session
    updateKey.value--
  }
}

const seasonChange = (event: any) => {
  const id = event?.target.value
  if (!!id && !!term) {
    const season = seasons.find((x) => x.id == id)
    if (season) {
      term.season = {
        is_deleted: season.is_deleted,
        id: season.id,
        title: season.title,
        code: season.code,
        created_date: season.created_date,
        father_code: season.father_code,
        slug: season.slug,
        title_es: season.title_es,
        type: season.type,
        updated_date: season.updated_date,
        user_updated_id: season.user_updated_id,
        value1: season.value1,
        value2: season.value2,
      }
    }
  }
}
</script>

<style scoped>
.bg-gray {
  background-color: #f6f6f9;
}
.text-sm {
  font-size: 0.6rem !important;
}
</style>
