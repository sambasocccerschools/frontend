<template>
  <div class="d-flex justify-content-between flex-row">
    <div class="">
      <span class="text-sm">Session {{ session?.id }}</span>
    </div>
    <div class="" v-for="plan in session?.plans">
      <span class="text-sm">
        <span class="text-muted">{{ plan.ability_group.name }}: </span>
        <span>{{ plan.session_plan.title }}</span>
        <a
          type="button"
          class="btn btn-outline-primary border-0"
          @click="toggleAssignSessionCard(plan)"
        >
          Change
        </a></span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ISessionItem, IPlanItem } from '~/types/synco/index'

const props = defineProps<{
  session: ISessionItem | null
  sessionId: number
}>()

let session = ref<ISessionItem | null>(props.session).value
let sessionId = ref<number>(props.sessionId).value

const emit = defineEmits(['toggleAssignSessionCard'])

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
  console.log('components/synco/config/terms/session-list-item.vue')
})
</script>
<style scoped>
.text-sm,
.text-sm > a {
  font-size: 0.6rem;
}
</style>
