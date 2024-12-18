<template>
  <div class="align-items-center d-flex flex-row gap-3 text-sm">
    <div class="">
      <span>Session {{ session?.id }}</span>
    </div>
    <div
      v-for="plan in session?.termSessionPlans"
      :key="plan.id"
      class="align-items-center d-flex flex-row gap-3 text-sm"
    >
      <!-- <span class="align-items-center flex-row flex-row gap-3 text-sm"> -->
      <span class="text-muted">{{ plan.ability_group.name }}: </span>
      <span>{{ plan.session_plan.title }}</span>
      <a
        type="button"
        class="btn btn-outline-primary border-0 p-0"
        @click="toggleAssignSessionCard(plan)"
      >
        Change
      </a>
      <!-- </span
      > -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { IPlanItem } from '~/types/synco/index'

const props = defineProps<{
  session: any | null
  sessionId: string | number
}>()

const session = ref<any | null>(props.session).value
const sessionId = ref<string | number>(props.sessionId).value

const emit = defineEmits(['toggleAssignSessionCard'])

const toggleAssignSessionCard = (plan: IPlanItem) => {
  emit('toggleAssignSessionCard', {
    selected: '+',
    sessionId,
    planId: Number(plan.id),
    abilityId: Number(plan.ability_group.id),
    sessionPlanId: Number(plan.session_plan.id),
  })
}
onMounted(() => {
  console.log('components/synco/config/terms/session-list-item.vue')
})
</script>
<style scoped>
.text-sm,
.text-sm > a {
  font-size: 0.6rem;
}
</style>
