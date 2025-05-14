<template>
  <div class="card my-2 border">
    <div class="card-header px-3 py-1">
      <div class="d-flex justify-content-between flex-row">
        <span>Session {{ sessionId }}</span>
        <a
          type="button"
          class="btn btn-sm btn-outline-danger border-0"
          @click="removeSession"
        >
          Remove
        </a>
      </div>
    </div>
    <div class="card-body px-3 py-1 text-sm">
      <div v-for="plan in sessionItem?.plans" :key="plan.id" class="row">
        <div class="col-3 text-muted">{{ plan.ability_group.name }}</div>
        <div class="col-9">
          {{ plan.session_plan.title }}
          <a
            type="button"
            class="btn btn-sm btn-outline-primary border-0"
            @click="toggleAssignSessionCard(plan)"
          >
            <span v-if="plan.session_plan.id != 0">Change Session</span>
            <span v-else>Assign Session Plan</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type {
  ISessionEditItem,
  ISessionCreateItem,
  ISessionItem,
  IPlanItem,
} from '~/types/synco/index'

const props = defineProps<{
  item: ISessionCreateItem | ISessionEditItem | null
  sessionItem: ISessionItem | null
  sessionId: number
}>()

const item = ref<ISessionCreateItem | ISessionEditItem | null>(props.item).value
const sessionItem = ref<ISessionItem | null>(props.sessionItem).value
const sessionId = ref<number>(props.sessionId).value

const emit = defineEmits(['toggleAssignSessionCard', 'removeSession'])

const toggleAssignSessionCard = (plan: IPlanItem) => {
  emit('toggleAssignSessionCard', {
    selected: '+',
    sessionId,
    planId: plan.id,
    abilityId: plan.ability_group.id,
    sessionPlanId: plan.session_plan.id,
  })
}
onMounted(() => {
  console.log('components/synco/config/terms/map-session-card.vue')
})

const removeSession = () => {
  emit('removeSession', Number(sessionId))
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
