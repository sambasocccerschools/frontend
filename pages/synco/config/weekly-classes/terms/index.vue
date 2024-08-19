<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import type { ITermCard, ITermItem, ITermHeader } from '~/types/index'
import { useToast } from 'vue-toast-notification'
import type {
  ITermItem,
  ITermCreateItem,
  ITermEditItem,
  ISessionEditItem,
  ISessionItem,
  IPlanItem,
  IPlanEditItem,
} from '~/types/synco/index'
import { generalStore } from '~/stores'
const store = generalStore()

const updateKey = ref<number>(0)
const { $api } = useNuxtApp()
const blockButtons = ref(false)
const toast = useToast()
let terms = ref<ITermItem[]>([])
let selectedTerm = ref<ITermItem | null>(null)
let selectedTermId = ref<number | null>(null)
let seasons = store.seasons
let emptyTermItem = ref<ITermCreateItem>({
  name: '',
  season_id: 0,
  start_date: '',
  end_date: '',
  half_term_date: '',
  sessions: [],
})
let newEditTermItem = ref<ITermCreateItem | ITermEditItem>({
  name: '',
  season_id: 0,
  start_date: '',
  end_date: '',
  half_term_date: '',
  sessions: [],
})
let showModal = ref<boolean>(false)

let title = ref<string>('Create new').value

const toggleCreateEdit = async (item: ITermItem | null) => {
  console.log(item)
  showModal.value = !showModal.value
  if (!!item) {
    title = 'Edit'
    selectedTermId.value = item.id
    selectedTerm.value = item
    let sessions: ISessionEditItem[] = item.sessions?.map((x: ISessionItem) => {
      let plans = x.plans.map((y: IPlanItem) => {
        return {
          id: y.id,
          ability_group_id: y.ability_group.id,
          session_plan_id: y.session_plan.id,
        }
      })
      return {
        id: x.id,
        plans: plans,
      }
    })
    newEditTermItem = JSON.parse(
      JSON.stringify({
        name: item.name,
        season_id: item.season?.id,
        start_date: item.start_date,
        end_date: item.end_date,
        half_term_date: item.half_term_date,
        sessions: sessions,
      }),
    )
  } else {
    title = 'Create new'
    selectedTermId.value = null
    newEditTermItem = JSON.parse(JSON.stringify(emptyTermItem.value))
  }
  // if (item == true) {
  //   updateKey.value++
  //   await getTerms()
  // }
}

onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/terms/index.vue')
  await getTerms()
  if (store.seasons.length == 0) await store.getSeasons()
  // await store.getAbilityGroups('weekly-classes')
})

const getTerms = async (limit: number = 25) => {
  try {
    const termResponse = await $api.terms.getAll(limit)
    console.log(termResponse)
    terms.value = termResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    blockButtons.value = false
    updateKey.value++
  }
}

