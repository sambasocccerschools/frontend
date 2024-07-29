<template>
  <div class="card" :key="updateKey">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <div class="row" v-if="term != null">
        <div class="col-12 my-1">
          <label for="term-name">Term name</label>
          <input
            id="term-name"
            type="text"
            class="form-control mt-2"
            placeholder="Autumn 23 Saturdays"
            name="term-name"
            v-model="term.name"
          />
        </div>
        <div class="col-12 my-1">
          <div class="form-group w-100 mb-3">
            <label for="seasons" class="form-labelform-label-light"
              >Season</label
            >
            <select
              id="seasons"
              class="form-control form-control-lg"
              v-model="term.season.id"
              @change="seasonChange"
            >
              <option
                v-for="(season, index) in seasons"
                :value="season.id"
                :key="index"
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
        <div class="col-6 my-1">
          <label for="start-date">Start date</label>
          <input
            id="start-date"
            type="text"
            class="form-control mt-2"
            name="start-date"
            placeholder="yyyy-mm-dd"
            v-model="term.start_date"
          />
        </div>
        <div class="col-6 my-1">
          <label for="end-date">End date</label>
          <input
            id="end-date"
            type="text"
            class="form-control mt-2"
            name="end-date"
            placeholder="yyyy-mm-dd"
            v-model="term.end_date"
          />
        </div>
        <div class="col-6 my-1">
          <label for="half-term-exclusion-date">
            Half-Term Exclusion Date(s)
          </label>
          <input
            id="half-term-exclusion-date"
            type="text"
            class="form-control mt-2"
            name="half-term-exclusion-date"
            placeholder="yyyy-mm-dd"
            v-model="term.half_term_date"
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
              <template v-for="item in term?.sessions">
                <SyncoConfigTermsMapSessionCard
                  :item="null"
                  :session-item="item"
                  :session-id="item.id"
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
// import type { ITermCard, ITermItem } from '~/types/index'
import { useToast } from 'vue-toast-notification'
import type {
  ITermItem,
  ITermCreateItem,
  // ISessionCreateItem,
  ITermEditItem,
  ISeasonItem,
  IAbilityGroupObject,
  IAbilityGroupItem,
  IPlanItem,
} from '~/types/synco/index'

const props = defineProps<{
  term: ITermItem | null
  sessions: ITermCreateItem | ITermEditItem | null
}>()

const { $api } = useNuxtApp()
const toast = useToast()
let updateKey = ref<number>(0)

let term = ref<ITermItem | null>(props.term).value
let sessions = ref<ITermCreateItem | ITermEditItem | null>(props.sessions).value

let seasons = ref<ISeasonItem[]>([])

// let termItem = ref<ISessionCreateItem>({
//   plans: [],
// }).value

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
  getSeasons()
  if (!!term) {
    term.start_date = cleanDate(term?.start_date)
    term.end_date = cleanDate(term?.end_date)
    term.half_term_date = cleanDate(term?.half_term_date)
  }
  getAbilityGroups()
})
const cleanDate = (date: string) => {
  let cleanedDate = date
  if (date.includes('T')) {
    cleanedDate = date.split('T')[0]
  }
  return cleanedDate
}

const getSeasons = async () => {
  try {
    const seasonsResponse = await $api.datasets.getSeasons()
    seasons.value = seasonsResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
  }
}

const addNewSession = () => {
  let groups: IAbilityGroupItem[] = []
  abilityGroups.value.forEach((x) => {
    groups.push({
      id: x.id,
      name: x.name,
    })
  })
  let plans: IPlanItem[] = []
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

let abilityGroups = ref<IAbilityGroupObject[]>([])
const getAbilityGroups = async () => {
  try {
    const abilityGroupsResponse = await $api.abilityGroups.getAll(
      'weekly-classes',
      null,
    )
    abilityGroups.value = abilityGroupsResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
  }
}

const removeSession = (sessionId: number) => {
  let sessionToRemove = term?.sessions.find((x) => x.id == sessionId)
  if (!!sessionToRemove && !!term) {
    let session = term?.sessions?.filter(
      (x) => JSON.stringify(x) != JSON.stringify(sessionToRemove),
    )
    term.sessions = session
    updateKey.value--
  }
}

const seasonChange = (event: any) => {
  let id = event?.target.value
  if (!!id && !!term) {
    let season = seasons.value.find((x) => x.id == id)
    if (!!season) {
      term.season = {
        created_at: season.created_at,
        deleted_at: season.deleted_at,
        id: season.id,
        title: season.title,
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
