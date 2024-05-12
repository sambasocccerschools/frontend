<template>
  <div class="d-flex justify-content-between flex-row">
    <div class="">
      <span class="text-sm">Session {{ term.SessionNumber }}</span>
    </div>
    <div class="">
      <span class="text-sm"
        ><span class="text-muted">Beginners</span> {{ term.Beginner }}
        <a
          type="button"
          class="btn btn-outline-primary border-0"
          @click="toggleAssignSessionCard('Beginners')"
        >
          Change
        </a></span
      >
    </div>
    <div class="">
      <span class="text-sm"
        ><span class="text-muted">Intermediate</span> {{ term.Intermediate }}
        <a
          type="button"
          class="btn btn-outline-primary border-0"
          @click="toggleAssignSessionCard('Intermediate')"
        >
          Change
        </a></span
      >
    </div>
    <div class="">
      <span class="text-sm"
        ><span class="text-muted">Advanced</span> {{ term.Advanced }}
        <a
          type="button"
          class="btn btn-outline-primary border-0"
          @click="toggleAssignSessionCard('Advanced')"
        >
          Change
        </a></span
      >
    </div>
    <div class="">
      <span class="text-sm"
        ><span class="text-muted">Pro</span> {{ term.Pro }}
        <a
          type="button"
          class="btn btn-outline-primary border-0"
          @click="toggleAssignSessionCard('Pro')"
        >
          Change
        </a></span
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ITermItem } from '~/types/index'

const props = defineProps<{
  item: ITermItem
}>()

let term = ref<ITermItem>(props.item).value

const emit = defineEmits(['toggleAssignSessionCard'])

const toggleAssignSessionCard = (selected: string) => {
  emit('toggleAssignSessionCard', selected)
}
</script>
<style scoped>
.text-sm,
.text-sm > a {
  font-size: 0.6rem;
}
</style>
