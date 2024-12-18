<template>
  <div class="card">
    <div class="card-header" style="border-bottom: 1px solid lightgray">
      <div class="row">
        <div class="col-4">
          <button class="btn btn-outline-secondary border-0" @click="close()">
            <Icon name="ph:x" />
          </button>
        </div>
        <div class="col-4 text-center">
          <span class="h4">
            <strong> Assign session plan </strong>
          </span>
        </div>
        <div class="col-4 text-end">
          <NuxtLink
            class="btn btn-outline-primary border-0"
            to="/synco/config/weekly-classes/session-plans/create"
          >
            Create new session plan
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="card-body" style="overflow: scroll; max-height: 80vh">
      <div class="d-flex justify-content-between flex-row">
        <span class="h5">
          <!-- <strong>Age group:  {{ abilityId }} </strong> -->
          <strong v-if="!!abilityGroup">
            Age group:
            {{ `${abilityGroup?.min_age} to ${abilityGroup?.max_age}` }}
          </strong>
        </span>
        <NuxtLink
          class="btn btn-sm btn-outline-primary border-0"
          to="/synco/config/weekly-classes/session-plans"
        >
          See all sessions
        </NuxtLink>
      </div>
      <div
        v-for="sessionPlan in sessionPlans"
        :key="sessionPlan.id"
        class="my-2"
      >
        <div
          class="rounded-2"
          :style="
            selectedSessionPlanId == sessionPlan.id
              ? 'border:1px solid red'
              : ''
          "
          @click="changeSelectedSessionPlan(sessionPlan)"
        >
          <SyncoConfigTermsPlayLikeCard
            :session-plan="sessionPlan"
          ></SyncoConfigTermsPlayLikeCard>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-6">
          <button class="btn btn-outline-secondary w-100" @click="close">
            Cancel
          </button>
        </div>
        <div class="col-6">
          <!-- <button class="btn btn-primary text-light w-100" @click="save"> -->
          <button class="btn btn-primary text-light w-100" @click="assignPlan">
            Assign session plan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import type {
  ISessionPlanObject,
  ITermItem,
  ITermEditItem,
  ISessionEditItem,
  IPlanEditItem,
  IAbilityGroupObject,
  ISessionItem,
} from '~/types/synco/index'

const props = defineProps<{
  term: ITermItem | null
  planId: number
  sessionId: number
  abilityId: number
  sessionPlanId: number
}>()

const { $api } = useNuxtApp()
const toast = useToast()

const currentTerm = ref<ITermItem | null>(props.term)
const updateTerm = ref<ITermEditItem | null>(null)
const planId = ref<number>(props.planId).value
const selectedSessionId = ref<number>(props.sessionId).value
const selectedSessionPlanId = ref<number>(props.sessionPlanId)
const abilityId = ref<number>(props.abilityId).value
const sessionPlans = ref<ISessionPlanObject[]>([])
const abilityGroup = ref<IAbilityGroupObject>()

const emit = defineEmits(['toggleAssignSessionCard', 'assignPlan'])

const close = () => {
  emit('toggleAssignSessionCard', null)
}

const assignPlan = () => {
  const selected = sessionPlans.value.find(
    (x) => x.id == selectedSessionPlanId.value,
  )
  emit('assignPlan', selected)
}
const changeSelectedSessionPlan = (session: ISessionPlanObject) => {
  selectedSessionPlanId.value = session.id
}

onMounted(async () => {
  console.log('components/synco/config/terms/session-plan-card.vue')
  getSessionPlans()
  getAbilityGroup()
})

const getSessionPlans = async () => {
  try {
    const sessionPlansResponse =
      await $api.sessionPlans.getByAbilityGroup(abilityId)
    sessionPlans.value = sessionPlansResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  }
}
const getAbilityGroup = async () => {
  try {
    const abilityGroupsResponse = await $api.abilityGroups.getById(abilityId)
    abilityGroup.value = abilityGroupsResponse?.data
  } catch (error: any) {
    console.log(error)
    toast.error(error?.data?.messages ?? 'Error')
  }
}
</script>
