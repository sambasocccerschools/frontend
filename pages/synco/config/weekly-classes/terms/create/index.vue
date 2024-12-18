<!-- <script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  ITermItem,
  ITermCreateItem,
  ISessionCreateItem,
  IPlanCreateItem,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const blockButtons = ref(false)
const toast = useToast()

const showAssignSessionCard = ref<boolean>(false)
const term = ref<ITermItem>({
  id: 0,
  created_at: null,
  deleted_at: null,
  end_date: '',
  half_term_date: '',
  name: '',
  season: {
    code: '',
    id: 0,
    title: '',
    created_date: null,
    father_code: null,
    is_deleted: false,
    slug: '',
    title_es: '',
    updated_date: null,
    user_updated_id: null,
    value1: null,
    value2: null,
    type: '',
  },
  start_date: '',
  sessions: [],
})
const emptyTermItem = ref<ITermCreateItem>({
  name: '',
  season_code: '',
  start_date: '',
  end_date: '',
  half_term_date: '',
  sessions: [],
})

const selectedSessionId = ref<number>(-1)
const selectedPlanId = ref<number>(-1)
const selectedSessionPlanId = ref<number>(-1)
const selectedAbilityId = ref<number>(-1)

const assignSelectedSession = (selected: any) => {
  if (selected != '') {
    // getTerms()
    selectedPlanId.value = selected?.planId
    selectedAbilityId.value = selected?.abilityId
    selectedSessionPlanId.value = selected?.sessionPlanId
    selectedSessionId.value = selected?.sessionId
  }
  toggleAssignSessionCard()
}

const assignPlan = (selected: any) => {
  if (!term.value) return
  const inUseSession = term.value.sessions.find(
    (x) => x.id == selectedSessionId.value,
  )
  const sessions = term.value.sessions.filter(
    (x) => x.id != selectedSessionId.value,
  )
  const inUsePlan = inUseSession?.plans.find(
    (x) => x.ability_group.id == selectedAbilityId.value,
  )
  const plans = inUseSession?.plans.filter(
    (x) => x.ability_group.id != selectedAbilityId.value,
  )
  if (!!inUsePlan && !!inUseSession) {
    inUsePlan.session_plan.id = selected.id
    inUsePlan.session_plan.title = selected.title
    plans?.push(inUsePlan)
    sessions.push(inUseSession)
    term.value.sessions = sessions
  }
  toggleAssignSessionCard()
}

const toggleAssignSessionCard = async () => {
  showAssignSessionCard.value = !showAssignSessionCard.value
}

onMounted(() => {
  console.log('pages/synco/config/weekly-classes/terms/create/index.vue')
})

const createTerm = ref<ITermCreateItem | null>(null)
const postTerm = async () => {
  if (term.value == null || createTerm.value == null) return
  try {
    console.log('createTerm.value', createTerm.value)
    await $api.terms.createNew(createTerm.value)
    await router.push({ path: `/synco/config/weekly-classes/terms` })
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  }
}
const save = () => {
  const currentTerm = term.value
  if (currentTerm != null) {
    const sessions = currentTerm.sessions
    const newSessionObject: ISessionCreateItem[] = []
    sessions.forEach((session) => {
      return session
    })
    sessions.forEach((x) => {
      const plans: IPlanCreateItem[] = []
      x.plans.forEach((plan) => {
        plans.push({
          ability_group_id: plan.ability_group.id,
          session_plan_id: plan.session_plan.id,
        })
      })
      const session: ISessionCreateItem = {
        plans: plans,
      }
      newSessionObject.push(session)
    })

    console.log('currentTerm', currentTerm)
    createTerm.value = {
      name: currentTerm.name,
      start_date: currentTerm.start_date,
      end_date: currentTerm.end_date,
      half_term_date: currentTerm.half_term_date,
      season_code: currentTerm.season.code,
      sessions: newSessionObject,
    }
    postTerm()
  } else close()
}
const restartTerm = () => {
  createTerm.value = JSON.parse(JSON.stringify(emptyTermItem.value))
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Create Term">
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
            :sessions="emptyTermItem"
            @assign-selected-session="assignSelectedSession"
          ></SyncoConfigTermsTermCard>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-3"></div>
        <div class="col-3">
          <button
            class="btn btn-outline-secondary w-100"
            :disabled="blockButtons"
            @click="restartTerm"
          >
            Cancel
          </button>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary text-light w-100"
            :disabled="blockButtons"
            @click="save"
          >
            Add term
          </button>
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
              :plan-id="selectedPlanId"
              :session-plan-id="selectedSessionPlanId"
              :session-id="selectedSessionId"
              :ability-id="selectedAbilityId"
              @toggle-assign-session-card="assignSelectedSession"
              @assign-plan="assignPlan"
            ></SyncoConfigTermsSessionPlanCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template> -->
<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  ITermItem,
  ITermCreateItem,
  ISessionCreateItem,
  IPlanCreateItem,
} from '~/types/synco/index'