const deleteTerm = async (id: number) => {
  try {
    blockButtons.value = true
    const deleteResponse = await $api.terms.delete(id)
    toast.success(deleteResponse?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    await getTerms()
    blockButtons.value = false
    updateKey.value++
  }
}
const restoreTerm = async (id: number) => {
  try {
    blockButtons.value = true
    const restoreResponse = await $api.terms.restore(id)
    toast.success(restoreResponse?.message)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    await getTerms()
    blockButtons.value = false
    updateKey.value++
  }
}

let showTermCard = ref<boolean>(false)
let newEditState = ref<string>('')

let showAssignSessionCard = ref<boolean>(false)

const toggleShowTermCard = (data: any) => {
  showTermCard.value = !showTermCard.value
  newEditState.value = data.newEditText
  if (data.selected != 0) {
    let term = terms.value.find((x) => x.id == data.selected)
    if (term == null) return
    let sessions = term.sessions.map((x) => {
      let plans = x.plans.map((y) => {
        return {
          id: y.id,
          ability_group_id: y.ability_group.id,
          session_plan_id: y.session_plan.id,
        }
      })
      return {
        id: x.id,
        plans,
      }
    })
    newEditTermItem.value = {
      name: term.name,
      end_date: cleanDate(term.end_date),
      half_term_date: cleanDate(term.half_term_date),
      season_id: term.season.id,
      start_date: cleanDate(term.start_date),
      sessions: sessions,
    }
    selectedTerm.value = term
  } else {
    selectedTerm.value = null
    newEditTermItem.value = JSON.parse(JSON.stringify(emptyTermItem.value))
  }
}

const selectTerm = (termId: number, term: ITermItem) => {
  selectedTermId.value = termId
  selectedTerm.value = term
}
let selectedSessionId = ref<number>(-1)
let selectedPlanId = ref<number>(-1)
let selectedSessionPlanId = ref<number>(-1)
let selectedAbilityId = ref<number>(-1)

const assignSelectedSession = (selected: any) => {
  if (selected != '') {
    selectedPlanId.value = selected?.planId
    selectedAbilityId.value = selected?.abilityId
    selectedSessionPlanId.value = selected?.sessionPlanId
    selectedSessionId.value = selected?.sessionId
  }
  toggleAssignSessionCard()
}

const assignPlan = (selected: any) => {
  if (!selectedTerm.value) return
  let inUseSession = selectedTerm.value.sessions.find(
    (x) => x.id == selectedSessionId.value,
  )
  let sessions = selectedTerm.value.sessions.filter(
    (x) => x.id != selectedSessionId.value,
  )
  let inUsePlan = inUseSession?.plans.find(
    (x) => x.ability_group.id == selectedAbilityId.value,
  )
  let plans = inUseSession?.plans.filter(
    (x) => x.ability_group.id != selectedAbilityId.value,
  )
  if (!!inUsePlan && !!inUseSession) {
    inUsePlan.session_plan.id = selected.id
    inUsePlan.session_plan.title = selected.title
    plans?.push(inUsePlan)
    sessions.push(inUseSession)
    selectedTerm.value.sessions = sessions
  }
  toggleAssignSessionCard()
}
const changePlan = (selected: any) => {
  assignPlan(selected)
  save()
  showAssignSessionCard.value = false
}
const toggleAssignSessionCard = async () => {
  showAssignSessionCard.value = !showAssignSessionCard.value
}

let updateTerm = ref<ITermEditItem | null>(null)
const putTerm = async () => {
  if (selectedTerm.value == null || updateTerm.value == null) return
  try {
    const termResponse = await $api.terms.update(
      selectedTerm.value.id,
      updateTerm.value,
    )
    console.log(termResponse)
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    showTermCard.value = false
    getTerms()
  }
}
const save = () => {
  let currentTerm = selectedTerm.value
  if (currentTerm != null) {
    let sessions = currentTerm.sessions
    let newSessionObject: ISessionEditItem[] = []
    sessions.forEach((session) => {
      return session
    })
    sessions.forEach((x) => {
      let plans: IPlanEditItem[] = []
      x.plans.forEach((plan) => {
        plans.push({
          id: plan.id,
          ability_group_id: plan.ability_group.id,
          session_plan_id: plan.session_plan.id,
        })
      })
      let session: ISessionEditItem = {
        id: x.id,
        plans: plans,
      }
      newSessionObject.push(session)
    })
    updateTerm.value = {
      name: currentTerm.name,
      end_date: cleanDate(currentTerm.end_date),
      half_term_date: cleanDate(currentTerm.half_term_date),
      season_id: currentTerm.season.id,
      start_date: cleanDate(currentTerm.start_date),
      sessions: newSessionObject,
    }
    putTerm()
  } else close()
}
const cleanDate = (date: any) => {
  if (!Number.isInteger(date)) return date
  let cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
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
      <div class="card rounded-4" :key="updateKey">
        <div v-for="term in terms" @click="selectTerm(term.id, term)">
          <SyncoConfigTermsSessionCard
            :term="term"
            :sessions="newEditTermItem"
            @toggle-show-card="toggleShowTermCard"
            @toggle-assign-session-card="assignSelectedSession"
            @delete-term="deleteTerm"
            @restore-term="restoreTerm"
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
              :term="selectedTerm"
              :sessions="newEditTermItem"
              @assign-selected-session="assignSelectedSession"
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
                  <button class="btn btn-primary text-light" @click="save">
                    Save
                  </button>
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
              :term="selectedTerm"
              :plan-id="selectedPlanId"
              :session-plan-id="selectedSessionPlanId"
              :session-id="selectedSessionId"
              :ability-id="selectedAbilityId"
              @toggle-assign-session-card="assignSelectedSession"
              @assign-plan="changePlan"
            ></SyncoConfigTermsSessionPlanCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
