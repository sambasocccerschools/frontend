<script setup lang="ts">
import { ref } from 'vue'
import type { ITermCard } from '~/types/index'

const props = defineProps<{
  term: ITermCard
}>()

let showSessionPlans = ref<boolean>(false)
let term = ref<ITermCard>(props.term).value

const toggleSessionPlans = () => {
  showSessionPlans.value = !showSessionPlans.value
}

const emit = defineEmits(['toggleAssignSessionCard', 'toggleShowCard'])

const toggleAssignSessionCard = (selected: string) => {
  emit('toggleAssignSessionCard', selected)
}
const toggleShowCard = (newEditText: string) => {
  emit('toggleShowCard', newEditText)
}
</script>
<template>
  <div class="card rounded-4 m-2 border">
    <div class="card-header">
      <SyncoConfigTermsSessionHeaderItem
        :header="term.Header"
        @toggle-show-card="toggleShowCard"
      ></SyncoConfigTermsSessionHeaderItem>
    </div>
    <div class="card-body bg-gray border-0" v-if="showSessionPlans">
      <template v-for="item in term.Items">
        <SyncoConfigTermsSessionListItem
          :item="item"
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