const router = useRouter()
const { $api } = useNuxtApp()
const blockButtons = ref(false)
const toast = useToast()

const showAssignSessionCard = ref<boolean>(false)
const term = ref<ITermItem>({
  id: 0,
  created_at: null,
  deleted_at: null,
  end_date: '',
  half_term_date: '',
  name: '',
  season: {
    code: '',
    id: 0,
    title: '',
    created_date: null,
    father_code: null,
    is_deleted: false,
    slug: '',
    title_es: '',
    updated_date: null,
    user_updated_id: null,
    value1: null,
    value2: null,
    type: '',
  },
  start_date: '',
  sessions: [],
})
const emptyTermItem = ref<ITermCreateItem>({
  name: '',
  season_code: '',
  start_date: '',
  end_date: '',
  half_term_date: '',
  sessions: [],
  franchise_id: 0,
})

const selectedSessionId = ref<number>(-1)
const selectedPlanId = ref<number>(-1)
const selectedSessionPlanId = ref<number>(-1)
const selectedAbilityId = ref<number>(-1)

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
  if (!term.value) return
  const inUseSession = term.value.sessions.find(
    (x) => x.id == selectedSessionId.value,
  )
  const sessions = term.value.sessions.filter(
    (x) => x.id != selectedSessionId.value,
  )
  const inUsePlan = inUseSession?.plans.find(
    (x) => x.ability_group.id == selectedAbilityId.value,
  )
  const plans = inUseSession?.plans.filter(
    (x) => x.ability_group.id != selectedAbilityId.value,
  )
  if (!!inUsePlan && !!inUseSession) {
    inUsePlan.session_plan.id = selected.id
    inUsePlan.session_plan.title = selected.title
    plans?.push(inUsePlan)
    sessions.push(inUseSession)
    term.value.sessions = sessions
  }
  toggleAssignSessionCard()
}

const toggleAssignSessionCard = async () => {
  showAssignSessionCard.value = !showAssignSessionCard.value
}

onMounted(() => {
  console.log('pages/synco/config/weekly-classes/terms/create/index.vue')
})

const createTerm = ref<ITermCreateItem | null>(null)
const postTerm = async () => {
  if (term.value == null || createTerm.value == null) return
  try {
    await $api.terms.createNew(createTerm.value)
    await router.push({ path: `/synco/config/weekly-classes/terms` })
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  }
}

const save = () => {
  const currentTerm = term.value
  if (currentTerm != null) {
    const sessions = currentTerm.sessions
    const newSessionObject: ISessionCreateItem[] = []
    sessions.forEach((x) => {
      const plans: IPlanCreateItem[] = []
      x.plans.forEach((plan) => {
        plans.push({
          ability_group: plan.ability_group.id,
          session_plan: plan.session_plan.id,
        })
      })
      const session: ISessionCreateItem = {
        plans: plans,
      }
      newSessionObject.push(session)
    })

    createTerm.value = {
      name: currentTerm.name,
      start_date: currentTerm.start_date,
      end_date: currentTerm.end_date,
      half_term_date: currentTerm.half_term_date,
      season_code: currentTerm.season.code,
      franchise_id: 222,
      sessions: newSessionObject,
    }
    postTerm()
  } else close()
}

const restartTerm = () => {
  createTerm.value = JSON.parse(JSON.stringify(emptyTermItem.value))
}
</script>

<template>
  <NuxtLayout name="syncolayout" page-title="Create Term">
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
            :sessions="emptyTermItem"
            @assign-selected-session="assignSelectedSession"
          ></SyncoConfigTermsTermCard>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row mb-4 pb-4">
        <div class="col-3"></div>
        <div class="col-3">
          <button
            class="btn btn-outline-secondary w-100"
            :disabled="blockButtons"
            @click="restartTerm"
          >
            Cancel
          </button>
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary text-light w-100"
            :disabled="blockButtons"
            @click="save"
          >
            Add term
          </button>
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
              :plan-id="selectedPlanId"
              :session-plan-id="selectedSessionPlanId"
              :session-id="selectedSessionId"
              :ability-id="selectedAbilityId"
              @toggle-assign-session-card="assignSelectedSession"
              @assign-plan="assignPlan"
            ></SyncoConfigTermsSessionPlanCard>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
