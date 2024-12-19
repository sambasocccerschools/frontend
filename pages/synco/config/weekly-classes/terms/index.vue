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
const terms = ref<any[]>([])
const selectedTerm = ref<any | null>(null)
const selectedTermId = ref<number | null>(null)
const seasons = store.seasons
const emptyTermItem = ref<any>({
  name: '',
  season_id: 0,
  start_date: '',
  end_date: '',
  half_term_date: '',
  sessions: [],
})
const newEditTermItem = ref<any>({
  name: '',
  season_id: 0,
  start_date: '',
  end_date: '',
  half_term_date: '',
  sessions: [],
})
const showModal = ref<boolean>(false)

let title = ref<string>('Create new').value

const toggleCreateEdit = async (item: ITermItem | null) => {
  showModal.value = !showModal.value
  if (item) {
    title = 'Edit'
    selectedTermId.value = item.id
    selectedTerm.value = item
    const sessions: ISessionEditItem[] = item.sessions?.map(
      (x: ISessionItem) => {
        const plans = x.plans.map((y: IPlanItem) => {
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
      },
    )
    newEditTermItem.value = JSON.parse(
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
    newEditTermItem.value = JSON.parse(JSON.stringify(emptyTermItem.value))
  }
  // if (item == true) {
  //   updateKey.value++
  //   await getTerms()
  // }
}

onMounted(async () => {
  console.log('pages/synco/config/weekly-classes/terms/index.vue')
  await getTerms()
  if (!store.seasons.length) {
    await store.fetchDatasetDataByType('SEASONS')
  }
})

const getTerms = async (limit: number = 25) => {
  try {
    const termResponse = await $api.terms.getAll(limit)
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

const showTermCard = ref<boolean>(false)
const newEditState = ref<string>('')

const showAssignSessionCard = ref<boolean>(false)

const toggleShowTermCard = (data: any) => {
  showTermCard.value = !showTermCard.value
  newEditState.value = data.newEditText
  if (data.selected != 0) {
    const term = terms.value.find((x) => x.id == Number(data.selected))
    if (term == null) return
    const sessions = term?.sessions?.map((x: any) => {
      const plans = x.termSessionPlans.map((y: any) => {
        return {
          id: y.id,
          ability_group: y.ability_group.id,
          session_plan: y.session_plan.id,
        }
      })
      return {
        id: Number(x.id),
        plans,
      }
    })

    newEditTermItem.value = {
      name: term.name,
      end_date: cleanDate(term.end_date),
      half_term_date: cleanDate(term.half_term_date),
      season_code: term.season.code,
      start_date: cleanDate(term.start_date),
      sessions: sessions.map((session: any) => ({
        id: session.id,
        plans: session.plans.map((plan: any) => ({
          id: Number(plan.id),
          ability_group: plan.ability_group,
          session_plan: plan.session_plan,
        })),
      })),
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
const selectedSessionId = ref<number>(-1)
const selectedPlanId = ref<number>(-1)
const selectedSessionPlanId = ref<number>(-1)
const selectedAbilityId = ref<number>(-1)

const assignSelectedSession = (selected: any) => {
  if (selected != '') {
    selectedPlanId.value = selected?.planId
    selectedAbilityId.value = Number(selected?.abilityId)
    selectedSessionPlanId.value = selected?.sessionPlanId
    selectedSessionId.value = Number(selected?.sessionId)
  }
  toggleAssignSessionCard()
}

const assignPlan = (selected: any) => {
  if (!selectedTerm.value) return
  const inUseSession = selectedTerm.value.sessions.find(
    (x: any) => x.id == selectedSessionId.value,
  )
  const sessions = selectedTerm.value.sessions.filter(
    (x: any) => x.id != selectedSessionId.value,
  )
  const inUsePlan = inUseSession?.plans.find(
    (x: any) => x.ability_group.id == selectedAbilityId.value,
  )
  const plans = inUseSession?.plans.filter(
    (x: any) => x.ability_group.id != selectedAbilityId.value,
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

const updateTerm = ref<ITermEditItem | null>(null)
const putTerm = async () => {
  if (selectedTerm.value == null || updateTerm.value == null) return
  try {
    const termResponse = await $api.terms.updateNew(
      selectedTerm.value.id,
      updateTerm.value,
    )
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  } finally {
    showTermCard.value = false
    getTerms()
  }
}
const save = () => {
  const currentTerm = selectedTerm.value
  if (currentTerm != null) {
    const sessions = currentTerm.sessions
    const newSessionObject: ISessionEditItem[] = []
    sessions.forEach((session: any) => {
      return session
    })

    sessions?.forEach((x: any) => {
      const plans: any[] = []
      x.termSessionPlans?.forEach((plan: any) => {
        plans.push({
          // id: Number(plan.id),
          ability_group: Number(plan.ability_group.id),
          session_plan: Number(plan.session_plan.id),
        })
      })
      const session: ISessionEditItem = {
        id: Number(x.id),
        plans: plans,
      }
      newSessionObject.push(session)
    })

    updateTerm.value = {
      name: currentTerm.name,
      end_date: cleanDate(currentTerm.end_date),
      half_term_date: cleanDate(currentTerm.half_term_date),
      season_code: currentTerm.season.code,
      start_date: cleanDate(currentTerm.start_date),
      sessions: newSessionObject,
    }
    if (!showTermCard.value) putTerm()
  } else close()
}

const buttonSave = () => {
  showTermCard.value = !showTermCard.value
  save()
}

const cleanDate = (date: any) => {
  if (!Number.isInteger(date)) return date
  const cleanedDate = new Date(+date * 1000).toISOString()?.split('T')[0]
  return cleanedDate
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Terms">
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
      <div :key="updateKey" class="card rounded-4">
        <div
          v-for="term in terms"
          :key="term.id"
          @click="selectTerm(term.id, term)"
        >
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
              <template #header>
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
              <template #footer>
                <div class="d-flex justify-content-end flex-row">
                  <button
                    class="btn btn-outline-secondary me-2"
                    @click="toggleShowTermCard"
                  >
                    Cancel
                  </button>
                  <button
                    class="btn btn-primary text-light"
                    @click="buttonSave"
                  >
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
              :session-id="Number(selectedSessionId)"
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
